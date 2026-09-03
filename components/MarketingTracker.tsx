"use client";

import { useEffect } from "react";
import { apiUrl } from "../lib/config";

export default function MarketingTracker({ eventType, entityType, entityId }: { eventType: string; entityType?: string; entityId?: string }) {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const body = {
      eventType,
      entityType,
      entityId,
      pagePath: window.location.pathname,
      landingPage: document.referrer || window.location.href,
      utmSource: params.get("utm_source"),
      utmMedium: params.get("utm_medium"),
      utmCampaign: params.get("utm_campaign"),
      utmContent: params.get("utm_content"),
      utmTerm: params.get("utm_term"),
      ref: params.get("ref"),
      promoCode: params.get("promo")
    };
    const payload = new Blob([JSON.stringify(body)], { type: "application/json" });
    navigator.sendBeacon?.(`${apiUrl.replace(/\/$/, "")}/api/public/marketing/events`, payload);
  }, [entityId, entityType, eventType]);
  return null;
}
