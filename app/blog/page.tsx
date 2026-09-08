import type { Metadata } from "next";
import Link from "next/link";
import NewsletterForm from "../../components/NewsletterForm";
import { getBlogPosts } from "../../lib/blog";

export const metadata: Metadata = { title: "Blog", description: "Practical selling, payment, invoice, and business education from PulchriFlow." };

export default async function BlogPage() {
  const posts = await getBlogPosts();
  const featured = posts.find((post) => post.featured) ?? posts[0];
  return (
    <main className="section">
      <h1>PulchriFlow Blog</h1>
      <p className="lead">Practical guides for selling online, managing sales, sending invoices, and growing with less manual work.</p>
      <NewsletterForm source="blog" />
      {featured && <Link className="card" style={{ display: "block", margin: "24px 0" }} href={`/blog/${featured.slug}`}><div className="eyebrow">Featured</div><h2>{featured.title}</h2><p>{featured.excerpt}</p></Link>}
      {!posts.length && <section className="card" style={{ marginTop: 24 }}><h2>Articles are coming soon.</h2><p>Fresh PulchriFlow guides will appear here once the public content API is connected.</p></section>}
      <div className="blog-list">
        {posts.map((post) => <Link className="card" href={`/blog/${post.slug}`} key={post.slug}><h3>{post.title}</h3><p>{post.excerpt}</p><p>{post.category} · {post.readingTimeMinutes} min read</p></Link>)}
      </div>
    </main>
  );
}
