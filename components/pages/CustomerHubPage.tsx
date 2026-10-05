import { Bell, Bookmark, CalendarDays, Heart, MapPin, ShoppingBag, Ticket } from "lucide-react";
import { productPages } from "@/lib/product-pages";
import { FinalCta } from "../Closing";
import { Reveal } from "../motion";
import SiteShell from "../site/SiteShell";
import { Faq, Head, LinkButton, Orbits, StartFree } from "../site/blocks";

const content = productPages["customer-hub"];

const tiles = [
  { t: "Orders", Icon: ShoppingBag, cls: "pg-well" },
  { t: "Saved", Icon: Bookmark, cls: "pg-well pg-well--mint" },
  { t: "Favourites", Icon: Heart, cls: "pg-well" },
  { t: "Addresses", Icon: MapPin, cls: "pg-well" },
  { t: "Bookings", Icon: Ticket, cls: "pg-well" },
  { t: "Reminders", Icon: Bell, cls: "pg-well pg-well--forest" },
];

const favs = [
  { t: "Ada's Closet", d: "Bags and sets", cta: "Shop", bg: "#E7DCC6" },
  { t: "Glow Studio", d: "Braids · saved service", cta: "Book", bg: "var(--brand)" },
  { t: "FreshCart Market", d: "Weekly shop saved", cta: "Reorder", bg: "var(--lime)" },
];

const inside = [
  { t: "Orders", ex: "Ada's Closet · #1043 · Packing", Icon: ShoppingBag, tone: "" },
  { t: "Saved items", ex: "Weekly shop · 14 items", Icon: Bookmark, tone: "mint" },
  { t: "Favourite businesses", ex: "Glow Studio · FreshCart Market", Icon: Heart, tone: "" },
  { t: "Addresses", ex: "Home · Lekki Phase 1", Icon: MapPin, tone: "" },
  { t: "Appointments", ex: "Braids · Sat 10:00am", Icon: CalendarDays, tone: "forest" },
  { t: "Bookings", ex: "Lagos → Abuja · confirmed", Icon: Ticket, tone: "" },
  { t: "Reminders", ex: "Laundry pickup · Thursday", Icon: Bell, tone: "" },
];

const steps = [
  { t: content.workflow[0], d: "A single customer-facing home, instead of scrolling back through old chats." },
  { t: "Organise everything they come back for", d: "Orders, saved items, favourites, addresses, appointments, bookings and reminders." },
  { t: "Build repeat journeys cleanly", d: "Repeat journeys for customers, without mixing customer tools into the merchant dashboard." },
];

