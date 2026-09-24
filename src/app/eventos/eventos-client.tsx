"use client";

import Image from "next/image";
import { useState } from "react";
import { Icon } from "@/components/icon";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const presentingSponsor = { src: "/brand/logos/bac.png", alt: "BAC", width: 1456, height: 390 };
const invitingSponsor = { src: "/brand/logos/fuentepura.png", alt: "Fuente Pura", width: 880, height: 798 };

const mainSponsorLogos = [
  { src: "/brand/logos/excel-talleres.png", alt: "Excel Talleres", width: 480, height: 200 },
  { src: "/brand/logos/tassinari.png", alt: "Tassinari Visual Communication", width: 500, height: 281 },
  { src: "/brand/logos/excel-repuestos.png", alt: "Excel Repuestos", width: 480, height: 200 },
];

const sponsorLogos = [
  { src: "/brand/logos/atabal.png", alt: "Atabal Café" },
  { src: "/brand/logos/disruptivas.png", alt: "Disruptivas" },
  { src: "/brand/logos/az.png", alt: "AZ Producciones" },
  { src: "/brand/logos/holidayinn.png", alt: "Holiday Inn Express Managua" },
  { src: "/brand/logos/cna.png", alt: "CNA Salud Spa" },
  { src: "/brand/logos/doubletree.png", alt: "DoubleTree by Hilton" },
  { src: "/brand/logos/impacthub.png", alt: "Impact Hub Managua" },
  { src: "/brand/logos/sur.png", alt: "SUR" },
  { src: "/brand/logos/gsq.png", alt: "Grupo Sur Química" },
  { src: "/brand/logos/elizabeth.png", alt: "Elizabeth Balloons & Flowers" },
  { src: "/brand/logos/rh.png", alt: "RH Producciones" },
];

const recapParagraphs = [
  "¿Qué hace que una marca sea elegida, recordada y recomendada por las personas?",
  "Con el propósito de abrir esta conversación nació Brand Lab Live, un espacio creado para empresarios, emprendedores, profesionales y estudiantes que buscan comprender el branding desde una perspectiva estratégica y no únicamente como una herramienta de comunicación.",
  "En su primera edición, Brand Lab presentó la conferencia “Las marcas no venden, significan”, una propuesta que invitó a reflexionar sobre el verdadero papel de las marcas en el crecimiento de las organizaciones y cómo estas pueden convertirse en uno de los activos más valiosos de un negocio cuando son construidas desde el propósito, la coherencia y una propuesta de valor diferenciada.",
  "Durante la conferencia se abordaron temas como el origen del branding y su evolución como disciplina estratégica; la diferencia entre branding y marketing; el papel de la marca en la generación de confianza, preferencia y valor; la construcción de marcas con significado; y los desafíos que enfrentan hoy las organizaciones para conectar con consumidores cada vez más informados, exigentes e hiperconectados.",
  "La jornada también buscó desmitificar algunas de las ideas más comunes alrededor del branding, recordando que una marca no es únicamente un logotipo, un nombre o una campaña publicitaria, sino el conjunto de percepciones, experiencias y relaciones que una empresa construye con sus clientes a lo largo del tiempo.",
  "Como parte del evento, se desarrolló un Conversatorio Estratégico con la participación de María José Amador, Jefa de Comunicación de BAC Nicaragua; Gilda Tinoco, Gerente Regional de Comunicación y Sostenibilidad de Claro Centroamérica; y Sara Avilés, especialista en marketing digital. Desde sus diferentes perspectivas compartieron experiencias y recomendaciones para fortalecer las marcas en un entorno empresarial en constante transformación.",
  "La conferencia fue impartida por Samuel García, fundador de Brand Lab, consultor en branding y estrategia de marca con más de una década de experiencia acompañando a empresas y emprendedores en procesos de posicionamiento, diferenciación y construcción de valor.",
  "Con esta iniciativa, Brand Lab busca impulsar una nueva forma de entender el branding en Nicaragua, promoviendo una visión donde la estrategia, el propósito y la experiencia del cliente sean los pilares para construir empresas más sólidas, competitivas y sostenibles.",
];

