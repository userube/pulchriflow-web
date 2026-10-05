import {
  ArrowRight,
  BarChart3,
  Check,
  Eye,
  Globe,
  ListOrdered,
  MessageCircle,
  ShoppingBag,
  SlidersHorizontal,
  Sparkles,
  Store,
  UtensilsCrossed,
  Scissors,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";
import { FinalCta } from "../Closing";
import { CountUp, Reveal } from "../motion";
import SiteShell from "../site/SiteShell";
import { Head, LinkButton, Orbits, StartFree } from "../site/blocks";

const layer = [
  { label: "Orders", value: "23", note: "4 need attention" },
  { label: "Payments", value: "₦184,500", count: 184500, note: "Cash · Transfer · Card" },
  { label: "Customers", value: "18", note: "5 new today" },
  { label: "Products", value: "64", note: "3 running low" },
  { label: "Receipts", value: "23", note: "All shared" },
];

const caps = [
  { n: "01", t: "Sell at the counter", d: "Record a quick sale when the customer is in front of you.", href: "#sell", group: "sell" },
  { n: "02", t: "Checkout links", d: "Create a payment link when a buyer is ready in a conversation.", href: "#sell", group: "sell" },
  { n: "03", t: "Online store", d: "Give customers a place to browse and order when they want to self-serve.", href: "#sell", group: "sell" },
  { n: "04", t: "Invoices and receipts", d: "Create an invoice for an agreed sale, record payment, and keep the receipt with it.", href: "#invoices", group: "keep" },
  { n: "05", t: "Wholesale price requests", d: "Let buyers ask for a price on quantity orders and review the request in PulchriFlow.", href: "#wholesale", group: "keep" },
  { n: "06", t: "Business records", d: "Orders, payments, customers and products stay connected after the sale.", href: "#records", group: "keep" },
] as const;

const requests = [
  { who: "Bayo Stores", what: "Forest shopper · 50 units", status: "New", main: true },
  { who: "Kemi & Co.", what: "Linen set · 30 units", status: "Price sent", main: false },
  { who: "Uche Retail", what: "Black tote · 25 units", status: "Accepted", main: false },
];

const history = [
  { t: "Order #1043 · Black tote × 2", d: "Checkout link · Transfer · Today", amt: "₦56,000", now: true },
  { t: "Invoice INV-0038 paid", d: "Linen set × 2 · 2 weeks ago", amt: "₦62,400" },
  { t: "Quick Sale at the counter", d: "Cash · Last month", amt: "₦19,500" },
  { t: "Storefront order #0981", d: "Card · March", amt: "₦26,500" },
];

const linked = [
  { kind: "Order", tag: "Packing", tagCls: "pg-pill pg-pill--blue", title: "#1043", detail: "Black tote × 2 · Pick up", cls: "pg-card" },
  { kind: "Payment", tag: "Paid", tagCls: "pg-pill pg-pill--mint", title: "₦56,000", detail: "Transfer · confirmed 10:42am", cls: "pg-card pg-card--forest" },
  { kind: "Receipt", tag: "Shared", tagCls: "pg-pill", title: "RC-0193", detail: "Sent on WhatsApp", cls: "pg-card" },
  { kind: "Product", tag: "2 left", tagCls: "pg-pill pg-pill--amber", title: "Black tote", detail: "Stock updated after the sale", cls: "pg-card" },
];

const pro = [
  { t: "Customer management and analytics", d: "See who buys, how often, and what they come back for.", Icon: BarChart3 },
  { t: "Advanced order management", d: "More control over statuses, fulfilment and follow-up.", Icon: ListOrdered },
  { t: "Store management features", d: "Run a fuller catalogue and storefront.", Icon: SlidersHorizontal },
  { t: "Custom domain", d: "Your storefront on your own web address.", Icon: Globe },
  { t: "Remove PulchriFlow branding", d: "A storefront that is entirely your brand.", Icon: Eye },
  { t: "Sabi and notifications", d: "Your AI business assistant, plus alerts when something needs you.", Icon: Sparkles },
];

const solutions = [
  { t: "Retail", d: "Catalogue, storefront, flexible payments and a record of what each customer bought.", href: "/retail", Icon: ShoppingBag },
  { t: "Services", d: "Tailors, salons, laundries and travel agencies selling time and skill, not stock.", href: "/service-businesses", Icon: Scissors },
  { t: "Restaurants", d: "Menus, tables, kitchen flow and payment records in one place.", href: "/restaurants", Icon: UtensilsCrossed },
  { t: "Supermarkets", d: "Baskets, picking, packing and repeat grocery orders.", href: "/supermarkets", Icon: ShoppingCart },
];

export default function FeaturesPage() {
  return (
    <SiteShell>
      <section className="pg-hero" style={{ paddingBottom: 120 }}>
        <Orbits
          rings={[
            { width: 760, height: 760, left: "50%", top: 380, marginLeft: -380 },
            { width: 1180, height: 1180, left: "50%", top: 170, marginLeft: -590 },
            { width: 1600, height: 1600, left: "50%", top: -40, marginLeft: -800 },
          ]}
        />
        <div className="wrap pg-hero-center">
          <span className="eyebrow">The commerce system</span>
          <h1 className="pg-h1" style={{ maxWidth: 1000 }}>
            More ways to sell. <span className="serif whitespace-nowrap">One place to run it.</span>
          </h1>
          <p className="lead" style={{ maxWidth: 620 }}>
            PulchriFlow is not another channel to manage. It is the business layer beneath the places your customers already buy from.
          </p>
          <div className="pg-ctas">
            <StartFree />
            <LinkButton href="/workflow">See how it works</LinkButton>
          </div>
        </div>

        <Reveal className="wrap" delay={0.2}>
          <div style={{ maxWidth: 1040, margin: "72px auto 0", display: "flex", flexDirection: "column" }}>
            <div className="pg-grid pg-grid--sm">
              <div className="pg-float" style={{ display: "flex", gap: 12, alignItems: "center", padding: 16 }}>
                <span className="pg-well"><ShoppingBag size={20} aria-hidden="true" /></span>
                <span style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <span style={{ fontSize: 12, color: "var(--muted)" }}>At the counter</span>
                  <b style={{ fontSize: 15 }}>Quick Sale · ₦12,500</b>
                  <span style={{ fontSize: 12, color: "var(--brand)", fontWeight: 500 }}>Cash · Receipt ready</span>
                </span>
              </div>
              <div className="pg-float" style={{ display: "flex", gap: 12, alignItems: "center", padding: 16 }}>
                <span className="pg-well"><MessageCircle size={20} aria-hidden="true" /></span>
                <span style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <span style={{ fontSize: 12, color: "var(--muted)" }}>In a conversation</span>
                  <b style={{ fontSize: 15 }}>Checkout link · ₦56,000</b>
                  <span style={{ fontSize: 12, color: "var(--brand)", fontWeight: 500 }}>Transfer · Paid</span>
                </span>
              </div>
              <div className="pg-float pg-float--dark" style={{ display: "flex", gap: 12, alignItems: "center", padding: 16 }}>
                <span className="pg-well pg-well--mint"><Store size={20} aria-hidden="true" /></span>
                <span style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <span style={{ fontSize: 12, color: "var(--on-dark-muted)" }}>From your store</span>
                  <b style={{ fontSize: 15 }}>Order #1042 · ₦31,200</b>
                  <span style={{ fontSize: 12, color: "var(--lime)", fontWeight: 500 }}>Card · Packing</span>
                </span>
              </div>
            </div>
            <div aria-hidden="true" className="pg-hide-sm" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", height: 56 }}>
              {[0, 1, 2].map((i) => (
                <span key={i} style={{ justifySelf: "center", borderLeft: "1.5px dashed color-mix(in srgb, var(--lime) 45%, transparent)" }} />
              ))}
            </div>
            <div
             
              style={{
                borderRadius: 28,
                padding: 24,
                background: "linear-gradient(180deg, rgba(250,249,245,0.1), rgba(250,249,245,0.04))",
                border: "1px solid color-mix(in srgb, var(--lime) 30%, transparent)",
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
                <span style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 15, fontWeight: 600 }}>
                  <span style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--lime)", boxShadow: "0 0 0 4px color-mix(in srgb, var(--lime) 22%, transparent)" }} />
                  The business layer
                </span>
                <span className="mono" style={{ fontSize: 12, color: "var(--on-dark-faint)" }}>Ada&apos;s Closet · Today</span>
              </div>
              <div className="pg-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 10 }}>
                {layer.map((m) => (
                  <div key={m.label} style={{ background: "var(--cream)", color: "var(--ink)", borderRadius: 16, padding: "14px 16px", display: "flex", flexDirection: "column", gap: 4 }}>
                    <span style={{ fontSize: 12, color: "var(--muted)" }}>{m.label}</span>
                    <b style={{ fontSize: 22, fontWeight: 600, letterSpacing: "-0.02em" }}>{"count" in m && m.count ? <CountUp to={m.count} delay={0.6} /> : m.value}</b>
                    <span style={{ fontSize: 11, color: "var(--brand)", fontWeight: 500 }}>{m.note}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section pg-cream">
        <div className="wrap">
          <Head eyebrow="Capabilities" title="Six capabilities." payoff="One record." lead="Three ways to make the sale, three ways to keep it straight afterwards. Jump to any of them." />
          <div className="pg-grid">
            {caps.map((c) => (
              <a key={c.n} href={c.href} className={c.group === "sell" ? "pg-card" : "pg-card pg-card--forest"} style={{ minHeight: 230 }}>
                <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span className="pg-num">{c.n}</span>
                  <span className={c.group === "sell" ? "pg-pill" : "pg-pill pg-pill--ghost"}>{c.group === "sell" ? "Ways to sell" : "Behind the sale"}</span>
                </span>
                <span style={{ fontSize: 24, fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 1.15 }}>{c.t}</span>
                <span className="pg-body">{c.d}</span>
                <span className="pg-link" style={{ marginTop: "auto" }}>See it <ArrowRight size={14} aria-hidden="true" /></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section pg-white" id="sell" style={{ scrollMarginTop: 80 }}>
        <div className="wrap">
          <Head eyebrow="01–03 — Ways to sell" title="Meet the buyer" payoff="where they are." lead="Pick the flow that fits the moment. Every one of them lands in the same orders, payments and customers." />
          <div className="pg-grid">
            <div className="pg-card pg-card--cream" style={{ gap: 24 }}>
              <span style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <span className="pg-num">01 · Sell at the counter</span>
                <span className="pg-h3">The customer is in front of you.</span>
              </span>
              <div className="pg-ui">
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, fontWeight: 600 }}><span>Quick Sale</span><span className="mono" style={{ fontSize: 11, color: "var(--muted)", fontWeight: 400 }}>Counter</span></div>
                <div style={{ textAlign: "center", fontSize: 40, fontWeight: 600, letterSpacing: "-0.04em", padding: "6px 0" }}>₦12,500</div>
                <div style={{ display: "flex", gap: 6, fontSize: 12, fontWeight: 500 }}>
                  <span style={{ flex: 1, textAlign: "center", padding: 8, borderRadius: 99, background: "var(--forest)", color: "var(--lime)" }}>Cash</span>
                  <span style={{ flex: 1, textAlign: "center", padding: 8, borderRadius: 99, border: "1px solid var(--line)" }}>Transfer</span>
                  <span style={{ flex: 1, textAlign: "center", padding: 8, borderRadius: 99, border: "1px solid var(--line)" }}>Card</span>
                </div>
                <span className="pg-action pg-action--mint">Record sale</span>
              </div>
              <p className="pg-body">Record a quick sale or pick items, choose how they paid, and the receipt is ready.</p>
              <Link href="/quick-sale" className="pg-link" style={{ marginTop: "auto", color: "var(--brand)" }}>About Quick Sale <ArrowRight size={14} aria-hidden="true" /></Link>
            </div>

            <div className="pg-card pg-card--cream" style={{ gap: 24 }}>
              <span style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <span className="pg-num">02 · Checkout links</span>
                <span className="pg-h3">The buyer is ready in a chat.</span>
              </span>
              <div className="pg-ui">
                <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <span className="pg-swatch" style={{ width: 44, height: 44, background: "#1E2422" }} />
                  <span style={{ flex: 1, display: "flex", flexDirection: "column" }}><b style={{ fontSize: 14 }}>Black tote × 2</b><span style={{ fontSize: 12, color: "var(--muted)" }}>Pick up</span></span>
                  <b style={{ fontSize: 16 }}>₦56,000</b>
                </div>
                <div className="mono" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, background: "var(--cream)", borderRadius: 12, padding: "10px 12px", fontSize: 11, color: "#3f4d47" }}>
                  <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>adascloset.pulchriflow.com/c/8KQ2</span>
                  <span style={{ fontFamily: "var(--font-geist)", fontWeight: 600, color: "var(--brand)", fontSize: 12 }}>Copy</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 13 }}><span style={{ color: "var(--muted)" }}>Status</span><span className="pg-pill" style={{ alignSelf: "center" }}>Paid · Transfer</span></div>
              </div>
              <p className="pg-body">Create a payment link while the conversation is still warm. The order records itself when they pay.</p>
              <Link href="/checkout-links" className="pg-link" style={{ marginTop: "auto", color: "var(--brand)" }}>About checkout links <ArrowRight size={14} aria-hidden="true" /></Link>
            </div>

            <div className="pg-card pg-card--cream" style={{ gap: 24 }}>
              <span style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <span className="pg-num">03 · Online store</span>
                <span className="pg-h3">They want to browse on their own.</span>
              </span>
              <div className="pg-ui" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 10, padding: 14 }}>
                {[["Linen set", "₦31,200", "#E7DCC6"], ["Sage clutch", "₦19,500", "#CFE6E0"]].map(([n, p, bg]) => (
                  <div key={n} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <span style={{ aspectRatio: "1 / 1", borderRadius: 12, background: bg }} />
                    <span style={{ fontSize: 12, display: "flex", justifyContent: "space-between" }}><span>{n}</span><b>{p}</b></span>
                  </div>
                ))}
                <span className="pg-action" style={{ gridColumn: "1 / -1", color: "var(--on-dark)" }}>Place order · 2 items</span>
              </div>
              <p className="pg-body">A storefront with products, details, a real order flow and a path to pay.</p>
              <Link href="/online-store" className="pg-link" style={{ marginTop: "auto", color: "var(--brand)" }}>About the online store <ArrowRight size={14} aria-hidden="true" /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section pg-cream" id="invoices" style={{ scrollMarginTop: 80 }}>
        <div className="wrap pg-split">
          <div className="pg-col">
            <span className="eyebrow">04 — Invoices and receipts</span>
            <h2 className="h2">Agreed on a price? <span className="serif">Put it on paper.</span></h2>
            <p className="lead" style={{ maxWidth: 460 }}>Create an invoice for an agreed sale, record payment, and keep the receipt with it.</p>
            <ol className="pg-steps">
              {[
                ["Create the invoice", "Items, quantities, delivery and who it is for."],
                ["Record the payment", "Mark it paid by transfer, cash or card when it lands."],
                ["Keep the receipt with it", "The receipt stays attached to the invoice and the order."],
              ].map(([t, d], i) => (
                <li key={t}><span className="pg-num">0{i + 1}</span><span><b>{t}</b><small>{d}</small></span></li>
              ))}
            </ol>
            <LinkButton href="/invoices" variant="forest" large={false} style={{ alignSelf: "flex-start" }}>About invoices</LinkButton>
          </div>
          <div className="pg-col pg-col--wide">
            <div className="pg-stage pg-stage--light" style={{ minHeight: 560, display: "flex", alignItems: "center", justifyContent: "center", paddingBottom: 96 }}>
              <div className="pg-ui" style={{ width: "100%", maxWidth: 380, padding: 28, gap: 18, marginRight: "min(80px, 8vw)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
                  <span style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                    <span className="serif" style={{ fontSize: 26 }}>Ada&apos;s Closet</span>
                    <span className="mono" style={{ fontSize: 11, color: "var(--muted)" }}>INVOICE · INV-0042</span>
                  </span>
                  <span className="pg-pill pg-pill--amber">Due in 3 days</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "var(--muted)", paddingBottom: 14, borderBottom: "1px solid var(--line-soft)" }}><span>Billed to <b style={{ color: "var(--ink)" }}>Tolu O.</b></span><span>Issued 5 Oct</span></div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 14 }}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}><span>Linen set × 4</span><span>₦124,800</span></div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}><span>Black tote × 2</span><span>₦56,000</span></div>
                  <div style={{ display: "flex", justifyContent: "space-between", color: "var(--muted)" }}><span>Delivery</span><span>₦4,500</span></div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 20, fontWeight: 600, paddingTop: 14, borderTop: "1px dashed #cdd8d3" }}><span>Total</span><span>₦185,300</span></div>
                <div style={{ display: "flex", gap: 8 }}>
                  <span className="pg-action" style={{ flex: 1 }}>Record payment</span>
                  <span className="pg-action pg-action--ghost" style={{ flex: 1 }}>Share invoice</span>
                </div>
              </div>
              <div className="pg-float" style={{ position: "absolute", right: 28, bottom: 40, width: 250, padding: 18, display: "flex", flexDirection: "column", gap: 10, transform: "rotate(3deg)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 600 }}><span className="pg-check"><Check size={14} strokeWidth={3} aria-hidden="true" /></span>Payment recorded</div>
                <span className="mono" style={{ fontSize: 11, color: "var(--muted)" }}>Receipt · RC-0193 · INV-0042</span>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, borderTop: "1px dashed #cdd8d3", paddingTop: 10 }}><span>Transfer</span><b>₦185,300</b></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--forest on-dark" id="wholesale" style={{ scrollMarginTop: 80 }}>
        <Orbits rings={[{ width: 900, height: 900, right: -300, top: -200 }]} />
        <div className="wrap" style={{ position: "relative" }}>
          <Head eyebrow="05 — Wholesale price requests" title="Let buyers ask" payoff="for your price." lead="For quantity-based selling, buyers can ask for a price and you review the request in PulchriFlow." />
          <div className="pg-grid">
            <div className="pg-card pg-card--dark">
              <span className="pg-label">The product</span>
              <div className="pg-ui" style={{ boxShadow: "none" }}>
                <span style={{ height: 150, borderRadius: 14, background: "var(--brand)", display: "flex", alignItems: "center", justifyContent: "center", color: "#9fd0c5" }}><ShoppingBag size={56} strokeWidth={1.1} aria-hidden="true" /></span>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 15 }}><b>Forest shopper</b><span>₦26,500</span></div>
                <span className="pg-pill">Minimum order · 20 units</span>
              </div>
              <p className="pg-body">Products can support minimum order quantities.</p>
            </div>
            <div className="pg-card pg-card--dark">
              <span className="pg-label">The buyer asks</span>
              <div className="pg-panel" style={{ color: "var(--ink)", padding: 18, gap: 12 }}>
                <b style={{ fontSize: 16 }}>Request a wholesale price</b>
                <span style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 12, fontWeight: 500 }}>Quantity<span style={{ background: "var(--paper)", border: "1px solid var(--line)", borderRadius: 12, padding: "11px 14px", fontSize: 14, fontWeight: 400 }}>50 units</span></span>
                <span style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 12, fontWeight: 500 }}>Note<span style={{ background: "var(--paper)", border: "1px solid var(--line)", borderRadius: 12, padding: "11px 14px", fontSize: 14, fontWeight: 400, color: "var(--muted)" }}>For our shop in Ibadan, delivery by month end.</span></span>
                <span className="pg-action">Send request</span>
              </div>
              <p className="pg-body">Buyers can submit a price request.</p>
            </div>
            <div className="pg-card pg-card--mint">
              <span className="pg-label">You review</span>
              <div className="pg-stack" style={{ gap: 8 }}>
                {requests.map((r) => (
                  <div key={r.who} style={{ background: r.main ? "var(--forest)" : "color-mix(in srgb, var(--forest) 8%, transparent)", color: r.main ? "var(--on-dark)" : "var(--forest)", borderRadius: 16, padding: 14, display: "flex", flexDirection: "column", gap: 10 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
                      <span style={{ display: "flex", flexDirection: "column" }}><b style={{ fontSize: 14 }}>{r.who}</b><span style={{ fontSize: 12, opacity: 0.78 }}>{r.what}</span></span>
                      <span className={r.main ? "pg-pill pg-pill--mint" : r.status === "Accepted" ? "pg-pill pg-pill--forest" : "pg-pill"} style={{ alignSelf: "center" }}>{r.status}</span>
                    </div>
                    {r.main && (
                      <div style={{ display: "flex", gap: 6, fontSize: 12, fontWeight: 600 }}>
                        <span style={{ flex: 1, textAlign: "center", padding: 9, borderRadius: 10, background: "var(--lime)", color: "var(--forest)" }}>Send price</span>
                        <span style={{ flex: 1, textAlign: "center", padding: 9, borderRadius: 10, border: "1px solid rgba(250,249,245,0.25)" }}>Decline</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <p className="pg-body">Merchants review wholesale requests in PulchriFlow.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section pg-white" id="records" style={{ scrollMarginTop: 80 }}>
        <div className="wrap">
          <Head eyebrow="06 — Business records" title="The sale ends." payoff="The record doesn't." lead="Orders, payments, customers and products stay connected after the sale, so the next one starts with context." />
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
            <div data-reveal className="pg-card pg-card--cream" style={{ flex: "1 1 360px", gap: 22 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <span style={{ width: 56, height: 56, borderRadius: "50%", background: "var(--brand)", color: "var(--on-dark)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 600, fontSize: 18 }}>CK</span>
                <span style={{ display: "flex", flexDirection: "column", gap: 2 }}><b style={{ fontSize: 20 }}>Chioma K.</b><span style={{ fontSize: 13, color: "var(--muted)" }}>Customer since March · WhatsApp</span></span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 8 }}>
                {[["Orders", "7"], ["Spent", "₦214k"], ["Last order", "Today"]].map(([k, v]) => (
                  <div key={k} style={{ background: "var(--paper)", borderRadius: 14, padding: 12 }}><span style={{ fontSize: 11, color: "var(--muted)" }}>{k}</span><div style={{ fontSize: 20, fontWeight: 600 }}>{v}</div></div>
                ))}
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span className="pg-label" style={{ paddingBottom: 8 }}>History</span>
                {history.map((h) => (
                  <div key={h.t} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <span style={{ display: "flex", flexDirection: "column", alignItems: "center", alignSelf: "stretch" }}>
                      <span style={{ width: 10, height: 10, borderRadius: "50%", marginTop: 5, background: h.now ? "var(--lime)" : "var(--brand)" }} />
                      <span className="pg-dashed-v" style={{ flex: 1, marginTop: 4 }} />
                    </span>
                    <span style={{ flex: 1, display: "flex", justifyContent: "space-between", gap: 12, paddingBottom: 16, fontSize: 14 }}>
                      <span style={{ display: "flex", flexDirection: "column" }}><b style={{ fontWeight: 600 }}>{h.t}</b><span style={{ fontSize: 12, color: "var(--muted)" }}>{h.d}</span></span>
                      <b>{h.amt}</b>
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="pg-grid pg-grid--sm" style={{ flex: "1 1 520px" }}>
              {linked.map((k) => (
                <div key={k.kind} className={k.cls} style={{ gap: 14 }}>
                  <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><span className="pg-label">{k.kind}</span><span className={k.tagCls} style={{ alignSelf: "center" }}>{k.tag}</span></span>
                  <b style={{ fontSize: 22, fontWeight: 600, letterSpacing: "-0.02em" }}>{k.title}</b>
                  <span className="pg-body">{k.detail}</span>
                  <span className="pg-label" style={{ marginTop: "auto", textTransform: "none", letterSpacing: 0 }}>Linked to Chioma K. · Order #1043</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section pg-cream">
        <div className="wrap pg-split pg-split--top">
          <div className="pg-col" style={{ flex: "1 1 360px" }}>
            <span className="eyebrow">On Pro</span>
            <h2 className="h2">When it&apos;s time to <span className="serif">grow into it.</span></h2>
            <p className="lead">Pro adds the tools a busier business reaches for: insight, control and a store that is fully yours.</p>
            <LinkButton href="/pricing" variant="forest" large={false} style={{ alignSelf: "flex-start" }}>See pricing</LinkButton>
            <div className="pg-ui" style={{ flexDirection: "row", alignItems: "flex-start", maxWidth: 380, padding: 16 }}>
              <span className="pg-well pg-well--forest" style={{ width: 40, height: 40, borderRadius: 12 }}><Sparkles size={18} aria-hidden="true" /></span>
              <span style={{ display: "flex", flexDirection: "column", gap: 4 }}><b style={{ fontSize: 14 }}>Sabi · 9:02am</b><span style={{ fontSize: 14, lineHeight: 1.45, color: "#3f4d47" }}>Black tote is down to 2. It was your best seller last week.</span></span>
            </div>
          </div>
          <div className="pg-grid pg-grid--sm" style={{ flex: "2 1 560px", gap: 12 }}>
            {pro.map(({ t, d, Icon }) => (
              <div key={t} className="pg-card" style={{ minHeight: 170, gap: 14 }}>
                <span className="pg-well"><Icon size={20} aria-hidden="true" /></span>
                <b style={{ fontSize: 17, fontWeight: 600 }}>{t}</b>
                <span className="pg-body" style={{ fontSize: 14 }}>{d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--forest on-dark">
        <div className="wrap">
          <Head eyebrow="Solutions" title="Configured for" payoff="the way you sell." lead="The same platform, set up for your kind of business. Switch templates later without losing your records." />
          <div className="pg-grid pg-grid--sm">
            {solutions.map(({ t, d, href, Icon }) => (
              <Link key={href} href={href} className="pg-card pg-card--dark" style={{ minHeight: 260 }}>
                <span className="pg-well pg-well--mint"><Icon size={20} aria-hidden="true" /></span>
                <b style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-0.02em" }}>{t}</b>
                <span className="pg-body" style={{ fontSize: 14 }}>{d}</span>
                <span className="pg-link" style={{ marginTop: "auto", color: "var(--lime)" }}>Explore {t} <ArrowRight size={14} aria-hidden="true" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCta plain eyebrow="PulchriFlow" title="The work behind a sale should not be" payoff="a second job." sub="Start free and run every sale, record and follow-up from one place." />
    </SiteShell>
  );
}
