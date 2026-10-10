"use client";

import { Check, Plus } from "lucide-react";
import { useRef, useState, type KeyboardEvent, type ReactNode } from "react";

type Step = { key: string; label: string; title: string; body: string; we: string[]; you: string[] };

const steps: Step[] = [
  {
    key: "info",
    label: "Your business",
    title: "We gather everything about your business.",
    body: "One short form covers the basics: your business name, what you sell, your contact details and the shop link you want. We follow up on WhatsApp for anything else.",
    we: ["Set up your PulchriFlow account", "Reserve your shop link", "Confirm the details with you on WhatsApp"],
    you: ["Business name and what you sell", "WhatsApp number and email", "The shop link you'd like"],
  },
  {
    key: "products",
    label: "Products",
    title: "We upload your products.",
    body: "Send your product list however it's easiest. We add each product to your store so customers can browse and order.",
    we: ["Add each product to your store", "Enter prices and product photos", "Set stock where you track it"],
    you: ["Product names and prices", "Product photos, if you have them", "Sizes, colours or stock, if any"],
  },
  {
    key: "brand",
    label: "Storefront & branding",
    title: "Your shop, in your colours.",
    body: "We configure your storefront for the kind of business you run and apply your branding, so the shop looks like yours from day one.",
    we: ["Configure your storefront", "Add your logo, colours and banners", "Add your shop description"],
    you: ["Your logo", "Your brand colour", "Banner photos, if you have them"],
  },
  {
    key: "whatsapp",
    label: "WhatsApp ordering",
    title: "Orders straight to your WhatsApp.",
    body: "Customers browse your store and send their order to your WhatsApp in one tap, with the items and prices already filled in.",
    we: ["Set up WhatsApp ordering on your store", "Connect your WhatsApp number", "Check an order comes through"],
    you: ["The WhatsApp number orders should go to"],
  },
  {
    key: "live",
    label: "Go live",
    title: "We help you get started.",
    body: "Once you've checked everything, your store goes live. We show you how to share your link and handle your first orders from your dashboard.",
    we: ["Final check with you before launch", "Help you share your shop link", "Show you how to manage orders"],
    you: ["Your go-ahead to launch"],
  },
];

const card = { background: "var(--paper)", color: "var(--ink)", borderRadius: 20, width: "100%" } as const;

