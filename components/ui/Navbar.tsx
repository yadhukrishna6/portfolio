"use client";

/**
 * Navbar — fixed top navigation with glassmorphism effect on scroll.
 * Uses Lenis scrollTo for smooth anchor navigation.
 * Includes mobile hamburger menu.
 */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "@/lib/lenis";
import { ThemeToggle } from "./ThemeToggle";
import { personal } from "@/lib/data";

const navLinks = [
  { label: "About",      href: "#about" },
  { label: "Skills",     href: "#skills" },
  { label: "Projects",   href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact",    href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollTo } = useLenis();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) scrollTo(el as HTMLElement, { offset: -80 });
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-[9990] px-6 py-4 flex items-center justify-between"
        style={{
          background: scrolled ? "var(--bg-glass)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border-subtle)" : "1px solid transparent",
          transition: "all 0.4s ease",
        }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.8, duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
      >

        {/* Logo */}
        <button
          suppressHydrationWarning
          onClick={() => scrollTo(0)}
          data-cursor-hover
          className="font-bold text-xl tracking-tight"
          style={{
            fontFamily: "var(--font-display)",
            background: "var(--gradient-primary)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {personal.firstName.charAt(0)}{personal.lastName.charAt(0)}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              suppressHydrationWarning
              onClick={() => handleNav(link.href)}
              data-cursor-hover
              className="text-sm font-medium transition-colors hover:opacity-100"
              style={{
                color: "var(--text-secondary)",
                fontFamily: "var(--font-display)",
                letterSpacing: "0.05em",
              }}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href={personal.resumeUrl}
            data-cursor-hover
            download="Yadhukrishna-Resume.pdf"
            className="hidden md:inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold transition-all hover:opacity-90"
            style={{
              background: "var(--gradient-primary)",
              color: "white",
              fontFamily: "var(--font-display)",
              boxShadow: "var(--shadow-glow)",
            }}
          >
            Resume ↗
          </a>

          {/* Mobile Hamburger */}
          <button
            suppressHydrationWarning
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="block h-[2px] rounded-full"
                style={{ background: "var(--text-primary)", width: i === 1 ? 16 : 22 }}
                animate={mobileOpen
                  ? i === 0 ? { rotate: 45, y: 6, width: 22 }
                  : i === 2 ? { rotate: -45, y: -6, width: 22 }
                  : { opacity: 0 }
                  : { rotate: 0, y: 0, opacity: 1, width: i === 1 ? 16 : 22 }
                }
                transition={{ duration: 0.25 }}
              />
            ))}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[9989] flex flex-col items-center justify-center md:hidden"
            style={{ background: "var(--bg-primary)" }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                suppressHydrationWarning
                onClick={() => handleNav(link.href)}
                className="text-4xl font-bold mb-6"
                style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                {link.label}
              </motion.button>
            ))}
            <motion.a
              href={personal.resumeUrl}
              download="Yadhukrishna-Resume.pdf"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-3xl font-bold"
              style={{ fontFamily: "var(--font-display)", color: "var(--accent-indigo)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.08 }}
            >
              Resume
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
