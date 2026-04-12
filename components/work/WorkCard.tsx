"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/projects";
import styles from "./WorkCard.module.css";

interface WorkCardProps {
  project: Project;
  index: number;
}

export function WorkCard({ project, index }: WorkCardProps) {
  const inner = (
    <div className={styles["work-card"]}>
      <div className={styles["work-card__visual"]}>
        <div
          className={`${styles["work-card__gradient"]} bg-gradient-to-br ${project.gradient}`}
        >
          <span className={styles["work-card__watermark"]}>{project.title}</span>
        </div>
      </div>

      <div className={styles["work-card__body"]}>
        <h3 className={styles["work-card__title"]}>{project.title}</h3>
        <p className={styles["work-card__description"]}>{project.description}</p>
        <div className={styles["work-card__tech"]}>
          {project.tech.map((t) => (
            <span key={t} className={styles["work-card__tech-tag"]}>{t}</span>
          ))}
        </div>
        {project.highlight && (
          <span className={styles["work-card__highlight"]}>{project.highlight}</span>
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
