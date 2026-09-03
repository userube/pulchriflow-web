"use client";

import { useState } from "react";
import { apiUrl } from "../lib/config";

export default function NewsletterForm({ source = "public-web" }: { source?: string }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function subscribe(event: React.FormEvent) {
    event.preventDefault();
    setMessage("");
    const response = await fetch(`${apiUrl.replace(/\/$/, "")}/newsletter/subscribe`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, source })
    });
    setMessage(response.ok ? "You're subscribed." : "Subscription could not be completed.");
    if (response.ok) setEmail("");
  }

  return (
    <form className="newsletter" onSubmit={subscribe}>
      <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" required placeholder="Email address" />
      <button className="button primary" type="submit">Subscribe</button>
      {message && <p>{message}</p>}
    </form>
  );
}
