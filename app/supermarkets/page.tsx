import type { Metadata } from "next";
import ProductMarketingPage from "../../components/ProductMarketingPage";
import { productPages } from "../../lib/product-pages";
import { siteUrl } from "../../lib/config";
const content = productPages.supermarkets;
export const metadata: Metadata = { title: "Supermarkets", description: content.description, alternates: { canonical: `${siteUrl}/supermarkets` }, openGraph: { title: "Supermarkets | PulchriFlow", description: content.description, url: `${siteUrl}/supermarkets` } };
export default function SupermarketsPage() { return <ProductMarketingPage content={content} />; }
