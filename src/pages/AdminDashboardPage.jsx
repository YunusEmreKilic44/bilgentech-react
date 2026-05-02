import { useState } from "react";
import {
  BarChart3,
  Bell,
  Boxes,
  ChevronDown,
  ClipboardList,
  Gauge,
  Home,
  LineChart,
  Package,
  PackageCheck,
  Search,
  Settings,
  ShoppingCart,
  Users,
  WalletCards,
} from "lucide-react";

const sidebarItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    title: "Yonetim Paneli",
    subtitle: "E-ticaret yonetimi",
    icon: Gauge,
  },
  {
    id: "products",
    label: "Urunler",
    title: "Urun Yonetimi",
    subtitle: "Katalog ve stok operasyonlari",
    icon: Package,
  },
  {
    id: "orders",
    label: "Siparisler",
    title: "Siparis Yonetimi",
    subtitle: "Hazirlama, kargo ve teslimat takibi",
    icon: ClipboardList,
  },
  {
    id: "customers",
    label: "Musteriler",
    title: "Musteri Yonetimi",
    subtitle: "Segmentler ve hesap hareketleri",
    icon: Users,
  },
  {
    id: "reports",
    label: "Raporlar",
    title: "Raporlar",
    subtitle: "Satis ve kategori analizleri",
    icon: BarChart3,
  },
  {
    id: "settings",
    label: "Ayarlar",
    title: "Panel Ayarlari",
    subtitle: "Magaza, ekip ve bildirim ayarlari",
    icon: Settings,
  },
];

const stats = [
  {
    label: "Toplam Satis",
    value: "128.450 TL",
    trend: "+12.4%",
    icon: WalletCards,
    tone: "bg-emerald-50 text-emerald-700",
  },
  {
    label: "Aktif Siparis",
    value: "86",
    trend: "+8 yeni",
    icon: ShoppingCart,
    tone: "bg-fuchsia-50 text-fuchsia-700",
  },
  {
    label: "Stokta Urun",
    value: "1.248",
    trend: "32 kritik",
    icon: Boxes,
    tone: "bg-amber-50 text-amber-700",
  },
  {
    label: "Teslim Edilen",
    value: "742",
    trend: "+18.2%",
    icon: PackageCheck,
    tone: "bg-sky-50 text-sky-700",
  },
];

const salesBars = [
  { day: "Pzt", value: 46 },
  { day: "Sal", value: 62 },
  { day: "Car", value: 54 },
  { day: "Per", value: 78 },
  { day: "Cum", value: 88 },
  { day: "Cmt", value: 64 },
  { day: "Paz", value: 72 },
];

const recentOrders = [
  {
    id: "#BG-1048",
    customer: "Ayse Demir",
    product: "Fjallraven Backpack",
    status: "Hazirlaniyor",
    total: "2.499 TL",
  },
  {
    id: "#BG-1047",
    customer: "Mert Kaya",
    product: "Mens Cotton Jacket",
    status: "Kargoda",
    total: "1.899 TL",
  },
  {
    id: "#BG-1046",
    customer: "Elif Arslan",
    product: "Silver Bracelet",
    status: "Tamamlandi",
    total: "799 TL",
  },
];

const stockItems = [
  { name: "Electronics", count: 324, percent: 78 },
  { name: "Jewelery", count: 186, percent: 54 },
  { name: "Men's clothing", count: 421, percent: 86 },
  { name: "Women's clothing", count: 317, percent: 68 },
];

const statusClass = {
  Hazirlaniyor: "bg-amber-50 text-amber-700 ring-amber-200",
  Kargoda: "bg-sky-50 text-sky-700 ring-sky-200",
  Tamamlandi: "bg-emerald-50 text-emerald-700 ring-emerald-200",
};

