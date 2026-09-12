import type { Metadata } from "next";
import ProductMarketingPage from "../../components/ProductMarketingPage";
import { productPages } from "../../lib/product-pages";
import { siteUrl } from "../../lib/config";
const content = productPages.invoices;
export const metadata: Metadata = { title: "Invoices", description: content.description, alternates: { canonical: `${siteUrl}/invoices` }, openGraph: { title: `Invoices | PulchriFlow`, description: content.description, url: `${siteUrl}/invoices` } };
export default function InvoicesPage() { return <ProductMarketingPage content={content} />; }
