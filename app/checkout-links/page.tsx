import type { Metadata } from "next";
import ProductMarketingPage from "../../components/ProductMarketingPage";
import { productPages } from "../../lib/product-pages";
import { siteUrl } from "../../lib/config";
const content = productPages["checkout-links"];
export const metadata: Metadata = { title: "Checkout Links", description: content.description, alternates: { canonical: `${siteUrl}/checkout-links` }, openGraph: { title: `Checkout Links | PulchriFlow`, description: content.description, url: `${siteUrl}/checkout-links` } };
export default function CheckoutLinksPage() { return <ProductMarketingPage content={content} />; }
