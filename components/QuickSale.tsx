"use client";

import { useRef } from "react";
import { gsap, MQ, useGSAP } from "@/lib/gsap";
import { Icon } from "./Icon";
import { Button, SectionHead } from "./motion";

const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "00", "0", "⌫"];
const typed = ["1", "2", "5", "00"];
const amounts = ["₦1", "₦12", "₦125", "₦12,500"];

/**
 * GSAP timeline: when the stage scrolls in, the keypad "types" ₦12,500,
 * Transfer gets selected, Continue is pressed and the receipt drops in.
 */
export function QuickSale() {
  const scope = useRef<HTMLDivElement>(null);
  const amount = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MQ.motion, () => {
        const q = gsap.utils.selector(scope);
        const tilt = window.matchMedia("(max-width: 760px)").matches ? 0 : 3;
        gsap.set(q(".receipt"), { y: 80, opacity: 0, rotate: -tilt });
        if (amount.current) amount.current.textContent = "₦0";

        const tl = gsap.timeline({
          scrollTrigger: { trigger: scope.current, start: "top 65%" },
          defaults: { ease: "power3.out" },
        });

        tl.from(q(".pos"), { y: 40, opacity: 0, duration: 0.8 });

        typed.forEach((k, i) => {
          const key = q(`[data-key="${k}"]`);
          tl.to(key, { scale: 0.9, backgroundColor: "#7FD8C6", duration: 0.12 }, `+=${i === 0 ? 0.2 : 0.18}`)
            .call(() => {
              if (amount.current) amount.current.textContent = amounts[i];
            })
            .fromTo(q(".pos__amount b"), { scale: 1.06 }, { scale: 1, duration: 0.3 }, "<")
            .to(key, { scale: 1, backgroundColor: "#EEF4F0", duration: 0.25 });
        });

        tl.call(() => q(".method").forEach((m) => m.classList.toggle("is-active", m.textContent === "Transfer")), [], "+=0.2")
          .fromTo(q(".method--transfer"), { scale: 0.9 }, { scale: 1, duration: 0.4, ease: "back.out(3)" })
          .to(q(".pos__continue"), { scale: 0.96, duration: 0.12 }, "+=0.25")
          .to(q(".pos__continue"), { scale: 1, duration: 0.3, ease: "back.out(3)" })
          .to(q(".receipt"), { y: 0, opacity: 1, rotate: tilt, duration: 0.9, ease: "back.out(1.4)" }, "-=0.1")
          .from(q(".receipt .check"), { scale: 0, duration: 0.5, ease: "back.out(3)" }, "-=0.5");
      });
    },
    { scope },
  );

  return (
    <section className="section section--white">
      <div className="wrap qs">
        <div className="qs__copy">
          <SectionHead
            eyebrow="02 — Quick Sale"
            title="From conversation to"
            payoff="completed sale."
            lead="Record an in-person sale or a quick amount, choose how the customer paid, and keep the receipt with the order."
          />
          <div className="steps">
            {[
              ["Select items or enter an amount", "No catalogue needed to start."],
              ["Choose how they paid", "Cash, transfer or POS."],
              ["Share the receipt", "Ready the moment the sale is complete."],
            ].map(([t, s], i) => (
              <div className="step" key={t}>
                <span className="mono">0{i + 1}</span>
                <div>
                  <b>{t}</b>
                  <small>{s}</small>
                </div>
              </div>
            ))}
          </div>
          <Button href="/quick-sale" variant="forest" arrow style={{ alignSelf: "flex-start" }}>
            Start selling
          </Button>
        </div>

        <div className="qs__stage" ref={scope}>
          <span className="qs__ring" aria-hidden="true" />
          <div className="pos" aria-label="Quick Sale terminal preview">
            <div className="pos__head">
              Quick Sale <small className="mono">Counter</small>
            </div>
            <div className="toggle">
              <span>Select items</span>
              <span className="is-active">Quick amount</span>
            </div>
            <div className="pos__amount">
              <small>Amount</small>
              <b ref={amount}>₦12,500</b>
            </div>
            <div className="keypad">
              {keys.map((k) => (
                <span className="key" data-key={k} key={k}>
                  {k}
                </span>
              ))}
            </div>
            <div className="methods">
              <span className="method">Cash</span>
              <span className="method method--transfer is-active">Transfer</span>
              <span className="method">POS</span>
            </div>
            <span className="pos__continue">Continue</span>
          </div>

          <div className="receipt">
            <div className="receipt__ok">
              <span className="check">
                <Icon name="check" size={14} weight={3} style={{ color: "#fff" }} />
              </span>
              <span style={{ display: "flex", flexDirection: "column" }}>
                Sale recorded
              </span>
            </div>
            <div className="receipt__id mono">Receipt · QS-0187</div>
            <div className="receipt__lines">
              <div>
                <span>Quick amount</span>
                <span>₦12,500</span>
              </div>
              <div>
                <span>Paid by</span>
                <span>Transfer</span>
              </div>
            </div>
            <div className="receipt__total">
              <span>Total</span>
              <span>₦12,500</span>
            </div>
            <span className="receipt__share">
              <Icon name="share" size={14} />
              Share receipt
            </span>
          </div>
        </div>

        <Button href="/quick-sale" variant="forest" className="qs-mobile-cta" style={{ width: "100%", display: "none" }}>
          Start selling
        </Button>
      </div>
    </section>
  );
}
