import type { Metadata } from "next";
import JournalPage from "../../components/pages/JournalPage";
import { getBlogPosts } from "../../lib/blog";
import { siteUrl } from "../../lib/config";

const description = "Practical resources for running a better business with clearer sales, payments, customers, and records.";

export const metadata: Metadata = {
  title: "Journal",
  description,
  alternates: { canonical: `${siteUrl}/blog` },
  openGraph: { title: "Journal | PulchriFlow", description, url: `${siteUrl}/blog` },
};

export default async function BlogPage() {
  return <JournalPage posts={await getBlogPosts()} />;
}
