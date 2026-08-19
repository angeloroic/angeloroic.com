import type { MetadataRoute } from "next";

const siteUrl = "https://angeloroic.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      alternates: { languages: { en: `${siteUrl}/`, hr: `${siteUrl}/hr` } },
    },
    {
      url: `${siteUrl}/hr`,
      alternates: { languages: { en: `${siteUrl}/`, hr: `${siteUrl}/hr` } },
    },
    {
      url: `${siteUrl}/work/personal-portfolio`,
      alternates: {
        languages: {
          en: `${siteUrl}/work/personal-portfolio`,
          hr: `${siteUrl}/hr/work/personal-portfolio`,
        },
      },
    },
    {
      url: `${siteUrl}/hr/work/personal-portfolio`,
      alternates: {
        languages: {
          en: `${siteUrl}/work/personal-portfolio`,
          hr: `${siteUrl}/hr/work/personal-portfolio`,
        },
      },
    },
    {
      url: `${siteUrl}/work/adverdose`,
      alternates: {
        languages: {
          en: `${siteUrl}/work/adverdose`,
          hr: `${siteUrl}/hr/work/adverdose`,
        },
      },
    },
    {
      url: `${siteUrl}/hr/work/adverdose`,
      alternates: {
        languages: {
          en: `${siteUrl}/work/adverdose`,
          hr: `${siteUrl}/hr/work/adverdose`,
        },
      },
    },
  ];
}
