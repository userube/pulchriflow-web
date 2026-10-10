import type { Metadata } from "next";
import LegalPage from "../../components/pages/LegalPage";
import { siteUrl } from "../../lib/config";

export const metadata: Metadata = {
  title: "Terms and conditions",
  description: "Read the terms governing merchant access to and use of PulchriFlow.",
  alternates: { canonical: `${siteUrl}/terms` },
};

export default function Page() {
  return (
    <LegalPage
      title="Terms"
      payoff="and conditions."
      summary="These terms govern your use of PulchriFlow."
      other={{ href: "/privacy", label: "Read the Privacy policy" }}
      sections={[
        { title: "Acceptance of terms", body: "By using PulchriFlow, you agree to these terms." },
        { title: "Merchant responsibilities", body: "Merchants are responsible for product accuracy, customer communication, legal compliance, and order fulfilment." },
        { title: "Platform availability", body: "PulchriFlow strives to maintain platform availability but does not guarantee uninterrupted service." },
        { title: "Prohibited activities", body: "Fraud, illegal products, abuse of the platform, and unauthorized access attempts are not allowed." },
        { title: "Termination", body: "PulchriFlow reserves the right to suspend accounts that violate these terms." },
        { title: "Contact", body: "Questions about these terms? Contact support@pulchriflow.com." },
      ]}
    />
  );
}
