import { MessageCircle, ShoppingBag, Store } from "lucide-react";
import { FinalCta } from "../Closing";
import { CountUp, Reveal } from "../motion";
import SiteShell from "../site/SiteShell";
import { Head, LinkButton, Orbits, StartFree } from "../site/blocks";
import FlowChooser from "./FlowChooser";

const route = [
  { n: "01", t: "A buyer is ready", d: "At the counter, in a conversation, or through your store.", href: "#step-1" },
  { n: "02", t: "Choose the sale flow", d: "Quick Sale, a checkout link, or a storefront order.", href: "#step-2" },
  { n: "03", t: "Keep the payment clear", d: "Record payment, invoice when needed, keep the receipt.", href: "#step-3" },
  { n: "04", t: "See what happened", d: "Everything returns to one business record.", href: "#step-4" },
];

const trail = [
  { n: "A", tag: "Created", t: "The order", lines: [["Order", "#1043"], ["Total", "₦56,000"]], d: "Every sale starts as an order with the items and the customer attached." },
  { n: "B", tag: "When needed", t: "The invoice", lines: [["Invoice", "INV-0042"], ["Due", "In 3 days"]], d: "For agreed sales and bigger orders, send an invoice they can pay against." },
  { n: "C", tag: "Recorded", t: "The payment", lines: [["Method", "Transfer"], ["Amount", "₦56,000"]], d: "Record cash, transfer or card, or let checkout record it for you where it is set up." },
  { n: "D", tag: "Shared", t: "The receipt", lines: [["Receipt", "RC-0193"], ["Sent via", "WhatsApp"]], d: "The receipt stays with the transaction, ready to share or find again." },
];

const byChannel = [
  { label: "Counter", amt: "₦58,000", w: "46%", color: "var(--brand)" },
  { label: "Checkout links", amt: "₦95,300", w: "76%", color: "var(--lime)" },
  { label: "Storefront", amt: "₦31,200", w: "25%", color: "var(--forest)" },
];

const connected = [
  { n: "The order", t: "Every way you sell", d: "Counter sales and online orders sit in the same list, with the same statuses.", tags: ["Quick Sale", "Checkout link", "Storefront"], cls: "pg-card", tag: "pg-pill pg-pill--neutral" },
  { n: "The payment", t: "Proof that travels", d: "Payments, invoices and receipts stay attached to the order they belong to.", tags: ["Payments", "Invoices", "Receipts"], cls: "pg-card pg-card--forest", tag: "pg-pill pg-pill--ghost" },
  { n: "The next action", t: "People, not threads", d: "Customers and their order history, so the follow-up starts with context.", tags: ["Customers", "Order history", "Follow-up"], cls: "pg-card pg-card--mint", tag: "pg-pill pg-pill--forest" },
];

const start = [
  { t: "Create your store", d: "Sign up free and set up your business. No card required.", tag: "Free", mint: true },
  { t: "Add what you sell", d: "Products with images, prices and stock, or services with no stock at all.", tag: "Catalogue" },
  { t: "Make your first sale", d: "Share your storefront link, send a checkout link, or record a Quick Sale.", tag: "Any channel" },
  { t: "Your first 10 orders are on us", d: "Experience PulchriFlow with real customers before you decide on Pro.", tag: "10 free orders", mint: true },
];

