import { useState } from 'react';
import { AtSign, Bike, Clock, Mail, MapPin, Phone, ShoppingBag, Star, Utensils } from 'lucide-react';
import Hero from './components/Hero';
import { BRANCHES, CONTACT, DELIVERY_PARTNERS, HISTORY, MENU, REVIEWS, formatIQD } from './data';

const ACCENT = '#F4845F';

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-10 sm:mb-14">
      <p className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: ACCENT }}>
        {eyebrow}
      </p>
      <h2 className="font-display mt-2 text-5xl sm:text-7xl uppercase leading-none tracking-tight">{title}</h2>
    </div>
  );
}

function Nav() {
  const links = [
    ['About', '#about'],
    ['Menu', '#menu'],
    ['Order', '#order'],
    ['Branches', '#branches'],
    ['Contact', '#contact'],
  ];
  return (
    <nav className="absolute top-5 right-4 sm:right-8 z-[70] flex items-center gap-5 text-white">
      <ul className="hidden md:flex gap-6 text-xs font-semibold uppercase tracking-[0.18em]">
        {links.map(([label, href]) => (
          <li key={href}>
            <a href={href} className="opacity-90 hover:opacity-100">
              {label}
            </a>
          </li>
        ))}
      </ul>
      <a
        href={CONTACT.phoneHref}
        className="rounded-full border-2 border-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] hover:bg-white/15"
      >
        Call to order
      </a>
    </nav>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 sm:px-8 py-20 sm:py-28">
      <SectionTitle eyebrow="Our story" title="From 18 m² to all of Erbil" />
      <div className="grid gap-12 lg:grid-cols-2">
        <div className="space-y-5 text-lg leading-relaxed text-stone-700">
          <p>
            UK Pizza &amp; More started in 2020 with two people in a tiny kitchen on Hakmawa Main Street. Founder{' '}
            <strong className="text-stone-900">Sanar Karim</strong> wanted affordable fast food made properly, with
            Kurdish local meat and quality ingredients.
          </p>
          <p>
            Today we're a team of more than 130 people across four branches, serving pizza, burgers, shawarma, spaghetti
            and more for dine-in, takeaway and delivery.
          </p>
          <div className="grid grid-cols-3 gap-4 pt-4">
            {[
              ['2020', 'Founded'],
              ['4', 'Branches'],
              ['130+', 'Team members'],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl bg-white p-4 shadow-sm">
                <p className="font-display text-4xl" style={{ color: ACCENT }}>
                  {value}
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-stone-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
        <ol className="relative border-l-2 border-stone-200 pl-8 space-y-8">
          {HISTORY.map((step) => (
            <li key={step.year} className="relative">
              <span
                className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-4 border-[#fff8f2]"
                style={{ backgroundColor: ACCENT }}
              />
              <p className="font-display text-3xl">{step.year}</p>
              <p className="mt-1 text-stone-600">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Menu() {
  const [active, setActive] = useState(MENU[0].id);
  const category = MENU.find((c) => c.id === active)!;
  return (
    <section id="menu" className="bg-stone-900 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-8 py-20 sm:py-28">
        <SectionTitle eyebrow="Prices in IQD" title="The menu" />
        <div className="mb-8 flex flex-wrap gap-2" role="tablist">
          {MENU.map((c) => (
            <button
              key={c.id}
              type="button"
              role="tab"
              aria-selected={c.id === active}
              onClick={() => setActive(c.id)}
              className={`rounded-full border-2 px-5 py-2 text-sm font-semibold uppercase tracking-wider transition-colors ${
                c.id === active ? 'border-transparent text-stone-900' : 'border-white/25 text-white/80 hover:border-white/60'
              }`}
              style={c.id === active ? { backgroundColor: ACCENT } : undefined}
            >
              {c.title}
            </button>
          ))}
        </div>
        {category.blurb && <p className="mb-8 max-w-2xl text-white/70">{category.blurb}</p>}
        <ul className="grid gap-x-12 sm:grid-cols-2">
          {category.items.map((item) => (
            <li key={item.name} className="flex items-baseline gap-3 border-b border-white/10 py-4">
              <div className="min-w-0">
                <p className="font-semibold">{item.name}</p>
                {item.note && <p className="text-sm text-white/55">{item.note}</p>}
              </div>
              <span className="flex-1 border-b border-dotted border-white/20" />
              <span className="font-display text-xl tabular-nums" style={{ color: ACCENT }}>
                {formatIQD(item.price)}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-xs text-white/45">Prices and availability may vary between branches.</p>
      </div>
    </section>
  );
}

function Order() {
  const ways = [
    { icon: Utensils, title: 'Dine in', text: 'Scan the QR menu at your table and order straight from your phone.' },
    { icon: ShoppingBag, title: 'Pickup', text: 'Order ahead online and collect from your nearest branch.' },
    { icon: Bike, title: 'Delivery', text: 'Delivered to your door. Free delivery on orders over 50,000 IQD.' },
  ];
  return (
    <section id="order" className="mx-auto max-w-6xl px-4 sm:px-8 py-20 sm:py-28">
      <SectionTitle eyebrow="Hungry?" title="Three ways to order" />
      <div className="grid gap-5 md:grid-cols-3">
        {ways.map(({ icon: Icon, title, text }) => (
          <div key={title} className="rounded-3xl bg-white p-7 shadow-sm">
            <div
              className="mb-5 flex h-12 w-12 items-center justify-center rounded-full text-white"
              style={{ backgroundColor: ACCENT }}
            >
              <Icon size={22} strokeWidth={2.25} />
            </div>
            <h3 className="font-display text-3xl uppercase">{title}</h3>
            <p className="mt-2 text-stone-600">{text}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 flex flex-col gap-4 rounded-3xl bg-stone-100 p-7 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">Also on</p>
          <p className="mt-2 font-display text-2xl uppercase">{DELIVERY_PARTNERS.join(' · ')}</p>
        </div>
        <p className="text-sm text-stone-500">Online menu in English, Kurdish, Arabic &amp; Turkish</p>
      </div>
    </section>
  );
}

function Branches() {
  return (
    <section id="branches" style={{ backgroundColor: '#6BBF7A' }} className="text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-8 py-20 sm:py-28">
        <div className="mb-10 sm:mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">Find us in Erbil</p>
          <h2 className="font-display mt-2 text-5xl sm:text-7xl uppercase leading-none tracking-tight">4 branches</h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {BRANCHES.map((b) => (
            <div key={b.name} className="rounded-3xl bg-white/15 p-6 backdrop-blur-sm">
              <h3 className="font-display text-3xl uppercase">{b.name}</h3>
              <p className="mt-2 flex items-start gap-2 text-sm text-white/90">
                <MapPin size={16} className="mt-0.5 shrink-0" /> {b.area}
              </p>
              <div className="mt-4 space-y-1 text-sm">
                <p className="flex items-center gap-2">
                  <Clock size={16} className="shrink-0" /> Sat–Thu: {b.hours}
                </p>
                <p className="pl-6 text-white/80">Fri: {b.friday}</p>
              </div>
              {b.note && (
                <p className="mt-4 inline-block rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-stone-900">
                  {b.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const loves = ['Affordable prices', 'Friendly staff', 'Great pasta', 'Big menu', 'Easy ordering', 'Cosy atmosphere'];
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-8 py-20 sm:py-28">
      <SectionTitle eyebrow="Reviews" title="Erbil says" />
      <div className="grid gap-5 md:grid-cols-2">
        {REVIEWS.map((r) => (
          <div key={r.source} className="flex items-center gap-6 rounded-3xl bg-white p-7 shadow-sm">
            <p className="font-display text-7xl leading-none" style={{ color: ACCENT }}>
              {r.rating}
            </p>
            <div>
              <div className="flex gap-0.5" style={{ color: ACCENT }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="mt-2 font-semibold">{r.source}</p>
              <p className="text-sm text-stone-500">{r.detail}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap gap-2">
        {loves.map((l) => (
          <span key={l} className="rounded-full bg-stone-100 px-4 py-2 text-sm font-medium text-stone-700">
            {l}
          </span>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const rows = [
    { icon: Phone, label: CONTACT.phone, href: CONTACT.phoneHref },
    { icon: Mail, label: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: AtSign, label: '@ukpizzaandmore', href: CONTACT.instagram },
    { icon: MapPin, label: CONTACT.address },
  ];
  return (
    <section id="contact" style={{ backgroundColor: ACCENT }} className="text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-8 py-20 sm:py-28 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">Get in touch</p>
          <h2 className="font-display mt-2 text-5xl sm:text-7xl uppercase leading-none tracking-tight">
            Great food comes first
          </h2>
          <a
            href={CONTACT.phoneHref}
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 font-semibold uppercase tracking-wider text-stone-900 transition-transform hover:scale-[1.03]"
          >
            <Phone size={18} /> Order now
          </a>
        </div>
        <ul className="space-y-5 self-end">
          {rows.map(({ icon: Icon, label, href }) => (
            <li key={label} className="flex items-start gap-4 text-lg">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-white">
                <Icon size={18} />
              </span>
              {href ? (
                <a href={href} className="pt-1.5 hover:underline" target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                  {label}
                </a>
              ) : (
                <span className="pt-1.5">{label}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-stone-900 text-white/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 sm:px-8 py-10 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="font-display text-2xl uppercase text-white">UK Pizza &amp; More</p>
        <p>© {new Date().getFullYear()} UK Pizza &amp; More · Erbil, Kurdistan Region</p>
        <p>Franchise opportunities coming soon</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <header className="relative">
        <Nav />
        <Hero />
      </header>
      <main>
        <About />
        <Menu />
        <Order />
        <Branches />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
