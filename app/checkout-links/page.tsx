import type { Metadata } from "next";
import ProductFeaturePage from "../../components/pages/ProductFeaturePage";
import { siteUrl } from "../../lib/config";
import { productPages } from "../../lib/product-pages";

const content = productPages["checkout-links"];

export const metadata: Metadata = {
  title: content.title,
  description: content.description,
  alternates: { canonical: `${siteUrl}/checkout-links` },
  openGraph: { title: `${content.title} | PulchriFlow`, description: content.description, url: `${siteUrl}/checkout-links` },
};

export default function Page() {
  return <ProductFeaturePage slug="checkout-links" />;
}
