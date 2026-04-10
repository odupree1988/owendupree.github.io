"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FloatingPill } from "@/components/ui/FloatingPill";
import { siteConfig } from "@/data/siteConfig";

export function Hero() {
  return (
    <section
      className="relative min-h-[calc(100vh-4rem)] overflow-hidden px-6 py-20"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.5fr_1fr] lg:gap-20">
        {/* Left column */}
        <div>
          <motion.h1
            className="font-[family-name:var(--font-heading)] text-5xl font-bold leading-tight text-[var(--text-primary)] md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            {siteConfig.name}
          </motion.h1>

          <motion.p
            className="mt-4 text-lg text-[var(--text-secondary)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
          >
            {siteConfig.title}
          </motion.p>

          <div className="mt-8 flex flex-wrap gap-3">
            {siteConfig.heroPills.map((pill, i) => (
              <FloatingPill key={pill} label={pill} index={i} />
            ))}
          </div>
        </div>

        {/* Right column */}
        <div>
          <motion.p
            className="text-base leading-relaxed text-[var(--text-secondary)] md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
          >
            {siteConfig.heroIntro}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
          >
            <Link
              href="/work"
              className="text-sm font-medium text-[var(--accent)] transition-colors hover:underline"
            >
              View my work &rarr;
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]"
            >
              Get in touch &rarr;
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
