import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import { setAuthError, setCredentials } from "../redux/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../redux/api/fakeStoreApi";

const schema = yup.object({
  username: yup
    .string()
    .min(3, "Kullanıcı adı en az 3 karakter olmalıdır.")
    .max(20, "Kullanıcı adı en fazla 20 karakter olmalıdır.")
    .required("Kullanıcı adı zorunludur."),
  password: yup
    .string()
    .min(6, "Şifre en az 6 karakter olmalıdır.")
    .max(12, "Şifre en fazla 12 karakter olmalıdır.")
    .required("Şifre zorunludur."),
});

const LoginPage = () => {
  const authState = useSelector((state) => state.auth);
  console.log(authState);
  const [login, { isLoading }] = useLoginMutation();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  console.log(errors);

  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      const response = await login(data).unwrap();
      dispatch(setCredentials(response));
    } catch (error) {
      const errorMessage =
        error?.data?.message || "Giris islemi sirasinda hata olustu";

      dispatch(setAuthError(errorMessage));
      toast.error(errorMessage);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10 text-slate-900">
      <div className="mx-auto w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-lg">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Bilgentech
          </p>
          <h1 className="mt-3 text-2xl font-semibold">Giris Yap</h1>
          <p className="mt-2 text-sm text-slate-500">
            Kurumsal hesabinizla platforma erisin.
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label
              htmlFor="username"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Kullanıcı Adı
            </label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="kullaniciadi"
              {...register("username", { required: true })}
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-900 focus:ring-1 focus:ring-slate-900"
            />
            {errors.username && (
              <p className="text-red-500 text-sm">{errors.username.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Sifre
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              {...register("password")}
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-900 focus:ring-1 focus:ring-slate-900"
            />
            {errors.password && (
              <p className="text-red-500 tex-sm">{errors.password.message}</p>
            )}
          </div>

          <label className="flex items-center gap-2 text-sm text-slate-600">
            <input
              type="checkbox"
              name="remember"
              className="h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-900"
            />
            Beni hatirla
          </label>

          <button
            type="submit"
            className="w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            {isLoading ? "Giris yapiliyor..." : "Giris yap"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
