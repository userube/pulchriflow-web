import type { Metadata } from "next";
import SavedItemsPage from "../../components/pages/SavedItemsPage";
import { siteUrl } from "../../lib/config";
import { productPages } from "../../lib/product-pages";

const content = productPages["saved-items"];

export const metadata: Metadata = {
  title: content.title,
  description: content.description,
  alternates: { canonical: `${siteUrl}/saved-items` },
  openGraph: { title: `${content.title} | PulchriFlow`, description: content.description, url: `${siteUrl}/saved-items` },
};

export default function Page() {
  return <SavedItemsPage />;
}
