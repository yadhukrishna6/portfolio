"use client";

/**
 * Footer — minimal dark footer with copyright, social icons, and back-to-top.
 */
import { motion } from "framer-motion";
import { useLenis } from "@/lib/lenis";
import { social, personal } from "@/lib/data";

const SOCIAL_ICONS: Record<string, string> = {
  github:   "🐙",
  linkedin: "in",
  twitter:  "𝕏",
  mail:     "✉",
};

export function Footer() {
  const { scrollTo } = useLenis();

  return (
    <footer
      className="px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6"
      style={{
        background: "var(--bg-primary)",
        borderTop: "1px solid var(--border-subtle)",
      }}
    >
      {/* Logo + copyright */}
      <div className="flex items-center gap-4">
        <span
          className="font-bold text-lg gradient-text"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {personal.firstName.charAt(0)}{personal.lastName.charAt(0)}
        </span>
        <p className="text-xs" style={{ color: "var(--text-muted)", fontFamily: "var(--font-display)" }}>
          © {new Date().getFullYear()} {personal.name}. Built with Next.js & ♥
        </p>
      </div>

      {/* Social links */}
      <div className="flex gap-4">
        {social.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="w-9 h-9 flex items-center justify-center rounded-xl text-sm font-bold transition-all hover:opacity-70"
            style={{
              background: "var(--bg-glass)",
              border: "1px solid var(--border-subtle)",
              color: "var(--text-secondary)",
              fontFamily: "var(--font-display)",
            }}
            data-cursor-hover
          >
            {SOCIAL_ICONS[s.icon] ?? s.icon}
          </a>
        ))}
      </div>

      {/* Back to top */}
      <motion.button
        suppressHydrationWarning
        onClick={() => scrollTo(0)}
        className="flex items-center gap-2 text-xs font-semibold transition-opacity hover:opacity-80"
        style={{ color: "var(--accent-indigo)", fontFamily: "var(--font-display)" }}
        whileHover={{ y: -2 }}
        data-cursor-hover
      >
        ↑ Back to top
      </motion.button>
    </footer>
  );
}
