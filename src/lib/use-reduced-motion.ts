"use client";

import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(onChange: () => void) {
  const mql = window.matchMedia(QUERY);
  mql.addEventListener("change", onChange);
  return () => mql.removeEventListener("change", onChange);
}

const getSnapshot = () => window.matchMedia(QUERY).matches;

// The server has no viewport, so it renders the full-motion markup and the
// first client snapshot corrects it before any animation has had time to run.
const getServerSnapshot = () => false;

/**
 * Live reading of the visitor's motion preference. Subscribed rather than read
 * once at mount, so flipping the OS toggle takes effect on the open page.
 */
export function useReducedMotion() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
