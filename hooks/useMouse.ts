"use client";

/**
 * useMouse — tracks mouse position relative to a target element
 * Returns normalized x/y values in range [-0.5, 0.5] and raw pixel coords.
 * Used by tilt cards, magnetic buttons, and parallax layers.
 */
import { useState, useCallback } from "react";

type MousePosition = {
  x: number;      // raw pixels from element left
  y: number;      // raw pixels from element top
  normX: number;  // normalized [-0.5, 0.5]
  normY: number;  // normalized [-0.5, 0.5]
};

export function useMouse() {
  const [position, setPosition] = useState<MousePosition>({
    x: 0, y: 0, normX: 0, normY: 0,
  });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setPosition({
        x,
        y,
        normX: x / rect.width - 0.5,
        normY: y / rect.height - 0.5,
      });
    },
    []
  );

  const reset = useCallback(() => {
    setPosition({ x: 0, y: 0, normX: 0, normY: 0 });
  }, []);

  return { position, handleMouseMove, reset };
}
