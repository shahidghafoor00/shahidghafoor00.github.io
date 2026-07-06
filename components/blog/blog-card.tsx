import Link from "next/link";
import { format } from "date-fns";
import type { BlogPostMeta } from "@/types/content";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function BlogCard({ post }: { post: BlogPostMeta }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <Card className="flex h-full flex-col overflow-hidden">
        <div className="flex aspect-[16/9] items-center justify-center bg-gradient-to-br from-accent/20 to-surface">
          <Badge>{post.category}</Badge>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <p className="text-xs text-muted">
            {format(new Date(post.date), "MMM d, yyyy")} · {post.readTime}
          </p>
          <h3 className="mt-2 text-lg font-semibold transition-colors group-hover:text-accent">
            {post.title}
          </h3>
          <p className="mt-2 flex-1 text-sm text-muted">{post.excerpt}</p>
          <span className="mt-4 text-sm font-medium text-accent">Read More →</span>
        </div>
      </Card>
    </Link>
  );
}
