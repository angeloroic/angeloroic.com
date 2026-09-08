import type { Metadata } from "next";
import { OpgMakjanicCaseStudyPage } from "@/components/opg-makjanic-case-study-page";

const title = "OPG Makjanić Case Study | Angelo Roic";
const description = "Kompletan rebuild web-stranice za OPG Makjanić na Hvaru, od strategije i UX/UI dizajna do responsive developmenta, SEO-a i production infrastrukture.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/hr/work/opg-makjanic",
    languages: { en: "/work/opg-makjanic", hr: "/hr/work/opg-makjanic" },
  },
  openGraph: {
    url: "/hr/work/opg-makjanic",
    title,
    description,
    images: [{ url: "/opg-after-desktop-hero.webp", width: 1440, height: 662, alt: "Rebuild web-stranice OPG Makjanić" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/opg-after-desktop-hero.webp"] },
};

export default function CroatianOpgMakjanicCaseStudy() {
  return <OpgMakjanicCaseStudyPage locale="hr" />;
}
