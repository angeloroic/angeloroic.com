export type Locale = "en" | "hr";

export type SiteContent = {
  nav: { about: string; work: string; experience: string; contact: string };
  hero: { title: string; copy: string; cta: string };
  about: { label: string; paragraphs: string[] };
  work: { label: string };
  services: { label: string; areas: { title: string; items: string[] }[] };
  experience: { label: string; entries: { dates: string; role: string; company?: string; description: string }[] };
  contact: { label: string; title: string; copy: string; email: string; linkedin: string; github: string };
  footer: { copyright: string; location: string };
};

export type WorkProject = {
  slug: string;
  completed: boolean;
  index: string;
  category: string;
  title: string;
  technologies: string[];
  previewImage: string;
  previewAvailable: boolean;
  caseStudyUrls?: Record<Locale, string>;
  websiteUrl?: string;
  codeUrl?: string;
  localized: Record<Locale, { category: string; description: string; caseStudy: string; visit: string; code: string; previewAlt: string; previewPlaceholder: string }>;
};

// Adding a completed project here automatically exposes the Work section and
// navigation link. Empty categories are not rendered.
export const workProjects: WorkProject[] = [
  {
    slug: "angelo-roic-portfolio",
    completed: true,
    index: "01",
    category: "web-development",
    title: "PERSONAL PORTFOLIO",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Agentic Development"],
    previewImage: "/angelo-roic-portfolio-preview.png",
    previewAvailable: true,
    caseStudyUrls: { en: "/work/personal-portfolio", hr: "/hr/work/personal-portfolio" },
    websiteUrl: "https://angeloroic.com",
    codeUrl: "https://github.com/angeloroic/angeloroic.com",
    localized: {
      en: {
        category: "WEB DEVELOPMENT",
        description: "A bilingual personal portfolio designed and built as a fast, responsive website with a strong focus on typography, accessibility, SEO and clean user experience.",
        caseStudy: "View case study →",
        visit: "View live site ↗",
        code: "View code ↗",
        previewAlt: "Preview of Angelo Roic personal portfolio website",
        previewPlaceholder: "Screenshot to be added",
      },
      hr: {
        category: "WEB DEVELOPMENT",
        description: "Dvojezični osobni portfolio dizajniran i izrađen kao brza i responzivna web-stranica, s posebnim naglaskom na tipografiju, pristupačnost, SEO i čisto korisničko iskustvo.",
        caseStudy: "Pogledaj case study →",
        visit: "Pogledaj live site ↗",
        code: "Pogledaj kod ↗",
        previewAlt: "Pregled osobnog portfolija Angela Roica",
        previewPlaceholder: "Snimka zaslona će biti dodana",
      },
    },
  },
  {
    slug: "adverdose",
    completed: true,
    index: "02",
    category: "web-development",
    title: "Adverdose",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design", "Git", "GitHub Pages"],
    previewImage: "/adverdose-desktop.png",
    previewAvailable: true,
    caseStudyUrls: { en: "/work/adverdose", hr: "/hr/work/adverdose" },
    websiteUrl: "https://angeloroic.github.io/adverdose/",
    codeUrl: "https://github.com/angeloroic/adverdose",
    localized: {
      en: {
        category: "WEB DEVELOPMENT",
        description: "A responsive marketing website built from scratch with HTML, CSS and JavaScript.",
        caseStudy: "View case study →",
        visit: "View live site ↗",
        code: "View code ↗",
        previewAlt: "Desktop screenshot of the Adverdose marketing website",
        previewPlaceholder: "Screenshot to be added",
      },
      hr: {
        category: "WEB DEVELOPMENT",
        description: "Responzivna marketinška web-stranica izrađena od nule koristeći HTML, CSS i JavaScript.",
        caseStudy: "Pogledaj case study →",
        visit: "Pogledaj live site ↗",
        code: "Pogledaj kod ↗",
        previewAlt: "Desktop snimka zaslona marketinške web-stranice Adverdose",
        previewPlaceholder: "Snimka zaslona će biti dodana",
      },
    },
  },
];

