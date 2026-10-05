import { Bookmark, Check } from "lucide-react";
import { productPages } from "@/lib/product-pages";
import { ChangeCards, Head, LinkButton } from "../site/blocks";
import SolutionTemplate from "./SolutionTemplate";

const content = productPages.supermarkets;

const pick = [
  { name: "Rice, 5kg", aisle: "Pantry · Aisle 2", state: "done" },
  { name: "Eggs, crate of 30", aisle: "Dairy · Aisle 5", state: "done" },
  { name: "Peak milk, 400g tin", aisle: "Dairy · Aisle 5", state: "done" },
  { name: "Fresh tomatoes, 1kg", aisle: "Fresh produce", state: "out" },
  { name: "Vegetable oil, 3L", aisle: "Pantry · Aisle 3", state: "todo" },
  { name: "Dish soap, 750ml", aisle: "Household · Aisle 8", state: "todo" },
] as const;

const aisles = [
  { t: "Fresh produce", n: "48 items", bg: "var(--lime)", fg: "var(--forest)" },
  { t: "Dairy and eggs", n: "36 items", bg: "var(--cream)", fg: "var(--ink)" },
  { t: "Pantry", n: "124 items", bg: "var(--forest)", fg: "var(--on-dark)" },
  { t: "Household", n: "62 items", bg: "#E7DCC6", fg: "var(--ink)" },
];

const baskets = [
  { who: "Tolu O.", what: "Weekly shop · 14 items", tag: "Repeat", cls: "pg-pill pg-pill--mint" },
  { who: "Emeka N.", what: "New basket · 6 items", tag: "New", cls: "pg-pill pg-pill--blue" },
  { who: "Bola A.", what: "Monthly restock · 22 items", tag: "Repeat", cls: "pg-pill pg-pill--mint" },
];

const pipeline = [
  { t: "Received", n: 6, w: "60%", color: "#cddaf3" },
  { t: "Picking", n: 4, w: "40%", color: "var(--amber)" },
  { t: "Packed", n: 3, w: "30%", color: "var(--brand-2)" },
  { t: "Out for delivery", n: 2, w: "20%", color: "var(--lime)" },
  { t: "Delivered", n: 11, w: "100%", color: "var(--cream)" },
];

const changes = [
  { t: "Saved baskets for repeat grocery journeys", d: "Regulars reorder their usual shop instead of starting from an empty cart." },
  { t: "Inventory-aware fulfilment", d: "Picking and packing that fits supermarket operations and knows what is unavailable." },
  { t: "The record stays with the basket", d: "Customer and order records kept with every basket, from pick list to receipt." },
];

