import { Check, ShoppingBag, Store, UtensilsCrossed } from "lucide-react";
import { productPages } from "@/lib/product-pages";
import { FinalCta } from "../Closing";
import { Reveal } from "../motion";
import SiteShell from "../site/SiteShell";
import { ChangeCards, Faq, Head, LinkButton, OtherSolutions, Orbits, StartFree } from "../site/blocks";

const content = productPages.restaurants;

type Ticket = { where: string; items: string; time: string; tag: string; tagCls: string; late?: boolean };
const board: { name: string; dot: string; tickets: Ticket[] }[] = [
  { name: "New", dot: "var(--blue)", tickets: [
    { where: "Table 4", items: "Jollof rice × 2, grilled fish, zobo × 2", time: "2 min", tag: "Dine-in", tagCls: "pg-pill pg-pill--neutral" },
    { where: "Online #2210", items: "Fried rice, chicken, plantain", time: "1 min", tag: "Delivery", tagCls: "pg-pill pg-pill--blue" },
  ] },
  { name: "Preparing", dot: "var(--amber)", tickets: [
    { where: "Table 7", items: "Pepper soup, pounded yam", time: "14 min", tag: "Dine-in", tagCls: "pg-pill pg-pill--neutral", late: true },
    { where: "Pickup · Ada", items: "Suya wrap × 3", time: "8 min", tag: "Pickup", tagCls: "pg-pill pg-pill--amber" },
  ] },
  { name: "Ready", dot: "var(--brand)", tickets: [{ where: "Table 1", items: "Egusi, amala, goat meat", time: "Now", tag: "Waiter to serve", tagCls: "pg-pill" }] },
  { name: "Served · unpaid", dot: "var(--forest)", tickets: [{ where: "Table 6", items: "Jollof × 2, grilled fish, zobo × 3", time: "₦15,900", tag: "Pay after eating", tagCls: "pg-pill pg-pill--mint" }] },
];

const menu = [
  { name: "Jollof rice", desc: "Smoky party jollof, plantain", price: "₦3,500" },
  { name: "Grilled fish", desc: "Croaker, pepper sauce", price: "₦6,500" },
  { name: "Pepper soup", desc: "Goat meat, uziza", price: "₦4,000" },
  { name: "Ofada stew", desc: "With ofada rice", price: "₦4,500", out: true },
];

const sources = [
  { t: "Dine-in · Table 4", d: "Taken by waiter", amt: "₦13,800", Icon: UtensilsCrossed, cls: "pg-well pg-well--forest" },
  { t: "Pickup · Ada", d: "Ordered by phone", amt: "₦7,500", Icon: ShoppingBag, cls: "pg-well" },
  { t: "Online #2210", d: "From your storefront", amt: "₦6,200", Icon: Store, cls: "pg-well pg-well--mint" },
];

const flow = [
  { t: "Order placed · Table 4", time: "12:41", done: true },
  { t: "Kitchen preparing", time: "12:43", done: true },
  { t: "Waiter served", time: "12:58", done: true },
  { t: "Payment", time: "Waiting", done: false },
  { t: "Receipt", time: "—", done: false },
];

const states = {
  free: { label: "Free", bg: "var(--paper)", fg: "var(--muted)", border: "var(--line)" },
  seated: { label: "Seated", bg: "#e7eefb", fg: "var(--blue)", border: "#cddaf3" },
  order: { label: "Ordering", bg: "var(--amber-bg)", fg: "var(--ink)", border: "#f0d9a6" },
  eat: { label: "Eating", bg: "var(--brand)", fg: "#fff", border: "var(--brand)" },
  bill: { label: "Bill ready", bg: "var(--lime)", fg: "var(--forest)", border: "#5fc4b0" },
} as const;
const tables: (keyof typeof states)[] = ["eat", "free", "order", "eat", "free", "bill", "seated", "eat", "free", "order", "bill", "free"];
const qr = "1110110101011101010110111".split("");

