"use client";

import { useState } from "react";
import { browserApiEndpoint } from "../lib/config";

export default function NewsletterForm({ source = "public-web" }: { source?: string }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function subscribe(event: React.FormEvent) {
    event.preventDefault();
    setMessage("");
    const endpoint = browserApiEndpoint("/newsletter/subscribe");
    if (!endpoint) {
      setMessage("Subscription is not available right now.");
      return;
    }
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source })
      });
      setMessage(response.ok ? "You're subscribed." : "Subscription could not be completed.");
      if (response.ok) setEmail("");
    } catch {
      setMessage("Subscription could not be completed.");
    }
  }

  return (
    <form className="newsletter" onSubmit={subscribe}>
      <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" required placeholder="Email address" />
      <button className="button primary" type="submit">Subscribe</button>
      {message && <p>{message}</p>}
    </form>
  );
}
