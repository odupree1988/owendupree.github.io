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
          <Link href="/contact" className={linkStyles["link-primary"]}>
            <span className={linkStyles["link-primary__btn"]}>
              <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </span>
            <span className={linkStyles["link-primary__label"]}>Get in touch</span>
          </Link>
        </div>
      </ScrollReveal>
    </section>
  );
}
