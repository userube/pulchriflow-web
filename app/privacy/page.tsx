import type { Metadata } from "next";
import LegalPage from "../../components/pages/LegalPage";
import { siteUrl } from "../../lib/config";

export const metadata: Metadata = {
  title: "Privacy",
  description: "PulchriFlow privacy policy.",
  alternates: { canonical: `${siteUrl}/privacy` },
};

export default function Page() {
  return (
    <LegalPage
      title="Privacy"
      payoff="policy."
      summary="How PulchriFlow collects and uses the information needed to run merchant accounts and storefronts."
      other={{ href: "/terms", label: "Read the Terms" }}
      sections={[
        { title: "What we collect", body: "PulchriFlow collects the information needed to provide merchant accounts, storefronts, orders, payments, notifications, and support." },
        { title: "How we use it", body: "We use operational data to run the product, improve reliability, and help merchants understand their business." },
        { title: "Privacy requests", body: "For privacy requests, contact support@pulchriflow.com." },
      ]}
    />
  );
}
