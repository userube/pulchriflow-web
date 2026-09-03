"use client";

import { useEffect } from "react";

export default function AnchorScroller({ target }: { target?: string }) {
  useEffect(() => {
    if (!target) return;
    window.requestAnimationFrame(() => {
      document.getElementById(target)?.scrollIntoView({ block: "start" });
    });
  }, [target]);

  return null;
}
