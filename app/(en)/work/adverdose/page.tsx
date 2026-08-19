import type { Metadata } from "next";
import { AdverdoseCaseStudyPage } from "@/components/adverdose-case-study-page";

export const metadata: Metadata = {
  title: "Adverdose Case Study | Angelo Roic",
  description: "How Adverdose was built from scratch as a responsive marketing website using HTML, CSS and JavaScript.",
  alternates: {
    canonical: "/work/adverdose",
    languages: { en: "/work/adverdose", hr: "/hr/work/adverdose" },
  },
  openGraph: {
    url: "/work/adverdose",
    title: "Adverdose Case Study | Angelo Roic",
    description: "A responsive marketing website built from scratch with HTML, CSS and JavaScript.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Adverdose case study by Angelo Roic" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function AdverdoseCaseStudy() {
  return <AdverdoseCaseStudyPage locale="en" />;
}
