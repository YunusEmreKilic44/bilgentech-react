const AboutPage = () => {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <span className="inline-flex rounded-full bg-fuchsia-50 px-3 py-1 text-xs font-semibold tracking-wide text-fuchsia-700">
          ABOUT US
        </span>
        <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">Bilgentech</h1>
        <p className="mt-4 max-w-3xl text-slate-600">
          Bilgentech, kullanicilarina sade, hizli ve guvenli bir alisveris deneyimi sunmak
          icin gelistirilen modern bir e-ticaret platformudur. Amacimiz dogru urunu,
          dogru fiyata ve guvenilir bir hizmetle ulastirmaktir.
        </p>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Misyonumuz</h2>
          <p className="mt-2 text-sm text-slate-600">
            Teknolojiyi kullanarak alisverisi herkes icin daha kolay, hizli ve ulasilabilir
            hale getirmek.
          </p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Vizyonumuz</h2>
          <p className="mt-2 text-sm text-slate-600">
            Musteri deneyimi odakli yenilikci cozumlerle dijital ticarette oncu markalardan
            biri olmak.
          </p>
        </article>
      </div>
    </section>
  );
};

export default AboutPage;
