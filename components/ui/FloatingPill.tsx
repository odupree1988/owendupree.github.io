"use client";

import { motion } from "framer-motion";

interface FloatingPillProps {
  label: string;
  index: number;
}

export function FloatingPill({ label, index }: FloatingPillProps) {
  return (
    <motion.span
      className="inline-block cursor-default rounded-full border border-[var(--border-hover)] bg-[var(--bg-tertiary)] px-4 py-2 font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-[var(--text-secondary)]"
      initial={{ opacity: 0, y: -40, scale: 0.8 }}
      animate={{
        opacity: 1,
        y: [0, -5, 0, 3, 0],
        scale: 1,
        rotate: [-0.5, 0.5, -0.5],
      }}
      transition={{
        opacity: { type: "spring", stiffness: 300, damping: 20, delay: 0.4 + index * 0.08 },
        y: {
          delay: 0.4 + index * 0.08 + 0.6,
          duration: 4 + index * 0.5,
          repeat: Infinity,
          ease: "easeInOut",
        },
        scale: { type: "spring", stiffness: 300, damping: 20, delay: 0.4 + index * 0.08 },
        rotate: {
          delay: 0.4 + index * 0.08 + 0.6,
          duration: 4 + index * 0.5,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      whileHover={{
        scale: 1.1,
        backgroundColor: "var(--accent)",
        color: "var(--bg-primary)",
        borderColor: "var(--accent)",
        transition: { type: "spring", stiffness: 400, damping: 15 },
      }}
    >
      {label}
    </motion.span>
  );
}
