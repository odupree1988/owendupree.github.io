"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./StickyLetsTalk.module.css";

export function StickyLetsTalk() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Link
      href="/contact"
      className={`${styles.sticky} ${visible ? styles["sticky--visible"] : ""}`}
    >
      Let&apos;s Talk
    </Link>
  );
}
