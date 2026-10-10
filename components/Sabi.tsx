"use client";

import { AnimatePresence, motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { week } from "@/lib/data";
import { Icon } from "./Icon";
import { EASE, SectionHead } from "./motion";

const answer =
  "You sold ₦642,300 across 71 orders this week. Checkout links brought in the most, and Saturday was your busiest day.";

/** Framer Motion sequence: question → typing dots → answer streams in word by word → chart grows. */
export function Sabi() {
  const card = useRef<HTMLDivElement>(null);
  const inView = useInView(card, { once: true, amount: 0.4 });
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const t = reduce
      ? [setTimeout(() => setPhase(3), 0)]
      : [
          setTimeout(() => setPhase(1), 200),
          setTimeout(() => setPhase(2), 900),
          setTimeout(() => setPhase(3), 2300),
        ];
    return () => t.forEach(clearTimeout);
  }, [inView]);

  const words = answer.split(" ");

  return (
    <section className="section section--forest on-dark" id="sabi">
      <span className="sabi__glow" aria-hidden="true" />
      <div className="wrap sabi">
        <div className="sabi__copy">
          <SectionHead
            eyebrow="06 — Sabi, your AI business assistant · Pro"
            title="Now,"
            payoff="understand your business."
            lead="Once sales, orders, customers and products live in one place, Sabi helps you ask better questions about what is happening. Sabi is included with Pro."
          />
          <div className="topics">
            {["Sales", "Top products", "Customers", "What needs attention"].map(
              (t) => (
                <span key={t}>{t}</span>
              ),
            )}
          </div>
        </div>

        <motion.div
          className="assistant"
          ref={card}
          initial={{ opacity: 0, y: 40, rotate: -1.5 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <div className="assistant__inner" aria-live="polite">
            <div className="assistant__head">
              <motion.span
                className="assistant__mark"
                animate={
                  phase === 2 ? { rotate: [0, 180, 360] } : { rotate: 0 }
                }
                transition={
                  phase === 2
                    ? { duration: 1.4, repeat: Infinity, ease: "linear" }
                    : {}
                }
              >
                <Icon name="spark" size={20} />
              </motion.span>
              <div>
                <b>Sabi</b>
                <small>Your AI business assistant</small>
              </div>
            </div>

            <AnimatePresence>
              {phase >= 1 && (
                <motion.span
                  className="q"
                  initial={{ opacity: 0, y: 12, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.4, ease: EASE }}
                >
                  How much did I sell this week?
                </motion.span>
              )}
            </AnimatePresence>

            <AnimatePresence mode="wait">
              {phase === 2 && (
                <motion.div
                  key="typing"
                  className="typing"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                >
                  {[0, 1, 2].map((i) => (
                    <motion.i
                      key={i}
                      animate={{ y: [0, -4, 0] }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        delay: i * 0.12,
                      }}
                    />
                  ))}
                </motion.div>
              )}
              {phase === 3 && (
                <motion.div
                  key="answer"
                  className="a"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: EASE }}
                >
                  <p>
                    {words.map((w, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, filter: "blur(4px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        transition={{ delay: i * 0.035, duration: 0.3 }}
                        style={{
                          fontWeight: /₦|71|orders/.test(w) ? 600 : undefined,
                        }}
                      >
                        {w}{" "}
                      </motion.span>
                    ))}
                  </p>
                  <div className="week">
                    {week.map(([h, l], i) => (
                      <div key={i}>
                        <motion.i
                          style={{
                            height: `${h}%`,
                            background: i === 5 ? "var(--forest)" : "#C5DDD7",
                          }}
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          transition={{
                            delay: 0.6 + i * 0.06,
                            duration: 0.7,
                            ease: EASE,
                          }}
                        />
                        <span className="mono">{l}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div
              className="suggest"
              initial="hidden"
              animate={phase === 3 ? "show" : "hidden"}
              variants={{
                hidden: {},
                show: {
                  transition: { staggerChildren: 0.08, delayChildren: 1 },
                },
              }}
            >
              {["Top products", "Best customers", "What needs attention?"].map(
                (s) => (
                  <motion.button
                    type="button"
                    key={s}
                    variants={{
                      hidden: { opacity: 0, y: 8 },
                      show: { opacity: 1, y: 0 },
                    }}
                    whileHover={{ y: -2, backgroundColor: "#7FD8C6" }}
                  >
                    {s}
                  </motion.button>
                ),
              )}
            </motion.div>

            <label className="ask">
              <span className="sr-only">Ask Sabi</span>
              <input
                type="text"
                disabled
                placeholder="Ask about sales, products, customers…"
              />
              <motion.button
                type="button"
                aria-label="Send"
                disabled
                whileTap={{ scale: 0.9 }}
              >
                <Icon name="up" size={16} weight={2.4} />
              </motion.button>
            </label>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
