import type { Metadata } from "next";
import ProductFeaturePage from "../../components/pages/ProductFeaturePage";
import { siteUrl } from "../../lib/config";
import { productPages } from "../../lib/product-pages";

const content = productPages["receipts"];

export const metadata: Metadata = {
  title: content.title,
  description: content.description,
  alternates: { canonical: `${siteUrl}/receipts` },
  openGraph: { title: `${content.title} | PulchriFlow`, description: content.description, url: `${siteUrl}/receipts` },
};

export default function Page() {
  return <ProductFeaturePage slug="receipts" />;
}
