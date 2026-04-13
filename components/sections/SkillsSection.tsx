"use client";

/**
 * SkillsSection — Bento-grid style skill cards grouped by category.
 * Each card has animated progress bars that fill on scroll entry.
 */
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { skills, Skill } from "@/lib/data";

type Category = "All" | "Frontend" | "Backend" | "Tools" | "Design";
const CATEGORIES: Category[] = ["All", "Frontend", "Backend", "Tools", "Design"];

function SkillCard({ skill, delay }: { skill: Skill; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="glass-card p-5"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
      whileHover={{
        y: -6,
        borderColor: "var(--accent-indigo)",
        boxShadow: "var(--shadow-glow)",
        transition: { duration: 0.2 },
      }}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{skill.icon}</span>
          <span
            className="font-semibold text-sm"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            {skill.name}
          </span>
        </div>
        <span
          className="text-xs font-medium"
          style={{ color: "var(--accent-indigo)", fontFamily: "var(--font-display)" }}
        >
          {skill.level}%
        </span>
      </div>

      {/* Progress bar */}
      <div
        className="h-[3px] rounded-full overflow-hidden"
        style={{ background: "var(--border-subtle)" }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{ background: "var(--gradient-primary)" }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ delay: delay + 0.2, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        />
      </div>
    </motion.div>
  );
}

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered = activeCategory === "All"
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="section-padding" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-6xl mx-auto">

        <SectionWrapper>
          <p
            className="text-xs font-semibold tracking-[0.3em] uppercase mb-3"
            style={{ color: "var(--accent-indigo)", fontFamily: "var(--font-display)" }}
          >
            02 — Skills
          </p>
        </SectionWrapper>

        <SectionWrapper delay={0.1}>
          <h2
            className="mb-4"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              letterSpacing: "-0.03em",
              color: "var(--text-primary)",
            }}
          >
            My <span className="gradient-text">Technical Toolbox</span>
          </h2>
        </SectionWrapper>

        <SectionWrapper delay={0.2}>
          <p className="mb-10 max-w-xl" style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
            A collection of technologies I&apos;ve honed through real-world projects and open-source contributions.
          </p>
        </SectionWrapper>

        {/* Category filter */}
        <SectionWrapper delay={0.25}>
          <div className="flex flex-wrap gap-3 mb-10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                suppressHydrationWarning
                onClick={() => setActiveCategory(cat)}
                data-cursor-hover
                className="px-5 py-2 rounded-full text-sm font-semibold transition-all"
                style={{
                  fontFamily: "var(--font-display)",
                  background: activeCategory === cat ? "var(--gradient-primary)" : "var(--bg-glass)",
                  color: activeCategory === cat ? "white" : "var(--text-secondary)",
                  border: `1px solid ${activeCategory === cat ? "transparent" : "var(--border-subtle)"}`,
                  boxShadow: activeCategory === cat ? "var(--shadow-glow)" : "none",
                  backdropFilter: "blur(12px)",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </SectionWrapper>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} delay={i * 0.05} />
          ))}
        </div>
      </div>
    </section>
  );
}
