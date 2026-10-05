"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { appLink } from "@/lib/config";
import {
  isActive,
  preservedParams,
  primaryNavigation,
  solutionLinks,
} from "@/lib/navigation";
import { Icon } from "./Icon";
import Logo from "./Logo";
import { Button, EASE } from "./motion";

export function Announcement() {
  return (
    <div className="announce">
      <div className="wrap">
        <span className="announce__tag">New</span>
        <span>
          Meet Sabi
          <span className="announce__text-long">
            {" "}
            — ask your business questions in plain language
          </span>
          .
        </span>
        <Link href="/#sabi">See Sabi</Link>
      </div>
    </div>
  );
}

function SolutionsMenu({ active }: { active: boolean }) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close when navigating (reset during render), clicking elsewhere or pressing Escape.
  const [seenPath, setSeenPath] = useState(pathname);
  if (seenPath !== pathname) {
    setSeenPath(pathname);
    setOpen(false);
  }
  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        root.current?.querySelector<HTMLButtonElement>("button")?.focus();
      }
    };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="nav__drop" ref={root}>
      <button
        type="button"
        className={`nav__link${active ? " is-active" : ""}`}
        aria-expanded={open}
        aria-controls="nav-solutions"
        onClick={() => setOpen((v) => !v)}
      >
        {active && <span className="nav__pill" />}
        Solutions
        <Icon
          name="chevron"
          size={12}
          weight={2.4}
          style={{ transform: open ? "rotate(-90deg)" : "rotate(90deg)", transition: "transform .2s" }}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            id="nav-solutions"
            className="nav__panel"
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.18, ease: EASE }}
          >
            {solutionLinks.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="nav__panel-link"
                aria-current={pathname === s.href ? "page" : undefined}
              >
                <b>{s.label}</b>
                <span>{s.description}</span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Nav() {
  const pathname = usePathname() ?? "/";
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  // Hide on scroll down, reveal on scroll up.
  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 40);
    setHidden(y > 600 && y > prev + 4 ? true : y < prev - 4 ? false : hidden);
  });

  // Close the mobile menu when the route changes.
  const [seenPath, setSeenPath] = useState(pathname);
  if (seenPath !== pathname) {
    setSeenPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <motion.header
        className={`nav${scrolled ? " is-scrolled" : ""}`}
        animate={{ y: hidden && !open ? "-100%" : "0%" }}
        transition={{ duration: 0.35, ease: EASE }}
      >
        <motion.nav
          className="wrap nav__inner"
          aria-label="Main"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <Link href="/" className="logo" aria-label="PulchriFlow home">
            <Logo />
          </Link>

          <div className="nav__links">
            {primaryNavigation.map((item) =>
              "children" in item ? (
                <SolutionsMenu key={item.label} active={isActive(pathname, item)} />
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav__link${isActive(pathname, item) ? " is-active" : ""}`}
                  aria-current={isActive(pathname, item) ? "page" : undefined}
                >
                  {isActive(pathname, item) && <span className="nav__pill" />}
                  {item.label}
                </Link>
              ),
            )}
          </div>

          <div className="nav__actions">
            <a href={appLink("/login")} className="nav__login">
              Log in
            </a>
            <Button
              href={appLink("/register")}
              data-preserve-params={preservedParams}
              variant="lime"
              arrow
              className="hide-compact"
            >
              Start free
            </Button>
            <button
              className="nav__burger"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
            >
              <Icon name="menu" size={20} />
            </button>
          </div>
        </motion.nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={{ clipPath: "circle(0% at calc(100% - 42px) 34px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 42px) 34px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 42px) 34px)" }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <span className="menu__ring" style={{ width: 620, height: 620, right: -260, bottom: -260 }} />
            <span className="menu__ring" style={{ width: 420, height: 420, right: -160, bottom: -160 }} />
            <div className="menu__top">
              <Link href="/" className="logo" onClick={() => setOpen(false)}>
                <Logo />
              </Link>
              <button className="menu__close" aria-label="Close menu" onClick={() => setOpen(false)}>
                <Icon name="close" size={18} weight={2.2} />
              </button>
            </div>
            <motion.div
              className="menu__links"
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } } }}
            >
              {primaryNavigation.map((item, i) => {
                const variants = {
                  hidden: { opacity: 0, y: 24 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
                };
                if ("children" in item) {
                  return (
                    <motion.div key={item.label} variants={variants} className="menu__group">
                      <span className="menu__group-label">
                        <span>{item.label}</span>
                        <span>0{i + 1}</span>
                      </span>
                      <div className="menu__sub">
                        {item.children.map((c) => (
                          <Link key={c.href} href={c.href} aria-current={pathname === c.href ? "page" : undefined}>
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  );
                }
                const on = isActive(pathname, item);
                return (
                  <motion.div key={item.href} variants={variants}>
                    <Link
                      href={item.href}
                      className="menu__link"
                      aria-current={on ? "page" : undefined}
                      style={on ? { color: "var(--lime)" } : undefined}
                    >
                      <span>{item.label}</span>
                      <span>0{i + 1}</span>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
            <motion.div
              className="menu__ctas"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5, ease: EASE }}
            >
              <a href={appLink("/register")} data-preserve-params={preservedParams} className="btn btn--lime btn--lg">
                Start free
              </a>
              <a href={appLink("/login")} className="btn btn--ghost-dark btn--lg">
                Log in
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
