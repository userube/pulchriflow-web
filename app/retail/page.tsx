import type { Metadata } from "next";
import ProductMarketingPage from "../../components/ProductMarketingPage";
import { productPages } from "../../lib/product-pages";
import { siteUrl } from "../../lib/config";
const content = productPages.retail;
export const metadata: Metadata = { title: "Retail", description: content.description, alternates: { canonical: `${siteUrl}/retail` }, openGraph: { title: "Retail | PulchriFlow", description: content.description, url: `${siteUrl}/retail` } };
export default function RetailPage() { return <ProductMarketingPage content={content} />; }
