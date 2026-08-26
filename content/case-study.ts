import type { Locale } from "@/content/site";

export type CaseStudyContent = {
  navigation: { work: string; language: string };
  hero: { label: string; title: string; intro: string; visit: string; code: string; heroAlt: string };
  sections: {
    overview: { label: string; text: string };
    approach: { label: string; text: string; points: string[] };
    responsive: { label: string; text: string; desktop: string; mobile: string; desktopAlt: string; mobileAlt: string };
    localization: { label: string; text: string; points: string[] };
    agentic: { label: string; text: string; steps: string[]; validation: string[] };
    result: { label: string; text: string; visit: string; code: string; back: string };
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
      visit: "View live site ↗",
      code: "View code ↗",
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
        text: "The portfolio is available in English and Croatian, with localized content and technical SEO tailored to both versions.",
        points: ["English and Croatian routes at / and /hr", "Localized titles, descriptions and Open Graph metadata", "Correct document language, canonical URLs and hreflang annotations"],
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
        visit: "View live site ↗",
        code: "View code ↗",
        back: "Back to Work ↑",
      },
    },
  },
  hr: {
    navigation: { work: "Projekti", language: "Jezik" },
    hero: {
      label: "WEB DEVELOPMENT · 2026",
      title: "OSOBNI PORTFOLIO",
      intro: "Dvojezični osobni portfolio koji spaja iskustvo u digitalnom marketingu s modernim web developmentom i agentic AI workflowima.",
      visit: "Pogledaj live site ↗",
      code: "Pogledaj kod ↗",
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
        points: ["Minimalistička editorialna estetika", "Snažna tipografija i jasna hijerarhija", "Suzdržani tirkizni i ljubičasti naglasci", "Dosljedan razmak i pristup usmjeren na sadržaj"],
      },
      responsive: {
        label: "RESPONZIVNI DIZAJN",
        text: "Sučelje je dorađeno i testirano na mobilnim uređajima, tabletima, laptopima i desktop ekranima. Svaki prikaz zadržava isti vizualni jezik, uz prirodnu prilagodbu sadržaja, navigacije i slika dostupnom prostoru.",
        desktop: "DESKTOP",
        mobile: "MOBILNI",
        desktopAlt: "Desktop snimka zaslona portfolija",
        mobileAlt: "Mobilna snimka zaslona portfolija",
      },
      localization: {
        label: "LOKALIZACIJA I SEO",
        text: "Portfolio je dostupan na engleskom i hrvatskom jeziku, uz lokaliziran sadržaj i tehnički SEO prilagođen objema verzijama.",
        points: ["Engleska i hrvatska verzija na / i /hr", "Lokalizirani naslovi, opisi i Open Graph metapodaci", "Ispravan jezik dokumenta, canonical URL-ovi i hreflang oznake"],
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
        visit: "Pogledaj live site ↗",
        code: "Pogledaj kod ↗",
        back: "Natrag na projekte ↑",
      },
    },
  },
};

type AdverdoseCaseStudyContent = {
  navigation: { work: string; language: string };
  hero: { label: string; title: string; intro: string; visit: string; code: string };
  facts: { role: string; roleValue: string; stack: string; stackValue: string; delivery: string; deliveryValue: string };
  sections: {
    overview: { label: string; text: string };
    approach: { label: string; text: string };
    responsive: { label: string; text: string; desktop: string; mobile: string; desktopAlt: string; mobileAlt: string };
    development: { label: string; text: string };
    result: { label: string; text: string; visit: string; code: string; back: string };
  };
};