function HeroVisual() {
  return (
    <div style={{ position: "relative", width: "100%", maxWidth: 430 }} aria-hidden="true">
      <div className="pg-ui" style={{ padding: 22, gap: 14, borderRadius: 26 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10 }}>
          <span style={{ display: "flex", flexDirection: "column", gap: 2 }}><b style={{ fontSize: 17 }}>Pick list · Basket #3381</b><span style={{ fontSize: 13, color: "var(--muted)" }}>Tolu O. · Weekly shop · Delivery 4pm</span></span>
          <span className="pg-pill pg-pill--amber">Picking</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13 }}>
          <span style={{ flex: 1, height: 8, borderRadius: 99, background: "var(--line-soft)", overflow: "hidden" }}><span style={{ display: "block", width: "64%", height: "100%", background: "var(--brand)", borderRadius: 99 }} /></span>
          <b>9 of 14</b>
        </div>
        {pick.map((p) => {
          const done = p.state === "done";
          const out = p.state === "out";
          return (
            <div key={p.name} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 12px", borderRadius: 14, background: out ? "var(--amber-bg)" : done ? "var(--cream)" : "var(--paper)", border: done || out ? "none" : "1px solid var(--line-soft)" }}>
              <span style={{ width: 22, height: 22, flex: "none", borderRadius: 7, border: `1.5px solid ${done ? "var(--brand)" : out ? "var(--amber)" : "#c5d3ce"}`, background: done ? "var(--brand)" : "var(--paper)", color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>{done && <Check size={12} strokeWidth={3.4} />}</span>
              <span style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                <b style={{ fontSize: 14, fontWeight: 500, textDecoration: done ? "line-through" : "none", color: done ? "var(--muted)" : "var(--ink)" }}>{p.name}</b>
                <span style={{ fontSize: 11, color: "var(--muted)" }}>{p.aisle}</span>
              </span>
              <span style={{ fontSize: 12, fontWeight: 600, color: done ? "var(--brand)" : "var(--ink)" }}>{done ? "Picked" : out ? "Unavailable · substitute?" : "To pick"}</span>
            </div>
          );
        })}
      </div>
      <div className="pg-float pg-float--dark" style={{ position: "absolute", left: -16, bottom: -40, width: 250, display: "flex", gap: 12, alignItems: "center" }}>
        <span className="pg-well pg-well--mint"><Bookmark size={20} /></span>
        <span style={{ display: "flex", flexDirection: "column", gap: 2 }}><span style={{ fontSize: 12, color: "var(--on-dark-muted)" }}>Saved for next week</span><b style={{ fontSize: 14 }}>Weekly shop · 14 items</b></span>
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
      secondary={{ href: "/saved-items", label: "How saved baskets work" }}
      cta={{ title: "Every basket, picked, packed and", payoff: "on the record.", sub: "List your shelves free. Your first 10 orders are on us." }}
    >
      <section className="section pg-cream">
        <div className="wrap">
          <Head eyebrow="The workflow" title="Shelf to doorstep," payoff="with nothing lost." lead="List the shelves, take the baskets, then move every order through picking, packing and delivery." />
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
            <span className="eyebrow">Saved baskets</span>
            <h2 className="h2">The next shop is <span className="serif">already half done.</span></h2>
            <p className="lead">Saved Items are built to support repeat baskets. A regular&apos;s weekly shop becomes one tap to reorder, with the customer and order record kept with every basket.</p>
            <LinkButton href="/saved-items" variant="lime" large={false} style={{ alignSelf: "flex-start" }}>Explore Saved Items</LinkButton>
          </div>
          <div className="pg-col pg-col--wide" style={{ flexDirection: "row", flexWrap: "wrap", gap: 16 }} aria-hidden="true">
            <div className="pg-panel" style={{ flex: "1 1 260px", padding: 22, gap: 12, color: "var(--ink)", borderRadius: 26 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><b style={{ fontSize: 17 }}>Weekly shop</b><span className="pg-pill pg-pill--forest">Saved</span></div>
              <span style={{ fontSize: 13, color: "var(--muted)" }}>Tolu O. · 14 items · last ordered Friday</span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>{["Rice 5kg", "Eggs", "Milk", "Tomatoes", "Onions", "Bread", "Vegetable oil", "+7 more"].map((i) => <span key={i} className="pg-pill" style={{ background: "var(--paper)", color: "var(--ink)", fontWeight: 500 }}>{i}</span>)}</div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 15, fontWeight: 600, paddingTop: 10, borderTop: "1px solid var(--line)" }}><span>Estimated</span><span>₦38,450</span></div>
              <span className="pg-action pg-action--mint">Reorder this basket</span>
            </div>
            <div className="pg-stack" style={{ flex: "1 1 200px" }}>
              {[["Monthly restock", "Bola A. · 22 items"], ["Baby essentials", "Ngozi E. · 9 items"], ["Office snacks", "Kora Studio · 12 items"]].map(([t, d]) => (
                <div key={t} className="pg-card pg-card--dark" style={{ padding: 18, gap: 6 }}><b style={{ fontSize: 15 }}>{t}</b><span className="pg-body" style={{ fontSize: 13 }}>{d}</span></div>
              ))}
            </div>
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
