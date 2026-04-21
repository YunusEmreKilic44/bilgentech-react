import Header from "../components/Layout/Header";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10 text-slate-900">
      <Header />
      <div className="mx-auto flex w-full max-w-md flex-col items-center rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-lg">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Bilgentech
        </p>
        <h1 className="mt-4 text-5xl font-bold leading-none text-slate-900">
          404
        </h1>
        <h2 className="mt-3 text-xl font-semibold">Sayfa Bulunamadi</h2>
        <p className="mt-3 text-sm text-slate-500">
          Aradiginiz sayfa tasinmis, silinmis ya da hic var olmamis olabilir.
        </p>

        <a
          href="/"
          className="mt-6 inline-flex rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800"
        >
          Anasayfaya Don
        </a>
      </div>
    </div>
  );
};

export default NotFound;
