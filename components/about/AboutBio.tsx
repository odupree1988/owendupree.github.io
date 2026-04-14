import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { siteConfig } from "@/data/siteConfig";
import styles from "./AboutBio.module.css";
import linkStyles from "@/components/ui/LinkStyles.module.css";

export function AboutBio() {
  return (
    <section className={styles["about-bio"]}>
      <div className={styles["about-bio__inner"]}>
        <div className={styles["about-bio__paragraphs"]}>
          {siteConfig.aboutBio.map((paragraph, i) => (
            <ScrollReveal key={i} delay={0.1 + i * 0.08}>
              <p className={styles["about-bio__paragraph"]}>{paragraph}</p>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={0.1 + siteConfig.aboutBio.length * 0.08} margin="100px">
          <div className={styles["about-bio__cta"]}>
            <Link href="/resume" className={linkStyles["link-primary"]}>
              <span className={linkStyles["link-primary__btn"]}>
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </span>
              <span className={linkStyles["link-primary__label"]}>View my resume</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
