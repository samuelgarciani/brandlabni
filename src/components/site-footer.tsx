import Image from "next/image";
import type { ReactNode } from "react";
import { Wordmark } from "@/components/wordmark";
import { contactLinks, exploreLinks, siteBlurb, siteTagline, type SiteLink } from "@/lib/site";

/**
 * `ink` is the home page's closing floor; `abyss-floor` is the deepest tone in
 * the system and closes every other route.
 */
type FooterTone = "ink" | "abyss-floor";

type SiteFooterProps = {
  tone?: FooterTone;
  /** Content measure of the route above, so the footer aligns with it. */
  maxWidth?: number;
  /**
   * Overrides the "Explora" column. The home page passes same-page anchors;
   * every other route uses the absolute defaults.
   */
  explore?: SiteLink[];
  /** Right-hand item on the baseline row — a back link, or a place name. */
  trailing?: ReactNode;
  id?: string;
  className?: string;
};

const tones = {
  ink: "bg-ink text-on-dark-soft",
  "abyss-floor": "bg-abyss-floor text-on-dark-soft",
} as const;

/**
 * A footer link column. It is a `nav` landmark named by its own heading, so the
 * two columns show up as "Explora" and "Contáctanos" in a landmark list instead
 * of dissolving into the contentinfo blob.
 */
function Column({ title, links }: { title: string; links: SiteLink[] }) {
  const headingId = `footer-${title.toLowerCase().normalize("NFD").replace(/[^a-z]+/g, "")}`;
  return (
    <nav aria-labelledby={headingId}>
      <h2 id={headingId} className="eyebrow mb-4 text-muted-dark">
        {title}
      </h2>
      <div className="flex flex-col t-body-sm text-on-dark-soft [&>a]:py-3">
        {links.map((link) => {
          const external = link.href.startsWith("http");
          return (
            <a
              key={link.href}
              className="navlink"
              href={link.href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {link.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}

/**
 * The shell footer: the practice's statement, the two link columns, and a
 * baseline row. Identical on every route apart from its floor, its measure and
 * the one trailing item.
 */
export function SiteFooter({
  tone = "abyss-floor",
  maxWidth = 1180,
  explore = exploreLinks,
  trailing,
  id,
  className = "",
}: SiteFooterProps) {
  return (
    <footer id={id} className={`${tones[tone]} ${className}`}>
      <div className="mx-auto gutter pt-16 pb-9" style={{ maxWidth: `${maxWidth}px` }}>
        <div className="grid gap-11 border-b border-white/10 pb-11 lg:grid-cols-[1.5fr_1fr_1.2fr]">
          <div>
            <div className="mb-[18px] flex items-center gap-3">
              <Image
                src="/brand/isotipo-white.png"
                alt="Isotipo Brand Lab"
                width={38}
                height={38}
                className="h-[38px] w-auto"
              />
              <Wordmark light />
            </div>
            <p className="max-w-[320px] t-body-sm text-muted-dark">{siteBlurb}</p>
            <p className="mt-4 t-body font-extrabold text-orange italic">{siteTagline}</p>
          </div>
          <Column title="Explora" links={explore} />
          <Column title="Contáctanos" links={contactLinks} />
        </div>
        <div className="flex flex-wrap justify-between gap-3 pt-6 t-meta text-muted-dark">
          <span>© 2026 Brand Lab by Samu · Samuel García, Estratega de Marca</span>
          {trailing}
        </div>
      </div>
    </footer>
  );
}
