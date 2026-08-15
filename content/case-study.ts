import type { Locale } from "@/content/site";

export type CaseStudyContent = {
  navigation: { work: string; language: string };
  hero: { label: string; title: string; intro: string; visit: string; heroAlt: string };
  sections: {
    overview: { label: string; text: string };
    approach: { label: string; text: string; points: string[] };
    responsive: { label: string; text: string; desktop: string; mobile: string; desktopAlt: string; mobileAlt: string };
    localization: { label: string; text: string; points: string[] };
    agentic: { label: string; text: string; steps: string[]; validation: string[] };
    result: { label: string; text: string; visit: string; back: string };
  };
  facts: { role: string; roleValue: string; stack: string; stackValue: string; workflow: string; workflowValue: string };
};

export const caseStudyContent: Record<Locale, CaseStudyContent> = {
  en: {
    navigation: { work: "Work", language: "Language" },
    hero: {
      label: "WEB DEVELOPMENT · 2026",
      title: "PERSONAL PORTFOLIO",
      intro: "A bilingual personal portfolio bringing together digital marketing experience, modern web development and agentic AI workflows.",
      visit: "Visit live site ↗",
      heroAlt: "Desktop view of the Angelo Roic personal portfolio homepage",
    },
    facts: {
      role: "ROLE", roleValue: "Design · Development · Content · SEO",
      stack: "STACK", stackValue: "Next.js · TypeScript · Tailwind CSS",
      workflow: "WORKFLOW", workflowValue: "Codex · Agentic Development · Git",
    },
    sections: {
      overview: {
        label: "OVERVIEW",
        text: "The goal was to create a focused personal digital presence that presents experience, capabilities and current direction without unnecessary visual noise.",
      },
      approach: {
        label: "DESIGN APPROACH",
        text: "The visual system is deliberately quiet, allowing the work and professional story to lead. Typography establishes hierarchy, while color is reserved for orientation and small moments of emphasis.",
        points: ["Minimal editorial aesthetic", "Strong typography and clear hierarchy", "Restrained teal and purple accents", "Consistent spacing and content-first presentation"],
      },
      responsive: {
        label: "RESPONSIVE DESIGN",
        text: "The interface was refined and tested across mobile, tablet, laptop and desktop widths. Each layout keeps the same visual language while allowing content, navigation and imagery to adapt to the available space.",
        desktop: "DESKTOP",
        mobile: "MOBILE",
        desktopAlt: "Desktop portfolio homepage screenshot",
        mobileAlt: "Mobile portfolio homepage screenshot",
      },
      localization: {
        label: "LOCALIZATION & SEO",
        text: "The portfolio is available in English and Croatian, with each version designed to be useful to people and understandable to search engines.",
        points: ["English and Croatian routes at / and /hr", "Localized titles, descriptions and Open Graph metadata", "Correct document language, canonical URLs and hreflang alternates"],
      },
      agentic: {
        label: "AGENTIC DEVELOPMENT",
        text: "The project used an agentic development workflow: planning and design decisions were translated into implementation with Codex, then reviewed and refined through visual feedback and technical checks.",
        steps: ["Planning and design decisions", "Implementation with Codex", "Visual review", "Iterative refinement", "Technical validation"],
        validation: ["Git version control", "Lint validation", "TypeScript validation", "Production builds", "Responsive verification"],
      },
      result: {
        label: "RESULT",
        text: "A fast, responsive, bilingual portfolio that provides a clear foundation for future projects and case studies.",
        visit: "Visit live site ↗",
        back: "Back to Work ↑",
      },
    },
  },
  hr: {
    navigation: { work: "Projekti", language: "Jezik" },
    hero: {
      label: "WEB DEVELOPMENT · 2026",
      title: "OSOBNI PORTFOLIO",
      intro: "Dvojezični osobni portfolio koji spaja iskustvo u digitalnom marketingu, moderni web development i agentic AI workflow.",
      visit: "Posjeti web-stranicu ↗",
      heroAlt: "Desktop prikaz početne stranice osobnog portfolija Angela Roica",
    },
    facts: {
      role: "ULOGA", roleValue: "Dizajn · Razvoj · Sadržaj · SEO",
      stack: "TEHNOLOGIJE", stackValue: "Next.js · TypeScript · Tailwind CSS",
      workflow: "WORKFLOW", workflowValue: "Codex · Agentic Development · Git",
    },
    sections: {
      overview: {
        label: "PREGLED",
        text: "Cilj je bio izraditi fokusiran osobni portfolio koji jasno predstavlja iskustvo, sposobnosti i trenutačni smjer bez nepotrebnog vizualnog šuma.",
      },
      approach: {
        label: "DIZAJNERSKI PRISTUP",
        text: "Vizualni sustav namjerno je suzdržan kako bi rad i profesionalna priča bili u prvom planu. Tipografija stvara hijerarhiju, a boja je rezervirana za orijentaciju i male naglaske.",
        points: ["Minimalistička editorial estetika", "Snažna tipografija i jasna hijerarhija", "Suzdržani tirkizni i ljubičasti naglasci", "Dosljedan razmak i pristup usmjeren na sadržaj"],
      },
      responsive: {
        label: "RESPONZIVNI DIZAJN",
        text: "Sučelje je dorađeno i testirano na mobilnim uređajima, tabletima, laptopima i desktop ekranima. Svaki zadržava isti vizualni jezik, uz prirodnu prilagodbu sadržaja, navigacije i slika dostupnom prostoru.",
        desktop: "DESKTOP",
        mobile: "MOBILNI",
        desktopAlt: "Desktop snimka zaslona portfolija",
        mobileAlt: "Mobilna snimka zaslona portfolija",
      },
      localization: {
        label: "LOKALIZACIJA I SEO",
        text: "Portfolio je dostupan na engleskom i hrvatskom jeziku, tako da je koristan ljudima i razumljiv tražilicama.",
        points: ["Engleska i hrvatska verzija na / i /hr", "Lokalizirani naslovi, opisi i Open Graph metapodaci", "Ispravan jezik dokumenta, canonical URL-ovi i hreflang alternates"],
      },
      agentic: {
        label: "AGENTIC DEVELOPMENT",
        text: "Projekt je razvijen uz agentic development workflow: planiranje i dizajnerske odluke pretvoreni su u implementaciju s Codexom, zatim pregledani i dorađeni kroz vizualne povratne informacije i tehničke provjere.",
        steps: ["Planiranje i dizajnerske odluke", "Implementacija s Codexom", "Vizualni pregled", "Iterativno usavršavanje", "Tehnička validacija"],
        validation: ["Git kontrola verzija", "Lint validacija", "TypeScript validacija", "Produkcijski buildovi", "Provjera responzivnosti"],
      },
      result: {
        label: "REZULTAT",
        text: "Brz, responzivan i dvojezičan portfolio koji pruža jasnu osnovu za buduće projekte i njihove case studyje.",
        visit: "Posjeti web-stranicu ↗",
        back: "Natrag na projekte ↑",
      },
    },
  },
};
