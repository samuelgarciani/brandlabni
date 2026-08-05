"use client";

import Image from "next/image";
import { type CSSProperties, useState } from "react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Wordmark } from "@/components/wordmark";

type SponsorTier = {
  name: string;
  price: string;
  accent: string;
  border: string;
  tagline: string;
  benefits: string[];
  cta: string;
  mail: string;
  priceSize?: string;
  priceExtra?: string;
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
    priceSize: "14px",
    priceExtra: "border:1px solid rgba(33,158,188,.5);border-radius:100px;padding:6px 14px",
    accent: "#8ecae6",
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

export default function PatrocinioPage() {
  const [tier, setTier] = useState<keyof typeof tiers>("gold");
  const selected = tiers[tier];
  const activeStyle = (value: keyof typeof tiers) =>
    tier === value
      ? "bg-[#fb8500] text-[#04141d]"
      : "bg-transparent text-[#9fb3bc]";
  const selectedPriceStyles: CSSProperties = {
    color: selected.accent,
    fontSize: selected.priceSize ?? "32px",
    ...(selected.priceExtra
      ? Object.fromEntries(
          selected.priceExtra
            .split(";")
            .map((rule) => rule.split(":").map((str) => str.trim()))
            .filter((rule): rule is [string, string] => rule.length === 2)
        )
      : {}),
  };

  return (
    <div className="overflow-x-hidden bg-[#04141d] text-[#c9d6db]">
      <ScrollReveal />
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#04141d]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1100px] items-center justify-between px-[40px] py-4 sm:px-[22px]">
          <a href="/eventos" className="flex items-center gap-3">
            <Image src="/brand/isotipo-white.png" alt="Brand Lab" width={28} height={28} className="h-7 w-auto" />
            <Wordmark light />
          </a>
          <div className="hidden md:flex items-center gap-6 text-[14px] font-medium text-[#9fb3bc]">
            <a className="navlink" href="#niveles">Niveles</a>
            <a className="navlink" href="#condiciones">Condiciones</a>
            <a className="navlink" href="/blog">Blog Brand</a>
            <a className="navlink" href="/eventos">← Volver al evento</a>
          </div>
          <a
            href="mailto:samuelgarcia@brandlabni.com?subject=Quiero%20ser%20patrocinador%20de%20Brand%20Lab%20Live&body=Hola%20Samuel%2C%20me%20interesa%20conocer%20las%20oportunidades%20de%20patrocinio%20para%20Brand%20Lab%20Live."
            className="btnp rounded-full bg-[#fb8500] px-5 py-3 text-[13.5px] font-semibold text-[#04141d]"
          >
            Quiero patrocinar
          </a>
        </div>
      </header>

      <main>
        <header className="relative overflow-hidden bg-[#0d3a56]">
          <Image
            src="/brand/patrocinio-hero.png"
            alt="Samuel García"
            fill
            sizes="100vw"
            priority
            className="object-cover object-left-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(270deg,rgba(13,58,86,.98)_0%,rgba(13,58,86,.9)_40%,rgba(13,58,86,.35)_60%,rgba(13,58,86,0)_74%)]" />
          <div className="relative z-10 mx-auto flex min-h-[560px] max-w-[1100px] flex-col items-end justify-center px-[40px] py-[70px] text-right sm:px-[22px]">
            <div className="max-w-[600px]">
              <div className="rv text-[13px] font-bold uppercase tracking-[0.16em] text-[#fb8500]">
                Patrocinio · Brand Lab Live 2026
              </div>
              <h1 className="rv mt-[18px] text-[56px] font-extrabold leading-[1.02] tracking-[-0.04em] text-white sm:text-[42px]">
                Sé parte del primer capítulo de Brand Lab
              </h1>
              <p className="rv ml-auto mt-[22px] max-w-[460px] text-[18px] leading-[1.6] text-[#c6d3d9]">
                Sé parte de las marcas que crean significado y abren la conversación real sobre branding. Al convertirte en marca aliada te vinculas con una iniciativa que promueve el pensamiento estratégico, la innovación y el desarrollo empresarial.
              </p>
              <div className="rv mt-8 flex flex-wrap justify-end gap-[14px]">
                <a
                  href="mailto:samuelgarcia@brandlabni.com?subject=Quiero%20ser%20patrocinador%20de%20Brand%20Lab%20Live&body=Hola%20Samuel%2C%20me%20interesa%20conocer%20las%20oportunidades%20de%20patrocinio%20para%20Brand%20Lab%20Live."
                  className="btnp rounded-full bg-[#fb8500] px-8 py-4 text-[16px] font-bold text-[#04141d]"
                >
                  Quiero patrocinar →
                </a>
                <a
                  href="#niveles"
                  className="btno inline-flex rounded-full border-[1.5px] border-white/[0.28] bg-white/[0.08] px-[30px] py-4 text-[16px] font-semibold text-white"
                >
                  Ver niveles
                </a>
              </div>
            </div>
          </div>
        </header>

        <section className="bg-[#023047] text-white">
          <div className="mx-auto max-w-[1100px] px-[40px] py-[92px] sm:px-[22px] lg:grid lg:grid-cols-2 lg:items-center lg:gap-14">
            <div className="rv">
              <div className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#fb8500]">
                ¿Por qué patrocinar?
              </div>
              <h2 className="mt-4 text-[44px] font-extrabold leading-[1.06] tracking-[-0.03em] text-white sm:text-[32px]">
                Conecta con quienes quieren llevar su marca al siguiente nivel
              </h2>
            </div>
            <div className="rv mt-8 lg:mt-0">
              <p className="text-[17px] leading-[1.7] text-[#aebfc8]">
                Brand Lab Live reunirá a <strong className="text-white">emprendedores, fundadores, dueños, gerentes de PYMES, especialistas en marketing, consultores y líderes empresariales</strong>.
              </p>
              <p className="mt-4 text-[17px] leading-[1.7] text-[#aebfc8]">
                Son profesionales interesados en ampliar sus conocimientos y mejorar sus estrategias de branding, que buscan optimizar sus áreas de marketing y fortalecer la forma en que construyen sus negocios.
              </p>
            </div>
          </div>
        </section>

        <section id="niveles" className="scroll-mt-[70px] bg-[#04141d]">
          <div className="mx-auto max-w-[1100px] px-[40px] py-[92px] sm:px-[22px]">
            <div className="rv max-w-[720px]">
              <div className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#fb8500]">
                Opciones de patrocinio
              </div>
              <h2 className="mt-4 text-[44px] font-extrabold leading-[1.06] tracking-[-0.03em] text-white sm:text-[32px]">
                Convierte tu marca en parte de una conversación que transforma
              </h2>
              <p className="mt-4 max-w-[680px] text-[16px] leading-[1.6] text-[#9fb3bc]">
                Tres niveles de patrocinio con visibilidad antes, durante y después del evento. Elige el que mejor conecta con tu marca.
              </p>
            </div>
            <div className="rv mt-11 grid gap-[26px] lg:grid-cols-[.82fr_1.18fr]">
              <div className="flex flex-col gap-[10px]">
                <button
                  type="button"
                  onClick={() => setTier("silver")}
                  className={`flex w-full items-center justify-between gap-3 rounded-[14px] px-5 py-4 text-[15px] font-semibold ${activeStyle("silver")}`}
                  style={{ backgroundColor: tier === "silver" ? "#fb8500" : "transparent" }}
                >
                  Silver <span className="text-[13.5px] font-bold opacity-85">US$300</span>
                </button>
                <button
                  type="button"
                  onClick={() => setTier("gold")}
                  className={`flex w-full items-center justify-between gap-3 rounded-[14px] px-5 py-4 text-[15px] font-semibold ${activeStyle("gold")}`}
                  style={{ backgroundColor: tier === "gold" ? "#fb8500" : "transparent" }}
                >
                  Gold <span className="text-[13.5px] font-bold opacity-85">US$600</span>
                </button>
                <button
                  type="button"
                  onClick={() => setTier("presentador")}
                  className={`flex w-full items-center justify-between gap-3 rounded-[14px] px-5 py-4 text-[15px] font-semibold ${activeStyle("presentador")}`}
                  style={{ backgroundColor: tier === "presentador" ? "#fb8500" : "transparent" }}
                >
                  Presentador <span className="text-[13.5px] font-bold opacity-85">US$900</span>
                </button>
                <button
                  type="button"
                  onClick={() => setTier("experiencia")}
                  className={`flex w-full items-center justify-between gap-3 rounded-[14px] px-5 py-4 text-[15px] font-semibold ${tier === "experiencia" ? "bg-[#219ebc] text-[#04141d]" : "bg-transparent text-[#9fb3bc]"}`}
                >
                  Experiencia <span className="text-[12px] font-bold opacity-85">En especie</span>
                </button>
              </div>
              <div className="rounded-[20px] border p-[34px]" style={{ borderColor: selected.border }}>
                <div className="flex flex-wrap items-baseline justify-between gap-4">
                  <span className="text-[26px] font-extrabold tracking-[-0.01em] text-white">{selected.name}</span>
                  <span className="font-extrabold" style={selectedPriceStyles}>
                    {selected.price}
                  </span>
                </div>
                <div className="mt-2 text-[15px] text-[#9fb3bc]">{selected.tagline}</div>
                <div className="mt-[22px] grid gap-x-5 gap-y-3 sm:grid-cols-2">
                  {selected.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-[11px] text-[14.5px] leading-[1.5] text-[#e6edf0]">
                      <span className="mt-0.5 text-[#fb8500] font-bold">✓</span>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={selected.mail}
                  className="btnp mt-[26px] inline-flex rounded-full bg-[#fb8500] px-7 py-[14px] text-[14.5px] font-bold text-[#04141d]"
                >
                  {selected.cta}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="condiciones" className="scroll-mt-[70px] bg-[#04141d]">
          <div className="mx-auto max-w-[1100px] px-[40px] py-[92px] sm:px-[22px]">
            <div className="rv max-w-[680px]">
              <div className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#fb8500]">
                Políticas y condiciones del patrocinio
              </div>
              <h2 className="mt-4 text-[44px] font-extrabold leading-[1.06] tracking-[-0.03em] text-white sm:text-[32px]">
                Cómo trabajamos con nuestras marcas aliadas
              </h2>
            </div>
            <div className="rv mt-9 flex flex-col gap-4 rounded-[18px] border border-white/[0.08] bg-[#0d2b3a] p-[34px]">
              {conditionItems.map((item) => (
                <div key={item.n} className="flex items-start gap-[14px] border-b border-white/[0.08] pb-4 last:border-b-0 last:pb-0">
                  <span className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full bg-[#fb8500]/15 text-[13px] font-extrabold text-[#fb8500]">{item.n}</span>
                  <span className="text-[15.5px] leading-[1.6] text-[#c9d6db]">{item.text}</span>
                </div>
              ))}
            </div>
            <p className="rv mt-5 text-[13.5px] italic text-[#6f8892]">
              Las condiciones detalladas y el contrato de patrocinio se envían junto con el media kit al confirmar tu interés.
            </p>
          </div>
        </section>

        <section className="bg-[#fb8500] text-[#04141d] text-center">
          <div className="mx-auto max-w-[1100px] px-[40px] py-[92px] sm:px-[22px]">
            <div className="rv">
              <div className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#7a3f00]">Marcas aliadas</div>
              <h2 className="mt-4 mx-auto max-w-[760px] text-[46px] font-extrabold leading-[1.04] tracking-[-0.03em] sm:text-[38px]">
                Impulsemos juntos una nueva conversación sobre branding
              </h2>
              <p className="mt-[18px] max-w-[600px] mx-auto text-[17.5px] leading-[1.6] text-[#3a2200]">
                Escríbeme y te comparto el media kit completo con los niveles, la inversión y las condiciones de patrocinio.
              </p>
              <a
                href="mailto:samuelgarcia@brandlabni.com?subject=Quiero%20ser%20patrocinador%20de%20Brand%20Lab%20Live&body=Hola%20Samuel%2C%20me%20interesa%20conocer%20las%20oportunidades%20de%20patrocinio%20para%20Brand%20Lab%20Live."
                className="btnp mt-[30px] inline-flex rounded-full bg-[#04141d] px-9 py-[17px] text-[16.5px] font-bold text-white"
              >
                Conversemos →
              </a>
            </div>
          </div>
        </section>

        <footer className="bg-[#020c12] text-[#c9d6db]">
          <div className="mx-auto max-w-[1100px] px-[40px] pt-16 pb-9 sm:px-[22px]">
            <div className="grid gap-11 border-b border-white/10 pb-11 lg:grid-cols-[1.5fr_1fr_1.2fr]">
              <div>
                <div className="mb-[18px] flex items-center gap-3">
                  <Image src="/brand/isotipo-white.png" alt="Isotipo Brand Lab" width={38} height={38} className="h-[38px] w-auto" />
                  <Wordmark light />
                </div>
                <p className="max-w-[320px] text-[15px] leading-[1.6] text-[#94a8b2]">
                  Branding con significado. Transformamos marcas invisibles en marcas relevantes, humanas y memorables.
                </p>
                <p className="mt-4 text-[17px] font-extrabold italic text-[#fb8500]">We don't sell, we mean!</p>
              </div>
              <div>
                <div className="mb-4 text-[12.5px] font-bold uppercase tracking-[0.14em] text-[#5f7580]">Explora</div>
                <div className="flex flex-col gap-[11px] text-[14.5px] text-[#b6c6ce]">
                  <a className="navlink" href="/#historia">Historia</a>
                  <a className="navlink" href="/#quienes">Quiénes somos</a>
                  <a className="navlink" href="/#oferta">Oferta</a>
                  <a className="navlink" href="/#talks">Talks</a>
                  <a className="navlink" href="/blog">Blog Brand</a>
                  <a className="navlink" href="/eventos">Eventos</a>
                  <a className="navlink" href="/patrocinio">Patrocinio</a>
                </div>
              </div>
              <div>
                <div className="mb-4 text-[12.5px] font-bold uppercase tracking-[0.14em] text-[#5f7580]">Contáctanos</div>
                <div className="flex flex-col gap-[11px] text-[14.5px] text-[#b6c6ce]">
                  <a className="navlink" href="https://wa.me/50557400875" target="_blank" rel="noopener noreferrer">
                    WhatsApp · +505 5740 0875
                  </a>
                  <a className="navlink" href="mailto:samuelgarcia@brandlabni.com">samuelgarcia@brandlabni.com</a>
                  <a className="navlink" href="https://www.instagram.com/brandlab_bysamuel/" target="_blank" rel="noopener noreferrer">
                    Instagram · brandlab_bysamuel
                  </a>
                  <a className="navlink" href="https://www.facebook.com/BrandLabBySamu/?locale=es_LA" target="_blank" rel="noopener noreferrer">
                    Facebook · Brand Lab By Samu
                  </a>
                  <a className="navlink" href="https://www.linkedin.com/in/samuel-garc%C3%ADa-2020/" target="_blank" rel="noopener noreferrer">
                    LinkedIn · Samuel García l Brand Lab
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-between gap-3 pt-6 text-[13px] text-[#6b8089]">
              <span>© 2026 Brand Lab by Samu · Samuel García, Estratega de Marca</span>
              <a className="navlink" href="/eventos">← Volver al evento</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
