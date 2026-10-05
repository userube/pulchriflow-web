import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog";
import NewsletterForm from "../NewsletterForm";
import SiteShell from "../site/SiteShell";
import { Orbits } from "../site/blocks";
import JournalGrid, { Cover, type JournalCard } from "./JournalGrid";

export function publishedDate(
  value?: string,
  month: "short" | "long" = "short",
) {
  if (!value) return undefined;
  return new Intl.DateTimeFormat("en-NG", {
    day: "numeric",
    month,
    year: "numeric",
  }).format(new Date(value));
}

const toCard = (p: BlogPost): JournalCard => ({
  slug: p.slug,
  title: p.title,
  excerpt: p.excerpt,
  category: p.category,
  cover: p.coverImageUrl,
  readingTimeMinutes: p.readingTimeMinutes,
  date: publishedDate(p.publishedAt),
});

export default function JournalPage({ posts }: { posts: BlogPost[] }) {
  const featured = posts.find((p) => p.featured) ?? posts[0];
  const rest = featured ? posts.filter((p) => p.slug !== featured.slug) : [];

  return (
    <SiteShell>
      <section className="pg-hero" style={{ paddingBlock: "88px 96px" }}>
        <Orbits rings={[{ width: 820, height: 820, right: -220, top: -260 }]} />
        <div
          className="wrap"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 48,
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div
            style={{
              flex: "1 1 560px",
              display: "flex",
              flexDirection: "column",
              gap: 24,
              maxWidth: 780,
            }}
          >
            <span className="eyebrow">PulchriFlow Journal</span>
            <h1 className="pg-h1">
              Resources for running{" "}
              <span className="serif">a better business.</span>
            </h1>
            <p className="lead" style={{ maxWidth: 560 }}>
              Practical notes for keeping sales, payments, customers and the
              everyday work behind them in order.
            </p>
          </div>
          <div style={{ flex: "0 1 420px", minWidth: 0 }}>
            <NewsletterForm
              source="resources"
              variant="dark"
              label="Useful notes, when they are useful."
              visibleLabel
            />
            <span
              style={{
                display: "block",
                fontSize: 12,
                color: "var(--on-dark-faint)",
                marginTop: 4,
              }}
            >
              Occasional practical guides and product updates from the
              PulchriFlow team.
            </span>
          </div>
        </div>
      </section>

      {featured ? (
        <section className="pg-cream" style={{ padding: "56px 0 120px" }}>
          <div
            className="wrap"
            style={{ display: "flex", flexDirection: "column", gap: 40 }}
          >
            <Link
              data-reveal
              href={`/blog/${featured.slug}`}
              className="pg-card"
              style={{
                padding: 0,
                gap: 0,
                overflow: "hidden",
                flexDirection: "row",
                flexWrap: "wrap",
                borderRadius: 32,
              }}
            >
              <div
                style={{ flex: "1.2 1 480px", minHeight: 380, display: "flex" }}
              >
                <div style={{ flex: 1 }}>
                  <Cover
                    post={toCard(featured)}
                    index={0}
                    height="100%"
                    large
                  />
                </div>
              </div>
              <div
                style={{
                  flex: "1 1 380px",
                  padding: 44,
                  display: "flex",
                  flexDirection: "column",
                  gap: 18,
                }}
              >
                <span
                  style={{
                    display: "flex",
                    gap: 10,
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <span className="pg-pill pg-pill--mint">Featured</span>
                  <span className="pg-label" style={{ color: "var(--brand)" }}>
                    {featured.category || "PulchriFlow"}
                  </span>
                </span>
                <h2
                  style={{
                    margin: 0,
                    fontSize: 36,
                    fontWeight: 500,
                    letterSpacing: "-0.03em",
                    lineHeight: 1.08,
                  }}
                >
                  {featured.title}
                </h2>
                {featured.excerpt && (
                  <p className="pg-body" style={{ fontSize: 16 }}>
                    {featured.excerpt}
                  </p>
                )}
                <span
                  style={{
                    marginTop: "auto",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 12,
                    fontSize: 14,
                  }}
                >
                  <span style={{ color: "var(--muted)" }}>
                    {featured.readingTimeMinutes} min read
                    {publishedDate(featured.publishedAt)
                      ? ` · ${publishedDate(featured.publishedAt)}`
                      : ""}
                  </span>
                  <span className="pg-link">
                    Read article <ArrowRight size={14} aria-hidden="true" />
                  </span>
                </span>
              </div>
            </Link>
            {rest.length > 0 && <JournalGrid posts={rest.map(toCard)} />}
          </div>
        </section>
      ) : (
        <section className="section pg-cream">
          <div className="wrap">
            <div
              data-reveal
              className="pg-stage pg-stage--light"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: 18,
                padding: "72px 32px",
              }}
            >
              <span className="pg-pill pg-pill--forest">Coming soon</span>
              <h2 className="h2" style={{ maxWidth: 720 }}>
                Useful business notes{" "}
                <span className="serif">are on the way.</span>
              </h2>
              <p className="lead" style={{ maxWidth: 560 }}>
                We are preparing practical resources for merchants who want a
                clearer view of their sales and day-to-day operations.
              </p>
              <Link href="/workflow" className="btn btn--forest btn--lg">
                Meanwhile, see how it works
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="pg-cream" style={{ paddingBottom: 96 }}>
        <div className="wrap">
          <div
            className="cta"
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              textAlign: "left",
              padding: "72px 48px",
              gap: 40,
            }}
          >
            <div
              style={{
                flex: "1 1 420px",
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              <span
                className="mono"
                style={{
                  fontSize: 12,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                The newsletter
              </span>
              <h2
                style={{ fontSize: "clamp(36px, 4.6vw, 60px)", lineHeight: 1 }}
              >
                Practical notes, <span className="serif">not noise.</span>
              </h2>
              <p style={{ margin: 0, maxWidth: 460 }}>
                Guides for payments, customer follow-up, storefronts and daily
                operations, sent only when there is something useful to say.
              </p>
            </div>
            <div style={{ flex: "1 1 380px", minWidth: 0 }}>
              <NewsletterForm
                source="journal-footer"
                variant="light"
                label="Email address"
                placeholder="you@business.com"
                visibleLabel
              />
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
