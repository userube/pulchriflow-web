import type { Metadata } from "next";
import CustomerHubPage from "../../components/pages/CustomerHubPage";
import { siteUrl } from "../../lib/config";
import { productPages } from "../../lib/product-pages";

const content = productPages["customer-hub"];

export const metadata: Metadata = {
  title: content.title,
  description: content.description,
  alternates: { canonical: `${siteUrl}/customer-hub` },
  openGraph: { title: `${content.title} | PulchriFlow`, description: content.description, url: `${siteUrl}/customer-hub` },
};

export default function Page() {
  return <CustomerHubPage />;
}
