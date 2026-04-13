"use client";

/**
 * AboutSection — Two-column layout with animated text reveal and a stylized stat grid.
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { personal } from "@/lib/data";

const stats = [
  { value: "2+",  label: "Years Experience" },
  { value: "10+", label: "Applications Delivered" },
  { value: "6+",  label: "Industry Domains" },
  { value: "99%", label: "Client Satisfaction" },
];

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" className="section-padding" style={{ background: "var(--bg-secondary)" }}>
      <div className="max-w-6xl mx-auto">

        {/* Section label */}
        <SectionWrapper>
          <p
            className="text-xs font-semibold tracking-[0.3em] uppercase mb-3"
            style={{ color: "var(--accent-indigo)", fontFamily: "var(--font-display)" }}
          >
            01 — About
          </p>
        </SectionWrapper>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div ref={ref}>
            <SectionWrapper delay={0.1}>
              <h2
                className="mb-6"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  letterSpacing: "-0.03em",
                  color: "var(--text-primary)",
                }}
              >
                Building the future,{" "}
                <span className="gradient-text">one commit at a time.</span>
              </h2>
            </SectionWrapper>

            {personal.about.split("\n\n").map((para, i) => (
              <SectionWrapper key={i} delay={0.2 + i * 0.1}>
                <p
                  className="mb-4"
                  style={{
                    color: "var(--text-secondary)",
                    lineHeight: 1.8,
                    fontSize: "1.05rem",
                  }}
                >
                  {para.trim()}
                </p>
              </SectionWrapper>
            ))}

            <SectionWrapper delay={0.4}>
              <div className="flex flex-wrap gap-3 mt-6">
                {["Angular", "TypeScript", "Java", "Quarkus", "AWS"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{
                      background: "var(--gradient-subtle)",
                      border: "1px solid var(--border-accent)",
                      color: "var(--accent-indigo)",
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </SectionWrapper>
          </div>

          {/* Right: Stats grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="glass-card p-6 text-center"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                whileHover={{ y: -4, boxShadow: "var(--shadow-glow)" }}
              >
                <p
                  className="gradient-text mb-1"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(2rem, 4vw, 2.8rem)",
                    fontWeight: 800,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-sm"
                  style={{ color: "var(--text-secondary)", fontFamily: "var(--font-display)" }}
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
