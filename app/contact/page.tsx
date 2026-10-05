import type { Metadata } from "next";
import ContactPage from "../../components/pages/ContactPage";
import { siteUrl } from "../../lib/config";

const description = "Contact PulchriFlow for product support, partnerships and merchant questions.";

export const metadata: Metadata = {
  title: "Contact",
  description,
  alternates: { canonical: `${siteUrl}/contact` },
  openGraph: { title: "Contact | PulchriFlow", description, url: `${siteUrl}/contact` },
};

export default function Page() {
  return <ContactPage />;
}
