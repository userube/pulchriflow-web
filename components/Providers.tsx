"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/** Framer Motion honours the visitor's reduced-motion setting site-wide. */
export function Providers({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