export default function CustomerHubPage() {
  return (
    <SiteShell>
      <section className="pg-hero" style={{ paddingBottom: 96 }}>
        <Orbits rings={[{ width: 900, height: 900, right: -180, top: -60 }, { width: 560, height: 560, right: 0, top: 110 }]} />
        <div className="wrap pg-hero-split">
          <div className="pg-hero-copy" style={{ flex: "1.2 1 460px" }}>
            <span className="eyebrow">Customer experience</span>
            <h1 className="pg-h1">Customer Hub. <span className="serif">A cleaner way back in.</span></h1>
            <p className="lead" style={{ maxWidth: 540 }}>{content.situation}</p>
            <div className="pg-ctas"><StartFree /><LinkButton href="/saved-items">See Saved Items</LinkButton></div>
          </div>
          <Reveal className="pg-hero-visual" delay={0.15} >
            <div style={{ width: 320, maxWidth: "100%", borderRadius: 48, padding: 12, background: "#132a24", boxShadow: "0 60px 100px -40px rgba(0,0,0,0.7), inset 0 0 0 1px rgba(250,249,245,0.12)" }} aria-hidden="true">
              <div style={{ borderRadius: 38, background: "var(--cream)", color: "var(--ink)", padding: "26px 18px 18px", display: "flex", flexDirection: "column", gap: 14, minHeight: 600 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ display: "flex", flexDirection: "column" }}><span style={{ fontSize: 12, color: "var(--muted)" }}>Good afternoon</span><b style={{ fontSize: 22, letterSpacing: "-0.02em" }}>Chioma</b></span>
                  <span style={{ width: 40, height: 40, borderRadius: "50%", background: "var(--brand)", color: "var(--on-dark)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 600, fontSize: 14 }}>CK</span>
                </div>
                <div style={{ background: "var(--forest)", color: "var(--on-dark)", borderRadius: 20, padding: 16, display: "flex", flexDirection: "column", gap: 10 }}>
                  <span className="mono" style={{ fontSize: 10, color: "var(--lime)", letterSpacing: "0.06em" }}>REMINDER · TOMORROW</span>
                  <b style={{ fontSize: 15 }}>Braids appointment with Tola</b>
                  <span style={{ fontSize: 12, color: "var(--on-dark-muted)" }}>Glow Studio · 10:00am</span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 8 }}>
                  {tiles.map(({ t, Icon, cls }) => (
                    <div key={t} style={{ background: "var(--paper)", borderRadius: 16, padding: "12px 8px", display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                      <span className={cls} style={{ width: 30, height: 30, borderRadius: 9 }}><Icon size={14} /></span>
                      <span style={{ fontSize: 11, fontWeight: 500 }}>{t}</span>
                    </div>
                  ))}
                </div>
                <span className="pg-label" style={{ fontSize: 10, paddingTop: 4 }}>Favourite businesses</span>
                {favs.map((f) => (
                  <div key={f.t} style={{ background: "var(--paper)", borderRadius: 14, padding: "10px 12px", display: "flex", alignItems: "center", gap: 10 }}>
                    <span className="pg-swatch" style={{ width: 32, height: 32, borderRadius: 10, background: f.bg }} />
                    <span style={{ flex: 1, display: "flex", flexDirection: "column" }}><b style={{ fontSize: 13 }}>{f.t}</b><span style={{ fontSize: 11, color: "var(--muted)" }}>{f.d}</span></span>
                    <span style={{ fontSize: 12, fontWeight: 600, color: "var(--brand)" }}>{f.cta}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section pg-cream">
        <div className="wrap">
          <Head eyebrow="Two sides of PulchriFlow" title="Customers get a hub." payoff="You keep your dashboard." lead="Customer Hub is customer-facing. Merchants keep using the PulchriFlow dashboard to run the business. Both read from the same record." />
          <div data-reveal style={{ display: "flex", flexWrap: "wrap", alignItems: "stretch" }}>
            <div className="pg-card" style={{ flex: "1 1 340px" }}>
              <span className="pg-pill">For customers · Customer Hub</span>
              <b style={{ fontSize: 24, fontWeight: 500, letterSpacing: "-0.02em" }}>Find it, reuse it, get reminded.</b>
              <div className="pg-stack" style={{ gap: 8, fontSize: 14 }}>
                {[["Orders", "From every business"], ["Saved items", "Baskets, services"], ["Addresses", "Home, office"], ["Reminders", "Bookings, repeat buys"]].map(([k, v]) => (
                  <span key={k} style={{ display: "flex", justifyContent: "space-between", padding: "10px 12px", borderRadius: 12, background: "var(--cream)" }}><span>{k}</span><b>{v}</b></span>
                ))}
              </div>
            </div>
            <div aria-hidden="true" style={{ flex: "0 0 160px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10, padding: "20px 0", margin: "0 auto" }}>
              <span className="pg-dashed" style={{ width: "100%" }} />
              <span style={{ width: 108, height: 108, borderRadius: "50%", background: "var(--forest)", color: "var(--on-dark)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", fontSize: 13, fontWeight: 600, boxShadow: "0 0 0 10px color-mix(in srgb, var(--lime) 25%, transparent)" }}>Business<br />record</span>
              <span className="pg-dashed" style={{ width: "100%" }} />
            </div>
            <div className="pg-card pg-card--forest" style={{ flex: "1 1 340px" }}>
              <span className="pg-pill pg-pill--mint">For you · Merchant dashboard</span>
              <b style={{ fontSize: 24, fontWeight: 500, letterSpacing: "-0.02em" }}>Run the business behind it.</b>
              <div className="pg-stack" style={{ gap: 8, fontSize: 14 }}>
                {[["Orders", "Fulfil and track"], ["Payments", "Record and reconcile"], ["Customers", "History and follow-up"], ["Catalogue", "Products and services"]].map(([k, v]) => (
                  <span key={k} style={{ display: "flex", justifyContent: "space-between", padding: "10px 12px", borderRadius: 12, background: "rgba(250,249,245,0.06)" }}><span style={{ color: "var(--on-dark-muted)" }}>{k}</span><b>{v}</b></span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section pg-white">
        <div className="wrap">
          <Head eyebrow="What lives in the hub" title="Everything a repeat buyer" payoff="comes back for." />
          <div className="pg-grid pg-grid--sm" style={{ gap: 12 }}>
            {inside.map(({ t, ex, Icon, tone }) => (
              <div key={t} className={tone === "mint" ? "pg-card pg-card--mint" : tone === "forest" ? "pg-card pg-card--forest" : "pg-card"} style={{ minHeight: 210, gap: 14 }}>
                <span className={tone === "mint" ? "pg-well pg-well--forest" : tone === "forest" ? "pg-well pg-well--mint" : "pg-well"} style={{ width: 40, height: 40, borderRadius: 12 }}><Icon size={18} aria-hidden="true" /></span>
                <b style={{ fontSize: 19, fontWeight: 500 }}>{t}</b>
                <span style={{ marginTop: "auto", fontSize: 13, padding: "10px 12px", borderRadius: 12, background: tone === "mint" ? "rgba(9,34,29,0.08)" : tone === "forest" ? "rgba(250,249,245,0.08)" : "var(--cream)", color: tone === "forest" ? "#dde7e2" : "#3f4d47" }}>{ex}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--forest on-dark">
        <div className="wrap">
          <Head eyebrow="The workflow" title="One clear next step" payoff="at a time." />
          <ol className="pg-grid" style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {steps.map((s, i) => (
              <li key={s.t} className={i === steps.length - 1 ? "pg-card pg-card--mint" : "pg-card pg-card--dark"} style={{ minHeight: 240 }}>
                <span className="pg-num">0{i + 1}</span>
                <b style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 1.2 }}>{s.t}</b>
                <span className="pg-body">{s.d}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Faq items={content.faq} />
      <FinalCta plain eyebrow="PulchriFlow" title="Give your regulars" payoff="a way back." sub="Start free and build repeat journeys your customers can actually find." />
    </SiteShell>
  );
}
