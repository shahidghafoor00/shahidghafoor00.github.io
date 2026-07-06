"use client";

import { useMemo, useState } from "react";
import type { Project, ProjectCategory } from "@/types/content";
import { ProjectCard } from "@/components/projects/project-card";
import { cn } from "@/lib/utils";

const FILTERS: { label: string; value: ProjectCategory | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Mobile", value: "mobile" },
  { label: "Backend", value: "backend" },
  { label: "AI", value: "ai" },
  { label: "Web", value: "web" },
  { label: "Open Source", value: "open-source" },
];

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<ProjectCategory | "all">("all");

  const visible = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.category === filter)),
    [projects, filter],
  );

  const availableFilters = FILTERS.filter(
    (f) => f.value === "all" || projects.some((p) => p.category === f.value),
  );

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2" role="tablist" aria-label="Filter projects by category">
        {availableFilters.map((f) => (
          <button
            key={f.value}
            role="tab"
            aria-selected={filter === f.value}
            onClick={() => setFilter(f.value)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              filter === f.value
                ? "border-accent bg-accent text-accent-foreground"
                : "border-border text-muted hover:text-foreground",
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="mt-12 text-center text-muted">No projects in this category yet.</p>
      ) : null}
    </div>
  );
}
