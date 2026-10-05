import { Check, Link2, Package, Shirt, Store } from "lucide-react";
import { productPages } from "@/lib/product-pages";
import { appLink } from "@/lib/config";
import { Head } from "../site/blocks";
import SolutionTemplate from "./SolutionTemplate";

const content = productPages.retail;

const catalog = [
  { name: "Linen set", cat: "Sets · Sand, Olive", price: "₦31,200", stock: "14 in stock", low: false, bg: "#E7DCC6" },
  { name: "Black tote", cat: "Bags", price: "₦28,000", stock: "2 left", low: true, bg: "#1E2422" },
  { name: "Sage clutch", cat: "Bags", price: "₦19,500", stock: "9 in stock", low: false, bg: "#CFE6E0" },
  { name: "Clay bucket", cat: "Bags", price: "₦24,000", stock: "6 in stock", low: false, bg: "#E4B79C" },
];

const shares = [
  { t: "Storefront page", url: "adascloset.pulchriflow.com", Icon: Store, cls: "pg-well pg-well--forest" },
  { t: "Product page", url: "adascloset.pulchriflow.com/p/linen-set", Icon: Package, cls: "pg-well" },
  { t: "Checkout link", url: "adascloset.pulchriflow.com/c/4TZ9", Icon: Link2, cls: "pg-well pg-well--mint" },
];

const changes = [
  { t: "A catalogue and storefront built for everyday selling", d: "Products, images, prices, stock and categories, shown on a storefront customers can actually order from." },
  { t: "Every sale tool in one workspace", d: "Quick Sale, checkout links, invoices, receipts and customer records, together instead of scattered." },
  { t: "Room to grow", d: "A path to service, restaurant or supermarket capabilities later, without starting over." },
];

