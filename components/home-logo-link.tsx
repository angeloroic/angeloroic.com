"use client";

import Link from "next/link";
import type { MouseEvent, ReactNode } from "react";

export function HomeLogoLink({ href, children }: { href: string; children: ReactNode }) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    event.preventDefault();
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  };

  return <Link className="wordmark" href={href} onClick={handleClick}>{children}</Link>;
}
