import type { MetadataRoute } from "next";
import { getBlogPosts } from "../lib/blog";
import { siteUrl } from "../lib/config";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages = ["", "/features", "/workflow", "/pricing", "/blog", "/privacy", "/terms", "/contact", "/press"].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date()
  }));
  const posts = await getBlogPosts();
  return [
    ...staticPages,
    ...posts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: post.updatedAt ? new Date(post.updatedAt) : new Date()
    }))
  ];
}
