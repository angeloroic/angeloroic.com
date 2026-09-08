import type { Metadata } from "next";
import { OpgMakjanicCaseStudyPage } from "@/components/opg-makjanic-case-study-page";

const title = "OPG Makjanić Case Study | Angelo Roic";
const description = "A complete website rebuild for OPG Makjanić on Hvar, covering strategy, UX/UI, responsive development, SEO, accessibility and production infrastructure.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/work/opg-makjanic",
    languages: { en: "/work/opg-makjanic", hr: "/hr/work/opg-makjanic" },
  },
  openGraph: {
    url: "/work/opg-makjanic",
    title,
    description,
    images: [{ url: "/opg-after-desktop-hero.webp", width: 1440, height: 662, alt: "OPG Makjanić website rebuild" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/opg-after-desktop-hero.webp"] },
};

export default function OpgMakjanicCaseStudy() {
  return <OpgMakjanicCaseStudyPage locale="en" />;
}
