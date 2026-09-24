"use client";

import Image from "next/image";
import { useState } from "react";
import { Icon } from "@/components/icon";
import { Modal } from "@/components/modal";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { contact } from "@/lib/site";

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

const recapPhotos = [
  { src: "/brand/evento-galeria/foto-45.jpg", alt: "Samuel García presentando en el escenario de Brand Lab Live" },
  { src: "/brand/evento-galeria/foto-65.jpg", alt: "Conversatorio estratégico con las panelistas de Brand Lab Live" },
  { src: "/brand/evento-galeria/foto-70.jpg", alt: "Samuel García junto a las tres panelistas del conversatorio" },
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

const galleryPhotos = [
  { src: "/brand/evento-galeria/foto-9.jpg", alt: "Bienvenida e inicio de Brand Lab Live" },
  { src: "/brand/evento-galeria/foto-20.jpg", alt: "Retrato frente al backdrop de Las marcas no venden, significan" },
  { src: "/brand/evento-galeria/foto-34.jpg", alt: "Asistentes durante la conferencia" },
  { src: "/brand/evento-galeria/foto-41.jpg", alt: "Samuel García en el escenario principal" },
  { src: "/brand/evento-galeria/foto-45.jpg", alt: "Samuel García presentando la conferencia" },
  { src: "/brand/evento-galeria/foto-49.jpg", alt: "La evolución del branding, en pantalla" },
  { src: "/brand/evento-galeria/foto-61.jpg", alt: "Conversatorio estratégico en el escenario" },
  { src: "/brand/evento-galeria/foto-65.jpg", alt: "Gilda Tinoco durante el conversatorio" },
  { src: "/brand/evento-galeria/foto-70.jpg", alt: "Samuel García junto a las panelistas" },
  { src: "/brand/evento-galeria/foto-78.jpg", alt: "Celebración al cierre del evento" },
  { src: "/brand/evento-galeria/foto-88.jpg", alt: "Equipo Brand Lab al cierre de la jornada" },
  { src: "/brand/evento-galeria/foto-92.jpg", alt: "Asistentes frente al backdrop del evento" },
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
  { label: "Galería", href: "#galeria" },
  { label: "Panel", href: "#panel" },
  { label: "Blog Brand", href: "/blog" },
  { label: "Volver al sitio", href: "/", back: true },
];

export function EventosClient() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const showPrev = () => setLightbox((i) => (i === null ? null : (i - 1 + galleryPhotos.length) % galleryPhotos.length));
  const showNext = () => setLightbox((i) => (i === null ? null : (i + 1) % galleryPhotos.length));

  return (
    <div className="floor-dark overflow-x-hidden bg-abyss text-on-dark-soft">
      <ScrollReveal />

      <a href="#contenido" className="skip-link">
        Saltar al contenido
      </a>

      <SiteHeader homeHref="/" links={navLinks} maxWidth={1180} />

      <main id="contenido">
        <section aria-labelledby="h-evento-hero" className="relative overflow-hidden bg-navy-2" style={{ aspectRatio: "1920 / 711" }}>
          <h1 id="h-evento-hero" className="sr-only">Galería de eventos — Brand Lab Live</h1>
          <Image
            src="/brand/evento-banner-galeria.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
            preload
          />
        </section>

        <section aria-labelledby="h-bienvenida" className="bg-navy text-white">
          <div className="mx-auto max-w-[1100px] gutter py-24 lg:grid lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:gap-14">
            <div className="rv">
              <div className="t-label text-orange">
                Bienvenido a la galería
              </div>
              <h2 id="h-bienvenida" className="mt-4 t-headline text-white">
                Gracias por llegar hasta aquí
              </h2>
              <p className="mt-[18px] measure t-body text-body-on-navy">
                Este espacio nació para que puedas revivir los diferentes eventos que hemos venido realizando: las conversaciones, los rostros y los momentos que le dan vida a Brand Lab.
              </p>
              <p className="mt-4 t-body text-body-on-navy">
                Si quieres ser parte de los próximos, síguenos en nuestras redes sociales — ahí anunciamos cada nueva edición antes que en ningún otro lugar.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href={contact.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-md btn-primary">
                  Síguenos en Instagram <Icon name="arrow-right" />
                </a>
                <a href={contact.facebook} target="_blank" rel="noopener noreferrer" className="btn btn-md btn-navy">
                  Síguenos en Facebook
                </a>
              </div>
              <p className="mt-10 text-orange" style={{ fontStyle: "italic", fontWeight: 600, fontSize: "1.75rem" }}>
                Samuel García
              </p>
              <p className="-mt-1 t-meta text-body-muted">Fundador de Brand Lab</p>
            </div>
            <div className="rv mt-12 flex justify-center lg:mt-0">
              <Image
                src="/brand/tv-descubriras.png"
                alt="Samuel García, fundador de Brand Lab"
                width={840}
                height={840}
                className="h-auto w-full max-w-[380px] drop-shadow-[0_30px_50px_rgba(0,0,0,0.5)]"
              />
            </div>
          </div>
        </section>

        <section aria-labelledby="h-conferencia-banner" className="relative overflow-hidden bg-navy-2" style={{ aspectRatio: "1920 / 711" }}>
          <h2 id="h-conferencia-banner" className="sr-only">Las marcas no venden, significan — La Conferencia</h2>
          <Image
            src="/brand/evento-banner-conferencia.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
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
          <div className="mx-auto max-w-[1100px] gutter py-24">
            <div className="rv max-w-[720px]">
              <div className="t-label text-orange">
                Nota informativa
              </div>
              <h2 id="h-resumen" className="mt-4 t-headline text-white">
                Así se llevó a cabo Brand Lab
              </h2>
            </div>

            <div className="rv mt-10 grid grid-cols-1 gap-[14px] sm:grid-cols-3">
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

            <div className="rv mt-14 grid gap-x-12 gap-y-8 lg:grid-cols-2">
              <div className="lg:col-span-2 max-w-[760px]">
                <p className="t-quote text-orange">
                  “Brand Lab propone cambiar la conversación: el problema de las empresas no es el marketing, es la falta de estrategia de marca.”
                </p>
              </div>

              <div className="space-y-5 measure t-body text-body-on-navy">
                {recapParagraphs.slice(0, 4).map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>

              <div className="flex flex-col gap-6">
                <div className="overflow-hidden rounded-[18px]">
                  <Image
                    src={recapPhotos[0].src}
                    alt={recapPhotos[0].alt}
                    width={1600}
                    height={1066}
                    className="h-auto w-full object-cover"
                  />
                </div>
                <div className="space-y-5 measure t-body text-body-on-navy">
                  {recapParagraphs.slice(4, 6).map((paragraph) => (
                    <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-6 lg:order-1">
                <div className="overflow-hidden rounded-[18px]">
                  <Image
                    src={recapPhotos[1].src}
                    alt={recapPhotos[1].alt}
                    width={1600}
                    height={1066}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-5 measure t-body text-body-on-navy lg:order-2">
                <p>{recapParagraphs[6]}</p>
                <p className="t-quote text-white">
                  “Hoy las empresas hablan mucho de vender más, pero muy poco de construir marcas que permanezcan en el tiempo. Brand Lab nace para cambiar esa conversación y recordar que las marcas más valiosas no son necesariamente las que más venden, sino aquellas que logran ocupar un lugar en la vida de las personas”, expresó García.
                </p>
              </div>

              <div className="lg:col-span-2 max-w-[760px]">
                <p className="measure t-body text-body-on-navy">{recapParagraphs[7]}</p>
                <div className="mt-8 overflow-hidden rounded-[18px]">
                  <Image
                    src={recapPhotos[2].src}
                    alt={recapPhotos[2].alt}
                    width={1600}
                    height={1066}
                    className="h-auto w-full object-cover"
                  />
                </div>
                <p className="mt-8 t-body text-body-on-navy">
                  Porque, al final, las marcas no venden. Significan.
                </p>
              </div>
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
              <p className="mt-4 t-body-sm text-body-muted">
                Toca una fotografía para verla en grande.
              </p>
            </div>
            <div className="rv mt-11 flex gap-4 overflow-x-auto pb-4" style={{ scrollSnapType: "x mandatory" }}>
              {galleryPhotos.map((photo, index) => (
                <button
                  key={photo.src}
                  type="button"
                  onClick={() => setLightbox(index)}
                  className="group relative aspect-[4/5] w-[220px] shrink-0 overflow-hidden rounded-2xl border border-navy/10 bg-white sm:w-[260px]"
                  style={{ scrollSnapAlign: "start" }}
                  aria-label={`Ver fotografía: ${photo.alt}`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="260px"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="panel" aria-labelledby="h-panel" className="bg-abyss text-white">
          <div className="mx-auto max-w-[1100px] gutter py-24">
            <div className="rv max-w-[680px]">
              <div className="t-label text-orange">
                Panel de discusión
              </div>
              <h2 id="h-panel" className="mt-4 t-headline text-white">
                Tres perspectivas. Una misma conversación.
              </h2>
              <p className="mt-[18px] max-w-[560px] t-body text-body-on-abyss">
                Especialistas que conectaron la estrategia de marca con la realidad empresarial, moderados por Samuel García. Esta es la gente detrás de la conversación.
              </p>
            </div>
            <div className="rv mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {panelPeople.map((person) => (
                <div
                  key={person.name}
                  className={`overflow-hidden rounded-[20px] border bg-abyss-surface ${
                    person.tag === "Modera" ? "border-orange/40" : "border-white/[0.08]"
                  }`}
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-white">
                    <Image
                      src={person.photo}
                      alt={person.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 260px"
                      className="object-cover"
                    />
                    <span
                      className={`absolute left-4 top-4 t-micro rounded-full px-3 py-1 ${
                        person.tag === "Modera" ? "bg-orange text-abyss" : "bg-abyss/80 text-on-dark-strong backdrop-blur-sm"
                      }`}
                    >
                      {person.tag}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="t-title-sm text-white">{person.name}</h3>
                    <p className="mt-1 t-meta text-sky">{person.role}</p>
                    <p className="mt-3 t-body-sm text-body-on-abyss">{person.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="h-medios" className="floor-light bg-bone text-navy">
          <div className="mx-auto max-w-[1100px] gutter py-24">
            <div className="rv max-w-[680px]">
              <div className="t-label text-orange-ink">
                Punto noticioso
              </div>
              <h2 id="h-medios" className="mt-4 t-headline text-navy">
                En los medios
              </h2>
              <p className="mt-4 t-body text-body-muted">
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
                  className="flex items-center justify-between gap-4 rounded-[16px] border border-navy/10 bg-white px-6 py-5 transition-colors hover:border-navy/25 hover:shadow-[0_20px_40px_-30px_rgba(2,34,47,0.4)]"
                >
                  <span className="t-body-sm font-semibold text-navy">{item.label}</span>
                  <Icon name="arrow-right" size={16} className="shrink-0 text-orange-ink" />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="h-cierre" className="relative overflow-hidden bg-abyss text-center text-white">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -left-24 -top-24 h-[360px] w-[360px] rounded-full bg-orange/20 blur-3xl" />
            <div className="absolute -right-24 -bottom-24 h-[360px] w-[360px] rounded-full bg-sky/20 blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-[1100px] gutter py-24">
            <div className="rv">
              <div className="t-label text-sky">
                Brand Lab Live
              </div>
              <h2 id="h-cierre" className="mt-4 t-display text-white">
                Nos vemos en <span className="text-orange">2027</span>
              </h2>
              <p className="mt-5 max-w-[560px] t-lead text-body-on-abyss mx-auto">
                Prepárate para la segunda edición. Síguenos en redes para ser el primero en enterarte.
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <a href={contact.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-lg btn-primary">
                  Instagram <Icon name="arrow-right" />
                </a>
                <a href={contact.facebook} target="_blank" rel="noopener noreferrer" className="btn btn-lg btn-navy">
                  Facebook
                </a>
              </div>
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

      <Modal
        open={lightbox !== null}
        onClose={() => setLightbox(null)}
        label="Fotografía del evento"
        panelClassName="w-full max-w-[900px]"
      >
        {lightbox !== null ? (
          <div className="relative">
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-[16px] bg-abyss">
              <Image
                src={galleryPhotos[lightbox].src}
                alt={galleryPhotos[lightbox].alt}
                fill
                sizes="900px"
                className="object-contain"
              />
            </div>
            <div className="mt-4 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={showPrev}
                aria-label="Fotografía anterior"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white"
              >
                <Icon name="arrow-left" size={18} />
              </button>
              <p className="t-body-sm text-body-on-abyss">{galleryPhotos[lightbox].alt}</p>
              <button
                type="button"
                onClick={showNext}
                aria-label="Fotografía siguiente"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white"
              >
                <Icon name="arrow-right" size={18} />
              </button>
            </div>
          </div>
        ) : null}
      </Modal>
    </div>
  );
}
