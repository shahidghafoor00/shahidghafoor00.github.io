import { ArrowRight } from "lucide-react";
import { getFeaturedProjects } from "@/lib/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/projects/project-card";

export function FeaturedProjects() {
  const projects = getFeaturedProjects();

  return (
    <section className="bg-surface/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Selected Work"
          title="Featured projects"
          description="A sample of the products I've helped design, build, and ship."
        />

        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <StaggerItem key={project.slug} className="h-full">
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerGroup>

        <div className="mt-14 text-center">
          <Button href="/projects" variant="secondary" size="lg">
            View All Projects <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>
        </div>
      </div>
    </section>
  );
}
