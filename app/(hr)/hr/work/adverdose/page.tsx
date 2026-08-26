import type { Metadata } from "next";
import { AdverdoseCaseStudyPage } from "@/components/adverdose-case-study-page";

export const metadata: Metadata = {
  title: "Adverdose – case study | Angelo Roic",
  description: "Kako je Adverdose izrađen od nule kao responsive marketinška web-stranica uz HTML, CSS i JavaScript.",
  alternates: {
    canonical: "/hr/work/adverdose",
    languages: { en: "/work/adverdose", hr: "/hr/work/adverdose" },
  },
  openGraph: {
    url: "/hr/work/adverdose",
    title: "Adverdose – case study | Angelo Roic",
    description: "Responsive marketinška web-stranica izrađena od nule koristeći HTML, CSS i JavaScript.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Studija projekta Adverdose autora Angela Roica" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function CroatianAdverdoseCaseStudy() {
  return <AdverdoseCaseStudyPage locale="hr" />;
}
