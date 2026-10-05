import type { Metadata } from "next";
import RetailPage from "../../components/pages/RetailPage";
import { siteUrl } from "../../lib/config";
import { productPages } from "../../lib/product-pages";

const content = productPages["retail"];

export const metadata: Metadata = {
  title: content.title,
  description: content.description,
  alternates: { canonical: `${siteUrl}/retail` },
  openGraph: { title: `${content.title} | PulchriFlow`, description: content.description, url: `${siteUrl}/retail` },
};

export default function Page() {
  return <RetailPage />;
}
