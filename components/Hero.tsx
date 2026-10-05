"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef, type CSSProperties } from "react";
import { activity, hourlySales } from "@/lib/data";
import { appLink } from "@/lib/config";
import { preservedParams } from "@/lib/navigation";
import { Icon, type IconName } from "./Icon";
import { Button, CountUp, EASE } from "./motion";

const lines = [
  { text: "Sell anywhere." },
  { text: "Run it all from" },
  { text: "PulchriFlow.", serif: true },
];

function FloatCard({
  className,
  style,
  icon,
  iconBg,
  iconColor,
  label,
  title,
  note,
  delay,
  bob,
}: {
  className: string;
  style: CSSProperties;
  icon: IconName;
  iconBg: string;
  iconColor: string;
  label: string;
  title: string;
  note: string;
  delay: number;
  bob: number;
}) {
  return (
    <motion.div
      className={`float-slot ${className}`}
      style={style}
      initial={{ opacity: 0, scale: 0.85, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 0.7, ease: EASE }}
    >
      <motion.div
        className={`float${className.includes("float--dark") ? " float--dark" : ""}`}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: bob, repeat: Infinity, ease: "easeInOut", delay: delay + 0.7 }}
      >
        <span className="float__icon" style={{ background: iconBg, color: iconColor }}>
          <Icon name={icon} size={20} weight={2.2} />
        </span>
        <span className="float__text">
          <small>{label}</small>
          <b>{title}</b>
          <em>{note}</em>
        </span>
      </motion.div>
    </motion.div>
  );
}