export default function WorkflowPage() {
  return (
    <SiteShell>
      <section className="pg-hero" style={{ paddingBottom: 112 }}>
        <Orbits rings={[{ width: 1100, height: 1100, left: "50%", top: 260, marginLeft: -550 }, { width: 1600, height: 1600, left: "50%", top: 10, marginLeft: -800 }]} />
        <div className="wrap pg-hero-center">
          <span className="eyebrow">How it works</span>
          <h1 className="pg-h1" style={{ maxWidth: 1020 }}>
            Every sale starts somewhere. <span className="serif">The business stays together.</span>
          </h1>
          <p className="lead" style={{ maxWidth: 640 }}>
            PulchriFlow follows the way modern small businesses actually sell, then brings the detail back into a clear operating view.
          </p>
          <StartFree />
        </div>
        <Reveal className="wrap" delay={0.15}>
          <div style={{ position: "relative", marginTop: 80 }}>
          <span aria-hidden="true" className="pg-hide-sm" style={{ position: "absolute", left: "12%", right: "12%", top: 31, borderTop: "1.5px dashed color-mix(in srgb, var(--lime) 40%, transparent)" }} />
          <ol style={{ listStyle: "none", padding: 0, margin: 0, position: "relative" }} className="pg-grid pg-grid--sm">
            {route.map((r, i) => (
              <li key={r.n}>
                <a href={r.href} style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 16 }}>
                  <span
                    className="mono"
                    style={{
                      width: 62,
                      height: 62,
                      borderRadius: "50%",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 15,
                      background: i === route.length - 1 ? "var(--lime)" : "var(--canopy)",
                      color: i === route.length - 1 ? "var(--forest)" : "var(--lime)",
                      border: "1px solid color-mix(in srgb, var(--lime) 45%, transparent)",
                    }}
                  >
                    {r.n}
                  </span>
                  <b style={{ fontSize: 18, fontWeight: 500 }}>{r.t}</b>
                  <span style={{ fontSize: 14, lineHeight: 1.5, color: "var(--on-dark-muted)", maxWidth: 240 }}>{r.d}</span>
                </a>
              </li>
            ))}
          </ol>
          </div>
        </Reveal>
      </section>

      <section className="section pg-cream" id="step-1" style={{ scrollMarginTop: 80 }}>
        <div className="wrap">
          <Head eyebrow="Step 01 — A buyer is ready" title="Three doors" payoff="into one business." lead="A customer finds you at the counter, in a conversation, or through your store. You don't have to pick just one." />
          <div className="pg-grid">
            <div className="pg-card" style={{ minHeight: 420 }}>
              <span style={{ display: "flex", alignItems: "center", gap: 12 }}><span className="pg-well pg-well--brand"><ShoppingBag size={20} aria-hidden="true" /></span><b style={{ fontSize: 19, fontWeight: 500 }}>At the counter</b></span>
              <div className="pg-panel" style={{ flex: 1, justifyContent: "center", padding: 18, gap: 10 }} aria-hidden="true">
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}><span style={{ color: "var(--muted)" }}>Walk-in customer</span><span className="pg-pill" style={{ background: "var(--paper)" }}>In person</span></div>
                <div className="pg-row" style={{ justifyContent: "space-between" }}><span style={{ display: "flex", flexDirection: "column" }}><b>Sage clutch</b><span style={{ fontSize: 12, color: "var(--muted)" }}>Picked from the shelf</span></span><b>₦19,500</b></div>
                <div className="pg-row" style={{ justifyContent: "space-between" }}><span style={{ display: "flex", flexDirection: "column" }}><b>Quick amount</b><span style={{ fontSize: 12, color: "var(--muted)" }}>Small extras</span></span><b>₦2,000</b></div>
              </div>
              <p className="pg-body">Someone is standing in front of you and wants to pay now.</p>
            </div>
            <div className="pg-card" style={{ minHeight: 420 }}>
              <span style={{ display: "flex", alignItems: "center", gap: 12 }}><span className="pg-well pg-well--brand"><MessageCircle size={20} aria-hidden="true" /></span><b style={{ fontSize: 19, fontWeight: 500 }}>In a conversation</b></span>
              <div className="pg-panel" style={{ flex: 1, justifyContent: "center", padding: 18 }} aria-hidden="true">
                <span className="bubble bubble--in">Is the linen set still available?</span>
                <span className="bubble bubble--out">Yes, in sand and olive.</span>
                <span className="bubble bubble--in">Olive please. How do I pay?</span>
              </div>
              <p className="pg-body">A buyer on WhatsApp or Instagram is ready, and you want the order out of the chat.</p>
            </div>
            <div className="pg-card" style={{ minHeight: 420 }}>
              <span style={{ display: "flex", alignItems: "center", gap: 12 }}><span className="pg-well pg-well--brand"><Store size={20} aria-hidden="true" /></span><b style={{ fontSize: 19, fontWeight: 500 }}>Through your store</b></span>
              <div className="pg-panel" style={{ flex: 1 }} aria-hidden="true">
                <span className="mono" style={{ alignSelf: "center", background: "var(--paper)", borderRadius: 99, padding: "5px 12px", fontSize: 10, color: "#3f4d47" }}>adascloset.pulchriflow.com</span>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 8, flex: 1, minHeight: 180 }}>
                  {["#1E2422", "#E7DCC6", "#CFE6E0", "#E4B79C", "#106B5F", "#EEF4F0"].map((c) => <span key={c} style={{ borderRadius: 12, background: c }} />)}
                </div>
              </div>
              <p className="pg-body">They found your link and want to browse before they decide.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section pg-white" id="step-2" style={{ scrollMarginTop: 80 }}>
        <div className="wrap">
          <Head eyebrow="Step 02 — Choose the right sale flow" title="Match the flow" payoff="to the moment." lead="Use Quick Sale, a checkout link, or a storefront order without changing how you run the business." />
          <FlowChooser />
        </div>
      </section>

      <section className="section section--forest on-dark" id="step-3" style={{ scrollMarginTop: 80 }}>
        <Orbits rings={[{ width: 900, height: 900, left: -300, bottom: -400 }]} />
        <div className="wrap" style={{ position: "relative" }}>
          <Head eyebrow="Step 03 — Keep the payment clear" title="No more “did you" payoff="send it?”" lead="Record payment, send an invoice when needed, and keep the receipt with the transaction." />
          <div className="pg-grid pg-grid--sm" style={{ gap: 12 }}>
            {trail.map((p, i) => {
              const last = i === trail.length - 1;
              return (
                <div key={p.n} className={last ? "pg-card pg-card--mint" : "pg-card pg-card--dark"} style={{ borderRadius: 24, padding: 22, gap: 14 }}>
                  <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span className="pg-label">{p.n}</span>
                    <span className={last ? "pg-pill pg-pill--forest" : p.tag === "Recorded" ? "pg-pill pg-pill--mint" : "pg-pill pg-pill--ghost"} style={{ alignSelf: "center" }}>{p.tag}</span>
                  </span>
                  <b style={{ fontSize: 20, fontWeight: 500, letterSpacing: "-0.02em" }}>{p.t}</b>
                  <div style={{ background: last ? "var(--paper)" : "var(--cream)", color: "var(--ink)", borderRadius: 16, padding: 14, display: "flex", flexDirection: "column", gap: 8, fontSize: 13 }}>
                    {p.lines.map(([k, v]) => (
                      <div key={k} style={{ display: "flex", justifyContent: "space-between", gap: 8 }}><span style={{ color: "var(--muted)" }}>{k}</span><b style={{ fontWeight: 600 }}>{v}</b></div>
                    ))}
                  </div>
                  <span className="pg-body" style={{ fontSize: 13 }}>{p.d}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section pg-cream" id="step-4" style={{ scrollMarginTop: 80 }}>
        <div className="wrap pg-split">
          <div className="pg-col" style={{ flex: "1 1 360px" }}>
            <span className="eyebrow">Step 04 — See what happened</span>
            <h2 className="h2">Close the day <span className="serif">knowing the numbers.</span></h2>
            <p className="lead">Orders, customers and the day&apos;s activity come back to one business record, whichever way each sale started.</p>
          </div>
          <div className="pg-col pg-col--wide">
            <div className="pg-ui" style={{ padding: 28, gap: 22, borderRadius: 28 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 12 }}>
                <span style={{ display: "flex", flexDirection: "column", gap: 6 }}><span style={{ fontSize: 13, color: "var(--muted)" }}>Today&apos;s business · Ada&apos;s Closet</span><b style={{ fontSize: 40, letterSpacing: "-0.03em", lineHeight: 1 }}><CountUp to={184500} /></b></span>
                <span className="seg"><span className="is-active">Today</span><span>Week</span><span>Month</span></span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <span className="pg-label">By how the sale started</span>
                {byChannel.map((c) => (
                  <div key={c.label} style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 14 }}>
                    <span style={{ width: 110, flex: "none" }}>{c.label}</span>
                    <span style={{ flex: 1, height: 14, borderRadius: 99, background: "var(--line-soft)", overflow: "hidden" }}><span data-grow="x" style={{ display: "block", height: "100%", borderRadius: 99, width: c.w, background: c.color }} /></span>
                    <b style={{ width: 90, textAlign: "right", flex: "none" }}>{c.amt}</b>
                  </div>
                ))}
              </div>
              <div className="pg-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 10 }}>
                {[["Orders", "23", "4 to confirm"], ["Customers", "18", "5 new"], ["Receipts shared", "21", "2 pending payment"]].map(([k, v, n]) => (
                  <div key={k} style={{ border: "1px solid var(--line)", borderRadius: 16, padding: 14 }}><span style={{ fontSize: 12, color: "var(--muted)" }}>{k}</span><div style={{ fontSize: 24, fontWeight: 600 }}>{v}</div><span style={{ fontSize: 11, color: "var(--brand)" }}>{n}</span></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section pg-white">
        <div className="wrap">
          <Head center eyebrow="What stays connected" title="The order, the payment," payoff="and the next action." />
          <div className="pg-grid">
            {connected.map((c) => (
              <div key={c.n} className={c.cls} style={{ minHeight: 300 }}>
                <span className="pg-label">{c.n}</span>
                <b style={{ fontSize: 28, fontWeight: 500, letterSpacing: "-0.03em" }}>{c.t}</b>
                <p className="pg-body">{c.d}</p>
                <div style={{ marginTop: "auto", display: "flex", flexWrap: "wrap", gap: 6 }}>{c.tags.map((t) => <span key={t} className={c.tag}>{t}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--forest on-dark">
        <div className="wrap pg-split pg-split--top">
          <div className="pg-col" style={{ flex: "1 1 340px" }}>
            <span className="eyebrow">Getting started</span>
            <h2 className="h2">From sign-up to <span className="serif">your first sale.</span></h2>
            <p className="lead">Create your store for free. You only think about upgrading after your first 10 orders.</p>
            <div className="pg-ctas"><StartFree large={false} /><LinkButton href="/pricing" large={false}>See pricing</LinkButton></div>
          </div>
          <ol className="pg-col--wide" style={{ flex: "1.3 1 520px", listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column" }}>
            {start.map((s, i) => (
              <li key={s.t} style={{ display: "flex", gap: 24, padding: "26px 0", borderTop: "1px solid color-mix(in srgb, var(--on-dark) 12%, transparent)", alignItems: "flex-start" }}>
                <span className="mono" style={{ fontSize: 13, color: "var(--lime)", paddingTop: 4 }}>0{i + 1}</span>
                <span style={{ flex: 1, display: "flex", flexDirection: "column", gap: 6 }}><b style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-0.02em" }}>{s.t}</b><span style={{ fontSize: 15, lineHeight: 1.55, color: "var(--on-dark-muted)" }}>{s.d}</span></span>
                <span className={s.mint ? "pg-pill pg-pill--mint" : "pg-pill pg-pill--ghost"}>{s.tag}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <FinalCta plain eyebrow="Get started" title="Bring the flow back to" payoff="your business." sub="Start free, make your first sale, and see it land in one clear record." />
    </SiteShell>
  );
}
