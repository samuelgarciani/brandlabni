"use client";

import Image from "next/image";
import { useState } from "react";
import { Icon } from "@/components/icon";
import { Modal } from "@/components/modal";
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

const discoverItems = [
  "Branding como estrategia de negocio",
  "Diferenciación y posicionamiento",
  "Comportamiento del consumidor",
  "Experiencia de marca",
  "Reputación y confianza",
  "Marcas que permanecen en el tiempo",
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
    body: "Un espacio de apertura a cargo de BAC, marca presentadora del evento, donde compartirá cómo una marca construye relaciones de confianza acompañando a las personas en los momentos más importantes de su vida.",
    sponsor: { src: "/brand/logos/bac.png", alt: "BAC", width: 1456, height: 390, note: "Marca presentadora del evento" },
  },
  {
    time: "9:45 a.m. – 10:30 a.m.",
    kicker: "Conferencia",
    title: "Las marcas no venden, significan",
    body: "Una conferencia que invita a replantear la forma en que entendemos el branding. Descubriremos cómo construir marcas con significado desde la estrategia, el propósito y la coherencia para generar diferenciación, confianza y crecimiento sostenible.",
    speaker: { name: "Samuel García", role: "Fundador de Brand Lab | Branding y Estrategia de Marca" },
  },
  {
    time: "10:30 a.m. – 11:10 a.m.",
    kicker: "Conversatorio Estratégico",
    title: "Branding, Consumidor/canales y Reputación",
    body: "Un espacio de conversación que complementará los principales conceptos abordados durante la conferencia, integrando tres perspectivas fundamentales para comprender cómo se construyen marcas relevantes y sostenibles.",
    panelists: [
      {
        name: "María José Amador",
        role: "Jefa de Comunicación – BAC Nicaragua",
        note: "Compartirá la visión del branding como un activo estratégico para las organizaciones, la construcción de valor y el papel de la estrategia en la generación de diferenciación y preferencia.",
      },
      {
        name: "Sara Avilés",
        role: "Especialista en Marketing Digital",
        note: "Abordará cómo evolucionan los consumidores, la importancia de los diferentes puntos de contacto y cómo las empresas deben construir experiencias consistentes en todos sus canales para fortalecer su marca.",
      },
      {
        name: "Gilda Tinoco",
        role: "Gerente Regional de Comunicación Corporativa – Claro Centroamérica",
        note: "Compartirá su experiencia sobre comunicación estratégica, reputación corporativa y la construcción de confianza como uno de los activos más valiosos para cualquier organización.",
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

const takeaways = [
  "Comprender el branding desde una perspectiva estratégica",
  "Identificar oportunidades para diferenciar tu negocio",
  "Fortalecer tu propuesta de valor",
  "Entender cómo construir confianza y preferencia",
  "Tomar decisiones con una visión de largo plazo",
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

const audienceItems = [
  "Empresarios",
  "Emprendedores",
  "Gerentes y Directivos",
  "Marketing y Comunicación",
  "Consultores",
  "Estudiantes universitarios",
];

const navLinks = [
  { label: "El evento", href: "#evento" },
  { label: "Agenda", href: "#agenda" },
  { label: "Blog Brand", href: "/blog" },
  { label: "Volver al sitio", href: "/", back: true },
];

export function EventosClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "sent" | "blocked">("idle");
  const [submitting, setSubmitting] = useState(false);
  const [waLink, setWaLink] = useState("");
  const [openAgenda, setOpenAgenda] = useState<number | null>(3);

  const showModal = () => {
    setModalOpen(true);
    setStatus("idle");
    setSubmitting(false);
  };

  const openModal = (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    event.preventDefault();
    showModal();
  };

  const closeModal = () => setModalOpen(false);

  const onRegister = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    const form = new FormData(event.currentTarget);
    const nombre = form.get("nombre")?.toString() ?? "";
    const correo = form.get("correo")?.toString() ?? "";
    const telefono = form.get("telefono")?.toString() ?? "";
    const empresa = form.get("empresa")?.toString() ?? "—";
    const cargo = form.get("cargo")?.toString() ?? "—";
    const departamento = form.get("departamento")?.toString() ?? "";
    const pago = form.get("pago")?.toString() ?? "";
    const msg = [
      "Nueva inscripción — Brand Lab Live",
      "",
      `Nombre: ${nombre}`,
      `Correo: ${correo}`,
      `Teléfono: ${telefono}`,
      `Empresa: ${empresa}`,
      `Cargo: ${cargo}`,
      `Departamento: ${departamento}`,
      `Forma de pago: ${pago}`,
    ].join("\n");

    const link = `https://wa.me/50557400875?text=${encodeURIComponent(msg)}`;
    setWaLink(link);

    // A blocked popup returns null. Reporting success then would send the visitor
    // away believing they had registered. Note "noopener" would also force a null
    // return by spec, so the opener is dropped by hand instead.
    const opened = window.open(link, "_blank");
    if (opened) opened.opener = null;
    setStatus(opened ? "sent" : "blocked");
    setSubmitting(false);
  };

  return (
    <div className="floor-dark overflow-x-hidden bg-abyss text-on-dark-soft">
      <ScrollReveal />

      <a href="#contenido" className="skip-link">
        Saltar al contenido
      </a>

      <SiteHeader
        homeHref="/"
        links={navLinks}
        cta={{ label: "Comprar entrada", href: "#evento", onClick: openModal, onSelect: showModal }}
        maxWidth={1180}
      />

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

        <section aria-labelledby="h-evento" id="evento" className="scroll-mt-[70px] bg-navy text-white">
          <div className="mx-auto max-w-[1100px] gutter py-[60px] sm:py-24">
            <div className="rv max-w-[680px]">
              <div className="t-label text-orange">
                El evento
              </div>
              <h2 id="h-evento" className="mt-4 t-headline text-white">
                Una conferencia para ir más allá del marketing
              </h2>
              <p className="mt-[18px] measure t-body text-body-on-navy">
                Mientras todos hablan de marketing, es momento de hablar de marcas. Descubre cómo el branding se convierte en la estrategia que impulsa la <strong className="text-white">diferenciación, la confianza y el crecimiento sostenible</strong> de los negocios.
              </p>
              <p className="mt-4 t-body text-body-on-navy">
                Reserva tu lugar y sé parte de la conversación que está transformando la manera de construir marcas.
              </p>
            </div>
            <div className="rv mt-11 grid gap-[34px] lg:grid-cols-[1fr_.9fr] lg:items-start">
              <div className="grid grid-cols-1 gap-[14px] sm:grid-cols-2">
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
                <div className="rounded-[16px] bg-orange p-6">
                  <div className="t-label text-on-orange font-semibold">Inversión</div>
                  <div className="mt-3 t-title-lg text-abyss">USD 25</div>
                </div>
              </div>
              <div className="rounded-[18px] border border-white/10 bg-abyss-surface p-8">
                <div className="t-label text-orange font-semibold">
                  Tu entrada incluye
                </div>
                <div className="mt-6 space-y-4 t-body-sm text-on-dark-strong">
                  <p className="flex items-start gap-3"><Icon name="check" size={15} className="mt-1 text-orange" />Conferencia y panel de discusión</p>
                  <p className="flex items-start gap-3"><Icon name="check" size={15} className="mt-1 text-orange" />Coffee Break & Networking</p>
                  <p className="flex items-start gap-3"><Icon name="check" size={15} className="mt-1 text-orange" />Certificado de participación</p>
                  <p className="flex items-start gap-3"><Icon name="check" size={15} className="mt-1 text-orange" />Material digital del evento</p>
                </div>
                <div className="mt-6 border-t border-white/10 pt-4 t-meta text-body-on-abyss">
                  Formas de pago: <strong className="text-white">Transferencia bancaria</strong> o <strong className="text-white">Tarjeta de crédito Visa / Mastercard</strong>
                </div>
                <button
                  type="button"
                  onClick={openModal}
                  className="btn btn-lg btn-primary mt-6 w-full"
                >
                  Comprar mi entrada
                </button>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="h-conferencia" className="relative overflow-hidden bg-abyss">
          <div className="pointer-events-none absolute -top-[60px] -right-[80px] h-[400px] w-[400px] bg-[url('/brand/isotipo-white.png')] bg-contain bg-no-repeat opacity-5" />
          <div className="relative mx-auto max-w-[1100px] gutter py-24">
            <div className="grid gap-14 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
              <div>
                <div className="rv max-w-[640px]">
                  <div className="t-label text-orange">
                    ¿Qué descubrirás?
                  </div>
                  <h2 id="h-conferencia" className="mt-4 t-headline text-white">
                    Por qué las marcas más fuertes no solo venden — construyen significado
                  </h2>
                </div>
                <div className="rv mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {discoverItems.map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-abyss-surface px-5 py-[22px]">
                      <span className="marker block h-3 w-3 shrink-0" style={{ backgroundColor: "var(--color-orange)" }} />
                      <span className="t-body-sm font-semibold text-white">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rv flex justify-center">
                <Image
                  src="/brand/tv-descubriras.png"
                  alt="Samuel García en un televisor retro"
                  width={840}
                  height={840}
                  className="w-full max-w-[420px] h-auto drop-shadow-[0_30px_50px_rgba(0,0,0,0.5)]"
                />
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="h-agenda" id="agenda" className="floor-light scroll-mt-[70px] bg-bone text-navy">
          <div className="mx-auto max-w-[1100px] gutter py-24">
            <div className="rv max-w-[680px]">
              <div className="t-label text-blue-ink">
                Agenda del evento
              </div>
              <h2 id="h-agenda" className="mt-4 t-headline text-navy">
                Una mañana para transformar la forma en que entiendes las marcas
              </h2>
              <p className="mt-4 t-body-sm text-body-muted">
                Da clic en cada actividad para ver el detalle.
              </p>
            </div>

            <div className="rv relative mt-11 rounded-[22px] border border-navy/10 bg-white shadow-[0_30px_60px_-42px_rgba(2,48,71,0.35)]">
              <div aria-hidden className="absolute left-[27px] top-8 bottom-8 w-px bg-navy/10 sm:left-[35px]" />
              {agendaItems.map((item, index) => {
                const isOpen = openAgenda === index;
                const panelId = `agenda-panel-${index}`;
                return (
                  <div key={item.time} className="relative border-b border-navy/10 last:border-b-0">
                    <button
                      type="button"
                      onClick={() => setOpenAgenda(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className="flex w-full items-start gap-3 py-5 pl-[52px] pr-5 text-left transition-colors hover:bg-mist/50 sm:gap-6 sm:pl-[68px] sm:pr-7"
                    >
                      <span
                        aria-hidden
                        className={`absolute left-[27px] top-[26px] h-[11px] w-[11px] -translate-x-1/2 rounded-full border-2 transition-colors sm:left-[35px] ${
                          isOpen ? "border-orange bg-orange" : "border-navy/25 bg-white"
                        }`}
                      />
                      <span className="w-[104px] shrink-0 pt-[3px] tnum t-meta font-bold text-blue-ink sm:w-[168px] sm:t-body-sm">
                        {item.time}
                      </span>
                      <span className="min-w-0 flex-1">
                        {item.kicker ? (
                          <span className="block t-micro text-orange-ink">{item.kicker}</span>
                        ) : null}
                        <span className="block t-title-sm text-navy">{item.title}</span>
                      </span>
                      <Icon
                        name="chevron-down"
                        size={18}
                        className={`mt-[5px] shrink-0 text-navy/35 transition-transform duration-200 ${isOpen ? "rotate-180 text-orange-ink" : ""}`}
                      />
                    </button>
                    <div id={panelId} hidden={!isOpen} className="pb-6 pl-[52px] pr-5 sm:pl-[68px] sm:pr-7">
                        <p className="measure t-body-sm text-body-ink">{item.body}</p>

                        {item.sponsor ? (
                          <div className="mt-4 flex flex-wrap items-center gap-3 rounded-2xl border border-navy/10 bg-mist/60 px-4 py-3">
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
                          <div className="mt-4 inline-flex flex-wrap items-center gap-x-3 gap-y-1 rounded-full border border-navy/15 bg-mist/60 px-4 py-2">
                            <span className="t-body-sm font-bold text-navy">{item.speaker.name}</span>
                            <span aria-hidden className="h-1 w-1 rounded-full bg-navy/30" />
                            <span className="t-meta text-body-muted">{item.speaker.role}</span>
                          </div>
                        ) : null}

                        {item.panelists ? (
                          <div className="mt-5 grid gap-4 sm:grid-cols-3">
                            {item.panelists.map((panelist) => (
                              <div key={panelist.name} className="rounded-2xl border border-navy/10 bg-mist/40 p-5">
                                <div className="t-title-sm text-navy">{panelist.name}</div>
                                <div className="mt-1 t-meta text-blue-ink">{panelist.role}</div>
                                <p className="mt-3 t-body-sm text-body-muted">{panelist.note}</p>
                              </div>
                            ))}
                          </div>
                        ) : null}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="rv mt-10">
              <button
                type="button"
                onClick={openModal}
                className="btn btn-lg btn-primary-on-light"
              >
                Asegura tu lugar
              </button>
            </div>
          </div>
        </section>

        <section aria-labelledby="h-aprender" className="bg-navy text-white">
          <div className="mx-auto max-w-[1100px] gutter py-24 lg:grid lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-14">
            <div className="rv">
              <div className="t-label text-orange">
                ¿Qué te llevarás?
              </div>
              <h2 id="h-aprender" className="mt-4 t-headline text-white">
                Una experiencia que replantea cómo construyes tu marca
              </h2>
              <p className="mt-[18px] measure t-body text-body-on-navy">
                Más que una conferencia. Al finalizar podrás tomar decisiones de marca con una visión estratégica y de largo plazo.
              </p>
            </div>
            <div className="rv mt-10 flex flex-col gap-[14px]">
              {takeaways.map((item) => (
                <div key={item} className="flex items-start gap-[14px] rounded-[14px] border border-white/[0.08] bg-abyss px-[22px] py-[18px] t-body font-medium text-on-dark-strong">
                  <span className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full bg-orange text-abyss"><Icon name="check" size={13} /></span>
                  <span className="leading-[1.5]">{item}</span>
                </div>
              ))}
              <button
                type="button"
                onClick={openModal}
                className="btn btn-md btn-primary mt-2 self-start"
              >
                Comprar entrada
              </button>
            </div>
          </div>
        </section>

        <section aria-labelledby="h-panel" className="bg-abyss text-white">
          <div className="mx-auto max-w-[1100px] gutter py-24">
            <div className="rv max-w-[680px]">
              <div className="t-label text-orange">
                Panel de discusión
              </div>
              <h2 id="h-panel" className="mt-4 t-headline text-white">
                Tres perspectivas. Una misma conversación.
              </h2>
              <p className="mt-[18px] max-w-[560px] t-body text-body-on-abyss">
                Especialistas que conectan la estrategia de marca con la realidad empresarial, moderados por Samuel García.
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

        <section aria-labelledby="h-hablar" className="bg-navy text-white">
          <div className="mx-auto max-w-[1100px] gutter py-24 lg:grid lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:gap-14">
            <div className="rv">
              <div className="t-label text-orange">
                ¿Para quién es este evento?
              </div>
              <h2 id="h-hablar" className="mt-4 t-headline text-white">
                Para quienes quieren una marca más fuerte y un negocio más competitivo
              </h2>
              <p className="mt-[18px] measure t-body text-body-on-navy">
                Si buscas construir una marca más fuerte y un negocio más competitivo, este evento es para vos.
              </p>
              <div className="mt-[26px] flex flex-wrap gap-3">
                {audienceItems.map((item) => (
                  <span key={item} className="rounded-full border border-sky/30 px-5 py-3 t-body-sm font-semibold text-on-dark-strong">
                    {item}
                  </span>
                ))}
              </div>
              <button
                type="button"
                onClick={openModal}
                className="btn btn-md btn-primary mt-7"
              >
                Quiero participar
              </button>
            </div>
            <div className="rv mt-10 flex justify-center lg:mt-0">
              <Image
                src="/brand/paraquien.png"
                alt="Samuel García con cámara — Las marcas dejan huellas"
                width={880}
                height={880}
                className="h-auto w-full max-w-[440px] drop-shadow-[0_30px_50px_rgba(0,0,0,0.45)]"
              />
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

        <section aria-labelledby="h-lugar" className="bg-navy text-white">
          <div className="mx-auto max-w-[1100px] gutter py-24 lg:grid lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:gap-14">
            <div className="rv flex justify-center">
              <Image
                src="/brand/conferencista.png"
                alt="Samuel García — Las marcas ocupan espacio en la mente"
                width={880}
                height={880}
                className="h-auto w-full max-w-[440px] drop-shadow-[0_30px_50px_rgba(0,0,0,0.5)]"
              />
            </div>
            <div className="rv mt-10 lg:mt-0">
              <div className="t-label text-orange">
                Sobre el conferencista
              </div>
              <h2 id="h-lugar" className="mt-4 t-headline text-white">
                Samuel García
              </h2>
              <p className="mt-[18px] max-w-[560px] t-lead text-body-on-navy">
                Consultor en Branding y Estrategia de Marca, fundador de <strong className="text-white">Brand Lab</strong>.
              </p>
              <p className="mt-[14px] max-w-[560px] t-body text-body-on-navy">
                Con más de diez años de experiencia acompañando a empresas y emprendedores, promueve una visión del branding como un activo estratégico capaz de generar diferenciación, confianza y crecimiento sostenible.
              </p>
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
                Descubre la otra cara del marketing y comprende cómo una estrategia de marca puede transformar la forma en que tu negocio compite, conecta y crea valor. Los espacios son limitados.
              </p>
              <button
                type="button"
                onClick={openModal}
                className="btn btn-lg btn-abyss mt-[30px]"
              >
                Comprar entrada ahora <Icon name="arrow-right" />
              </button>
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
        open={modalOpen}
        onClose={closeModal}
        label="Reserva tu entrada para Brand Lab Live"
        panelClassName="w-full max-w-[540px] rounded-[20px] border border-white/10 bg-abyss-surface p-9"
      >
            {status === "blocked" ? (
              <div className="text-center text-on-dark-strong">
                <div className="mx-auto mb-6 flex h-[60px] w-[60px] items-center justify-center rounded-full border-2 border-yellow t-title-lg text-yellow">
                  !
                </div>
                <h3 className="t-title-lg text-white">Tu navegador bloqueó WhatsApp</h3>
                <p className="mt-4 t-body-sm text-body-on-navy">
                  Tus datos están listos, pero la ventana no se abrió. Toca el botón para enviarlos, o escríbenos al{" "}
                  <strong className="text-white">+505 5740 0875</strong>.
                </p>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-md btn-primary mt-7"
                >
                  Abrir WhatsApp con mis datos
                </a>
              </div>
            ) : status === "sent" ? (
              <div className="text-center text-on-dark-strong">
                <div className="mx-auto mb-6 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-orange text-abyss">
                  <Icon name="check" size={26} />
                </div>
                <h3 className="t-title-lg text-white">¡Casi listo!</h3>
                <p className="mt-4 t-body-sm text-body-on-navy">
                  Abrimos WhatsApp con tus datos para confirmar tu entrada y coordinar el pago. Si no se abrió, escríbenos al <strong className="text-white">+505 5740 0875</strong>.
                </p>
                <button
                  type="button"
                  onClick={closeModal}
                  className="btn btn-md btn-primary mt-8"
                >
                  Cerrar
                </button>
              </div>
            ) : (
              <div className="text-on-dark-strong">
                <div className="t-label text-orange">
                  Inscripción
                </div>
                <h3 className="mt-2 t-title-lg text-white">Reserva tu entrada</h3>
                <p className="mt-3 t-meta text-body-on-abyss">Completa tus datos y confirmamos por WhatsApp.</p>
                <form onSubmit={onRegister} className="mt-8 space-y-4" noValidate={false}>
                  <div>
                    <label className="lbl" htmlFor="reg-nombre">
                      Nombre completo <span className="text-orange">*</span>
                    </label>
                    <input className="fld w-full" id="reg-nombre" name="nombre" required autoComplete="name" maxLength={120} placeholder="Tu nombre y apellido" />
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="min-w-0">
                      <label className="lbl" htmlFor="reg-correo">
                        Correo electrónico <span className="text-orange">*</span>
                      </label>
                      <input className="fld w-full" id="reg-correo" type="email" name="correo" required autoComplete="email" maxLength={160} placeholder="tucorreo@empresa.com" />
                    </div>
                    <div className="min-w-0">
                      <label className="lbl" htmlFor="reg-telefono">
                        Teléfono <span className="text-orange">*</span>
                      </label>
                      <input className="fld w-full" id="reg-telefono" type="tel" name="telefono" required autoComplete="tel" inputMode="tel" maxLength={30} placeholder="+505 0000 0000" />
                    </div>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="min-w-0">
                      <label className="lbl" htmlFor="reg-empresa">Empresa</label>
                      <input className="fld w-full" id="reg-empresa" name="empresa" autoComplete="organization" maxLength={120} placeholder="Nombre de tu empresa" />
                    </div>
                    <div className="min-w-0">
                      <label className="lbl" htmlFor="reg-cargo">Cargo</label>
                      <input className="fld w-full" id="reg-cargo" name="cargo" autoComplete="organization-title" maxLength={120} placeholder="Tu cargo" />
                    </div>
                  </div>
                  <div className="grid gap-4 md:grid-cols-[.7fr_1.3fr]">
                    <div className="min-w-0">
                      <label className="lbl" htmlFor="reg-edad">Edad</label>
                      <input className="fld w-full" id="reg-edad" type="number" name="edad" min={14} max={99} inputMode="numeric" placeholder="Edad" />
                    </div>
                    <div className="min-w-0">
                      <label className="lbl" htmlFor="reg-departamento">
                        Departamento <span className="text-orange">*</span>
                      </label>
                      <select className="fld w-full" id="reg-departamento" name="departamento" required defaultValue="">
                        <option value="" disabled>
                          Selecciona…
                        </option>
                        <option>Managua</option>
                        <option>Boaco</option>
                        <option>Carazo</option>
                        <option>Chinandega</option>
                        <option>Chontales</option>
                        <option>Estelí</option>
                        <option>Granada</option>
                        <option>Jinotega</option>
                        <option>León</option>
                        <option>Madriz</option>
                        <option>Masaya</option>
                        <option>Matagalpa</option>
                        <option>Nueva Segovia</option>
                        <option>Río San Juan</option>
                        <option>Rivas</option>
                        <option>RACCN</option>
                        <option>RACCS</option>
                        <option>Fuera de Nicaragua</option>
                      </select>
                    </div>
                  </div>
                  <fieldset className="min-w-0 border-0 p-0">
                    <legend className="lbl">
                      Forma de pago <span className="text-orange">*</span>
                    </legend>
                    <div className="grid gap-3 md:grid-cols-2">
                      {["Transferencia bancaria", "Tarjeta de crédito (Visa / Mastercard)"].map((option) => (
                        <label key={option} className="pay">
                          <input type="radio" name="pago" value={option} required style={{ accentColor: "var(--color-orange)" }} />
                          {option}
                        </label>
                      ))}
                    </div>
                  </fieldset>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn btn-lg btn-primary w-full"
                  >
                    {submitting ? "Abriendo WhatsApp…" : "Enviar y confirmar por WhatsApp"}
                  </button>
                  <p className="mt-2 text-center t-meta text-muted-dark">
                    Tus datos se envían por WhatsApp y se registran para tu inscripción.
                  </p>
                </form>
              </div>
        )}
      </Modal>
    </div>
  );
}
