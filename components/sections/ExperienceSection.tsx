"use client";

/**
 * ExperienceSection — Vertical animated timeline with alternating side reveal.
 */
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { experience } from "@/lib/data";

function TimelineItem({ entry, index }: { entry: typeof experience[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className="relative grid md:grid-cols-2 gap-8 mb-16 last:mb-0">
      {/* Center line dot */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 flex-col items-center z-10">
        <motion.div
          className="w-4 h-4 rounded-full border-2"
          style={{
            background: "var(--bg-primary)",
            borderColor: "var(--accent-indigo)",
            boxShadow: isInView ? "var(--shadow-glow)" : "none",
          }}
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
        />
      </div>

      {/* Left column: content if even, spacer if odd */}
      <motion.div
        className={isLeft ? "" : "md:col-start-2"}
        initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
      >
        <div
          className={`glass-card p-6 ${isLeft ? "md:mr-8" : "md:ml-8"}`}
          style={{ borderLeft: `3px solid var(--accent-indigo)` }}
        >
          <h3
            className="mb-1"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.2rem",
              fontWeight: 700,
              color: "var(--text-primary)",
            }}
          >
            {entry.role}
          </h3>

          <a
            href={entry.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mb-1 font-semibold text-sm hover:opacity-80 transition-opacity"
            style={{ color: "var(--accent-indigo)", fontFamily: "var(--font-display)" }}
          >
            {entry.company} ↗
          </a>

          <p className="text-xs mb-4" style={{ color: "var(--text-muted)" }}>{entry.location}</p>

          <ul className="space-y-2">
            {entry.bullets.map((bullet, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm"
                style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}
              >
                <span style={{ color: "var(--accent-indigo)", flexShrink: 0, marginTop: 4 }}>▸</span>
                {bullet}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 mt-4">
            {entry.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 rounded text-xs"
                style={{
                  background: "var(--bg-glass)",
                  border: "1px solid var(--border-subtle)",
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-display)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" className="section-padding" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-5xl mx-auto">

        <SectionWrapper>
          <p
            className="text-xs font-semibold tracking-[0.3em] uppercase mb-3"
            style={{ color: "var(--accent-indigo)", fontFamily: "var(--font-display)" }}
          >
            04 — Experience
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
            Where I&apos;ve <span className="gradient-text">Made an Impact</span>
          </h2>
        </SectionWrapper>

        <SectionWrapper delay={0.2}>
          <p className="mb-16 max-w-xl" style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
            My professional journey across startups and tech leaders shaping the modern web.
          </p>
        </SectionWrapper>

        {/* Center vertical line */}
        <div className="relative">
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{ background: "var(--border-subtle)" }}
          />
          {experience.map((entry, i) => (
            <TimelineItem key={entry.id} entry={entry} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
