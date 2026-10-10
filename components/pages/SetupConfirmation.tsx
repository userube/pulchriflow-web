"use client";

import { ArrowRight, Check, Clock3, Loader2, RefreshCw, X } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState, type ReactNode } from "react";
import { browserApiEndpoint } from "@/lib/config";
import {
  SETUP_SUPPORT_EMAIL,
  formatAmount,
  type SetupRequestStatus,
  type SetupStatus,
} from "@/lib/setup";

type Load =
  | { state: "loading" }
  | { state: "missing" }
  | { state: "error"; notFound: boolean }
  | { state: "ready"; data: SetupRequestStatus };

const POLL_MS = 5000;
const MAX_POLLS = 12;

const copy: Record<
  SetupStatus,
  {
    tone: "ok" | "wait" | "stop";
    label: string;
    title: string;
    payoff: string;
    body: string;
  }
> = {
  PAYMENT_PENDING: {
    tone: "wait",
    label: "Payment pending",
    title: "Your payment is",
    payoff: "being confirmed.",
    body: "This usually takes a few moments. This page updates by itself. If you closed the payment page before finishing, you can try again below.",
  },
  PAID: {
    tone: "ok",
    label: "Paid",
    title: "Payment received.",
    payoff: "We'll be in touch.",
    body: "Thank you. Our team will contact you on WhatsApp to start setting up your store. Your setup fee includes your first month of Pro.",
  },
  IN_PROGRESS: {
    tone: "ok",
    label: "In progress",
    title: "We're setting up",
    payoff: "your store.",
    body: "Our team is working on your store and keeps you updated on WhatsApp.",
  },
  COMPLETED: {
    tone: "ok",
    label: "Completed",
    title: "Your store is",
    payoff: "ready.",
    body: "Your setup is complete. Log in to your dashboard to manage products and orders.",
  },
  CANCELLED: {
    tone: "stop",
    label: "Cancelled",
    title: "This setup was",
    payoff: "cancelled.",
    body: `If this isn't what you expected, email ${SETUP_SUPPORT_EMAIL} with your reference.`,
  },
  REFUNDED: {
    tone: "stop",
    label: "Refunded",
    title: "This setup was",
    payoff: "refunded.",
    body: `Your payment has been refunded. Questions? Email ${SETUP_SUPPORT_EMAIL} with your reference.`,
  },
};

function Shell({ children }: { children: ReactNode }) {
  return (
    <div
      className="pg-card"
      style={{
        width: "100%",
        maxWidth: 620,
        margin: "0 auto",
        padding: 40,
        gap: 22,
        boxShadow: "0 40px 80px -36px rgba(9,34,29,0.45)",
      }}
    >
      {children}
    </div>
  );
}

function Skeleton() {
  const bar = (w: string, h = 14) => (
    <span
      style={{
        display: "block",
        width: w,
        height: h,
        borderRadius: 8,
        background: "var(--line-soft)",
      }}
      className="animate-pulse"
    />
  );
  return (
    <Shell>
      <div
        aria-busy="true"
        aria-label="Checking your setup"
        style={{ display: "flex", flexDirection: "column", gap: 16 }}
      >
        {bar("120px", 26)}
        {bar("80%", 34)}
        {bar("60%", 34)}
        {bar("100%")}
        {bar("90%")}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            marginTop: 8,
          }}
        >
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              {bar("110px")}
              {bar("140px")}
            </span>
          ))}
        </div>
      </div>
    </Shell>
  );
}

function Row({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: 16,
        padding: "12px 0",
        borderTop: "1px solid var(--line-soft)",
        fontSize: 15,
      }}
    >
      <span style={{ color: "var(--muted)" }}>{label}</span>
      <b
        style={{
          fontWeight: 600,
          textAlign: "right",
          overflowWrap: "anywhere",
        }}
      >
        {children}
      </b>
    </div>
  );
}

