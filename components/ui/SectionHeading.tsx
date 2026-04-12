import { ScrollReveal } from "./ScrollReveal";
import styles from "./SectionHeading.module.css";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <ScrollReveal className={styles["section-heading"]}>
      <h2 className={styles["section-heading__title"]}>{title}</h2>
      {subtitle && (
        <p className={styles["section-heading__subtitle"]}>{subtitle}</p>
      )}
    </ScrollReveal>
  );
}
