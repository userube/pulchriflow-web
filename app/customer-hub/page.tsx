import type { Metadata } from "next";
import ProductMarketingPage from "../../components/ProductMarketingPage";
import { siteUrl } from "../../lib/config";
import { productPages } from "../../lib/product-pages";

const content = productPages["customer-hub"];

export const metadata: Metadata = {
  title: "Customer Hub",
  description: content.description,
  alternates: { canonical: `${siteUrl}/customer-hub` },
  openGraph: {
    title: "Customer Hub | PulchriFlow",
    description: content.description,
    url: `${siteUrl}/customer-hub`
  }
};

export default function CustomerHubPage() {
  return <ProductMarketingPage content={content} />;
}
