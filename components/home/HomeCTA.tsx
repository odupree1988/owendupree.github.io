import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { siteConfig } from "@/data/siteConfig";
import styles from "./HomeCTA.module.css";
import linkStyles from "@/components/ui/LinkStyles.module.css";

export function HomeCTA() {
  return (
    <section className={styles["home-cta"]}>
      <ScrollReveal className={styles["home-cta__inner"]}>
        <h2 className={styles["home-cta__title"]}>{siteConfig.contactHeading}</h2>
        <p className={styles["home-cta__subtitle"]}>{siteConfig.contactSubtext}</p>
        <div className={styles["home-cta__actions"]}>
          <Link href="/contact" className={linkStyles["link-secondary"]}>
            <span className={linkStyles["link-secondary__label"]}>Get in touch</span>
             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
          </Link>
        </div>
      </ScrollReveal>
    </section>
  );
}
