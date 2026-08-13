import type { Metadata } from "next";
import { CaseStudyPage } from "@/components/case-study-page";

export const metadata: Metadata = {
  title: "Personal Portfolio Case Study | Angelo Roic",
  description: "How Angelo Roic's bilingual personal portfolio was designed and built with Next.js, TypeScript, Tailwind CSS and an agentic development workflow.",
  alternates: {
    canonical: "/work/personal-portfolio",
    languages: { en: "/work/personal-portfolio", hr: "/hr/work/personal-portfolio" },
  },
  openGraph: {
    url: "/work/personal-portfolio",
    title: "Personal Portfolio Case Study | Angelo Roic",
    description: "A bilingual personal portfolio built with modern web development and an agentic development workflow.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Angelo Roic personal portfolio" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function PersonalPortfolioCaseStudy() {
  return <CaseStudyPage locale="en" />;
}
