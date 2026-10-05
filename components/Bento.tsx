"use client";

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useRef, useState } from "react";
import { EASE, SectionHead, Stagger, fadeUp } from "./motion";

const hover = { y: -6, transition: { type: "spring" as const, stiffness: 300, damping: 20 } };

function Grow({ width, color, delay = 0 }: { width: string; color: string; delay?: number }) {
  return (
    <motion.i
      style={{ width, background: color }}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.1, delay: 0.3 + delay, ease: EASE }}
    />
  );
}

export function Bento() {
  const rail = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);
  const { scrollXProgress } = useScroll({ container: rail });
  useMotionValueEvent(scrollXProgress, "change", (v) => setPage(Math.round(v * 4)));

  return (
    <section className="section" id="how">
      <div className="wrap">
        <SectionHead
          eyebrow="01 — The whole business"
          title="Keep your business"
          payoff="in flow."
          lead="Sales, orders, customers, products and payments — recorded once, connected everywhere, ready when you need them."
        />

        <div className="bento-wrap">
          <Stagger className="bento" gap={0.1} ref={rail}>
            <motion.article variants={fadeUp} whileHover={hover} className="card card--forest card--wide">
              <div className="card__col">
                <div className="card__title">
                  <span className="eyebrow">Sales</span>
                  <h3>Record every sale, however it happens.</h3>
                </div>
                <p>Counter, chat or storefront — every sale lands in the same ledger with its receipt attached.</p>
              </div>
              <Stagger className="tx-list" gap={0.12} delay={0.3}>
                <motion.div variants={fadeUp} className="tx">
                  <div>
                    <b>Black tote × 2</b>
                    <small>Checkout link · Transfer</small>
                  </div>
                  <strong>₦56,000</strong>
                </motion.div>
                <motion.div variants={fadeUp} className="tx">
                  <div>
                    <b>Quick amount</b>
                    <small>Counter · Cash</small>
                  </div>
                  <strong>₦4,000</strong>
                </motion.div>
                <motion.div variants={fadeUp} className="tx tx--lime">
                  <div>
                    <b>Linen set</b>
                    <small>Storefront · Card</small>
                  </div>
                  <strong>₦31,200</strong>
                </motion.div>
              </Stagger>
            </motion.article>

            <motion.article variants={fadeUp} whileHover={hover} className="card">
              <div className="card__title">
                <span className="eyebrow">Orders</span>
                <h3>See what needs attention.</h3>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <div className="status" style={{ background: "var(--amber-bg)" }}>
                  <span>
                    <motion.i
                      style={{ background: "var(--amber)" }}
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 1.6, repeat: Infinity }}
                    />
                    To confirm
                  </span>
                  <b>4</b>
                </div>
                <div className="status">
                  <span>
                    <i style={{ background: "var(--blue)" }} />
                    Packing
                  </span>
                  <b>6</b>
                </div>
                <div className="status">
                  <span>
                    <i style={{ background: "var(--brand)" }} />
                    Completed
                  </span>
                  <b>18</b>
                </div>
              </div>
            </motion.article>

            <motion.article variants={fadeUp} whileHover={hover} className="card">
              <div className="card__title">
                <span className="eyebrow">Customers</span>
                <h3>Remembered. Ready for follow-up.</h3>
              </div>
              <div className="customer">
                <span className="avatar">TO</span>
                <div>
                  <b>Tolu O.</b>
                  <small>6 orders · last 3 weeks ago</small>
                </div>
                <span className="tag-dark">Follow up</span>
              </div>
            </motion.article>

            <motion.article variants={fadeUp} whileHover={hover} className="card">
              <div className="card__title">
                <span className="eyebrow">Products</span>
                <h3>Know what&apos;s selling and what&apos;s low.</h3>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <div className="stock">
                  <div>
                    <span>Black tote</span>
                    <span style={{ color: "#D79B26", fontWeight: 600 }}>2 left</span>
                  </div>
                  <div className="meter">
                    <Grow width="12%" color="var(--amber)" />
                  </div>
                </div>
                <div className="stock">
                  <div>
                    <span>Linen set</span>
                    <span style={{ color: "var(--muted)" }}>14 left</span>
                  </div>
                  <div className="meter">
                    <Grow width="58%" color="var(--brand)" delay={0.15} />
                  </div>
                </div>
              </div>
            </motion.article>

            <motion.article variants={fadeUp} whileHover={hover} className="card card--lime">
              <div className="card__title">
                <span className="eyebrow">Payments</span>
                <h3>Get paid the way customers prefer.</h3>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <div className="split">
                  <Grow width="42%" color="var(--forest)" />
                  <Grow width="28%" color="var(--brand)" delay={0.1} />
                  <Grow width="18%" color="#3F9C8C" delay={0.2} />
                  <Grow width="12%" color="#fff" delay={0.3} />
                </div>
                <div className="split-legend">
                  <span>Transfer</span>
                  <span>Cash</span>
                  <span>Card</span>
                  <span>Link</span>
                </div>
              </div>
            </motion.article>
          </Stagger>
        </div>

        <div className="dots-nav" aria-hidden="true">
          {[0, 1, 2, 3, 4].map((i) => (
            <i key={i} className={page === i ? "is-active" : undefined} />
          ))}
        </div>
      </div>
    </section>
  );
}
