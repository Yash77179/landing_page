"use client";

import { useEffect } from "react";

export default function ClientInteractivity() {
  useEffect(() => {
    // 1. Sticky Header scroll listener
    const header = document.querySelector<HTMLElement>('header[data-site-header="true"]');
    const handleScroll = () => {
      if (!header) return;
      if (window.scrollY > 20) {
        header.setAttribute("data-header-stuck", "true");
        header.classList.add("bg-neutral-1000/80", "backdrop-blur-md", "border-b", "border-white/5");
      } else {
        header.setAttribute("data-header-stuck", "false");
        header.classList.remove("bg-neutral-1000/80", "backdrop-blur-md", "border-b", "border-white/5");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // 2. Hero Feature Tabs rotation & click
    const featureButtons = document.querySelectorAll<HTMLButtonElement>("button[data-feature]");
    featureButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        featureButtons.forEach((b) => {
          b.setAttribute("data-active", "false");
          b.setAttribute("aria-pressed", "false");
        });
        btn.setAttribute("data-active", "true");
        btn.setAttribute("aria-pressed", "true");
      });
    });

    // 3. Tab switching for other sections (context tabs, review loops, etc.)
    const tabTriggers = document.querySelectorAll<HTMLElement>('[role="tab"], [aria-controls]');
    tabTriggers.forEach((trigger) => {
      trigger.addEventListener("click", () => {
        const parent = trigger.parentElement;
        if (parent) {
          const siblings = parent.querySelectorAll<HTMLElement>('[role="tab"], [aria-controls]');
          siblings.forEach((s) => {
            s.setAttribute("aria-selected", "false");
            s.setAttribute("data-state", "inactive");
            s.setAttribute("aria-pressed", "false");
          });
        }
        trigger.setAttribute("aria-selected", "true");
        trigger.setAttribute("data-state", "active");
        trigger.setAttribute("aria-pressed", "true");
      });
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null;
}
