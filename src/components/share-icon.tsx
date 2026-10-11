type Platform = "facebook" | "linkedin" | "whatsapp" | "instagram";

/**
 * Brand-colored share glyphs. Kept separate from the hand-drawn neutral Icon
 * system: these need recognizable logo shape + brand color, which the
 * single-stroke/no-fill system isn't built for.
 */
const backgrounds: Record<Platform, string> = {
  facebook: "#1877F2",
  linkedin: "#0A66C2",
  whatsapp: "#25D366",
  instagram: "#C13584",
};

function Glyph({ platform }: { platform: Platform }) {
  switch (platform) {
    case "facebook":
      return (
        <path
          d="M14.2 8.6h-2.1a.9.9 0 0 0-.9.9V11h3l-.4 2.7h-2.6V19h-2.8v-5.3H6.3V11h2.1V9.3c0-2.1 1.3-3.8 3.4-3.8h2.4v3.1z"
          fill="#fff"
        />
      );
    case "linkedin":
      return (
        <g stroke="#fff" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" fill="none">
          <path d="M7.2 11v7" />
          <circle cx="7.2" cy="7.6" r="0.15" fill="#fff" />
          <path d="M11.5 18v-4.6c0-1.5 1-2.6 2.3-2.6s2.2 1 2.2 2.6V18" />
        </g>
      );
    case "whatsapp":
      return (
        <>
          <path
            d="M12 5.3A6.7 6.7 0 0 0 5.9 15l-.9 3.3L8.4 17A6.7 6.7 0 1 0 12 5.3z"
            fill="#fff"
          />
          <path
            d="M9.6 9.8c-.2-.5.1-.6.3-.6h.4c.2 0 .3.1.4.3l.4.9c.1.2 0 .3-.1.4l-.3.3c.3.6.8 1.1 1.4 1.4l.3-.3c.1-.1.2-.1.4-.1l.9.4c.2.1.3.2.3.4v.4c0 .2-.1.5-.6.3-1.3-.3-2.7-1.7-3-3z"
            fill={backgrounds.whatsapp}
          />
        </>
      );
    case "instagram":
      return (
        <g stroke="#fff" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" fill="none">
          <rect x="5.3" y="5.3" width="13.4" height="13.4" rx="4" />
          <circle cx="12" cy="12" r="3.4" />
          <path d="M15.6 8.4h.01" />
        </g>
      );
  }
}

export function ShareIcon({ platform, size = 40 }: { platform: Platform; size?: number }) {
  return (
    <span
      aria-hidden="true"
      className="inline-flex shrink-0 items-center justify-center rounded-full"
      style={{ width: size, height: size, backgroundColor: backgrounds[platform] }}
    >
      <svg width={size * 0.6} height={size * 0.6} viewBox="0 0 24 24" fill="none">
        <Glyph platform={platform} />
      </svg>
    </span>
  );
}