function HeroVisual() {
  return (
    <div style={{ position: "relative", width: "100%", maxWidth: 440 }} aria-hidden="true">
      <div className="pg-ui" style={{ padding: 24, gap: 18, borderRadius: 26 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><b style={{ fontSize: 16 }}>Edit product</b><span className="pg-pill">On storefront</span></div>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 8, height: 170 }}>
          <span style={{ borderRadius: 16, background: "#E7DCC6", display: "flex", alignItems: "center", justifyContent: "center", color: "#a08e6b" }}><Shirt size={64} strokeWidth={1} /></span>
          <span style={{ display: "grid", gridTemplateRows: "1fr 1fr", gap: 8 }}><span style={{ borderRadius: 14, background: "#8c9a6e" }} /><span style={{ borderRadius: 14, border: "1.5px dashed #c5d3ce", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--muted)", fontSize: 22 }}>+</span></span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 10 }}>
          {[["Name", "Linen set", true], ["Price", "₦31,200"], ["Stock", "14 in stock"]].map(([k, v, wide]) => (
            <div key={k as string} style={{ gridColumn: wide ? "1 / -1" : undefined, display: "flex", flexDirection: "column", gap: 6, fontSize: 12, fontWeight: 500, color: "var(--muted)" }}>
              {k}
              <span style={{ border: "1px solid var(--line)", borderRadius: 12, padding: "11px 14px", fontSize: 15, color: "var(--ink)" }}>{v}</span>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
          <span style={{ display: "flex", gap: 6, fontSize: 12, fontWeight: 500 }}>
            <span style={{ padding: "6px 12px", borderRadius: 99, background: "var(--forest)", color: "var(--on-dark)" }}>Sand</span>
            <span style={{ padding: "6px 12px", borderRadius: 99, border: "1px solid var(--line)" }}>Olive</span>
            <span style={{ padding: "6px 12px", borderRadius: 99, border: "1px solid var(--line)" }}>Sets</span>
          </span>
          <span className="pg-action pg-action--mint" style={{ padding: "0 18px" }}>Save product</span>
        </div>
      </div>
      <div className="pg-float" style={{ position: "absolute", left: -12, bottom: -36, width: 240, display: "flex", gap: 12, alignItems: "center" }}>
        <span className="pg-well pg-pill--amber" style={{ background: "var(--amber-bg)", color: "var(--ink)" }}><Package size={20} /></span>
        <span style={{ display: "flex", flexDirection: "column", gap: 2 }}><span style={{ fontSize: 12, color: "var(--muted)" }}>Stock alert</span><b style={{ fontSize: 14 }}>Black tote · 2 left</b></span>
      </div>
    </div>
  );
}

export default function RetailPage() {
  return (
    <SolutionTemplate
      path="/retail"
      content={content}
      visual={<HeroVisual />}
      secondary={{ href: appLink("/shop/demo"), label: "Try the demo store" }}
      heroExtra={
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {["Fashion", "Beauty", "Gadgets", "Home goods", "Gifts"].map((k) => (
            <span key={k} className="pg-pill pg-pill--ghost" style={{ fontWeight: 500, padding: "7px 12px" }}>{k}</span>
          ))}
        </div>
      }
      cta={{ title: "One business underneath", payoff: "every sale.", sub: "Set up your catalogue and storefront free. Your first 10 orders are on us." }}
    >
      <section className="section pg-cream">
        <div className="wrap">
          <Head eyebrow="The workflow" title="One clear next step" payoff="at a time." lead="From an empty catalogue to a customer you know by name, in three moves." />
          <div className="pg-grid">
            <div className="pg-card">
              <span className="pg-num">01</span>
              <b className="pg-h3">{content.workflow[0]}</b>
              <div className="pg-panel" aria-hidden="true">
                {catalog.map((p) => (
                  <div key={p.name} className="pg-row" style={{ padding: 10, fontSize: 13 }}>
                    <span className="pg-swatch" style={{ width: 40, height: 40, borderRadius: 10, background: p.bg }} />
                    <span style={{ flex: 1, display: "flex", flexDirection: "column" }}><b style={{ fontWeight: 600 }}>{p.name}</b><span style={{ color: "var(--muted)", fontSize: 12 }}>{p.cat}</span></span>
                    <span style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}><b>{p.price}</b><span style={{ fontSize: 11, color: p.low ? "var(--ink)" : "var(--brand)", fontWeight: p.low ? 600 : 400 }}>{p.stock}</span></span>
                  </div>
                ))}
              </div>
            </div>
            <div className="pg-card">
              <span className="pg-num">02</span>
              <b className="pg-h3">{content.workflow[1]}</b>
              <div className="pg-panel" style={{ padding: 16, gap: 10 }} aria-hidden="true">
                <span style={{ fontSize: 13, fontWeight: 600 }}>Share Linen set</span>
                {shares.map(({ t, url, Icon, cls }) => (
                  <div key={t} className="pg-row">
                    <span className={cls} style={{ width: 36, height: 36, borderRadius: 10 }}><Icon size={16} /></span>
                    <span style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column" }}><b style={{ fontSize: 13 }}>{t}</b><span className="mono" style={{ fontSize: 10, color: "var(--muted)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{url}</span></span>
                    <span style={{ fontSize: 12, fontWeight: 600, color: "var(--brand)" }}>Copy</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="pg-card">
              <span className="pg-num">03</span>
              <b className="pg-h3">{content.workflow[2]}</b>
              <div className="pg-panel pg-panel--dark" style={{ padding: 16, gap: 12 }} aria-hidden="true">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><b style={{ fontSize: 15 }}>Order #1042</b><span className="pg-pill pg-pill--mint">Paid</span></div>
                {[["Customer", "Bola A. · 3rd order"], ["Items", "Linen set (Olive)"], ["Payment", "Card · ₦31,200"], ["Receipt", "RC-0188 · Shared"]].map(([k, v]) => (
                  <div key={k} className="pg-kv"><span>{k}</span><b style={{ fontWeight: 500 }}>{v}</b></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section pg-white">
        <div className="wrap pg-split">
          <div className="pg-col">
            <span className="eyebrow">Payments</span>
            <h2 className="h2">Paid in cash or online. <span className="serif">Recorded the same way.</span></h2>
            <p className="lead">Use manual payment records for the counter and transfers, and Paystack-ready checkout where it is configured. Either way, the payment lands on the order.</p>
          </div>
          <div className="pg-col pg-col--wide">
            <div className="pg-stage" style={{ display: "flex", flexDirection: "column" }} aria-hidden="true">
              <div className="pg-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
                <div className="pg-ui" style={{ padding: 18, gap: 10 }}><span className="pg-label">Recorded by you</span><b style={{ fontSize: 18 }}>Cash · Transfer · POS</b><span style={{ fontSize: 13, color: "var(--muted)" }}>Mark it paid when the money arrives.</span></div>
                <div className="pg-ui" style={{ padding: 18, gap: 10, background: "var(--forest)", color: "var(--on-dark)" }}><span className="pg-label" style={{ color: "var(--on-dark-faint)" }}>Paid online</span><b style={{ fontSize: 18 }}>Paystack-ready checkout</b><span style={{ fontSize: 13, color: "var(--on-dark-muted)" }}>Where configured, checkout records it for you.</span></div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", height: 44 }}><span className="pg-dashed-v" style={{ justifySelf: "center" }} /><span className="pg-dashed-v" style={{ justifySelf: "center" }} /></div>
              <div className="pg-ui" style={{ padding: "18px 20px", flexDirection: "row", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
                <span className="pg-check pg-check--mint" style={{ width: 34, height: 34 }}><Check size={16} strokeWidth={3} /></span>
                <span style={{ flex: 1, display: "flex", flexDirection: "column" }}><b style={{ fontSize: 15 }}>Order #1042 · paid</b><span style={{ fontSize: 12, color: "var(--muted)" }}>Receipt RC-0188 · Linked to Bola A.</span></span>
                <b style={{ fontSize: 18 }}>₦31,200</b>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--forest on-dark">
        <div className="wrap">
          <Head eyebrow="What changes" title="Less chasing." payoff="A better record." />
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
            <div className="pg-stack" style={{ flex: "1 1 480px" }}>
              {changes.map((c, i) => (
                <div key={c.t} className="pg-card pg-card--dark" style={{ flexDirection: "row", alignItems: "flex-start", gap: 18 }}>
                  <span className="pg-num" style={{ paddingTop: 3 }}>0{i + 1}</span>
                  <span style={{ display: "flex", flexDirection: "column", gap: 6 }}><b style={{ fontSize: 20, fontWeight: 500 }}>{c.t}</b><span className="pg-body">{c.d}</span></span>
                </div>
              ))}
            </div>
            <div className="pg-card pg-card--mint" style={{ flex: "1 1 380px" }}>
              <span className="pg-label">Business template</span>
              <b style={{ fontSize: 24, fontWeight: 500, letterSpacing: "-0.02em" }}>Start as retail. Grow into more.</b>
              <div className="pg-stack" style={{ gap: 8 }}>
                {[["Retail", "Current"], ["Services", "Available"], ["Restaurants", "Available"], ["Supermarkets", "Available"]].map(([n, s], i) => (
                  <div key={n} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 16px", borderRadius: 16, background: i === 0 ? "var(--forest)" : "color-mix(in srgb, var(--forest) 8%, transparent)", color: i === 0 ? "var(--on-dark)" : "var(--forest)", fontSize: 15, fontWeight: 500 }}>
                    <span>{n}</span><span style={{ fontSize: 12, fontWeight: 600, opacity: 0.85 }}>{s}</span>
                  </div>
                ))}
              </div>
              <span className="pg-body" style={{ fontSize: 14 }}>Templates can change while your existing records stay put.</span>
            </div>
          </div>
        </div>
      </section>
    </SolutionTemplate>
  );
}