const sectionPanels = {
  products: {
    primary: "1.248",
    primaryLabel: "Toplam urun",
    action: "Yeni Urun Ekle",
    cards: [
      { label: "Yayindaki urunler", value: "1.096", detail: "+24 bu hafta" },
      { label: "Dusuk stok", value: "32", detail: "Oncelikli kontrol" },
      { label: "Pasif urunler", value: "120", detail: "Guncelleme bekliyor" },
    ],
    rows: [
      ["Fjallraven Backpack", "Stokta", "Men's clothing", "2.499 TL"],
      ["Mens Cotton Jacket", "Dusuk stok", "Men's clothing", "1.899 TL"],
      ["Silver Bracelet", "Stokta", "Jewelery", "799 TL"],
    ],
  },
  orders: {
    primary: "86",
    primaryLabel: "Aktif siparis",
    action: "Siparisleri Disa Aktar",
    cards: [
      { label: "Hazirlaniyor", value: "24", detail: "Ortalama 18 dk" },
      { label: "Kargoda", value: "41", detail: "Bugun 12 cikis" },
      { label: "Iade talepleri", value: "7", detail: "Kontrol bekliyor" },
    ],
    rows: recentOrders.map((order) => [
      order.id,
      order.status,
      order.customer,
      order.total,
    ]),
  },
  customers: {
    primary: "4.820",
    primaryLabel: "Kayitli musteri",
    action: "Segment Olustur",
    cards: [
      { label: "Yeni musteri", value: "186", detail: "Son 30 gun" },
      { label: "Aktif sepet", value: "73", detail: "Tamamlama bekliyor" },
      { label: "Sadakat uyeleri", value: "1.204", detail: "+9.1%" },
    ],
    rows: [
      ["Ayse Demir", "VIP", "12 siparis", "18.450 TL"],
      ["Mert Kaya", "Yeni", "2 siparis", "3.190 TL"],
      ["Elif Arslan", "Sadakat", "8 siparis", "9.740 TL"],
    ],
  },
  reports: {
    primary: "18.2%",
    primaryLabel: "Buyume orani",
    action: "Rapor Indir",
    cards: [
      { label: "Satis artisi", value: "+12.4%", detail: "Gecen haftaya gore" },
      { label: "Sepet ortalamasi", value: "1.492 TL", detail: "+6.8%" },
      { label: "Donusum", value: "4.7%", detail: "Urun sayfalarindan" },
    ],
    rows: [
      ["En cok satan", "Mens Cotton Jacket", "142 adet", "268.458 TL"],
      ["En hizli buyuyen", "Electronics", "+24.8%", "Haftalik"],
      ["En dusuk stok", "Jewelery", "32 kritik", "Bugun"],
    ],
  },
  settings: {
    primary: "6",
    primaryLabel: "Aktif modul",
    action: "Degisiklikleri Kaydet",
    cards: [
      { label: "Magaza profili", value: "Aktif", detail: "Bilgiler tamam" },
      { label: "Bildirimler", value: "12", detail: "Kural calisiyor" },
      { label: "Ekip rolleri", value: "4", detail: "Yetki grubu" },
    ],
    rows: [
      ["Magaza adi", "Bilgentech", "Aktif", "Guncel"],
      ["Para birimi", "TL", "Aktif", "Varsayilan"],
      ["Bildirim kanali", "E-posta", "Aktif", "Anlik"],
    ],
  },
};

