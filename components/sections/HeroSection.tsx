"use client";

/**
 * HeroSection — Full-viewport opening section.
 * Features typewriter-cycling role text, animated tagline, particle field,
 * a floating 3D sphere, and scroll indicator.
 */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ParticleField } from "@/components/three/ParticleField";
import { personal } from "@/lib/data";
import { HeroGraphic } from "@/components/ui/HeroGraphic";

function TypewriterText({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed === word) {
      // Pause then start deleting
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed === "") {
      // Move to next word
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    } else {
      const speed = deleting ? 40 : 80;
      timeout = setTimeout(() => {
        setDisplayed(deleting
          ? word.slice(0, displayed.length - 1)
          : word.slice(0, displayed.length + 1)
        );
      }, speed);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, index, words]);

  return (
    <span style={{ color: "var(--accent-indigo)" }}>
      {displayed}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
        style={{ display: "inline-block", width: 3, height: "1em", background: "var(--accent-indigo)", marginLeft: 4, verticalAlign: "text-bottom" }}
      />
    </span>
  );
}

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden animated-gradient"
    >
      {/* Particles background */}
      <ParticleField />

      {/* CSS-based Hero Graphic */}
      <HeroGraphic />

      {/* Radial glow behind text */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 30% 60%, rgba(99,102,241,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full section-padding">
        <div className="max-w-4xl">
          {/* Greeting badge */}
          <motion.div
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-sm"
            style={{
              background: "var(--bg-glass)",
              border: "1px solid var(--border-accent)",
              backdropFilter: "blur(12px)",
              fontFamily: "var(--font-display)",
              color: "var(--accent-indigo)",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.9, duration: 0.6 }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{
                background: "#22c55e",
                boxShadow: "0 0 8px #22c55e",
                animation: "pulse 2s infinite",
              }}
            />
            Available for opportunities
          </motion.div>

          {/* Name */}
          <motion.h1
            className="mb-4"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3rem, 8vw, 7rem)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 1,
              color: "var(--text-primary)",
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.0, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            {personal.name}
          </motion.h1>

          {/* Typewriter role */}
          <motion.div
            className="mb-6"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.5rem, 4vw, 3rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              minHeight: "1.2em",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.2, duration: 0.6 }}
          >
            <TypewriterText words={personal.roles} />
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="mb-10 max-w-xl"
            style={{
              color: "var(--text-secondary)",
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              lineHeight: 1.7,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.35, duration: 0.7 }}
          >
            {personal.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.5, duration: 0.7 }}
          >
            <MagneticButton>
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-sm leading-none transition-all"
                style={{
                  background: "var(--gradient-primary)",
                  color: "white",
                  fontFamily: "var(--font-display)",
                  boxShadow: "var(--shadow-glow)",
                  letterSpacing: "0.04em",
                }}
              >
                View Projects ↗
              </a>
            </MagneticButton>

            <MagneticButton>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-sm leading-none transition-all"
                style={{
                  background: "var(--bg-glass)",
                  border: "1px solid var(--border-subtle)",
                  color: "var(--text-primary)",
                  fontFamily: "var(--font-display)",
                  backdropFilter: "blur(12px)",
                  letterSpacing: "0.04em",
                }}
              >
                Get in Touch →
              </a>
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 0.7 }}
      >
        <p
          className="text-xs tracking-[0.2em] uppercase"
          style={{ color: "var(--text-muted)", fontFamily: "var(--font-display)" }}
        >
          Scroll
        </p>
        <motion.div
          className="w-[1px] h-12"
          style={{ background: "var(--gradient-primary)" }}
          animate={{ scaleY: [1, 0.3, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
