import { Check, Share2 } from "lucide-react";
import type { ReactNode } from "react";
import { productPages } from "@/lib/product-pages";
import { Head } from "../site/blocks";
import SolutionTemplate from "./SolutionTemplate";

export type FeatureSlug =
  | "quick-sale"
  | "checkout-links"
  | "online-store"
  | "invoices"
  | "receipts";

function QuickSaleMock() {
  return (
    <div
      className="pg-ui"
      style={{
        width: "100%",
        maxWidth: 340,
        padding: 22,
        gap: 14,
        borderRadius: 26,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 14,
          fontWeight: 600,
        }}
      >
        <span>Quick Sale</span>
        <span
          className="mono"
          style={{ fontSize: 11, color: "var(--muted)", fontWeight: 400 }}
        >
          Counter
        </span>
      </div>
      <div
        style={{
          display: "flex",
          background: "var(--line-soft)",
          borderRadius: 99,
          padding: 4,
          fontSize: 12,
        }}
      >
        <span
          style={{
            flex: 1,
            textAlign: "center",
            padding: 8,
            color: "var(--muted)",
          }}
        >
          Select items
        </span>
        <span
          style={{
            flex: 1,
            textAlign: "center",
            padding: 8,
            background: "var(--paper)",
            borderRadius: 99,
            fontWeight: 600,
          }}
        >
          Quick amount
        </span>
      </div>
      <div
        style={{
          textAlign: "center",
          fontSize: 46,
          fontWeight: 600,
          letterSpacing: "-0.04em",
        }}
      >
        ₦12,500
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: 8,
        }}
      >
        {["1", "2", "3", "4", "5", "6", "7", "8", "9", "00", "0", "⌫"].map(
          (k) => (
            <span
              key={k}
              style={{
                height: 42,
                borderRadius: 12,
                background: "var(--cream)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 17,
                fontWeight: 500,
              }}
            >
              {k}
            </span>
          ),
        )}
      </div>
      <div style={{ display: "flex", gap: 6, fontSize: 12, fontWeight: 500 }}>
        {["Cash", "Transfer", "POS"].map((m, i) => (
          <span
            key={m}
            style={{
              flex: 1,
              textAlign: "center",
              padding: 8,
              borderRadius: 99,
              background: i === 1 ? "var(--forest)" : "transparent",
              color: i === 1 ? "var(--lime)" : "var(--ink)",
              border: i === 1 ? "none" : "1px solid var(--line)",
            }}
          >
            {m}
          </span>
        ))}
      </div>
      <span className="pg-action pg-action--mint">Record sale</span>
    </div>
  );
}

function CheckoutMock() {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: 380,
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
    >
      <div className="pg-panel" style={{ padding: 16, color: "var(--ink)" }}>
        <span className="bubble bubble--in">
          Hi, how much is the black one?
        </span>
        <span className="bubble bubble--out">₦28,000</span>
        <span className="bubble bubble--in">I want 2.</span>
      </div>
      <div className="pg-ui" style={{ padding: 18 }}>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <span
            className="pg-swatch"
            style={{ width: 48, height: 48, background: "#1E2422" }}
          />
          <span style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <b style={{ fontSize: 15 }}>Black tote × 2</b>
            <span style={{ fontSize: 12, color: "var(--muted)" }}>Pick up</span>
          </span>
          <b style={{ fontSize: 17 }}>₦56,000</b>
        </div>
        <span className="pg-action">
          <Share2 size={14} />
          Share checkout link
        </span>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 13,
          }}
        >
          <span style={{ color: "var(--muted)" }}>Status</span>
          <span className="pg-pill" style={{ alignSelf: "center" }}>
            Paid · order recorded
          </span>
        </div>
      </div>
    </div>
  );
}

