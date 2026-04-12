import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__inner}>
        <span className={styles.footer__copy}>
          &copy; {new Date().getFullYear()} {siteConfig.name}
        </span>
        <div className={styles.footer__links}>
          <Link href="/work" className={styles.footer__link}>Work</Link>
          <Link href="/about" className={styles.footer__link}>About</Link>
          <Link href="/contact" className={styles.footer__link}>Contact</Link>
        </div>
      </div>
    </footer>
  );
}