const pressLinks = [
  {
    label: "Facebook — BAC Nicaragua",
    href: "https://facebook.com/100063547838415/posts/1708112484650330/?rdid=wdNtNS5KG9mOHtOE&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1GER2uDtqU%2F#",
  },
  {
    label: "Negocios y Entretenimiento Nicaragua — Blogspot",
    href: "https://negociosyentretenimientonic.blogspot.com/2026/09/bac-nicaragua-presente-en-la-primera.html",
  },
  {
    label: "Mizpa Noticias",
    href: "https://mizpanoticias.com/bac-nicaragua-presente-en-la-primera-edicion-de-brand-lab-con-la-conferencia-las-marcas-no-venden-significan/",
  },
  {
    label: "Facebook — Publicación del evento",
    href: "https://www.facebook.com/story.php?story_fbid=1757360785459583&id=100035570362007&rdid=8ji1hcmloqZOijDA#",
  },
];

type AgendaItem = {
  time: string;
  kicker?: string;
  title: string;
  body: string;
  sponsor?: { src: string; alt: string; width: number; height: number; note: string };
  speaker?: { name: string; role: string };
  panelists?: { name: string; role: string; note: string }[];
};

const agendaItems: AgendaItem[] = [
  {
    time: "8:30 a.m. – 9:20 a.m.",
    title: "Registro y acreditación de asistentes",
    body: "Recepción de los participantes, entrega de credenciales y kit de bienvenida. Un espacio para comenzar a conectar con empresarios, emprendedores y profesionales antes del inicio de la conferencia.",
  },
  {
    time: "9:20 a.m. – 9:30 a.m.",
    title: "Palabras de bienvenida",
    body: "Inicio oficial de Brand Lab Live, presentación del propósito del evento y apertura de una conversación sobre el verdadero valor estratégico de las marcas en el crecimiento de las organizaciones.",
  },
  {
    time: "9:30 a.m. – 9:45 a.m.",
    kicker: "Apertura Especial",
    title: "BAC | Presente en cada momento",
    body: "Un espacio de apertura a cargo de BAC, marca presentadora del evento, donde compartió cómo una marca construye relaciones de confianza acompañando a las personas en los momentos más importantes de su vida.",
    sponsor: { src: "/brand/logos/bac.png", alt: "BAC", width: 1456, height: 390, note: "Marca presentadora del evento" },
  },
  {
    time: "9:45 a.m. – 10:30 a.m.",
    kicker: "Conferencia",
    title: "Las marcas no venden, significan",
    body: "Una conferencia que invitó a replantear la forma en que entendemos el branding. Recorrimos cómo construir marcas con significado desde la estrategia, el propósito y la coherencia para generar diferenciación, confianza y crecimiento sostenible.",
    speaker: { name: "Samuel García", role: "Fundador de Brand Lab | Branding y Estrategia de Marca" },
  },
  {
    time: "10:30 a.m. – 11:10 a.m.",
    kicker: "Conversatorio Estratégico",
    title: "Branding, Consumidor/canales y Reputación",
    body: "Un espacio de conversación que complementó los principales conceptos abordados durante la conferencia, integrando tres perspectivas fundamentales para comprender cómo se construyen marcas relevantes y sostenibles.",
    panelists: [
      {
        name: "María José Amador",
        role: "Jefa de Comunicación – BAC Nicaragua",
        note: "Compartió la visión del branding como un activo estratégico para las organizaciones, la construcción de valor y el papel de la estrategia en la generación de diferenciación y preferencia.",
      },
      {
        name: "Sara Avilés",
        role: "Especialista en Marketing Digital",
        note: "Abordó cómo evolucionan los consumidores, la importancia de los diferentes puntos de contacto y cómo las empresas deben construir experiencias consistentes en todos sus canales para fortalecer su marca.",
      },
      {
        name: "Gilda Tinoco",
        role: "Gerente Regional de Comunicación Corporativa – Claro Centroamérica",
        note: "Compartió su experiencia sobre comunicación estratégica, reputación corporativa y la construcción de confianza como uno de los activos más valiosos para cualquier organización.",
      },
    ],
  },
  {
    time: "11:10 a.m. – 11:20 a.m.",
    title: "Reflexión final, agradecimientos y sorteos",
    body: "Cierre oficial del evento con las principales conclusiones de la jornada, reconocimiento a patrocinadores y aliados estratégicos, seguido del sorteo de obsequios preparados por las marcas participantes.",
  },
  {
    time: "11:20 a.m. – 12:00 m.",
    title: "Coffee Break & Networking",
    body: "Un espacio para continuar la conversación, fortalecer relaciones y generar nuevas conexiones entre empresarios, emprendedores, profesionales, panelistas y marcas aliadas.",
  },
];

