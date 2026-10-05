import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { appLink } from "@/lib/config";
import { preservedParams } from "@/lib/navigation";

type Variant = "lime" | "forest" | "ghost" | "ghost-dark" | "link";

/** Sign-up link into the merchant app; keeps UTM/ref/promo params via the layout script. */
export function StartFree({
  label = "Start free",
  plan,
  variant = "lime",
  large = true,
  className = "",
  style,
}: {
  label?: string;
  plan?: string;
  variant?: Variant;
  large?: boolean;
  className?: string;
  style?: CSSProperties;
}) {
  const query = plan ? `?plan=${encodeURIComponent(plan)}` : "";
  return (
    <a
      className={`btn btn--${variant}${large ? " btn--lg" : ""} ${className}`}
      href={appLink(`/register${query}`)}
      data-preserve-params={preservedParams}
      style={style}
    >
      {label}
      <ArrowRight size={16} strokeWidth={2.4} aria-hidden="true" />
    </a>
  );
}

/** Internal or external link styled as a pill button. */
export function LinkButton({
  href,
  children,
  variant = "ghost-dark",
  large = true,
  style,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  large?: boolean;
  style?: CSSProperties;
}) {
  const className = `btn btn--${variant}${large ? " btn--lg" : ""}`;
  if (href.startsWith("/") || href.startsWith("#")) {
    return (
      <Link className={className} href={href} style={style}>
        {children}
      </Link>
    );
  }
  return (
    <a className={className} href={href} style={style}>
      {children}
    </a>
  );
}

/** Concentric decorative rings (the "flow" motif). */
export function Orbits({ rings }: { rings: CSSProperties[] }) {
  return (
    <>
      {rings.map((style, i) => (
        <span key={i} className="pg-orbit" style={style} aria-hidden="true" />
      ))}
    </>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <span className="eyebrow">{children}</span>;
}

/** Static section header (eyebrow, headline with serif payoff, optional lead). */
export function Head({
  eyebrow,
  title,
  payoff,
  lead,
  center,
}: {
  eyebrow: string;
  title: ReactNode;
  payoff?: string;
  lead?: ReactNode;
  center?: boolean;
}) {
  return (
    <div className={`section-head${center ? " section-head--center" : ""}`}>
      <div className="section-head__title">
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="h2">
          {title}
          {payoff && (
            <>
              {" "}
              <span className="serif">{payoff}</span>
            </>
          )}
        </h2>
      </div>
      {lead && <p className="lead">{lead}</p>}
    </div>
  );
}

export function Faq({
  items,
  title = "Built around the details",
  payoff = "that matter.",
  aside,
  tone = "pg-cream",
}: {
  items: ReadonlyArray<readonly [string, string]>;
  title?: string;
  payoff?: string;
  aside?: ReactNode;
  tone?: string;
}) {
  return (
    <section className={`section ${tone}`}>
      <div className="wrap pg-split pg-split--top">
        <div className="pg-col" style={{ flex: "1 1 320px" }}>
          <span className="eyebrow">Questions</span>
          <h2 className="h2">
            {title} <span className="serif">{payoff}</span>
          </h2>
          {aside}
        </div>
        <div className="pg-faq pg-col--wide" style={{ flex: "2 1 560px", minWidth: 0 }}>
          {items.map(([q, a], i) => (
            <details key={q} open={i === 0}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

const solutionCards = [
  { href: "/retail", t: "Retail", d: "Catalogue and storefront" },
  { href: "/service-businesses", t: "Services", d: "Selling time and skill" },
  { href: "/restaurants", t: "Restaurants", d: "Menus, tables, kitchen" },
  { href: "/supermarkets", t: "Supermarkets", d: "Baskets and fulfilment" },
  { href: "/saved-items", t: "Saved Items", d: "Repeat journeys" },
  { href: "/customer-hub", t: "Customer Hub", d: "A way back for customers" },
];

/** Cross-links to the other solution pages (excludes the current one). */
export function OtherSolutions({ current }: { current: string }) {
  const items = solutionCards.filter((c) => c.href !== current).slice(0, 4);
  return (
    <section className="section pg-white">
      <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <span className="eyebrow">Other ways PulchriFlow is set up</span>
        <div className="pg-grid pg-grid--sm" style={{ gap: 12 }}>
          {items.map((o) => (
            <Link key={o.href} href={o.href} className="pg-card pg-card--cream" style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: "22px 24px" }}>
              <span style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <b style={{ fontSize: 18, fontWeight: 500 }}>{o.t}</b>
                <span style={{ fontSize: 13, color: "var(--muted)" }}>{o.d}</span>
              </span>
              <ArrowRight size={18} color="var(--brand)" aria-hidden="true" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Numbered list used for "what changes" cards. */
export function ChangeCards({
  items,
  tone = "dark",
}: {
  items: ReadonlyArray<{ t: string; d: string }>;
  tone?: "dark" | "light";
}) {
  return (
    <div className="pg-grid">
      {items.map((c, i) => {
        const last = i === items.length - 1;
        const cls = last ? "pg-card pg-card--mint" : tone === "dark" ? "pg-card pg-card--dark" : i === 1 ? "pg-card pg-card--forest" : "pg-card";
        return (
          <div key={c.t} className={cls} style={{ minHeight: 240 }}>
            <span className="pg-num">0{i + 1}</span>
            <b style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 1.2 }}>{c.t}</b>
            <p className="pg-body">{c.d}</p>
          </div>
        );
      })}
    </div>
  );
}
