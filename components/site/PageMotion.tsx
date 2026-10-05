"use client";

import { useRef } from "react";
import { gsap, MQ, ScrollTrigger, useGSAP } from "@/lib/gsap";

/** Top-level blocks that rise in as they scroll into view (hero and closing CTA have their own motion). */
const REVEAL = [
  ".section-head__title > *",
  ".section-head > .lead",
  ".pg-grid > *",
  ".pg-stack > *",
  ".pg-steps > li",
  ".pg-faq details",
  ".pg-col > *",
  ".pg-stage",
  ".pg-tabs",
  "[data-reveal]",
].join(",");

/** Rows inside product mockups slide in one after another, like data arriving. */
const ROWS = ".pg-panel > *, .pg-ui > .pg-kv";

const outside = (el: Element) => !el.closest(".pg-hero, .cta, .footer, .nav, .menu");
const inView = (el: Element) => el.getBoundingClientRect().top < window.innerHeight * 0.92;

/**
 * Scroll motion for every page wrapped in SiteShell, mirroring the landing page:
 * staggered reveals, mockup rows, growing bars, drawing connectors and popping sequences.
 * Runs only when the visitor allows motion; anything already on screen at load is left alone.
 */
export default function PageMotion() {
  const scope = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    const root = scope.current?.closest(".overflow-x-clip") ?? document.body;
    const mm = gsap.matchMedia();

    mm.add(MQ.motion, () => {
      const pick = (sel: string) => gsap.utils.toArray<HTMLElement>(root.querySelectorAll(sel)).filter(outside);

      // 1. Block reveals — keep only outermost matches so nested blocks don't animate twice.
      const all = pick(REVEAL);
      const blocks = all.filter((el) => !all.some((o) => o !== el && o.contains(el))).filter((el) => !inView(el));
      gsap.set(blocks, { autoAlpha: 0, y: 28 });
      ScrollTrigger.batch(blocks, {
        start: "top 88%",
        once: true,
        onEnter: (batch) => gsap.to(batch, { autoAlpha: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.08, overwrite: true }),
      });

      // 2. Mockup rows.
      const rows = pick(ROWS).filter((el) => !inView(el));
      gsap.set(rows, { autoAlpha: 0, x: -14 });
      ScrollTrigger.batch(rows, {
        start: "top 90%",
        once: true,
        onEnter: (batch) => gsap.to(batch, { autoAlpha: 1, x: 0, duration: 0.55, ease: "power2.out", stagger: 0.07, delay: 0.15, overwrite: true }),
      });

      // 3. Bars and meters grow from their base.
      pick("[data-grow]").forEach((el) => {
        const axis = el.dataset.grow === "y" ? "scaleY" : "scaleX";
        gsap.from(el, {
          [axis]: 0,
          transformOrigin: axis === "scaleY" ? "50% 100%" : "0% 50%",
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 92%", once: true },
        });
      });

      // 4. Dashed connectors draw themselves.
      pick(".pg-dashed, .pg-dashed-v").forEach((el) => {
        const vertical = el.classList.contains("pg-dashed-v");
        gsap.from(el, {
          [vertical ? "scaleY" : "scaleX"]: 0,
          transformOrigin: vertical ? "50% 0%" : "0% 50%",
          duration: 0.9,
          ease: "power2.inOut",
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
        });
      });

      // 5. Sequences (slots, steps, tiles) pop in one by one.
      pick("[data-stagger]").forEach((group) => {
        gsap.from(group.children, {
          scale: 0.6,
          autoAlpha: 0,
          duration: 0.45,
          ease: "back.out(2.2)",
          stagger: Number(group.dataset.stagger) || 0.06,
          scrollTrigger: { trigger: group, start: "top 90%", once: true },
        });
      });

      // Fonts and late images shift layout; re-measure once everything has settled.
      const refresh = () => ScrollTrigger.refresh();
      window.addEventListener("load", refresh);
      return () => window.removeEventListener("load", refresh);
    });
  });

  return <span ref={scope} hidden />;
}
