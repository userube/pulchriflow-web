"use client";

import { useRef } from "react";
import { gsap, MQ, useGSAP } from "@/lib/gsap";
import { Icon } from "./Icon";
import { Button } from "./motion";

/**
 * GSAP ScrollTrigger scene.
 * Desktop: the section pins and scroll scrubs chat → checkout → paid.
 * Tablet/phone: a vertical timeline where each step reveals as it enters.
 */
export function SocialSelling() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(scope);
      const mm = gsap.matchMedia();

      mm.add(MQ.desktop, () => {
        const tl = gsap.timeline({
          defaults: { ease: "power2.out" },
          scrollTrigger: {
            trigger: scope.current,
            start: "top top",
            end: "+=1800",
            scrub: 0.8,
            pin: true,
            anticipatePin: 1,
          },
        });

        gsap.set(q(".flow__step--2, .flow__step--3"), { opacity: 0.25, y: 24 });
        gsap.set(q(".flow__arrow"), { opacity: 0, x: -10 });

        gsap.from(q(".social__head > *"), {
          y: 30,
          opacity: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: scope.current, start: "top 75%" },
        });

        tl.to(q(".social__progress i"), { scaleX: 0.33, duration: 1.4, ease: "none" }, 0)
          .from(q(".bubble"), { y: 16, opacity: 0, scale: 0.92, stagger: 0.35, duration: 0.4, transformOrigin: "50% 100%" }, 0)
          .to(q(".flow__arrow--1"), { opacity: 1, x: 0, duration: 0.3 })
          .to(q(".flow__step--2"), { opacity: 1, y: 0, duration: 0.6 })
          .to(q(".social__progress i"), { scaleX: 0.66, duration: 1.2, ease: "none" }, "<")
          .from(q(".qty b"), { textContent: 1, snap: { textContent: 1 }, duration: 0.4 }, "<0.2")
          .from(q(".checkout__sum div:last-child span:last-child"), { opacity: 0, y: 8, duration: 0.3 })
          .to(q(".checkout__cta"), { scale: 0.95, duration: 0.15 })
          .to(q(".checkout__cta"), { scale: 1, duration: 0.25 })
          .to(q(".flow__arrow--2"), { opacity: 1, x: 0, duration: 0.3 })
          .to(q(".flow__step--3"), { opacity: 1, y: 0, duration: 0.6 })
          .to(q(".social__progress i"), { scaleX: 1, duration: 1.2, ease: "none" }, "<")
          .from(q(".paid__row"), { x: 30, opacity: 0, stagger: 0.2, duration: 0.4 }, "<0.2")
          .from(q(".paid__row--main .check"), { scale: 0, rotate: -90, duration: 0.4, ease: "back.out(3)" }, "<")
          .to({}, { duration: 0.6 });
      });

      mm.add(MQ.compact, () => {
        q(".flow__step").forEach((step) => {
          gsap.from(step.querySelectorAll(".flow__label, .chat, .checkout, .paid"), {
            y: 30,
            opacity: 0,
            stagger: 0.12,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: { trigger: step, start: "top 80%" },
          });
          gsap.from(step.querySelectorAll(".bubble, .paid__row"), {
            y: 12,
            opacity: 0,
            stagger: 0.15,
            duration: 0.5,
            delay: 0.3,
            scrollTrigger: { trigger: step, start: "top 75%" },
          });
        });
      });
    },
    { scope },
  );

  return (
    <section className="section--forest on-dark" ref={scope}>
      <div className="wrap social__stage">
        <div className="section-head social__head">
          <div className="section-head__title">
            <span className="eyebrow">03 — Social and WhatsApp selling</span>
            <h2 className="h2">
              Stop losing orders <span className="serif whitespace-nowrap">in chats.</span>
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 400 }}>
            <p className="lead" style={{ fontSize: 17 }}>
              Your customers can keep chatting with you. Your orders don&apos;t have to live in the chat.
            </p>
            <Button href="/checkout-links" className="social__cta--top" style={{ alignSelf: "flex-start" }}>
              Create a checkout link
            </Button>
          </div>
        </div>

        <div className="social__progress" aria-hidden="true">
          <i />
        </div>

        <div className="flow">
          <div className="flow__step flow__step--1">
            <div className="flow__label">
              <span className="mono" data-n="1">
                STEP 1
              </span>
              <span>The chat</span>
            </div>
            <div className="chat">
              <div className="chat__head">
                <span className="avatar">CK</span>
                <div>
                  <b>Chioma K.</b>
                  <small>online</small>
                </div>
              </div>
              <span className="bubble bubble--in">Hi, how much is the black one?</span>
              <span className="bubble bubble--out">₦28,000</span>
              <span className="bubble bubble--in">I want 2.</span>
              <span className="bubble bubble--out bubble--link">
                <span>Here&apos;s your checkout:</span>
                <span className="mono">adascloset.pulchriflow.com/pay/8KQ2</span>
              </span>
            </div>
          </div>

          <div className="flow__arrow flow__arrow--1" aria-hidden="true">
            <Icon name="arrow" size={24} />
          </div>

          <div className="flow__step flow__step--2">
            <div className="flow__label">
              <span className="mono" data-n="2">
                STEP 2
              </span>
              <span>Create checkout</span>
            </div>
            <div className="checkout">
              <div className="checkout__item">
                <span className="thumb">
                  <Icon name="tote" size={28} weight={1.6} style={{ color: "#65716D" }} />
                </span>
                <div>
                  <b>Black tote</b>
                  <small>₦28,000 each</small>
                </div>
                <span className="qty">
                  <span>−</span>
                  <b>2</b>
                  <span>+</span>
                </span>
              </div>
              <div className="checkout__sum">
                <div>
                  <span>Delivery</span>
                  <span>Free</span>
                </div>
                <div>
                  <span>Total</span>
                  <span>₦56,000</span>
                </div>
              </div>
              <span className="checkout__cta">
                <Icon name="link" size={15} weight={2.2} />
                Share checkout link
              </span>
            </div>
          </div>

          <div className="flow__arrow flow__arrow--2" aria-hidden="true">
            <Icon name="arrow" size={24} />
          </div>

          <div className="flow__step flow__step--3 flow__step--lime">
            <div className="flow__label">
              <span className="mono" data-n="✓">
                STEP 3
              </span>
              <span>Paid and recorded</span>
            </div>
            <div className="paid">
              <div className="paid__row paid__row--main">
                <span className="check">
                  <Icon name="check" size={16} weight={3} style={{ color: "#09221D" }} />
                </span>
                <div>
                  Payment complete
                  <small>₦56,000 · Transfer</small>
                </div>
              </div>
              <div className="paid__row">
                <Icon name="list" size={20} />
                Order #1043 recorded
              </div>
              <div className="paid__row">
                <Icon name="receipt" size={20} />
                Receipt available
              </div>
              <div className="paid__row">
                <Icon name="user" size={20} />
                Chioma saved as a customer
              </div>
            </div>
          </div>
        </div>

        <Button href="/checkout-links" size="lg" arrow className="social__cta--end">
          Create a checkout link
        </Button>
      </div>
    </section>
  );
}
