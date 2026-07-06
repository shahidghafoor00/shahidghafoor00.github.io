import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects, getProjectBySlug, site } from "@/lib/content";
import { getGradient } from "@/lib/gradients";
import { GitHubIcon } from "@/components/icons";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: `${site.url}/projects/${slug}`,
    },
    openGraph: {
      title: project.title,
      description: project.description,
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <article className="pb-24">
      <div className={`relative flex h-64 items-end overflow-hidden bg-gradient-to-br sm:h-80 ${getGradient(project.gradient)}`}>
        <div className="mx-auto w-full max-w-4xl px-6 pb-10">
          <Reveal>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1 text-sm font-medium text-white/80 hover:text-white"
            >
              <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
              All Projects
            </Link>
            <h1 className="mt-4 text-3xl font-semibold text-white sm:text-5xl">{project.title}</h1>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto mt-12 grid max-w-4xl gap-12 px-6 lg:grid-cols-[1fr_260px]">
        <div>
          <Reveal>
            <p className="text-lg text-muted text-pretty">{project.longDescription}</p>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="mt-10 text-xl font-semibold">Key Features</h2>
            <ul className="mt-4 space-y-3">
              {project.features.map((feature) => (
                <li key={feature} className="flex gap-3 text-muted">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {feature}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <Card className="sticky top-24 space-y-6 p-6">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
                Technologies
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <li key={tech} className="rounded-full border border-border px-2.5 py-1 text-xs">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              {project.liveUrl ? (
                <Button href={project.liveUrl} className="w-full">
                  Live Demo <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Button>
              ) : null}
              {project.githubUrl ? (
                <Button href={project.githubUrl} variant="secondary" className="w-full">
                  <GitHubIcon className="h-4 w-4" />
                  View Code
                </Button>
              ) : null}
              <Button href="/contact" variant="ghost" className="w-full">
                Discuss a similar project
              </Button>
            </div>
          </Card>
        </Reveal>
      </div>
    </article>
  );
}
