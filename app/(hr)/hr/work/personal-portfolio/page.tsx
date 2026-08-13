import type { Metadata } from "next";
import { CaseStudyPage } from "@/components/case-study-page";

export const metadata: Metadata = {
  title: "Studija slučaja: osobni portfolio | Angelo Roic",
  description: "Kako je dvojezični osobni portfolio Angela Roica dizajniran i izrađen uz Next.js, TypeScript, Tailwind CSS i agentic development workflow.",
  alternates: {
    canonical: "/hr/work/personal-portfolio",
    languages: { en: "/work/personal-portfolio", hr: "/hr/work/personal-portfolio" },
  },
  openGraph: {
    url: "/hr/work/personal-portfolio",
    title: "Studija slučaja: osobni portfolio | Angelo Roic",
    description: "Dvojezični osobni portfolio izrađen modernim web developmentom i agentic development workflowom.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Osobni portfolio Angela Roica" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function CroatianPersonalPortfolioCaseStudy() {
  return <CaseStudyPage locale="hr" />;
}
