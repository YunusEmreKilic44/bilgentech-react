import { useParams } from "react-router";
import { useGetProductByIdQuery } from "../redux/api/fakeStoreApi";

const ProductDetailSkeleton = () => {
  return (
    <section
      className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8"
      aria-label="Product detail loading"
    >
      <div className="grid gap-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-2">
        <div className="flex min-h-[420px] items-center justify-center rounded-2xl bg-slate-50 p-8">
          <div className="h-72 w-full max-w-[300px] animate-pulse rounded-2xl bg-slate-200" />
        </div>

        <div className="flex animate-pulse flex-col">
          <div className="h-6 w-28 rounded-full bg-fuchsia-100" />
          <div className="mt-4 space-y-3">
            <div className="h-8 w-full rounded-lg bg-slate-200" />
            <div className="h-8 w-3/4 rounded-lg bg-slate-200" />
          </div>
          <div className="mt-3 h-4 w-32 rounded bg-slate-200" />

          <div className="mt-6 space-y-3">
            <div className="h-4 w-full rounded bg-slate-200" />
            <div className="h-4 w-11/12 rounded bg-slate-200" />
            <div className="h-4 w-5/6 rounded bg-slate-200" />
            <div className="h-4 w-2/3 rounded bg-slate-200" />
          </div>

          <div className="mt-6 rounded-xl bg-slate-50 p-4">
            <div className="h-4 w-16 rounded bg-slate-200" />
            <div className="mt-3 h-9 w-36 rounded-lg bg-slate-200" />
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <div className="h-10 w-28 rounded-xl bg-slate-300" />
            <div className="h-10 w-36 rounded-xl bg-slate-200" />
          </div>
        </div>
      </div>
    </section>
  );
};

const ProductDetailPage = () => {
  const { productId } = useParams();
  const { data: product, error, isLoading } = useGetProductByIdQuery(productId);

  if (error) {
    return (
      <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-red-100 bg-red-50 p-6 text-red-700">
          Urun detayi yuklenirken hata olustu
        </div>
      </section>
    );
  }

  if (isLoading || !product) {
    return <ProductDetailSkeleton />;
  }

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid gap-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-2">
        <div className="flex items-center justify-center rounded-2xl bg-slate-50 p-8">
          <img
            src={
              product?.image
                ? product.image
                : "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png"
            }
            alt="Product"
            className="max-h-[360px] w-full max-w-[360px] object-contain"
          />
        </div>

        <div className="flex flex-col">
          <span className="inline-flex w-fit rounded-full bg-fuchsia-50 px-3 py-1 text-xs font-semibold text-fuchsia-700">
            {product?.category ? product.category : "Category"}
          </span>
          <h1 className="mt-4 text-3xl font-bold text-slate-900">
            {product?.title ? product.title : "Sample Product Name"}
          </h1>
          <p className="mt-2 text-sm text-slate-500">SKU: PRD-0001</p>

          <p className="mt-5 text-slate-600">
            {product?.description
              ? product.description
              : "Bu alan urun aciklamasi icin ayrilmistir. Urunun teknik ozellikleri, kullanim bilgileri ve dikkat ceken detaylari burada gosterilebilir."}
          </p>

          <div className="mt-6 rounded-xl bg-slate-50 p-4">
            <p className="text-sm text-slate-500">Fiyat</p>
            <p className="mt-1 text-3xl font-bold text-slate-900">
              {product?.price ? product.price : "1,299.99 TL"}
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Sepete Ekle
            </button>
            <button
              type="button"
              className="rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              Favorilere Ekle
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailPage;
