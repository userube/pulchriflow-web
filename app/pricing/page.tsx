import type { Metadata } from "next";
import LandingPage from "../../components/LandingPage";

export const metadata: Metadata = { title: "Pricing", description: "Start free with PulchriFlow. Upgrade to Pro for unlimited products and growth tools." };

export default function PricingPage() {
  return <LandingPage initialAnchor="pricing" />;
}
