"use client";

/**
 * NoiseOverlay — fixed fullscreen grain texture overlay.
 * Applied at low opacity for a premium tactile feel.
 * Uses a CSS background of an inline SVG noise filter.
 */
export function NoiseOverlay() {
  return <div className="noise-overlay" aria-hidden="true" />;
}
