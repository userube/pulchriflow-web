import type { Metadata } from "next";
import ProductMarketingPage from "../../components/ProductMarketingPage";
import { productPages } from "../../lib/product-pages";
import { siteUrl } from "../../lib/config";
const content = productPages["quick-sale"];
export const metadata: Metadata = { title: "Quick Sale", description: content.description, alternates: { canonical: `${siteUrl}/quick-sale` }, openGraph: { title: `Quick Sale | PulchriFlow`, description: content.description, url: `${siteUrl}/quick-sale` } };
export default function QuickSalePage() { return <ProductMarketingPage content={content} />; }
