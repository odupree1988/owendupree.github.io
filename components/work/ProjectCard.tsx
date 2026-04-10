"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const inner = (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-[var(--border-hover)] md:flex-row">
      {/* Visual area */}
      <div className="relative aspect-video w-full overflow-hidden md:aspect-auto md:w-[55%]">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.gradient} flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.02]`}
        >
          <span className="select-none font-[family-name:var(--font-heading)] text-5xl font-bold text-white/[0.07] md:text-7xl">
            {project.title}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-center gap-3 p-6 md:p-8">
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-[var(--text-primary)] md:text-xl">
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full bg-[var(--bg-tertiary)] px-2.5 py-1 font-[family-name:var(--font-mono)] text-xs text-[var(--text-tertiary)]"
            >
              {t}
            </span>
          ))}
        </div>
        {project.highlight && (
          <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--accent)]">
            {project.highlight}
          </span>
        )}
      </div>
    </div>
  );

  const card = (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
    >
      {inner}
    </motion.div>
  );

  if (project.link && project.link !== "#") {
    return (
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        {card}
      </a>
    );
  }

  return card;
}
