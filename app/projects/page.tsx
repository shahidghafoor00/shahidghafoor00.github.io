import type { Metadata } from "next";
import { projects } from "@/lib/content";
import { PageHeader } from "@/components/ui/page-header";
import { ProjectsGrid } from "@/components/projects/projects-grid";

export const metadata: Metadata = {
  title: "Projects",
  description: "A selection of mobile, backend, AI, and web products I've designed and built.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Projects"
        description="A selection of mobile, backend, AI, and web products I've designed, built, and shipped."
      />
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <ProjectsGrid projects={projects} />
        </div>
      </section>
    </>
  );
}
