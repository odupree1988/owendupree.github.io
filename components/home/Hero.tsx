"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FloatingPill } from "@/components/ui/FloatingPill";
import { StrokeName } from "@/components/home/StrokeName";
import { siteConfig } from "@/data/siteConfig";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background image with Ken Burns */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/hero-bg.jpg')",
            animation: "kenBurns 20s ease-out forwards",
          }}
        />
      </motion.div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(12,12,14,0.75)] to-[rgba(12,12,14,0.85)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[1.5fr_1fr] lg:gap-20">
        {/* Left column */}
        <div>
          {/* Name — typewriter */}
          <StrokeName text={siteConfig.name} />

          {/* Title — fades up near end of name animation */}
          <motion.p
            className="mt-4 text-lg text-white/70"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.2, ease: "easeOut" }}
          >
            {siteConfig.title}
          </motion.p>

          {/* Pills */}
          <div className="mt-8 flex flex-wrap gap-3">
            {siteConfig.heroPills.map((pill, i) => (
              <FloatingPill key={pill} label={pill} index={i} />
            ))}
          </div>
        </div>

        {/* Right column */}
        <div>
          <motion.p
            className="text-base leading-relaxed text-white/70 md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 3.4, ease: "easeOut" }}
          >
            {siteConfig.heroIntro}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 3.8, ease: "easeOut" }}
          >
            <Link
              href="/work"
              className="text-sm font-medium text-[var(--accent)] transition-colors hover:underline"
            >
              View my work &rarr;
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-white/50 transition-colors hover:text-[var(--accent)]"
            >
              Get in touch &rarr;
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
