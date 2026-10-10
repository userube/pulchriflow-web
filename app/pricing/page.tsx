import type { Metadata } from "next";
import PricingPage from "../../components/pages/PricingPage";
import { siteUrl } from "../../lib/config";
import { getPublicPrices } from "../../lib/pricing";

const description =
  "Create your PulchriFlow store for free. Your first 10 orders are on us, then upgrade to Pro to keep selling without limits.";

export const metadata: Metadata = {
  title: "Pricing",
  description,
  alternates: { canonical: `${siteUrl}/pricing` },
  openGraph: {
    title: "Pricing | PulchriFlow",
    description,
    url: `${siteUrl}/pricing`,
  },
};

export default async function Page() {
  return <PricingPage prices={await getPublicPrices()} />;
}
