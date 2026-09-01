import type { ReactNode } from "react";
import localFont from "next/font/local";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";

const manrope = localFont({
  src: "./fonts/manrope-latin.woff2",
  variable: "--font-manrope",
  weight: "200 800",
  style: "normal",
  display: "swap",
});

const ibmPlexMono = localFont({
  src: [
    { path: "./fonts/ibm-plex-mono-400-latin.woff2", weight: "400", style: "normal" },
    { path: "./fonts/ibm-plex-mono-500-latin.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export function SiteRootLayout({ children, lang }: { children: ReactNode; lang: "en" | "hr" }) {
  return (
    <html lang={lang} className={`${manrope.variable} ${ibmPlexMono.variable}`}>
      <body>
        {children}
        <Analytics />
        <GoogleAnalytics gaId="G-0F0EWTE9QM" />
      </body>
    </html>
  );
}
