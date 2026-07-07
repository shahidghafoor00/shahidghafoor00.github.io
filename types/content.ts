export interface SiteStat {
  value: number;
  suffix: string;
  label: string;
}

export interface SiteContent {
  name: string;
  title: string;
  tagline: string;
  subtitle: string;
  location: string;
  languages: string[];
  availability: string;
  industries: string[];
  email: string;
  phone: string;
  url: string;
  resumeUrl: string;
  bookCallUrl: string;
  social: {
    github: string;
    linkedin: string;
    whatsapp: string;
  };
  stats: SiteStat[];
  techLogos: string[];
  bio: {
    short: string;
    paragraphs: string[];
  };
}

export interface Service {
  slug: string;
  title: string;
  icon: string;
  description: string;
  items: string[];
}

export type ProjectCategory = "mobile" | "backend" | "ai" | "web" | "open-source";

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  gradient: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  rating: number;
  review: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ProcessStep {
  step: string;
  description: string;
}

export interface ResumeData {
  summary: string;
  education: { school: string; degree: string; duration: string }[];
  certificates: string[];
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  tags: string[];
  readTime: string;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
}
