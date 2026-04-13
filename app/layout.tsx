import type { Metadata, Viewport } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

/* ============================================
   Fonts
   ============================================ */
const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

/* ============================================
   SEO Metadata
   ============================================ */
export const metadata: Metadata = {
  title: "Yadhukrishna — Full-Stack Developer",
  description:
    "Portfolio of Yadhukrishna, a full-stack developer focused on scalable SaaS platforms, Angular, Java, and AWS-powered applications.",
  keywords: [
    "Full-Stack Developer",
    "Angular",
    "TypeScript",
    "Java",
    "Quarkus",
    "AWS",
    "Portfolio",
  ],
  authors: [{ name: "Yadhukrishnan U" }],
  creator: "Yadhukrishnan U",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yadhukrishna.dev",
    title: "Yadhukrishna — Full-Stack Developer",
    description:
      "Portfolio of Yadhukrishna — building scalable SaaS, loyalty platforms, and modern web applications.",
    siteName: "Yadhukrishna Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yadhukrishna — Full-Stack Developer",
    description: "Building scalable SaaS platforms, business websites, web applications.",
    creator: "@yadhukrishna",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

/* ============================================
   Providers (client-only) — dynamically imported
   to keep root layout a Server Component
   ============================================ */
import { LenisProvider } from "@/lib/lenis";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import { Navbar } from "@/components/ui/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${syne.variable} ${dmSans.variable}`}>
        {/* Providers */}
        <LenisProvider>
          {/* Global overlays (z-index stacked correctly in globals.css) */}
          <NoiseOverlay />
          <CustomCursor />
          <ScrollProgress />
          <LoadingScreen />
          <Navbar />

          {/* Page content */}
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
