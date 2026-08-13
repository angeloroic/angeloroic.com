import type { ReactNode } from "react";
import { IBM_Plex_Mono, Manrope } from "next/font/google";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });
const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export function SiteRootLayout({ children, lang }: { children: ReactNode; lang: "en" | "hr" }) {
  return (
    <html lang={lang} className={`${manrope.variable} ${ibmPlexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
