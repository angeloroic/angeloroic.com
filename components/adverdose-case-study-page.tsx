import Image from "next/image";
import Link from "next/link";
import { adverdoseCaseStudyContent } from "@/content/case-study";
import type { Locale } from "@/content/site";

const liveSiteUrl = "https://angeloroic.github.io/adverdose/";
const codeUrl = "https://github.com/angeloroic/adverdose";

export function AdverdoseCaseStudyPage({ locale }: { locale: Locale }) {
  const content = adverdoseCaseStudyContent[locale];
  const paths = locale === "en"
    ? { home: "/", work: "/#work", caseStudy: "/work/adverdose", alternate: "/hr/work/adverdose" }
    : { home: "/hr", work: "/hr#work", caseStudy: "/hr/work/adverdose", alternate: "/work/adverdose" };

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
          <h1 id="case-study-title">{content.hero.title}</h1>
          <p className="case-intro">{content.hero.intro}</p>
          <div className="case-hero-links">
            <a className="text-link case-hero-link" href={liveSiteUrl} target="_blank" rel="noopener noreferrer">{content.hero.visit}</a>
            <a className="text-link case-hero-link" href={codeUrl} target="_blank" rel="noopener noreferrer">{content.hero.code}</a>
          </div>
        </section>

        <section className="case-section" aria-labelledby="overview-heading">
          <div className="shell case-grid">
            <h2 className="section-title" id="overview-heading">{content.sections.overview.label}</h2>
            <div className="case-body">
              <p className="case-lead">{content.sections.overview.text}</p>
              <dl className="case-facts">
                <div><dt>{content.facts.role}</dt><dd>{content.facts.roleValue}</dd></div>
                <div><dt>{content.facts.stack}</dt><dd>{content.facts.stackValue}</dd></div>
                <div><dt>{content.facts.delivery}</dt><dd>{content.facts.deliveryValue}</dd></div>
              </dl>
            </div>
          </div>
        </section>

        <section className="case-section" aria-labelledby="approach-heading">
          <div className="shell case-grid">
            <h2 className="section-title" id="approach-heading">{content.sections.approach.label}</h2>
            <div className="case-body"><p>{content.sections.approach.text}</p></div>
          </div>
        </section>

        <section className="case-section" aria-labelledby="responsive-heading">
          <div className="shell case-grid">
            <h2 className="section-title" id="responsive-heading">{content.sections.responsive.label}</h2>
            <div className="case-body">
              <p>{content.sections.responsive.text}</p>
              <div className="case-screenshots">
                <figure><figcaption>{content.sections.responsive.desktop}</figcaption><div className="case-screen case-screen-desktop"><Image src="/adverdose-desktop.png" alt={content.sections.responsive.desktopAlt} fill sizes="(min-width: 1200px) 45vw, (min-width: 640px) 50vw, 100vw" /></div></figure>
                <figure><figcaption>{content.sections.responsive.mobile}</figcaption><div className="case-screen case-screen-mobile"><Image src="/adverdose-mobile.png" alt={content.sections.responsive.mobileAlt} fill sizes="(min-width: 1200px) 15vw, (min-width: 640px) 24vw, 58vw" /></div></figure>
              </div>
            </div>
          </div>
        </section>

        <section className="case-section" aria-labelledby="development-heading">
          <div className="shell case-grid">
            <h2 className="section-title" id="development-heading">{content.sections.development.label}</h2>
            <div className="case-body"><p>{content.sections.development.text}</p></div>
          </div>
        </section>

        <section className="case-section case-result" aria-labelledby="result-heading">
          <div className="shell case-grid">
            <h2 className="section-title" id="result-heading">{content.sections.result.label}</h2>
            <div className="case-body"><p className="case-lead">{content.sections.result.text}</p><div className="case-result-links"><a className="text-link" href={liveSiteUrl} target="_blank" rel="noopener noreferrer">{content.sections.result.visit}</a><a className="text-link" href={codeUrl} target="_blank" rel="noopener noreferrer">{content.sections.result.code}</a><Link className="text-link" href={paths.work}>{content.sections.result.back}</Link></div></div>
          </div>
        </section>
      </main>
    </div>
  );
}
