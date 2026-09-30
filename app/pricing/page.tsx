import type { Metadata } from "next";
import { PricingStoryPage } from "../../components/StoryPages";
import { getPublicPrices } from "../../lib/pricing";

export const metadata: Metadata = { title: "Pricing", description: "Create your PulchriFlow store for free. Your first 10 orders are on us, then upgrade to Pro to keep selling without limits." };

export default async function PricingPage() {
  return <PricingStoryPage prices={await getPublicPrices()} />;
}
