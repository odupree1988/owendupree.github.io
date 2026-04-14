import Link from "next/link";
import { ProjectCard, type FlipProject } from "@/components/work/ProjectCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import styles from "./FeaturedWork.module.css";
import linkStyles from "@/components/ui/LinkStyles.module.css";

const PROJECTS: FlipProject[] = [
  {
    name: "Kao",
    description:
      "Multi-brand headless commerce platform for 6 consumer brands across the U.S. and Canada. Shared cart, CMS-driven content, custom API integrations, custom SEO architecture, and scalable brand-specific storefronts.",
    headline: "6 brands, 1 shared cart",
    tech: ["Hydrogen", "Remix", "Tailwind CSS", "Contentful", "GraphQL", "Shopify"],
    url: "https://mykaoshop.com/",
    gradient: ["#1a3a2a", "#0d1f17"],
    image: "/screenshots/kao.png",
  },
  {
    name: "EnergyBird",
    description:
      "Custom Shopify theme for a supplements brand. Performance-focused build with dynamic product merchandising and custom API integrations.",
    headline: "Custom bundle builder",
    tech: ["Shopify", "Liquid", "Vue.js", "Tailwind CSS", "Shopify Functions"],
    url: "https://energybird.com/",
    gradient: ["#1a2e1a", "#0f3a1a"],
    image: "/screenshots/energybird.png",
  },
  {
    name: "Philosophy",
    description:
      "Custom Shopify theme focused on frontend quality, performance, merchandising, and custom API integrations.",
    headline: "Pixel-perfect implementation",
    tech: ["Shopify", "Liquid", "Vue.js", "JavaScript"],
    url: "https://philosophy.com/",
    gradient: ["#1a2a2e", "#0f3a4a"],
    image: "/screenshots/philosophy.png",
  },
];

export function FeaturedWork() {
  return (
    <section className={styles["featured-work"]}>
      <ScrollReveal>
        <h2 className={styles["featured-work__header"]}>Things I&apos;ve Built</h2>
      </ScrollReveal>
      <ScrollReveal>
        <div className={styles["featured-work__grid"]}>
          {PROJECTS.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <div className={styles["featured-work__cta"]}>
          <Link href="/work" className={linkStyles["link-primary"]}>
            <span className={linkStyles["link-primary__btn"]}>
              <svg aria-hidden="true" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </span>
            <span className={linkStyles["link-primary__label"]}>View all of my work</span>
          </Link>
        </div>
      </ScrollReveal>
    </section>
  );
}
