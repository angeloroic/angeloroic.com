import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteRootLayout } from "@/components/site-root-layout";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://angeloroic.com"),
  title: "Angelo Roic | Digital Marketing, Modern Web Development, Agentic AI",
  description: "14+ years of digital marketing experience, now combined with modern web development and AI-powered workflows to build smarter digital products.",
  alternates: { canonical: "/", languages: { en: "/", hr: "/hr" } },
  openGraph: {
    url: "/",
    title: "Angelo Roic | Digital Marketing, Modern Web Development, Agentic AI",
    description: "14+ years of digital marketing experience, now combined with modern web development and AI-powered workflows to build smarter digital products.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Angelo Roic portfolio" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function EnglishRootLayout({ children }: { children: ReactNode }) {
  return <SiteRootLayout lang="en">{children}</SiteRootLayout>;
}
