import type { Metadata } from "next";
import SetupPage from "../../components/pages/SetupPage";
import { siteUrl } from "../../lib/config";
import { getSetupPrice } from "../../lib/pricing";

const description =
  "Let the PulchriFlow team set up your store: we collect your business information, upload your products, configure your storefront and set up WhatsApp ordering.";

export const metadata: Metadata = {
  title: "Setup service",
  description,
  alternates: { canonical: `${siteUrl}/setup` },
  openGraph: {
    title: "Setup service | PulchriFlow",
    description,
    url: `${siteUrl}/setup`,
  },
};

export default async function Page() {
  return <SetupPage prices={await getSetupPrice()} />;
}
