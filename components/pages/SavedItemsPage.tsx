import { ArrowRight, Bookmark, CalendarDays, Plane, Scissors, Search, ShoppingCart, UtensilsCrossed } from "lucide-react";
import Link from "next/link";
import { productPages } from "@/lib/product-pages";
import { FinalCta } from "../Closing";
import { Reveal } from "../motion";
import SiteShell from "../site/SiteShell";
import { Faq, Head, LinkButton, Orbits, StartFree } from "../site/blocks";

const content = productPages["saved-items"];

const journeys = [
  { kind: "Service", t: "Knotless braids, medium", d: "Amaka · every 6 weeks · with Tola", cta: "Book again", Icon: Scissors, tone: "light", lift: 0 },
  { kind: "Basket", t: "Weekly shop", d: "Tolu O. · 14 items · ₦38,450", cta: "Reorder", Icon: ShoppingCart, tone: "light", lift: -28 },
  { kind: "Meal", t: "Friday office lunch", d: "Kora Studio · jollof × 8, grilled fish × 4", cta: "Order again", Icon: UtensilsCrossed, tone: "mint", lift: -48 },
  { kind: "Trip", t: "Lagos → Abuja, return", d: "Femi A. · window seat · morning flights", cta: "Get a quote", Icon: Plane, tone: "light", lift: -28 },
  { kind: "Schedule", t: "Laundry pickup", d: "Ngozi E. · Thursdays · wash and iron", cta: "Confirm pickup", Icon: CalendarDays, tone: "dark", lift: 0 },
] as const;

const tones = {
  light: { card: { background: "var(--paper)", color: "var(--ink)" }, label: "var(--muted)", sub: "var(--muted)", well: "pg-well", action: "pg-action" },
  mint: { card: { background: "var(--lime)", color: "var(--forest)" }, label: "var(--brand-strong)", sub: "color-mix(in srgb, var(--forest) 80%, var(--lime))", well: "pg-well pg-well--forest", action: "pg-action" },
  dark: { card: { background: "var(--canopy)", color: "var(--on-dark)", border: "1px solid color-mix(in srgb, var(--lime) 25%, transparent)" }, label: "var(--on-dark-faint)", sub: "var(--on-dark-muted)", well: "pg-well pg-well--mint", action: "pg-action pg-action--mint" },
};

const uses = [
  { tag: "Salons · tailors · services", t: "Favourite services", d: "Regulars keep their usual service, style and preferences, so booking again takes seconds.", href: "/service-businesses", cta: "Services" },
  { tag: "Supermarkets · grocery", t: "Saved baskets", d: "The weekly or monthly shop, saved and ready to reorder instead of rebuilt item by item.", href: "/supermarkets", cta: "Supermarkets" },
  { tag: "Foundation", t: "Reminders, bookings and appointments", d: "A reusable foundation for reminders, bookings, appointments and Customer Hub experiences.", href: "/customer-hub", cta: "Customer Hub" },
];

