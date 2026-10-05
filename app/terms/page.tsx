import type { Metadata } from "next";
import LegalPage from "../../components/pages/LegalPage";
import { siteUrl } from "../../lib/config";

export const metadata: Metadata = {
  title: "Terms",
  description: "PulchriFlow terms and conditions.",
  alternates: { canonical: `${siteUrl}/terms` },
};

export default function Page() {
  return (
    <LegalPage
      title="Terms and"
      payoff="conditions."
      summary="The terms merchants agree to when using PulchriFlow."
      other={{ href: "/privacy", label: "Read the Privacy policy" }}
      sections={[
        { title: "Using PulchriFlow", body: "By using PulchriFlow, merchants agree to use the service lawfully, keep account credentials secure, and remain responsible for products, customer communication, and fulfilment." },
        { title: "Changes to these terms", body: "PulchriFlow may update these terms as the product evolves." },
      ]}
    />
  );
}