const changes = [
  { t: "One platform for the whole room", d: "Table, menu, order, customer and payment records together." },
  { t: "QR and waiter-ready", d: "Flows designed to plug into the same dashboard rather than a separate system." },
  { t: "Pay after eating", d: "Supported without duplicating storefront logic." },
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
              <div className="pg-ctas"><StartFree /><LinkButton href="#tables">See the floor</LinkButton></div>
            </div>
          </div>
          <Reveal delay={0.15}>
            <div style={{ background: "linear-gradient(180deg, rgba(250,249,245,0.12), rgba(250,249,245,0.04))", border: "1px solid rgba(250,249,245,0.14)", borderRadius: 30, padding: 10 }} aria-hidden="true">
              <div style={{ background: "#fbfcfb", color: "var(--ink)", borderRadius: 22, padding: 22, display: "flex", flexDirection: "column", gap: 18 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
                  <span style={{ display: "flex", flexDirection: "column", gap: 2 }}><b style={{ fontSize: 18 }}>Kitchen · Lunch service</b><span style={{ fontSize: 13, color: "var(--muted)" }}>9 open orders</span></span>
                  <span style={{ display: "flex", gap: 6 }}><span className="pg-pill pg-pill--forest">Dine-in 5</span><span className="pg-pill pg-pill--neutral">Pickup 2</span><span className="pg-pill pg-pill--neutral">Online 2</span></span>
                </div>
                <div className="pg-grid pg-grid--sm" style={{ gap: 12 }}>
                  {board.map((col) => (
                    <div key={col.name} style={{ background: "var(--line-soft)", borderRadius: 18, padding: 12, display: "flex", flexDirection: "column", gap: 10 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "2px 4px" }}>
                        <b style={{ fontSize: 13, display: "flex", alignItems: "center", gap: 8 }}><span className="pg-dot" style={{ background: col.dot }} />{col.name}</b>
                        <span className="mono" style={{ fontSize: 11, color: "var(--muted)" }}>{col.tickets.length}</span>
                      </div>
                      {col.tickets.map((t) => (
                        <div key={t.where} style={{ background: "var(--paper)", borderRadius: 14, padding: 12, display: "flex", flexDirection: "column", gap: 8, boxShadow: "0 1px 2px rgba(9,34,29,0.06)" }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><b style={{ fontSize: 14 }}>{t.where}</b><span className="mono" style={{ fontSize: 11, color: t.late ? "var(--ink)" : "var(--muted)", fontWeight: t.late ? 600 : 400 }}>{t.time}</span></div>
                          <span style={{ fontSize: 13, color: "#3f4d47", lineHeight: 1.45 }}>{t.items}</span>
                          <span className={t.tagCls}>{t.tag}</span>
                        </div>
                      ))}
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
          <Head eyebrow="The workflow" title="From menu to receipt," payoff="one service." lead="Build the menu once. Every order, wherever it comes from, moves through the same kitchen and the same payment record." />
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

      <section className="section pg-white" id="tables" style={{ scrollMarginTop: 80 }}>
        <div className="wrap pg-split">
          <div className="pg-col" style={{ flex: "1 1 360px" }}>
            <span className="eyebrow">Tables, QR and waiters</span>
            <h2 className="h2">The floor, the kitchen and the till, <span className="serif">in one view.</span></h2>
            <p className="lead">QR and waiter-ready flows are designed to plug into the same dashboard, with pay-after-eating supported without duplicating storefront logic.</p>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexWrap: "wrap", gap: 12, fontSize: 13 }} aria-label="Table states">
              {Object.values(states).map((s) => (
                <li key={s.label} style={{ display: "inline-flex", alignItems: "center", gap: 8 }}><span style={{ width: 12, height: 12, borderRadius: 4, background: s.bg, border: `1px solid ${s.border}` }} />{s.label}</li>
              ))}
            </ul>
          </div>
          <div className="pg-col pg-col--wide" style={{ position: "relative", paddingBlock: 40 }} aria-hidden="true">
            <div className="pg-stage" style={{ padding: 32 }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 12 }}>
                {tables.map((k, i) => {
                  const s = states[k];
                  return (
                    <div key={i} style={{ aspectRatio: "1 / 1", borderRadius: (i + 1) % 4 === 0 ? "50%" : 18, background: s.bg, color: s.fg, border: `1px solid ${s.border}`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 4 }}>
                      <b style={{ fontSize: 18 }}>{i + 1}</b>
                      <span style={{ fontSize: 11, fontWeight: 500 }}>{s.label === "Bill ready" ? "Bill" : s.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="pg-float" style={{ position: "absolute", right: -16, bottom: 0, width: 230, padding: 18, display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}><b style={{ fontSize: 14 }}>Table 6 · Bill</b><span className="pg-pill">Pay after eating</span></div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 13 }}>
                {[["Jollof rice × 2", "₦7,000"], ["Grilled fish", "₦6,500"], ["Zobo × 3", "₦2,400"]].map(([a, b]) => <div key={a} style={{ display: "flex", justifyContent: "space-between" }}><span>{a}</span><span>{b}</span></div>)}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 16, fontWeight: 600, borderTop: "1px dashed #cdd8d3", paddingTop: 10 }}><span>Total</span><span>₦15,900</span></div>
              <span className="pg-action pg-action--mint" style={{ minHeight: 40 }}>Take payment</span>
            </div>
            <div className="pg-float pg-float--dark" style={{ position: "absolute", left: -20, top: 0, width: 150, display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
              <div style={{ width: 84, height: 84, background: "#fff", borderRadius: 10, padding: 8, display: "grid", gridTemplateColumns: "repeat(5, minmax(0, 1fr))", gap: 3 }}>
                {qr.map((b, i) => <span key={i} style={{ borderRadius: 2, background: b === "1" ? "var(--forest)" : "#fff" }} />)}
              </div>
              <b style={{ fontSize: 13 }}>Table 6</b>
              <span style={{ fontSize: 11, color: "var(--on-dark-muted)", textAlign: "center" }}>Scan to see the menu</span>
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
      <FinalCta plain eyebrow="PulchriFlow" title="Busy service, calm" payoff="records." sub="Set up your menu free. Your first 10 orders are on us." />
    </SiteShell>
  );
}
