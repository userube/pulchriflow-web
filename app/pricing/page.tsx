import type { Metadata } from "next";
import { PricingStoryPage } from "../../components/StoryPages";
import { getPublicPrices } from "../../lib/pricing";

export const metadata: Metadata = { title: "Pricing", description: "Start free with PulchriFlow. Upgrade to Pro for unlimited products and growth tools." };

export default async function PricingPage() {
  return <PricingStoryPage prices={await getPublicPrices()} />;
}
