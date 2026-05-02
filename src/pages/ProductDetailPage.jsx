const ProductDetailPage = () => {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid gap-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-2">
        <div className="flex items-center justify-center rounded-2xl bg-slate-50 p-8">
          <img
            src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png"
            alt="Product"
            className="max-h-[360px] w-full max-w-[360px] object-contain"
          />
        </div>

        <div className="flex flex-col">
          <span className="inline-flex w-fit rounded-full bg-fuchsia-50 px-3 py-1 text-xs font-semibold text-fuchsia-700">
            Category
          </span>
          <h1 className="mt-4 text-3xl font-bold text-slate-900">
            Sample Product Name
          </h1>
          <p className="mt-2 text-sm text-slate-500">SKU: PRD-0001</p>

          <p className="mt-5 text-slate-600">
            Bu alan urun aciklamasi icin ayrilmistir. Urunun teknik ozellikleri,
            kullanim bilgileri ve dikkat ceken detaylari burada gosterilebilir.
          </p>

          <div className="mt-6 rounded-xl bg-slate-50 p-4">
            <p className="text-sm text-slate-500">Fiyat</p>
            <p className="mt-1 text-3xl font-bold text-slate-900">
              1,299.99 TL
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
