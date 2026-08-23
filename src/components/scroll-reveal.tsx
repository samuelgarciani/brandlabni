"use client";

import { useEffect } from "react";

import { useReducedMotion } from "@/lib/use-reduced-motion";

/** Reveals every `.rv` element on the page as it scrolls into view. Renders no markup. */
export function ScrollReveal() {
  const reduced = useReducedMotion();

  useEffect(() => {
    // The hidden state lives behind `.js`, so content stays visible if this
    // script never runs.
    document.documentElement.classList.add("js");

    const nodes = document.querySelectorAll<HTMLElement>(".rv");
    const revealAll = () => nodes.forEach((n) => n.classList.add("in"));

    // Re-runs when the preference flips mid-session: turning reduce on brings
    // every still-hidden block in at once instead of stranding it below the fold.
    if (reduced || !("IntersectionObserver" in window)) {
      revealAll();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    nodes.forEach((n) => io.observe(n));

    // Safety net for anything the observer never reports — bounded to what is
    // still hidden, so blocks further down the page keep their reveal.
    const safety = window.setTimeout(() => {
      nodes.forEach((n) => {
        if (!n.classList.contains("in") && n.getBoundingClientRect().top < window.innerHeight) {
          n.classList.add("in");
        }
      });
    }, 1600);

    return () => {
      io.disconnect();
      window.clearTimeout(safety);
    };
  }, [reduced]);

  return null;
}
