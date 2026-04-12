"use client";

import { useEffect, useRef } from "react";
import { ProjectCard, type FlipProject } from "@/components/work/ProjectCard";
import styles from "./FeaturedWork.module.css";
import cardStyles from "@/components/work/ProjectCard.module.css";

const PROJECTS: FlipProject[] = [
  {
    name: "Kao Brands",
    description:
      "Multi-brand headless commerce platform for 6 consumer brands across the U.S. and Canada. Shared cart, CMS-driven content, and scalable brand-specific storefronts.",
    headline: "6 brands, 1 shared cart",
    tech: ["Hydrogen", "React", "Contentful", "GraphQL"],
    url: "https://mykaoshop.com/",
    gradient: ["#1a3a2a", "#0d1f17"],
    image: "/mykaoshop.com_.png",
  },
  {
    name: "Belnick",
    description:
      "Algolia Search and Discovery implementation across 10 ecommerce storefronts. Advanced search, filtering, and product discovery for high-catalog retailers.",
    headline: "10 storefronts launched",
    tech: ["Algolia", "Shopify", "JavaScript", "Liquid"],
    url: "https://www.bizchair.com/",
    gradient: ["#2a1a1a", "#1f0d0d"],
  },
  {
    name: "Red Bull",
    description:
      "Merchandising and product recommendation engine powering You May Also Like, Recently Viewed, and Goes Well With experiences.",
    headline: "Custom recommendation engine",
    tech: ["Vue.js", "Rebuy", "Shopify Functions"],
    url: "https://www.redbullshopus.com/",
    gradient: ["#1a1a3a", "#0d0d1f"],
  },
];

const STAGGER = [0.1, 0.25, 0.4];

export function FeaturedWork() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = section.querySelectorAll(`.${cardStyles["card--animate"]}`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(cardStyles["card--animate-visible"]);
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
