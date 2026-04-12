"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function cls(...names: (string | false | undefined)[]) {
  return names.filter(Boolean).join(" ");
}

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Hero has its own nav on the home page
  if (pathname === "/") return null;

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
      <div className={styles.navbar__inner}>
        <Link href="/" className={styles.navbar__brand}>
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
      </div>

      {/* Mobile overlay */}
      <div className={cls(styles.navbar__overlay, !menuOpen && styles["navbar__overlay--closed"])}>
        {NAV_LINKS.map((link) => (
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