function StoreMock() {
  return (
    <div
      className="pg-ui"
      style={{ width: "100%", maxWidth: 420, padding: 16, borderRadius: 26 }}
    >
      <span
        className="mono"
        style={{
          alignSelf: "center",
          background: "var(--line-soft)",
          borderRadius: 99,
          padding: "5px 12px",
          fontSize: 10,
          color: "#3f4d47",
        }}
      >
        adascloset.pulchriflow.com
      </span>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span className="serif" style={{ fontSize: 24 }}>
          Ada&apos;s Closet
        </span>
        <span className="pg-pill pg-pill--forest">Order · 2</span>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          gap: 10,
        }}
      >
        {[
          ["Black tote", "₦28,000", "#1E2422"],
          ["Linen set", "₦31,200", "#E7DCC6"],
          ["Sage clutch", "₦19,500", "#CFE6E0"],
          ["Clay bucket", "₦24,000", "#E4B79C"],
        ].map(([n, p, bg]) => (
          <div
            key={n}
            style={{ display: "flex", flexDirection: "column", gap: 6 }}
          >
            <span
              style={{ aspectRatio: "4 / 5", borderRadius: 12, background: bg }}
            />
            <span
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: 12,
              }}
            >
              <span style={{ fontWeight: 500 }}>{n}</span>
              <span style={{ color: "var(--muted)" }}>{p}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function InvoiceMock() {
  return (
    <div
      className="pg-ui"
      style={{
        width: "100%",
        maxWidth: 380,
        padding: 26,
        gap: 16,
        borderRadius: 26,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <span style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <span className="serif" style={{ fontSize: 24 }}>
            Ada&apos;s Closet
          </span>
          <span
            className="mono"
            style={{ fontSize: 11, color: "var(--muted)" }}
          >
            INVOICE · INV-0042
          </span>
        </span>
        <span className="pg-pill pg-pill--amber">Due in 3 days</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
          fontSize: 14,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>Linen set × 4</span>
          <span>₦124,800</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>Black tote × 2</span>
          <span>₦56,000</span>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 19,
          fontWeight: 600,
          paddingTop: 12,
          borderTop: "1px dashed #cdd8d3",
        }}
      >
        <span>Total</span>
        <span>₦180,800</span>
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        <span className="pg-action" style={{ flex: 1 }}>
          Record payment
        </span>
        <span className="pg-action pg-action--ghost" style={{ flex: 1 }}>
          Share
        </span>
      </div>
    </div>
  );
}

function ReceiptMock() {
  return (
    <div
      className="pg-ui"
      style={{
        width: "100%",
        maxWidth: 320,
        padding: 24,
        gap: 14,
        borderRadius: 26,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          fontSize: 16,
          fontWeight: 600,
        }}
      >
        <span className="pg-check" style={{ width: 30, height: 30 }}>
          <Check size={16} strokeWidth={3} />
        </span>
        Payment recorded
      </div>
      <span className="mono" style={{ fontSize: 11, color: "var(--muted)" }}>
        Receipt · RC-0193 · Order #1043
      </span>
      <div
        style={{
          borderTop: "1px dashed #cdd8d3",
          borderBottom: "1px dashed #cdd8d3",
          padding: "12px 0",
          display: "flex",
          flexDirection: "column",
          gap: 8,
          fontSize: 14,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>Black tote × 2</span>
          <span>₦56,000</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "var(--muted)",
          }}
        >
          <span>Paid by</span>
          <span>Transfer</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "var(--muted)",
          }}
        >
          <span>Customer</span>
          <span>Chioma K.</span>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 17,
          fontWeight: 600,
        }}
      >
        <span>Total</span>
        <span>₦56,000</span>
      </div>
      <span className="pg-action pg-action--ghost">
        <Share2 size={14} />
        Share receipt
      </span>
    </div>
  );
}

const mocks: Record<FeatureSlug, () => ReactNode> = {
  "quick-sale": QuickSaleMock,
  "checkout-links": CheckoutMock,
  "online-store": StoreMock,
  invoices: InvoiceMock,
  receipts: ReceiptMock,
};

const ctas: Record<
  FeatureSlug,
  { title: string; payoff: string; sub: string }
> = {
  "quick-sale": {
    title: "Every counter sale,",
    payoff: "on the record.",
    sub: "Start free. Your first 10 orders are on us.",
  },
  "checkout-links": {
    title: "One business underneath",
    payoff: "every sale.",
    sub: "Start free and send your first checkout link today.",
  },
  "online-store": {
    title: "A place to be found,",
    payoff: "ready in minutes.",
    sub: "Create your storefront free. Your first 10 orders are on us.",
  },
  invoices: {
    title: "Clear requests,",
    payoff: "clean records.",
    sub: "Start free and send your first invoice.",
  },
  receipts: {
    title: "Proof that never",
    payoff: "gets lost.",
    sub: "Start free and keep every receipt with its sale.",
  },
};

/** Capability pages (Quick Sale, Checkout links, Online store, Invoices, Receipts). */
export default function ProductFeaturePage({ slug }: { slug: FeatureSlug }) {
  const content = productPages[slug];
  const Mock = mocks[slug];
  return (
    <SolutionTemplate
      path={`/${slug}`}
      content={content}
      eyebrow={content.eyebrow
        .toLowerCase()
        .replace(/^\w/, (c) => c.toUpperCase())}
      payoff={
        content.title === "Receipts"
          ? "you can always find."
          : "for the way you sell."
      }
      visual={
        <div
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
          aria-hidden="true"
        >
          <Mock />
        </div>
      }
      secondary={{ href: "/features", label: "All features" }}
      cta={ctas[slug]}
    >
      <section className="section pg-cream">
        <div className="wrap">
          <Head
            eyebrow="The workflow"
            title="One clear next step"
            payoff="at a time."
          />
          <ol
            className="pg-grid"
            style={{ listStyle: "none", margin: 0, padding: 0 }}
          >
            {content.workflow.map((step, i) => (
              <li
                key={step}
                className={i === 2 ? "pg-card pg-card--forest" : "pg-card"}
                style={{ minHeight: 200 }}
              >
                <span className="pg-num">0{i + 1}</span>
                <b
                  style={{
                    fontSize: 24,
                    fontWeight: 500,
                    letterSpacing: "-0.02em",
                    lineHeight: 1.2,
                  }}
                >
                  {step}
                </b>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--forest on-dark">
        <div className="wrap pg-split pg-split--top">
          <div className="pg-col">
            <span className="eyebrow">What changes</span>
            <h2 className="h2">
              Less chasing. <span className="serif">A better record.</span>
            </h2>
          </div>
          <ul
            className="pg-col pg-col--wide"
            style={{ listStyle: "none", margin: 0, padding: 0, gap: 12 }}
          >
            {content.benefits.map((b) => (
              <li
                key={b}
                className="pg-card pg-card--dark"
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 16,
                  padding: 22,
                }}
              >
                <span className="pg-check pg-check--mint">
                  <Check size={12} strokeWidth={3.2} aria-hidden="true" />
                </span>
                <span style={{ fontSize: 18, fontWeight: 500 }}>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </SolutionTemplate>
  );
}
