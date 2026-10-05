"use client";

import { useRef } from "react";
import { gsap, MQ, useGSAP } from "@/lib/gsap";
import { Icon, type IconName } from "./Icon";
import { channels } from "@/lib/data";

const icons: IconName[] = ["bag", "chat", "insta", "link", "store"];

/** Infinite GSAP marquee of selling channels; slows down on hover. */
export function Channels() {
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MQ.motion, () => {
        const tween = gsap.to(track.current, {
          xPercent: -50,
          duration: 28,
          ease: "none",
          repeat: -1,
        });
        const el = track.current!;
        const slow = () => gsap.to(tween, { timeScale: 0.2, duration: 0.6 });
        const fast = () => gsap.to(tween, { timeScale: 1, duration: 0.6 });
        el.addEventListener("mouseenter", slow);
        el.addEventListener("mouseleave", fast);
        return () => {
          el.removeEventListener("mouseenter", slow);
          el.removeEventListener("mouseleave", fast);
        };
      });
    },
    { scope: track },
  );

  const items = [...channels, ...channels, ...channels, ...channels];

  return (
    <section className="channels" aria-label="Selling channels">
      <span className="channels__label mono">However the sale starts</span>
      <div className="marquee">
        <div className="marquee__track" ref={track}>
          {items.map((c, i) => (
            <span
              className="chip"
              key={i}
              aria-hidden={i >= channels.length || undefined}
            >
              <Icon
                name={icons[i % icons.length]}
                style={{ color: "#106B5F" }}
              />
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
