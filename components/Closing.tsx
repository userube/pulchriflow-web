"use client";

import { usePathname } from "next/navigation";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { appLink } from "@/lib/config";
import { articles, updates } from "@/lib/data";
import { footerColumns, preservedParams } from "@/lib/navigation";
import NewsletterForm from "./NewsletterForm";
import { gsap, MQ, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { Icon } from "./Icon";
import Logo from "./Logo";
import { Button, EASE, SectionHead, Stagger, fadeUp } from "./motion";

export function Updates() {
  return (
    <section className="section">
      <div className="wrap">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: 24,
          }}
        >
          <SectionHead
            eyebrow="07 — What's new"
            title="A product that keeps moving"
            payoff="with your business."
          />
          <div
            className="news-actions"
            style={{ display: "flex", gap: 10, marginBottom: 56 }}
          >
            <Button href="/blog" variant="ghost">
              See product updates
            </Button>
            <Button href="/blog" variant="forest">
              Explore resources
            </Button>
          </div>
        </div>

        <div className="news">
          <Stagger className="changelog" gap={0.08}>
            <div className="changelog__head">
              Product updates <span className="mono">CHANGELOG</span>
            </div>
            {updates.map((u) => (
              <motion.a
                href="/blog"
                key={u.title}
                className="update"
                variants={fadeUp}
                whileHover={{ x: 6 }}
              >
                <div>
                  <span
                    className="update__tag"
                    style={
                      u.tag === "New"
                        ? { background: "var(--lime)", color: "var(--forest)" }
                        : { background: "rgba(250, 249, 245,0.12)" }
                    }
                  >
                    {u.tag}
                  </span>
                  <b>{u.title}</b>
                </div>
                <Icon name="chevron" />
              </motion.a>
            ))}
          </Stagger>

          <div className="journal">
            <div className="journal__head">
              <span className="mono">PULCHRIFLOW JOURNAL</span>
              <b>Practical resources for selling with more clarity.</b>
            </div>
            <Stagger className="articles" gap={0.1}>
              {articles.map((a) => (
                <motion.a
                  href="/blog"
                  key={a.title}
                  className="article"
                  variants={fadeUp}
                  whileHover="hover"
                >
                  <div className="article__cover" style={{ background: a.bg }}>
                    <motion.i
                      style={{ width: 120, height: 120, borderColor: a.ring }}
                      variants={{ hover: { scale: 1.25 } }}
                      transition={{ duration: 0.6, ease: EASE }}
                    />
                    <motion.i
                      style={{ width: 200, height: 200, borderColor: a.ring }}
                      variants={{ hover: { scale: 1.12 } }}
                      transition={{ duration: 0.6, ease: EASE }}
                    />
                    <motion.span
                      className="serif"
                      style={{ color: a.fg }}
                      variants={{ hover: { rotate: -10, scale: 1.15 } }}
                    >
                      {a.mark}
                    </motion.span>
                  </div>
                  <div className="article__body">
                    <span className="mono">{a.cat}</span>
                    <b>{a.title}</b>
                    <small>{a.read}</small>
                  </div>
                </motion.a>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FinalCta({
  eyebrow = "Start selling",
  title = "Run the business",
  payoff = "behind every sale.",
  sub = "Start free and bring your everyday selling into one clearer flow.",
  plain = false,
}: {
  eyebrow?: string;
  title?: string;
  payoff?: string;
  sub?: string;
  /** Pages after the landing page sit the band on a cream section with full top padding. */
  plain?: boolean;
} = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const s1 = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const s2 = useTransform(scrollYProgress, [0, 1], [0.35, 1]);
  const s3 = useTransform(scrollYProgress, [0, 1], [0.2, 1]);

  return (
    <section className={plain ? "pg-cta-wrap" : undefined} style={plain ? undefined : { padding: "0 0 96px" }}>
      <div className="wrap">
        <div className="cta" ref={ref}>
          <div className="cta__rings" aria-hidden="true">
            {[
              [480, s1],
              [760, s2],
              [1040, s3],
            ].map(([d, s], i) => (
              <motion.span
                key={i}
                className="orbit"
                style={{
                  width: d as number,
                  height: d as number,
                  scale: s as typeof s1,
                }}
              />
            ))}
          </div>
          <Stagger gap={0.1} className="cta__inner">
            <motion.span
              variants={fadeUp}
              className="mono"
              style={{
                fontSize: 12,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                display: "block",
                marginBottom: 24,
              }}
            >
              {eyebrow}
            </motion.span>
            <motion.h2 variants={fadeUp}>
              {title}
              <br />
              <span className="serif">{payoff}</span>
            </motion.h2>
            <motion.p variants={fadeUp} style={{ margin: "24px auto 28px" }}>
              {sub}
            </motion.p>
            <motion.div variants={fadeUp} className="cta__btns">
              <Button href={appLink("/register")} data-preserve-params={preservedParams} variant="forest" size="lg" arrow>
                Start free
              </Button>
              <Button href={appLink("/shop/demo")} variant="ghost" size="lg">
                Try the demo store
              </Button>
            </motion.div>
            <motion.span
              variants={fadeUp}
              className="mono"
              style={{
                display: "block",
                marginTop: 24,
                fontSize: 12,
                color: "#2F4A3F",
              }}
            >
              Free to start · No card required
            </motion.span>
          </Stagger>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const scope = useRef<HTMLElement>(null);
  // Link groups are an accordion on phones and always open on larger screens.
  const [isPhone, setIsPhone] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 760px)");
    const sync = () => setIsPhone(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  // Collapsing the accordion changes page height; re-measure every ScrollTrigger.
  useEffect(() => {
    const id = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(id);
  }, [isPhone]);

  // GSAP: the giant wordmark rises letter by letter as the footer scrolls in.
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MQ.motion, () => {
        gsap.from(".wordmark span", {
          yPercent: 110,
          stagger: 0.05,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".wordmark",
            start: "top bottom",
            end: "clamp(bottom bottom)",
            scrub: 0.6,
          },
        });
      });
    },
    { scope },
  );

  return (
    <footer className="footer" ref={scope}>
      <div className="wrap">
        <div className="footer__top">
          <div className="footer__brand">
            <Link href="/" className="logo" aria-label="PulchriFlow home">
              <Logo />
            </Link>
            <p>
              The commerce platform for businesses that sell in person, online
              and in the chat.
            </p>
            <NewsletterForm source="footer" variant="footer" label="Email for product updates" placeholder="Your email" />
          </div>
          <div className="footer__cols">
            {footerColumns.map((c) => (
              <details className="footer__col" key={c.title} open={!isPhone}>
                <summary>
                  <h3>{c.title}</h3>
                  <Icon name="plus" style={{ color: "var(--on-dark-faint)" }} />
                </summary>
                {c.links.map((l) => (
                  <Link href={l.href} key={l.href} style={{ display: "block" }}>
                    {l.label}
                  </Link>
                ))}
              </details>
            ))}
          </div>
        </div>
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} PulchriFlow. All rights reserved.</span>
          <span className="footer__social">
            <a href="mailto:support@pulchriflow.com">support@pulchriflow.com</a>
            <a href={appLink("/login")}>Log in</a>
          </span>
        </div>
      </div>
      <div className="wordmark" aria-hidden="true">
        {"PulchriFlow".split("").map((ch, i) => (
          <span key={i}>{ch}</span>
        ))}
      </div>
    </footer>
  );
}

/** Phone-only sticky "Start free" bar that slides up once the hero is out of view. */
export function StickyCta() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [show, setShow] = useState(false);
  useMotionValueEvent(scrollY, "change", (y) => {
    const nearEnd =
      y + window.innerHeight > document.documentElement.scrollHeight - 700;
    setShow(y > 700 && !nearEnd);
  });

  return (
    <AnimatePresence>
      {show && !pathname.startsWith("/setup") && (
        <motion.div
          className="sticky-cta"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div>
            <b>Free to start</b>
            <small>No card required</small>
          </div>
          <Button href={appLink("/register")} data-preserve-params={preservedParams} arrow>
            Start free
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
