import type { Metadata } from "next";
import ProductMarketingPage from "../../components/ProductMarketingPage";
import { productPages } from "../../lib/product-pages";
import { siteUrl } from "../../lib/config";
const content = productPages["service-businesses"];
export const metadata: Metadata = { title: "Service Businesses", description: content.description, alternates: { canonical: `${siteUrl}/service-businesses` }, openGraph: { title: "Service Businesses | PulchriFlow", description: content.description, url: `${siteUrl}/service-businesses` } };
export default function ServiceBusinessesPage() { return <ProductMarketingPage content={content} />; }