export const englishContent: SiteContent = {
  nav: { about: "About", work: "Work", experience: "Experience", contact: "Contact" },
  hero: {
    title: "Digital marketing.\nModern web development.\nAgentic AI.",
    copy: "14+ years of digital marketing experience, now combined with modern web development and AI-powered workflows to build smarter digital products.",
    cta: "View my work ↓",
  },
  about: {
    label: "About",
    paragraphs: [
      "I’ve spent the last 14+ years working across digital marketing, from SEO and building websites to paid media, performance marketing, e-commerce and recruitment.",
      "Over the years, I’ve managed and optimized campaigns at significant scale, worked across both the affiliate and advertiser sides of the industry, and more recently moved into recruitment, where I use my industry experience to identify and evaluate talent for performance-driven companies.",
      "Today, I’m also expanding that experience into modern web development and agentic AI, building websites, digital products and AI-powered workflows that combine technology with a marketer’s understanding of what actually drives results.",
    ],
  },
  work: { label: "Work" },
  services: {
    label: "What I Do",
    areas: [
      { title: "DIGITAL MARKETING", items: ["SEO", "Meta Ads", "Google Ads", "YouTube Ads", "Performance Marketing", "E-commerce", "Analytics"] },
      { title: "WEB DEVELOPMENT", items: ["HTML", "CSS", "JavaScript", "Responsive Development", "WordPress", "Web Performance", "Git/GitHub"] },
      { title: "AI & AGENTIC WORKFLOWS", items: ["AI-assisted development", "AI agents", "Agentic workflows", "Automation", "Research workflows", "Data workflows"] },
      { title: "RECRUITMENT & TALENT", items: ["Candidate sourcing", "Candidate screening/evaluation", "Industry-specific recruitment", "Talent matching", "Candidate management"] },
    ],
  },
  experience: {
    label: "Experience",
    entries: [
      { dates: "2012 → 2017", role: "Independent Digital Marketer", description: "Started with affiliate marketing, YouTube, SEO and WordPress, building and ranking websites before moving deeper into paid acquisition." },
      { dates: "2017 → Present", role: "Founder / Owner", company: "ROI Media", description: "Independent digital marketing business focused over the years on performance marketing, paid acquisition and digital projects." },
      { dates: "2022 → 2025", role: "Founder / Owner", company: "Adverdose Ltd.", description: "Operated a UK-based performance marketing company, managing paid acquisition across Meta, Google and YouTube at significant scale." },
      { dates: "2024 → 2025", role: "Affiliate Manager", company: "LeadX Pro", description: "Affiliate management, traffic quality, campaign performance and scaling across multiple performance marketing verticals." },
      { dates: "2026", role: "Data Analyst, E-commerce", company: "Tailored Canvases", description: "Campaign analysis and optimization using Triple Whale across large-scale Meta advertising operations." },
      { dates: "2026 → Present", role: "Recruitment Specialist", company: "AffPal", description: "Recruitment and evaluation of talent for performance-driven companies, leveraging extensive affiliate and digital marketing industry experience." },
    ],
  },
  contact: { label: "Contact", title: "Let’s connect.", copy: "Open to interesting projects, opportunities and collaborations.", email: "Email", linkedin: "LinkedIn", github: "GitHub" },
  footer: { copyright: "© 2026 Angelo Roic", location: "Stari Grad, Croatia" },
};