type PanelPerson = {
  photo: string;
  name: string;
  role: string;
  bio: string;
  tag: string;
};

const panelPeople: PanelPerson[] = [
  {
    photo: "/brand/panel/samuel.jpg",
    name: "Samuel García",
    role: "Fundador de Brand Lab | Branding y Estrategia de Marca",
    bio: "Consultor en branding y estrategia de marca con más de diez años de experiencia. Fundador de Brand Lab, una iniciativa dedicada a impulsar la construcción de marcas con propósito, diferenciación y significado para generar valor sostenible en las organizaciones.",
    tag: "Modera",
  },
  {
    photo: "/brand/panel/maria-jose.jpg",
    name: "María José Amador",
    role: "Jefa de Comunicación | BAC Nicaragua",
    bio: "Profesional en comunicación corporativa con experiencia en gestión de marca, reputación y comunicación estratégica. Actualmente lidera el área de Comunicación de BAC Nicaragua, impulsando iniciativas que fortalecen la relación entre la marca y sus clientes.",
    tag: "Panelista",
  },
  {
    photo: "/brand/panel/sara-aviles.jpg",
    name: "Sara Avilés",
    role: "Especialista en Marketing Digital",
    bio: "Especialista en marketing digital y estrategias multicanal, con experiencia en comportamiento del consumidor, comercio electrónico y transformación digital. Docente universitaria y fundadora de Meraki Creative Nicaragua.",
    tag: "Panelista",
  },
  {
    photo: "/brand/panel/gilda-tinoco.jpg",
    name: "Gilda Tinoco",
    role: "Gerente Regional de Comunicación y Sostenibilidad | Claro Centroamérica",
    bio: "Profesional con amplia trayectoria en comunicación estratégica, reputación corporativa y sostenibilidad. Actualmente lidera la estrategia regional de comunicación y sostenibilidad de Claro Centroamérica, fortaleciendo el posicionamiento y la confianza de la marca en la región.",
    tag: "Panelista",
  },
];

const navLinks = [
  { label: "Lo que fue", href: "#resumen" },
  { label: "Agenda", href: "#agenda" },
  { label: "Galería", href: "#galeria" },
  { label: "Panel", href: "#panel" },
  { label: "Blog Brand", href: "/blog" },
  { label: "Volver al sitio", href: "/", back: true },
];

