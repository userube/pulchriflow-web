"use client";

import { ArrowRight, Check } from "lucide-react";
import { useRef, useState, type KeyboardEvent } from "react";
import { preservedParams } from "@/lib/navigation";

export type ProOption = {
  id: string;
  tab: string;
  badge: string;
  name: string;
  tagline: string;
  price: string;
  was?: string;
  per: string;
  note: string;
  cta: string;
  href: string;
};

const check = (mint: boolean) => (
  <span
    className={mint ? "pg-check pg-check--mint" : "pg-check pg-check--soft"}
    style={{ width: 22, height: 22 }}
  >
    <Check size={12} strokeWidth={3.2} aria-hidden="true" />
  </span>
);

/** Free + Pro cards with a billing-period toggle for Pro. */
export default function PricingPlans({
  free,
  freeHref,
  freeFeatures,
  proFeatures,
  options,
}: {
  free: string;
  freeHref: string;
  freeFeatures: string[];
  proFeatures: string[];
  options: ProOption[];
}) {
  const [i, setI] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const plan = options[i];

  const onKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    const step = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!step) return;
    e.preventDefault();
    const next = (i + step + options.length) % options.length;
    setI(next);
    tabs.current[next]?.focus();
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
      <div
        className="pg-tabs"
        role="tablist"
        aria-label="Pro billing period"
        style={{
          alignSelf: "center",
          boxShadow: "0 20px 40px -24px rgba(9,34,29,0.5)",
        }}
      >
        {options.map((o, n) => (
          <button
            key={o.id}
            ref={(el) => {
              tabs.current[n] = el;
            }}
            type="button"
            role="tab"
            className="pg-tab"
            id={`period-${o.id}`}
            aria-selected={n === i}
            aria-controls="pro-card"
            tabIndex={n === i ? 0 : -1}
            onClick={() => setI(n)}
            onKeyDown={onKey}
          >
            {o.tab}
            <span
              style={{
                fontSize: 11,
                fontWeight: 600,
                padding: "2px 8px",
                borderRadius: 99,
                background: n === i ? "var(--lime)" : "var(--line-soft)",
                color: n === i ? "var(--forest)" : "var(--muted)",
              }}
            >
              {o.badge}
            </span>
          </button>
        ))}
      </div>

      <div
        className="pg-grid"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          maxWidth: 1040,
          width: "100%",
          margin: "0 auto",
        }}
      >
        <div
          className="pg-card"
          style={{
            padding: 36,
            gap: 24,
            boxShadow: "0 30px 60px -36px rgba(9,34,29,0.35)",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <h2 style={{ margin: 0, fontSize: 22, fontWeight: 600 }}>Free</h2>
            <span className="pg-body">Start selling before you pay.</span>
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
            <b
              style={{ fontSize: 64, letterSpacing: "-0.045em", lineHeight: 1 }}
            >
              {free}
            </b>
            <span className="pg-body">to start</span>
          </div>
          <p className="pg-body">
            Build your store, share your link and take up to 10 orders a month
            with real customers. No card needed.
          </p>
          <a
            className="btn btn--forest btn--lg"
            href={freeHref}
            data-preserve-params={preservedParams}
            style={{ width: "100%" }}
          >
            Start selling free
          </a>
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: "20px 0 0",
              borderTop: "1px solid var(--line-soft)",
              display: "flex",
              flexDirection: "column",
              gap: 12,
              fontSize: 15,
            }}
          >
            {freeFeatures.map((f) => (
              <li
                key={f}
                style={{ display: "flex", gap: 12, alignItems: "flex-start" }}
              >
                {check(false)}
                {f}
              </li>
            ))}
          </ul>
          <span
            className="mono"
            style={{ fontSize: 12, color: "var(--muted)" }}
          >
            No card required.
          </span>
        </div>

        <div
          id="pro-card"
          role="tabpanel"
          aria-labelledby={`period-${plan.id}`}
          className="pg-card pg-card--forest"
          style={{
            position: "relative",
            overflow: "hidden",
            padding: 36,
            gap: 24,
            border:
              "1px solid color-mix(in srgb, var(--lime) 30%, transparent)",
            boxShadow: "0 40px 80px -36px rgba(9,34,29,0.7)",
          }}
        >
          <span
            className="pg-orbit"
            style={{ width: 520, height: 520, right: -260, top: -260 }}
            aria-hidden="true"
          />
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: 12,
            }}
          >
            <span style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <h2 style={{ margin: 0, fontSize: 22, fontWeight: 600 }}>
                Pro{" "}
                <span
                  style={{ fontWeight: 400, color: "var(--on-dark-muted)" }}
                >
                  · {plan.name}
                </span>
              </h2>
              <span className="pg-body">{plan.tagline}</span>
            </span>
            <span className="pg-pill pg-pill--mint">Most popular</span>
          </div>
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 6,
            }}
            aria-live="polite"
          >
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 10,
                flexWrap: "wrap",
              }}
            >
              {plan.was && (
                <s style={{ fontSize: 22, color: "var(--on-dark-faint)" }}>
                  <span className="sr-only">Regular price </span>
                  {plan.was}
                </s>
              )}
              <b
                style={{
                  fontSize: 64,
                  letterSpacing: "-0.045em",
                  lineHeight: 1,
                  color: "var(--lime)",
                }}
              >
                {plan.price}
              </b>
              <span style={{ fontSize: 15, color: "var(--on-dark-muted)" }}>
                {plan.per}
              </span>
            </div>
            <span style={{ fontSize: 13, color: "var(--on-dark-muted)" }}>
              {plan.note}
            </span>
          </div>
          <p className="pg-body" style={{ position: "relative" }}>
            Keep selling without limits, with the tools a growing business
            reaches for.
          </p>
          <a
            className="btn btn--lime btn--lg"
            href={plan.href}
            data-preserve-params={preservedParams}
            style={{ position: "relative", width: "100%" }}
          >
            {plan.cta}
            <ArrowRight size={16} strokeWidth={2.4} aria-hidden="true" />
          </a>
          <ul
            style={{
              position: "relative",
              listStyle: "none",
              margin: 0,
              padding: "20px 0 0",
              borderTop:
                "1px solid color-mix(in srgb, var(--on-dark) 12%, transparent)",
              display: "flex",
              flexDirection: "column",
              gap: 12,
              fontSize: 15,
            }}
          >
            {proFeatures.map((f) => (
              <li
                key={f}
                style={{ display: "flex", gap: 12, alignItems: "flex-start" }}
              >
                {check(true)}
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
