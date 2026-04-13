"use client";

/**
 * LoadingScreen — cinematic intro animation played once on first visit.
 * Shows an animated counter (0 → 100), then slides up to reveal the page.
 * Uses AnimatePresence to cleanly unmount once complete.
 */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Animate counter 0 → 100 over ~2 seconds
    const totalMs = 2000;
    const intervalMs = 20;
    const steps = totalMs / intervalMs;
    let current = 0;

    const timer = setInterval(() => {
      current++;
      // Ease-out curve for the counter
      const progress = 1 - Math.pow(1 - current / steps, 3);
      setCount(Math.round(progress * 100));

      if (current >= steps) {
        clearInterval(timer);
        // Brief pause after reaching 100 before revealing
        setTimeout(() => setDone(true), 400);
      }
    }, intervalMs);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loading"
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: "#080808" }}
          exit={{
            y: "-100%",
            transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          {/* Gradient accent blobs */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(99,102,241,0.12) 0%, transparent 70%)",
            }}
          />

          {/* Counter */}
          <motion.div
            className="loading-counter gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {String(count).padStart(3, "0")}
          </motion.div>

          {/* Label */}
          <motion.p
            className="mt-4 text-sm tracking-[0.3em] uppercase"
            style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-display)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Loading Experience
          </motion.p>

          {/* Progress bar */}
          <div
            className="absolute bottom-0 left-0 h-[2px] w-full"
            style={{ background: "rgba(255,255,255,0.06)" }}
          >
            <motion.div
              className="h-full"
              style={{ background: "var(--gradient-primary)" }}
              initial={{ width: "0%" }}
              animate={{ width: `${count}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
