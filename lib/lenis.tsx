"use client";

/**
 * Lenis smooth scroll provider
 * Initializes Lenis and syncs it with Framer Motion's animation frame loop.
 * Exposes the Lenis instance via React context.
 */
import { createContext, useContext, useEffect, useRef, ReactNode } from "react";
import Lenis from "lenis";
import { useMotionValue, useAnimationFrame } from "framer-motion";

type LenisContextType = {
  lenis: Lenis | null;
  scrollTo: (target: string | number | HTMLElement, options?: object) => void;
};

const LenisContext = createContext<LenisContextType>({
  lenis: null,
  scrollTo: () => {},
});

export function LenisProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const time = useMotionValue(0);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 2,
    });
    lenisRef.current = lenis;

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Sync Lenis with Framer Motion's RAF loop
  useAnimationFrame((t) => {
    time.set(t);
    lenisRef.current?.raf(t);
  });

  const scrollTo = (
    target: string | number | HTMLElement,
    options: object = {}
  ) => {
    lenisRef.current?.scrollTo(target as HTMLElement, options);
  };

  return (
    <LenisContext.Provider value={{ lenis: lenisRef.current, scrollTo }}>
      {children}
    </LenisContext.Provider>
  );
}

export const useLenis = () => useContext(LenisContext);
