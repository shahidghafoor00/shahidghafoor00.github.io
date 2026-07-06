import siteData from "@/content/site.json";
import servicesData from "@/content/services.json";
import projectsData from "@/content/projects.json";
import experienceData from "@/content/experience.json";
import skillsData from "@/content/skills.json";
import testimonialsData from "@/content/testimonials.json";
import faqData from "@/content/faq.json";
import processData from "@/content/process.json";
import resumeData from "@/content/resume.json";
import type {
  SiteContent,
  Service,
  Project,
  Experience,
  SkillCategory,
  Testimonial,
  FaqItem,
  ProcessStep,
  ResumeData,
} from "@/types/content";

export const site = siteData as SiteContent;
export const services = servicesData as Service[];
export const projects = projectsData as Project[];
export const experience = experienceData as Experience[];
export const skills = skillsData as SkillCategory[];
export const testimonials = testimonialsData as Testimonial[];
export const faqs = faqData as FaqItem[];
export const process = processData as ProcessStep[];
export const resume = resumeData as ResumeData;

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
