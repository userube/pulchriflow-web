"use client";

import { useId, useState } from "react";
import { browserApiEndpoint } from "../lib/config";

type Variant = "footer" | "dark" | "light";
type Status = "idle" | "sending" | "done" | "error";

const formClass: Record<Variant, string> = {
  footer: "subscribe",
  dark: "pg-inline-form",
  light: "pg-inline-form pg-inline-form--light",
};

/** Newsletter sign-up posting to the public API. One component, three placements. */
export default function NewsletterForm({
  source = "public-web",
  variant = "dark",
  label = "Email address",
  placeholder = "Email address",
  visibleLabel = false,
}: {
  source?: string;
  variant?: Variant;
  label?: string;
  placeholder?: string;
  visibleLabel?: boolean;
}) {
  const id = useId();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function subscribe(event: React.FormEvent) {
    event.preventDefault();
    const endpoint = browserApiEndpoint("/newsletter/subscribe");
    if (!endpoint) {
      setStatus("error");
      setMessage("Subscription is not available right now.");
      return;
    }
    setStatus("sending");
    setMessage("");
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });
      if (!response.ok) throw new Error(String(response.status));
      setStatus("done");
      setMessage("You're subscribed.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Subscription could not be completed. Please try again.");
    }
  }

  const buttonClass = variant === "footer" ? undefined : variant === "light" ? "btn btn--forest" : "btn btn--lime";
  const tone = variant === "light" ? "var(--ink)" : "var(--on-dark-muted)";

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {visibleLabel && (
        <label htmlFor={id} style={{ fontSize: 14, fontWeight: 600 }}>
          {label}
        </label>
      )}
      <form className={formClass[variant]} onSubmit={subscribe} noValidate={false}>
        {!visibleLabel && (
          <label className="sr-only" htmlFor={id}>
            {label}
          </label>
        )}
        <input
          id={id}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          required
          autoComplete="email"
          placeholder={placeholder}
          aria-describedby={message ? `${id}-msg` : undefined}
        />
        <button
          className={buttonClass}
          type="submit"
          disabled={status === "sending"}
          style={buttonClass ? { minHeight: 44, border: "none" } : undefined}
        >
          {status === "sending" ? "Subscribing…" : "Subscribe"}
        </button>
      </form>
      <p id={`${id}-msg`} role="status" aria-live="polite" className="pg-form-note" style={{ color: tone, minHeight: message ? undefined : 0 }}>
        {message}
      </p>
    </div>
  );
}
