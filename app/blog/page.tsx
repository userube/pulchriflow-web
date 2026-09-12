import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Clock3, Mail, Search, Sparkles, TrendingUp } from "lucide-react";
import AppCta from "../../components/AppCta";
import BrandLogo from "../../components/BrandLogo";
import NewsletterForm from "../../components/NewsletterForm";
import { getBlogPosts } from "../../lib/blog";
import { appLink } from "../../lib/config";

export const metadata: Metadata = { title: "Blog", description: "Practical selling, payment, invoice, and business education from PulchriFlow." };

export default async function BlogPage() {
  const posts = await getBlogPosts();
  const featured = posts.find((post) => post.featured) ?? posts[0];
  const remainingPosts = featured ? posts.filter((post) => post.slug !== featured.slug) : posts;
  const topics = ["Selling online", "Payments", "Customer growth", "Operations", "Storefronts"];
  const starterGuides = [
    "How to turn WhatsApp interest into complete orders",
    "A simple daily sales routine for growing sellers",
    "What every online store needs before paid ads"
  ];

  return (
    <main className="blog-page">
      <header className="landing-nav blog-nav">
        <Link className="brand-mark" href="/"><BrandLogo /></Link>
        <nav className="nav-links"><Link href="/features">Features</Link><Link href="/workflow">Workflow</Link><Link href="/pricing">Pricing</Link><Link href="/blog">Blog</Link></nav>
        <div className="nav-actions"><a className="text-link" href={appLink("/login")}>Log in</a><AppCta label="Start free" /></div>
      </header>

      <section className="blog-hero">
        <div className="blog-hero-copy">
          <p className="eyebrow"><Sparkles size={16} /> PulchriFlow Journal</p>
          <h1>Sharper selling ideas for modern African businesses.</h1>
          <p className="hero-copy">Practical guides for WhatsApp sellers, Instagram brands, service businesses, and growing teams that want cleaner orders, payments, customers, and daily operations.</p>
          <div className="blog-search-shell" aria-label="Blog search">
            <Search size={18} />
            <span>Search-ready knowledge base for sales, checkout, customers, and growth</span>
          </div>
        </div>
        <aside className="blog-newsletter-card">
          <span className="blog-card-icon"><Mail size={20} /></span>
          <h2>Get the best selling playbooks.</h2>
          <p>Useful guides, product updates, and growth notes from the PulchriFlow team.</p>
          <NewsletterForm source="blog" />
        </aside>
      </section>

      <section className="blog-topic-strip" aria-label="Blog topics">
        {topics.map((topic) => <span key={topic}>{topic}</span>)}
      </section>

      {featured ? (
        <section className="blog-featured-section">
          <div className="section-heading">
            <p className="eyebrow">Featured guide</p>
            <h2>Start with the most useful read.</h2>
          </div>
          <Link className="blog-featured-card" href={`/blog/${featured.slug}`}>
            <div>
              <span className="blog-meta"><BookOpen size={16} /> {featured.category || "Guide"} · {featured.readingTimeMinutes} min read</span>
              <h3>{featured.title}</h3>
              <p>{featured.excerpt}</p>
              <span className="blog-read-link">Read article <ArrowRight size={17} /></span>
            </div>
            <div className="blog-featured-visual" aria-hidden="true">
              <span><TrendingUp size={28} /></span>
              <strong>Sales clarity</strong>
              <small>Cleaner orders. Better follow-up. Fewer missed buyers.</small>
            </div>
          </Link>
        </section>
      ) : (
        <section className="blog-empty-state">
          <div>
            <p className="eyebrow">Publishing soon</p>
            <h2>Articles are coming soon.</h2>
            <p>Fresh PulchriFlow guides will appear here once the public content API is connected. For now, this page is ready for launch and styled for the first batch of posts.</p>
          </div>
          <div className="blog-empty-list">
            {starterGuides.map((guide) => <article key={guide}><CheckCircle2 size={18} /><span>{guide}</span></article>)}
          </div>
        </section>
      )}

      {!!remainingPosts.length && (
        <section className="blog-index-section">
          <div className="section-heading">
            <p className="eyebrow">Latest articles</p>
            <h2>Guides for building a calmer commerce workflow.</h2>
          </div>
          <div className="blog-list">
            {remainingPosts.map((post) => (
              <Link className="blog-card" href={`/blog/${post.slug}`} key={post.slug}>
                <span className="blog-meta"><Clock3 size={15} /> {post.category || "PulchriFlow"} · {post.readingTimeMinutes} min read</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <span className="blog-read-link">Read more <ArrowRight size={16} /></span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
