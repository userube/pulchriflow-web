import type { Metadata } from "next";
import FeaturesPage from "../../components/pages/FeaturesPage";
import { siteUrl } from "../../lib/config";

const description = "Quick Sale, checkout links, an online store, invoices, wholesale price requests and connected business records: the commerce layer beneath every way you sell.";

export const metadata: Metadata = {
  title: "Features",
  description,
  alternates: { canonical: `${siteUrl}/features` },
  openGraph: { title: "Features | PulchriFlow", description, url: `${siteUrl}/features` },
};

export default function Page() {
  return <FeaturesPage />;
}
