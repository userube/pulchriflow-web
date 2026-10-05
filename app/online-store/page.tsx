import type { Metadata } from "next";
import ProductFeaturePage from "../../components/pages/ProductFeaturePage";
import { siteUrl } from "../../lib/config";
import { productPages } from "../../lib/product-pages";

const content = productPages["online-store"];

export const metadata: Metadata = {
  title: content.title,
  description: content.description,
  alternates: { canonical: `${siteUrl}/online-store` },
  openGraph: { title: `${content.title} | PulchriFlow`, description: content.description, url: `${siteUrl}/online-store` },
};

export default function Page() {
  return <ProductFeaturePage slug="online-store" />;
}
