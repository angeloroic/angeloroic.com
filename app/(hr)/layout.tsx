import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteRootLayout } from "@/components/site-root-layout";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://angeloroic.com"),
  title: "Angelo Roic | Digitalni marketing, web development, agentic AI",
  description: "14+ godina iskustva u digitalnom marketingu, danas povezano s modernim razvojem i radnim tokovima pokretanima umjetnom inteligencijom.",
  alternates: { canonical: "/hr", languages: { en: "/", hr: "/hr" } },
  openGraph: {
    url: "/hr",
    title: "Angelo Roic | Digitalni marketing, web development, agentic AI",
    description: "14+ godina iskustva u digitalnom marketingu, danas povezano s modernim razvojem i radnim tokovima pokretanima umjetnom inteligencijom.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Angelo Roic portfolio" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function CroatianRootLayout({ children }: { children: ReactNode }) {
  return <SiteRootLayout lang="hr">{children}</SiteRootLayout>;
}