export const adverdoseCaseStudyContent: Record<Locale, AdverdoseCaseStudyContent> = {
  en: {
    navigation: { work: "Work", language: "Language" },
    hero: {
      label: "WEB DEVELOPMENT",
      title: "Adverdose",
      intro: "A responsive marketing website built from scratch with HTML, CSS and JavaScript.",
      visit: "View live site ↗",
      code: "View code ↗",
    },
    facts: {
      role: "ROLE", roleValue: "Design · Development",
      stack: "STACK", stackValue: "HTML · CSS · JavaScript",
      delivery: "DELIVERY", deliveryValue: "Responsive Design · Git · GitHub Pages",
    },
    sections: {
      overview: {
        label: "OVERVIEW",
        text: "Adverdose is a custom-built marketing website created without a framework or page builder. The project was developed from scratch using semantic HTML, custom CSS and vanilla JavaScript, with the goal of keeping the site lightweight, fast and giving full control over its structure, styling and behaviour.",
      },
      approach: {
        label: "DESIGN APPROACH",
        text: "The visual direction focused on a clean, modern presentation with strong typography, clear content hierarchy and straightforward navigation. The layout was built specifically around the content rather than adapted from a pre-made template.",
      },
      responsive: {
        label: "RESPONSIVE DEVELOPMENT",
        text: "The responsive behaviour was written manually with custom media queries for different screen sizes. Layout spacing, typography and component behaviour were adjusted across desktop, tablet and mobile to maintain a consistent experience without relying on a framework.",
        desktop: "DESKTOP",
        mobile: "MOBILE",
        desktopAlt: "Desktop screenshot of the Adverdose marketing website",
        mobileAlt: "Mobile screenshot of the Adverdose marketing website",
      },
      development: {
        label: "DEVELOPMENT",
        text: "The site was built with semantic HTML, custom CSS and vanilla JavaScript, keeping the codebase straightforward and giving direct control over layout, styling and interactions.",
      },
      result: {
        label: "RESULT",
        text: "The final result is a lightweight, fully responsive static website that works across desktop, tablet and mobile without relying on frameworks or visual site builders.",
        visit: "View live site ↗",
        code: "View code ↗",
        back: "Back to Work ↑",
      },
    },
  },
  hr: {
    navigation: { work: "Projekti", language: "Jezik" },
    hero: {
      label: "WEB DEVELOPMENT",
      title: "Adverdose",
      intro: "Responzivna marketinška web-stranica izrađena od nule koristeći HTML, CSS i JavaScript.",
      visit: "Pogledaj live site ↗",
      code: "Pogledaj kod ↗",
    },
    facts: {
      role: "ULOGA", roleValue: "Dizajn · Razvoj",
      stack: "TEHNOLOGIJE", stackValue: "HTML · CSS · JavaScript",
      delivery: "ISPORUKA", deliveryValue: "Responsive Design · Git · GitHub Pages",
    },
    sections: {
      overview: {
        label: "PREGLED",
        text: "Adverdose je custom marketinška web-stranica izrađena bez frameworka i page buildera. Projekt je razvijen od nule koristeći semantički HTML, custom CSS i vanilla JavaScript, s ciljem da stranica ostane lagana i brza, uz potpunu kontrolu nad strukturom, stilovima i ponašanjem stranice.",
      },
      approach: {
        label: "DIZAJN",
        text: "Vizualni smjer fokusiran je na čist, moderan izgled, snažnu tipografiju, jasnu hijerarhiju sadržaja i jednostavnu navigaciju. Layout je izrađen posebno za sadržaj projekta, bez prilagođavanja unaprijed gotovom templateu.",
      },
      responsive: {
        label: "RESPONSIVE DEVELOPMENT",
        text: "Responsive ponašanje implementirano je ručno pomoću custom media queryja za različite veličine ekrana. Layout, razmaci, tipografija i ponašanje elemenata prilagođeni su za desktop, tablet i mobilne uređaje kako bi iskustvo ostalo konzistentno bez korištenja frameworka.",
        desktop: "DESKTOP",
        mobile: "MOBILNI",
        desktopAlt: "Desktop snimka zaslona marketinške web-stranice Adverdose",
        mobileAlt: "Mobilna snimka zaslona marketinške web-stranice Adverdose",
      },
      development: {
        label: "DEVELOPMENT",
        text: "Web-stranica je izrađena koristeći semantički HTML, custom CSS i vanilla JavaScript, uz jednostavan i pregledan codebase te direktnu kontrolu nad layoutom, stilovima i interakcijama.",
      },
      result: {
        label: "REZULTAT",
        text: "Konačni rezultat je lagana, potpuno responsive statička web-stranica koja radi na desktopu, tabletu i mobitelu bez korištenja frameworka ili vizualnih page buildera.",
        visit: "Pogledaj live site ↗",
        code: "Pogledaj kod ↗",
        back: "Natrag na projekte ↑",
      },
    },
  },
};
