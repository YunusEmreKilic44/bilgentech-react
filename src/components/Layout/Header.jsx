const Header = () => {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center gap-2">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-slate-900" />
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-800">
            Bilgentech
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          <a
            href="/"
            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
          >
            Anasayfa
          </a>
          <a
            href="/products"
            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
          >
            Urunler
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="/login"
            className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
          >
            Giris
          </a>
          <a
            href="/register"
            className="rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            Kayit Ol
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
