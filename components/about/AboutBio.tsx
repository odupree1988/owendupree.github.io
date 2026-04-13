import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { siteConfig } from "@/data/siteConfig";
import styles from "./AboutBio.module.css";
import linkStyles from "@/components/ui/LinkStyles.module.css";

export function AboutBio() {
  return (
    <section className={styles["about-bio"]}>
      <div className={styles["about-bio__inner"]}>
        <ScrollReveal>
          <h1 className={styles["about-bio__title"]}>About</h1>
        </ScrollReveal>
        <div className={styles["about-bio__paragraphs"]}>
          {siteConfig.aboutBio.map((paragraph, i) => (
            <ScrollReveal key={i} delay={0.1 + i * 0.08}>
              <p className={styles["about-bio__paragraph"]}>{paragraph}</p>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={0.1 + siteConfig.aboutBio.length * 0.08}>
          <div className={styles["about-bio__cta"]}>
            <a href="/Owen_Dupree_Resume_.pdf" target="_blank" rel="noopener noreferrer" className={linkStyles["link-primary"]}>
              <span className={linkStyles["link-primary__btn"]}>
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </span>
              <span className={linkStyles["link-primary__label"]}>View my resume</span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
