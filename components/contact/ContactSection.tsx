"use client";

import { Mail, Github, Linkedin } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { siteConfig } from "@/data/siteConfig";
import styles from "./ContactSection.module.css";

export function ContactSection() {
  return (
    <section className={styles.contact}>
      <div className={styles.contact__inner}>
        <ScrollReveal>
          <h1 className={styles.contact__title}>{siteConfig.contactHeading}</h1>
          <p className={styles.contact__subtitle}>{siteConfig.contactSubtext}</p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className={styles.contact__icons}>
            <a
              href={`mailto:${siteConfig.email}`}
              className={styles["contact__icon-link"]}
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles["contact__icon-link"]}
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles["contact__icon-link"]}
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
