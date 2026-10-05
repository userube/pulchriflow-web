import Link from "next/link";
import { appLink } from "@/lib/config";
import {
  formatPrice,
  formatStandardPrice,
  type PlanPrice,
} from "@/lib/pricing";
import { FinalCta } from "../Closing";
import SiteShell from "../site/SiteShell";
import { Faq, Head, LinkButton, Orbits, StartFree } from "../site/blocks";
import PricingPlans, { type ProOption } from "./PricingPlans";

const freeFeatures = [
  "Your own online storefront",
  "Add and manage products",
  "WhatsApp checkout",
  "Online checkout where supported",
  "Order management",
  "Quick Sale, checkout links, invoices and receipts",
  "First 10 orders free",
];

const proFeatures = [
  "Unlimited orders",
  "Everything in Free",
  "Customer management and analytics",
  "Advanced order management",
  "Store management features",
  "Custom domain",
  "Remove PulchriFlow branding",
  "Sabi business assistant and notifications",
];

type Row = { f: string; free: string; pro: string } | { group: string };
const rows: Row[] = [
  { group: "Sell" },
  { f: "Orders", free: "First 10 free", pro: "Unlimited" },
  { f: "Your own online storefront", free: "Included", pro: "Included" },
  { f: "WhatsApp checkout", free: "Included", pro: "Included" },
  { f: "Online checkout where supported", free: "Included", pro: "Included" },
  {
    f: "Quick Sale, checkout links, invoices and receipts",
    free: "Included",
    pro: "Included",
  },
  { group: "Run the business" },
  { f: "Add and manage products", free: "Included", pro: "Included" },
  { f: "Order management", free: "Included", pro: "Advanced" },
  { f: "Customer management and analytics", free: "—", pro: "Included" },
  { f: "Store management features", free: "—", pro: "Included" },
  {
    f: "Sabi business assistant and notifications",
    free: "—",
    pro: "Included",
  },
  { group: "Your brand" },
  { f: "Custom domain", free: "—", pro: "Included" },
  { f: "Remove PulchriFlow branding", free: "—", pro: "Included" },
];

/** Per-month equivalent, rounded to the naira, from an "₦ 8,550"-style display string. */
function perMonth(display: string, months: number) {
  const n = Number(display.replace(/[^\d.]/g, ""));
  if (!n) return null;
  return `₦${Math.round(n / months).toLocaleString("en-NG")}`;
}

