"use client";

import { Loader2 } from "lucide-react";
import { useState } from "react";
import { browserApiEndpoint } from "@/lib/config";
import {
  SETUP_SUPPORT_EMAIL,
  businessTypes,
  isValidEmail,
  normalizePhone,
  type SetupCheckout,
  type SetupRequest,
} from "@/lib/setup";

export type Billing = { id: string; name: string; price: string };

type Status = "idle" | "sending" | "redirecting";
type FieldErrors = Partial<Record<"email" | "whatsappPhone", string>>;

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

async function errorMessage(res: Response) {
  try {
    const body = (await res.json()) as { message?: string; error?: string };
    return body.message || body.error || "";
  } catch {
    return "";
  }
}

/** Collects a setup request, creates it through the API and sends the merchant to checkout to pay. */
export default function SetupForm({
  packageCode,
  fee,
}: {
  packageCode: string;
  fee: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [photos, setPhotos] = useState(true);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status !== "idle") return;
    const form = e.currentTarget;
    const data = new FormData(form);
    const value = (key: string) => String(data.get(key) || "").trim();

    const email = value("email");
    const phone = normalizePhone(value("whatsappPhone"));
    const errors: FieldErrors = {};
    if (email && !isValidEmail(email))
      errors.email = "Enter a valid email address";
    if (value("whatsappPhone") && !phone)
      errors.whatsappPhone = "Enter a real phone number, like +2348012345678.";
    setFieldErrors(errors);
    if (!form.checkValidity() || Object.keys(errors).length) {
      form.reportValidity();
      setError("Please fix the highlighted fields.");
      return;
    }
    if (!packageCode) {
      setError(
        `Setup isn't available right now. Please try again later or email ${SETUP_SUPPORT_EMAIL}.`,
      );
      return;
    }

    const request: SetupRequest = {
      fullName: value("fullName"),
      businessName: value("businessName"),
      email,
      whatsappPhone: phone as string,
      businessType: value("businessType"),
      preferredSlug: value("preferredSlug")
        .toLowerCase()
        .replace(/[^a-z0-9-]+/g, "-")
        .replace(/^-+|-+$/g, ""),
      hasProductPhotos: photos,
      notes: value("notes"),
      packageCode,
    };
    setError("");
    setStatus("sending");

    const endpoint = browserApiEndpoint("/api/public/setup-requests");
    if (!endpoint) {
      setStatus("idle");
      setError(
        `We couldn't start your setup. Please try again or email ${SETUP_SUPPORT_EMAIL}.`,
      );
      return;
    }
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(request),
      });
      if (!res.ok) {
        setStatus("idle");
        setError(
          (await errorMessage(res)) ||
            "We couldn't start your setup. Please check your details and try again.",
        );
        return;
      }
      const checkout = (await res.json()) as SetupCheckout;
      if (!checkout.checkoutUrl) {
        setStatus("idle");
        setError(
          `Your request was saved but we couldn't open payment. Reference: ${checkout.setupReference}. Please email ${SETUP_SUPPORT_EMAIL}.`,
        );
        return;
      }
      setStatus("redirecting");
      window.location.assign(checkout.checkoutUrl);
    } catch {
      setStatus("idle");
      setError(
        `We couldn't reach PulchriFlow. Check your connection and try again, or email ${SETUP_SUPPORT_EMAIL}.`,
      );
    }
  }

  const busy = status !== "idle";

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
              aria-invalid={!!fieldErrors.whatsappPhone}
              aria-describedby={
                fieldErrors.whatsappPhone ? "phone-error" : undefined
              }
              onInput={() =>
                fieldErrors.whatsappPhone &&
                setFieldErrors((f) => ({ ...f, whatsappPhone: undefined }))
              }
              style={
                fieldErrors.whatsappPhone
                  ? { borderColor: "#9b2c1c" }
                  : undefined
              }
            />
            {fieldErrors.whatsappPhone && (
              <span
                id="phone-error"
                style={{ fontWeight: 400, color: "#9b2c1c" }}
              >
                {fieldErrors.whatsappPhone}
              </span>
            )}
          </label>
          <label className="pg-field">
            Email
            <input
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="jane@example.com"
              aria-invalid={!!fieldErrors.email}
              aria-describedby={fieldErrors.email ? "email-error" : undefined}
              onInput={() =>
                fieldErrors.email &&
                setFieldErrors((f) => ({ ...f, email: undefined }))
              }
              style={fieldErrors.email ? { borderColor: "#9b2c1c" } : undefined}
            />
            {fieldErrors.email && (
              <span
                id="email-error"
                style={{ fontWeight: 400, color: "#9b2c1c" }}
              >
                {fieldErrors.email}
              </span>
            )}
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
            (status === "redirecting"
              ? "Taking you to secure payment…"
              : `Next, you'll pay ${fee} securely. It includes your first month of Pro.`)}
        </p>
        <button
          type="submit"
          className="btn btn--forest btn--lg"
          disabled={busy}
          aria-busy={busy}
          style={{ border: "none", opacity: busy ? 0.75 : 1 }}
        >
          {busy && (
            <Loader2 size={16} className="animate-spin" aria-hidden="true" />
          )}
          {status === "sending"
            ? "Sending…"
            : status === "redirecting"
              ? "Opening payment…"
              : "Continue to payment"}
        </button>
      </div>
    </form>
  );
}
