"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types/content";
import { Card } from "@/components/ui/card";
import { GitHubIcon } from "@/components/icons";
import { getGradient } from "@/lib/gradients";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.25 }} className="h-full">
      <Card className="group flex h-full flex-col overflow-hidden">
        <Link href={`/projects/${project.slug}`} className="block">
          <div
            className={`relative flex aspect-video items-center justify-center overflow-hidden bg-gradient-to-br ${getGradient(project.gradient)}`}
          >
            <span className="text-4xl font-semibold text-white/90 transition-transform duration-500 group-hover:scale-110">
              {project.title
                .split(" ")
                .map((w) => w[0])
                .slice(0, 2)
                .join("")}
            </span>
          </div>
        </Link>

        <div className="flex flex-1 flex-col p-6">
          <Link href={`/projects/${project.slug}`}>
            <h3 className="text-lg font-semibold transition-colors group-hover:text-accent">
              {project.title}
            </h3>
          </Link>
          <p className="mt-2 text-sm text-muted">{project.description}</p>

          <ul className="mt-4 flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <li key={tech} className="rounded-full border border-border px-2.5 py-1 text-xs text-muted">
                {tech}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex items-center gap-4 text-sm">
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-1 font-medium text-accent"
            >
              Case Study <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-muted hover:text-foreground"
                aria-label={`${project.title} on GitHub`}
              >
                <GitHubIcon className="h-3.5 w-3.5" />
                Code
              </a>
            ) : null}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
