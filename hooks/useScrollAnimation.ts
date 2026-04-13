"use client";

/**
 * useScrollAnimation — triggers Framer Motion animation on element scroll entry
 * Uses useInView to watch the element and fires controls.start("visible")
 * when the element enters the viewport.
 */
import { useEffect, useRef } from "react";
import { useAnimation, useInView } from "framer-motion";

export function useScrollAnimation(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: threshold });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return { ref, controls };
}
