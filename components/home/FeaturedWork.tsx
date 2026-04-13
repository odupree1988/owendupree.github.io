"use client";

import { useEffect, useRef } from "react";
import { ProjectCard, type FlipProject } from "@/components/work/ProjectCard";
import styles from "./FeaturedWork.module.css";
import anim from "@/components/ui/Animations.module.css";

const PROJECTS: FlipProject[] = [
  {
    name: "Kao",
    description:
      "Multi-brand headless commerce platform for 6 consumer brands across the U.S. and Canada. Shared cart, CMS-driven content, and scalable brand-specific storefronts.",
    headline: "6 brands, 1 shared cart",
    tech: ["Hydrogen", "React", "Contentful", "GraphQL"],
    url: "https://mykaoshop.com/",
    gradient: ["#1a3a2a", "#0d1f17"],
    image: "/screenshots/kao.png",
  },
  {
    name: "EnergyBird",
    description:
      "Custom ecommerce storefront for an energy drink brand. Performance-focused build with dynamic product merchandising.",
    headline: "Performance-focused storefront",
    tech: ["Shopify", "Liquid", "JavaScript"],
    url: "https://energybird.com/",
    gradient: ["#1a2e1a", "#0f3a1a"],
    image: "/screenshots/energybird.png",
  },
  {
    name: "Philosophy",
    description:
      "Custom storefront development focused on frontend quality, performance, and merchandising.",
    headline: "Pixel-perfect implementation",
    tech: ["Shopify", "Custom Theme", "3rd Party APIs"],
    url: "https://philosophy.com/",
    gradient: ["#1a2a2e", "#0f3a4a"],
    image: "/screenshots/philosophy.png",
  },
];

const STAGGER = [0.1, 0.25, 0.4];

export function FeaturedWork() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = section.querySelectorAll(`.${anim["fade-in"]}`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(anim["fade-in--visible"]);
          }
        });
      },
      { threshold: 0.1 }
    );

    cards.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles["featured-work"]}>
      <h2 className={styles["featured-work__header"]}>Selected Work</h2>
      <div className={styles["featured-work__grid"]}>
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.name} project={project} delay={STAGGER[i]} />
        ))}
      </div>
    </section>
  );
}
