"use client";

import { Check, Loader2 } from "lucide-react";
import { useState } from "react";
import { browserApiEndpoint } from "@/lib/config";
import {
  SETUP_SUPPORT_EMAIL,
  businessTypes,
  type SetupRequest,
} from "@/lib/setup";

export type Billing = { id: string; name: string; price: string };

type Status = "idle" | "sending" | "sent" | "emailed";

function choiceStyle(on: boolean) {
  return {
    font: "inherit",
    cursor: "pointer",
    textAlign: "left" as const,
    borderRadius: 14,
    border: `1.5px solid ${on ? "var(--brand)" : "var(--line)"}`,
    background: on ? "var(--brand-soft)" : "var(--paper)",
    color: "var(--ink)",
  };
}

/** Collects a setup request and sends it to the API; falls back to a prepared email if the API can't be reached. */
export default function SetupForm({ packageCode }: { packageCode: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [photos, setPhotos] = useState(true);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      setError("Please fill in the highlighted fields.");
      return;
    }
    const data = new FormData(form);
    const value = (key: string) => String(data.get(key) || "").trim();
    const notes = value("notes");
    const request: SetupRequest = {
      fullName: value("fullName"),
      businessName: value("businessName"),
      email: value("email"),
      whatsappPhone: value("whatsappPhone"),
      businessType: value("businessType"),
      preferredSlug: value("preferredSlug")
        .toLowerCase()
        .replace(/[^a-z0-9-]+/g, "-")
        .replace(/^-+|-+$/g, ""),
      hasProductPhotos: photos,
      notes,
      packageCode,
    };
    setError("");
    setStatus("sending");

    const endpoint = browserApiEndpoint("/api/public/setup-requests");
    if (endpoint) {
      try {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(request),
        });
        if (res.ok) {
          setStatus("sent");
          return;
        }
      } catch {
        // Network or CORS failure: fall back to email below.
      }
    }
    const body = [
      `Full name: ${request.fullName}`,
      `Business: ${request.businessName}`,
      `What they sell: ${request.businessType}`,
      `Preferred shop link: ${request.preferredSlug}.pulchriflow.com`,
      `WhatsApp: ${request.whatsappPhone}`,
      `Email: ${request.email}`,
      `Has product photos: ${request.hasProductPhotos ? "Yes" : "Not yet"}`,
      `Package: ${request.packageCode}`,
      "",
      request.notes,
    ].join("\n");
    setStatus("emailed");
    window.location.href = `mailto:${SETUP_SUPPORT_EMAIL}?subject=${encodeURIComponent(`Setup request · ${request.businessName}`)}&body=${encodeURIComponent(body)}`;
  }

  if (status === "sent") {
    return (
      <div
        role="status"
        className="pg-card"
        style={{ padding: 36, gap: 16, alignItems: "flex-start" }}
      >
        <span
          className="pg-check pg-check--mint"
          style={{ width: 56, height: 56 }}
        >
          <Check size={26} strokeWidth={2.8} aria-hidden="true" />
        </span>
        <h3
          style={{
            margin: 0,
            fontSize: 30,
            fontWeight: 500,
            letterSpacing: "-0.03em",
          }}
        >
          Thanks, we&apos;ve got <span className="serif">your details.</span>
        </h3>
        <p className="pg-body" style={{ fontSize: 16 }}>
          Our team will contact you on WhatsApp to confirm your setup before you
          pay.
        </p>
        <button
          type="button"
          className="btn btn--forest"
          style={{ border: "none" }}
          onClick={() => setStatus("idle")}
        >
          Send another business
        </button>
      </div>
    );
  }

  const sending = status === "sending";

  return (
    <form
      className="pg-card"
      onSubmit={submit}
      noValidate
      aria-label="Setup request"
      style={{ padding: 36, gap: 30 }}
    >
      <fieldset
        style={{
          margin: 0,
          padding: 0,
          border: 0,
          display: "flex",
          flexDirection: "column",
          gap: 16,
          minWidth: 0,
        }}
      >
        <legend
          className="mono"
          style={{
            padding: 0,
            marginBottom: 16,
            fontSize: 12,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--brand)",
          }}
        >
          01 · Your business
        </legend>
        <label className="pg-field">
          Business name
          <input
            name="businessName"
            type="text"
            autoComplete="organization"
            required
            placeholder="e.g. Jane Styles"
          />
        </label>
        <label className="pg-field">
          What do you sell?
          <select
            className="appearance-none"
            name="businessType"
            required
            defaultValue="FASHION"
          >
            {businessTypes.map((b) => (
              <option key={b.value} value={b.value}>
                {b.label}
              </option>
            ))}
          </select>
        </label>
        <label className="pg-field">
          Preferred shop link
          <span
            style={{
              display: "flex",
              border: "1px solid var(--line)",
              borderRadius: 14,
              overflow: "hidden",
              background: "var(--paper)",
            }}
          >
            <input
              name="preferredSlug"
              type="text"
              required
              autoCapitalize="none"
              spellCheck={false}
              pattern="[A-Za-z0-9-]+"
              placeholder="jane-styles"
              style={{ border: 0, borderRadius: 0, flex: 1, minWidth: 0 }}
            />
            <span
              className="mono"
              style={{
                display: "flex",
                alignItems: "center",
                padding: "0 14px",
                background: "var(--cream)",
                color: "var(--muted)",
                fontSize: 13,
                whiteSpace: "nowrap",
              }}
            >
              .pulchriflow.com
            </span>
          </span>
          <span style={{ fontWeight: 400, color: "var(--muted)" }}>
            Letters, numbers and hyphens. We&apos;ll use the closest available
            link.
          </span>
        </label>
        <span style={{ fontSize: 13, fontWeight: 500 }} id="photos-label">
          Do you have photos of your products?
        </span>
        <div
          role="radiogroup"
          aria-labelledby="photos-label"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 8,
          }}
        >
          {[
            [true, "Yes, I have photos", "From your phone is fine"],
            [false, "Not yet", "We'll talk it through"],
          ].map(([v, label, note]) => (
            <button
              key={String(v)}
              type="button"
              role="radio"
              aria-checked={photos === v}
              onClick={() => setPhotos(v as boolean)}
              style={{
                ...choiceStyle(photos === v),
                minHeight: 60,
                padding: "10px 16px",
                display: "flex",
                alignItems: "center",
                gap: 12,
                fontSize: 15,
              }}
            >
              <span
                style={{
                  width: 20,
                  height: 20,
                  flex: "none",
                  borderRadius: "50%",
                  border: `2px solid ${photos === v ? "var(--brand)" : "var(--line)"}`,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {photos === v && (
                  <span
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background: "var(--brand)",
                    }}
                  />
                )}
              </span>
              <span>
                <b style={{ display: "block", fontWeight: 600 }}>
                  {label as string}
                </b>
                <span style={{ fontSize: 13, color: "var(--muted)" }}>
                  {note as string}
                </span>
              </span>
            </button>
          ))}
        </div>
      </fieldset>
      <fieldset
        style={{
          margin: 0,
          padding: 0,
          border: 0,
          display: "flex",
          flexDirection: "column",
          gap: 16,
          minWidth: 0,
        }}
      >
        <legend
          className="mono"
          style={{
            padding: 0,
            marginBottom: 16,
            fontSize: 12,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--brand)",
          }}
        >
          02 · Contact
        </legend>
        <label className="pg-field">
          Full name
          <input
            name="fullName"
            type="text"
            autoComplete="name"
            required
            placeholder="e.g. Jane Doe"
          />
        </label>
        <div
          className="pg-grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 14,
          }}
        >
          <label className="pg-field">
            WhatsApp number
            <input
              name="whatsappPhone"
              type="tel"
              autoComplete="tel"
              required
              placeholder="+234 801 234 5678"
            />
          </label>
          <label className="pg-field">
            Email
            <input
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="jane@example.com"
            />
          </label>
        </div>
        <label className="pg-field">
          <span>
            Notes for our team{" "}
            <span style={{ color: "var(--muted)", fontWeight: 400 }}>
              (optional)
            </span>
          </span>
          <textarea
            name="notes"
            placeholder="e.g. I want a clean luxury look"
            style={{ minHeight: 100 }}
          />
        </label>
      </fieldset>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 14,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <p
          className="pg-form-note"
          role="status"
          aria-live="polite"
          style={{ color: error ? "#9b2c1c" : "var(--muted)" }}
        >
          {error ||
            (status === "emailed"
              ? `Your email app should open with your details. If it doesn't, write to ${SETUP_SUPPORT_EMAIL}.`
              : "No payment yet. We confirm everything on WhatsApp first.")}
        </p>
        <button
          type="submit"
          className="btn btn--forest btn--lg"
          disabled={sending}
          aria-busy={sending}
          style={{ border: "none", opacity: sending ? 0.75 : 1 }}
        >
          {sending && (
            <Loader2 size={16} className="animate-spin" aria-hidden="true" />
          )}
          {sending ? "Sending…" : "Send my details"}
        </button>
      </div>
    </form>
  );
}
