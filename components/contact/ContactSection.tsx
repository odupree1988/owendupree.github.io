"use client";

import { Mail, Github, Linkedin } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { siteConfig } from "@/data/siteConfig";

export function ContactSection() {
  return (
    <section className="flex min-h-[calc(100vh-4rem)] items-center px-6 py-20">
      <div className="mx-auto w-full max-w-2xl text-center">
        <ScrollReveal>
          <h1 className="font-[family-name:var(--font-heading)] text-3xl font-semibold text-[var(--text-primary)] md:text-4xl">
            {siteConfig.contactHeading}
          </h1>
          <p className="mt-4 text-base text-[var(--text-secondary)]">
            {siteConfig.contactSubtext}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="mt-12 flex justify-center gap-5">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex h-14 w-14 items-center justify-center rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--border-hover)] hover:text-[var(--accent)]"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 w-14 items-center justify-center rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--border-hover)] hover:text-[var(--accent)]"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 w-14 items-center justify-center rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--border-hover)] hover:text-[var(--accent)]"
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
