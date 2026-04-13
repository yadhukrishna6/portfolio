"use client";

/**
 * SectionWrapper — reusable fade-in-slide wrapper for all page sections.
 * Triggers the animation when the section enters the viewport using useInView.
 */
import { useRef, ReactNode } from "react";
import { motion, useInView, Variants } from "framer-motion";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
};

const variants: Record<string, Variants> = {
  up:    { hidden: { opacity: 0, y: 60 },   visible: { opacity: 1, y: 0 } },
  down:  { hidden: { opacity: 0, y: -60 },  visible: { opacity: 1, y: 0 } },
  left:  { hidden: { opacity: 0, x: -60 },  visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 60 },   visible: { opacity: 1, x: 0 } },
};

export function SectionWrapper({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants[direction]}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