export function EventosClient() {
  const [openAgenda, setOpenAgenda] = useState<number | null>(3);

  return (
    <div className="floor-dark overflow-x-hidden bg-abyss text-on-dark-soft">
      <ScrollReveal />

      <a href="#contenido" className="skip-link">
        Saltar al contenido
      </a>

      <SiteHeader homeHref="/" links={navLinks} maxWidth={1180} />

      <main id="contenido">
        <section aria-labelledby="h-evento-hero" className="relative overflow-hidden bg-navy-2" style={{ aspectRatio: "1920 / 900" }}>
          <h1 id="h-evento-hero" className="sr-only">Brand Lab Live 2026 — Las marcas no venden, significan</h1>
          <Image
            src="/brand/evento-banner-bac.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
            preload
          />
        </section>

        <section aria-labelledby="h-patrocinan" className="floor-light bg-white py-[48px]">
          <div className="mx-auto max-w-[1100px] gutter">
            <h2 id="h-patrocinan" className="sr-only">Patrocinadores</h2>

            <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:divide-x sm:divide-ink/10">
              <div className="flex flex-col items-center gap-6 sm:px-6">
                <p className="t-label text-orange-ink">Presenta</p>
                <div className="flex min-h-[130px] flex-1 items-center justify-center">
                  <div className="flex h-[130px] w-[300px] max-w-full items-center justify-center overflow-hidden rounded-2xl border border-ink/10 bg-white p-8 shadow-[0_28px_54px_-28px_rgba(2,34,47,0.5)]">
                    <Image
                      src={presentingSponsor.src}
                      alt={presentingSponsor.alt}
                      width={presentingSponsor.width}
                      height={presentingSponsor.height}
                      className="h-full w-full object-contain"
                      priority
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center gap-6 sm:px-6">
                <p className="t-label text-body-muted">Invita</p>
                <div className="flex min-h-[130px] flex-1 items-center justify-center">
                  <div className="flex h-[110px] w-[150px] items-center justify-center overflow-hidden rounded-2xl border border-ink/10 bg-white p-4 shadow-[0_20px_40px_-30px_rgba(2,34,47,0.4)]">
                    <Image
                      src={invitingSponsor.src}
                      alt={invitingSponsor.alt}
                      width={invitingSponsor.width}
                      height={invitingSponsor.height}
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center gap-6 sm:px-6">
                <p className="t-label text-body-muted">Patrocinan</p>
                <div className="flex min-h-[130px] flex-1 flex-wrap items-center justify-center gap-3">
                  {mainSponsorLogos.map((logo) => (
                    <div
                      key={logo.alt}
                      className="flex h-[74px] w-[96px] items-center justify-center overflow-hidden rounded-xl border border-ink/10 bg-white p-3 shadow-[0_16px_30px_-24px_rgba(2,34,47,0.4)]"
                    >
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={logo.width}
                        height={logo.height}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-10 flex items-center gap-6 border-t border-ink/10 pt-8">
              <span className="shrink-0 t-label text-body-muted">
                Con el apoyo de
              </span>
              <div className="group relative flex-1 overflow-hidden" style={{ WebkitMaskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)", maskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)" }}>
                <div className="flex w-max animate-marq items-center gap-[70px] py-2 [animation-duration:30s] group-hover:[animation-play-state:paused]">
                  {sponsorLogos.concat(sponsorLogos).map((logo, index) => (
                    <Image
                      key={`${logo.alt}-${index}`}
                      src={logo.src}
                      alt={logo.alt}
                      width={210}
                      height={64}
                      className="h-[48px] w-auto max-w-[160px] object-contain grayscale opacity-50 transition duration-300 hover:grayscale-0 hover:opacity-100"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="h-resumen" id="resumen" className="scroll-mt-[70px] bg-navy text-white">
          <div className="mx-auto max-w-[1100px] gutter py-[60px] sm:py-24">
            <div className="rv max-w-[720px]">
              <div className="t-label text-orange">
                Lo que fue el evento
              </div>
              <h2 id="h-resumen" className="mt-4 t-headline text-white">
                La primera edición de Brand Lab Live ya sucedió
              </h2>
            </div>

            <div className="rv mt-10 grid gap-[34px] lg:grid-cols-[1fr_.9fr] lg:items-start">
              <div className="grid grid-cols-1 gap-[14px] sm:grid-cols-3">
                <div className="rounded-[16px] border border-white/10 bg-abyss-surface p-6">
                  <div className="t-label text-sky font-semibold">Fecha</div>
                  <div className="mt-3 t-body font-bold text-white">19 de septiembre de 2026</div>
                </div>
                <div className="rounded-[16px] border border-white/10 bg-abyss-surface p-6">
                  <div className="t-label text-sky font-semibold">Hora</div>
                  <div className="mt-3 t-body tnum font-bold text-white">9:00 a.m. – 11:30 a.m.</div>
                </div>
                <div className="rounded-[16px] border border-white/10 bg-abyss-surface p-6">
                  <div className="t-label text-sky font-semibold">Lugar</div>
                  <div className="mt-3 t-body font-bold text-white">DoubleTree by Hilton Managua</div>
                </div>
              </div>
            </div>

            <div className="rv mt-12 max-w-[760px]">
              <p className="t-quote text-orange">
                “Brand Lab propone cambiar la conversación: el problema de las empresas no es el marketing, es la falta de estrategia de marca.”
              </p>

              <div className="mt-9 space-y-5 measure t-body text-body-on-navy">
                {recapParagraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>

              <p className="t-quote mt-9 text-white">
                “Hoy las empresas hablan mucho de vender más, pero muy poco de construir marcas que permanezcan en el tiempo. Brand Lab nace para cambiar esa conversación y recordar que las marcas más valiosas no son necesariamente las que más venden, sino aquellas que logran ocupar un lugar en la vida de las personas”, expresó García.
              </p>

              <p className="mt-9 t-body text-body-on-navy">
                Porque, al final, las marcas no venden. Significan.
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="h-video" className="relative overflow-hidden bg-abyss">
          <div className="pointer-events-none absolute -top-[60px] -right-[80px] h-[400px] w-[400px] bg-[url('/brand/isotipo-white.png')] bg-contain bg-no-repeat opacity-5" />
          <div className="relative mx-auto max-w-[1100px] gutter py-24">
            <div className="rv max-w-[640px]">
              <div className="t-label text-orange">
                Video resumen
              </div>
              <h2 id="h-video" className="mt-4 t-headline text-white">
                Revive los mejores momentos de la jornada
              </h2>
            </div>
            <div className="rv mt-10 aspect-video w-full overflow-hidden rounded-[22px] border border-white/[0.08] bg-abyss-surface">
              <div className="flex h-full w-full flex-col items-center justify-center gap-4 text-center">
                <span className="flex h-[64px] w-[64px] items-center justify-center rounded-full bg-orange text-abyss">
                  <Icon name="arrow-right" size={22} />
                </span>
                <p className="t-body-sm text-body-on-abyss">Video resumen — próximamente</p>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="h-galeria" id="galeria" className="floor-light scroll-mt-[70px] bg-bone text-navy">
          <div className="mx-auto max-w-[1100px] gutter py-24">
            <div className="rv max-w-[680px]">
              <div className="t-label text-blue-ink">
                Galería
              </div>
              <h2 id="h-galeria" className="mt-4 t-headline text-navy">
                Fotografías seleccionadas del evento
              </h2>
            </div>
            <div className="rv mt-11 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {Array.from({ length: 8 }).map((_, index) => (
                <div
                  key={index}
                  className="flex aspect-[4/5] items-center justify-center rounded-2xl border border-navy/10 bg-white/70"
                >
                  <span className="t-meta text-body-muted">Foto próximamente</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="h-agenda" id="agenda" className="bg-abyss text-white">
          <div className="mx-auto max-w-[1100px] gutter py-24">
            <div className="rv max-w-[680px]">
              <div className="t-label text-orange">
                Agenda del evento
              </div>
              <h2 id="h-agenda" className="mt-4 t-headline text-white">
                Así se vivió la mañana de Brand Lab Live
              </h2>
              <p className="mt-4 t-body-sm text-body-on-abyss">
                Da clic en cada actividad para ver el detalle.
              </p>
            </div>

            <div className="rv relative mt-11 rounded-[22px] border border-white/[0.08] bg-abyss-surface shadow-[0_30px_60px_-42px_rgba(2,48,71,0.5)]">
              <div aria-hidden className="absolute left-[27px] top-8 bottom-8 w-px bg-white/10 sm:left-[35px]" />
              {agendaItems.map((item, index) => {
                const isOpen = openAgenda === index;
                const panelId = `agenda-panel-${index}`;
                return (
                  <div key={item.time} className="relative border-b border-white/[0.08] last:border-b-0">
                    <button
                      type="button"
                      onClick={() => setOpenAgenda(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className="flex w-full items-start gap-3 py-5 pl-[52px] pr-5 text-left transition-colors hover:bg-white/[0.03] sm:gap-6 sm:pl-[68px] sm:pr-7"
                    >
                      <span
                        aria-hidden
                        className={`absolute left-[27px] top-[26px] h-[11px] w-[11px] -translate-x-1/2 rounded-full border-2 transition-colors sm:left-[35px] ${
                          isOpen ? "border-orange bg-orange" : "border-white/25 bg-abyss"
                        }`}
                      />
                      <span className="w-[104px] shrink-0 pt-[3px] tnum t-meta font-bold text-sky sm:w-[168px] sm:t-body-sm">
                        {item.time}
                      </span>
                      <span className="min-w-0 flex-1">
                        {item.kicker ? (
                          <span className="block t-micro text-orange">{item.kicker}</span>
                        ) : null}
                        <span className="block t-title-sm text-white">{item.title}</span>
                      </span>
                      <Icon
                        name="chevron-down"
                        size={18}
                        className={`mt-[5px] shrink-0 text-white/35 transition-transform duration-200 ${isOpen ? "rotate-180 text-orange" : ""}`}
                      />
                    </button>
                    <div id={panelId} hidden={!isOpen} className="pb-6 pl-[52px] pr-5 sm:pl-[68px] sm:pr-7">
                        <p className="measure t-body-sm text-body-on-abyss">{item.body}</p>

                        {item.sponsor ? (
                          <div className="mt-4 flex flex-wrap items-center gap-3 rounded-2xl border border-white/[0.08] bg-abyss px-4 py-3">
                            <Image
                              src={item.sponsor.src}
                              alt={item.sponsor.alt}
                              width={item.sponsor.width}
                              height={item.sponsor.height}
                              className="h-6 w-auto"
                            />
                            <span className="t-meta text-body-muted">{item.sponsor.note}</span>
                          </div>
                        ) : null}

                        {item.speaker ? (
                          <div className="mt-4 inline-flex flex-wrap items-center gap-x-3 gap-y-1 rounded-full border border-white/[0.12] bg-abyss px-4 py-2">
                            <span className="t-body-sm font-bold text-white">{item.speaker.name}</span>
                            <span aria-hidden className="h-1 w-1 rounded-full bg-white/30" />
                            <span className="t-meta text-body-muted">{item.speaker.role}</span>
                          </div>
                        ) : null}

                        {item.panelists ? (
                          <>
                            <div className="mt-5 grid gap-4 sm:grid-cols-3">
                              {item.panelists.map((panelist) => (
                                <div key={panelist.name} className="rounded-2xl border border-white/[0.08] bg-abyss p-5">
                                  <div className="t-title-sm text-white">{panelist.name}</div>
                                  <div className="mt-1 t-meta text-sky">{panelist.role}</div>
                                  <p className="mt-3 t-body-sm text-body-muted">{panelist.note}</p>
                                </div>
                              ))}
                            </div>
                            <a
                              href="#panel"
                              className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 t-body-sm font-semibold text-sky transition-colors hover:border-white/40 hover:bg-white/5"
                            >
                              Conocer más sobre los panelistas <Icon name="arrow-right" size={14} />
                            </a>
                          </>
                        ) : null}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="panel" aria-labelledby="h-panel" className="floor-light scroll-mt-[70px] bg-bone text-navy">
          <div className="mx-auto max-w-[1100px] gutter py-24">
            <div className="rv max-w-[680px]">
              <div className="t-label text-orange-ink">
                Panel de discusión
              </div>
              <h2 id="h-panel" className="mt-4 t-headline text-navy">
                Tres perspectivas. Una misma conversación.
              </h2>
              <p className="mt-[18px] max-w-[560px] t-body text-body-muted">
                Especialistas que conectaron la estrategia de marca con la realidad empresarial, moderados por Samuel García.
              </p>
            </div>
            <div className="rv mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {panelPeople.map((person) => (
                <div
                  key={person.name}
                  className={`overflow-hidden rounded-[20px] border bg-white ${
                    person.tag === "Modera" ? "border-orange/50" : "border-navy/10"
                  }`}
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-mist">
                    <Image
                      src={person.photo}
                      alt={person.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 260px"
                      className="object-cover"
                    />
                    <span
                      className={`absolute left-4 top-4 t-micro rounded-full px-3 py-1 ${
                        person.tag === "Modera" ? "bg-orange text-abyss" : "bg-navy/80 text-white backdrop-blur-sm"
                      }`}
                    >
                      {person.tag}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="t-title-sm text-navy">{person.name}</h3>
                    <p className="mt-1 t-meta text-blue-ink">{person.role}</p>
                    <p className="mt-3 t-body-sm text-body-muted">{person.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="h-medios" className="bg-navy text-white">
          <div className="mx-auto max-w-[1100px] gutter py-24">
            <div className="rv max-w-[680px]">
              <div className="t-label text-orange">
                Punto noticioso
              </div>
              <h2 id="h-medios" className="mt-4 t-headline text-white">
                En los medios
              </h2>
              <p className="mt-4 t-body text-body-on-navy">
                Así se comentó la primera edición de Brand Lab Live en medios y redes.
              </p>
            </div>
            <div className="rv mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {pressLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href.startsWith("http") ? item.href : `https://${item.href}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-4 rounded-[16px] border border-white/10 bg-abyss-surface px-6 py-5 transition-colors hover:border-white/25 hover:bg-abyss"
                >
                  <span className="t-body-sm font-semibold text-white">{item.label}</span>
                  <Icon name="arrow-right" size={16} className="shrink-0 text-orange" />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="h-aliadas" className="bg-abyss text-white">
          <div className="mx-auto max-w-[1100px] gutter py-24 lg:grid lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:gap-14">
            <div className="rv">
              <div className="t-label text-orange">
                Marcas aliadas
              </div>
              <h2 id="h-aliadas" className="mt-4 t-headline text-white">
                Impulsando juntos una nueva conversación sobre branding
              </h2>
              <p className="mt-5 t-body text-body-on-navy">
                Brand Lab Live reúne a empresarios, emprendedores y profesionales interesados en fortalecer la forma en que construyen sus negocios.
              </p>
              <p className="mt-4 t-body text-body-on-navy">
                Al convertirse en marca aliada, tu organización se vincula con una iniciativa que promueve el <strong className="text-white">pensamiento estratégico, la innovación y el desarrollo empresarial</strong>.
              </p>
              <a
                href="/patrocinio"
                className="btn btn-md btn-primary mt-[26px]"
              >
                Conoce los niveles de patrocinio <Icon name="arrow-right" />
              </a>
            </div>
            <div className="rv mt-10 flex justify-center lg:mt-0">
              <Image
                src="/brand/marcas-aliadas.png"
                alt="Samuel García — ¿La gente seguiría reconociéndote?"
                width={840}
                height={840}
                className="h-auto w-full max-w-[420px] drop-shadow-[0_30px_50px_rgba(0,0,0,0.5)]"
              />
            </div>
          </div>
        </section>

        <section aria-labelledby="h-cierre" className="floor-light bg-orange text-abyss text-center">
          <div className="mx-auto max-w-[1100px] gutter py-24">
            <div className="rv">
              <div className="t-label text-on-orange">
                Brand Lab Live 2026
              </div>
              <h2 id="h-cierre" className="mt-4 t-headline">
                Las marcas no venden. Significan.
              </h2>
              <p className="mt-5 max-w-[620px] t-lead text-on-orange mx-auto">
                Gracias a quienes hicieron posible la primera edición de Brand Lab Live. Sigue la conversación sobre branding estratégico en el blog.
              </p>
              <a
                href="/blog"
                className="btn btn-lg btn-abyss mt-[30px]"
              >
                Leer el blog de Brand Lab <Icon name="arrow-right" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter
        maxWidth={1180}
        trailing={
          <a className="navlink inline-flex min-h-[44px] items-center gap-2" href="/">
            <Icon name="arrow-left" size={14} />
            Volver al sitio principal
          </a>
        }
      />
    </div>
  );
}
