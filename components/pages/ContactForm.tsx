"use client";

import { Mail } from "lucide-react";
import { useState } from "react";

const SUPPORT = "support@pulchriflow.com";
const topics = ["Product support", "Partnerships", "Merchant question", "Media"];

/**
 * There is no contact API, so the form composes an email in the visitor's mail app
 * rather than pretending to send. Validation runs before handing off.
 */
export default function ContactForm() {
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      setError("Please fill in the highlighted fields.");
      return;
    }
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const business = String(data.get("business") || "").trim();
    const topic = String(data.get("topic") || topics[0]);
    const message = String(data.get("message") || "").trim();
    const body = [message, "", "—", `Name: ${name}`, `Email: ${email}`, business ? `Business: ${business}` : ""].filter((l) => l !== undefined).join("\n");
    setError("");
    setSent(true);
    window.location.href = `mailto:${SUPPORT}?subject=${encodeURIComponent(`${topic}${business ? ` · ${business}` : ""}`)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="pg-card" onSubmit={submit} noValidate style={{ padding: 40, gap: 18 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <h2 style={{ margin: 0, fontSize: 26, fontWeight: 500, letterSpacing: "-0.02em" }}>Send a message</h2>
        <span className="pg-body">Tell us a little about your business and what you need. This opens your email app with the message ready to send.</span>
      </div>
      <div className="pg-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14 }}>
        <label className="pg-field">Your name<input name="name" type="text" autoComplete="name" required placeholder="Ada Obi" /></label>
        <label className="pg-field">Email<input name="email" type="email" autoComplete="email" required placeholder="you@business.com" /></label>
        <label className="pg-field">Business name <span style={{ color: "var(--muted)", fontWeight: 400 }}>(optional)</span><input name="business" type="text" autoComplete="organization" placeholder="Ada's Closet" /></label>
        <label className="pg-field">Topic<select name="topic" defaultValue={topics[0]}>{topics.map((t) => <option key={t}>{t}</option>)}</select></label>
      </div>
      <label className="pg-field">Message<textarea name="message" required minLength={10} placeholder="How can we help?" /></label>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
        <p className="pg-form-note" role="status" aria-live="polite" style={{ color: error ? "#9b2c1c" : "var(--muted)" }}>
          {error || (sent ? `Your email app should open now. If it doesn't, write to ${SUPPORT}.` : `Or email ${SUPPORT} directly.`)}
        </p>
        <button type="submit" className="btn btn--forest btn--lg" style={{ border: "none" }}><Mail size={16} aria-hidden="true" />Write email</button>
      </div>
    </form>
  );
}
