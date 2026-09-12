import type { Metadata } from "next";
import ProductMarketingPage from "../../components/ProductMarketingPage";
import { productPages } from "../../lib/product-pages";
import { siteUrl } from "../../lib/config";
const content = productPages.receipts;
export const metadata: Metadata = { title: "Receipts", description: content.description, alternates: { canonical: `${siteUrl}/receipts` }, openGraph: { title: `Receipts | PulchriFlow`, description: content.description, url: `${siteUrl}/receipts` } };
export default function ReceiptsPage() { return <ProductMarketingPage content={content} />; }
