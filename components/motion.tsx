"use client";

import { animate, motion, useInView, type Variants } from "motion/react";
import { useEffect, useRef, type ComponentProps, type ReactNode, type Ref } from "react";
import { Icon } from "./Icon";

export const EASE = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

export const stagger = (gap = 0.08, delay = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: gap, delayChildren: delay } },
});

/** Fades + lifts its children into view once. */
export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "span" | "li";
}) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      variants={fadeUp}
      transition={{ delay }}
    >
      {children}
    </Tag>
  );
}

/** Container that staggers any `fadeUp` children as it enters the viewport. */
export function Stagger({
  children,
  className,
  gap = 0.08,
  delay = 0,
  ref,
}: {
  children: ReactNode;
  className?: string;
  gap?: number;
  delay?: number;
  ref?: Ref<HTMLDivElement>;
}) {
  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      variants={stagger(gap, delay)}
    >
      {children}
    </motion.div>
  );
}

/** Section header: eyebrow, headline with serif payoff, optional lead. */
export function SectionHead({
  eyebrow,
  title,
  payoff,
  lead,
  center,
  breakLine,
}: {
  eyebrow: string;
  title: string;
  payoff: string;
  lead?: string;
  center?: boolean;
  breakLine?: boolean;
}) {
  return (
    <Stagger className={`section-head${center ? " section-head--center" : ""}`}>
      <div className="section-head__title">
        <motion.span variants={fadeUp} className="eyebrow">
          {eyebrow}
        </motion.span>
        <motion.h2 variants={fadeUp} className="h2">
          {title}
          {breakLine ? <br /> : " "}
          <span className="serif">{payoff}</span>
        </motion.h2>
      </div>
      {lead && (
        <motion.p variants={fadeUp} className="lead">
          {lead}
        </motion.p>
      )}
    </Stagger>
  );
}

type ButtonProps = ComponentProps<typeof motion.a> & {
  variant?: "lime" | "forest" | "ghost" | "ghost-dark" | "link";
  size?: "lg";
  arrow?: boolean;
  icon?: ReactNode;
};

/** Pill button with a springy press and an arrow that nudges on hover. */
export function Button({ variant = "lime", size, arrow, icon, children, className, ...rest }: ButtonProps) {
  return (
    <motion.a
      className={`btn btn--${variant}${size ? ` btn--${size}` : ""}${className ? ` ${className}` : ""}`}
      whileHover="hover"
      whileTap={{ scale: 0.97 }}
      initial="rest"
      animate="rest"
      variants={{ rest: { scale: 1 }, hover: { scale: 1.02 } }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      {...rest}
    >
      {icon}
      {children as ReactNode}
      {arrow && (
        <motion.span className="btn__arrow" variants={{ rest: { x: 0 }, hover: { x: 4 } }}>
          <Icon name="arrow" size={16} weight={2.4} />
        </motion.span>
      )}
    </motion.a>
  );
}

const naira = (n: number) => "₦" + Math.round(n).toLocaleString("en-NG");

/** Counts up to `to` the first time it scrolls into view. */
export function CountUp({
  to,
  format = naira,
  duration = 1.6,
  delay = 0,
  className,
}: {
  to: number;
  format?: (n: number) => string;
  duration?: number;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const node = ref.current;
    const controls = animate(0, to, {
      duration,
      delay,
      ease: EASE,
      onUpdate: (v) => (node.textContent = format(v)),
    });
    return () => controls.stop();
  }, [inView, to, duration, delay, format]);

  return (
    <span ref={ref} className={className}>
      {format(0)}
    </span>
  );
}