export default function SavedItemsPage() {
  return (
    <SiteShell>
      <section className="pg-hero">
        <Orbits rings={[{ width: 1100, height: 1100, left: "50%", top: 300, marginLeft: -550 }]} />
        <div className="wrap pg-hero-center">
          <span className="eyebrow">Repeat journeys</span>
          <h1 className="pg-h1" style={{ maxWidth: 980 }}>Saved Items. <span className="serif">Because they&apos;ll be back.</span></h1>
          <p className="lead" style={{ maxWidth: 640 }}>{content.situation}</p>
          <div className="pg-ctas"><StartFree /><LinkButton href="/customer-hub">See Customer Hub</LinkButton></div>
        </div>
        <Reveal className="wrap" delay={0.15}>
          <div className="pg-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: 14, alignItems: "end", marginTop: 96 }} aria-hidden="true">
            {journeys.map((j) => {
              const t = tones[j.tone];
              return (
                <div key={j.kind} style={{ ...t.card, borderRadius: 22, padding: 18, display: "flex", flexDirection: "column", gap: 14, boxShadow: "0 30px 60px -24px rgba(0,0,0,0.5)", transform: `translateY(${j.lift}px)` }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span className="mono" style={{ fontSize: 11, letterSpacing: "0.06em", textTransform: "uppercase", color: t.label }}>{j.kind}</span>
                    <span className={t.well} style={{ width: 32, height: 32, borderRadius: 10 }}><j.Icon size={16} /></span>
                  </div>
                  <b style={{ fontSize: 18, fontWeight: 600, lineHeight: 1.2 }}>{j.t}</b>
                  <span style={{ fontSize: 13, lineHeight: 1.45, color: t.sub }}>{j.d}</span>
                  <span className={t.action} style={{ minHeight: 38 }}>{j.cta}</span>
                </div>
              );
            })}
          </div>
        </Reveal>
      </section>

      <section className="section pg-cream">
        <div className="wrap">
          <Head eyebrow="Not just saved orders" title="One engine," payoff="many journeys." lead="Saved Items is a reusable engine for multiple business journeys. Whatever was saved, it comes back as a faster next step." />
          <div className="pg-stage pg-stage--light" style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
            <div className="pg-stack" style={{ flex: "1 1 220px", gap: 10 }}>
              <span className="pg-label" style={{ paddingBottom: 4 }}>Save a…</span>
              {["Service", "Basket", "Meal", "Trip", "Schedule"].map((i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 14px", borderRadius: 16, background: "var(--cream)", fontSize: 15, fontWeight: 500 }}><span className="pg-dot" />{i}</div>
              ))}
            </div>
            <div aria-hidden="true" className="pg-hide-sm pg-dashed" style={{ flex: "0 0 64px" }} />
            <div style={{ flex: "0 0 240px", margin: "24px auto", aspectRatio: "1 / 1", borderRadius: "50%", background: "var(--forest)", color: "var(--on-dark)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10, boxShadow: "0 0 0 14px color-mix(in srgb, var(--lime) 18%, transparent), 0 0 0 28px color-mix(in srgb, var(--lime) 8%, transparent)" }}>
              <span className="pg-well pg-well--mint" style={{ width: 48, height: 48, borderRadius: 14 }}><Bookmark size={22} aria-hidden="true" /></span>
              <b style={{ fontSize: 22, fontWeight: 500 }}>Saved Items</b>
              <span className="mono" style={{ fontSize: 11, color: "var(--on-dark-muted)" }}>Attached to the customer</span>
            </div>
            <div aria-hidden="true" className="pg-hide-sm pg-dashed" style={{ flex: "0 0 64px" }} />
            <div className="pg-stack" style={{ flex: "1 1 220px", gap: 10 }}>
              <span className="pg-label" style={{ paddingBottom: 4 }}>…reuse it for</span>
              {["Faster checkout", "Quote", "Invoice", "Follow-up"].map((t, i) => (
                <div key={t} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, padding: "12px 14px", borderRadius: 16, background: i === 0 ? "var(--lime)" : "var(--cream)", color: i === 0 ? "var(--forest)" : "var(--ink)", fontSize: 15, fontWeight: 500 }}>{t}<ArrowRight size={16} aria-hidden="true" /></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section pg-white">
        <div className="wrap">
          <Head eyebrow="The workflow" title="Save once." payoff="Use it every time." />
          <div className="pg-grid">
            <div className="pg-card pg-card--cream">
              <span className="pg-num">01</span>
              <b className="pg-h3">{content.workflow[0]}</b>
              <div className="pg-ui" aria-hidden="true">
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14 }}><b>Order #1188 · Tolu O.</b><span className="pg-pill">Delivered</span></div>
                <span style={{ fontSize: 13, color: "var(--muted)" }}>14 grocery items · ₦38,450</span>
                <span className="pg-action"><Bookmark size={14} />Save as “Weekly shop”</span>
              </div>
            </div>
            <div className="pg-card pg-card--cream">
              <span className="pg-num">02</span>
              <b className="pg-h3">{content.workflow[1]}</b>
              <div className="pg-ui" style={{ gap: 10 }} aria-hidden="true">
                <div style={{ display: "flex", alignItems: "center", gap: 10, border: "1px solid var(--line)", borderRadius: 12, padding: "10px 12px", fontSize: 14, color: "var(--muted)" }}><Search size={15} />Tolu</div>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--brand)", color: "var(--on-dark)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 600 }}>TO</span>
                  <span style={{ display: "flex", flexDirection: "column" }}><b style={{ fontSize: 14 }}>Tolu O.</b><span style={{ fontSize: 12, color: "var(--muted)" }}>2 saved journeys</span></span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}><span className="pg-pill pg-pill--mint">Weekly shop</span><span className="pg-pill pg-pill--neutral">Laundry pickup · Thu</span></div>
              </div>
            </div>
            <div className="pg-card pg-card--forest">
              <span className="pg-num">03</span>
              <b className="pg-h3">{content.workflow[2]}</b>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 8 }} aria-hidden="true">
                {[["Checkout", "Same basket, new link"], ["Quote", "Prefilled for the trip"], ["Invoice", "Office lunch, monthly"], ["Follow-up", "Braids due in a week"]].map(([t, d], i) => (
                  <div key={t} style={{ borderRadius: 14, padding: 14, background: i === 0 ? "var(--lime)" : "rgba(250,249,245,0.1)", color: i === 0 ? "var(--forest)" : "var(--on-dark)", display: "flex", flexDirection: "column", gap: 6 }}><b style={{ fontSize: 14 }}>{t}</b><span style={{ fontSize: 12, opacity: 0.82 }}>{d}</span></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--forest on-dark">
        <div className="wrap">
          <Head eyebrow="Where it shows up" title="Less chasing." payoff="A better record." />
          <div className="pg-grid">
            {uses.map((u, i) => {
              const last = i === uses.length - 1;
              return (
                <Link key={u.t} href={u.href} className={last ? "pg-card pg-card--mint" : "pg-card pg-card--dark"} style={{ minHeight: 280 }}>
                  <span className={last ? "pg-pill pg-pill--forest" : "pg-pill pg-pill--ghost"}>{u.tag}</span>
                  <b style={{ fontSize: 24, fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 1.2 }}>{u.t}</b>
                  <span className="pg-body">{u.d}</span>
                  <span className="pg-link" style={{ marginTop: "auto", color: last ? "var(--forest)" : "var(--lime)" }}>{u.cta}<ArrowRight size={14} aria-hidden="true" /></span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Faq items={content.faq} />
      <FinalCta plain eyebrow="PulchriFlow" title="Make the second sale" payoff="the easy one." sub="Start free and turn your regulars' habits into saved journeys." />
    </SiteShell>
  );
}
