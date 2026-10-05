import type { Metadata } from "next";
import RestaurantsPage from "../../components/pages/RestaurantsPage";
import { siteUrl } from "../../lib/config";
import { productPages } from "../../lib/product-pages";

const content = productPages["restaurants"];

export const metadata: Metadata = {
  title: content.title,
  description: content.description,
  alternates: { canonical: `${siteUrl}/restaurants` },
  openGraph: { title: `${content.title} | PulchriFlow`, description: content.description, url: `${siteUrl}/restaurants` },
};

export default function Page() {
  return <RestaurantsPage />;
}
