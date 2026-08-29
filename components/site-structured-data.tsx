const siteUrl = "https://angeloroic.com/";
const personId = `${siteUrl}#person`;
const websiteId = `${siteUrl}#website`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": personId,
      name: "Angelo Roic",
      url: siteUrl,
      image: `${siteUrl}angelo-roic-conference.png`,
      email: "hello@angeloroic.com",
      sameAs: [
        "https://linkedin.com/in/angeloroic/",
        "https://github.com/angeloroic",
      ],
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: siteUrl,
      name: "Angelo Roic",
      inLanguage: ["en", "hr"],
      creator: { "@id": personId },
      publisher: { "@id": personId },
      about: { "@id": personId },
    },
  ],
};

export function SiteStructuredData() {
  return (
    <script
      id="site-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
      }}
    />
  );
}
