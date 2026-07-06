import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { BlogPost, BlogPostMeta } from "@/types/content";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

function readSlugs(): string[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

function readPostFile(slug: string): BlogPost {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const stats = readingTime(content);

  return {
    slug,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    category: data.category,
    tags: data.tags ?? [],
    readTime: `${Math.max(1, Math.ceil(stats.minutes))} min read`,
    content,
  };
}

export function getAllPosts(): BlogPost[] {
  return readSlugs()
    .map(readPostFile)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllPostSlugs(): string[] {
  return readSlugs();
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  try {
    return readPostFile(slug);
  } catch {
    return undefined;
  }
}

export function getLatestPosts(count: number): BlogPostMeta[] {
  return getAllPosts().slice(0, count);
}

export function getAllCategories(): string[] {
  const categories = new Set(getAllPosts().map((post) => post.category));
  return Array.from(categories);
}

export function getAllTags(): string[] {
  const tags = new Set(getAllPosts().flatMap((post) => post.tags));
  return Array.from(tags);
}

export function getRelatedPosts(slug: string, count: number): BlogPostMeta[] {
  const current = getPostBySlug(slug);
  if (!current) return [];

  return getAllPosts()
    .filter((post) => post.slug !== slug)
    .map((post) => ({
      post,
      score: post.tags.filter((tag) => current.tags.includes(tag)).length,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, count)
    .map(({ post }) => post);
}
