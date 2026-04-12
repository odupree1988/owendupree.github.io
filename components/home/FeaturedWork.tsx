"use client";

import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/work/ProjectCard";
import { featuredProjects } from "@/data/projects";
import styles from "./FeaturedWork.module.css";

export function FeaturedWork() {
  return (
    <section className={styles["featured-work"]}>
      <div className={styles["featured-work__inner"]}>
        <SectionHeading title="Featured Work" subtitle="Recent projects I've shipped" />
        <div className={styles["featured-work__list"]}>
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
        <div className={styles["featured-work__cta"]}>
          <Link href="/work" className={styles["featured-work__link"]}>
            View all projects &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
