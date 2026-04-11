"use client";

import { motion } from "framer-motion";

interface FloatingPillProps {
  label: string;
  index: number;
}

export function FloatingPill({ label, index }: FloatingPillProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{
        backgroundColor: "var(--accent)",
        color: "var(--bg-primary)",
        borderColor: "var(--accent)",
        scale: 1.05,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.8 + index * 0.1,
      }}
      className="pill-shimmer relative overflow-hidden rounded-full border border-white/15 bg-white/5 px-4 py-2 font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider text-white/60 backdrop-blur-sm select-none cursor-default"
      style={
        {
          "--shimmer-duration": "6s",
          "--shimmer-delay": `${index * 0.8}s`,
        } as React.CSSProperties
      }
    >
      {label}
    </motion.div>
  );
}
