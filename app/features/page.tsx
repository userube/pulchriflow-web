import type { Metadata } from "next";
import LandingPage from "../../components/LandingPage";

export const metadata: Metadata = { title: "Features", description: "PulchriFlow features for storefronts, quick sales, invoices, payments, customers, and analytics." };

export default function FeaturesPage() {
  return <LandingPage initialAnchor="features" />;
}
