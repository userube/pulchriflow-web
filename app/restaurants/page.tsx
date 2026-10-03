import type { Metadata } from "next";
import ProductMarketingPage from "../../components/ProductMarketingPage";
import { productPages } from "../../lib/product-pages";
import { siteUrl } from "../../lib/config";
const content = productPages.restaurants;
export const metadata: Metadata = { title: "Restaurants", description: content.description, alternates: { canonical: `${siteUrl}/restaurants` }, openGraph: { title: "Restaurants | PulchriFlow", description: content.description, url: `${siteUrl}/restaurants` } };
export default function RestaurantsPage() { return <ProductMarketingPage content={content} />; }
