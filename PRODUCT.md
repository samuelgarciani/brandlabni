# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary audience: business owners, entrepreneurs, managers and directors in Nicaragua and Central America who suspect their business is competing on price because it has no distinct meaning in the market. They arrive from social channels (Instagram, LinkedIn, Facebook) or from word of mouth around Samuel García, usually on mobile, usually while deciding whether this person is worth their attention and budget.

Secondary audiences already served by the site:
- Marketing, communication and consulting professionals reading the blog for strategic perspective.
- Companies evaluating event sponsorship (`/patrocinio`).
- University students and early-career professionals attending the events.

## Product Purpose

Brand Lab by Samu is Samuel García's brand-strategy practice. The site exists to establish Samuel as the reference voice on strategic branding in Central America — authority is the primary job the site must do. Consulting bookings and event registrations are outcomes that follow from that authority, not the site's leading purpose.

Success looks like a reader who came for one article or one event and now recognizes Samuel as the person to call when their brand needs direction.

## Positioning

"Branding con significado" — a brand is not born in a logo, it is born in perception, emotion and the meaning it leaves in people. Tagline: **"We don't sell, we mean!"**

The differentiating mechanism is the **Sistema SIGNIFICA**, Samuel's named methodology, referenced throughout the blog by its letters (Significado, Coherencia, Gestión Estratégica, …). It is the asset a neighboring consultancy cannot truthfully copy: named steps, applied to real market cases, in Spanish, for a Central American business reality.

Second differentiator: the practice connects strategy, branding, business and humanity — premium without arrogance, strategic and human.

## Operating Context

- Spanish-language site (`lang="es"`), Central American market, Nicaragua-based.
- Public surfaces: home (single-page personal site), `/blog` (long-form articles), `/eventos` (Brand Lab Live), `/patrocinio` (sponsorship tiers).
- **Brand Lab Live 2026** — 19 September 2026, 9:00–11:30 a.m., DoubleTree by Hilton Managua. Format: registration, welcome, the conference "Las marcas no venden, significan", a panel on Branding/Consumer/Reputation, closing reflection, coffee break and networking.
- Sponsorship tiers: Silver US$300, Gold US$600, Presentador US$900, and a Patrocinador de Experiencia tier.
- Contact channels are personal and direct: samuelgarcia@brandlabni.com, +505 5740 0875 (WhatsApp), @holasoysamuel.brand and @brandlab_bysamuel on Instagram, LinkedIn, Facebook. Samuel answers personally.

## Capabilities and Constraints

Confirmed capabilities:
- Six service lines: brand strategy; branding & visual identity; naming & messaging; positioning; consulting & 1:1 mentoring; workshops & education.
- Static Next.js App Router site (Next 16, React 19, Tailwind v4, TypeScript). No backend, no database, no CMS. Home content is centralized in `src/content/site.ts`; the `/blog`, `/eventos` and `/patrocinio` pages hold their content inline.
- Event registration submits by opening a prefilled WhatsApp message to +505 5740 0875. Sponsorship CTAs open prefilled `mailto:` messages.

Constraints and open decisions:
- **Lead routing:** leads should reach Samuel by WhatsApp or email, whichever fits the surface. The home contact form (`src/components/sections/contact-form.tsx`) currently does neither — it only sets local state and shows a success message, so those submissions are lost. The exact destination per surface is not yet decided.
- Blog articles are hardcoded in the page component; there is no publishing workflow.

## Brand Commitments

- Name: **Brand Lab by Samu**; wordmark "BRANDLAB"; personal name Samuel García, Brand Strategist / Estratega de Marca.
- Tagline: "We don't sell, we mean!" — appears in the footer and on the orange seal asset.
- Isotipo assets: `/public/brand/isotipo-navy.png`, `/public/brand/isotipo-white.png`.
- Palette in use: navy `#023047`, orange `#fb8500`, blue `#219ebc`, sky `#8ecae6`, yellow `#ffb703`, paper `#fbfaf7`.
- Typeface in use: Onest (Google Fonts).
- Brand personality as stated by the practice: estratégica, humana, elegante, reflexiva, cercana, inteligente.
- Voice: Spanish, first person, warm and direct; makes an argument and lands on an uncomfortable truth rather than a slogan. Premium without arrogance.

## Evidence on Hand

Confirmed by the user as **real**, not placeholder — future work may cite them as genuine proof:

- Testimonials in `src/content/site.ts`: María Fernanda (Cafeto & Co), Carlos Mendoza (Vértice), Ana Robles (Aurora).
- Client list: NORDA, Cafeto & Co, Lúmen, Raíz, Vértice, Aurora, Kanou, Meridian.
- The four project cases (brand system for a services company, personal brand for a consultant, launch campaign, digital positioning).
- Track record: 8 years of experience, regional reach across Central America; timeline from 2017 to today.

Other real assets:
- Sponsor and partner logos in `/public/brand/logos/`: Claro, DoubleTree by Hilton, Holiday Inn Express Managua, Impact Hub Managua, Atabal Café, Disruptivas, AZ Producciones, RH Producciones, CNA Salud Spa, SUR, Grupo Sur Química, Elizabeth Balloons & Flowers, Tassinari, Excel Talleres, Excel Repuestos, BTL.
- Photography of Samuel in `/public/brand/` (samuel-1/2/3, samuel-suit, samuel-cafe, samuel-historia, samuel-quienes, conferencista).
- Long-form blog articles analyzing real market events (Gap × Hailey Bieber, McKinsey State of Marketing Europe 2026, Kantar BrandZ 2026), each mapped to a letter of the Sistema SIGNIFICA.

Must not be fabricated: no pricing for consulting services, no client count, no revenue or performance figures, no case-study metrics, and no press mentions are established anywhere in the project.

## Product Principles

1. **Authority before conversion.** The site earns the reader's respect first; the booking and the ticket are consequences. A change that raises conversion by cheapening the argument is a loss.
2. **Meaning over volume.** Every claim ties back to why a brand means something, not to how much it sells. "We don't sell, we mean!" is a working constraint, not decoration.
3. **The Sistema SIGNIFICA is the spine.** Content and services connect back to the named methodology; that is what a competitor cannot copy.
4. **Premium without arrogance.** Elegant and considered, never cold or self-important — the practice is human and close by design.
5. **Direct and personal contact.** Samuel answers personally by WhatsApp or email. No lead-capture machinery that puts distance between the reader and the person.

## Accessibility & Inclusion

No product-specific standard has been established. The audience is predominantly mobile and Spanish-speaking; Spanish remains the language of every public surface.
