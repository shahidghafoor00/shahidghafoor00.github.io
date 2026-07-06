import { ArrowRight } from "lucide-react";
import { getLatestPosts } from "@/lib/blog";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { BlogCard } from "@/components/blog/blog-card";

export function BlogPreview() {
  const posts = getLatestPosts(3);

  if (posts.length === 0) return null;

  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Writing"
          title="From the blog"
          description="Notes on shipping software, freelancing, and building with AI."
        />

        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <StaggerItem key={post.slug} className="h-full">
              <BlogCard post={post} />
            </StaggerItem>
          ))}
        </StaggerGroup>

        <div className="mt-14 text-center">
          <Button href="/blog" variant="secondary" size="lg">
            Read the Blog <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>
        </div>
      </div>
    </section>
  );
}
