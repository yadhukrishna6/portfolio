"use client";

/**
 * ScrollProgress — thin gradient bar at the top of the viewport
 * indicating how far the user has scrolled through the page.
 */
import { useScroll, useSpring, motion } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] z-[9996] origin-left"
      style={{
        scaleX,
        background: "var(--gradient-primary)",
      }}
    />
  );
}
