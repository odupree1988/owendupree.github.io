"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface StrokeNameProps {
  text: string;
  onComplete?: () => void;
}

export function StrokeName({ text, onComplete }: StrokeNameProps) {
  const [displayCount, setDisplayCount] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const done = displayCount >= text.length;

  useEffect(() => {
    if (done) {
      // Blink cursor a couple times then hide
      const timeout = setTimeout(() => setShowCursor(false), 1200);
      onComplete?.();
      return () => clearTimeout(timeout);
    }

    // Variable typing speed for natural feel
    const isSpace = text[displayCount] === " ";
    const base = 100;
    const jitter = Math.random() * 60 - 30; // -30 to +30ms
    const pause = isSpace ? 160 : base + jitter;

    const timeout = setTimeout(() => {
      setDisplayCount((c) => c + 1);
    }, pause);

    return () => clearTimeout(timeout);
  }, [displayCount, done, text, onComplete]);

  return (
    <h1 className="font-[family-name:var(--font-heading)] text-5xl font-bold leading-tight text-[var(--text-primary)] md:text-6xl lg:text-7xl">
      {text.slice(0, displayCount)}
      {showCursor && (
        <motion.span
          className="ml-0.5 inline-block w-[3px] bg-[var(--accent)]"
          style={{ height: "0.85em", verticalAlign: "text-bottom" }}
          animate={{ opacity: [1, 0] }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        />
      )}
    </h1>
  );
}
