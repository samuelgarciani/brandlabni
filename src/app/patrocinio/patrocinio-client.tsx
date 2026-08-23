"use client";

import Image from "next/image";
import { type CSSProperties, useState } from "react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Icon } from "@/components/icon";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

type SponsorTier = {
  name: string;
  price: string;
  accent: string;
  border: string;
  tagline: string;
  benefits: string[];
  cta: string;
  mail: string;
  /* How the price reads: a figure for the paid tiers, a pill for the tier that
     is settled in kind and has no number to set. */
  priceStyle?: "figure" | "pill";
};

const tiers: Record<"silver" | "gold" | "presentador" | "experiencia", SponsorTier> = {
  silver: {
    name: "Patrocinador Silver",
    price: "US$300",
    accent: "#c8cdd1",
    border: "rgba(200,205,209,.35)",
    tagline: "Presencia de marca y beneficios base.",
    benefits: [
      "Logo en las piezas oficiales del evento",
      "Presencia en pantallas durante el evento",
      "Mención como patrocinador del evento",
      "Publicación grupal en redes sociales",
      "Material promocional en el Welcome Kit",
      "Fotografías oficiales del evento",
      "Networking con empresarios y líderes",
      "2 entradas de cortesía",
    ],
    cta: "Quiero ser Silver",
    mail: "mailto:samuelgarcia@brandlabni.com?subject=Patrocinio%20Brand%20Lab%20Live%20%E2%80%94%20Silver%20US%24300&body=Hola%20Samuel%2C%20me%20interesa%20el%20nivel%20de%20patrocinio%20%22Patrocinador%20Silver%22%20para%20Brand%20Lab%20Live.%20Quedo%20atento(a)%20al%20media%20kit%20y%20las%20condiciones.",
  },
  gold: {
    name: "Patrocinador Gold",
    price: "US$600",
    accent: "#e6b64c",
    border: "rgba(230,182,76,.4)",
    tagline: "Alta visibilidad y activación de marca.",
    benefits: [
      "Logo destacado en las piezas oficiales",
      "Presencia en el video de apertura",
      "Espacio para activación · Stand 2×2 M",
      "Presencia en pantallas durante el evento",
      "Carrusel de patrocinadores en redes",
      "Inclusión de marca en el Welcome Kit",
      "Fotografías oficiales · Networking",
      "3 entradas de cortesía",
    ],
    cta: "Quiero ser Gold",
    mail: "mailto:samuelgarcia@brandlabni.com?subject=Patrocinio%20Brand%20Lab%20Live%20%E2%80%94%20Gold%20US%24600&body=Hola%20Samuel%2C%20me%20interesa%20el%20nivel%20de%20patrocinio%20%22Patrocinador%20Gold%22%20para%20Brand%20Lab%20Live.%20Quedo%20atento(a)%20al%20media%20kit%20y%20las%20condiciones.",
  },
  presentador: {
    name: "Patrocinador Presentador",
    price: "US$900",
    accent: "#e6b64c",
    border: "rgba(230,182,76,.55)",
    tagline: "La máxima presencia como aliado principal del evento.",
    benefits: [
      "Naming oficial del evento (presentado por [Marca])",
      "Exclusividad como Patrocinador Presentador",
      "Palabras de apertura (hasta 15 minutos)",
      "Presencia preferencial en escenario y pantallas",
      "Video institucional de hasta 60 s durante el evento",
      "Espacio para activación · Stand 3×2 M",
      "Publicación exclusiva en redes · Prioridad en Welcome Kit",
      "5 entradas de cortesía",
    ],
    cta: "Quiero ser Presentador",
    mail: "mailto:samuelgarcia@brandlabni.com?subject=Patrocinio%20Brand%20Lab%20Live%20%E2%80%94%20Presentador%20US%24900&body=Hola%20Samuel%2C%20me%20interesa%20el%20nivel%20de%20patrocinio%20%22Patrocinador%20Presentador%22%20para%20Brand%20Lab%20Live.%20Quedo%20atento(a)%20al%20media%20kit%20y%20las%20condiciones.",
  },
  experiencia: {
    name: "Patrocinador de Experiencia",
    price: "Aporte en especie",
    priceStyle: "pill",
    accent: "var(--color-sky)",
    border: "rgba(33,158,188,.4)",
    tagline: "Aportas 80 mini libretas, 80 termos, 80 lanyards y 80 gafetes — co-brandeados con Brand Lab y tu marca.",
    benefits: [
      "Reconocimiento como Patrocinador de Experiencia Oficial",
      "Co-branding en las 80 libretas, termos, lanyards y gafetes",
      "Presencia en el video de apertura",
      "Mención como patrocinador durante el evento",
      "Logo en las piezas oficiales del evento",
      "Publicación de agradecimiento en redes sociales",
      "Presencia en el Welcome Kit · Fotografías oficiales del evento",
      "2 entradas de cortesía",
    ],
    cta: "Quiero ser Patrocinador de Experiencia",
    mail: "mailto:samuelgarcia@brandlabni.com?subject=Patrocinio%20Brand%20Lab%20Live%20%E2%80%94%20Experiencia%20en%20especie&body=Hola%20Samuel%2C%20me%20interesa%20el%20nivel%20de%20patrocinio%20%22Patrocinador%20de%20Experiencia%22%20para%20Brand%20Lab%20Live.%20Quedo%20atento(a)%20al%20media%20kit%20y%20las%20condiciones.",
  },
};

