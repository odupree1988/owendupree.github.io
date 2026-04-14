import { ScrollReveal } from "./ScrollReveal";
import styles from "./PageHeader.module.css";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  maxWidth?: string;
}

export function PageHeader({ title, subtitle, align = "left", maxWidth }: PageHeaderProps) {
  return (
    <div className={`${styles["page-header"]} ${align === "center" ? styles["page-header--center"] : ""}`}>
      <div className={styles["page-header__inner"]} style={maxWidth ? { maxWidth } : undefined}>
        <ScrollReveal>
          <h1 className={styles["page-header__title"]}>{title}</h1>
          {subtitle && (
            <p className={styles["page-header__subtitle"]}>{subtitle}</p>
          )}
        </ScrollReveal>
      </div>
    </div>
  );
}
