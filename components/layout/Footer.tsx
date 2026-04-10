import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-[var(--text-tertiary)] md:flex-row">
        <span>&copy; {new Date().getFullYear()} {siteConfig.name}</span>
        <div className="flex gap-6">
          <Link href="/work" className="transition-colors hover:text-[var(--text-secondary)]">
            Work
          </Link>
          <Link href="/about" className="transition-colors hover:text-[var(--text-secondary)]">
            About
          </Link>
          <Link href="/contact" className="transition-colors hover:text-[var(--text-secondary)]">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
