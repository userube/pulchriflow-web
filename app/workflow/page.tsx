import type { Metadata } from "next";
import WorkflowPage from "../../components/pages/WorkflowPage";
import { siteUrl } from "../../lib/config";

const description = "Every sale starts somewhere. See how PulchriFlow takes a counter sale, a chat or a storefront order to a paid, recorded and receipted sale.";

export const metadata: Metadata = {
  title: "How it works",
  description,
  alternates: { canonical: `${siteUrl}/workflow` },
  openGraph: { title: "How it works | PulchriFlow", description, url: `${siteUrl}/workflow` },
};

export default function Page() {
  return <WorkflowPage />;
}
