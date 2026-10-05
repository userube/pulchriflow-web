import type { Metadata } from "next";
import ServicesPage from "../../components/pages/ServicesPage";
import { siteUrl } from "../../lib/config";
import { productPages } from "../../lib/product-pages";

const content = productPages["service-businesses"];

export const metadata: Metadata = {
  title: content.title,
  description: content.description,
  alternates: { canonical: `${siteUrl}/service-businesses` },
  openGraph: { title: `${content.title} | PulchriFlow`, description: content.description, url: `${siteUrl}/service-businesses` },
};

export default function Page() {
  return <ServicesPage />;
}
