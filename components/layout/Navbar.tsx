"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const MOBILE_NAV_LINKS = [
  { href: "/", label: "Home" },
  ...NAV_LINKS,
];

function cls(...names: (string | false | undefined)[]) {
  return names.filter(Boolean).join(" ");
}

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <nav className={cls(styles.navbar, scrolled && styles["navbar--scrolled"])}>
      <Link href="/" className={styles.navbar__brand}>
        <span className={styles.navbar__dot} />
        owen dupree
      </Link>

      {/* Desktop */}
      <div className={styles.navbar__links}>
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cls(
              styles.navbar__link,
              pathname === link.href && styles["navbar__link--active"]
            )}
          >
            {link.label}
          </Link>
        ))}
        <Link href="/contact" className={styles.navbar__pill}>
          Let&apos;s talk
        </Link>
        <span className={styles.navbar__divider} />
        <ThemeToggle />
      </div>

      {/* Mobile toggle */}
      <button
        className={styles.navbar__toggle}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <div className={styles["navbar__toggle-bars"]}>
          <span className={cls(styles["navbar__toggle-bar"], menuOpen && styles["navbar__toggle-bar--top-open"])} />
          <span className={cls(styles["navbar__toggle-bar"], menuOpen && styles["navbar__toggle-bar--mid-open"])} />
          <span className={cls(styles["navbar__toggle-bar"], menuOpen && styles["navbar__toggle-bar--bot-open"])} />
        </div>
      </button>

      {/* Mobile overlay */}
      <div className={cls(styles.navbar__overlay, !menuOpen && styles["navbar__overlay--closed"])}>
        {MOBILE_NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cls(
              styles["navbar__overlay-link"],
              pathname === link.href && styles["navbar__overlay-link--active"]
            )}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
