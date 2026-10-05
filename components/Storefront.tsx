"use client";

import { AnimatePresence, motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { products } from "@/lib/data";
import { Icon } from "./Icon";
import { Button, EASE, SectionHead, Stagger, fadeUp } from "./motion";

export function Storefront() {
  const stage = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: stage, offset: ["start end", "center center"] });
  const p = useSpring(scrollYProgress, { stiffness: 110, damping: 24 });
  const y = useTransform(p, [0, 1], [160, 0]);
  const ringScale = useTransform(p, [0, 1], [0.7, 1]);
  const [cart, setCart] = useState(2);

  return (
    <section className="section">
      <div className="wrap">
        <SectionHead
          center
          eyebrow="04 — Online store"
          title="Give your business a place"
          payoff="to be found."
          lead="Share a storefront when customers need more than a message: products, details, a real order flow, and a path to pay."
        />

        <div className="store" ref={stage}>
          <motion.span className="store__ring" style={{ scale: ringScale }} aria-hidden="true" />
          <motion.div className="browser" style={{ y }}>
            <div className="browser__bar">
              <div className="dots">
                <span />
                <span />
                <span />
              </div>
              <span className="browser__url mono">adascloset.pulchriflow.com</span>
            </div>
            <div className="shop__head">
              <span className="serif shop__name">Ada&apos;s Closet</span>
              <div className="shop__cats">
                <span>All</span>
                <span>Bags</span>
                <span>Sets</span>
                <span>Accessories</span>
              </div>
              <button className="shop__cart" type="button">
                <Icon name="tote" size={14} />
                Order ·
                <span style={{ display: "inline-block", minWidth: 10, overflow: "hidden", height: 18 }}>
                  <AnimatePresence mode="popLayout" initial={false}>
                    <motion.span
                      key={cart}
                      style={{ display: "inline-block" }}
                      initial={{ y: 14, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -14, opacity: 0 }}
                      transition={{ duration: 0.3, ease: EASE }}
                    >
                      {cart}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </button>
            </div>
            <div className="shop__body">
              <Stagger className="shop__grid" gap={0.07} delay={0.2}>
                {products.map((pr) => (
                  <motion.button
                    type="button"
                    key={pr.name}
                    className="product"
                    variants={fadeUp}
                    whileHover="hover"
                    onClick={() => setCart((c) => c + 1)}
                    aria-label={`Add ${pr.name} to order`}
                  >
                    <span className="product__img" style={{ background: pr.bg }}>
                      <motion.span variants={{ hover: { scale: 1.12, rotate: -4 } }} transition={{ type: "spring", stiffness: 260, damping: 18 }}>
                        <Icon name="tote" size={56} weight={1.1} style={{ color: pr.ink }} />
                      </motion.span>
                      {pr.tag && <span className="product__tag">{pr.tag}</span>}
                      <motion.span
                        className="product__add"
                        initial={{ scale: 0.6, opacity: 0 }}
                        variants={{ hover: { scale: 1, opacity: 1 } }}
                        whileTap={{ scale: 0.85 }}
                      >
                        <Icon name="plus" size={14} weight={2.6} />
                      </motion.span>
                    </span>
                    <span className="product__meta">
                      <span style={{ fontWeight: 500 }}>{pr.name}</span>
                      <span>{pr.price}</span>
                    </span>
                  </motion.button>
                ))}
              </Stagger>

              <aside className="order">
                <b>Your order</b>
                <div className="order__line">
                  <i style={{ background: "#06241F" }} />
                  <div>
                    <b>Black tote</b>
                    <small>Qty 1</small>
                  </div>
                  <b>₦28,000</b>
                </div>
                <div className="order__line">
                  <i style={{ background: "#CFE6E0" }} />
                  <div>
                    <b>Linen set</b>
                    <small>Qty 1</small>
                  </div>
                  <b>₦31,200</b>
                </div>
                <div className="order__total">
                  <span>Total</span>
                  <span>₦59,200</span>
                </div>
                <small style={{ fontSize: 12, color: "var(--muted-2)" }}>Pay with</small>
                <div className="order__pay">
                  <span>Transfer</span>
                  <span>Card</span>
                </div>
                <motion.span className="order__cta" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                  Place order
                </motion.span>
              </aside>
            </div>
          </motion.div>
        </div>

        <Stagger className="benefits">
          {[
            ["Products and details", "Photos, prices and variants customers can browse on their own."],
            ["A real order flow", "Every order arrives in your dashboard, not your DMs."],
            ["A path to pay", "Customers check out and pay without the back-and-forth."],
          ].map(([t, d]) => (
            <motion.div variants={fadeUp} className="benefit" key={t}>
              <b>{t}</b>
              <span>{d}</span>
            </motion.div>
          ))}
          <motion.div variants={fadeUp}>
            <Button href="/online-store" variant="forest">
              Create your storefront
            </Button>
          </motion.div>
        </Stagger>
      </div>
    </section>
  );
}
