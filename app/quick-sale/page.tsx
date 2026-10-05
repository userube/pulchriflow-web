import type { Metadata } from "next";
import ProductFeaturePage from "../../components/pages/ProductFeaturePage";
import { siteUrl } from "../../lib/config";
import { productPages } from "../../lib/product-pages";

const content = productPages["quick-sale"];

export const metadata: Metadata = {
  title: content.title,
  description: content.description,
  alternates: { canonical: `${siteUrl}/quick-sale` },
  openGraph: { title: `${content.title} | PulchriFlow`, description: content.description, url: `${siteUrl}/quick-sale` },
};

export default function Page() {
  return <ProductFeaturePage slug="quick-sale" />;
}
