import { appLink } from "../lib/config";

const preservedParams = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "ref", "promo"];

export default function AppCta({ label = "Start free", plan }: { label?: string; plan?: string }) {
  const query = plan ? `?plan=${encodeURIComponent(plan)}` : "";
  return <a className="button primary" href={appLink(`/register${query}`)} data-preserve-params={preservedParams.join(",")}>{label}</a>;
}
