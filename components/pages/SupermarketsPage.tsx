import { Tag } from "lucide-react";
import { productPages } from "@/lib/product-pages";
import { appLink } from "@/lib/config";
import { ChangeCards, Head } from "../site/blocks";
import SolutionTemplate from "./SolutionTemplate";

const content = productPages.supermarkets;

const basket = [
  { name: "Long grain rice, 5kg", qty: 1, price: "₦9,800" },
  { name: "Eggs, crate of 30", qty: 1, price: "₦5,600" },
  { name: "Evaporated milk, 400g", qty: 6, price: "₦10,500", note: "6+ price applied" },
  { name: "Vegetable oil, 3L", qty: 1, price: "₦7,400" },
  { name: "Fresh tomatoes, 1kg", qty: 2, price: "₦4,400" },
];

const aisles = [
  { t: "Fresh produce", n: "48 items", bg: "var(--lime)", fg: "var(--forest)" },
  { t: "Dairy and eggs", n: "36 items", bg: "var(--cream)", fg: "var(--ink)" },
  { t: "Pantry", n: "124 items", bg: "var(--forest)", fg: "var(--on-dark)" },
  { t: "Household", n: "62 items", bg: "#E7DCC6", fg: "var(--ink)" },
];

const baskets = [
  { who: "Tolu O.", what: "Weekly shop · 14 items", tag: "Returning", cls: "pg-pill pg-pill--mint" },
  { who: "Emeka N.", what: "New basket · 6 items", tag: "New", cls: "pg-pill pg-pill--blue" },
  { who: "Bola A.", what: "Monthly restock · 22 items", tag: "Returning", cls: "pg-pill pg-pill--mint" },
];

// The order statuses merchants use in the dashboard.
const pipeline = [
  { t: "Awaiting payment", n: 3, w: "30%", color: "#cddaf3" },
  { t: "Paid", n: 6, w: "60%", color: "var(--amber)" },
  { t: "Packing", n: 4, w: "40%", color: "var(--brand-2)" },
  { t: "Shipped", n: 2, w: "20%", color: "var(--lime)" },
  { t: "Completed", n: 11, w: "100%", color: "var(--cream)" },
];

const tiers = [
  { name: "Malt drink, 33cl", one: "₦650", many: "₦560", from: "6+" },
  { name: "Bottled water, 75cl", one: "₦250", many: "₦200", from: "12+" },
  { name: "Noodles, 70g", one: "₦300", many: "₦255", from: "20+" },
];

const changes = [
  { t: "Aisles customers can shop", d: "Categories become aisles on your store, with search and quick add for a full basket." },
  { t: "Bulk prices that apply themselves", d: "Set a lower price for larger quantities and it applies in the basket automatically." },
  { t: "Stock that stays honest", d: "Low and out-of-stock items show on your store, so customers don't order what you can't send." },
];

function HeroVisual() {
  return (
    <div style={{ position: "relative", width: "100%", maxWidth: 430 }} aria-hidden="true">
      <div className="pg-ui" style={{ padding: 22, gap: 12, borderRadius: 26 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10 }}>
          <span style={{ display: "flex", flexDirection: "column", gap: 2 }}><b style={{ fontSize: 17 }}>Order #3381</b><span style={{ fontSize: 13, color: "var(--muted)" }}>Tolu O. · Weekly shop · Delivery</span></span>
          <span className="pg-pill pg-pill--amber">Packing</span>
        </div>
        {basket.map((p) => (
          <div key={p.name} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 12px", borderRadius: 14, background: "var(--cream)" }}>
            <span className="mono" style={{ width: 28, flex: "none", fontSize: 12, color: "var(--muted)" }}>{p.qty}×</span>
            <span style={{ flex: 1, display: "flex", flexDirection: "column" }}>
              <b style={{ fontSize: 14, fontWeight: 500 }}>{p.name}</b>
              {p.note && <span style={{ fontSize: 11, color: "var(--brand)", fontWeight: 600 }}>{p.note}</span>}
            </span>
            <b style={{ fontSize: 13 }}>{p.price}</b>
          </div>
        ))}
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 15, fontWeight: 600, paddingTop: 10, borderTop: "1px solid var(--line)" }}><span>Total with delivery</span><span>₦39,200</span></div>
      </div>
      <div className="pg-float pg-float--dark" style={{ position: "absolute", left: -16, bottom: -40, width: 250, display: "flex", gap: 12, alignItems: "center" }}>
        <span className="pg-well pg-well--mint"><Tag size={20} /></span>
        <span style={{ display: "flex", flexDirection: "column", gap: 2 }}><span style={{ fontSize: 12, color: "var(--on-dark-muted)" }}>Bulk price applied</span><b style={{ fontSize: 14 }}>Milk · 6+ for ₦1,750 each</b></span>
      </div>
    </div>
  );
}

