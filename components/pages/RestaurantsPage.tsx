import { Check, ShoppingBag, Store, UtensilsCrossed } from "lucide-react";
import { appLink } from "@/lib/config";
import { productPages } from "@/lib/product-pages";
import { FinalCta } from "../Closing";
import { Reveal } from "../motion";
import SiteShell from "../site/SiteShell";
import { ChangeCards, Faq, Head, LinkButton, OtherSolutions, Orbits, StartFree } from "../site/blocks";

const content = productPages.restaurants;

// Uses the order statuses merchants have in the dashboard.
const today = [
  { where: "Online #2210", items: "Fried rice, chicken, plantain", source: "Menu page · Delivery", amt: "₦6,200", status: "Paid", cls: "pg-pill" },
  { where: "Ada · WhatsApp", items: "Suya wrap × 3", source: "Checkout link", amt: "₦7,500", status: "Awaiting payment", cls: "pg-pill pg-pill--amber" },
  { where: "Walk-in", items: "Jollof rice × 2, zobo × 2", source: "Quick Sale · Cash", amt: "₦9,400", status: "Completed", cls: "pg-pill pg-pill--neutral" },
  { where: "Online #2209", items: "Pepper soup, pounded yam", source: "Menu page · Delivery", amt: "₦5,500", status: "Shipped", cls: "pg-pill pg-pill--blue" },
];

const menu = [
  { name: "Jollof rice", desc: "Smoky party jollof, plantain", price: "₦3,500" },
  { name: "Grilled fish", desc: "Croaker, pepper sauce", price: "₦6,500" },
  { name: "Pepper soup", desc: "Goat meat, uziza", price: "₦4,000" },
  { name: "Ofada stew", desc: "With ofada rice", price: "₦4,500", out: true },
];

const sources = [
  { t: "Walk-in · counter", d: "Rung up with Quick Sale", amt: "₦9,400", Icon: UtensilsCrossed, cls: "pg-well pg-well--forest" },
  { t: "Ada · WhatsApp", d: "Paid with a checkout link", amt: "₦7,500", Icon: ShoppingBag, cls: "pg-well" },
  { t: "Online #2210", d: "Ordered from your menu page", amt: "₦6,200", Icon: Store, cls: "pg-well pg-well--mint" },
];

const flow = [
  { t: "Order placed · #2210", time: "12:41", done: true },
  { t: "Paid", time: "12:42", done: true },
  { t: "Packing", time: "12:55", done: true },
  { t: "Shipped", time: "Out now", done: false },
  { t: "Completed", time: "—", done: false },
];

const changes = [
  { t: "One menu, every channel", d: "The same menu powers your menu page, checkout links and counter sales." },
  { t: "Sold out in a tap", d: "Set a dish's stock to zero and customers see it's finished for today." },
  { t: "Counter and online, one record", d: "Walk-ins, WhatsApp and online orders share the same orders, payments and receipts." },
];

