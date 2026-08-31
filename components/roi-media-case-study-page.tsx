import Image from "next/image";
import Link from "next/link";
import roiMediaMobile from "@/public/roi-media-mobile.png";
import { roiMediaCaseStudyContent } from "@/content/roi-media-case-study";
import type { Locale } from "@/content/site";

const liveSiteUrl = "https://roimedia.hr";

function CopyBlock({ paragraphs, lead = false }: { paragraphs: string[]; lead?: boolean }) {
  return (
    <div className="case-copy">
      {paragraphs.map((paragraph, index) => (
        <p className={lead && index === 0 ? "case-lead" : undefined} key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}

export function RoiMediaCaseStudyPage({ locale }: { locale: Locale }) {
  const content = roiMediaCaseStudyContent[locale];
  const paths = locale === "en"
    ? { home: "/", work: "/#work", caseStudy: "/work/roi-media", alternate: "/hr/work/roi-media" }
    : { home: "/hr", work: "/hr#work", caseStudy: "/hr/work/roi-media", alternate: "/work/roi-media" };

  const textSections = [content.sections.challenge, content.sections.design, content.sections.seo, content.sections.production];

  return (
    <div lang={locale}>
      <header className="site-header">
        <nav className="shell nav case-nav" aria-label="Case study navigation">
          <Link className="wordmark" href={paths.home}>ANGELO ROIC</Link>
          <div className="case-nav-side">
            <Link className="case-work-link" href={paths.work}>{content.navigation.work}</Link>
            <div className="locale-switch" aria-label={content.navigation.language}>
              <Link className={locale === "en" ? "active" : ""} href={locale === "en" ? paths.caseStudy : paths.alternate}>EN</Link>
              <Link className={locale === "hr" ? "active" : ""} href={locale === "hr" ? paths.caseStudy : paths.alternate}>HR</Link>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <section className="shell case-hero" aria-labelledby="case-study-title">
          <p className="case-kicker">{content.hero.label}</p>
          <h1 className="case-title-proper" id="case-study-title">{content.hero.title}</h1>
          <p className="case-intro">{content.hero.intro}</p>
          <div className="case-hero-links">
            <a className="text-link case-hero-link" href={liveSiteUrl} target="_blank" rel="noopener noreferrer">{content.hero.visit}</a>
          </div>
        </section>

        <section className="case-section" aria-labelledby="roi-overview-heading">
          <div className="shell case-grid">
            <h2 className="section-title" id="roi-overview-heading">{content.sections.overview.label}</h2>
            <div className="case-body">
              <CopyBlock paragraphs={content.sections.overview.paragraphs} lead />
              <dl className="case-facts">
                {content.facts.map((fact) => (
                  <div key={fact.label}>
                    <dt>{fact.label}</dt>
                    <dd>{fact.values.join(" · ")}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {textSections.slice(0, 2).map((section, index) => {
          const id = index === 0 ? "roi-challenge-heading" : "roi-design-heading";
          return (
            <section className="case-section" aria-labelledby={id} key={section.label}>
              <div className="shell case-grid">
                <h2 className="section-title" id={id}>{section.label}</h2>
                <div className="case-body"><CopyBlock paragraphs={section.paragraphs} /></div>
              </div>
            </section>
          );
        })}

        <section className="case-section" aria-labelledby="roi-responsive-heading">
          <div className="shell case-grid">
            <h2 className="section-title" id="roi-responsive-heading">{content.sections.responsive.label}</h2>
            <div className="case-body">
              <div className="case-screenshots">
                <figure>
                  <figcaption>{content.sections.responsive.desktop}</figcaption>
                  <div className="case-screen case-screen-desktop">
                    <Image src="/roi-media-desktop.png" alt={content.sections.responsive.desktopAlt} fill sizes="(min-width: 1200px) 45vw, (min-width: 640px) 50vw, 100vw" />
                  </div>
                </figure>
                <figure>
                  <figcaption>{content.sections.responsive.mobile}</figcaption>
                  <div className="case-screen case-screen-mobile case-screen-roi-mobile">
                    <Image src={roiMediaMobile} alt={content.sections.responsive.mobileAlt} fill sizes="(min-width: 1200px) 15vw, (min-width: 640px) 24vw, 58vw" />
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {textSections.slice(2).map((section, index) => {
          const id = index === 0 ? "roi-seo-heading" : "roi-production-heading";
          return (
            <section className="case-section" aria-labelledby={id} key={section.label}>
              <div className="shell case-grid">
                <h2 className="section-title" id={id}>{section.label}</h2>
                <div className="case-body"><CopyBlock paragraphs={section.paragraphs} /></div>
              </div>
            </section>
          );
        })}

        <section className="case-section case-result" aria-labelledby="roi-result-heading">
          <div className="shell case-grid">
            <h2 className="section-title" id="roi-result-heading">{content.sections.result.label}</h2>
            <div className="case-body">
              <CopyBlock paragraphs={content.sections.result.paragraphs} lead />
              <div className="case-result-links">
                <a className="text-link" href={liveSiteUrl} target="_blank" rel="noopener noreferrer">{content.sections.result.visit}</a>
                <Link className="text-link" href={paths.work}>{content.sections.result.back}</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
