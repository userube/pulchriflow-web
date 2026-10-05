import type { CSSProperties, ReactNode } from "react";
import type { ProductPageContent } from "@/lib/product-pages";
import { FinalCta } from "../Closing";
import { Reveal } from "../motion";
import SiteShell from "../site/SiteShell";
import { Faq, LinkButton, OtherSolutions, Orbits, StartFree } from "../site/blocks";

/**
 * Shared frame for solution and capability pages: hero (copy from product-pages.ts
 * plus a page-specific mockup), the page's own story sections, FAQ, cross-links, CTA.
 */
export default function SolutionTemplate({
  path,
  content,
  eyebrow,
  title,
  payoff = "for the way you sell.",
  lead,
  visual,
  secondary,
  heroExtra,
  children,
  cta,
  rings,
}: {
  path: string;
  content: ProductPageContent;
  eyebrow?: string;
  title?: string;
  payoff?: string;
  lead?: string;
  visual: ReactNode;
  secondary?: { href: string; label: string };
  heroExtra?: ReactNode;
  children: ReactNode;
  cta: { title: string; payoff: string; sub: string };
  rings?: CSSProperties[];
}) {
  return (
    <SiteShell>
      <section className="pg-hero">
        <Orbits
          rings={
            rings ?? [
              { width: 1000, height: 1000, right: -260, top: -140 },
              { width: 640, height: 640, right: -80, top: 40 },
            ]
          }
        />
        <div className="wrap pg-hero-split">
          <div className="pg-hero-copy">
            <span className="eyebrow">{eyebrow ?? `Solutions · ${content.eyebrow.toLowerCase().replace(/^\w/, (c) => c.toUpperCase())}`}</span>
            <h1 className="pg-h1">
              {title ?? content.title} <span className="serif">{payoff}</span>
            </h1>
            <p className="lead" style={{ maxWidth: 540 }}>
              {lead ?? content.situation}
            </p>
            <div className="pg-ctas">
              <StartFree />
              {secondary && <LinkButton href={secondary.href}>{secondary.label}</LinkButton>}
            </div>
            {heroExtra}
          </div>
          <Reveal className="pg-hero-visual" delay={0.15}>
            {visual}
          </Reveal>
        </div>
      </section>

      {children}

      <Faq items={content.faq} />
      <OtherSolutions current={path} />
      <FinalCta plain eyebrow="PulchriFlow" title={cta.title} payoff={cta.payoff} sub={cta.sub} />
    </SiteShell>
  );
}
