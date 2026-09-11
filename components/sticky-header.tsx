"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";

const MOBILE_BREAKPOINT = "(max-width: 639px)";
const DESKTOP_HERO_TRIGGER = 58;
const MOBILE_HERO_TRIGGER = 54;

export function StickyHeader({ children }: { children: ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const hero = document.querySelector<HTMLElement>(".hero, .case-hero");
    if (!hero) return;

    const mediaQuery = window.matchMedia(MOBILE_BREAKPOINT);
    let observer: IntersectionObserver | undefined;

    const observeHeroBoundary = () => {
      observer?.disconnect();
      const trigger = mediaQuery.matches ? MOBILE_HERO_TRIGGER : DESKTOP_HERO_TRIGGER;
      const updateState = (heroBottom: number) => {
        const nextIsScrolled = heroBottom <= trigger;
        setIsScrolled((currentIsScrolled) => currentIsScrolled === nextIsScrolled ? currentIsScrolled : nextIsScrolled);
      };

      updateState(hero.getBoundingClientRect().bottom);
      observer = new IntersectionObserver(([entry]) => {
        if (entry) updateState(entry.boundingClientRect.bottom);
      }, { rootMargin: `-${trigger}px 0px 0px 0px`, threshold: 0 });
      observer.observe(hero);
    };

    observeHeroBoundary();
    mediaQuery.addEventListener("change", observeHeroBoundary);
    return () => {
      observer?.disconnect();
      mediaQuery.removeEventListener("change", observeHeroBoundary);
    };
  }, []);

  return <header className={`site-header${isScrolled ? " is-scrolled" : ""}`}>{children}</header>;
}
