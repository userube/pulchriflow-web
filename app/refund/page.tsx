import type { Metadata } from "next";
import LegalPage from "../../components/pages/LegalPage";
import { siteUrl } from "../../lib/config";

export const metadata: Metadata = {
  title: "Refund policy",
  description: "Review PulchriFlow subscription billing, cancellation, refund request, and service issue policies.",
  alternates: { canonical: `${siteUrl}/refund` },
};

export default function Page() {
  return (
    <LegalPage
      title="Refund"
      payoff="policy."
      summary="Our policy for subscriptions, cancellations, and refund requests."
      other={{ href: "/terms", label: "Read the Terms" }}
      sections={[
        { title: "Subscription fees", body: "PulchriFlow subscriptions are billed monthly." },
        { title: "Free plan", body: "No charges apply." },
        { title: "Pro plan", body: "Merchants may cancel their subscription at any time." },
        { title: "Refund requests", body: "Refund requests are reviewed on a case-by-case basis. Completed billing periods are generally non-refundable." },
        { title: "Service issues", body: "Where service disruptions occur, PulchriFlow may provide credits or other remedies at its discretion." },
        { title: "Contact", body: "For refund requests, contact support@pulchriflow.com." },
      ]}
    />
  );
}
