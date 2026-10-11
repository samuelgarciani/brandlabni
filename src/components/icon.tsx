import type { SVGProps } from "react";

/**
 * The system's drawn glyphs. Unicode characters (→ ← ✓ ✕) are typography, not
 * icons: they carry the text font's weight and baseline, so they never match
 * the stroke of a real mark and they get announced as characters by screen
 * readers. Every glyph in the interface is drawn here instead, on one 16×16
 * grid with a 2px round-capped stroke, so the whole set reads as one hand.
 */
const paths = {
  close: "M2.5 2.5l11 11M13.5 2.5l-11 11",
  menu: "M1 5h14M1 11h9",
  "arrow-right": "M2.5 8h11M9 3.5L13.5 8 9 12.5",
  "arrow-left": "M13.5 8h-11M7 3.5L2.5 8 7 12.5",
  check: "M2.5 8.5L6.25 12.5 13.5 4",
  "chevron-down": "M3.5 6l4.5 4.5L12.5 6",
  heart: "M8 13.5s-5-3.2-5-6.8C3 4.6 4.6 3 6.6 3c1 0 1.9.5 2.4 1.3C9.5 3.5 10.4 3 11.4 3c2 0 3.6 1.6 3.6 3.7 0 3.6-5 6.8-5 6.8z",
  comment: "M2.5 3.5h11a1 1 0 0 1 1 1v6.5a1 1 0 0 1-1 1H6.5L3.5 15v-3H2.5a1 1 0 0 1-1-1v-6.5a1 1 0 0 1 1-1z",
  link: "M6.5 9.5l3-3M6.8 11.3L5 13a2.4 2.4 0 1 1-3.4-3.4l1.8-1.8M9.2 4.7L11 3a2.4 2.4 0 1 1 3.4 3.4l-1.8 1.8",
  mail: "M2.5 4h11a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zM2.8 4.5L8 9l5.2-4.5",
} as const;

export type IconName = keyof typeof paths;

type IconProps = {
  name: IconName;
  /** Box in px. The stroke stays 2/16 of it, so weight scales with the mark. */
  size?: number;
  className?: string;
} & Omit<SVGProps<SVGSVGElement>, "name" | "className">;

/**
 * Decorative by default: every icon in this system sits next to its own label,
 * so the accessible name comes from that text and the mark stays out of the
 * accessibility tree. When an icon is the only content of a control, the
 * control carries the `aria-label` — not the icon.
 */
export function Icon({ name, size = 16, className = "", ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={`shrink-0 ${className}`}
      {...rest}
    >
      <path
        d={paths[name]}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
