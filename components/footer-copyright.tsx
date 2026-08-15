"use client";

import { useEffect, useState } from "react";

export function FooterCopyright({ copyright, fallbackYear }: { copyright: string; fallbackYear: number }) {
  const [year, setYear] = useState(fallbackYear);

  useEffect(() => {
    let timeoutId: number;

    const updateYear = () => setYear(new Date().getFullYear());
    const scheduleNextUpdate = () => {
      const now = new Date();
      const nextYear = new Date(now.getFullYear() + 1, 0, 1);
      timeoutId = window.setTimeout(() => {
        updateYear();
        scheduleNextUpdate();
      }, nextYear.getTime() - now.getTime());
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") updateYear();
    };

    updateYear();
    scheduleNextUpdate();
    window.addEventListener("focus", updateYear);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.clearTimeout(timeoutId);
      window.removeEventListener("focus", updateYear);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return <>{copyright.replace(/\d{4}/, String(year))}</>;
}
