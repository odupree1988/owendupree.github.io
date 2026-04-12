import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { siteConfig } from "@/data/siteConfig";
import styles from "./HomeCTA.module.css";

export function HomeCTA() {
  return (
    <section className={styles["home-cta"]}>
      <ScrollReveal className={styles["home-cta__inner"]}>
        <h2 className={styles["home-cta__title"]}>{siteConfig.contactHeading}</h2>
        <p className={styles["home-cta__subtitle"]}>{siteConfig.contactSubtext}</p>
        <div className={styles["home-cta__actions"]}>
          <Link href="/contact" className={styles["home-cta__link"]}>
            Get in touch &rarr;
          </Link>
        </div>
      </ScrollReveal>
    </section>
  );
}
