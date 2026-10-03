import type { Metadata } from "next";
import ProductMarketingPage from "../../components/ProductMarketingPage";
import { productPages } from "../../lib/product-pages";
import { siteUrl } from "../../lib/config";
const content = productPages["saved-items"];
export const metadata: Metadata = { title: "Saved Items", description: content.description, alternates: { canonical: `${siteUrl}/saved-items` }, openGraph: { title: "Saved Items | PulchriFlow", description: content.description, url: `${siteUrl}/saved-items` } };
export default function SavedItemsPage() { return <ProductMarketingPage content={content} />; }