function Preview({ step }: { step: string }): ReactNode {
  if (step === "info") {
    return (
      <div style={{ ...card, padding: 20, display: "flex", flexDirection: "column", gap: 12 }}>
        <b style={{ fontSize: 15 }}>Your business</b>
        {[
          ["Business name", "Jane Styles"],
          ["What you sell", "Fashion and clothing"],
        ].map(([l, v]) => (
          <span key={l} style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12.5, color: "var(--muted)" }}>
            {l}
            <span style={{ padding: "10px 12px", borderRadius: 10, border: "1px solid var(--line)", fontSize: 14, color: "var(--ink)" }}>{v}</span>
          </span>
        ))}
        <span style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12.5, color: "var(--muted)" }}>
          Shop link
          <span style={{ padding: "10px 12px", borderRadius: 10, border: "1px solid var(--brand)", background: "var(--brand-soft)", fontSize: 14, color: "var(--ink)" }}>
            jane-styles<span style={{ color: "var(--muted)" }}>.pulchriflow.com</span>
          </span>
        </span>
        <span className="pg-pill">Link reserved</span>
      </div>
    );
  }
  if (step === "products") {
    const tiles = ["#E9D9C4", "#DCE8E2", "#F2DDB0", "#E8D3D6", "#D7E4F0", "#EFE9DC"];
    const prices = ["₦24,500", "₦18,000", "₦9,800", "₦32,000"];
    return (
      <div style={{ ...card, padding: 18, display: "flex", flexDirection: "column", gap: 12 }}>
        <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
          <b style={{ fontSize: 15 }}>Products</b>
          <span className="pg-pill">Uploading</span>
        </span>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 8 }}>
          {tiles.map((bg, i) => (
            <span key={bg} style={{ display: "flex", flexDirection: "column", gap: 6, opacity: i < 4 ? 1 : 0.35 }}>
              <span style={{ aspectRatio: "1", borderRadius: 12, background: bg }} />
              <span style={{ height: 6, width: "80%", borderRadius: 4, background: "var(--line)" }} />
              <span style={{ fontSize: 11.5, fontWeight: 600, color: "var(--brand)", minHeight: 14 }}>{prices[i] || ""}</span>
            </span>
          ))}
        </div>
      </div>
    );
  }
  if (step === "brand") {
    return (
      <div style={{ ...card, overflow: "hidden" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 14px" }}>
          <span style={{ width: 30, height: 30, borderRadius: 9, background: "#E9D9C4", color: "#6B4E26", fontSize: 12, fontWeight: 700, display: "grid", placeItems: "center" }}>JS</span>
          <b style={{ fontSize: 14 }}>Jane Styles</b>
          <span style={{ marginLeft: "auto", width: 28, height: 28, borderRadius: 99, background: "#7A3B2E" }} />
        </div>
        <div style={{ height: 150, background: "linear-gradient(160deg, #C98B5A, #7A3B2E)", padding: 16, display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: 8, color: "#fff" }}>
          <b style={{ fontSize: 20, letterSpacing: "-0.02em", lineHeight: 1.05 }}>
            Everyday pieces, made to <span className="serif" style={{ color: "#F6E3C8" }}>last</span>
          </b>
          <span style={{ alignSelf: "flex-start", padding: "6px 12px", borderRadius: 99, background: "#fff", color: "#7A3B2E", fontSize: 12, fontWeight: 600 }}>Shop now</span>
        </div>
        <div style={{ display: "flex", gap: 8, alignItems: "center", padding: "12px 14px" }}>
          {["#7A3B2E", "#09221D", "#C98B5A"].map((c) => (
            <span key={c} style={{ width: 22, height: 22, borderRadius: 99, background: c }} />
          ))}
          <span style={{ marginLeft: "auto", fontSize: 12, color: "var(--muted)" }}>Your logo, colours and banners</span>
        </div>
      </div>
    );
  }
  if (step === "whatsapp") {
    return (
      <div style={{ ...card, background: "#ECE5DD", padding: 16, display: "flex", flexDirection: "column", gap: 10 }}>
        <span style={{ display: "flex", alignItems: "center", gap: 10, paddingBottom: 10, borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
          <span style={{ width: 30, height: 30, borderRadius: 99, background: "#1F9D55", color: "#fff", fontSize: 12, fontWeight: 700, display: "grid", placeItems: "center" }}>JS</span>
          <b style={{ fontSize: 14 }}>Jane Styles</b>
        </span>
        <span style={{ alignSelf: "flex-end", maxWidth: "85%", padding: "10px 12px", borderRadius: "12px 12px 2px 12px", background: "#D9FDD3", fontSize: 13, lineHeight: 1.45 }}>
          Hi Jane Styles, I&apos;d like to order:
          <br />1 × Linen two-piece set · ₦24,500
          <br />Deliver to Lekki, Lagos
        </span>
        <span style={{ alignSelf: "flex-start", maxWidth: "85%", padding: "10px 12px", borderRadius: "12px 12px 12px 2px", background: "#fff", fontSize: 13 }}>Thank you! Your order is confirmed.</span>
      </div>
    );
  }
  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ ...card, padding: 18, display: "flex", flexDirection: "column", gap: 10 }}>
        <span className="mono" style={{ fontSize: 11.5, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--brand)" }}>Your shop is live</span>
        <b style={{ fontSize: 18, overflowWrap: "anywhere" }}>jane-styles.pulchriflow.com</b>
        <span style={{ display: "flex", gap: 8 }}>
          <span style={{ flex: 1, padding: 10, borderRadius: 99, background: "var(--forest)", color: "var(--on-dark)", fontSize: 13, fontWeight: 600, textAlign: "center" }}>Copy link</span>
          <span style={{ flex: 1, padding: 10, borderRadius: 99, border: "1px solid var(--line)", fontSize: 13, fontWeight: 600, textAlign: "center" }}>Share on WhatsApp</span>
        </span>
      </div>
      <div style={{ borderRadius: 20, padding: "16px 18px", background: "var(--lime)", color: "var(--forest)", display: "flex", alignItems: "center", gap: 12 }}>
        <span style={{ width: 36, height: 36, borderRadius: 12, background: "var(--forest)", color: "var(--lime)", display: "grid", placeItems: "center", fontWeight: 700 }}>1</span>
        <span>
          <b style={{ display: "block", fontSize: 14.5 }}>First order received</b>
          <span style={{ fontSize: 12.5 }}>Order #0001 · ₦24,500</span>
        </span>
      </div>
    </div>
  );
}

/** "What you can expect": one tab per part of the setup, each with what we do and what you send. */
export default function SetupTabs() {
  const [i, setI] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const step = steps[i];

  const onKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    const dir = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    const next = (i + dir + steps.length) % steps.length;
    setI(next);
    tabs.current[next]?.focus();
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
      <div role="tablist" aria-label="What the setup covers" style={{ display: "flex", gap: 8, overflowX: "auto", borderBottom: "1px solid var(--line)" }}>
        {steps.map((s, n) => (
          <button
            key={s.key}
            ref={(el) => {
              tabs.current[n] = el;
            }}
            type="button"
            role="tab"
            id={`setup-tab-${s.key}`}
            aria-selected={n === i}
            aria-controls="setup-panel"
            tabIndex={n === i ? 0 : -1}
            onClick={() => setI(n)}
            onKeyDown={onKey}
            style={{
              font: "inherit",
              cursor: "pointer",
              flex: "none",
              display: "flex",
              alignItems: "center",
              gap: 10,
              minHeight: 52,
              padding: "0 18px",
              border: "none",
              borderBottom: `3px solid ${n === i ? "var(--brand)" : "transparent"}`,
              background: "transparent",
              color: n === i ? "var(--ink)" : "var(--muted)",
              fontSize: 15,
              fontWeight: 600,
            }}
          >
            <span className="mono" style={{ fontSize: 12, color: n === i ? "var(--brand)" : "inherit" }}>0{n + 1}</span>
            {s.label}
          </button>
        ))}
      </div>

      <div id="setup-panel" role="tabpanel" aria-labelledby={`setup-tab-${step.key}`} className="pg-split" style={{ alignItems: "center" }}>
        <div style={{ flex: "1 1 420px", display: "flex", flexDirection: "column", gap: 20, minWidth: 0 }}>
          <span className="eyebrow">
            0{i + 1} · {step.label}
          </span>
          <h3 style={{ margin: 0, fontSize: "clamp(28px, 3.4vw, 40px)", lineHeight: 1.08, letterSpacing: "-0.035em", fontWeight: 500 }}>{step.title}</h3>
          <p className="pg-body" style={{ fontSize: 16.5 }}>{step.body}</p>
          <div className="pg-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 }}>
            <div style={{ padding: 20, borderRadius: 20, background: "var(--cream)", display: "flex", flexDirection: "column", gap: 12 }}>
              <span className="mono" style={{ fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--brand)" }}>We do</span>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 12, fontSize: 14.5, lineHeight: 1.45 }}>
                {step.we.map((w) => (
                  <li key={w} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <span className="pg-check pg-check--mint" style={{ width: 22, height: 22 }}><Check size={12} strokeWidth={3.2} aria-hidden="true" /></span>
                    {w}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ padding: 20, borderRadius: 20, border: "1px solid var(--line)", display: "flex", flexDirection: "column", gap: 12 }}>
              <span className="mono" style={{ fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--muted)" }}>You send</span>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 12, fontSize: 14.5, lineHeight: 1.45 }}>
                {step.you.map((y) => (
                  <li key={y} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <span className="pg-check pg-check--soft" style={{ width: 22, height: 22 }}><Plus size={12} strokeWidth={3} aria-hidden="true" /></span>
                    {y}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div style={{ flex: "1 1 380px", display: "flex", justifyContent: "center", minWidth: 0 }} aria-hidden="true">
          <div style={{ width: "100%", maxWidth: 460, minHeight: 360, borderRadius: 28, background: "var(--forest)", padding: 28, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
            <span className="pg-orbit" style={{ width: 420, height: 420, right: -180, top: -180 }} />
            <div style={{ position: "relative", width: "100%" }}>
              <Preview step={step.key} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
