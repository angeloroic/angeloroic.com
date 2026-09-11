"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";

const SCROLL_THRESHOLD = 20;

export function StickyHeader({ children }: { children: ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrollState = () => {
      const nextIsScrolled = window.scrollY > SCROLL_THRESHOLD;
      setIsScrolled((currentIsScrolled) => currentIsScrolled === nextIsScrolled ? currentIsScrolled : nextIsScrolled);
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  return <header className={`site-header${isScrolled ? " is-scrolled" : ""}`}>{children}</header>;
}