export default function SupermarketsPage() {
  return (
    <SolutionTemplate
      path="/supermarkets"
      content={content}
      visual={<HeroVisual />}
      secondary={{ href: appLink("/shop/demo-supermarket"), label: "Try the supermarket demo" }}
      cta={{ title: "Every basket, paid, packed and", payoff: "on the record.", sub: "List your shelves free. Up to 10 orders a month on Free." }}
    >
      <section className="section pg-cream">
        <div className="wrap">
          <Head eyebrow="The workflow" title="Shelf to doorstep," payoff="with nothing lost." lead="List your aisles, take basket orders, then move each order from paid to packed to delivered." />
          <div className="pg-grid">
            <div className="pg-card">
              <span className="pg-num">01</span>
              <b className="pg-h3">{content.workflow[0]}</b>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 8 }} aria-hidden="true">
                {aisles.map((a) => (
                  <div key={a.t} style={{ borderRadius: 16, padding: 14, background: a.bg, color: a.fg, display: "flex", flexDirection: "column", gap: 18, minHeight: 96 }}><b style={{ fontSize: 15 }}>{a.t}</b><span className="mono" style={{ fontSize: 11, opacity: 0.8 }}>{a.n}</span></div>
                ))}
              </div>
            </div>
            <div className="pg-card">
              <span className="pg-num">02</span>
              <b className="pg-h3">{content.workflow[1]}</b>
              <div className="pg-panel" aria-hidden="true">
                {baskets.map((b) => (
                  <div key={b.who} className="pg-row"><span style={{ display: "flex", flexDirection: "column", flex: 1 }}><b>{b.who}</b><span style={{ fontSize: 12, color: "var(--muted)" }}>{b.what}</span></span><span className={b.cls} style={{ alignSelf: "center" }}>{b.tag}</span></div>
                ))}
              </div>
            </div>
            <div className="pg-card">
              <span className="pg-num">03</span>
              <b className="pg-h3">{content.workflow[2]}</b>
              <div className="pg-panel pg-panel--dark" style={{ padding: 16, gap: 10 }} aria-hidden="true">
                {pipeline.map((p) => (
                  <div key={p.t} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 14 }}>
                    <span style={{ width: 110, flex: "none", color: "var(--on-dark-muted)" }}>{p.t}</span>
                    <span style={{ flex: 1, height: 22, borderRadius: 8, background: "rgba(250,249,245,0.08)", overflow: "hidden" }}><span data-grow="x" style={{ display: "block", height: "100%", width: p.w, background: p.color, borderRadius: 8 }} /></span>
                    <b style={{ width: 24, textAlign: "right" }}>{p.n}</b>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--forest on-dark">
        <div className="wrap pg-split">
          <div className="pg-col">
            <span className="eyebrow">Bulk prices</span>
            <h2 className="h2">Buy more, <span className="serif">pay less.</span></h2>
            <p className="lead">Give a product a lower price for larger quantities. When a customer adds enough to their basket, the bulk price applies by itself, on your store and in the order.</p>
          </div>
          <div className="pg-col pg-col--wide" style={{ flexDirection: "row", flexWrap: "wrap", gap: 16 }} aria-hidden="true">
            {tiers.map((t) => (
              <div key={t.name} className="pg-panel" style={{ flex: "1 1 200px", padding: 20, gap: 10, color: "var(--ink)", borderRadius: 22 }}>
                <b style={{ fontSize: 15 }}>{t.name}</b>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14 }}><span style={{ color: "var(--muted)" }}>Each</span><b>{t.one}</b></div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14 }}><span style={{ color: "var(--muted)" }}>{t.from}</span><b style={{ color: "var(--brand)" }}>{t.many} each</b></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section pg-white">
        <div className="wrap">
          <Head eyebrow="What changes" title="Less chasing." payoff="A better record." />
          <ChangeCards items={changes} tone="light" />
        </div>
      </section>
    </SolutionTemplate>
  );
}
