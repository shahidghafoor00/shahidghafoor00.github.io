import type { Metadata } from "next";
import { Download, GraduationCap, Award, Mail, Phone, MapPin } from "lucide-react";
import { site, experience, skills, resume, getFeaturedProjects } from "@/lib/content";
import { PageHeader } from "@/components/ui/page-header";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Resume",
  description: `Professional resume for ${site.name}, ${site.title}.`,
};

export default function ResumePage() {
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      <PageHeader eyebrow="Resume" title={`${site.name} — ${site.title}`} />

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted">
              <a href={`mailto:${site.email}`} className="flex items-center gap-1.5 hover:text-foreground">
                <Mail className="h-4 w-4 text-accent" aria-hidden />
                {site.email}
              </a>
              <a href={`tel:${site.phone.replace(/\s+/g, "")}`} className="flex items-center gap-1.5 hover:text-foreground">
                <Phone className="h-4 w-4 text-accent" aria-hidden />
                {site.phone}
              </a>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-accent" aria-hidden />
                {site.location}
              </span>
            </div>

            <div className="mt-6">
              <Button href={site.resumeUrl} size="lg">
                <Download className="h-4 w-4" aria-hidden />
                Download PDF
              </Button>
            </div>
          </div>

          <Reveal>
            <Card className="p-8">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">Summary</h2>
              <p className="mt-3 text-muted text-pretty">{resume.summary}</p>
            </Card>
          </Reveal>

          <Reveal delay={0.05} className="mt-8">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">Experience</h2>
            <div className="mt-4 space-y-4">
              {experience.map((item) => (
                <Card key={item.company} className="p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-semibold">
                      {item.role} · {item.company}
                    </h3>
                    <span className="text-sm text-accent">{item.duration}</span>
                  </div>
                  <ul className="mt-3 space-y-1.5">
                    {item.achievements.map((a) => (
                      <li key={a} className="flex gap-2 text-sm text-muted">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="mt-8">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">
              Selected Projects
            </h2>
            <Card className="mt-4 divide-y divide-border p-0">
              {featuredProjects.map((project) => (
                <div key={project.slug} className="p-5">
                  <p className="font-medium">{project.title}</p>
                  <p className="mt-1 text-sm text-muted">{project.technologies.join(", ")}</p>
                </div>
              ))}
            </Card>
          </Reveal>

          <Reveal delay={0.15} className="mt-8">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">Skills</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {skills.map((group) => (
                <Card key={group.category} className="p-5">
                  <p className="text-sm font-semibold">{group.category}</p>
                  <p className="mt-1 text-sm text-muted">{group.skills.join(", ")}</p>
                </Card>
              ))}
            </div>
          </Reveal>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <Reveal delay={0.2}>
              <Card className="h-full p-6">
                <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted">
                  <GraduationCap className="h-4 w-4 text-accent" aria-hidden />
                  Education
                </h2>
                <div className="mt-3 space-y-3">
                  {resume.education.map((edu) => (
                    <div key={edu.school}>
                      <p className="font-medium">{edu.degree}</p>
                      <p className="text-sm text-muted">
                        {edu.school} · {edu.duration}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            </Reveal>

            <Reveal delay={0.25}>
              <Card className="h-full p-6">
                <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted">
                  <Award className="h-4 w-4 text-accent" aria-hidden />
                  Certificates
                </h2>
                <ul className="mt-3 space-y-2">
                  {resume.certificates.map((cert) => (
                    <li key={cert} className="text-sm text-muted">
                      {cert}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
