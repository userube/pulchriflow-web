/* eslint-disable @next/next/no-img-element -- small static SVG logo shown as-is. */
import { ArrowRight, Download } from "lucide-react";
import SiteShell from "../site/SiteShell";
import { Head, LinkButton, Orbits } from "../site/blocks";
import CopyButton from "./CopyButton";

const boilerplate =
  "PulchriFlow is a commerce OS helping WhatsApp and social sellers create storefronts, record sales, send invoices, receive payments, and understand business activity from one dashboard.";

const facts = [
  { k: "What it is", v: "A commerce OS for WhatsApp and social sellers", d: "The business layer beneath the places customers already buy from.", cls: "pg-card pg-card--forest" },
  { k: "What merchants do", v: "Sell, invoice, get paid and see the business", d: "Storefronts, Quick Sale, checkout links, invoices, receipts and customer records.", cls: "pg-card" },
  { k: "Who it is for", v: "Retail, services, restaurants and supermarkets", d: "Configured per business type, on one platform.", cls: "pg-card" },
  { k: "Pricing", v: "Free to start, up to 10 orders a month", d: "Pro is available monthly, quarterly or yearly.", cls: "pg-card pg-card--mint" },
];

const colors = [
  { t: "Brand green", hex: "#106B5F" },
  { t: "Forest", hex: "#09221D" },
  { t: "Mint", hex: "#7FD8C6" },
  { t: "Canvas", hex: "#FAF9F5" },
  { t: "Ink", hex: "#041510" },
];

const mail = "mailto:support@pulchriflow.com?subject=Media%20enquiry";

export default function PressPage() {
  return (
    <SiteShell>
      <section className="pg-hero" style={{ paddingBottom: 112 }}>
        <Orbits rings={[{ width: 900, height: 900, left: -280, top: -200 }]} />
        <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: 36 }}>
          <span className="eyebrow">Press</span>
          <h1 className="pg-h1" style={{ maxWidth: 1000 }}>PulchriFlow, <span className="serif">in brief.</span></h1>
          <p style={{ margin: 0, maxWidth: 980, fontSize: "clamp(22px, 2.6vw, 32px)", lineHeight: 1.35, letterSpacing: "-0.015em", color: "#dde7e2" }}>{boilerplate}</p>
          <div className="pg-ctas"><a className="btn btn--lime btn--lg" href={mail}>Media enquiries</a><LinkButton href="#assets">Brand assets</LinkButton></div>
        </div>
      </section>

      <section className="section pg-cream">
        <div className="wrap">
          <Head eyebrow="At a glance" title="The short version" payoff="for your story." />
          <div className="pg-grid pg-grid--sm">
            {facts.map((f) => (
              <div key={f.k} className={f.cls} style={{ minHeight: 220, gap: 14 }}>
                <span className="pg-label">{f.k}</span>
                <b style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 1.25 }}>{f.v}</b>
                <span className="pg-body" style={{ marginTop: "auto", fontSize: 14 }}>{f.d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section pg-white">
        <div className="wrap pg-split pg-split--top">
          <div className="pg-col" style={{ flex: "1 1 320px" }}>
            <span className="eyebrow">Boilerplate</span>
            <h2 className="h2">About <span className="serif">PulchriFlow.</span></h2>
            <p className="lead">Use this description when you write about us.</p>
          </div>
          <div className="pg-stage pg-col--wide" style={{ display: "flex", flexDirection: "column", gap: 20, padding: 32 }}>
            <p style={{ margin: 0, fontSize: 19, lineHeight: 1.6 }}>{boilerplate}</p>
            <div style={{ paddingTop: 16, borderTop: "1px solid var(--line)" }}><CopyButton text={boilerplate} /></div>
          </div>
        </div>
      </section>

      <section className="section pg-cream" id="assets" style={{ scrollMarginTop: 80 }}>
        <div className="wrap">
          <Head eyebrow="Brand assets" title="Logo" payoff="and colour." lead="Please don't stretch, recolour or redraw the logo. Give it clear space on a light background." />
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
            <div data-reveal className="pg-card" style={{ flex: "1 1 360px", padding: 0, gap: 0, overflow: "hidden" }}>
              <div style={{ minHeight: 240, display: "flex", alignItems: "center", justifyContent: "center", padding: 32, background: "var(--paper)" }}>
                <img src="/pulchriflow-logo.svg" alt="PulchriFlow logo" width={330} height={84} style={{ maxWidth: "100%", height: "auto" }} />
              </div>
              <div style={{ padding: "18px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, borderTop: "1px solid var(--line)" }}>
                <span style={{ display: "flex", flexDirection: "column" }}><b style={{ fontSize: 15 }}>Primary logo</b><span style={{ fontSize: 12, color: "var(--muted)" }}>SVG · for light backgrounds</span></span>
                <a href="/pulchriflow-logo.svg" download className="btn btn--ghost" style={{ minHeight: 44, padding: "0 16px", fontSize: 13 }}><Download size={15} aria-hidden="true" />Download</a>
              </div>
            </div>
            <div className="pg-grid" style={{ flex: "1.4 1 480px", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 12 }}>
              {colors.map((c) => (
                <div key={c.hex} style={{ borderRadius: 20, overflow: "hidden", border: "1px solid var(--line)", background: "var(--paper)" }}>
                  <div style={{ height: 110, background: c.hex }} />
                  <div style={{ padding: "12px 14px", display: "flex", flexDirection: "column" }}><b style={{ fontSize: 14 }}>{c.t}</b><span className="mono" style={{ fontSize: 12, color: "var(--muted)" }}>{c.hex}</span></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section--forest on-dark">
        <div className="wrap pg-split" style={{ justifyContent: "space-between" }}>
          <div className="pg-col" style={{ flex: "1 1 420px" }}>
            <span className="eyebrow">Media contact</span>
            <h2 className="h2">Writing about <span className="serif">small business commerce?</span></h2>
            <p className="lead">We&apos;re happy to help with background, product walkthroughs and assets.</p>
          </div>
          <a href={mail} className="pg-card pg-card--mint" style={{ flex: "0 1 420px", gap: 12 }}>
            <span className="pg-label">Email</span>
            <b style={{ fontSize: 28, fontWeight: 500, letterSpacing: "-0.02em", overflowWrap: "anywhere" }}>support@pulchriflow.com</b>
            <span className="pg-link">Send a media enquiry <ArrowRight size={16} aria-hidden="true" /></span>
          </a>
        </div>
      </section>
    </SiteShell>
  );
}