const DashboardContent = () => {
  return (
    <>
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.label}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    {item.label}
                  </p>
                  <p className="mt-2 text-2xl font-bold text-slate-950">
                    {item.value}
                  </p>
                </div>
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-xl ${item.tone}`}
                >
                  <Icon size={20} />
                </span>
              </div>
              <p className="mt-4 text-sm font-semibold text-emerald-700">
                {item.trend}
              </p>
            </article>
          );
        })}
      </section>

      <section className="mt-6 grid gap-6 xl:grid-cols-[1.4fr_1fr]">
        <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">
                Haftalik performans
              </p>
              <h2 className="mt-1 text-xl font-bold text-slate-950">
                Satis Akisi
              </h2>
            </div>
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">
              <LineChart size={16} />
              Son 7 gun
            </span>
          </div>

          <div className="mt-8 flex h-72 items-end gap-3 rounded-2xl bg-slate-50 px-4 pb-4 pt-6">
            {salesBars.map((item) => (
              <div
                key={item.day}
                className="flex h-full flex-1 flex-col justify-end gap-3"
              >
                <div
                  className="min-h-10 rounded-t-xl bg-slate-900 transition hover:bg-fuchsia-700"
                  style={{ height: `${item.value}%` }}
                />
                <span className="text-center text-xs font-semibold text-slate-500">
                  {item.day}
                </span>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-slate-500">
                Kategori stogu
              </p>
              <h2 className="mt-1 text-xl font-bold text-slate-950">
                Stok Dagilimi
              </h2>
            </div>
            <Boxes size={22} className="text-slate-500" />
          </div>

          <div className="mt-6 space-y-5">
            {stockItems.map((item) => (
              <div key={item.name}>
                <div className="flex items-center justify-between gap-4 text-sm">
                  <span className="font-semibold text-slate-700">
                    {item.name}
                  </span>
                  <span className="text-slate-500">{item.count} adet</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-slate-100">
                  <div
                    className="h-2 rounded-full bg-fuchsia-600"
                    style={{ width: `${item.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="mt-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="flex flex-col gap-2 border-b border-slate-200 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">Operasyon</p>
            <h2 className="mt-1 text-xl font-bold text-slate-950">
              Son Siparisler
            </h2>
          </div>
          <button
            type="button"
            className="inline-flex w-fit items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Tumunu Gor
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-5 py-3 font-semibold">Siparis</th>
                <th className="px-5 py-3 font-semibold">Musteri</th>
                <th className="px-5 py-3 font-semibold">Urun</th>
                <th className="px-5 py-3 font-semibold">Durum</th>
                <th className="px-5 py-3 text-right font-semibold">Tutar</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {recentOrders.map((order) => (
                <tr key={order.id} className="hover:bg-slate-50">
                  <td className="px-5 py-4 font-semibold text-slate-900">
                    {order.id}
                  </td>
                  <td className="px-5 py-4 text-slate-600">
                    {order.customer}
                  </td>
                  <td className="px-5 py-4 text-slate-600">
                    {order.product}
                  </td>
                  <td className="px-5 py-4">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ring-1 ${statusClass[order.status]}`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-right font-semibold text-slate-900">
                    {order.total}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

const SectionContent = ({ section }) => {
  const panel = sectionPanels[section.id];

  if (!panel) {
    return <DashboardContent />;
  }

  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">
              {section.subtitle}
            </p>
            <h2 className="mt-2 text-3xl font-bold text-slate-950">
              {panel.primary}
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              {panel.primaryLabel}
            </p>
          </div>
          <button
            type="button"
            className="inline-flex w-fit items-center justify-center rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            {panel.action}
          </button>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {panel.cards.map((card) => (
          <article
            key={card.label}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <p className="text-sm font-medium text-slate-500">{card.label}</p>
            <p className="mt-2 text-2xl font-bold text-slate-950">
              {card.value}
            </p>
            <p className="mt-4 text-sm font-semibold text-fuchsia-700">
              {card.detail}
            </p>
          </article>
        ))}
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 p-5">
          <h2 className="text-xl font-bold text-slate-950">
            {section.label} Ozeti
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[680px] text-left text-sm">
            <tbody className="divide-y divide-slate-100">
              {panel.rows.map((row) => (
                <tr key={row.join("-")} className="hover:bg-slate-50">
                  {row.map((cell, index) => (
                    <td
                      key={`${cell}-${index}`}
                      className={`px-5 py-4 ${
                        index === 0
                          ? "font-semibold text-slate-900"
                          : "text-slate-600"
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

const AdminDashboardPage = () => {
  const [activeSectionId, setActiveSectionId] = useState("dashboard");
  const activeSection =
    sidebarItems.find((item) => item.id === activeSectionId) ?? sidebarItems[0];

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 lg:grid lg:grid-cols-[280px_1fr]">
      <aside className="border-b border-slate-800 bg-slate-950 text-white lg:min-h-screen lg:border-b-0 lg:border-r">
        <div className="flex h-full flex-col">
          <div className="flex h-20 items-center gap-3 px-5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-slate-950">
              <Home size={20} />
            </span>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em]">
                Bilgentech
              </p>
              <p className="text-xs text-slate-400">Admin Panel</p>
            </div>
          </div>

          <nav className="flex gap-2 overflow-x-auto px-4 pb-4 lg:flex-col lg:overflow-visible lg:pb-0">
            {sidebarItems.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => setActiveSectionId(item.id)}
                  aria-current={activeSectionId === item.id ? "page" : undefined}
                  className={`flex min-w-fit items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                    activeSectionId === item.id
                      ? "bg-white text-slate-950 shadow-sm"
                      : "text-slate-300 hover:bg-slate-900 hover:text-white"
                  }`}
                >
                  <Icon size={18} />
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div className="mt-auto hidden p-4 lg:block">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
                Bugunku durum
              </p>
              <p className="mt-3 text-2xl font-bold">24 siparis</p>
              <p className="mt-1 text-sm text-slate-400">
                Ortalama hazirlama suresi 18 dakika.
              </p>
            </div>
          </div>
        </div>
      </aside>

      <div className="min-w-0">
        <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
          <div className="flex min-h-20 flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div>
              <p className="text-sm font-medium text-slate-500">
                {activeSection.subtitle}
              </p>
              <h1 className="text-2xl font-bold text-slate-950">
                {activeSection.title}
              </h1>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <label className="relative block w-full sm:w-72">
                <Search
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  size={18}
                />
                <input
                  type="search"
                  placeholder="Urun, siparis veya musteri ara"
                  className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm outline-none transition focus:border-slate-400 focus:bg-white"
                />
              </label>

              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-50"
                aria-label="Bildirimler"
              >
                <Bell size={18} />
              </button>

              <button
                type="button"
                className="inline-flex h-11 items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-xs text-white">
                  BT
                </span>
                Admin
                <ChevronDown size={16} className="text-slate-400" />
              </button>
            </div>
          </div>
        </header>

        <main className="px-4 py-6 sm:px-6 lg:px-8">
          <SectionContent section={activeSection} />
        </main>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
