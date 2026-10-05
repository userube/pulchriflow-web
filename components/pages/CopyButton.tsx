"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

/** Copies text to the clipboard and confirms inline (announced to screen readers). */
export default function CopyButton({ text, label = "Copy text" }: { text: string; label?: string }) {
  const [state, setState] = useState<"idle" | "done" | "error">("idle");

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setState("done");
    } catch {
      setState("error");
    }
    setTimeout(() => setState("idle"), 2400);
  }

  return (
    <button type="button" className="btn btn--forest" onClick={copy} style={{ border: "none", minHeight: 44 }}>
      {state === "done" ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
      <span aria-live="polite">{state === "done" ? "Copied" : state === "error" ? "Copy failed — select the text instead" : label}</span>
    </button>
  );
}
