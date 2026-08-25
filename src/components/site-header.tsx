import Image from "next/image";
import type { MouseEvent } from "react";
import { Icon } from "@/components/icon";
import { MobileNav } from "@/components/mobile-nav";
import { Wordmark } from "@/components/wordmark";
import type { SiteLink } from "@/lib/site";

/**
 * Which floor the header stands on. `paper` is the light home shell; `abyss` is
 * the dark shell every other route uses. The tone decides the isotipo variant,
 * the wordmark, the link colour and the CTA — a header never mixes the two.
 */
type HeaderTone = "paper" | "abyss";

type HeaderCta = {
  label: string;
  href: string;
  /** Intercepts the link when the action opens a dialog rather than navigating. */
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
  /** Same action from inside the mobile drawer, which closes before firing. */
  onSelect?: () => void;
};

type SiteHeaderProps = {
  tone?: HeaderTone;
  /** Where the wordmark points. The home page points at its own hero anchor. */
  homeHref: string;
  links: SiteLink[];
  cta: HeaderCta;
  /** Content measure of the route below, so the header aligns with it. */
  maxWidth?: number;
};

const tones = {
  paper: {
    shell: "border-ink/10 bg-paper/85",
    isotipo: "/brand/isotipo-navy.png",
    isotipoClass: "h-8 w-auto",
    isotipoAlt: "Isotipo Brand Lab",
    nav: "gap-8 t-meta text-body-ink",
    cta: "btn btn-sm btn-navy",
  },
  abyss: {
    shell: "border-white/10 bg-abyss/90",
    isotipo: "/brand/isotipo-white.png",
    isotipoClass: "h-7 w-auto",
    isotipoAlt: "Brand Lab",
    nav: "gap-6 t-meta text-body-on-abyss",
    cta: "btn btn-sm btn-primary",
  },
} as const;

/**
 * The persistent shell header: isotipo and wordmark on the left, the route's
 * link row in the middle, one capsule CTA on the right. Below `md` the link row
 * collapses into `MobileNav`, which mirrors the same CTA.
 */
export function SiteHeader({
  tone = "abyss",
  homeHref,
  links,
  cta,
  maxWidth = 1180,
}: SiteHeaderProps) {
  const t = tones[tone];
  const light = tone === "abyss";

  return (
    <header
      className={`sticky-head sticky top-0 z-50 border-b backdrop-blur-md ${t.shell}`}
    >
      <div
        className="mx-auto flex items-center justify-between gutter py-4"
        style={{ maxWidth: `${maxWidth}px` }}
      >
        <a href={homeHref} className="flex items-center gap-3 py-2">
          <Image
            src={t.isotipo}
            alt={t.isotipoAlt}
            width={30}
            height={30}
            className={t.isotipoClass}
          />
          <span className="hidden sm:inline">
            <Wordmark light={light} />
          </span>
        </a>

        <nav
          className={`hidden items-center font-medium md:flex ${t.nav}`}
          aria-label="Principal"
        >
          {links.map((link) => (
            <a
              key={link.href}
              className="navlink inline-flex items-center gap-2 py-3"
              href={link.href}
            >
              {link.back ? <Icon name="arrow-left" size={14} /> : null}
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <a href={cta.href} onClick={cta.onClick} className={t.cta}>
            {cta.label}
          </a>
          <MobileNav
            links={links}
            cta={{ label: cta.label, href: cta.onSelect ? undefined : cta.href, onSelect: cta.onSelect }}
          />
        </div>
      </div>
    </header>
  );
}
