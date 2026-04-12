"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./Hero.module.css";

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

      {/* ── Editor card stack ── */}
      <div className={styles["hero__editor-stack"]}>
        {/* Deepest card */}
        <div className={styles["hero__card-back-2"]}>
          <div className={styles["hero__card-chrome"]}>
            <div className={styles["hero__card-chrome-dots"]}><span /><span /><span /></div>
          </div>
          <div className={styles["hero__card-tab-peek"]}>Hero.tsx</div>
          <div className={styles["hero__card-statusbar"]}>
            <span className={styles["hero__card-statusbar-text"]}>BUILDING SOMETHING NEW</span>
          </div>
        </div>

        {/* Middle card */}
        <div className={styles["hero__card-back"]}>
          <div className={styles["hero__card-chrome"]}>
            <div className={styles["hero__card-chrome-dots"]}><span /><span /><span /></div>
          </div>
          <div className={styles["hero__card-tab-peek"]}>useCart.ts</div>
          <div className={styles["hero__card-statusbar"]}>
            <span className={styles["hero__card-statusbar-text"]}>CURRENTLY BUILDING SOMETHING NEW</span>
          </div>
        </div>

        {/* Front editor card */}
        <div className={styles.hero__editor}>
          {/* Title bar */}
          <div className={styles["hero__editor-titlebar"]}>
            <div className={styles["hero__editor-dots"]}>
              <span /><span /><span />
            </div>
            <span className={styles["hero__editor-title"]}>Hero.tsx — owen-portfolio</span>
          </div>

          {/* Tab row */}
          <div className={styles["hero__editor-tabs"]}>
            <div className={cls(styles["hero__editor-tab"], styles["hero__editor-tab--active"])}>
              <span className={styles["hero__editor-tab-icon"]}>{"<>"}</span>
              Hero.tsx
            </div>
            <div className={styles["hero__editor-tab"]}>
              <span className={styles["hero__editor-tab-icon"]}>{"{}"}</span>
              Hero.module.css
            </div>
            <div className={styles["hero__editor-tab"]}>
              <span className={styles["hero__editor-tab-icon"]}>{"{}"}</span>
              globals.css
            </div>
          </div>

          {/* Breadcrumb */}
          <div className={styles["hero__editor-breadcrumb"]}>
            <span>components</span>
            <span className={styles["hero__editor-breadcrumb-sep"]}>›</span>
            <span>home</span>
            <span className={styles["hero__editor-breadcrumb-sep"]}>›</span>
            <span>Hero.tsx</span>
            <span className={styles["hero__editor-breadcrumb-sep"]}>›</span>
            <span className={styles["hero__editor-breadcrumb-active"]}>Hero</span>
          </div>

          {/* Editor body */}
          <div className={styles["hero__editor-body"]}>
            {/* Code area */}
            <div className={styles["hero__editor-code"]}>
              <pre className={styles["hero__editor-pre"]}>
                <code>
                  {[
                    { num: 1,  text: <><span className={styles["syntax-keyword"]}>{"export function "}</span><span className={styles["syntax-fn"]}>Hero</span><span className={styles["syntax-punct"]}>{"() {"}</span></> },
                    { num: 2,  text: <><span className={styles["syntax-keyword"]}>{"  const "}</span><span className={styles["syntax-var"]}>sectionRef</span><span className={styles["syntax-punct"]}>{" = "}</span><span className={styles["syntax-fn"]}>useRef</span><span className={styles["syntax-punct"]}>(</span><span className={styles["syntax-number"]}>null</span><span className={styles["syntax-punct"]}>)</span></> },
                    { num: 3,  text: <></> },
                    { num: 4,  text: <><span className={styles["syntax-keyword"]}>{"  return "}</span><span className={styles["syntax-punct"]}>(</span></> },
                    { num: 5,  text: <><span className={styles["syntax-punct"]}>{"    <"}</span><span className={styles["syntax-tag"]}>section</span><span className={styles["syntax-attr"]}>{" ref"}</span><span className={styles["syntax-punct"]}>{"={"}</span><span className={styles["syntax-var"]}>sectionRef</span><span className={styles["syntax-punct"]}>{"}"}</span><span className={styles["syntax-punct"]}>{">"}</span></> },
                    { num: 6,  text: <><span className={styles["syntax-punct"]}>{"      <"}</span><span className={styles["syntax-tag"]}>h1</span><span className={styles["syntax-punct"]}>{">"}</span></> },
                    { num: 7,  text: <><span className={styles["syntax-string"]}>{"        OWEN DUPREE"}</span></>, active: true },
                    { num: 8,  text: <><span className={styles["syntax-punct"]}>{"      </"}</span><span className={styles["syntax-tag"]}>h1</span><span className={styles["syntax-punct"]}>{">"}</span></> },
                    { num: 9,  text: <><span className={styles["syntax-punct"]}>{"      <"}</span><span className={styles["syntax-tag"]}>p</span><span className={styles["syntax-punct"]}>{">"}</span><span className={styles["syntax-string"]}>Frontend engineer</span><span className={styles["syntax-punct"]}>{"</"}</span><span className={styles["syntax-tag"]}>p</span><span className={styles["syntax-punct"]}>{">"}</span></> },
                    { num: 10, text: <></> },
                    { num: 11, text: <><span className={styles["syntax-punct"]}>{"      <"}</span><span className={styles["syntax-tag"]}>Skills</span><span className={styles["syntax-attr"]}>{" items"}</span><span className={styles["syntax-punct"]}>{"={"}</span><span className={styles["syntax-var"]}>SKILLS</span><span className={styles["syntax-punct"]}>{"}"}</span><span className={styles["syntax-punct"]}>{" />"}</span></> },
                    { num: 12, text: <><span className={styles["syntax-punct"]}>{"      <"}</span><span className={styles["syntax-tag"]}>Stats</span><span className={styles["syntax-attr"]}>{" years"}</span><span className={styles["syntax-punct"]}>{"={"}</span><span className={styles["syntax-var"]}>YEARS_CODING</span><span className={styles["syntax-punct"]}>{"}"}</span><span className={styles["syntax-punct"]}>{" />"}</span></> },
                    { num: 13, text: <><span className={styles["syntax-punct"]}>{"    </"}</span><span className={styles["syntax-tag"]}>section</span><span className={styles["syntax-punct"]}>{">"}</span></> },
                    { num: 14, text: <><span className={styles["syntax-punct"]}>{"  )"}</span></> },
                    { num: 15, text: <><span className={styles["syntax-punct"]}>{"}"}</span></> },
                    { num: 16, text: <></> },
                  ].map(({ num, text, active: isActive }) => (
                    <div key={num} className={cls(styles["hero__editor-line"], isActive ? styles["hero__editor-line--active"] : "")}>
                      <span className={styles["hero__editor-linenum"]}>{num}</span>
                      {text}
                      {isActive && <span className={styles["hero__editor-cursor"]} />}
                    </div>
                  ))}
                </code>
              </pre>
            </div>

            {/* Minimap */}
            <div className={styles["hero__editor-minimap"]}>
              {[18, 10, 0, 14, 22, 16, 20, 12, 0, 24, 18, 14, 0, 20, 16, 22].map((w, i) => (
                <div
                  key={i}
                  className={styles["hero__editor-minimap-line"]}
                  style={{ width: w ? `${w}px` : 0, height: w ? 2 : 4 }}
                />
              ))}
            </div>
          </div>

          {/* Status bar */}
          <div className={styles["hero__editor-statusbar"]}>
            <div className={styles["hero__editor-statusbar-left"]}>
              <span className={styles["hero__editor-statusbar-branch"]}>
                <svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor">
                  <path d="M11.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122V6.5a2.5 2.5 0 01-2.5 2.5H7.5a1 1 0 00-1 1v1.128a2.251 2.251 0 11-1.5 0V5.372a2.25 2.25 0 111.5 0v1.836A2.492 2.492 0 017.5 7h2.5a1 1 0 001-1v-1.128A2.251 2.251 0 019.5 3.25zM4.25 12a.75.75 0 100 1.5.75.75 0 000-1.5zM3.5 3.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z" />
                </svg>
                main
              </span>
              <span>0 problems</span>
            </div>
            <div className={styles["hero__editor-statusbar-right"]}>
              <span>Ln 7, Col 20</span>
              <span>UTF-8</span>
              <span>TypeScript React</span>
              <span>Prettier</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative rects */}
      <div className={styles.hero__deco}>
        <div className={styles["hero__deco-rect--filled"]} />
        <div className={styles["hero__deco-rect--outlined"]} />
      </div>

      {/* Content */}
      <div className={styles.hero__content}>
        {/* Label + Location */}
        <div
          className={cls(styles.hero__label, styles["hero__animate-in"])}
          style={{ transitionDelay: "0.2s" }}
        >
          <div className={styles["hero__label-line"]} />
          <span className={styles["hero__label-text"]}>FRONTEND ENGINEER</span>
          <span className={styles["hero__label-sep"]}>—</span>
          <span className={styles["hero__label-location"]}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Sanford, FL
          </span>
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

        {/* Description */}
        <div
          className={cls(styles["hero__animate-in"])}
          style={{ transitionDelay: "0.75s" }}
        >
          <p className={styles.hero__description}>
            I work with brands to build websites and digital experiences that
            feel modern, approachable, and built with care. From the overall
            look and feel down to the details that make things work.
          </p>

          <div className={styles.hero__actions}>
            <div className={styles["hero__actions-inner"]}>
              <Link href="/work" className={styles["hero__cta-group"]}>
                <span className={styles["hero__cta-button"]}>
                  <svg
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </span>
                <span className={styles["hero__cta-label"]}>View work</span>
              </Link>
              <div className={styles["hero__actions-divider"]} />
              <Link href="/contact" className={styles["hero__cta-secondary"]}>
                <span>Contact me</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
