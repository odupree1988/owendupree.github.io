"use client";

import Image from "next/image";
import styles from "./ProjectCard.module.css";
import linkStyles from "@/components/ui/LinkStyles.module.css";
import anim from "@/components/ui/Animations.module.css";
import chromeStyles from "@/components/ui/BrowserChrome.module.css";
import pillStyles from "@/components/ui/Pills.module.css";

export interface FlipProject {
  name: string;
  description: string;
  headline: string;
  tech: string[];
  url: string;
  gradient: [string, string];
  image?: string;
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
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cls(styles.card, anim["fade-in"])}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className={styles.card__inner}>
        {/* Front */}
        <div
          className={styles.card__front}
        >
          {project.image ? (
            <>
              <div className={styles["card__front-image-wrap"]}>
                <div className={styles["card__front-browser-bar"]}>
                  <span className={`${chromeStyles.dots} ${chromeStyles["dots--sm"]}`}>
                    <span /><span /><span />
                  </span>
                  <span className={styles["card__front-browser-url"]}>{project.url.replace(/^https?:\/\//, '')}</span>
                </div>
                <div className={styles["card__front-image-inner"]}>
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className={styles["card__front-image"]}
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
              </div>
              <div className={styles["card__front-content"]}>
                <h3 className={styles["card__front-name"]}>{project.name}</h3>
                <p className={styles["card__front-headline"]}>{project.headline}</p>
              </div>
            </>
          ) : (
            <>
              <div className={styles["card__front-overlay"]} />
              <div className={styles["card__front-content"]}>
                <h3 className={styles["card__front-name"]}>{project.name}</h3>
                <p className={styles["card__front-headline"]}>{project.headline}</p>
              </div>
            </>
          )}
        </div>

        {/* Back */}
        <div className={styles.card__back}>
          <div className={styles["card__back-top"]}>
            <span className={styles["card__back-label"]}>About this project</span>
            <div className={styles["card__back-divider"]} />
            <h3 className={styles["card__back-name"]}>{project.name}</h3>
            {project.headline && (
              <p className={styles["card__back-headline"]}>{project.headline}</p>
            )}
            <p className={styles["card__back-description"]}>{project.description}</p>
          </div>
          <div className={styles["card__back-bottom"]}>
            <div className={styles["card__back-tech"]}>
              {project.tech.map((t) => (
                <span key={t} className={pillStyles.pill}>{t}</span>
              ))}
            </div>
            <span className={`${linkStyles["link-primary"]} ${styles["card__back-cta"]} hidden sm:inline-flex`}>
              <span className={linkStyles["link-primary__btn"]}>
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </span>
              <span className={linkStyles["link-primary__label"]}>View live site</span>
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}