const conditionItems = [
  {
    n: "1",
    text: "Todos los niveles de patrocinio tienen derecho a ingresar materiales promocionales dentro del kit de bienvenida.",
  },
  {
    n: "2",
    text: "La disponibilidad de cada nivel está sujeta a confirmación y a los cupos definidos para el evento.",
  },
  {
    n: "3",
    text: "Los beneficios, montos de inversión y condiciones específicas se detallan en el media kit oficial.",
  },
  {
    n: "4",
    text: "La participación como marca aliada se formaliza mediante acuerdo escrito entre las partes.",
  },
];

/** The single sponsorship enquiry address, prefilled once and reused by every CTA. */
const sponsorMailto =
  "mailto:samuelgarcia@brandlabni.com?subject=Quiero%20ser%20patrocinador%20de%20Brand%20Lab%20Live&body=Hola%20Samuel%2C%20me%20interesa%20conocer%20las%20oportunidades%20de%20patrocinio%20para%20Brand%20Lab%20Live.";

const navLinks = [
  { label: "Niveles", href: "#niveles" },
  { label: "Condiciones", href: "#condiciones" },
  { label: "Blog Brand", href: "/blog" },
  { label: "Volver al evento", href: "/eventos", back: true },
];

export function PatrocinioClient() {
  const [tier, setTier] = useState<keyof typeof tiers>("gold");
  const selected = tiers[tier];
  const activeStyle = (value: keyof typeof tiers) =>
    tier === value
      ? "bg-orange text-abyss"
      : "bg-transparent text-body-on-abyss";
  const priceIsPill = selected.priceStyle === "pill";
  const priceClass = priceIsPill
    ? "t-meta rounded-full border px-[14px] py-[6px] font-bold"
    : "t-subhead tnum";
  const priceStyle: CSSProperties = priceIsPill
    ? { color: selected.accent, borderColor: selected.border }
    : { color: selected.accent };

  return (
    <div className="floor-dark overflow-x-hidden bg-abyss text-on-dark-soft">
      <ScrollReveal />

      <a href="#contenido" className="skip-link">
        Saltar al contenido
      </a>
      <SiteHeader
        homeHref="/eventos"
        links={navLinks}
        cta={{ label: "Quiero patrocinar", href: sponsorMailto }}
        maxWidth={1100}
      />

      <main id="contenido">
        <section aria-labelledby="h-patrocinio-hero" className="relative overflow-hidden bg-navy-2">
          <Image
            src="/brand/patrocinio-hero.png"
            alt="Samuel García"
            fill
            sizes="100vw"
            preload
            className="object-cover object-left-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(270deg,rgba(13,58,86,.98)_0%,rgba(13,58,86,.9)_40%,rgba(13,58,86,.35)_60%,rgba(13,58,86,0)_74%)]" />
          <div className="relative z-10 mx-auto flex min-h-[560px] max-w-[1100px] flex-col items-end justify-center gutter py-[70px] text-right">
            <div className="max-w-[600px]">
              <div className="rv t-label text-orange">
                Patrocinio · Brand Lab Live 2026
              </div>
              <h1 id="h-patrocinio-hero" className="rv mt-[18px] t-display text-white">
                Sé parte del primer capítulo de Brand Lab
              </h1>
              <p className="rv ml-auto mt-[22px] max-w-[460px] t-lead text-on-dark-soft">
                Sé parte de las marcas que crean significado y abren la conversación real sobre branding. Al convertirte en marca aliada te vinculas con una iniciativa que promueve el pensamiento estratégico, la innovación y el desarrollo empresarial.
              </p>
              <div className="rv mt-8 flex flex-wrap justify-end gap-[14px]">
                <a
                  href={sponsorMailto}
                  className="btn btn-lg btn-primary"
                >
                  Quiero patrocinar <Icon name="arrow-right" />
                </a>
                <a
                  href="#niveles"
                  className="btno inline-flex rounded-full border-[1.5px] border-white/[0.28] bg-white/[0.08] px-[30px] py-4 t-body font-semibold text-white"
                >
                  Ver niveles
                </a>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="h-porque" className="bg-navy text-white">
          <div className="mx-auto max-w-[1100px] gutter py-[92px] lg:grid lg:grid-cols-2 lg:items-center lg:gap-14">
            <div className="rv">
              <div className="t-label text-orange">
                ¿Por qué patrocinar?
              </div>
              <h2 id="h-porque" className="mt-4 t-headline text-white">
                Conecta con quienes quieren llevar su marca al siguiente nivel
              </h2>
            </div>
            <div className="rv mt-8 lg:mt-0">
              <p className="t-body text-body-on-navy">
                Brand Lab Live reunirá a <strong className="text-white">emprendedores, fundadores, dueños, gerentes de PYMES, especialistas en marketing, consultores y líderes empresariales</strong>.
              </p>
              <p className="mt-4 t-body text-body-on-navy">
                Son profesionales interesados en ampliar sus conocimientos y mejorar sus estrategias de branding, que buscan optimizar sus áreas de marketing y fortalecer la forma en que construyen sus negocios.
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="h-niveles" id="niveles" className="scroll-mt-[70px] bg-abyss">
          <div className="mx-auto max-w-[1100px] gutter py-[92px]">
            <div className="rv max-w-[720px]">
              <div className="t-label text-orange">
                Opciones de patrocinio
              </div>
              <h2 id="h-niveles" className="mt-4 t-headline text-white">
                Convierte tu marca en parte de una conversación que transforma
              </h2>
              <p className="mt-4 measure t-body text-body-on-abyss">
                Tres niveles de patrocinio con visibilidad antes, durante y después del evento. Elige el que mejor conecta con tu marca.
              </p>
            </div>
            <div className="rv mt-11 grid gap-[26px] lg:grid-cols-[.82fr_1.18fr]">
              <div className="flex flex-col gap-[10px]">
                <button
                  type="button"
                  onClick={() => setTier("silver")}
                  className={`flex w-full items-center justify-between gap-3 rounded-[14px] px-5 py-4 t-body-sm font-semibold ${activeStyle("silver")}`}
                  style={{ backgroundColor: tier === "silver" ? "var(--color-orange)" : "transparent" }}
                >
                  Silver <span className="t-meta tnum font-bold opacity-85">US$300</span>
                </button>
                <button
                  type="button"
                  onClick={() => setTier("gold")}
                  className={`flex w-full items-center justify-between gap-3 rounded-[14px] px-5 py-4 t-body-sm font-semibold ${activeStyle("gold")}`}
                  style={{ backgroundColor: tier === "gold" ? "var(--color-orange)" : "transparent" }}
                >
                  Gold <span className="t-meta tnum font-bold opacity-85">US$600</span>
                </button>
                <button
                  type="button"
                  onClick={() => setTier("presentador")}
                  className={`flex w-full items-center justify-between gap-3 rounded-[14px] px-5 py-4 t-body-sm font-semibold ${activeStyle("presentador")}`}
                  style={{ backgroundColor: tier === "presentador" ? "var(--color-orange)" : "transparent" }}
                >
                  Presentador <span className="t-meta tnum font-bold opacity-85">US$900</span>
                </button>
                <button
                  type="button"
                  onClick={() => setTier("experiencia")}
                  className={`flex w-full items-center justify-between gap-3 rounded-[14px] px-5 py-4 t-body-sm font-semibold ${tier === "experiencia" ? "bg-blue text-abyss" : "bg-transparent text-body-on-abyss"}`}
                >
                  Experiencia <span className="t-meta font-bold opacity-85">En especie</span>
                </button>
              </div>
              <div className="rounded-[20px] border p-[34px]" style={{ borderColor: selected.border }}>
                <div className="flex flex-wrap items-baseline justify-between gap-4">
                  <span className="t-title-lg text-white">{selected.name}</span>
                  <span className={priceClass} style={priceStyle}>
                    {selected.price}
                  </span>
                </div>
                <div className="mt-2 t-body-sm text-body-on-abyss">{selected.tagline}</div>
                <div className="mt-[22px] grid gap-x-5 gap-y-3 sm:grid-cols-2">
                  {selected.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-[11px] t-body-sm text-on-dark-strong">
                      <Icon name="check" size={15} className="mt-1 text-orange" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={selected.mail}
                  className="btn btn-md btn-primary mt-[26px]"
                >
                  {selected.cta}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="h-condiciones" id="condiciones" className="scroll-mt-[70px] bg-abyss">
          <div className="mx-auto max-w-[1100px] gutter py-[92px]">
            <div className="rv max-w-[680px]">
              <div className="t-label text-orange">
                Políticas y condiciones del patrocinio
              </div>
              <h2 id="h-condiciones" className="mt-4 t-headline text-white">
                Cómo trabajamos con nuestras marcas aliadas
              </h2>
            </div>
            <div className="rv mt-9 flex flex-col gap-4 rounded-[18px] border border-white/[0.08] bg-abyss-surface p-[34px]">
              {conditionItems.map((item) => (
                <div key={item.n} className="flex items-start gap-[14px] border-b border-white/[0.08] pb-4 last:border-b-0 last:pb-0">
                  <span className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full bg-orange/15 t-meta font-extrabold text-orange">{item.n}</span>
                  <span className="t-body-sm text-on-dark-soft">{item.text}</span>
                </div>
              ))}
            </div>
            <p className="rv mt-5 t-meta italic text-muted-dark">
              Las condiciones detalladas y el contrato de patrocinio se envían junto con el media kit al confirmar tu interés.
            </p>
          </div>
        </section>

        <section aria-labelledby="h-cierre" className="floor-light bg-orange text-abyss text-center">
          <div className="mx-auto max-w-[1100px] gutter py-[92px]">
            <div className="rv">
              <div className="t-label text-on-orange">Marcas aliadas</div>
              <h2 id="h-cierre" className="mt-4 mx-auto max-w-[760px] t-headline">
                Impulsemos juntos una nueva conversación sobre branding
              </h2>
              <p className="mt-[18px] max-w-[600px] mx-auto t-lead text-on-orange">
                Escríbeme y te comparto el media kit completo con los niveles, la inversión y las condiciones de patrocinio.
              </p>
              <a
                href={sponsorMailto}
                className="btn btn-lg btn-abyss mt-[30px]"
              >
                Conversemos <Icon name="arrow-right" />
              </a>
            </div>
          </div>
        </section>


      </main>

      <SiteFooter
        maxWidth={1100}
        trailing={
          <a className="navlink inline-flex min-h-[44px] items-center gap-2" href="/eventos">
            <Icon name="arrow-left" size={14} />
            Volver al evento
          </a>
        }
      />
    </div>
  );
}
