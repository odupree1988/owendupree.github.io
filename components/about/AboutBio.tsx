import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { siteConfig } from "@/data/siteConfig";
import styles from "./AboutBio.module.css";

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
      </div>
    </section>
  );
}
