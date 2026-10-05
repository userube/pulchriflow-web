import { ArrowRight, CircleHelp, Handshake, Store } from "lucide-react";
import Link from "next/link";
import { appLink } from "@/lib/config";
import SiteShell from "../site/SiteShell";
import { Orbits } from "../site/blocks";
import ContactForm from "./ContactForm";

const mail = (s: string) => `mailto:support@pulchriflow.com?subject=${encodeURIComponent(s)}`;

const routes = [
  { t: "Product support", d: "Questions about your store, orders, payments or anything not working the way you expect.", href: mail("Product support"), Icon: CircleHelp, dark: false },
  { t: "Partnerships", d: "Payments, logistics, communities and other ways to work together.", href: mail("Partnerships"), Icon: Handshake, dark: true },
  { t: "Merchant questions", d: "Thinking about PulchriFlow for your business? Ask us whether it fits.", href: mail("Merchant question"), Icon: Store, dark: false },
];

export default function ContactPage() {
  const shortcuts = [
    { t: "How it works", d: "From first sale to clear records", href: "/workflow" },
    { t: "Pricing questions", d: "Free plan, Pro and billing", href: "/pricing" },
    { t: "Try the demo store", d: "See a storefront in action", href: appLink("/shop/demo") },
  ];
  return (
    <SiteShell>
      <section className="pg-hero" style={{ paddingBottom: 200 }}>
        <Orbits rings={[{ width: 1000, height: 1000, left: "50%", top: 220, marginLeft: -500 }]} />
        <div className="wrap pg-hero-center">
          <span className="eyebrow">Contact</span>
          <h1 className="pg-h1">Talk to <span className="serif">PulchriFlow.</span></h1>
          <p className="lead" style={{ maxWidth: 560 }}>
            Email <a href="mailto:support@pulchriflow.com" style={{ color: "var(--lime)", textDecoration: "underline", textUnderlineOffset: 4 }}>support@pulchriflow.com</a> for product support, partnerships and merchant questions.
          </p>
        </div>
      </section>

      <section className="pg-cream" style={{ paddingBottom: 120 }}>
        <div className="wrap" style={{ marginTop: -120, position: "relative", display: "flex", flexDirection: "column", gap: 16 }}>
          <div className="pg-grid">
            {routes.map(({ t, d, href, Icon, dark }) => (
              <a key={t} href={href} className={dark ? "pg-card pg-card--forest" : "pg-card"} style={{ minHeight: 250, boxShadow: "0 30px 60px -36px rgba(9,34,29,0.45)" }}>
                <span className={dark ? "pg-well pg-well--mint" : "pg-well"}><Icon size={20} aria-hidden="true" /></span>
                <b style={{ fontSize: 24, fontWeight: 500, letterSpacing: "-0.02em" }}>{t}</b>
                <span className="pg-body">{d}</span>
                <span className="pg-link" style={{ marginTop: "auto" }}>Email us <ArrowRight size={14} aria-hidden="true" /></span>
              </a>
            ))}
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "stretch", marginTop: 40 }}>
            <div data-reveal style={{ flex: "1.6 1 520px", minWidth: 0 }}><ContactForm /></div>
            <div className="pg-stack" style={{ flex: "1 1 320px", gap: 16 }}>
              <div className="pg-card pg-card--forest">
                <span className="pg-label">Before you write</span>
                <b style={{ fontSize: 22, fontWeight: 500 }}>You might find it faster here.</b>
                <div>
                  {shortcuts.map((s) => (
                    <Link key={s.t} href={s.href} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, padding: "14px 0", borderTop: "1px solid rgba(250,249,245,0.12)", fontSize: 15 }}>
                      <span style={{ display: "flex", flexDirection: "column", gap: 2 }}><b style={{ fontWeight: 500 }}>{s.t}</b><span style={{ fontSize: 13, color: "var(--on-dark-muted)" }}>{s.d}</span></span>
                      <ArrowRight size={16} color="var(--lime)" aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              </div>
              <div className="pg-card pg-card--mint" style={{ gap: 10 }}>
                <span className="pg-label">Already a merchant?</span>
                <b style={{ fontSize: 20, fontWeight: 500 }}>Log in to your dashboard</b>
                <a className="btn btn--forest" href={appLink("/login")} style={{ alignSelf: "flex-start" }}>Log in</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
