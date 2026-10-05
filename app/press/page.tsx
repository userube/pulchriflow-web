import type { Metadata } from "next";
import PressPage from "../../components/pages/PressPage";
import { siteUrl } from "../../lib/config";

const description = "PulchriFlow press and media resources: company boilerplate, brand assets and media contact.";

export const metadata: Metadata = {
  title: "Press",
  description,
  alternates: { canonical: `${siteUrl}/press` },
  openGraph: { title: "Press | PulchriFlow", description, url: `${siteUrl}/press` },
};

export default function Page() {
  return <PressPage />;
}
