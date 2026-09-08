import type { ReactNode } from "react";
import Link from "next/link";
import { CaseStudyComparison } from "@/components/case-study-comparison";
import { opgMakjanicCaseStudyContent } from "@/content/opg-makjanic-case-study";
import type { Locale } from "@/content/site";
import afterDesktopHero from "@/public/opg-after-desktop-hero.webp";
import afterDesktopServices from "@/public/opg-after-desktop-services.webp";
import afterMobileContact from "@/public/opg-after-mobile-contact.webp";
import afterMobileHero from "@/public/opg-after-mobile-hero.webp";
import beforeDesktopHero from "@/public/opg-before-desktop-hero.webp";
import beforeDesktopServices from "@/public/opg-before-desktop-services.webp";
import beforeMobileContact from "@/public/opg-before-mobile-contact.webp";
import beforeMobileHero from "@/public/opg-before-mobile-hero.webp";

const liveSiteUrl = "https://opgmakjanic.com";
const standardComparisonSizes = "(min-width: 1200px) 30vw, (min-width: 640px) 36vw, 100vw";
const featuredComparisonSizes = "(min-width: 1200px) 43vw, (min-width: 640px) 43vw, 100vw";

function CopyBlock({ paragraphs, lead = false }: { paragraphs: string[]; lead?: boolean }) {
  return (
    <div className="case-copy">
      {paragraphs.map((paragraph, index) => (
        <p className={lead && index === 0 ? "case-lead" : undefined} key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}

function TextSection({ id, label, paragraphs, children }: { id: string; label: string; paragraphs: string[]; children?: ReactNode }) {
  return (
    <section className="case-section" aria-labelledby={id}>
      <div className="shell case-grid">
        <h2 className="section-title" id={id}>{label}</h2>
        <div className="case-body">
          <CopyBlock paragraphs={paragraphs} />
          {children}
        </div>
      </div>
    </section>
  );
}

export function OpgMakjanicCaseStudyPage({ locale }: { locale: Locale }) {
  const content = opgMakjanicCaseStudyContent[locale];
  const paths = locale === "en"
    ? { home: "/", work: "/#work", caseStudy: "/work/opg-makjanic", alternate: "/hr/work/opg-makjanic" }
    : { home: "/hr", work: "/hr#work", caseStudy: "/hr/work/opg-makjanic", alternate: "/work/opg-makjanic" };
  const comparisonLabels = { beforeLabel: content.comparison.before, afterLabel: content.comparison.after };

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
        <section className="shell case-hero" aria-labelledby="opg-case-study-title">
          <p className="case-kicker">{content.hero.label}</p>
          <h1 className="case-title-proper" id="opg-case-study-title">{content.hero.title}</h1>
          <p className="case-intro">{content.hero.intro}</p>
          <div className="case-hero-links">
            <a className="text-link case-hero-link" href={liveSiteUrl} target="_blank" rel="noopener noreferrer">{content.hero.visit}</a>
          </div>
        </section>

        <section className="case-section" aria-labelledby="opg-overview-heading">
          <div className="shell case-grid">
            <h2 className="section-title" id="opg-overview-heading">{content.sections.overview.label}</h2>
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

        <section className="case-section" aria-labelledby="opg-challenge-heading">
          <div className="shell">
            <div className="case-grid">
              <h2 className="section-title" id="opg-challenge-heading">{content.sections.challenge.label}</h2>
              <div className="case-body"><CopyBlock paragraphs={content.sections.challenge.paragraphs} /></div>
            </div>
            <CaseStudyComparison
              {...comparisonLabels}
              before={{ src: beforeDesktopHero, alt: content.comparison.desktopHeroBeforeAlt }}
              after={{ src: afterDesktopHero, alt: content.comparison.desktopHeroAfterAlt }}
              sizes={featuredComparisonSizes}
              featured
            />
          </div>
        </section>

        <TextSection id="opg-research-heading" label={content.sections.research.label} paragraphs={content.sections.research.paragraphs} />

        <TextSection id="opg-design-heading" label={content.sections.design.label} paragraphs={content.sections.design.paragraphs} />

        <TextSection id="opg-services-heading" label={content.sections.services.label} paragraphs={content.sections.services.paragraphs}>
          <CaseStudyComparison
            {...comparisonLabels}
            before={{ src: beforeDesktopServices, alt: content.comparison.desktopServicesBeforeAlt }}
            after={{ src: afterDesktopServices, alt: content.comparison.desktopServicesAfterAlt }}
            sizes={standardComparisonSizes}
          />
        </TextSection>

        <TextSection id="opg-responsive-heading" label={content.sections.responsive.label} paragraphs={content.sections.responsive.paragraphs}>
          <CaseStudyComparison
            {...comparisonLabels}
            before={{ src: beforeMobileHero, alt: content.comparison.mobileHeroBeforeAlt }}
            after={{ src: afterMobileHero, alt: content.comparison.mobileHeroAfterAlt }}
            sizes={standardComparisonSizes}
          />
        </TextSection>

        <TextSection id="opg-contact-heading" label={content.sections.contact.label} paragraphs={content.sections.contact.paragraphs}>
          <CaseStudyComparison
            {...comparisonLabels}
            before={{ src: beforeMobileContact, alt: content.comparison.mobileContactBeforeAlt }}
            after={{ src: afterMobileContact, alt: content.comparison.mobileContactAfterAlt }}
            sizes={standardComparisonSizes}
          />
        </TextSection>

        <TextSection id="opg-seo-heading" label={content.sections.seo.label} paragraphs={content.sections.seo.paragraphs} />

        <section className="case-section case-result" aria-labelledby="opg-result-heading">
          <div className="shell case-grid">
            <h2 className="section-title" id="opg-result-heading">{content.sections.result.label}</h2>
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
