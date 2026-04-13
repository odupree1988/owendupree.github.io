"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";
import styles from "./WorkCard.module.css";
import chromeStyles from "@/components/ui/BrowserChrome.module.css";
import pillStyles from "@/components/ui/Pills.module.css";

interface WorkCardProps {
  project: Project;
  index: number;
}

export function WorkCard({ project, index }: WorkCardProps) {
  const inner = (
    <div className={styles["work-card"]}>
      <div className={styles["work-card__visual"]}>
        {project.image ? (
          <div className={styles["work-card__browser"]}>
            <div className={styles["work-card__browser-bar"]}>
              <span className={`${chromeStyles.dots} ${chromeStyles["dots--sm"]}`}>
                <span /><span /><span />
              </span>
              <span className={styles["work-card__browser-url"]}>
                {project.link.replace(/^https?:\/\//, "")}
              </span>
            </div>
            <div className={styles["work-card__browser-body"]}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className={styles["work-card__image"]}
                sizes="(min-width: 768px) 55vw, 100vw"
              />
            </div>
          </div>
        ) : (
          <div
            className={`${styles["work-card__gradient"]} bg-gradient-to-br ${project.gradient}`}
          >
            <span className={styles["work-card__watermark"]}>{project.title}</span>
          </div>
        )}
      </div>

      <div className={styles["work-card__body"]}>
        <h3 className={styles["work-card__title"]}>{project.title}</h3>
        {project.wip && <span className={styles["work-card__wip"]}>WIP</span>}
        {project.highlight && (
          <span className={styles["work-card__highlight"]}>{project.highlight}</span>
        )}
        <p className={styles["work-card__description"]}>{project.description}</p>
        <div className={styles["work-card__tech"]}>
          {project.tech.map((t) => (
            <span key={t} className={pillStyles.pill}>{t}</span>
          ))}
        </div>
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
