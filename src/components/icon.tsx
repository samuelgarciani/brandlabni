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
