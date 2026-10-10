import type { Metadata } from "next";
import LegalPage from "../../components/pages/LegalPage";
import { siteUrl } from "../../lib/config";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "Learn how PulchriFlow collects, uses, and protects merchant, customer, and order information.",
  alternates: { canonical: `${siteUrl}/privacy` },
};

export default function Page() {
  return (
    <LegalPage
      title="Privacy"
      payoff="policy."
      summary="PulchriFlow respects your privacy. This is how we collect, use and protect merchant, customer and order information."
      other={{ href: "/terms", label: "Read the Terms" }}
      sections={[
        { title: "Information we collect", body: "Name, email, phone number, store information, customer information entered by merchants, and order information." },
        { title: "How we use information", body: "To provide storefronts, process orders, improve the platform, send service notifications, and provide customer support." },
        { title: "Data security", body: "PulchriFlow uses industry-standard security practices to protect data." },
        { title: "Third parties", body: "PulchriFlow may use trusted third-party providers including Paystack, Brevo, Cloudinary, and hosting providers." },
        { title: "Contact", body: "For privacy questions or requests, contact support@pulchriflow.com." },
      ]}
    />
  );
}
