import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { SetupPackage, type PlanPrice } from "@/lib/pricing";
import { SETUP_FEE, naira } from "@/lib/setup";
import SiteShell from "../site/SiteShell";
import { Faq, Head, LinkButton, Orbits } from "../site/blocks";
import SetupForm from "./SetupForm";
import SetupTabs from "./SetupTabs";

const progress: [string, string, "done" | "now" | "next"][] = [
  ["Business information received", "Done", "done"],
  ["Shop link reserved", "jane-styles", "done"],
  ["Products uploaded", "6 of 10", "now"],
  ["Storefront configured", "Next", "next"],
  ["WhatsApp ordering set up", "", "next"],
];

const steps: [string, string, string][] = [
  ["01", "Apply", "Send your business details using the form below."],
  [
    "02",
    "Pay securely",
    "Pay the setup fee online. It includes your first month of Pro.",
  ],
  [
    "03",
    "We set up your store",
    "Our team contacts you on WhatsApp, then uploads your products, configures your storefront and sets up WhatsApp ordering.",
  ],
  [
    "04",
    "Start selling",
    "We help you get started. Share your shop link with customers.",
  ],
];

export default function SetupPage({ prices }: { prices: SetupPackage[] }) {
  // The API lists active setup packages; there is one. Fall back to the published fee if it can't be reached.
  const setupPackage = prices[0];
  const packageCode = setupPackage?.packageCode ?? "";
  const fee = naira(setupPackage?.amount ?? SETUP_FEE);

  const faqs: [string, string][] = [
    [
      "What do I pay, and when?",
      `One payment: the setup fee of ${fee}, which includes your first month of Pro. You pay it online straight after sending your details. From month 2, Pro is billed monthly, quarterly or yearly, as you choose.`,
    ],
    [
      "Is there more than one setup plan?",
      "No. There is one setup plan, and it covers everything on this page: your business information, products, storefront and branding, WhatsApp ordering and going live.",
    ],
    [
      "Can I choose my shop link?",
      "Yes. Tell us your preferred link, like jane-styles.pulchriflow.com. If it's taken, we'll agree the closest available one with you.",
    ],
    [
      "I don't have product photos yet. Can I still apply?",
      "Yes. Choose “Not yet” and add a note. We'll talk it through with you on WhatsApp.",
    ],
    [
      "Can I change things after you set it up?",
      "Yes. It's your store. You can edit products, prices and settings any time from your dashboard.",
    ],
  ];

  return (
    <SiteShell>
      <section className="pg-hero">
        <Orbits
          rings={[
            { width: 900, height: 900, right: -300, top: -200 },
            { width: 1400, height: 1400, right: -560, top: -460 },
          ]}
        />
        <div className="wrap pg-hero-split">
          <div className="pg-hero-copy" style={{ flex: "1.2 1 460px" }}>
            <span className="eyebrow">Setup service</span>
            <h1 className="pg-h1">
              Let us set up <span className="serif">your store.</span>
            </h1>
            <p className="lead" style={{ maxWidth: 540 }}>
              Send us your business information. Our team uploads your products,
              configures your storefront, sets up WhatsApp ordering and helps
              you get started.
            </p>
            <div className="pg-ctas">
              <a className="btn btn--lime btn--lg" href="#apply">
                Apply for setup
                <ArrowRight size={16} strokeWidth={2.4} aria-hidden="true" />
              </a>
              <LinkButton href="#expect">What&apos;s included</LinkButton>
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 28,
                paddingTop: 22,
                borderTop:
                  "1px solid color-mix(in srgb, var(--on-dark) 12%, transparent)",
              }}
            >
              <span>
                <b
                  style={{
                    display: "block",
                    fontSize: 28,
                    fontWeight: 500,
                    letterSpacing: "-0.03em",
                  }}
                >
                  {fee}
                </b>
                <span style={{ fontSize: 13.5, color: "var(--on-dark-muted)" }}>
                  one plan, one-time
                </span>
              </span>
              <span>
                <b
                  style={{
                    display: "block",
                    fontSize: 28,
                    fontWeight: 500,
                    letterSpacing: "-0.03em",
                  }}
                >
                  1st month
                </b>
                <span style={{ fontSize: 13.5, color: "var(--on-dark-muted)" }}>
                  of Pro included
                </span>
              </span>
            </div>
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
                gap: 16,
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
                <b style={{ fontSize: 15 }}>Jane Styles · setup</b>
                <span className="pg-pill">In progress</span>
              </div>
              <div
                style={{
                  height: 8,
                  borderRadius: 99,
                  background: "var(--line-soft)",
                  overflow: "hidden",
                }}
              >
                <span
                  style={{
                    display: "block",
                    width: "50%",
                    height: "100%",
                    borderRadius: 99,
                    background: "var(--brand)",
                  }}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {progress.map(([label, note, state]) => (
                  <div
                    key={label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      padding: "10px 12px",
                      borderRadius: 12,
                      background:
                        state === "now" ? "var(--brand-soft)" : "var(--cream)",
                    }}
                  >
                    <span
                      style={{
                        width: 24,
                        height: 24,
                        flex: "none",
                        borderRadius: "50%",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background:
                          state === "done" ? "var(--brand)" : "transparent",
                        color: "#fff",
                        border: `1.5px solid ${state === "next" ? "var(--line)" : "var(--brand)"}`,
                      }}
                    >
                      {state === "done" && (
                        <Check size={11} strokeWidth={3.4} />
                      )}
                    </span>
                    <span style={{ flex: 1, fontSize: 14 }}>{label}</span>
                    <span style={{ fontSize: 12.5, color: "var(--muted)" }}>
                      {note}
                    </span>
                  </div>
                ))}
              </div>
              <span
                style={{ fontSize: 13, lineHeight: 1.5, color: "var(--muted)" }}
              >
                We keep you updated on WhatsApp while we set up your store.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section
        id="expect"
        className="section pg-white"
        style={{ scrollMarginTop: 80 }}
      >
        <div className="wrap">
          <Head
            eyebrow="What you can expect"
            title="Every part of your store,"
            payoff="handled."
            lead="One setup plan covers all of it. Pick a step to see what we do and what we need from you."
          />
          <SetupTabs />
        </div>
      </section>

      <section className="section pg-cream">
        <div className="wrap">
          <Head
            eyebrow="How it works"
            title="Four steps to"
            payoff="selling."
          />
          <div
            className="pg-grid"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            }}
          >
            {steps.map(([n, title, text], i) => (
              <div
                key={n}
                className={
                  i === steps.length - 1 ? "pg-card pg-card--mint" : "pg-card"
                }
                style={{ minHeight: 200 }}
              >
                <span className="pg-num">{n}</span>
                <b
                  style={{
                    fontSize: 20,
                    fontWeight: 500,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {title}
                </b>
                <span className="pg-body">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="apply"
        className="section pg-dark"
        style={{
          position: "relative",
          overflow: "hidden",
          scrollMarginTop: 80,
        }}
      >
        <Orbits
          rings={[{ width: 1200, height: 1200, left: -600, top: -300 }]}
        />
        <div
          className="wrap pg-split pg-split--top"
          style={{ position: "relative" }}
        >
          <div
            style={{
              flex: "1 1 340px",
              display: "flex",
              flexDirection: "column",
              gap: 22,
              minWidth: 0,
            }}
          >
            <span className="eyebrow">Apply for setup</span>
            <h2 className="h2">
              Tell us about{" "}
              <span className="serif" style={{ color: "var(--lime)" }}>
                your business.
              </span>
            </h2>
            <p className="lead">
              Takes a few minutes. After you send your details, you pay securely
              online and our team contacts you on WhatsApp to start your setup.
            </p>
            <div className="pg-card pg-card--dark" style={{ gap: 12 }}>
              <span
                className="mono"
                style={{
                  fontSize: 12,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--lime)",
                }}
              >
                One plan
              </span>
              <span
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  gap: 12,
                }}
              >
                <span style={{ fontWeight: 600 }}>PulchriFlow Setup</span>
                <b
                  style={{
                    fontSize: 30,
                    letterSpacing: "-0.03em",
                    color: "var(--lime)",
                  }}
                >
                  {fee}
                </b>
              </span>
              <span style={{ fontSize: 13.5, color: "var(--lime)" }}>
                Includes everything above and your first month of Pro
              </span>

              <span
                style={{
                  fontSize: 13.5,
                  lineHeight: 1.5,
                  color: "var(--on-dark-muted)",
                }}
              >
                You pay online after sending your details. Payment is confirmed
                on the next page.
              </span>
            </div>
          </div>
          <div style={{ flex: "1.5 1 520px", minWidth: 0 }}>
            <SetupForm packageCode={packageCode} fee={fee} />
          </div>
        </div>
      </section>

      <Faq
        tone="pg-white"
        title="Setup,"
        payoff="plainly."
        items={faqs}
        aside={
          <p className="lead">
            Rather do it yourself?{" "}
            <Link
              href="/pricing"
              style={{
                color: "var(--brand)",
                textDecoration: "underline",
                textUnderlineOffset: 4,
              }}
            >
              Start free instead.
            </Link>
          </p>
        }
      />
    </SiteShell>
  );
}
