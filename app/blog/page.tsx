import type { Metadata } from "next";
import { getAllPosts, getAllTags } from "@/lib/blog";
import { PageHeader } from "@/components/ui/page-header";
import { BlogList } from "@/components/blog/blog-list";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on shipping software, freelancing, and building with AI.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <>
      <PageHeader
        eyebrow="Writing"
        title="Blog"
        description="Notes on shipping software, freelancing, and building with AI."
      />
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <BlogList posts={posts} tags={tags} />
        </div>
      </section>
    </>
  );
}
