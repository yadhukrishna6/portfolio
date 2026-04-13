"use client";

/**
 * ProjectsSection — Interactive project cards with 3D tilt, modal detail view.
 */
import { useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { useMouse } from "@/hooks/useMouse";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { projects, Project } from "@/lib/data";

function ProjectCard({
  project,
  index,
  onClick,
}: {
  project: Project;
  index: number;
  onClick: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { position, handleMouseMove, reset } = useMouse();

  const rotateX = -position.normY * 12;
  const rotateY = position.normX * 12;

  const gradients = [
    "linear-gradient(135deg, rgba(99,102,241,0.3), rgba(139,92,246,0.15))",
    "linear-gradient(135deg, rgba(245,158,11,0.25), rgba(99,102,241,0.15))",
    "linear-gradient(135deg, rgba(6,182,212,0.25), rgba(99,102,241,0.15))",
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="glass-card overflow-hidden cursor-pointer group"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove as unknown as React.MouseEventHandler<HTMLDivElement>}
        onMouseLeave={reset}
        onClick={onClick}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.15 }}
        data-cursor-hover
      >
        {/* Project image placeholder */}
        <div
          className="h-48 relative overflow-hidden"
          style={{ background: gradients[index % 3] }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="text-6xl opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-all duration-500"
            >
              {["⬡", "◈", "⬟", "◎", "⬢", "◇"][index % 6]}
            </span>
          </div>

          {/* Featured badge */}
          {project.featured && (
            <div
              className="absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-bold"
              style={{
                background: "var(--gradient-primary)",
                color: "white",
                fontFamily: "var(--font-display)",
              }}
            >
              Featured
            </div>
          )}
        </div>

        <div className="p-6">
          <h3
            className="mb-2"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.2rem",
              fontWeight: 700,
              color: "var(--text-primary)",
            }}
          >
            {project.title}
          </h3>
          <p className="text-sm mb-4" style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 rounded text-xs font-medium"
                style={{
                  background: "var(--bg-glass)",
                  border: "1px solid var(--border-subtle)",
                  color: "var(--text-secondary)",
                  fontFamily: "var(--font-display)",
                }}
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span
                className="px-2 py-1 rounded text-xs"
                style={{ color: "var(--text-muted)", fontFamily: "var(--font-display)" }}
              >
                +{project.tags.length - 3} more
              </span>
            )}
          </div>

          {/* Links */}
          <div className="flex gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-xs font-semibold transition-colors hover:opacity-80"
              style={{ color: "var(--accent-indigo)", fontFamily: "var(--font-display)" }}
            >
              GitHub ↗
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-xs font-semibold transition-colors hover:opacity-80"
              style={{ color: "var(--accent-amber)", fontFamily: "var(--font-display)" }}
            >
              Live Demo ↗
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <motion.div
      className="fixed inset-0 z-[9995] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0"
        style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
        onClick={onClose}
      />

      {/* Modal */}
      <motion.div
        className="relative glass-card max-w-2xl w-full p-6 md:p-8 overflow-y-auto max-h-[90vh]"
        initial={{ scale: 0.85, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.85, y: 20 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full transition-colors"
          style={{ background: "var(--bg-glass)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)" }}
          data-cursor-hover
        >
          ✕
        </button>

        <h2
          className="mb-2"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.8rem",
            fontWeight: 800,
            color: "var(--text-primary)",
            letterSpacing: "-0.02em",
          }}
        >
          {project.title}
        </h2>

        <p className="mb-6" style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
          {project.longDescription}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
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

        <div className="flex gap-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full font-semibold text-sm"
            style={{
              background: "var(--gradient-primary)",
              color: "white",
              fontFamily: "var(--font-display)",
            }}
          >
            View on GitHub ↗
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full font-semibold text-sm"
            style={{
              background: "var(--bg-glass)",
              border: "1px solid var(--border-subtle)",
              color: "var(--text-primary)",
              fontFamily: "var(--font-display)",
            }}
          >
            Live Demo ↗
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ProjectsSection() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="section-padding" style={{ background: "var(--bg-secondary)" }}>
      <div className="max-w-6xl mx-auto">

        <SectionWrapper>
          <p
            className="text-xs font-semibold tracking-[0.3em] uppercase mb-3"
            style={{ color: "var(--accent-indigo)", fontFamily: "var(--font-display)" }}
          >
            03 — Projects
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
            Work I&apos;m <span className="gradient-text">Proud Of</span>
          </h2>
        </SectionWrapper>

        <SectionWrapper delay={0.2}>
          <p className="mb-12 max-w-xl" style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
            A selection of projects that pushed my skills and delivered real value. Click any card to learn more.
          </p>
        </SectionWrapper>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onClick={() => setSelected(project)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
