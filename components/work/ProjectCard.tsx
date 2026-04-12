"use client";

import styles from "./ProjectCard.module.css";

export interface FlipProject {
  name: string;
  description: string;
  headline: string;
  tech: string[];
  url: string;
  gradient: [string, string];
}

interface ProjectCardProps {
  project: FlipProject;
  delay?: number;
}

function cls(...names: (string | false | undefined)[]) {
  return names.filter(Boolean).join(" ");
}

export function ProjectCard({ project, delay = 0 }: ProjectCardProps) {
  return (
    <div
      className={cls(styles.card, styles["card--animate"])}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className={styles.card__inner}>
        {/* Front */}
        <div
          className={styles.card__front}
          style={{
            background: `linear-gradient(135deg, ${project.gradient[0]}, ${project.gradient[1]})`,
          }}
        >
          <div className={styles["card__front-overlay"]} />
          <div className={styles["card__front-content"]}>
            <h3 className={styles["card__front-name"]}>{project.name}</h3>
            <p className={styles["card__front-headline"]}>{project.headline}</p>
          </div>
        </div>

        {/* Back */}
        <div className={styles.card__back}>
          <div>
            <span className={styles["card__back-label"]}>About this project</span>
            <h3 className={styles["card__back-name"]}>{project.name}</h3>
            <p className={styles["card__back-description"]}>{project.description}</p>
          </div>
          <div>
            <div className={styles["card__back-tech"]}>
              {project.tech.map((t) => (
                <span key={t} className={styles["card__back-tech-pill"]}>{t}</span>
              ))}
            </div>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles["card__back-link"]}
            >
              View live site &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
