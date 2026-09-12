import type { Metadata } from "next";
import ProductMarketingPage from "../../components/ProductMarketingPage";
import { productPages } from "../../lib/product-pages";
import { siteUrl } from "../../lib/config";
const content = productPages["online-store"];
export const metadata: Metadata = { title: "Online Store", description: content.description, alternates: { canonical: `${siteUrl}/online-store` }, openGraph: { title: `Online Store | PulchriFlow`, description: content.description, url: `${siteUrl}/online-store` } };
export default function OnlineStorePage() { return <ProductMarketingPage content={content} />; }
