import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { siteConfig } from "@/data/siteConfig";

export function HomeCTA() {
  return (
    <section className="px-6 py-24">
      <ScrollReveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-semibold text-[var(--text-primary)] md:text-4xl">
          {siteConfig.contactHeading}
        </h2>
        <p className="mt-4 text-base text-[var(--text-secondary)]">
          {siteConfig.contactSubtext}
        </p>
        <div className="mt-8 flex justify-center gap-6">
          <Link
            href="/contact"
            className="text-sm font-medium text-[var(--accent)] transition-colors hover:underline"
          >
            Get in touch &rarr;
          </Link>
        </div>
      </ScrollReveal>
    </section>
  );
}
