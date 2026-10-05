/* eslint-disable @next/next/no-img-element -- CMS-provided remote image URLs are not known at build time. */
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock3 } from "lucide-react";
import { notFound } from "next/navigation";
import { FinalCta } from "../../../components/Closing";
import MarketingTracker from "../../../components/MarketingTracker";
import { publishedDate } from "../../../components/pages/JournalPage";
import SiteShell from "../../../components/site/SiteShell";
import { Orbits } from "../../../components/site/blocks";
import { getBlogPost } from "../../../lib/blog";
import { siteUrl } from "../../../lib/config";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.seoTitle || post.title,
    description: post.metaDescription || post.excerpt,
    alternates: { canonical: post.canonicalUrl || `${siteUrl}/blog/${post.slug}` },
    openGraph: { type: "article", title: post.ogTitle || post.title, description: post.ogDescription || post.metaDescription || post.excerpt, url: `${siteUrl}/blog/${post.slug}`, images: post.ogImageUrl || post.coverImageUrl ? [post.ogImageUrl || post.coverImageUrl || ""] : undefined, publishedTime: post.publishedAt, modifiedTime: post.updatedAt },
    twitter: { card: "summary_large_image", title: post.ogTitle || post.title, description: post.ogDescription || post.metaDescription || post.excerpt },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) notFound();
  const articleJsonLd = { "@context": "https://schema.org", "@type": "Article", headline: post.title, description: post.metaDescription || post.excerpt, datePublished: post.publishedAt, dateModified: post.updatedAt, author: { "@type": "Organization", name: post.authorName || "PulchriFlow Team" }, publisher: { "@type": "Organization", name: "PulchriFlow" }, mainEntityOfPage: `${siteUrl}/blog/${post.slug}` };
  const date = publishedDate(post.publishedAt, "long");

  return (
    <SiteShell>
      <MarketingTracker eventType="blog_view" entityType="blog_post" entityId={post.slug} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <header className="pg-hero" style={{ paddingBlock: "72px 88px" }}>
        <Orbits rings={[{ width: 760, height: 760, right: -260, top: -300 }]} />
        <div className="wrap" style={{ maxWidth: 880, display: "flex", flexDirection: "column", gap: 22 }}>
          <Link href="/blog" className="pg-link" style={{ color: "var(--on-dark-muted)" }}><ArrowLeft size={16} aria-hidden="true" /> All resources</Link>
          <span className="eyebrow">{post.category || "PulchriFlow"}</span>
          <h1 className="pg-h1" style={{ fontSize: "clamp(36px, 5vw, 64px)" }}>{post.title}</h1>
          {post.excerpt && <p className="lead">{post.excerpt}</p>}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center", fontSize: 14, color: "var(--on-dark-muted)" }}>
            <span>{post.authorName || "PulchriFlow Team"}</span>
            <span aria-hidden="true">·</span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><Clock3 size={14} aria-hidden="true" /> {post.readingTimeMinutes} min read</span>
            {date && (<><span aria-hidden="true">·</span><time dateTime={post.publishedAt}>{date}</time></>)}
          </div>
        </div>
      </header>
      <div className="pg-cream" style={{ paddingBlock: "56px 24px" }}>
        {post.coverImageUrl && (
          <div className="wrap" style={{ maxWidth: 1040, marginBottom: 56 }}>
            <img src={post.coverImageUrl} alt="" style={{ width: "100%", borderRadius: 28, display: "block" }} />
          </div>
        )}
        <article className="wrap pg-prose" style={{ maxWidth: 760 }} dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
      <FinalCta plain eyebrow="PulchriFlow" title="Every way you sell." payoff="One place to run it." sub="Start free and bring your everyday selling into one clearer flow." />
    </SiteShell>
  );
}
