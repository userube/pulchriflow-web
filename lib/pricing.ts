import { apiEndpoint } from "./config";

export type PlanPrice = {
  plan: string;
  amount: string | number;
  currency: string;
  billingPeriod: string;
  fallback: boolean;
};

export async function getPublicPrices(): Promise<PlanPrice[]> {
  const endpoint = apiEndpoint("/api/public/pricing");
  if (!endpoint) return [];

  try {
    const response = await fetch(endpoint, {
      next: { revalidate: 300, tags: ["pricing"] }
    });
    if (!response.ok) return [];
    const data = (await response.json()) as { prices?: PlanPrice[] };
    return data.prices ?? [];
  } catch {
    return [];
  }
}

export function formatPrice(price?: PlanPrice) {
  if (!price) return "Configured in PulchriFlow";
  const amount = Number(price.amount).toLocaleString("en-NG", { maximumFractionDigits: 0 });
  return `${price.currency === "NGN" ? "₦" : price.currency} ${amount}`;
}
