import { apiUrl } from "./config";

export type BlogPost = {
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  coverImageUrl?: string;
  category?: string;
  tags: string[];
  seoTitle?: string;
  metaDescription?: string;
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImageUrl?: string;
  featured: boolean;
  authorName?: string;
  publishedAt?: string;
  updatedAt?: string;
  readingTimeMinutes: number;
};

export async function getBlogPosts(): Promise<BlogPost[]> {
  const response = await fetch(`${apiUrl.replace(/\/$/, "")}/api/public/blog?size=50`, {
    next: { revalidate: 300, tags: ["blog"] }
  });
  if (!response.ok) return [];
  const data = (await response.json()) as { items?: BlogPost[] };
  return data.items ?? [];
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const response = await fetch(`${apiUrl.replace(/\/$/, "")}/api/public/blog/${encodeURIComponent(slug)}`, {
    next: { revalidate: 300, tags: [`blog:${slug}`] }
  });
  if (response.status === 404) return null;
  if (!response.ok) throw new Error("Blog article could not be loaded");
  return response.json() as Promise<BlogPost>;
}