export const croatianContent: SiteContent = {
  nav: { about: "O meni", work: "Radovi", experience: "Iskustvo", contact: "Kontakt" },
  hero: {
    title: "Digitalni marketing.\nModerni web development.\nAgentic AI.",
    copy: "14+ godina iskustva u digitalnom marketingu, danas povezano s modernim web developmentom i AI automatizacijom za izradu pametnijih digitalnih proizvoda.",
    cta: "Pogledaj moje radove ↓",
  },
  about: {
    label: "O meni",
    paragraphs: [
      "Posljednjih 14+ godina radio sam u različitim područjima digitalnog marketinga, od SEO-a i izrade web-stranica do plaćenog oglašavanja, performance marketinga, e-trgovine i regrutacije.",
      "Tijekom godina vodio sam i optimizirao kampanje velikog opsega, radio i na affiliate i na oglašivačkoj strani industrije te se u novije vrijeme posvetio regrutaciji, gdje svoje iskustvo iz industrije koristim za prepoznavanje i procjenu kandidata za tvrtke usmjerene na rezultate.",
      "Danas to iskustvo proširujem modernim web developmentom i agentic AI-jem, izrađujući web-stranice, digitalne proizvode i AI automatizacije koje spajaju tehnologiju s marketinškim razumijevanjem onoga što uistinu donosi rezultate.",
    ],
  },
  work: { label: "Projekti" },
  services: {
    label: "Čime se bavim",
    areas: [
      { title: "DIGITALNI MARKETING", items: ["SEO", "Meta Ads", "Google Ads", "YouTube Ads", "Performance marketing", "E-trgovina", "Analitika"] },
      { title: "WEB DEVELOPMENT", items: ["HTML", "CSS", "JavaScript", "Responsive web development", "WordPress", "Web performanse", "Git/GitHub"] },
      { title: "AI & AGENTIC WORKFLOWS", items: ["Razvoj uz pomoć AI-ja", "AI agenti", "Agentic workflows", "Automatizacija", "Research workflows", "Data workflows"] },
      { title: "REGRUTACIJA I TALENTI", items: ["Pronalaženje kandidata", "Selekcija i procjena kandidata", "Regrutacija za specifične industrije", "Povezivanje kandidata i tvrtki", "Upravljanje kandidatima"] },
    ],
  },
  experience: {
    label: "Iskustvo",
    entries: [
      { dates: "2012 → 2017", role: "Freelance stručnjak za digitalni marketing", description: "Počeo sam s affiliate marketingom, YouTubeom, SEO-om i WordPressom, izrađujući i pozicionirajući web-stranice prije dubljeg ulaska u plaćeno oglašavanje." },
      { dates: "2017 → danas", role: "Osnivač / vlasnik", company: "ROI Media", description: "Samostalni rad u digitalnom marketingu, tijekom godina usmjeren na performance marketing, plaćeno oglašavanje i digitalne projekte." },
      { dates: "2022 → 2025", role: "Osnivač / vlasnik", company: "Adverdose Ltd.", description: "Vodio sam britansku tvrtku za performance marketing te upravljao plaćenim oglašavanjem na Meta, Google i YouTube kanalima velikog opsega." },
      { dates: "2024 → 2025", role: "Affiliate Manager", company: "LeadX Pro", description: "Upravljanje affiliate partnerima, kvaliteta prometa, izvedba kampanja i skaliranje u više vertikala performance marketinga." },
      { dates: "2026", role: "Data Analyst, E-commerce", company: "Tailored Canvases", description: "Analiza i optimizacija kampanja pomoću Triple Whalea u Meta oglašavanju velikog opsega." },
      { dates: "2026 → danas", role: "Specijalist za regrutaciju", company: "AffPal", description: "Regrutacija i procjena kandidata za tvrtke usmjerene na rezultate, uz primjenu opsežnog iskustva u affiliate marketingu i širem digitalnom marketingu." },
    ],
  },
  contact: { label: "Kontakt", title: "Povežimo se.", copy: "Otvoren sam za zanimljive projekte, prilike i suradnje.", email: "E-mail", linkedin: "LinkedIn", github: "GitHub" },
  footer: { copyright: "© 2026 Angelo Roic", location: "Stari Grad, Hrvatska" },
};
