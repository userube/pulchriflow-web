"use client";

import { Check, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { useRef, useState, type KeyboardEvent } from "react";
import { EASE } from "../motion";

const flows = [
  {
    where: "In front of you",
    flow: "Quick Sale",
    headline: "Ring it up in seconds.",
    text: "Pick items or type a quick amount, choose how they paid, and hand over the receipt.",
    points: ["No catalogue needed to start", "Cash, transfer or POS", "Receipt ready on completion"],
    item: "Quick amount",
    amount: "₦12,500",
    rows: [["Paid by", "Cash"], ["Customer", "Walk-in"]],
    cta: "Record sale",
  },
  {
    where: "In a chat",
    flow: "Checkout link",
    headline: "Send a link, not an account number.",
    text: "Create a checkout with the items and quantity, share it in the conversation, and the order records itself when they pay.",
    points: ["Built from the products you agreed", "Shareable in any chat", "Order and receipt created on payment"],
    item: "Linen set · Olive × 1",
    amount: "₦31,200",
    rows: [["Delivery", "Free"], ["Link", "/pay/4TZ9"]],
    cta: "Share checkout link",
  },
  {
    where: "Browsing",
    flow: "Storefront order",
    headline: "Let them shop on their own time.",
    text: "Your storefront gives them products, details and a real order flow, with a path to pay at the end.",
    points: ["Products, prices and variants", "Order lands in your dashboard", "Customer saved automatically"],
    item: "Order #1042 · 2 items",
    amount: "₦59,200",
    rows: [["Paid by", "Card"], ["Status", "Packing"]],
    cta: "View order",
  },
];

/** "Where is the customer?" tablist that swaps the recommended sale flow. */
export default function FlowChooser() {
  const [picked, setPicked] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const cur = flows[picked];

  const onKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    const step = e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : e.key === "ArrowUp" || e.key === "ArrowLeft" ? -1 : 0;
    if (!step) return;
    e.preventDefault();
    const next = (picked + step + flows.length) % flows.length;
    setPicked(next);
    tabs.current[next]?.focus();
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "stretch" }}>
      <div role="tablist" aria-label="Where is the customer?" aria-orientation="vertical" style={{ flex: "1 1 340px", display: "flex", flexDirection: "column", gap: 10 }}>
        <span className="pg-label" style={{ paddingBottom: 6 }}>Where is the customer?</span>
        {flows.map((f, i) => {
          const on = i === picked;
          return (
            <button
              key={f.flow}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`flow-tab-${i}`}
              aria-selected={on}
              aria-controls="flow-panel"
              tabIndex={on ? 0 : -1}
              onClick={() => setPicked(i)}
              onKeyDown={onKey}
              style={{
                textAlign: "left",
                font: "inherit",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 16,
                padding: 20,
                borderRadius: 22,
                border: `1px solid ${on ? "var(--forest)" : "var(--line)"}`,
                background: on ? "var(--forest)" : "var(--paper)",
                color: on ? "var(--on-dark)" : "var(--ink)",
                transition: "background .25s, color .25s, border-color .25s",
              }}
            >
              <span className="mono" style={{ fontSize: 13, color: on ? "var(--lime)" : "var(--brand)" }}>0{i + 1}</span>
              <span style={{ flex: 1, display: "flex", flexDirection: "column", gap: 4 }}>
                <b style={{ fontSize: 18, fontWeight: 500 }}>{f.where}</b>
                <span style={{ fontSize: 14, color: on ? "var(--on-dark-muted)" : "var(--muted)" }}>Use {f.flow}</span>
              </span>
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          );
        })}
      </div>

      <div
        id="flow-panel"
        role="tabpanel"
        aria-labelledby={`flow-tab-${picked}`}
        className="pg-stage"
        style={{ flex: "1.4 1 480px", display: "flex", flexWrap: "wrap", gap: 32, alignItems: "center", minHeight: 480 }}
      >
        <motion.div
            key={cur.flow}
            initial={{ opacity: 0.4, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            style={{ display: "flex", flexWrap: "wrap", gap: 32, alignItems: "center", width: "100%" }}
          >
            <div style={{ flex: "1 1 220px", display: "flex", flexDirection: "column", gap: 16 }}>
              <span className="pg-pill pg-pill--forest">{cur.flow}</span>
              <b style={{ fontSize: 30, fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1.1 }}>{cur.headline}</b>
              <p className="pg-body" style={{ fontSize: 16 }}>{cur.text}</p>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 8, fontSize: 14 }}>
                {cur.points.map((p) => (
                  <li key={p} style={{ display: "flex", gap: 10, alignItems: "center" }}>
                    <span className="pg-check" style={{ width: 20, height: 20 }}><Check size={11} strokeWidth={3.4} aria-hidden="true" /></span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="pg-ui" style={{ flex: "1 1 240px", maxWidth: 300, margin: "0 auto", gap: 14 }} aria-hidden="true">
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, fontWeight: 600 }}>
                <span>{cur.flow}</span>
                <span className="mono" style={{ fontSize: 11, color: "var(--muted)", fontWeight: 400 }}>{cur.where}</span>
              </div>
              <div style={{ textAlign: "center", padding: "10px 0", display: "flex", flexDirection: "column", gap: 4 }}>
                <span style={{ fontSize: 12, color: "var(--muted)" }}>{cur.item}</span>
                <b style={{ fontSize: 38, letterSpacing: "-0.04em" }}>{cur.amount}</b>
              </div>
              {cur.rows.map(([k, v]) => (
                <div key={k} className="pg-kv"><span>{k}</span><b>{v}</b></div>
              ))}
              <span className="pg-action pg-action--mint">{cur.cta}</span>
            </div>
          </motion.div>
      </div>
    </div>
  );
}
