import { Plane, Scissors, Shirt, Sparkles } from "lucide-react";
import { productPages } from "@/lib/product-pages";
import { ChangeCards, Head } from "../site/blocks";
import SolutionTemplate from "./SolutionTemplate";

const content = productPages["service-businesses"];

const kinds = [
  { t: "Tailors", item: "Custom agbada · from ₦45,000", note: "Measurements saved", Icon: Scissors, well: "pg-well pg-well--brand" },
  { t: "Salons", item: "Knotless braids · medium", note: "Favourite for 12 customers", Icon: Sparkles, well: "pg-well pg-well--mint" },
  { t: "Laundries", item: "Wash and iron · 12 items", note: "Ready Thursday", Icon: Shirt, well: "pg-well pg-well--forest" },
  { t: "Travel agencies", item: "Lagos → Abuja · return", note: "Quote sent", Icon: Plane, well: "pg-well" },
];

const steps = [
  { t: content.workflow[0], d: "Name it, price it, describe what is included. No inventory to count down.", ui: "New service", tag: "No stock", dark: false, rows: [["Service", "Knotless braids · medium"], ["Price", "From ₦25,000"], ["Takes about", "5 hours"]] },
  { t: content.workflow[1], d: "Send what fits the conversation: a page to browse, a link to pay, or a quote to agree on first.", ui: "Quote QT-0017", tag: "Sent", dark: true, rows: [["For", "Femi A."], ["Custom agbada + cap", "₦62,000"], ["Valid until", "12 Oct"]] },
  { t: content.workflow[2], d: "Measurements, styles and favourite services stay with the customer, ready next time.", ui: "Femi A. · saved", tag: "Favourite", dark: false, rows: [["Measurements", "Chest 42 · Sleeve 25"], ["Favourite service", "Custom agbada"], ["Last visit", "3 weeks ago"]] },
];

const changes = [
  { t: "Service-ready wording, no stock to manage", d: "No-stock catalog items that read like services, not shelf products." },
  { t: "Favourites and saved journeys", d: "Returning customers find their favourite services and saved journeys without re-explaining." },
  { t: "One workspace for the whole job", d: "Orders, payments, invoices, customers and receipts together." },
];

function HeroVisual() {
  return (
    <div style={{ position: "relative", width: "100%", maxWidth: 420 }} aria-hidden="true">
      <div className="pg-ui" style={{ padding: 24, gap: 16, borderRadius: 26 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><span className="pg-label">Service · no stock</span><span className="pg-pill">Bookable</span></div>
        <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
          <span className="pg-well pg-well--brand" style={{ width: 64, height: 64, borderRadius: 16, color: "var(--lime)" }}><Scissors size={28} /></span>
          <span style={{ display: "flex", flexDirection: "column", gap: 2 }}><b style={{ fontSize: 20 }}>Custom agbada</b><span style={{ fontSize: 13, color: "var(--muted)" }}>Tailoring · fitted to measurements</span></span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 8 }}>
          {[["From", "₦45,000"], ["Ready in", "7 days"], ["Stock", "None"]].map(([k, v]) => (
            <div key={k} style={{ background: "var(--cream)", borderRadius: 14, padding: 12 }}><span style={{ fontSize: 11, color: "var(--muted)" }}>{k}</span><div style={{ fontSize: 17, fontWeight: 600 }}>{v}</div></div>
          ))}
        </div>
        <div style={{ display: "flex", gap: 8 }}><span className="pg-action" style={{ flex: 1 }}>Send a quote</span><span className="pg-action pg-action--ghost" style={{ flex: 1 }}>Share page</span></div>
      </div>
      <div className="pg-float" style={{ position: "absolute", right: -12, bottom: -44, width: 250, padding: 16, display: "flex", flexDirection: "column", gap: 8 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><b style={{ fontSize: 14 }}>Saved for Femi</b><span className="pg-pill">Favourite</span></div>
        <span style={{ fontSize: 13, color: "#3f4d47", lineHeight: 1.5 }}>Chest 42 · Sleeve 25 · Length 54. Prefers wine aso-oke.</span>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <SolutionTemplate
      path="/service-businesses"
      content={content}
      title="Service businesses"
      visual={<HeroVisual />}
      secondary={{ href: "/saved-items", label: "See Saved Items" }}
      cta={{ title: "Your skill is the product.", payoff: "Run it properly.", sub: "Set up your services free. Your first 10 orders are on us." }}
    >
      <section className="section pg-cream">
        <div className="wrap">
          <Head eyebrow="Who it's for" title="If you sell time and skill," payoff="this fits." lead="Same platform, service-ready wording. Here is what a sale looks like for each kind of business." />
          <div className="pg-grid pg-grid--sm">
            {kinds.map(({ t, item, note, Icon, well }) => (
              <div key={t} className="pg-card" style={{ minHeight: 300 }}>
                <span className={well}><Icon size={20} aria-hidden="true" /></span>
                <b style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-0.02em" }}>{t}</b>
                <div className="pg-panel" style={{ marginTop: "auto", gap: 6 }}>
                  <span style={{ fontSize: 12, color: "var(--muted)" }}>Service</span>
                  <b style={{ fontSize: 15 }}>{item}</b>
                  <span style={{ fontSize: 12, color: "var(--brand)", fontWeight: 500 }}>{note}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section pg-white">
        <div className="wrap">
          <Head eyebrow="The workflow" title="One clear next step" payoff="at a time." />
          <div className="pg-stack" style={{ gap: 16 }}>
            {steps.map((s, i) => (
              <div key={s.t} className={s.dark ? "pg-stage pg-dark" : "pg-stage"} style={{ display: "flex", flexWrap: "wrap", gap: 40, alignItems: "center", padding: 36 }}>
                <div style={{ flex: "1 1 340px", display: "flex", flexDirection: "column", gap: 14 }}>
                  <span className="pg-num">0{i + 1}</span>
                  <b style={{ fontSize: 30, fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1.1 }}>{s.t}</b>
                  <span className="pg-body" style={{ fontSize: 16 }}>{s.d}</span>
                </div>
                <div className="pg-ui" style={{ flex: "1 1 380px", maxWidth: 520 }} aria-hidden="true">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><b style={{ fontSize: 15 }}>{s.ui}</b><span className={s.dark ? "pg-pill pg-pill--mint" : "pg-pill"}>{s.tag}</span></div>
                  {s.rows.map(([k, v]) => (
                    <div key={k} className="pg-kv"><span>{k}</span><b style={{ fontWeight: 600, textAlign: "right" }}>{v}</b></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--forest on-dark">
        <div className="wrap">
          <Head eyebrow="What changes" title="Less chasing." payoff="A better record." />
          <ChangeCards items={changes} />
        </div>
      </section>
    </SolutionTemplate>
  );
}
