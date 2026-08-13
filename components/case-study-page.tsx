import Image from "next/image";
import Link from "next/link";
import { caseStudyContent } from "@/content/case-study";
import type { Locale } from "@/content/site";

const liveSiteUrl = "https://angeloroic.com";

export function CaseStudyPage({ locale }: { locale: Locale }) {
  const content = caseStudyContent[locale];
  const paths = locale === "en"
    ? { home: "/", work: "/#work", caseStudy: "/work/personal-portfolio", alternate: "/hr/work/personal-portfolio" }
    : { home: "/hr", work: "/hr#work", caseStudy: "/hr/work/personal-portfolio", alternate: "/work/personal-portfolio" };

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
          <a className="text-link case-hero-link" href={liveSiteUrl} target="_blank" rel="noopener noreferrer">{content.hero.visit}</a>
        </section>

        <section className="case-section" aria-labelledby="overview-heading">
          <div className="shell case-grid">
            <h2 className="section-title" id="overview-heading">{content.sections.overview.label}</h2>
            <div className="case-body">
              <p className="case-lead">{content.sections.overview.text}</p>
              <dl className="case-facts">
                <div><dt>{content.facts.role}</dt><dd>{content.facts.roleValue}</dd></div>
                <div><dt>{content.facts.stack}</dt><dd>{content.facts.stackValue}</dd></div>
                <div><dt>{content.facts.workflow}</dt><dd>{content.facts.workflowValue}</dd></div>
              </dl>
            </div>
          </div>
        </section>

        <section className="case-section" aria-labelledby="approach-heading">
          <div className="shell case-grid">
            <h2 className="section-title" id="approach-heading">{content.sections.approach.label}</h2>
            <div className="case-body">
              <p>{content.sections.approach.text}</p>
              <ul className="case-points">{content.sections.approach.points.map((point) => <li key={point}>{point}</li>)}</ul>
            </div>
          </div>
        </section>

        <section className="case-section" aria-labelledby="responsive-heading">
          <div className="shell case-grid">
            <h2 className="section-title" id="responsive-heading">{content.sections.responsive.label}</h2>
            <div className="case-body">
              <p>{content.sections.responsive.text}</p>
              <div className="case-screenshots">
                <figure><figcaption>{content.sections.responsive.desktop}</figcaption><div className="case-screen case-screen-desktop"><Image src="/angelo-roic-portfolio-preview.png" alt={content.sections.responsive.desktopAlt} fill loading="eager" sizes="(min-width: 1200px) 52vw, 100vw" /></div></figure>
                <figure><figcaption>{content.sections.responsive.mobile}</figcaption><div className="case-screen case-screen-mobile"><Image src="/angelo-roic-portfolio-mobile-preview.png" alt={content.sections.responsive.mobileAlt} fill sizes="(min-width: 640px) 31vw, 100vw" /></div></figure>
              </div>
            </div>
          </div>
        </section>

        <section className="case-section" aria-labelledby="localization-heading">
          <div className="shell case-grid">
            <h2 className="section-title" id="localization-heading">{content.sections.localization.label}</h2>
            <div className="case-body"><p>{content.sections.localization.text}</p><ul className="case-points">{content.sections.localization.points.map((point) => <li key={point}>{point}</li>)}</ul></div>
          </div>
        </section>

        <section className="case-section" aria-labelledby="agentic-heading">
          <div className="shell case-grid">
            <h2 className="section-title" id="agentic-heading">{content.sections.agentic.label}</h2>
            <div className="case-body">
              <p>{content.sections.agentic.text}</p>
              <ol className="case-flow">{content.sections.agentic.steps.map((step) => <li key={step}>{step}</li>)}</ol>
              <ul className="case-validation">{content.sections.agentic.validation.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </div>
        </section>

        <section className="case-section case-result" aria-labelledby="result-heading">
          <div className="shell case-grid">
            <h2 className="section-title" id="result-heading">{content.sections.result.label}</h2>
            <div className="case-body"><p className="case-lead">{content.sections.result.text}</p><div className="case-result-links"><a className="text-link" href={liveSiteUrl} target="_blank" rel="noopener noreferrer">{content.sections.result.visit}</a><Link className="text-link" href={paths.work}>{content.sections.result.back}</Link></div></div>
          </div>
        </section>
      </main>
    </div>
  );
}
