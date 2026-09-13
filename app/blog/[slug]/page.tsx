/* eslint-disable @next/next/no-img-element -- CMS-provided remote image URLs are not known at build time. */
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock3 } from "lucide-react";
import { notFound } from "next/navigation";
import AppCta from "../../../components/AppCta";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import MarketingTracker from "../../../components/MarketingTracker";
import { getBlogPost } from "../../../lib/blog";
import { siteUrl } from "../../../lib/config";

type Props = { params: Promise<{ slug: string }> };

function publishedDate(value?: string) {
  if (!value) return null;
  return new Intl.DateTimeFormat("en-NG", { day: "numeric", month: "long", year: "numeric" }).format(new Date(value));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.seoTitle || post.title,
    description: post.metaDescription || post.excerpt,
    alternates: { canonical: post.canonicalUrl || `${siteUrl}/blog/${post.slug}` },
    openGraph: { type: "article", title: post.ogTitle || post.title, description: post.ogDescription || post.metaDescription || post.excerpt, url: `${siteUrl}/blog/${post.slug}`, images: post.ogImageUrl || post.coverImageUrl ? [post.ogImageUrl || post.coverImageUrl || ""] : undefined, publishedTime: post.publishedAt, modifiedTime: post.updatedAt },
    twitter: { card: "summary_large_image", title: post.ogTitle || post.title, description: post.ogDescription || post.metaDescription || post.excerpt }
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) notFound();
  const articleJsonLd = { "@context": "https://schema.org", "@type": "Article", headline: post.title, description: post.metaDescription || post.excerpt, datePublished: post.publishedAt, dateModified: post.updatedAt, author: { "@type": "Organization", name: post.authorName || "PulchriFlow Team" }, publisher: { "@type": "Organization", name: "PulchriFlow" }, mainEntityOfPage: `${siteUrl}/blog/${post.slug}` };

  return (
    <div className="proof-page resource-article-page">
      <Header />
      <main>
        <MarketingTracker eventType="blog_view" entityType="blog_post" entityId={post.slug} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
        <header className="resource-article-header"><div className="marketing-container"><Link href="/blog" className="resource-back"><ArrowLeft size={16} /> All resources</Link><p className="proof-eyebrow"><span /> {post.category || "PULCHRIFLOW"}</p><h1>{post.title}</h1>{post.excerpt && <p>{post.excerpt}</p>}<div className="resource-article-meta"><span>PulchriFlow Team</span><i /> <span><Clock3 size={14} /> {post.readingTimeMinutes} min read</span>{publishedDate(post.publishedAt) && <><i /> <span>{publishedDate(post.publishedAt)}</span></>}</div></div></header>
        {post.coverImageUrl && <div className="marketing-container resource-cover"><img src={post.coverImageUrl} alt="" /></div>}
        <article className="resource-article-content" dangerouslySetInnerHTML={{ __html: post.content }} />
        <section className="resource-article-cta"><div className="marketing-container"><p className="proof-eyebrow"><span /> PULCHRIFLOW</p><h2>Every way you sell. One place to run it.</h2><AppCta label="Start Free" /></div></section>
      </main>
      <Footer />
    </div>
  );
}
