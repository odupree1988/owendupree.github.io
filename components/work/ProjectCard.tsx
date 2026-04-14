"use client";

import Image from "next/image";
import styles from "./ProjectCard.module.css";
import linkStyles from "@/components/ui/LinkStyles.module.css";
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
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card}
    >
      <div className={styles.card__inner}>
        {/* Front — decorative chrome is hidden, content is exposed */}
        <div className={styles.card__front}>
          {project.image ? (
            <>
              <div className={styles["card__front-image-wrap"]} aria-hidden="true">
                <div className={styles["card__front-browser-bar"]}>
                  <span className={`${chromeStyles.dots} ${chromeStyles["dots--sm"]}`}>
                    <span /><span /><span />
                  </span>
                  <span className={styles["card__front-browser-url"]}>{project.url.replace(/^https?:\/\//, '')}</span>
                </div>
                <div className={styles["card__front-image-inner"]}>
                  <Image
                    src={project.image}
                    alt=""
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

        {/* Back — hide duplicate name/headline, expose unique content */}
        <div className={styles.card__back}>
          <div className={styles["card__back-top"]}>
            <span className={styles["card__back-label"]} aria-hidden="true">About this project</span>
            <div className={styles["card__back-divider"]} aria-hidden="true" />
            <h3 className={styles["card__back-name"]} aria-hidden="true">{project.name}</h3>
            {project.headline && (
              <p className={styles["card__back-headline"]} aria-hidden="true">{project.headline}</p>
            )}
            <p className={styles["card__back-description"]}>{project.description}</p>
          </div>
          <div className={styles["card__back-bottom"]}>
            <div className={styles["card__back-tech"]} role="list" aria-label="Technologies used">
              {project.tech.map((t) => (
                <span key={t} role="listitem" className={pillStyles.pill}>{t}</span>
              ))}
            </div>
            <span className={`${linkStyles["link-primary"]} ${styles["card__back-cta"]}`} aria-hidden="true">
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
