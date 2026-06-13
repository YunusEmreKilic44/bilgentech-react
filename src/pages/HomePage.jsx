import { Link } from "react-router";
import {
  ArrowRight,
  BadgeCheck,
  Headphones,
  PackageSearch,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";
import Counter from "../components/Counter";
import MyButton from "../components/PerformanceOptimization/MyButton";
import MyElement from "../components/PerformanceOptimization/MyElement";
import { useCallback, useState } from "react";

const categories = [
  {
    name: "Electronics",
    count: "124 urun",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
  },
  {
    name: "Jewelery",
    count: "86 urun",
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
  },
  {
    name: "Men's clothing",
    count: "212 urun",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  },
  {
    name: "Bags",
    count: "48 urun",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  },
];

const featuredProducts = [
  {
    id: 1,
    title: "Fjallraven Backpack",
    category: "Gunluk kullanim",
    price: "109.95",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    category: "Sezon urunu",
    price: "55.99",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  },
  {
    id: 5,
    title: "John Hardy Bracelet",
    category: "Jewelery",
    price: "695",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
  },
];

const benefits = [
  {
    title: "Hizli teslimat",
    description: "Secili urunlerde ayni gun kargo hazirligi.",
    icon: Truck,
  },
  {
    title: "Guvenli odeme",
    description: "Siparis ve odeme akisinda korumali alisveris.",
    icon: ShieldCheck,
  },
  {
    title: "Canli destek",
    description: "Urun secimi ve siparisler icin destek ekibi.",
    icon: Headphones,
  },
];

const HomePage = () => {
  const [toggleParagraph, setToggleParagraph] = useState(false);

  const handleToggleParagraph = useCallback(() => {
    setToggleParagraph((prev) => !prev);
  }, []);
  return (
    <div className="-mx-4 -my-4 bg-slate-100">
      <MyElement show={false} />
      <MyButton onClick={handleToggleParagraph}>Tıkla</MyButton>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid min-h-[520px] w-full max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-sm font-semibold text-fuchsia-100">
              <Sparkles size={16} />
              Yeni sezon secimleri yayinda
            </span>
            <h1 className="mt-5 max-w-2xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Bilgentech
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
              Elektronikten giyime, gunluk ihtiyaclarini hizli bulabilecegin
              sade ve kullanisli alisveris deneyimi.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
              >
                Urunleri Kesfet
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/cart"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Sepeti Gor
              </Link>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                <p className="text-2xl font-bold">470+</p>
                <p className="mt-1 text-xs text-slate-300">Aktif urun</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                <p className="text-2xl font-bold">24 sa</p>
                <p className="mt-1 text-xs text-slate-300">Kargo hazirligi</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                <p className="text-2xl font-bold">4.8</p>
                <p className="mt-1 text-xs text-slate-300">Musteri puani</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative h-[420px] w-full max-w-[480px]">
              <img
                src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                alt="Fjallraven Backpack"
                className="absolute left-4 top-8 h-64 w-44 rotate-[-8deg] rounded-3xl bg-white object-contain p-6 shadow-2xl sm:h-72 sm:w-52"
              />
              <img
                src="https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"
                alt="External hard drive"
                className="absolute right-0 top-0 h-52 w-48 rotate-[7deg] rounded-3xl bg-white object-contain p-6 shadow-2xl sm:h-64 sm:w-56"
              />
              <img
                src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
                alt="Mens Cotton Jacket"
                className="absolute bottom-0 left-24 h-64 w-52 rounded-3xl bg-white object-contain p-6 shadow-2xl sm:left-32 sm:h-72 sm:w-60"
              />
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <section className="grid gap-4 md:grid-cols-3">
          {benefits.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-fuchsia-50 text-fuchsia-700">
                  <Icon size={21} />
                </span>
                <h2 className="mt-4 text-lg font-bold text-slate-950">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {item.description}
                </p>
              </article>
            );
          })}
        </section>

        <section className="mt-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-fuchsia-700">
                Kategoriler
              </p>
              <h2 className="mt-2 text-2xl font-bold text-slate-950">
                Populer alisveris alanlari
              </h2>
            </div>
            <Link
              to="/products"
              className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-fuchsia-700"
            >
              Tum kategoriler
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <Link
                key={category.name}
                to="/products"
                className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex h-36 items-center justify-center rounded-xl bg-slate-50 p-5">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-full w-full object-contain transition group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <div>
                    <h3 className="font-bold text-slate-950">
                      {category.name}
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                      {category.count}
                    </p>
                  </div>
                  <ArrowRight
                    size={18}
                    className="text-slate-400 transition group-hover:text-fuchsia-700"
                  />
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-fuchsia-700">
                One cikanlar
              </p>
              <h2 className="mt-2 text-2xl font-bold text-slate-950">
                Bu hafta incelenen urunler
              </h2>
            </div>
            <Link
              to="/products"
              className="inline-flex w-fit items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Katalogu Ac
              <PackageSearch size={17} />
            </Link>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {featuredProducts.map((product) => (
              <article
                key={product.id}
                className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <Link
                  to={`/product-detail/${product.id}`}
                  className="flex h-56 items-center justify-center rounded-xl bg-slate-50 p-6"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-contain"
                  />
                </Link>
                <div className="mt-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-emerald-700">
                    <BadgeCheck size={16} />
                    {product.category}
                  </div>
                  <Link
                    to={`/product-detail/${product.id}`}
                    className="mt-2 block min-h-12 text-lg font-bold text-slate-950 transition hover:text-fuchsia-700"
                  >
                    {product.title}
                  </Link>
                  <div className="mt-4 flex items-center justify-between gap-3">
                    <p className="text-xl font-bold text-slate-950">
                      {product.price} TL
                    </p>
                    <Link
                      to={`/product-detail/${product.id}`}
                      className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                    >
                      Incele
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
