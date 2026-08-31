import Image from "next/image";
import Link from "next/link";
import { FooterCopyright } from "@/components/footer-copyright";
import { SiteStructuredData } from "@/components/site-structured-data";
import { workProjects, type Locale, type SiteContent } from "@/content/site";

const contacts = {
  email: "mailto:hello@angeloroic.com",
  linkedin: "https://linkedin.com/in/angeloroic/",
  github: "https://github.com/angeloroic",
};

export function PortfolioPage({
  content,
  locale,
  languagePaths = { en: "/", hr: "/hr" },
}: {
  content: SiteContent;
  locale: Locale;
  languagePaths?: Record<Locale, string>;
}) {
  const completedProjects = workProjects.filter((project) => project.completed);
  const hasWork = completedProjects.length > 0;
  const footerYear = Number(content.footer.copyright.match(/\d{4}/)?.[0]);

  return (
    <div lang={locale}>
      <SiteStructuredData />
      <header className="site-header">
        <nav className="shell nav" aria-label="Main navigation">
          <Link className="wordmark" href={languagePaths[locale]}>ANGELO ROIC</Link>
          <div className="nav-side">
            <div className="nav-links">
              <a href="#about">{content.nav.about}</a>
              {hasWork && <a href="#work">{content.nav.work}</a>}
              <a href="#experience">{content.nav.experience}</a>
              <a href="#contact">{content.nav.contact}</a>
            </div>
            <div className="locale-switch" aria-label="Language">
              <Link className={locale === "en" ? "active" : ""} href={languagePaths.en}>EN</Link>
              <Link className={locale === "hr" ? "active" : ""} href={languagePaths.hr}>HR</Link>
            </div>
            <details className="mobile-menu">
              <summary aria-label="Open navigation menu"><span /><span /><span /></summary>
              <div className="mobile-menu-panel">
                <a href="#about">{content.nav.about}</a>
                {hasWork && <a href="#work">{content.nav.work}</a>}
                <a href="#experience">{content.nav.experience}</a>
                <a href="#contact">{content.nav.contact}</a>
              </div>
            </details>
          </div>
        </nav>
      </header>

      <main>
        <section className="shell hero" aria-labelledby="hero-title">
          <h1 id="hero-title">{content.hero.title.split("\n").map((line) => <span key={line} className="block">{line}</span>)}</h1>
          <p className="hero-copy">{content.hero.copy}</p>
          <a className="text-link" href={hasWork ? "#work" : "#about"}>{content.hero.cta}</a>
        </section>

        <section className="section" id="about" aria-labelledby="about-heading">
          <div className="shell section-grid">
            <h2 className="section-title" id="about-heading">{content.about.label}</h2>
            <div className="about-content">
              <div className="about-copy">
                {content.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              <div className="about-portrait">
                <Image
                  src="/angelo-roic-conference.png"
                  alt="Angelo Roic speaking at a conference"
                  fill
                  sizes="(min-width: 1445px) 260px, (min-width: 1223px) 18vw, (min-width: 1200px) 220px, (min-width: 1091px) 240px, (min-width: 1024px) 22vw, (min-width: 840px) 210px, (min-width: 760px) 25vw, (min-width: 640px) 190px, (min-width: 382px) 145px, (min-width: 342px) 38vw, 130px"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="services-heading">
          <div className="shell section-grid">
            <h2 className="section-title" id="services-heading">{content.services.label}</h2>
            <div className="areas">
              {content.services.areas.map((area) => (
                <article className="area" key={area.title}>
                  <h3>{area.title}</h3>
                  <ul>{area.items.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {hasWork && (
          <section className="section" id="work" aria-labelledby="work-heading">
            <div className="shell section-grid">
              <h2 className="section-title" id="work-heading">{content.work.label}</h2>
              <div className="work-list">
                {completedProjects.map((project, index) => {
                  const projectContent = project.localized[locale];
                  const caseStudyUrl = project.caseStudyUrls?.[locale];
                  const previousCategory = index > 0 ? completedProjects[index - 1].category : undefined;
                  const preview = project.previewAvailable ? (
                    <Image
                      src={project.previewImage}
                      alt={projectContent.previewAlt}
                      fill
                      sizes="(min-width: 1200px) 72vw, (min-width: 640px) 86vw, 100vw"
                    />
                  ) : (
                    <span className="visual-placeholder" role="img" aria-label={projectContent.previewAlt}>{projectContent.previewPlaceholder}</span>
                  );

                  return (
                    <article className="work-item" key={project.slug}>
                      {project.category !== previousCategory && <p className="work-category">{projectContent.category}</p>}
                      <div className="work-index">{project.index}</div>
                      <h3>
                        {caseStudyUrl ? <Link className="work-card-link" href={caseStudyUrl}>{project.title}</Link> : project.title}
                      </h3>
                      <p className="work-meta">{project.technologies.join(" · ")}</p>
                      {caseStudyUrl ? (
                        <Link className="work-preview" href={caseStudyUrl} aria-label={`${project.title}: ${projectContent.caseStudy}`}>
                          {preview}
                        </Link>
                      ) : (
                        <div className="work-preview">{preview}</div>
                      )}
                      <p className="work-description">{projectContent.description}</p>
                      <div className="work-ctas">
                        {caseStudyUrl && <Link className="work-cta" href={caseStudyUrl}>{projectContent.caseStudy}</Link>}
                        {project.websiteUrl && <a className="work-cta" href={project.websiteUrl} target="_blank" rel="noopener noreferrer">{projectContent.visit}</a>}
                        {project.codeUrl && projectContent.code && <a className="work-cta" href={project.codeUrl} target="_blank" rel="noopener noreferrer">{projectContent.code}</a>}
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        <section className="section" id="experience" aria-labelledby="experience-heading">
          <div className="shell section-grid">
            <h2 className="section-title" id="experience-heading">{content.experience.label}</h2>
            <div className="timeline">
              {content.experience.entries.map((entry) => (
                <article className="timeline-entry" key={`${entry.dates}-${entry.role}`}>
                  <div className="timeline-date">{entry.dates}</div>
                  <div>
                    <h3 className="timeline-role">{entry.role}</h3>
                    {entry.company && <p className="timeline-company">{entry.company}</p>}
                    <p>{entry.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact" id="contact" aria-labelledby="contact-heading">
          <div className="shell section-grid">
            <p className="section-title">{content.contact.label}</p>
            <div>
              <h2 id="contact-heading">{content.contact.title}</h2>
              <p className="contact-copy">{content.contact.copy}</p>
              <div className="contact-links">
                <a href={contacts.email}>{content.contact.email}</a>
                <a href={contacts.linkedin} target="_blank" rel="noopener noreferrer">{content.contact.linkedin}</a>
                <a href={contacts.github} target="_blank" rel="noopener noreferrer">{content.contact.github}</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="shell footer">
        <span><FooterCopyright copyright={content.footer.copyright} fallbackYear={footerYear} /></span>
        <span>{content.footer.location}</span>
      </footer>
    </div>
  );
}
