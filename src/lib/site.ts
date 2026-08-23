/**
 * Absolute origin used for canonical URLs, Open Graph images and the sitemap.
 * Override with NEXT_PUBLIC_SITE_URL at build time if the site ships on another host.
 */
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://brandlabni.com";

export const siteName = "Brand Lab by Samu";

export const siteTagline = "We don't sell, we mean!";

export const siteBlurb =
  "Branding con significado. Transformamos marcas invisibles en marcas relevantes, humanas y memorables.";

/** Direct, personal channels. Samuel answers these himself — there is no inbox in between. */
export const contact = {
  whatsappNumber: "+505 5740 0875",
  whatsappUrl: "https://wa.me/50557400875",
  email: "samuelgarcia@brandlabni.com",
  instagram: "https://www.instagram.com/brandlab_bysamuel/",
  instagramHandle: "brandlab_bysamuel",
  facebook: "https://www.facebook.com/BrandLabBySamu/?locale=es_LA",
  facebookHandle: "Brand Lab By Samu",
  linkedin: "https://www.linkedin.com/in/samuel-garc%C3%ADa-2020/",
  linkedinHandle: "Samuel García l Brand Lab",
} as const;

export type SiteLink = {
  label: string;
  href: string;
  /**
   * Marks a link that returns to the surface above this one. The shell draws
   * the back arrow itself, so the direction never has to be typed into a label.
   */
  back?: boolean;
};

/**
 * The footer's "Explora" column, written as absolute links so it works from any
 * route. The home page passes its own same-page anchors instead.
 */
export const exploreLinks: SiteLink[] = [
  { label: "Historia", href: "/#historia" },
  { label: "Quiénes somos", href: "/#quienes" },
  { label: "Oferta", href: "/#oferta" },
  { label: "Talks", href: "/#talks" },
  { label: "Blog Brand", href: "/blog" },
  { label: "Eventos", href: "/eventos" },
  { label: "Patrocinio", href: "/patrocinio" },
];

export const contactLinks: SiteLink[] = [
  { label: `WhatsApp · ${contact.whatsappNumber}`, href: contact.whatsappUrl },
  { label: contact.email, href: `mailto:${contact.email}` },
  { label: `Instagram · ${contact.instagramHandle}`, href: contact.instagram },
  { label: `Facebook · ${contact.facebookHandle}`, href: contact.facebook },
  { label: `LinkedIn · ${contact.linkedinHandle}`, href: contact.linkedin },
];
