"use client";

/* eslint-disable @next/next/no-img-element -- CMS-provided remote image URLs are not known at build time. */
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ScrollTrigger } from "@/lib/gsap";

export type JournalCard = {
  slug: string;
  title: string;
  excerpt?: string;
  category?: string;
  cover?: string;
  readingTimeMinutes: number;
  date?: string;
};

const looks = [
  { bg: "var(--forest)", ring: "color-mix(in srgb, var(--lime) 30%, transparent)", fg: "var(--lime)" },
  { bg: "var(--lime)", ring: "rgba(9,34,29,0.22)", fg: "var(--forest)" },
  { bg: "#E7DCC6", ring: "rgba(9,34,29,0.16)", fg: "var(--brand)" },
  { bg: "var(--brand)", ring: "rgba(250,249,245,0.24)", fg: "var(--on-dark)" },
];

export function Cover({ post, index, height = 190, large = false }: { post: JournalCard; index: number; height?: number | string; large?: boolean }) {
  if (post.cover) {
    return <img src={post.cover} alt="" style={{ width: "100%", height, objectFit: "cover", display: "block" }} />;
  }
  const look = looks[index % looks.length];
  const mark = (post.category || post.title).trim().charAt(0).toUpperCase();
  return (
    <div aria-hidden="true" style={{ height, position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", background: look.bg }}>
      <span style={{ position: "absolute", width: large ? 520 : 260, height: large ? 520 : 260, borderRadius: "50%", border: `1px solid ${look.ring}` }} />
      <span style={{ position: "absolute", width: large ? 320 : 150, height: large ? 320 : 150, borderRadius: "50%", border: `1px solid ${look.ring}` }} />
      <span className="serif" style={{ position: "relative", fontSize: large ? 120 : 48, lineHeight: 1, color: look.fg }}>{mark}</span>
    </div>
  );
}

/** Topic filter + article grid. Topics come from the posts themselves. */
export default function JournalGrid({ posts }: { posts: JournalCard[] }) {
  const topics = useMemo(() => [...new Set(posts.map((p) => p.category).filter(Boolean))] as string[], [posts]);
  const [topic, setTopic] = useState<string | null>(null);
  const visible = topic ? posts.filter((p) => p.category === topic) : posts;

  // Filtering moves cards; re-measure so scroll reveals fire at their new positions.
  useEffect(() => {
    const id = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(id);
  }, [topic]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
      {topics.length > 1 && (
        <div role="group" aria-label="Filter by topic" style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {[null, ...topics].map((t) => (
            <button key={t ?? "all"} type="button" className="pg-chipbtn" aria-pressed={topic === t} onClick={() => setTopic(t)}>
              {t ?? "All"}
            </button>
          ))}
        </div>
      )}
      <p className="sr-only" role="status" aria-live="polite">
        {visible.length} {visible.length === 1 ? "article" : "articles"}{topic ? ` in ${topic}` : ""}
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16 }}>
        {visible.map((a, i) => (
          <Link data-reveal key={a.slug} href={`/blog/${a.slug}`} className="pg-card" style={{ padding: 0, gap: 0, overflow: "hidden" }}>
            <Cover post={a} index={i + 1} />
            <div style={{ padding: 22, display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
              <span className="pg-label" style={{ color: "var(--brand)" }}>{a.category || "PulchriFlow"}</span>
              <b style={{ fontSize: 20, fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 1.25 }}>{a.title}</b>
              {a.excerpt && <span className="pg-body" style={{ fontSize: 14 }}>{a.excerpt}</span>}
              <span style={{ marginTop: "auto", paddingTop: 10, display: "flex", justifyContent: "space-between", fontSize: 13, color: "var(--muted)" }}>
                <span>{a.readingTimeMinutes} min read{a.date ? ` · ${a.date}` : ""}</span>
                <ArrowRight size={16} color="var(--brand)" aria-hidden="true" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
