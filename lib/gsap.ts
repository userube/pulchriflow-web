"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Shared breakpoints so GSAP scenes match the CSS layout switches.
export const MQ = {
  desktop: "(min-width: 1081px) and (prefers-reduced-motion: no-preference)",
  compact: "(max-width: 1080px) and (prefers-reduced-motion: no-preference)",
  motion: "(prefers-reduced-motion: no-preference)",
};

export { gsap, ScrollTrigger, useGSAP };
