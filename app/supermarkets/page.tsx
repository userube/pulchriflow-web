import type { Metadata } from "next";
import SupermarketsPage from "../../components/pages/SupermarketsPage";
import { siteUrl } from "../../lib/config";
import { productPages } from "../../lib/product-pages";

const content = productPages["supermarkets"];

export const metadata: Metadata = {
  title: content.title,
  description: content.description,
  alternates: { canonical: `${siteUrl}/supermarkets` },
  openGraph: { title: `${content.title} | PulchriFlow`, description: content.description, url: `${siteUrl}/supermarkets` },
};

export default function Page() {
  return <SupermarketsPage />;
}
