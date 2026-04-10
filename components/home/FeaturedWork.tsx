"use client";

import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/work/ProjectCard";
import { featuredProjects } from "@/data/projects";

export function FeaturedWork() {
  return (
    <section className="bg-[var(--bg-secondary)] px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading title="Featured Work" subtitle="Recent projects I've shipped" />

        <div className="flex flex-col gap-8">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/work"
            className="text-sm font-medium text-[var(--accent)] transition-colors hover:underline"
          >
            View all projects &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
