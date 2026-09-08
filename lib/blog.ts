import { apiEndpoint } from "./config";

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
  const endpoint = apiEndpoint("/api/public/blog?size=50");
  if (!endpoint) return [];

  try {
    const response = await fetch(endpoint, {
      next: { revalidate: 300, tags: ["blog"] }
    });
    if (!response.ok) return [];
    const data = (await response.json()) as { items?: BlogPost[] };
    return data.items ?? [];
  } catch {
    return [];
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const endpoint = apiEndpoint(`/api/public/blog/${encodeURIComponent(slug)}`);
  if (!endpoint) return null;

  try {
    const response = await fetch(endpoint, {
      next: { revalidate: 300, tags: [`blog:${slug}`] }
    });
    if (!response.ok) return null;
    return response.json() as Promise<BlogPost>;
  } catch {
    return null;
  }
}
