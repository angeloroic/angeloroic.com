import type { Metadata } from "next";
import { RoiMediaCaseStudyPage } from "@/components/roi-media-case-study-page";

const title = "ROI Media Case Study | Angelo Roic";
const description = "Kako je ROI Media izgrađen kao dvojezična web stranica digitalnog studija koja povezuje strategiju, dizajn, razvoj, SEO i Cloudflare produkcijsku infrastrukturu.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/hr/work/roi-media",
    languages: { en: "/work/roi-media", hr: "/hr/work/roi-media" },
  },
  openGraph: {
    url: "/hr/work/roi-media",
    title,
    description,
    images: [{ url: "/roi-media-desktop.png", width: 1425, height: 802, alt: "Web stranica digitalnog studija ROI Media" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/roi-media-desktop.png"] },
};

export default function CroatianRoiMediaCaseStudy() {
  return <RoiMediaCaseStudyPage locale="hr" />;
}
