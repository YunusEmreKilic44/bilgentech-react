import { NavLink } from "react-router";

const Header = () => {
  const navLinkClass =
    "rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900";
  const loginLinkClass =
    "rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100";
  const registerLinkClass =
    "rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white transition hover:bg-slate-800";

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-2">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-slate-900" />
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-800">
            Bilgentech
          </span>
        </NavLink>

        <nav className="hidden items-center gap-1 md:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${navLinkClass} text-fuchsia-700!` : navLinkClass
            }
          >
            Anasayfa
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? `${navLinkClass} text-fuchsia-700!` : navLinkClass
            }
          >
            Urunler
          </NavLink>
        </nav>

        <div className="flex items-center gap-2">
          <NavLink to="/login" className={loginLinkClass}>
            Giris
          </NavLink>
          <NavLink to="/register" className={registerLinkClass}>
            Kayit Ol
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
