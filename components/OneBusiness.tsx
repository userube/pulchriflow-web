"use client";

import { useRef, type CSSProperties } from "react";
import { ledger } from "@/lib/data";
import { gsap, MQ, useGSAP } from "@/lib/gsap";
import { Icon, type IconName } from "./Icon";
import { CountUp, SectionHead } from "./motion";

const sources: { label: string; name: string; icon: IconName }[] = [
  { label: "At the counter", name: "Quick Sale", icon: "bag" },
  { label: "From a link", name: "Checkout", icon: "link" },
  { label: "From your store", name: "Storefront", icon: "store" },
];

/** GSAP: dashed connectors draw from each source into the ledger as you scroll, then rows land. */
export function OneBusiness() {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(scope);
      const mm = gsap.matchMedia();
      mm.add(MQ.motion, () => {
        const paths = q<SVGPathElement>(".draw");
        gsap.set(paths, { strokeDasharray: 1, strokeDashoffset: 1 });

        const tl = gsap.timeline({
          scrollTrigger: { trigger: scope.current, start: "top 70%", end: "center 45%", scrub: 0.6 },
        });
        tl.from(q(".source"), { x: -40, opacity: 0, stagger: 0.15, duration: 0.5 })
          .to(paths, { strokeDashoffset: 0, stagger: 0.12, duration: 1, ease: "none" }, 0.3)
          .from(q(".hub"), { scale: 0, duration: 0.3, ease: "back.out(3)", transformOrigin: "50% 50%" })
          .from(q(".ledger"), { x: 40, opacity: 0, duration: 0.5 }, "<")
          .from(q(".ledger__row"), { y: 16, opacity: 0, stagger: 0.12, duration: 0.4 });
      });
    },
    { scope },
  );

  return (
    <section className="section section--white">
      <div className="wrap">
        <SectionHead
          eyebrow="05 — One business"
          title="Different ways to sell."
          payoff="One business underneath."
          breakLine
          lead="Counter sales, payment links and storefront orders all come back to the same customers, orders and business record."
        />

        <div className="merge" ref={scope}>
          <div className="sources">
            {sources.map((s) => (
              <div className="source" key={s.name}>
                <span className="source__icon">
                  <Icon name={s.icon} size={20} />
                </span>
                <div>
                  <small className="mono">{s.label}</small>
                  <b>{s.name}</b>
                </div>
              </div>
            ))}
          </div>

          <div className="connector connector--h" aria-hidden="true">
            <svg viewBox="0 0 140 280" preserveAspectRatio="none">
              <path className="draw" pathLength={1} d="M0 46 C70 46 70 140 140 140" stroke="#8DB8AF" strokeWidth="1.5" fill="none" vectorEffect="non-scaling-stroke" />
              <path className="draw" pathLength={1} d="M0 140 L140 140" stroke="#8DB8AF" strokeWidth="1.5" fill="none" vectorEffect="non-scaling-stroke" />
              <path className="draw" pathLength={1} d="M0 234 C70 234 70 140 140 140" stroke="#8DB8AF" strokeWidth="1.5" fill="none" vectorEffect="non-scaling-stroke" />
            </svg>
            <span className="hub" style={hubStyle({ right: -6, top: "50%", marginTop: -11 })} />
          </div>

          <div className="connector connector--v" aria-hidden="true">
            <svg viewBox="0 0 300 56" preserveAspectRatio="none">
              <path className="draw" pathLength={1} d="M50 0 C50 28 150 28 150 56" stroke="#8DB8AF" strokeWidth="1.5" fill="none" vectorEffect="non-scaling-stroke" />
              <path className="draw" pathLength={1} d="M150 0 L150 56" stroke="#8DB8AF" strokeWidth="1.5" fill="none" vectorEffect="non-scaling-stroke" />
              <path className="draw" pathLength={1} d="M250 0 C250 28 150 28 150 56" stroke="#8DB8AF" strokeWidth="1.5" fill="none" vectorEffect="non-scaling-stroke" />
            </svg>
            <span className="hub" style={hubStyle({ left: "50%", bottom: -6, marginLeft: -11 })} />
          </div>

          <div className="ledger">
            <div className="ledger__head">
              <div>
                <small>Today&apos;s business</small>
                <span className="ledger__total">
                  <CountUp to={184500} /> <em>· 23 orders</em>
                </span>
              </div>
              <span className="ledger__btn">
                View orders
              </span>
            </div>
            <div>
              <div className="ledger__cols mono">
                <span>Customer</span>
                <span>Started at</span>
                <span>Amount</span>
              </div>
              {ledger.map((r) => (
                <div className="ledger__row" key={r.who}>
                  <span style={{ fontWeight: 500 }}>{r.who}</span>
                  <span>
                    <span className="ch-tag" style={{ background: r.bg, color: r.fg }}>
                      {r.ch}
                    </span>
                  </span>
                  <span>{r.amt}</span>
                </div>
              ))}
            </div>
            <span className="ledger__foot">One business view, whichever way the sale started.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function hubStyle(pos: CSSProperties): CSSProperties {
  return {
    position: "absolute",
    width: 22,
    height: 22,
    borderRadius: "50%",
    background: "var(--lime)",
    border: "4px solid #fff",
    boxShadow: "0 0 0 1px #8DB8AF",
    ...pos,
  };
}