export default function SetupConfirmation() {
  const reference = useSearchParams().get("setupReference")?.trim() || "";
  const [load, setLoad] = useState<Load>(
    reference ? { state: "loading" } : { state: "missing" },
  );
  const [polls, setPolls] = useState(0);
  const [refreshing, setRefreshing] = useState(false);

  const fetchStatus = useCallback(async () => {
    const endpoint = browserApiEndpoint(
      `/api/public/setup-requests/${encodeURIComponent(reference)}`,
    );
    if (!endpoint) return { state: "error", notFound: false } as Load;
    try {
      const res = await fetch(endpoint, { cache: "no-store" });
      if (!res.ok)
        return { state: "error", notFound: res.status === 404 } as Load;
      return {
        state: "ready",
        data: (await res.json()) as SetupRequestStatus,
      } as Load;
    } catch {
      return { state: "error", notFound: false } as Load;
    }
  }, [reference]);

  useEffect(() => {
    if (!reference) return;
    let cancelled = false;
    void fetchStatus().then((next) => {
      if (!cancelled) setLoad(next);
    });
    return () => {
      cancelled = true;
    };
  }, [reference, fetchStatus]);

  const pending =
    load.state === "ready" && load.data.status === "PAYMENT_PENDING";
  useEffect(() => {
    if (!pending || polls >= MAX_POLLS) return;
    const timer = window.setTimeout(async () => {
      const next = await fetchStatus();
      if (next.state === "ready") setLoad(next);
      setPolls((n) => n + 1);
    }, POLL_MS);
    return () => window.clearTimeout(timer);
  }, [pending, polls, fetchStatus]);

  async function refresh() {
    setRefreshing(true);
    const next = await fetchStatus();
    setLoad(next);
    setPolls(0);
    setRefreshing(false);
  }

  if (load.state === "loading") return <Skeleton />;

  if (load.state === "missing" || load.state === "error") {
    const missing = load.state === "missing" || load.notFound;
    return (
      <Shell>
        <span className="pg-pill pg-pill--neutral">
          {missing ? "Not found" : "Couldn't load"}
        </span>
        <h1 className="h2" style={{ fontSize: "clamp(30px, 4vw, 44px)" }}>
          {missing ? "We couldn't find" : "We couldn't check"}{" "}
          <span className="serif">
            {missing ? "this setup." : "your setup."}
          </span>
        </h1>
        <p className="pg-body" style={{ fontSize: 16 }}>
          {missing
            ? `Check the link from your payment, or email ${SETUP_SUPPORT_EMAIL} with your setup reference.`
            : "Check your connection and try again. Your payment is safe either way."}
        </p>
        <div className="pg-ctas">
          {!missing && (
            <button
              type="button"
              className="btn btn--forest btn--lg"
              style={{ border: "none" }}
              onClick={() => void refresh()}
              disabled={refreshing}
              aria-busy={refreshing}
            >
              {refreshing ? (
                <Loader2
                  size={16}
                  className="animate-spin"
                  aria-hidden="true"
                />
              ) : (
                <RefreshCw size={16} aria-hidden="true" />
              )}
              {refreshing ? "Checking…" : "Try again"}
            </button>
          )}
          <Link className="btn btn--ghost btn--lg" href="/setup">
            Back to setup
          </Link>
        </div>
      </Shell>
    );
  }

  const { data } = load;
  const c = copy[data.status] ?? copy.PAYMENT_PENDING;
  const icon =
    c.tone === "ok" ? (
      <Check size={26} strokeWidth={2.8} aria-hidden="true" />
    ) : c.tone === "wait" ? (
      <Clock3 size={26} aria-hidden="true" />
    ) : (
      <X size={26} strokeWidth={2.6} aria-hidden="true" />
    );
  const iconBg =
    c.tone === "ok"
      ? "var(--lime)"
      : c.tone === "wait"
        ? "var(--amber-bg, #FBF1DB)"
        : "var(--line-soft)";
  const stillWaiting = pending && polls < MAX_POLLS;

  return (
    <Shell>
      <div
        role="status"
        aria-live="polite"
        style={{ display: "flex", flexDirection: "column", gap: 18 }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span
            style={{
              width: 52,
              height: 52,
              borderRadius: "50%",
              display: "grid",
              placeItems: "center",
              background: iconBg,
              color: "var(--forest)",
              flex: "none",
            }}
          >
            {icon}
          </span>
          <span className="pg-pill">{c.label}</span>
        </span>
        <h1 className="h2" style={{ fontSize: "clamp(30px, 4vw, 44px)" }}>
          {c.title} <span className="serif">{c.payoff}</span>
        </h1>
        <p className="pg-body" style={{ fontSize: 16 }}>
          {c.body}
        </p>
        {stillWaiting && (
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontSize: 13.5,
              color: "var(--muted)",
            }}
          >
            <Loader2 size={14} className="animate-spin" aria-hidden="true" />
            Checking for your payment…
          </span>
        )}
      </div>

      <div>
        <Row label="Reference">{data.setupReference}</Row>
        <Row label="Business">{data.businessName}</Row>
        <Row label="Package">{data.packageName}</Row>
        <Row label="Amount">{formatAmount(data.amount, data.currency)}</Row>
        {data.paidAt && (
          <Row label="Paid">
            {new Date(data.paidAt).toLocaleString("en-NG", {
              dateStyle: "medium",
              timeStyle: "short",
            })}
          </Row>
        )}
      </div>

      <div className="pg-ctas">
        {data.status === "PAYMENT_PENDING" && data.checkoutUrl && (
          <a className="btn btn--forest btn--lg" href={data.checkoutUrl}>
            Retry payment
            <ArrowRight size={16} strokeWidth={2.4} aria-hidden="true" />
          </a>
        )}
        {data.status === "PAYMENT_PENDING" && !stillWaiting && (
          <button
            type="button"
            className="btn btn--ghost btn--lg"
            onClick={() => void refresh()}
            disabled={refreshing}
            aria-busy={refreshing}
          >
            {refreshing ? (
              <Loader2 size={16} className="animate-spin" aria-hidden="true" />
            ) : (
              <RefreshCw size={16} aria-hidden="true" />
            )}
            {refreshing ? "Checking…" : "Check again"}
          </button>
        )}
        {data.status === "COMPLETED" ? (
          <a
            className="btn btn--forest btn--lg"
            href="https://app.pulchriflow.com/login"
          >
            Go to your dashboard
          </a>
        ) : (
          data.status !== "PAYMENT_PENDING" && (
            <Link className="btn btn--ghost btn--lg" href="/">
              Back to PulchriFlow
            </Link>
          )
        )}
      </div>
    </Shell>
  );
}
