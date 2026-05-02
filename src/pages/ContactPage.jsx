const ContactPage = () => {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid gap-6 md:grid-cols-[1fr_1.2fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h1 className="text-2xl font-bold text-slate-900">Contact</h1>
          <p className="mt-3 text-sm text-slate-600">
            Sorulariniz, onerileriniz veya is birlikleri icin bize her zaman ulasabilirsiniz.
          </p>

          <div className="mt-6 space-y-3 text-sm text-slate-700">
            <p>
              <strong>E-posta:</strong> support@bilgentech.com
            </p>
            <p>
              <strong>Telefon:</strong> +90 212 000 00 00
            </p>
            <p>
              <strong>Adres:</strong> Istanbul, Turkiye
            </p>
          </div>
        </div>

        <form className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Bize Mesaj Gonderin</h2>
          <div className="mt-4 space-y-4">
            <input
              type="text"
              placeholder="Ad Soyad"
              className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none transition focus:border-fuchsia-500"
            />
            <input
              type="email"
              placeholder="E-posta"
              className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none transition focus:border-fuchsia-500"
            />
            <textarea
              rows="5"
              placeholder="Mesajiniz"
              className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none transition focus:border-fuchsia-500"
            />
            <button
              type="button"
              className="w-full rounded-xl bg-slate-900 px-4 py-2 font-medium text-white transition hover:bg-slate-800"
            >
              Gonder
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