export function Hero() {
  const stage = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: stage, offset: ["start end", "start 0.2"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.4 });
  const rotateX = useTransform(smooth, [0, 1], [22, 0]);
  const scale = useTransform(smooth, [0, 1], [0.9, 1]);
  const lift = useTransform(smooth, [0, 1], [60, 0]);
  const floatsY = useTransform(smooth, [0, 1], [80, 0]);

  return (
    <section className="hero">
      <div className="hero__rings" aria-hidden="true">
        {[640, 1040, 1480, 1960].map((d, i) => (
          <motion.span
            key={d}
            className="orbit"
            style={{ width: d, height: d, opacity: 1 - i * 0.2 }}
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 - i * 0.2 }}
            transition={{ duration: 1.6, delay: 0.1 * i, ease: EASE }}
          />
        ))}
        <span className="hero__glow" />
      </div>

      <div className="wrap hero__copy">
        <motion.div
          className="badge"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <span className="badge__dot" />
          Commerce that keeps up
        </motion.div>

        <h1 className="hero__title">
          {lines.map((l, i) => (
            <span className="line" key={l.text}>
              <motion.span
                className={l.serif ? "serif" : undefined}
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1, delay: 0.15 + i * 0.12, ease: EASE }}
              >
                {l.text}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          className="hero__sub"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: EASE }}
        >
          Make sales, take orders, get paid and keep track of your business — whether you sell in person, online or
          through social media.
        </motion.p>

        <motion.div
          className="hero__ctas"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: EASE }}
        >
          <Button href={appLink("/register")} data-preserve-params={preservedParams} size="lg" arrow>
            Start free
          </Button>
          <Button href="#how" variant="ghost-dark" size="lg" icon={<Icon name="play" />}>
            See how it works
          </Button>
          <Button href={appLink("/shop/demo")} variant="link" size="lg">
            Demo store
          </Button>
        </motion.div>

        <motion.div
          className="hero__meta mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <span>Free to start</span>
          <i>/</i>
          <span>No card required</span>
          <i>/</i>
          <span>Set up in minutes</span>
        </motion.div>
      </div>

      <div className="wrap hero__stage" ref={stage}>
        <motion.div className="hero__floats" style={{ y: floatsY }}>
          <FloatCard
            className="float--a"
            style={{ left: -8, top: 150, width: 236 }}
            icon="bag"
            iconBg="#D5F0E8"
            iconColor="#106B5F"
            label="At the counter"
            title="Sale recorded · ₦12,500"
            note="Receipt ready"
            delay={1.1}
            bob={5}
          />
          <FloatCard
            className="float--b"
            style={{ right: -8, top: 64, width: 250 }}
            icon="chat"
            iconBg="#E5F3EF"
            iconColor="#106B5F"
            label="From a chat"
            title="Checkout paid · ₦56,000"
            note="Order recorded"
            delay={1.25}
            bob={6}
          />
          <FloatCard
            className="float--c float--dark"
            style={{ right: 40, top: 360, width: 232 }}
            icon="store"
            iconBg="var(--lime)"
            iconColor="#09221D"
            label="From your store"
            title="New order #1042"
            note="Customer added"
            delay={1.4}
            bob={5.5}
          />
        </motion.div>

        <motion.div
          className="window"
          style={{ rotateX, scale, y: lift }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.6 }}
        >
          <div className="window__body">
            <div className="window__bar">
              <div className="dots">
                <span />
                <span />
                <span />
              </div>
              <div className="window__url mono">app.pulchriflow.com</div>
              <span className="pill-dark">
                <Icon name="plus" size={12} weight={3} />
                New sale
              </span>
            </div>

            <div className="dash">
              <aside className="dash__side">
                <div className="dash__store mono">Ada&apos;s Closet</div>
                <span className="dash__nav is-active">
                  <Icon name="grid" style={{ color: "#106B5F" }} />
                  Overview
                </span>
                <span className="dash__nav">
                  <Icon name="plus" />
                  New sale
                </span>
                <span className="dash__nav">
                  <Icon name="list" />
                  Orders <span className="dash__count">4</span>
                </span>
                <span className="dash__nav">
                  <Icon name="box" />
                  Products
                </span>
                <span className="dash__nav">
                  <Icon name="users" />
                  Customers
                </span>
                <span className="dash__nav">
                  <Icon name="store" />
                  Storefront
                </span>
                <div className="dash__sabi">
                  <span style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--on-dark)", fontWeight: 600, fontSize: 13 }}>
                    <Icon name="spark" size={14} style={{ color: "var(--lime)" }} />
                    Ask Sabi
                  </span>
                  <span>“What sold best today?”</span>
                </div>
              </aside>

              <div className="dash__main">
                <div className="dash__head">
                  <div>
                    <div className="dash__label">Today&apos;s sales</div>
                    <CountUp to={184500} delay={1} className="dash__big" />
                  </div>
                  <div className="seg">
                    <span className="is-active">Today</span>
                    <span>Week</span>
                    <span>Month</span>
                  </div>
                </div>

                <div className="kpis">
                  <div className="kpi">
                    <small>Orders</small>
                    <b>23</b>
                    <em>4 need attention</em>
                  </div>
                  <div className="kpi">
                    <small>Customers</small>
                    <b>18</b>
                    <em>5 new today</em>
                  </div>
                  <div className="kpi">
                    <small>Awaiting payment</small>
                    <b>₦31,200</b>
                    <em className="warn">2 checkout links</em>
                  </div>
                </div>

                <div className="dash__row">
                  <div className="panel panel--chart" style={{ flex: "3 1 300px" }}>
                    <div className="panel__head">
                      <b>Sales by hour</b>
                      <span className="legend">
                        <span>
                          <i style={{ background: "#106B5F" }} />
                          Counter
                        </span>
                        <span>
                          <i style={{ background: "var(--lime)" }} />
                          Online
                        </span>
                      </span>
                    </div>
                    <div className="bars">
                      {hourlySales.map(([c, o], i) => (
                        <motion.div
                          key={i}
                          className="bar"
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          transition={{ delay: 1.1 + i * 0.05, duration: 0.8, ease: EASE }}
                        >
                          <i style={{ height: `${o}%`, background: "var(--lime)" }} />
                          <i style={{ height: `${c}%`, background: "#106B5F" }} />
                        </motion.div>
                      ))}
                    </div>
                    <div className="axis mono">
                      <span>9am</span>
                      <span>12pm</span>
                      <span>3pm</span>
                      <span>6pm</span>
                      <span>8pm</span>
                    </div>
                  </div>

                  <div className="panel panel--activity" style={{ flex: "2 1 240px", gap: 4 }}>
                    <div className="panel__head" style={{ paddingBottom: 8 }}>
                      <b>Recent activity</b>
                      <span style={{ color: "#106B5F" }}>View all</span>
                    </div>
                    {activity.map((a, i) => (
                      <motion.div
                        key={a.title}
                        className="activity"
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.3 + i * 0.12, duration: 0.6, ease: EASE }}
                      >
                        <span className="activity__init" style={{ background: a.tint }}>
                          {a.init}
                        </span>
                        <span className="activity__who">
                          <b>{a.title}</b>
                          <small>{a.via}</small>
                        </span>
                        <span className="activity__amt">
                          {a.amt}
                          <small style={{ color: a.color }}>{a.status}</small>
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
