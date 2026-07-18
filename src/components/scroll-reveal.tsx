"use client";

import { useEffect } from "react";

/** Reveals every `.rv` element on the page as it scrolls into view. Renders no markup. */
export function ScrollReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>(".rv");
    if (!("IntersectionObserver" in window)) {
      nodes.forEach((n) => n.classList.add("in"));
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
    const safety = setTimeout(() => nodes.forEach((n) => n.classList.add("in")), 1600);
    return () => {
      io.disconnect();
      clearTimeout(safety);
    };
  }, []);

  return null;
}
