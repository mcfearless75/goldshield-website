"use client";

import { useEffect } from "react";

/**
 * Global fade-in-on-scroll for any element carrying the `.reveal` class —
 * mirrors the original site's single shared IntersectionObserver rather than
 * giving every card its own observer instance.
 */
export function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.08 }
    );

    const observe = () => document.querySelectorAll(".reveal:not(.is-visible)").forEach((el) => io.observe(el));
    observe();

    // Route changes swap content without a full reload, so re-scan shortly after navigation.
    const mo = new MutationObserver(() => observe());
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
