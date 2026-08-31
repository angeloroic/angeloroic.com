import type { Locale } from "@/content/site";

type RoiMediaCaseStudyContent = {
  navigation: { work: string; language: string };
  hero: { label: string; title: string; intro: string; visit: string };
  facts: { label: string; values: string[] }[];
  sections: {
    overview: { label: string; paragraphs: string[] };
    challenge: { label: string; paragraphs: string[] };
    design: { label: string; paragraphs: string[] };
    responsive: { label: string; desktop: string; mobile: string; desktopAlt: string; mobileAlt: string };
    seo: { label: string; paragraphs: string[] };
    production: { label: string; paragraphs: string[] };
    result: { label: string; paragraphs: string[]; visit: string; back: string };
  };
};

export const roiMediaCaseStudyContent: Record<Locale, RoiMediaCaseStudyContent> = {
  en: {
    navigation: { work: "Work", language: "Language" },
    hero: {
      label: "WEB DEVELOPMENT · 2026",
      title: "ROI Media",
      intro: "A website for a digital studio from Hvar, developed from strategy and content through design, development and production.",
      visit: "View live site ↗",
    },
    facts: [
      { label: "Role", values: ["Strategy", "Design", "Content", "Development", "SEO", "Production"] },
      { label: "Technologies", values: ["Next.js", "TypeScript", "Cloudflare", "Resend", "Turnstile"] },
      { label: "Workflow", values: ["Agentic AI-assisted development", "Git/GitHub", "Automated deployment"] },
    ],
    sections: {
      overview: {
        label: "Project overview",
        paragraphs: [
          "The goal was to build a digital presence that clearly connects web development and digital marketing while maintaining its own character and an authentic connection to Hvar.",
          "The result is a modern bilingual website built around real local photography, strong typography, a distinctive visual system and carefully considered motion.",
        ],
      },
      challenge: {
        label: "Challenge",
        paragraphs: [
          "The main challenge was bringing different services into one clear story.",
          "Web, SEO, advertising, analytics and CRO needed to feel like connected parts of the same system rather than separate services.",
          "At the same time, Hvar needed to be present in the site's identity without making it feel like a tourism brand.",
        ],
      },
      design: {
        label: "Design & experience",
        paragraphs: [
          "The dark-first design combines a deep navy base, warm off-white tones and sea-blue accents.",
          "Animations, transitions and interactions are used subtly to add depth and rhythm without distracting from the content.",
          "Responsive behavior was adapted to individual sections, allowing layouts and interactions to change depending on screen size.",
        ],
      },
      responsive: {
        label: "Responsive",
        desktop: "Desktop",
        mobile: "Mobile",
        desktopAlt: "Desktop screenshot of the ROI Media website",
        mobileAlt: "Mobile screenshot of the ROI Media website",
      },
      seo: {
        label: "Bilingual SEO",
        paragraphs: [
          "The Croatian version is served at /, while the English version is available at /en, using a shared architecture and localized content.",
          "SEO was built in from the start through localized metadata, canonical URLs, hreflang, structured data, sitemap and robots.txt.",
        ],
      },
      production: {
        label: "Production",
        paragraphs: [
          "The site is delivered through Cloudflare, while a lightweight Worker handles the contact form with server-side validation, Turnstile, honeypot protection, rate limiting and Resend.",
          "Development included an agentic AI-assisted workflow for implementation, debugging, testing and production validation.",
          "GitHub is connected to Cloudflare for automated builds and deployment.",
        ],
      },
      result: {
        label: "Result",
        paragraphs: [
          "ROI Media now has a fast, responsive and bilingual website that brings positioning, design, SEO, lead generation and production infrastructure into one cohesive system.",
        ],
        visit: "View live site ↗",
        back: "Back to Work ↑",
      },
    },
  },
  hr: {
    navigation: { work: "Projekti", language: "Jezik" },
    hero: {
      label: "WEB DEVELOPMENT · 2026",
      title: "ROI Media",
      intro: "Web stranica digitalnog studija s Hvara, razvijena od strategije i sadržaja do dizajna, razvoja i produkcije.",
      visit: "Pogledaj live site ↗",
    },
    facts: [
      { label: "Uloga", values: ["Strategija", "Dizajn", "Sadržaj", "Razvoj", "SEO", "Produkcija"] },
      { label: "Tehnologije", values: ["Next.js", "TypeScript", "Cloudflare", "Resend", "Turnstile"] },
      { label: "Workflow", values: ["Agentic AI-assisted development", "Git/GitHub", "Automated deployment"] },
    ],
    sections: {
      overview: {
        label: "Pregled projekta",
        paragraphs: [
          "Cilj je bio izgraditi digitalnu prisutnost koja jasno povezuje izradu web stranica i digitalni marketing, a pritom ima vlastiti karakter i autentičnu povezanost s Hvarom.",
          "Rezultat je moderna dvojezična stranica sa stvarnim lokalnim fotografijama, snažnom tipografijom, prepoznatljivim vizualnim sustavom i pažljivo osmišljenim animacijama.",
        ],
      },
      challenge: {
        label: "Izazov",
        paragraphs: [
          "Najveći izazov bio je objediniti različite usluge u jednu jasnu priču.",
          "Web, SEO, oglašavanje, analitika i CRO trebali su djelovati kao povezani dijelovi istog sustava, bez generičnog agency izgleda.",
          "Istovremeno je Hvar trebao biti prisutan u identitetu stranice, ali bez dojma turističkog brenda.",
        ],
      },
      design: {
        label: "Dizajn i iskustvo",
        paragraphs: [
          "Dark-first dizajn kombinira duboku navy podlogu, toplu off-white boju i sea-blue naglaske.",
          "Animacije, prijelazi i interakcije koriste se suptilno kako bi stranica dobila dubinu i ritam bez odvlačenja pažnje od sadržaja.",
          "Responsive ponašanje prilagođeno je pojedinim sekcijama, pa se layout i interakcije mijenjaju ovisno o veličini ekrana.",
        ],
      },
      responsive: {
        label: "Responsive",
        desktop: "Desktop",
        mobile: "Mobilni",
        desktopAlt: "Desktop screenshot ROI Media stranice",
        mobileAlt: "Mobile screenshot ROI Media stranice",
      },
      seo: {
        label: "Dvojezični SEO",
        paragraphs: [
          "Hrvatska verzija nalazi se na /, a engleska na /en, uz zajedničku arhitekturu i lokalizirani sadržaj.",
          "SEO je ugrađen od početka kroz lokalizirane metapodatke, canonical URL-ove, hreflang, structured data, sitemap i robots.txt.",
        ],
      },
      production: {
        label: "Produkcija",
        paragraphs: [
          "Stranica se isporučuje kroz Cloudflare, dok mali Worker obrađuje contact formu uz server-side validaciju, Turnstile, honeypot zaštitu, rate limiting i Resend.",
          "Razvoj je uključivao agentic AI-assisted workflow za implementaciju, debugging, testiranje i produkcijsku provjeru.",
          "GitHub je povezan s Cloudflareom za automatski build i deployment.",
        ],
      },
      result: {
        label: "Rezultat",
        paragraphs: [
          "ROI Media sada ima brzu, responzivnu i dvojezičnu web stranicu koja povezuje pozicioniranje, dizajn, SEO, lead generation i produkcijsku infrastrukturu u jednu cjelinu.",
        ],
        visit: "Pogledaj live site ↗",
        back: "Natrag na projekte ↑",
      },
    },
  },
};
