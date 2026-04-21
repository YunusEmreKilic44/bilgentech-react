import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  fullName: yup
    .string()
    .min(3, "Ad Soyad en az 3 karakter olmalidir.")
    .required("Ad Soyad zorunludur."),
  email: yup
    .string()
    .email("Gecerli e-posta adresi giriniz!")
    .required("E-posta adresi zorunludur."),
  password: yup
    .string()
    .min(6, "Sifre en az 6 karakter olmalidir.")
    .max(12, "Sifre en fazla 12 karakter olmalidir.")
    .required("Sifre zorunludur."),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Sifreler eslesmiyor.")
    .required("Sifre tekrari zorunludur."),
  accepted: yup
    .boolean()
    .oneOf([true], "Devam etmek icin kosullari kabul etmelisiniz."),
});

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10 text-slate-900">
      <div className="mx-auto w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-lg">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Bilgentech
          </p>
          <h1 className="mt-3 text-2xl font-semibold">Kayit Ol</h1>
          <p className="mt-2 text-sm text-slate-500">
            Kurumsal platform hesabinizi olusturun.
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label
              htmlFor="fullName"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Ad Soyad
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              {...register("fullName")}
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-900 focus:ring-1 focus:ring-slate-900"
            />
            {errors.fullName && (
              <p className="text-sm text-red-500">{errors.fullName.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
              E-posta
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="ornek@firma.com"
              {...register("email")}
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-900 focus:ring-1 focus:ring-slate-900"
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
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
              {...register("password")}
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-900 focus:ring-1 focus:ring-slate-900"
            />
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Sifre Tekrari
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              {...register("confirmPassword")}
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-900 focus:ring-1 focus:ring-slate-900"
            />
            {errors.confirmPassword && (
              <p className="text-sm text-red-500">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <label className="flex items-start gap-2 text-sm text-slate-600">
            <input
              type="checkbox"
              name="accepted"
              {...register("accepted")}
              className="mt-1 h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-900"
            />
            Kullanim kosullarini kabul ediyorum.
          </label>
          {errors.accepted && (
            <p className="text-sm text-red-500">{errors.accepted.message}</p>
          )}

          <button
            type="submit"
            className="w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            Kayit Ol
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
