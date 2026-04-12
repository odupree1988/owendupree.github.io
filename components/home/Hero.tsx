"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./Hero.module.css";

const SKILLS = [
  "React",
  "Shopify",
  "Hydrogen",
  "TypeScript",
  "GraphQL",
  "Next.js",
  "Headless CMS",
  "Performance",
];

const STATS = [
  { value: "4+", label: "Years" },
  { value: "6+", label: "Brands" },
  { value: "10+", label: "Storefronts" },
];

function cls(...names: string[]) {
  return names.join(" ");
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const animated = section.querySelectorAll(
      `.${styles["hero__animate-in"]}, .${styles.hero__divider}`
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            if (el.classList.contains(styles.hero__divider)) {
              el.classList.add(styles["hero__divider--visible"]);
            } else {
              el.classList.add(styles["hero__animate-in--visible"]);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    animated.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.hero}>
      {/* Scroll indicator */}
      <div className={styles.hero__scroll}>
        <span className={styles["hero__scroll-text"]}>SCROLL</span>
        <div className={styles["hero__scroll-line"]} />
      </div>

      {/* Decorative rects */}
      <div className={styles.hero__deco}>
        <div className={styles["hero__deco-rect--filled"]} />
        <div className={styles["hero__deco-rect--outlined"]} />
      </div>

      {/* Content */}
      <div className={styles.hero__content}>
        {/* Label */}
        <div
          className={cls(styles.hero__label, styles["hero__animate-in"])}
          style={{ transitionDelay: "0.2s" }}
        >
          <div className={styles["hero__label-line"]} />
          <span className={styles["hero__label-text"]}>FRONTEND ENGINEER</span>
        </div>

        {/* Name */}
        <h1 className={styles.hero__name}>
          <span
            className={cls(styles["hero__name-first"], styles["hero__animate-in"])}
            style={{ transitionDelay: "0.35s" }}
          >
            OWEN
          </span>
          <span
            className={cls(styles["hero__name-last"], styles["hero__animate-in"])}
            style={{ transitionDelay: "0.5s" }}
          >
            DUPREE
          </span>
        </h1>

        {/* Divider */}
        <div className={styles.hero__divider} style={{ transitionDelay: "0.65s" }} />

        {/* Columns */}
        <div
          className={cls(styles.hero__columns, styles["hero__animate-in"])}
          style={{ transitionDelay: "0.75s" }}
        >
          <p className={styles.hero__description}>
            I work with brands to build websites and digital experiences that
            feel modern, approachable, and built with care — from the overall
            look and feel down to the details that make things work.
          </p>

          <div className={styles.hero__actions}>
            <div className={styles["hero__actions-inner"]}>
              <Link href="/work" className={styles["hero__cta-button"]}>
                <svg
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </Link>
              <Link href="/work" className={styles["hero__cta-label"]}>View work</Link>
              <div className={styles["hero__actions-divider"]} />
              <div className={styles.hero__location}>
                <span className={styles["hero__location-label"]}>BASED IN</span>
                <span className={styles["hero__location-value"]}>Florida, US</span>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div
          className={cls(styles.hero__skills, styles["hero__animate-in"])}
          style={{ transitionDelay: "0.9s" }}
        >
          {SKILLS.map((skill) => (
            <span key={skill} className={styles.hero__skill}>{skill}</span>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div
        className={cls(styles.hero__stats, styles["hero__animate-in"])}
        style={{ transitionDelay: "1.05s" }}
      >
        {STATS.map((stat, i) => (
          <div key={stat.label} style={{ display: "contents" }}>
            {i > 0 && <div className={styles["hero__stat-divider"]} />}
            <div className={styles.hero__stat}>
              <span className={styles["hero__stat-value"]}>{stat.value}</span>
              <span className={styles["hero__stat-label"]}>{stat.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
