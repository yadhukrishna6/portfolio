"use client";

/**
 * MagneticButton — wraps any content and applies a magnetic hover effect.
 * The element subtly moves toward the cursor position using Framer Motion transforms.
 * Strength controls how far the element moves (0–1 scale).
 */
import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type Props = {
  children: React.ReactNode;
  strength?: number;
  className?: string;
};

export function MagneticButton({ children, strength = 0.35, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * strength);
    y.set((e.clientY - cy) * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY, display: "inline-block" }}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      data-cursor-hover
    >
      {children}
    </motion.div>
  );
}
