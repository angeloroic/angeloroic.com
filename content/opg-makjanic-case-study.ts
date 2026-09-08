import type { Locale } from "@/content/site";

type OpgMakjanicSection = {
  label: string;
  paragraphs: string[];
};

export type OpgMakjanicCaseStudyContent = {
  navigation: { work: string; language: string };
  hero: { label: string; title: string; intro: string; visit: string };
  facts: { label: string; values: string[] }[];
  comparison: {
    before: string;
    after: string;
    desktopHeroBeforeAlt: string;
    desktopHeroAfterAlt: string;
    desktopServicesBeforeAlt: string;
    desktopServicesAfterAlt: string;
    mobileHeroBeforeAlt: string;
    mobileHeroAfterAlt: string;
    mobileContactBeforeAlt: string;
    mobileContactAfterAlt: string;
  };
  sections: {
    overview: OpgMakjanicSection;
    challenge: OpgMakjanicSection;
    research: OpgMakjanicSection;
    design: OpgMakjanicSection;
    services: OpgMakjanicSection;
    responsive: OpgMakjanicSection;
    contact: OpgMakjanicSection;
    seo: OpgMakjanicSection;
    result: OpgMakjanicSection & { visit: string; back: string };
  };
};

export const opgMakjanicCaseStudyContent: Record<Locale, OpgMakjanicCaseStudyContent> = {
  en: {
    navigation: { work: "Projects", language: "Language" },
    hero: {
      label: "WEB DEVELOPMENT · 2026",
      title: "OPG Makjanić",
      intro: "A complete rebuild of a local agricultural business website, combining an authentic Hvar identity with modern UX, responsive development, local SEO and production-ready lead infrastructure.",
      visit: "View live site ↗",
    },
    facts: [
      { label: "ROLE", values: ["Strategy", "UX/UI", "Development", "Content", "SEO", "Production"] },
      { label: "TECHNOLOGIES", values: ["Next.js", "TypeScript", "Cloudflare", "D1", "Resend", "Turnstile"] },
      { label: "WORKFLOW", values: ["Research", "Agentic AI-assisted development", "Git/GitHub", "Automated deployment"] },
    ],
    comparison: {
      before: "BEFORE",
      after: "AFTER",
      desktopHeroBeforeAlt: "Previous OPG Makjanić desktop homepage hero",
      desktopHeroAfterAlt: "Rebuilt OPG Makjanić desktop homepage hero",
      desktopServicesBeforeAlt: "Previous OPG Makjanić desktop services presentation",
      desktopServicesAfterAlt: "Rebuilt OPG Makjanić desktop services presentation",
      mobileHeroBeforeAlt: "Previous OPG Makjanić mobile homepage hero",
      mobileHeroAfterAlt: "Rebuilt OPG Makjanić mobile homepage hero",
      mobileContactBeforeAlt: "Previous OPG Makjanić mobile contact section",
      mobileContactAfterAlt: "Rebuilt OPG Makjanić mobile contact and enquiry experience",
    },
    sections: {
      overview: {
        label: "PROJECT OVERVIEW",
        paragraphs: [
          "OPG Makjanić is a family-run agricultural business based in Svirče on the island of Hvar.",
          "The existing website was rebuilt from the ground up to create a clearer, more modern digital presence while preserving the authentic character of the business and its connection to the island.",
          "The project covered the full production process, from information architecture, UX and visual direction through development, SEO, accessibility, contact infrastructure and deployment.",
        ],
      },
      challenge: {
        label: "CHALLENGE",
        paragraphs: [
          "The previous website was functional, but its presentation, structure and technical foundation no longer reflected the business effectively.",
          "Content hierarchy was limited, agricultural services were spread across long individual sections, the mobile experience lacked focus, and the contact journey was very basic.",
          "The rebuild needed to improve all of these areas without losing the practical, local character of a working agricultural business on Hvar.",
        ],
      },
      research: {
        label: "RESEARCH & STRATEGY",
        paragraphs: [
          "Before finalizing the site structure and copy, keyword research was carried out around the core agricultural services and relevant search intent.",
          "The research helped shape service naming, content priorities, homepage metadata and the local SEO direction.",
          "Highly localized keyword variants around Hvar showed limited search volume, so the strategy focused on natural use of the primary service terms supported by clear local context rather than forcing location keywords into the content.",
        ],
      },
      design: {
        label: "DESIGN & EXPERIENCE",
        paragraphs: [
          "The new visual direction was built around the landscape and character of Hvar rather than a generic agricultural website aesthetic.",
          "Warm ivory surfaces, dark olive tones, charcoal and muted lavender are combined with Cormorant Garamond display typography, Manrope body text and authentic photography from Svirče and the surrounding landscape.",
          "Editorial layouts, restrained motion and a minimal visual system create a more refined experience while keeping the site grounded, practical and closely connected to the business itself.",
        ],
      },
      services: {
        label: "SERVICES, RESTRUCTURED",
        paragraphs: [
          "One of the biggest structural improvements was the way the agricultural services were presented.",
          "The previous website displayed services through large individual sections that required significant scrolling. The new design brings all five services into a compact visual system, allowing visitors to understand the full offering at a glance while still giving each service its own image and explanation.",
          "The result is clearer hierarchy, faster scanning and a much stronger overview of what the business actually provides.",
        ],
      },
      responsive: {
        label: "RESPONSIVE EXPERIENCE",
        paragraphs: [
          "The mobile experience was treated as its own layout rather than simply a reduced version of the desktop site.",
          "Navigation, image crops, typography, spacing, calls to action and content flow were adapted for smaller screens so the most important information appears earlier and remains easy to scan.",
          "The redesigned hero makes the business identity, service offering and primary actions immediately accessible without losing the atmosphere of the original photography.",
        ],
      },
      contact: {
        label: "CONTACT & LEAD EXPERIENCE",
        paragraphs: [
          "The contact experience was rebuilt from a basic information-and-map section into a complete enquiry flow.",
          "Business details, direct phone and email access, a structured contact form and location information now work together as one clear journey.",
          "Behind the interface, submissions are validated server-side and protected with honeypot detection, Cloudflare Turnstile and rate limiting. Valid enquiries are stored in a dedicated D1 database, delivered through Resend and routed into the central ROI Media CRM.",
        ],
      },
      seo: {
        label: "SEO & PRODUCTION",
        paragraphs: [
          "SEO and production infrastructure were built into the project rather than added after the visual work was finished.",
          "Keyword research informed the content direction and local search strategy, while the technical foundation includes metadata, canonical URLs, Open Graph data, LocalBusiness and WebSite structured data, sitemap and robots configuration.",
          "GA4 and Google Search Console provide measurement and search visibility, while accessibility support includes reduced-motion behaviour and UserWay as an additional accessibility layer.",
          "The production setup runs on Cloudflare, with GitHub main connected to automated builds and deployments. The rollout also included DNS and custom-domain cutover, end-to-end production testing and a verified rollback path.",
        ],
      },
      result: {
        label: "RESULT",
        paragraphs: [
          "The rebuild transformed an outdated website into a modern, responsive digital presence that better reflects the character of OPG Makjanić and the environment in which it operates.",
          "Services are easier to understand, the mobile and contact experiences are significantly clearer, and the business now has a stronger production foundation for local search, enquiries and ongoing maintenance.",
        ],
        visit: "View live site ↗",
        back: "Back to Projects ↑",
      },
    },
  },
  hr: {
    navigation: { work: "Projekti", language: "Jezik" },
    hero: {
      label: "WEB DEVELOPMENT · 2026",
      title: "OPG Makjanić",
      intro: "Kompletan rebuild web-stranice lokalnog poljoprivrednog gospodarstva, koji spaja autentičan hvarski identitet s modernim UX-om, responsive developmentom, lokalnim SEO-om i production-ready infrastrukturom za upite.",
      visit: "Pogledaj live site ↗",
    },
    facts: [
      { label: "ULOGA", values: ["Strategija", "UX/UI", "Development", "Sadržaj", "SEO", "Production"] },
      { label: "TEHNOLOGIJE", values: ["Next.js", "TypeScript", "Cloudflare", "D1", "Resend", "Turnstile"] },
      { label: "WORKFLOW", values: ["Research", "Agentic AI-assisted development", "Git/GitHub", "Automated deployment"] },
    ],
    comparison: {
      before: "PRIJE",
      after: "POSLIJE",
      desktopHeroBeforeAlt: "Prethodni desktop hero web-stranice OPG Makjanić",
      desktopHeroAfterAlt: "Redizajnirani desktop hero web-stranice OPG Makjanić",
      desktopServicesBeforeAlt: "Prethodna desktop prezentacija usluga OPG-a Makjanić",
      desktopServicesAfterAlt: "Redizajnirana desktop prezentacija usluga OPG-a Makjanić",
      mobileHeroBeforeAlt: "Prethodni mobile hero web-stranice OPG Makjanić",
      mobileHeroAfterAlt: "Redizajnirani mobile hero web-stranice OPG Makjanić",
      mobileContactBeforeAlt: "Prethodna mobile kontakt sekcija OPG-a Makjanić",
      mobileContactAfterAlt: "Redizajnirano mobile kontakt iskustvo i forma za upite OPG-a Makjanić",
    },
    sections: {
      overview: {
        label: "PREGLED PROJEKTA",
        paragraphs: [
          "OPG Makjanić je obiteljsko poljoprivredno gospodarstvo sa sjedištem u Svirčima na otoku Hvaru.",
          "Postojeća web-stranica izgrađena je iznova kako bi se stvorila jasnija i modernija digitalna prisutnost, uz očuvanje autentičnog karaktera gospodarstva i njegove povezanosti s otokom.",
          "Projekt je obuhvatio cijeli production proces, od informacijske arhitekture, UX-a i vizualnog smjera do developmenta, SEO-a, pristupačnosti, kontakt infrastrukture i deploymenta.",
        ],
      },
      challenge: {
        label: "IZAZOV",
        paragraphs: [
          "Prethodna web-stranica bila je funkcionalna, ali njezina prezentacija, struktura i tehnička podloga više nisu dovoljno dobro predstavljale poslovanje.",
          "Hijerarhija sadržaja bila je ograničena, poljoprivredne usluge bile su raspoređene kroz duge pojedinačne sekcije, mobile iskustvu nedostajao je fokus, a kontakt proces bio je vrlo osnovan.",
          "Rebuild je trebao unaprijediti sva ta područja bez gubitka praktičnog i lokalnog karaktera stvarnog poljoprivrednog gospodarstva na Hvaru.",
        ],
      },
      research: {
        label: "ISTRAŽIVANJE I STRATEGIJA",
        paragraphs: [
          "Prije definiranja finalne strukture sajta i copyja provedeno je keyword istraživanje za glavne poljoprivredne usluge i relevantni search intent.",
          "Rezultati istraživanja pomogli su oblikovati nazive usluga, prioritete sadržaja, homepage metapodatke i smjer lokalnog SEO-a.",
          "Visoko lokalizirane varijante ključnih riječi vezane uz Hvar imale su ograničen volumen pretraživanja, pa je strategija bila usmjerena na prirodno korištenje glavnih service termina uz jasan lokalni kontekst, bez forsiranja lokacijskih keyworda u sadržaj.",
        ],
      },
      design: {
        label: "DIZAJN I ISKUSTVO",
        paragraphs: [
          "Novi vizualni smjer temelji se na krajoliku i karakteru Hvara, umjesto na generičnoj estetici poljoprivrednih web-stranica.",
          "Tople ivory površine, tamni maslinasti tonovi, charcoal i prigušena lavanda kombinirani su s Cormorant Garamond display tipografijom, Manrope body tekstom i autentičnim fotografijama iz Svirča i okolnog krajolika.",
          "Editorial layouti, suptilan motion i minimalan vizualni sustav stvaraju profinjenije iskustvo, a pritom zadržavaju praktičan, prizemljen karakter i jasnu povezanost sa samim gospodarstvom.",
        ],
      },
      services: {
        label: "JASNIJA PREZENTACIJA USLUGA",
        paragraphs: [
          "Jedno od najvećih strukturnih poboljšanja bila je prezentacija poljoprivrednih usluga.",
          "Prethodna web-stranica prikazivala je usluge kroz velike pojedinačne sekcije koje su zahtijevale dosta scrollanja. Novi dizajn svih pet usluga okuplja u kompaktan vizualni sustav, tako da posjetitelj može odmah razumjeti cjelokupnu ponudu, dok svaka usluga i dalje ima vlastitu fotografiju i objašnjenje.",
          "Rezultat je jasnija hijerarhija, brže skeniranje sadržaja i znatno bolji pregled onoga što gospodarstvo stvarno nudi.",
        ],
      },
      responsive: {
        label: "RESPONSIVE ISKUSTVO",
        paragraphs: [
          "Mobile iskustvo tretirano je kao zaseban layout, a ne samo kao umanjena verzija desktop sajta.",
          "Navigacija, crop fotografija, tipografija, spacing, pozivi na akciju i tok sadržaja prilagođeni su manjim ekranima kako bi se najvažnije informacije pojavile ranije i ostale jednostavne za pregled.",
          "Redizajnirani hero odmah prikazuje identitet gospodarstva, ponudu usluga i glavne akcije, bez gubitka atmosfere originalnih fotografija.",
        ],
      },
      contact: {
        label: "KONTAKT I LEAD ISKUSTVO",
        paragraphs: [
          "Kontakt iskustvo redizajnirano je iz osnovne sekcije s informacijama i kartom u cjelovit proces za slanje upita.",
          "Poslovni podaci, izravni kontakt telefonom i e-mailom, strukturirana kontakt forma i lokacija sada zajedno čine jedan jasan korisnički tok.",
          "U pozadini se svaki upit validira na serveru i štiti honeypot provjerom, Cloudflare Turnstileom i rate limitingom. Valjani upiti spremaju se u zasebnu D1 bazu, šalju putem Resenda i automatski prosljeđuju u centralni ROI Media CRM.",
        ],
      },
      seo: {
        label: "SEO I PRODUCTION",
        paragraphs: [
          "SEO i production infrastruktura ugrađeni su u projekt od početka, a ne dodani tek nakon završetka vizualnog dijela.",
          "Keyword research definirao je smjer sadržaja i lokalne search strategije, dok tehnička podloga uključuje metadata, canonical URL-ove, Open Graph podatke, LocalBusiness i WebSite structured data, sitemap i robots konfiguraciju.",
          "GA4 i Google Search Console omogućuju mjerenje i praćenje prisutnosti u pretraživanju, dok accessibility podrška uključuje reduced-motion ponašanje i UserWay kao dodatni accessibility layer.",
          "Production setup radi na Cloudflareu, uz GitHub main povezan s automatskim buildovima i deploymentima. Rollout je uključivao DNS i custom-domain cutover, end-to-end production testiranje i verificiran rollback path.",
        ],
      },
      result: {
        label: "REZULTAT",
        paragraphs: [
          "Rebuild je zastarjelu web-stranicu pretvorio u modernu i responsive digitalnu prisutnost koja puno bolje odražava karakter OPG-a Makjanić i okruženje u kojem posluje.",
          "Usluge su jasnije predstavljene, mobile i kontakt iskustvo znatno su unaprijeđeni, a gospodarstvo sada ima kvalitetniju production podlogu za lokalnu pretragu, upite i daljnje održavanje.",
        ],
        visit: "Pogledaj live site ↗",
        back: "Natrag na Projekte ↑",
      },
    },
  },
};