export default function PricingPage({ prices }: { prices: PlanPrice[] }) {
  const find = (key: string) =>
    prices.find((p) => p.plan.toUpperCase().includes(key));
  const free = find("FREE");
  const monthly = find("MONTHLY");
  const quarterly = find("QUARTERLY");
  const yearly = find("YEARLY");

  const freePrice = free ? formatPrice(free) : "₦0";
  const monthlyPrice = monthly ? formatPrice(monthly) : "₦3,000";
  const regular = formatStandardPrice(monthly);
  const quarterlyPrice = quarterly ? formatPrice(quarterly) : "₦8,550";
  const yearlyPrice = yearly ? formatPrice(yearly) : "₦32,400";
  const promo = monthly?.promotionLabel || "50% promotional offer";
  const qMonth = perMonth(quarterlyPrice, 3);
  const yMonth = perMonth(yearlyPrice, 12);

  const options: ProOption[] = [
    {
      id: "monthly",
      tab: "Monthly",
      badge: "Promo",
      name: "Monthly",
      tagline: "Keep selling without limits.",
      price: monthlyPrice,
      was: regular !== monthlyPrice ? regular : undefined,
      per: "/ month",
      note: `${promo}. Regular price ${regular}/month.`,
      cta: "Upgrade to Pro",
      href: appLink("/register?plan=pro-monthly"),
    },
    {
      id: "quarterly",
      tab: "Quarterly",
      badge: "3 months",
      name: "Build Momentum",
      tagline: "A little more room to focus on the business.",
      price: quarterlyPrice,
      per: "every 3 months",
      note: qMonth
        ? `Works out to about ${qMonth} a month.`
        : "Billed every 3 months.",
      cta: "Choose Quarterly",
      href: appLink("/register?plan=pro-quarterly"),
    },
    {
      id: "yearly",
      tab: "Yearly",
      badge: "12 months",
      name: "Go Further",
      tagline: "The full Pro toolkit for the long run.",
      price: yearlyPrice,
      per: "billed yearly",
      note: yMonth
        ? `Works out to about ${yMonth} a month.`
        : "Billed once a year.",
      cta: "Choose Yearly",
      href: appLink("/register?plan=pro-yearly"),
    },
  ];

  const faqs: [string, string][] = [
    [
      "Do I need a card to start?",
      "No. Create your store and start selling on the Free plan without adding a card.",
    ],
    [
      "What happens after my first 10 orders?",
      "Your first 10 orders are on us. After that, upgrade to Pro to keep selling without limits.",
    ],
    [
      `Is ${monthlyPrice} a month the regular Pro price?`,
      `It is the current promotional price. The regular Pro price is ${regular} a month.`,
    ],
    [
      "What is the difference between monthly, quarterly and yearly?",
      `They are the same Pro tools. Quarterly (Build Momentum) is ${quarterlyPrice} every 3 months and yearly (Go Further) is ${yearlyPrice} billed once a year.`,
    ],
    [
      "Can customers pay online?",
      "Yes. Every plan includes WhatsApp checkout and online checkout where it is supported, alongside manual payment records.",
    ],
  ];

  return (
    <SiteShell>
      <section className="pg-hero" style={{ paddingBottom: 220 }}>
        <Orbits
          rings={[
            {
              width: 900,
              height: 900,
              left: "50%",
              top: 280,
              marginLeft: -450,
            },
            {
              width: 1400,
              height: 1400,
              left: "50%",
              top: 40,
              marginLeft: -700,
            },
          ]}
        />
        <div className="wrap pg-hero-split">
          <div className="pg-hero-copy" style={{ flex: "1.2 1 460px" }}>
            <span className="eyebrow">Simple pricing</span>
            <h1 className="pg-h1">
              Start selling{" "}
              <span className="serif whitespace-nowrap">before you pay.</span>
            </h1>
            <p className="lead" style={{ maxWidth: 520 }}>
              Create your store for free. Upgrade only after you&apos;ve
              received your first 10 orders.
            </p>
            <div className="pg-ctas">
              <StartFree />
              <LinkButton href="#plans">Compare plans</LinkButton>
            </div>
            <span
              className="mono"
              style={{
                fontSize: 12,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "var(--on-dark-faint)",
              }}
            >
              No card required
            </span>
          </div>
          <div
            className="pg-hero-visual"
            style={{ flex: "1 1 380px" }}
            aria-hidden="true"
          >
            <div
              className="pg-float"
              style={{
                width: "100%",
                maxWidth: 420,
                padding: 26,
                display: "flex",
                flexDirection: "column",
                gap: 18,
                borderRadius: 26,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <b style={{ fontSize: 15 }}>Free orders</b>
                <span className="pg-pill">Free plan</span>
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                <b
                  style={{
                    fontSize: 56,
                    letterSpacing: "-0.04em",
                    lineHeight: 1,
                  }}
                >
                  7
                </b>
                <span style={{ fontSize: 18, color: "var(--muted)" }}>
                  of 10 used
                </span>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(10, minmax(0, 1fr))",
                  gap: 6,
                }}
              >
                {Array.from({ length: 10 }, (_, n) => (
                  <span
                    key={n}
                    style={{
                      height: 36,
                      borderRadius: 10,
                      background: n < 7 ? "var(--lime)" : "var(--cream)",
                      border: `1px solid ${n < 7 ? "#5fc4b0" : "var(--line)"}`,
                    }}
                  />
                ))}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  fontSize: 13,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "10px 12px",
                    borderRadius: 12,
                    background: "var(--cream)",
                  }}
                >
                  <span>Order #0007 · Checkout link</span>
                  <b>₦31,200</b>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "10px 12px",
                    borderRadius: 12,
                    background: "var(--cream)",
                  }}
                >
                  <span>Order #0006 · Quick Sale</span>
                  <b>₦12,500</b>
                </div>
              </div>
              <span
                style={{ fontSize: 13, lineHeight: 1.5, color: "var(--muted)" }}
              >
                3 free orders left. Upgrade to Pro whenever you&apos;re ready to
                keep selling without limits.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section
        id="plans"
        className="pg-cream"
        style={{ paddingBottom: 120, scrollMarginTop: 80 }}
      >
        <div className="wrap" style={{ marginTop: -140, position: "relative" }}>
          <PricingPlans
            free={freePrice}
            freeHref={appLink("/register")}
            freeFeatures={freeFeatures}
            proFeatures={proFeatures}
            options={options}
          />
        </div>
      </section>

      <section className="section pg-white">
        <div className="wrap">
          <Head
            eyebrow="How the free plan works"
            title="Ten real orders,"
            payoff="then decide."
            lead="You see PulchriFlow working with your own customers before you spend anything."
          />
          <div
            className="pg-stage"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 36,
              padding: "48px 40px",
            }}
          >
            <div
              data-stagger="0.07"
              style={{
                display: "flex",
                alignItems: "center",
                overflowX: "auto",
                paddingBottom: 4,
              }}
              aria-hidden="true"
            >
              {Array.from({ length: 10 }, (_, n) => (
                <div
                  key={n}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flex: "1 0 auto",
                    minWidth: 64,
                  }}
                >
                  <span
                    className="mono"
                    style={{
                      flex: "none",
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 12,
                      background: "var(--lime)",
                      color: "var(--forest)",
                    }}
                  >
                    {n + 1}
                  </span>
                  <span className="pg-dashed" style={{ flex: 1 }} />
                </div>
              ))}
              <span
                className="mono"
                style={{
                  flex: "none",
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 13,
                  background: "var(--forest)",
                  color: "var(--lime)",
                }}
              >
                Pro
              </span>
            </div>
            <div className="pg-grid pg-grid--sm">
              <div className="pg-card">
                <span className="pg-num">Orders 1–10</span>
                <b style={{ fontSize: 20, fontWeight: 500 }}>On us</b>
                <span className="pg-body">
                  Storefront, checkout, Quick Sale, invoices and receipts, with
                  real customers.
                </span>
              </div>
              <div className="pg-card">
                <span className="pg-num">After order 10</span>
                <b style={{ fontSize: 20, fontWeight: 500 }}>Choose Pro</b>
                <span className="pg-body">
                  Pick monthly, quarterly or yearly billing to keep selling
                  without limits.
                </span>
              </div>
              <div className="pg-card pg-card--forest">
                <span className="pg-num">On Pro</span>
                <b style={{ fontSize: 20, fontWeight: 500 }}>
                  Unlimited orders
                </b>
                <span className="pg-body">
                  Plus analytics, advanced orders, your own domain and Sabi.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section pg-cream">
        <div className="wrap">
          <Head
            eyebrow="Compare plans"
            title="Everything side"
            payoff="by side."
          />
          <div
            data-reveal
            style={{
              overflowX: "auto",
              borderRadius: 28,
              border: "1px solid var(--line)",
              background: "var(--paper)",
            }}
          >
            <table
              style={{
                width: "100%",
                minWidth: 640,
                borderCollapse: "collapse",
                fontSize: 15,
              }}
            >
              <caption className="sr-only">Free and Pro plans compared</caption>
              <thead>
                <tr>
                  <th
                    scope="col"
                    style={{
                      textAlign: "left",
                      padding: "24px 28px",
                      fontWeight: 500,
                      color: "var(--muted)",
                      fontSize: 13,
                      width: "52%",
                    }}
                  >
                    Feature
                  </th>
                  <th
                    scope="col"
                    style={{
                      textAlign: "left",
                      padding: "24px 28px",
                      fontWeight: 600,
                      fontSize: 17,
                    }}
                  >
                    Free
                  </th>
                  <th
                    scope="col"
                    style={{
                      textAlign: "left",
                      padding: "24px 28px",
                      fontWeight: 600,
                      fontSize: 17,
                      background: "var(--forest)",
                      color: "var(--on-dark)",
                    }}
                  >
                    Pro
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) =>
                  "group" in r ? (
                    <tr
                      key={r.group}
                      style={{
                        borderTop: "1px solid var(--line-soft)",
                        background: "#fbfcfb",
                      }}
                    >
                      <th
                        scope="colgroup"
                        colSpan={3}
                        style={{
                          textAlign: "left",
                          padding: "14px 28px",
                          fontSize: 12,
                          fontWeight: 600,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: "var(--brand)",
                        }}
                      >
                        {r.group}
                      </th>
                    </tr>
                  ) : (
                    <tr
                      key={r.f}
                      style={{ borderTop: "1px solid var(--line-soft)" }}
                    >
                      <th
                        scope="row"
                        style={{
                          textAlign: "left",
                          padding: "18px 28px",
                          fontWeight: 400,
                        }}
                      >
                        {r.f}
                      </th>
                      <td style={{ padding: "18px 28px" }}>{r.free}</td>
                      <td
                        style={{
                          padding: "18px 28px",
                          background: "var(--brand-soft)",
                          fontWeight: 500,
                        }}
                      >
                        {r.pro}
                      </td>
                    </tr>
                  ),
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Faq
        tone="pg-white"
        title="Pricing,"
        payoff="plainly."
        items={faqs}
        aside={
          <p className="lead">
            Something else on your mind?{" "}
            <Link
              href="/contact"
              style={{
                color: "var(--brand)",
                textDecoration: "underline",
                textUnderlineOffset: 4,
              }}
            >
              Talk to us.
            </Link>
          </p>
        }
      />

      <FinalCta
        plain
        eyebrow="PulchriFlow"
        title="Start selling with a clearer"
        payoff="record of the business."
        sub="Create your store for free. Your first 10 orders are on us."
      />
    </SiteShell>
  );
}
