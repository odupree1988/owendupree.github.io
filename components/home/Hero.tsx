"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./Hero.module.css";
import linkStyles from "@/components/ui/LinkStyles.module.css";
import chromeStyles from "@/components/ui/BrowserChrome.module.css";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" } as const,
};

function reveal(delay: number) {
  return {
    ...fadeUp,
    transition: { duration: 0.5, delay, ease: "easeOut" as const },
  };
}

export function Hero() {

  return (
    <section className={styles.hero}>
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
            <div className={`${chromeStyles.dots} ${chromeStyles["dots--md"]}`}><span /><span /><span /></div>
          </div>
          <div className={styles["hero__card-tab-peek"]}>Hero.tsx</div>
          <div className={styles["hero__card-statusbar"]}>
            <span className={styles["hero__card-statusbar-left"]}>
              <svg viewBox="0 0 16 16" width="9" height="9" fill="currentColor">
                <path d="M11.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122V6.5a2.5 2.5 0 01-2.5 2.5H7.5a1 1 0 00-1 1v1.128a2.251 2.251 0 11-1.5 0V5.372a2.25 2.25 0 111.5 0v1.836A2.492 2.492 0 017.5 7h2.5a1 1 0 001-1v-1.128A2.251 2.251 0 019.5 3.25zM4.25 12a.75.75 0 100 1.5.75.75 0 000-1.5zM3.5 3.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z" />
              </svg>
              main &nbsp; 0 problems
            </span>
            <span className={styles["hero__card-statusbar-right"]}>Ln 1, Col 1 &nbsp; UTF-8 &nbsp; TypeScript React &nbsp; Prettier</span>
          </div>
        </div>

        {/* Middle card */}
        <div className={styles["hero__card-back"]}>
          <div className={styles["hero__card-chrome"]}>
            <div className={`${chromeStyles.dots} ${chromeStyles["dots--md"]}`}><span /><span /><span /></div>
          </div>
          <div className={styles["hero__card-tab-peek"]}>useCart.ts</div>
          <div className={styles["hero__card-statusbar"]}>
            <span className={styles["hero__card-statusbar-left"]}>
              <svg viewBox="0 0 16 16" width="9" height="9" fill="currentColor">
                <path d="M11.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122V6.5a2.5 2.5 0 01-2.5 2.5H7.5a1 1 0 00-1 1v1.128a2.251 2.251 0 11-1.5 0V5.372a2.25 2.25 0 111.5 0v1.836A2.492 2.492 0 017.5 7h2.5a1 1 0 001-1v-1.128A2.251 2.251 0 019.5 3.25zM4.25 12a.75.75 0 100 1.5.75.75 0 000-1.5zM3.5 3.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z" />
              </svg>
              main &nbsp; 0 problems
            </span>
            <span className={styles["hero__card-statusbar-right"]}>Ln 12, Col 8 &nbsp; UTF-8 &nbsp; TypeScript &nbsp; Prettier</span>
          </div>
        </div>

        {/* Front editor card */}
        <div className={styles.hero__editor}>
          {/* Title bar */}
          <div className={styles["hero__editor-titlebar"]}>
            <div className={`${chromeStyles.dots} ${chromeStyles["dots--lg"]}`}>
              <span /><span /><span />
            </div>
            <span className={styles["hero__editor-title"]}>owen.ts — owen-portfolio</span>
          </div>

          {/* Tab row */}
          <div className={styles["hero__editor-tabs"]}>
            <div className={`${styles["hero__editor-tab"]} ${styles["hero__editor-tab--active"]}`}>
              <span className={`${styles["hero__editor-tab-icon"]} ${styles["hero__editor-tab-icon--ts"]}`}>TS</span>
              owen.ts
            </div>
            <div className={styles["hero__editor-tab"]}>
              <span className={`${styles["hero__editor-tab-icon"]} ${styles["hero__editor-tab-icon--js"]}`}>JS</span>
              why-is-this-working.js
            </div>
            <div className={styles["hero__editor-tab"]}>
              <span className={`${styles["hero__editor-tab-icon"]} ${styles["hero__editor-tab-icon--css"]}`}>CSS</span>
              dont-touch.css
            </div>
            <div className={styles["hero__editor-tab"]}>
              <span className={`${styles["hero__editor-tab-icon"]} ${styles["hero__editor-tab-icon--json"]}`}>{"{}"}</span>
              motivation.json
            </div>
          </div>

          {/* Breadcrumb */}
          <div className={styles["hero__editor-breadcrumb"]}>
            <span>config</span>
            <span className={styles["hero__editor-breadcrumb-sep"]}>›</span>
            <span className={styles["hero__editor-breadcrumb-active"]}>owen.ts</span>
          </div>

          {/* Editor body */}
          <div className={styles["hero__editor-body"]}>
            {/* Code area */}
            <div className={styles["hero__editor-code"]}>
              <pre className={styles["hero__editor-pre"]}>
                <code>
                  {[
                    { num: 1,  text: <><span className={styles["syntax-keyword"]}>{"const "}</span><span className={styles["syntax-var"]}>owen</span><span className={styles["syntax-punct"]}>{" = {"}</span></> },
                    { num: 2,  text: <><span className={styles["syntax-attr"]}>{"  role"}</span><span className={styles["syntax-punct"]}>{": "}</span><span className={styles["syntax-string"]}>{"'Frontend Engineer'"}</span><span className={styles["syntax-punct"]}>,</span></> },
                    { num: 3,  text: <><span className={styles["syntax-attr"]}>{"  location"}</span><span className={styles["syntax-punct"]}>{": "}</span><span className={styles["syntax-string"]}>{"'Sanford, FL'"}</span><span className={styles["syntax-punct"]}>,</span></> },
                    { num: 4,  text: <><span className={styles["syntax-attr"]}>{"  mindset"}</span><span className={styles["syntax-punct"]}>{": "}</span><span className={styles["syntax-string"]}>{"'growth'"}</span><span className={styles["syntax-punct"]}>,</span></> },
                    { num: 5,  text: <><span className={styles["syntax-attr"]}>{"  fear"}</span><span className={styles["syntax-punct"]}>{": "}</span><span className={styles["syntax-string"]}>{"'Safari compatibility'"}</span><span className={styles["syntax-punct"]}>,</span></> },
                    { num: 6,  text: <><span className={styles["syntax-attr"]}>{"  coffee"}</span><span className={styles["syntax-punct"]}>{": "}</span><span className={styles["syntax-string"]}>{"'refilling'"}</span><span className={styles["syntax-punct"]}>,</span></>, active: true },
                    { num: 7,  text: <><span className={styles["syntax-attr"]}>{"  currently"}</span><span className={styles["syntax-punct"]}>{": "}</span><span className={styles["syntax-string"]}>{"'building this site'"}</span><span className={styles["syntax-punct"]}>,</span></> },
                    { num: 8,  text: <><span className={styles["syntax-attr"]}>{"  available"}</span><span className={styles["syntax-punct"]}>{": "}</span><span className={styles["syntax-number"]}>true</span><span className={styles["syntax-punct"]}>,</span></> },
                    { num: 9,  text: <><span className={styles["syntax-attr"]}>{"  learning"}</span><span className={styles["syntax-punct"]}>{": "}</span><span className={styles["syntax-string"]}>{"'always something'"}</span><span className={styles["syntax-punct"]}>,</span></> },
                    { num: 10, text: <><span className={styles["syntax-attr"]}>{"  approach"}</span><span className={styles["syntax-punct"]}>{": "}</span><span className={styles["syntax-string"]}>{"'clean code, real impact'"}</span><span className={styles["syntax-punct"]}>,</span></> },
                    { num: 11, text: <><span className={styles["syntax-attr"]}>{"  tabs"}</span><span className={styles["syntax-punct"]}>{": "}</span><span className={styles["syntax-string"]}>{"'always'"}</span><span className={styles["syntax-punct"]}>,</span></> },
                    { num: 12, text: <><span className={styles["syntax-punct"]}>{"} "}</span><span className={styles["syntax-keyword"]}>{"satisfies "}</span><span className={styles["syntax-tag"]}>Human</span><span className={styles["syntax-punct"]}>;</span></> },
                    { num: 13, text: <></> },
                  ].map(({ num, text, active: isActive }) => (
                    <div key={num} className={`${styles["hero__editor-line"]} ${isActive ? styles["hero__editor-line--active"] : ""}`}>
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
              <span>Ln 6, Col 28</span>
              <span>UTF-8</span>
              <span>TypeScript</span>
              <span>Prettier</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={styles.hero__content}>
        {/* Label + Location */}
        <motion.div className={styles.hero__label} {...reveal(0.2)}>
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
        </motion.div>

        {/* Name */}
        <h1 className={styles.hero__name}>
          <motion.span className={styles["hero__name-first"]} {...reveal(0.35)}>
            OWEN
          </motion.span>
          <motion.span className={styles["hero__name-last"]} {...reveal(0.5)}>
            DUPREE
          </motion.span>
        </h1>

        {/* Divider */}
        <motion.div
          className={styles.hero__divider}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.65, ease: "easeOut" }}
        />

        {/* Description */}
        <motion.div {...reveal(0.75)}>
          <p className={styles.hero__description}>
            I build thoughtful websites and digital experiences for brands that
            want something polished, approachable, and built with care.
            I&apos;m passionate about creating work that feels clean, works the
            way it should, and comes together thoughtfully from the technical
            foundation to the final user experience.
          </p>

          <div className={styles.hero__actions}>
            <div className={styles["hero__actions-inner"]}>
              <Link href="/work" className={linkStyles["link-primary"]}>
                <span className={linkStyles["link-primary__btn"]}>
                  <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </span>
                <span className={linkStyles["link-primary__label"]}>View work</span>
              </Link>
              <div className={styles["hero__actions-divider"]} />
              <Link href="/contact" className={linkStyles["link-secondary"]}>
                <span>Contact me</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </motion.div>

      </div>

    </section>
  );
}
