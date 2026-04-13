"use client";

/**
 * ContactSection — Contact form with animated inputs and social links.
 */
import { useState } from "react";
import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { social, personal } from "@/lib/data";

const SOCIAL_ICONS: Record<string, string> = {
  github:   "🐙",
  linkedin: "in",
  twitter:  "𝕏",
  mail:     "✉",
};

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Simulate async form submission
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="section-padding"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="max-w-5xl mx-auto">

        <SectionWrapper>
          <p
            className="text-xs font-semibold tracking-[0.3em] uppercase mb-3"
            style={{ color: "var(--accent-indigo)", fontFamily: "var(--font-display)" }}
          >
            05 — Contact
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
            Let&apos;s <span className="gradient-text">Build Together</span>
          </h2>
        </SectionWrapper>

        <SectionWrapper delay={0.2}>
          <p className="mb-12 max-w-xl" style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
            Have a project in mind, or just want to chat about tech? I&apos;m always open to
            exciting opportunities and interesting conversations.
          </p>
        </SectionWrapper>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <SectionWrapper delay={0.25} direction="left">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label
                  className="block text-xs font-semibold mb-2 tracking-wide uppercase"
                  style={{ color: "var(--text-muted)", fontFamily: "var(--font-display)" }}
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  suppressHydrationWarning
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jane Smith"
                  className="form-input w-full px-4 py-3 text-sm"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  className="block text-xs font-semibold mb-2 tracking-wide uppercase"
                  style={{ color: "var(--text-muted)", fontFamily: "var(--font-display)" }}
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  suppressHydrationWarning
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="jane@company.com"
                  className="form-input w-full px-4 py-3 text-sm"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  className="block text-xs font-semibold mb-2 tracking-wide uppercase"
                  style={{ color: "var(--text-muted)", fontFamily: "var(--font-display)" }}
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  suppressHydrationWarning
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="form-input w-full px-4 py-3 text-sm resize-none"
                />
              </div>

              {/* Submit */}
              <MagneticButton>
                <motion.button
                  suppressHydrationWarning
                  type="submit"
                  disabled={sending || sent}
                  className="w-full px-8 py-4 rounded-full font-bold text-sm text-white transition-opacity"
                  style={{
                    background: sent
                      ? "linear-gradient(135deg, #22c55e, #16a34a)"
                      : "var(--gradient-primary)",
                    fontFamily: "var(--font-display)",
                    boxShadow: "var(--shadow-glow)",
                    letterSpacing: "0.05em",
                    opacity: sending ? 0.8 : 1,
                  }}
                  whileTap={{ scale: 0.98 }}
                  data-cursor-hover
                >
                  {sent
                    ? "✓ Message Sent!"
                    : sending
                    ? "Sending..."
                    : "Send Message →"
                  }
                </motion.button>
              </MagneticButton>
            </form>
          </SectionWrapper>

          {/* Social links */}
          <SectionWrapper delay={0.3} direction="right">
            <div>
              <p
                className="text-sm font-semibold mb-6"
                style={{ color: "var(--text-secondary)", fontFamily: "var(--font-display)" }}
              >
                Or reach me directly at{" "}
                <a
                  href={`mailto:${personal.email}`}
                  className="hover:opacity-80 transition-opacity"
                  style={{ color: "var(--accent-indigo)" }}
                >
                  {personal.email}
                </a>
              </p>

              <div className="flex gap-4">
                {social.map((s) => (
                  <MagneticButton key={s.label} strength={0.5}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="w-14 h-14 flex items-center justify-center rounded-2xl font-bold text-lg transition-all hover:opacity-80"
                      style={{
                        background: "var(--bg-glass)",
                        border: "1px solid var(--border-subtle)",
                        color: "var(--text-primary)",
                        fontFamily: "var(--font-display)",
                        backdropFilter: "blur(12px)",
                      }}
                      data-cursor-hover
                    >
                      {SOCIAL_ICONS[s.icon] ?? s.icon}
                    </a>
                  </MagneticButton>
                ))}
              </div>

              {/* Decorative glow blob */}
              <div
                className="mt-12 p-8 rounded-3xl"
                style={{
                  background: "var(--gradient-subtle)",
                  border: "1px solid var(--border-accent)",
                }}
              >
                <p
                  className="text-sm mb-2 font-semibold"
                  style={{ color: "var(--accent-indigo)", fontFamily: "var(--font-display)" }}
                >
                  💡 Currently available
                </p>
                <p className="text-sm" style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
                  I&apos;m open to full-time roles, freelance projects, and open-source collaborations.
                  Response time: usually within 24 hours.
                </p>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </div>
    </section>
  );
}
