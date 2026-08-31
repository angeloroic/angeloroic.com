import type { Metadata } from "next";
import { RoiMediaCaseStudyPage } from "@/components/roi-media-case-study-page";

const title = "ROI Media Case Study | Angelo Roic";
const description = "How ROI Media was built as a bilingual digital studio website combining strategy, design, development, SEO and Cloudflare production infrastructure.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/work/roi-media",
    languages: { en: "/work/roi-media", hr: "/hr/work/roi-media" },
  },
  openGraph: {
    url: "/work/roi-media",
    title,
    description,
    images: [{ url: "/roi-media-desktop.png", width: 1425, height: 802, alt: "ROI Media digital studio website" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/roi-media-desktop.png"] },
};

export default function RoiMediaCaseStudy() {
  return <RoiMediaCaseStudyPage locale="en" />;
}
