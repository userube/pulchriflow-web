import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock3, Mail } from "lucide-react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import NewsletterForm from "../../components/NewsletterForm";
import { getBlogPosts } from "../../lib/blog";

export const metadata: Metadata = {
  title: "Resources",
  description: "Practical resources for running a better business with clearer sales, payments, customers, and records."
};

function publishedDate(value?: string) {
  if (!value) return null;
  return new Intl.DateTimeFormat("en-NG", { day: "numeric", month: "short", year: "numeric" }).format(new Date(value));
}

export default async function BlogPage() {
  const posts = await getBlogPosts();
  const featured = posts.find((post) => post.featured) ?? posts[0];
  const remainingPosts = featured ? posts.filter((post) => post.slug !== featured.slug) : [];
  const topics = [...new Set(posts.map((post) => post.category).filter(Boolean))] as string[];

  return (
    <div className="proof-page resources-page">
      <Header />
      <main>
        <section className="resources-hero">
          <div className="marketing-container resources-hero-grid">
            <div>
              <p className="proof-eyebrow"><span /> PULCHRIFLOW RESOURCES</p>
              <h1>Resources for running a better business.</h1>
              <p>Practical notes for keeping sales, payments, customers and the everyday work behind them in order.</p>
              {!!topics.length && <div className="resources-topics" aria-label="Article topics">{topics.map((topic) => <span key={topic}>{topic}</span>)}</div>}
            </div>
            <aside className="resources-newsletter">
              <Mail size={19} />
              <h2>Useful notes, when they are useful.</h2>
              <p>Occasional practical guides and product updates from the PulchriFlow team.</p>
              <NewsletterForm source="resources" />
            </aside>
          </div>
        </section>

        {featured ? (
          <section className="resources-featured">
            <div className="marketing-container">
              <p className="proof-eyebrow"><span /> FEATURED READING</p>
              <Link href={`/blog/${featured.slug}`} className="resources-featured-link">
                <div>
                  <span className="resources-meta">{featured.category || "PulchriFlow"} <i /> {featured.readingTimeMinutes} min read {publishedDate(featured.publishedAt) && <><i /> {publishedDate(featured.publishedAt)}</>}</span>
                  <h2>{featured.title}</h2>
                  {featured.excerpt && <p>{featured.excerpt}</p>}
                  <span className="resources-read-link">Read article <ArrowRight size={17} /></span>
                </div>
              </Link>
            </div>
          </section>
        ) : (
          <section className="resources-empty">
            <div className="marketing-container">
              <p className="proof-eyebrow"><span /> COMING SOON</p>
              <h2>Useful business notes are on the way.</h2>
              <p>We are preparing practical resources for merchants who want a clearer view of their sales and day-to-day operations.</p>
            </div>
          </section>
        )}

        {!!remainingPosts.length && (
          <section className="resources-list-section">
            <div className="marketing-container">
              <div className="resources-section-heading"><p className="proof-eyebrow"><span /> LATEST</p><h2>Keep the business moving.</h2></div>
              <div className="resources-list">
                {remainingPosts.map((post, index) => <Link href={`/blog/${post.slug}`} className="resources-list-item" key={post.slug}>
                  <span className="resources-list-number">{String(index + 1).padStart(2, "0")}</span>
                  <div><span className="resources-meta">{post.category || "PulchriFlow"} <i /> <Clock3 size={14} /> {post.readingTimeMinutes} min read</span><h3>{post.title}</h3>{post.excerpt && <p>{post.excerpt}</p>}</div>
                  <ArrowRight size={20} />
                </Link>)}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
