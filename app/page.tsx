import { Hero } from "@/components/sections/hero";
import { TrustStats } from "@/components/sections/trust-stats";
import { AboutPreview } from "@/components/sections/about-preview";
import { ServicesSection } from "@/components/sections/services-section";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { ExperiencePreview } from "@/components/sections/experience-preview";
import { SkillsSection } from "@/components/sections/skills-section";
import { ProcessSection } from "@/components/sections/process-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { BlogPreview } from "@/components/sections/blog-preview";
import { FaqSection } from "@/components/sections/faq-section";
import { ContactCta } from "@/components/sections/contact-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStats />
      <AboutPreview />
      <ServicesSection />
      <FeaturedProjects />
      <ExperiencePreview />
      <SkillsSection />
      <ProcessSection />
      <TestimonialsSection />
      <BlogPreview />
      <FaqSection />
      <ContactCta />
    </>
  );
}
