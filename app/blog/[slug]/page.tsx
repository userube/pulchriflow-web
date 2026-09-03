import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AppCta from "../../../components/AppCta";
import MarketingTracker from "../../../components/MarketingTracker";
import { siteUrl } from "../../../lib/config";
import { getBlogPost } from "../../../lib/blog";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.seoTitle || post.title,
    description: post.metaDescription || post.excerpt,
    alternates: { canonical: post.canonicalUrl || `${siteUrl}/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.ogTitle || post.title,
      description: post.ogDescription || post.metaDescription || post.excerpt,
      url: `${siteUrl}/blog/${post.slug}`,
      images: post.ogImageUrl || post.coverImageUrl ? [post.ogImageUrl || post.coverImageUrl || ""] : undefined,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt
    },
    twitter: { card: "summary_large_image", title: post.ogTitle || post.title, description: post.ogDescription || post.metaDescription || post.excerpt }
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) notFound();
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription || post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: { "@type": "Organization", name: post.authorName || "PulchriFlow" },
    publisher: { "@type": "Organization", name: "PulchriFlow" },
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`
  };
  return (
    <main className="article">
      <MarketingTracker eventType="blog_view" entityType="blog_post" entityId={post.slug} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <div className="eyebrow">{post.category || "PulchriFlow"} · {post.readingTimeMinutes} min read</div>
      <h1>{post.title}</h1>
      <p className="lead">{post.excerpt}</p>
      <article className="article-content" dangerouslySetInnerHTML={{ __html: post.content }} />
      <section className="card" style={{ marginTop: 32 }}>
        <h2>Still recording sales manually?</h2>
        <p>Record every sale and know exactly what you sold today with PulchriFlow.</p>
        <AppCta label="Start tracking sales" />
      </section>
    </main>
  );
}
