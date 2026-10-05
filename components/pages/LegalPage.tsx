import Link from "next/link";
import SiteShell from "../site/SiteShell";
import { Orbits } from "../site/blocks";

export type LegalSection = { title: string; body: string };

/**
 * Privacy / Terms layout: contents list + numbered sections. Only published text is
 * rendered; sections still being drafted are not shown publicly.
 */
export default function LegalPage({
  title,
  payoff,
  summary,
  sections,
  updated,
  other,
}: {
  title: string;
  payoff: string;
  summary: string;
  sections: LegalSection[];
  updated?: string;
  other: { href: string; label: string };
}) {
  const id = (i: number) => `section-${i + 1}`;
  return (
    <SiteShell>
      <section className="pg-hero" style={{ paddingBlock: "88px 96px" }}>
        <Orbits rings={[{ width: 760, height: 760, right: -240, top: -280 }]} />
        <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <span className="eyebrow">Legal</span>
          <h1 className="pg-h1">{title} <span className="serif">{payoff}</span></h1>
          <p className="lead" style={{ maxWidth: 720 }}>{summary}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {updated && <span className="pg-pill pg-pill--ghost" style={{ padding: "7px 12px", fontWeight: 500 }}>Last updated {updated}</span>}
            <Link href={other.href} className="pg-pill pg-pill--ghost" style={{ padding: "7px 12px", fontWeight: 500 }}>{other.label}</Link>
          </div>
        </div>
      </section>

      <section className="section pg-cream" style={{ paddingTop: 80 }}>
        <div className="wrap" style={{ display: "flex", flexWrap: "wrap", gap: 56, alignItems: "flex-start" }}>
          <nav data-reveal aria-label="On this page" style={{ flex: "1 1 260px", maxWidth: 320, display: "flex", flexDirection: "column", gap: 4 }}>
            <span className="pg-label" style={{ paddingBottom: 10 }}>On this page</span>
            {sections.map((s, i) => (
              <a key={s.title} href={`#${id(i)}`} style={{ display: "flex", gap: 12, padding: "10px 12px", borderRadius: 12, fontSize: 14, color: "#3f4d47" }}>
                <span className="mono" style={{ fontSize: 12, color: "var(--brand)" }}>{String(i + 1).padStart(2, "0")}</span>
                {s.title}
              </a>
            ))}
            <div className="pg-card pg-card--forest" style={{ marginTop: 20, padding: 20, gap: 10 }}>
              <b style={{ fontSize: 16, fontWeight: 500 }}>Questions about this page?</b>
              <a href="mailto:support@pulchriflow.com" style={{ fontSize: 14, color: "var(--lime)", textDecoration: "underline", textUnderlineOffset: 4 }}>support@pulchriflow.com</a>
            </div>
          </nav>
          <article style={{ flex: "3 1 560px", minWidth: 0, maxWidth: 780 }}>
            {sections.map((s, i) => (
              <section data-reveal key={s.title} id={id(i)} style={{ padding: "32px 0", borderTop: "1px solid var(--line)", scrollMarginTop: 90 }}>
                <div style={{ display: "flex", gap: 14, alignItems: "baseline", marginBottom: 14 }}>
                  <span className="pg-num">{String(i + 1).padStart(2, "0")}</span>
                  <h2 style={{ margin: 0, fontSize: 26, fontWeight: 500, letterSpacing: "-0.02em" }}>{s.title}</h2>
                </div>
                <p className="pg-prose" style={{ margin: 0 }}>{s.body}</p>
              </section>
            ))}
          </article>
        </div>
      </section>
    </SiteShell>
  );
}