export default function RestaurantsPage() {
  return (
    <SiteShell>
      <section className="pg-hero">
        <Orbits rings={[{ width: 1300, height: 1300, left: "50%", top: 360, marginLeft: -650 }]} />
        <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: 64 }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 32, justifyContent: "space-between", alignItems: "flex-end" }}>
            <div style={{ flex: "1 1 560px", display: "flex", flexDirection: "column", gap: 26, maxWidth: 760 }}>
              <span className="eyebrow">Solutions · Dine-in and menu commerce</span>
              <h1 className="pg-h1">Restaurants <span className="serif">for the way you sell.</span></h1>
            </div>
            <div style={{ flex: "1 1 360px", maxWidth: 440, display: "flex", flexDirection: "column", gap: 22 }}>
              <p className="lead">{content.situation}</p>
              <div className="pg-ctas"><StartFree /><LinkButton href={appLink("/shop/demo-restaurant")}>Try the restaurant demo</LinkButton></div>
            </div>
          </div>
          <Reveal delay={0.15}>
            <div style={{ background: "linear-gradient(180deg, rgba(250,249,245,0.12), rgba(250,249,245,0.04))", border: "1px solid rgba(250,249,245,0.14)", borderRadius: 30, padding: 10 }} aria-hidden="true">
              <div style={{ background: "#fbfcfb", color: "var(--ink)", borderRadius: 22, padding: 22, display: "flex", flexDirection: "column", gap: 18 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
                  <span style={{ display: "flex", flexDirection: "column", gap: 2 }}><b style={{ fontSize: 18 }}>Orders · Lunch</b><span style={{ fontSize: 13, color: "var(--muted)" }}>Counter, WhatsApp and online in one list</span></span>
                  <span style={{ display: "flex", gap: 6 }}><span className="pg-pill pg-pill--forest">Online 2</span><span className="pg-pill pg-pill--neutral">WhatsApp 1</span><span className="pg-pill pg-pill--neutral">Counter 1</span></span>
                </div>
                <div className="pg-grid pg-grid--sm" style={{ gap: 12 }}>
                  {today.map((t) => (
                    <div key={t.where} style={{ background: "var(--paper)", border: "1px solid var(--line-soft)", borderRadius: 14, padding: 14, display: "flex", flexDirection: "column", gap: 8 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}><b style={{ fontSize: 14 }}>{t.where}</b><b style={{ fontSize: 13 }}>{t.amt}</b></div>
                      <span style={{ fontSize: 13, color: "#3f4d47", lineHeight: 1.45 }}>{t.items}</span>
                      <span style={{ fontSize: 12, color: "var(--muted)" }}>{t.source}</span>
                      <span className={t.cls}>{t.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section pg-cream">
        <div className="wrap">
          <Head eyebrow="The workflow" title="From menu to receipt," payoff="one service." lead="Build the menu once. Every order, wherever it comes from, lands in the same orders and payment record." />
          <div className="pg-grid">
            <div className="pg-card">
              <span className="pg-num">01</span>
              <b className="pg-h3">{content.workflow[0]}</b>
              <div className="pg-panel" style={{ padding: 16, gap: 12 }} aria-hidden="true">
                <div style={{ display: "flex", gap: 6, fontSize: 12, fontWeight: 500 }}>
                  <span style={{ padding: "6px 12px", borderRadius: 99, background: "var(--forest)", color: "var(--on-dark)" }}>Mains</span>
                  <span style={{ padding: "6px 12px", borderRadius: 99, background: "var(--paper)" }}>Sides</span>
                  <span style={{ padding: "6px 12px", borderRadius: 99, background: "var(--paper)" }}>Drinks</span>
                </div>
                {menu.map((m) => (
                  <div key={m.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 10, fontSize: 14 }}>
                    <span style={{ display: "flex", flexDirection: "column" }}><b style={{ fontWeight: 600 }}>{m.name}</b><span style={{ fontSize: 12, color: "var(--muted)" }}>{m.desc}</span></span>
                    <span style={{ display: "flex", alignItems: "center", gap: 8 }}>{m.out && <span className="pg-pill pg-pill--amber">Sold out</span>}<b>{m.price}</b></span>
                  </div>
                ))}
              </div>
            </div>
            <div className="pg-card">
              <span className="pg-num">02</span>
              <b className="pg-h3">{content.workflow[1]}</b>
              <div className="pg-panel" aria-hidden="true">
                {sources.map(({ t, d, amt, Icon, cls }) => (
                  <div key={t} className="pg-row">
                    <span className={cls} style={{ width: 38, height: 38, borderRadius: 11 }}><Icon size={17} /></span>
                    <span style={{ flex: 1, display: "flex", flexDirection: "column" }}><b>{t}</b><span style={{ fontSize: 12, color: "var(--muted)" }}>{d}</span></span>
                    <b>{amt}</b>
                  </div>
                ))}
              </div>
            </div>
            <div className="pg-card">
              <span className="pg-num">03</span>
              <b className="pg-h3">{content.workflow[2]}</b>
              <div className="pg-panel pg-panel--dark" style={{ padding: 18, gap: 0 }} aria-hidden="true">
                {flow.map((f, i) => (
                  <div key={f.t} style={{ display: "flex", gap: 14, alignItems: "stretch" }}>
                    <span style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <span style={{ width: 22, height: 22, borderRadius: "50%", background: f.done ? "var(--lime)" : "transparent", border: `1px solid ${f.done ? "var(--lime)" : "rgba(250,249,245,0.4)"}`, display: "inline-flex", alignItems: "center", justifyContent: "center", color: "var(--forest)" }}>{f.done && <Check size={11} strokeWidth={3.4} />}</span>
                      {i < flow.length - 1 && <span style={{ flex: 1, minHeight: 16, borderLeft: `1.5px dashed ${f.done ? "color-mix(in srgb, var(--lime) 55%, transparent)" : "rgba(250,249,245,0.2)"}` }} />}
                    </span>
                    <span style={{ flex: 1, display: "flex", justifyContent: "space-between", paddingBottom: 14, fontSize: 14 }}>
                      <b style={{ fontWeight: 500, color: f.done ? "var(--on-dark)" : "var(--on-dark-muted)" }}>{f.t}</b>
                      <span className="mono" style={{ fontSize: 11, color: "var(--on-dark-faint)" }}>{f.time}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--forest on-dark">
        <div className="wrap">
          <Head eyebrow="What changes" title="Less chasing." payoff="A better record." />
          <ChangeCards items={changes} />
        </div>
      </section>

      <Faq items={content.faq} />
      <OtherSolutions current="/restaurants" />
      <FinalCta plain eyebrow="PulchriFlow" title="Busy service, calm" payoff="records." sub="Set up your menu free. Up to 10 orders a month on Free." />
    </SiteShell>
  );
}
