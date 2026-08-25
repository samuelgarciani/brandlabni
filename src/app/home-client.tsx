"use client";

import Image from "next/image";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type TouchEvent as ReactTouchEvent,
} from "react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { Icon } from "@/components/icon";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const heroSlides = [
  {
    eyebrow: "Brand Strategist · Fundador",
    titleLines: ["Una marca fuerte", "no grita."],
    highlight: "Tiene significado.",
    body:
      "Soy Samuel. Ayudo a empresas y emprendedores a construir marcas con significado, claridad y dirección estratégica — para dejar de competir por precio.",
    ctaLabel: "Agenda una sesión",
    ctaHref: "#contacto",
    image: "/brand/hero/hero-bg.jpg",
    imageAlt: "Samuel García, estratega de marca",
    imagePosition: "right top",
    imagePositionMobile: "90% center",
    alignment: "left",
    overlay: "linear-gradient(90deg, rgba(2, 58, 86, 0.94) 0%, rgba(2, 58, 86, 0.6) 42%, rgba(2, 58, 86, 0) 66%)",
  },
  {
    eyebrow: "Branding con propósito",
    titleLines: ["Construyamos", "una marca", "con propósito."],
    highlight: null,
    body:
      "Estrategia, percepción y humanidad conectadas en un solo sistema — para que tu marca signifique algo y deje de competir por precio.",
    ctaLabel: "Agenda una sesión",
    ctaHref: "#contacto",
    image: "/brand/hero/hero-2.jpg",
    imageScaleMobile: "1.28",
    imageAlt: "Samuel García en una sesión estratégica",
    imagePosition: "left center",
    imagePositionMobile: "10% center",
    alignment: "right",
    overlay: "linear-gradient(270deg, rgba(2, 58, 86, 0.92) 0%, rgba(2, 58, 86, 0.55) 44%, rgba(2, 58, 86, 0) 68%)",
  },
  {
    eyebrow: "Percepción de marca",
    titleLines: ["Tu marca vive en la", "percepción."],
    highlight: null,
    body:
      "Antes que un logo, tu marca es lo que las personas sienten, recuerdan y confían. Ahí es donde construimos diferenciación real.",
    ctaLabel: "Agenda una sesión",
    ctaHref: "#contacto",
    image: "/brand/hero/hero-3.jpg",
    imageScaleMobile: "1.25",
    imageScrimShiftMobile: "6%",
    imageAlt: "Un momento de construcción de marca con Samuel García",
    imagePosition: "right center",
    imagePositionMobile: "88% center",
    alignment: "left",
    overlay: "linear-gradient(90deg, rgba(2, 58, 86, 0.94) 0%, rgba(2, 58, 86, 0.6) 42%, rgba(2, 58, 86, 0) 66%)",
  },
  {
    eyebrow: "BlogBrand",
    titleLines: ["Historias que enseñan a", "construir marca."],
    highlight: null,
    body:
      "Artículos de marca, vivencias reales y educación para construir marcas con propósito y humanas. Bienvenido a BlogBrand.",
    ctaLabel: "Explorar BlogBrand",
    ctaHref: "/blog",
    image: "/brand/hero/hero-blog.jpg",
    imageScaleMobile: "1.15",
    imageScaleOriginMobile: "right bottom",
    imageAlt: "Samuel García leyendo",
    imagePosition: "right center",
    imagePositionMobile: "100% center",
    alignment: "left",
    overlay: "linear-gradient(90deg, rgba(9, 38, 60, 0.96) 0%, rgba(9, 38, 60, 0.65) 44%, rgba(9, 38, 60, 0.1) 70%)",
  },
  {
    eyebrow: "Conferencia",
    eyebrowPromo: "Save the date · Septiembre 2026",
    titleLines: ["Brand Lab", "Live"],
    highlight: null,
    body: "Las marcas no venden, significan.",
    ctaLabel: "Descubre el evento",
    ctaHref: "/eventos",
    image: "/brand/hero/hero-evento.jpg",
    imageAlt: "Brand Lab Live — evento en vivo",
    imagePosition: "right center",
    imagePositionMobile: "77% center",
    alignment: "left",
    overlay: "linear-gradient(90deg, rgba(9, 38, 60, 0.92) 0%, rgba(9, 38, 60, 0.55) 40%, rgba(9, 38, 60, 0) 60%)",
  },
];

const offerItems = [
  {
    n: "01",
    title: "Consultoría Estratégica de Marca",
    desc: "El sistema completo: de diagnóstico a activación y acompañamiento.",
    href: "#linea-1",
  },
  {
    n: "02",
    title: "Registro de Marca · Aliado Legal",
    desc: "Protección de tu marca con un abogado especialista en propiedad intelectual.",
    href: "#linea-2",
  },
  {
    n: "03",
    title: "Talleres In-Company",
    desc: "Formación práctica de 4 horas para equipos completos.",
    href: "#linea-3",
  },
  {
    n: "04",
    title: "Brand Lab Talks",
    desc: "Charlas de 45–60 min que cambian la forma de pensar la marca.",
    href: "#talks",
  },
];

const phaseItems = [
  {
    n: "1",
    title: "Descubrimiento y Diagnóstico",
    body: "Entender el negocio, el mercado y la percepción actual.",
    bg: "var(--color-navy)",
    fg: "#fff",
  },
  {
    n: "2",
    title: "Definición Estratégica",
    body: "Propósito, posicionamiento y territorio de marca.",
    bg: "var(--color-navy)",
    fg: "#fff",
  },
  {
    n: "3",
    title: "Experiencia y Cultura",
    body: "La marca vivida por dentro: equipo, cultura y experiencia.",
    bg: "var(--color-navy)",
    fg: "#fff",
  },
  {
    n: "4",
    title: "Activación de Marca",
    body: "Llevar la estrategia al mundo real, con coherencia.",
    bg: "var(--color-orange)",
    fg: "var(--color-navy)",
  },
  {
    n: "5",
    title: "Transferencia y Acompañamiento",
    body: "Dejar capacidad instalada y acompañar el crecimiento.",
    bg: "var(--color-orange)",
    fg: "var(--color-navy)",
  },
];

const workshopItems = [
  {
    label: "Taller 01",
    title: "Yo Represento la Marca",
    tags: ["Comunicación Profesional", "Marca Personal", "Imagen Profesional", "Expresión Frente a Cámara"],
  },
  {
    label: "Taller 02",
    title: "Presentaciones que Dejan Marca",
    body: "Cómo estructurar, diseñar y presentar ideas que se recuerdan — para que cada exposición del equipo refuerce la marca en lugar de diluirla.",
  },
];

const talkItems = [
  { n: "01", title: "El Iceberg del Branding" },
  { n: "02", title: "La Mentira Más Cara del Branding" },
  { n: "03", title: "Diseñar una Marca es Diseñar una Empresa" },
  { n: "04", title: "El Sistema Invisible" },
  { n: "05", title: "El Costo de Ser una Marca Indiferente" },
  { n: "06", title: "El Branding No Es Para Todos" },
];

const audienceItems = [
  { label: "Marcas que quieren dejar de competir por precio", color: "var(--color-orange)" },
  { label: "Empresas en crecimiento", color: "var(--color-blue)" },
  { label: "Emprendedores con visión", color: "var(--color-sky)" },
  { label: "Equipos y líderes", color: "var(--color-navy)" },
];

const whyItems = [
  { n: "01", title: "Rigor de negocio + voz humana", body: "Pensamos como estrategas y hablamos como personas." },
  { n: "02", title: "Modelos propios", body: "El Iceberg del Branding y El Sistema Invisible de Marca, herramientas creadas en casa." },
  { n: "03", title: "Enfoque humano, no solo visual", body: "La marca vive en las personas antes que en el logo." },
  { n: "04", title: "Orientado a resultados", body: "La marca al servicio del negocio, no al revés." },
  { n: "05", title: "Crecimiento sostenible", body: "Construimos marcas que resisten el tiempo, no modas." },
];

const trainingLogos = [
  { src: "/brand/logos/gsq.png", alt: "Grupo Sur Química" },
  { src: "/brand/logos/sur.png", alt: "SUR" },
  { src: "/brand/logos/claro.png", alt: "Claro" },
  { src: "/brand/logos/impacthub.png", alt: "Impact Hub Managua" },
  { src: "/brand/logos/disruptivas.png", alt: "Disruptivas" },
];

const testimonialItems = [
  {
    image: "/brand/Brand/assets/testimonios/cris.png",
    name: "María Cristina Bolaños Rodríguez",
    role: "Gerente de Recursos Humanos · Grupo Sur Química Nicaragua",
    quote:
      "Samuel logró comprender rápidamente las necesidades de nuestra organización y convertirlas en una experiencia de aprendizaje práctica y significativa. Su capacidad para conectar la representación de la marca, la imagen profesional y la atención al cliente permitió que nuestros colaboradores entendieran el impacto que tienen en cada interacción. Destaco su profesionalismo, cercanía y compromiso en cada etapa del proceso.",
  },
  {
    image: "/brand/Brand/assets/testimonios/sam.png",
    name: "Samantha Duarte",
    role: "Directora · Disruptivas",
    quote:
      "Trabajar con Samuel siempre ha significado ofrecer contenido de alto valor a nuestra comunidad. Tiene la capacidad de explicar el branding desde una perspectiva estratégica, cercana y fácil de comprender, logrando que emprendedoras y empresarios cambien la forma en que entienden sus marcas y sus negocios. Su profesionalismo, empatía y pasión por compartir conocimiento hacen que cada colaboración genere un impacto real.",
  },
  {
    image: "/brand/Brand/assets/testimonios/bis.png",
    name: "Bismarck Moncada",
    role: "Coordinador de Comunicación · Impact Hub Managua",
    quote:
      "Samuel aporta una visión estratégica que conecta branding, marketing y crecimiento empresarial de una manera clara y práctica. En cada conferencia logra captar la atención de la audiencia y dejar herramientas que los emprendedores pueden aplicar inmediatamente en sus negocios. Es un profesional cercano, preparado y comprometido con aportar valor a cada espacio en el que participa.",
  },
];

const navLinks = [
  { label: "Historia", href: "#historia" },
  { label: "Quiénes somos", href: "#quienes" },
  { label: "Oferta", href: "#oferta" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Blog Brand", href: "/blog" },
  { label: "Eventos", href: "/eventos" },
  { label: "Contáctanos", href: "#contacto" },
];

const slideName = (slide: (typeof heroSlides)[number]) =>
  [...slide.titleLines, slide.highlight].filter(Boolean).join(" ");

export function HomeClient() {
  const reducedMotion = useReducedMotion();
  const [heroIndex, setHeroIndex] = useState(0);
  // The five slides are all stacked in the viewport, so mounting all five
  // <Image>s means five full-bleed downloads racing the LCP one. Only the
  // slides already seen — plus the next one, mounted a full 6s turn before it
  // is needed — carry an image. The first paint pays for one.
  const [mountedSlides, setMountedSlides] = useState(1);
  const [heroPaused, setHeroPaused] = useState(false);
  const [bannerOpen, setBannerOpen] = useState(true);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  // Reduced motion pauses the carousel instead of silently disabling it, so the
  // control keeps naming what the carousel is actually doing. Pressing resume is
  // an explicit override, and the slide change is a cut rather than a crossfade.
  useEffect(() => {
    setHeroPaused(reducedMotion);
  }, [reducedMotion]);

  useEffect(() => {
    setMountedSlides((count) => Math.max(count, Math.min(heroIndex + 2, heroSlides.length)));
  }, [heroIndex]);

  useEffect(() => {
    if (heroPaused) return;
    const interval = window.setInterval(() => {
      setHeroIndex((current) => (current + 1) % heroSlides.length);
    }, 6000);
    return () => window.clearInterval(interval);
  }, [heroPaused]);

  // Swipe is read on touchend from the start/end delta alone: nothing calls
  // preventDefault, so a vertical drag stays a page scroll and only a gesture
  // that is clearly sideways moves the carousel.
  const swipeStart = useRef<{ x: number; y: number; t: number } | null>(null);

  const goToSlide = (next: number) => {
    setHeroIndex((next + heroSlides.length) % heroSlides.length);
    // A deliberate gesture takes over from the timer, same as tapping a dot.
    setHeroPaused(true);
  };

  const onHeroTouchStart = (event: ReactTouchEvent) => {
    const touch = event.touches[0];
    swipeStart.current = { x: touch.clientX, y: touch.clientY, t: Date.now() };
  };

  const onHeroTouchEnd = (event: ReactTouchEvent) => {
    const start = swipeStart.current;
    swipeStart.current = null;
    if (!start) return;
    const touch = event.changedTouches[0];
    const dx = touch.clientX - start.x;
    const dy = touch.clientY - start.y;
    // Sideways by a clear margin, far enough to be intentional, and quick
    // enough to be a flick rather than a finger resting on the photo.
    if (Math.abs(dx) < 50) return;
    if (Math.abs(dx) < Math.abs(dy) * 1.5) return;
    if (Date.now() - start.t > 800) return;
    goToSlide(dx < 0 ? heroIndex + 1 : heroIndex - 1);
  };

  const activeSlide = heroSlides[heroIndex];
  const activeTestimonial = testimonialItems[testimonialIndex];

  return (
    <div className="overflow-x-hidden bg-paper text-navy">
      <ScrollReveal />

      <a href="#contenido" className="skip-link">
        Saltar al contenido
      </a>

      <SiteHeader
        tone="paper"
        homeHref="#inicio"
        links={navLinks}
        cta={{ label: "Agenda una sesión", href: "#contacto" }}
      />


      {bannerOpen ? (
        <aside
          aria-label="Anuncio: próximo evento"
          className="relative overflow-hidden bg-navy text-white"
        >
          <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(135deg,transparent,transparent_22px,rgba(142,202,230,0.06)_22px,rgba(142,202,230,0.06)_23px)]" />
          <div className="relative mx-auto flex max-w-[1180px] flex-col items-start gap-4 gutter py-5 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-6">
            <div className="rv flex flex-1 flex-wrap items-center gap-[22px]">
              <div>
                <div className="mb-1.5 flex flex-wrap items-center gap-3">
                  <span className="t-label text-sky">
                    Próximo evento
                  </span>
                  <span className="rounded-full bg-yellow px-2.5 py-1 t-micro text-navy">
                    Cupos limitados
                  </span>
                </div>
                <p className="t-title-sm font-extrabold">Brand Lab Live · Las marcas no venden, significan</p>
                <p className="mt-1 max-w-[640px] text-sm text-body-on-navy">19 de septiembre · DoubleTree by Hilton Managua · 9:00 a.m.</p>
              </div>
            </div>
            <div className="flex w-full items-center justify-between gap-4 sm:w-auto sm:justify-start">
              <a
                href="/eventos"
                className="btn btn-md btn-primary-on-light"
              >
                Ver el evento
              </a>
              <button
                type="button"
                onClick={() => setBannerOpen(false)}
                aria-label="Cerrar anuncio"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white"
              >
                <Icon name="close" size={16} />
              </button>
            </div>
          </div>
        </aside>
      ) : null}

      <main id="contenido" className="overflow-hidden">
        <section aria-labelledby="h-inicio" id="inicio" className="relative scroll-mt-[90px]">
          <h1 id="h-inicio" className="sr-only">Una marca fuerte no grita. Tiene significado.</h1>
          {/* Navy floor under the stack: if a jumped-to slide is still fetching
              its image, the gap reads as the brand ground, never as paper. */}
          <div
            className="relative min-h-[760px] touch-pan-y bg-navy lg:min-h-[min(82svh,880px)]"
            onTouchStart={onHeroTouchStart}
            onTouchEnd={onHeroTouchEnd}
          >
            {heroSlides.map((slide, idx) => (
              <div
                key={slide.eyebrow + idx}
                className={`hero-slide absolute inset-0 overflow-hidden transition-opacity duration-[1000ms] ease-in-out ${heroIndex === idx ? "opacity-100 z-10" : "opacity-0 z-0"}`}
                // `inert` removes the slide from the tab order too. `aria-hidden`
                // alone left five focusable CTAs stacked behind the visible one.
                {...(heroIndex === idx ? {} : { inert: true })}
              >
                {idx < mountedSlides ? (
                  <Image
                    src={slide.image}
                    alt={slide.imageAlt}
                    fill
                    // The first slide is the LCP element and is preloaded from
                    // the head. Every other slide is a background download that
                    // must never compete with it: `preload` and `fetchPriority`
                    // are mutually exclusive by design.
                    {...(idx === 0 ? { preload: true } : { fetchPriority: "low" as const })}
                    sizes="(min-width: 64rem) 100vw, 250vw"
                    className="hero-img object-cover"
                    style={{
                      "--hero-pos-sm": slide.imagePositionMobile,
                      "--hero-pos-lg": slide.imagePosition,
                      "--hero-scale-sm": slide.imageScaleMobile,
                      "--hero-origin-sm": slide.imageScaleOriginMobile,
                    } as CSSProperties}
                  />
                ) : null}
                <div className="absolute inset-0 hidden lg:block" style={{ background: slide.overlay }} />
                <div
                  className="hero-scrim absolute inset-0 lg:hidden"
                  style={{ "--hero-scrim-shift": slide.imageScrimShiftMobile } as CSSProperties}
                />
                <div className="relative z-10 mx-auto flex max-w-[1180px] min-h-[760px] items-end pb-14 gutter lg:min-h-[min(82svh,880px)] lg:items-center lg:pb-0">
                  <div
                    className={`max-w-[560px] ${
                      slide.alignment === "right" ? "ml-auto text-right lg:max-w-[640px]" : "text-left lg:max-w-[820px]"
                    }`}
                  >
                    <div className="rv inline-flex items-center gap-3 rounded-full border border-sky/40 bg-mist/5 px-4 py-2 t-label font-semibold text-sky">
                      <span className="inline-flex h-2 w-2 rounded-full bg-orange" />
                      {slide.eyebrow}
                    </div>
                    {slide.eyebrowPromo ? (
                      <div className="mt-4 inline-flex rounded-full border border-yellow/50 bg-navy-2/80 px-4 py-2 text-sm font-semibold text-on-dark-strong">
                        {slide.eyebrowPromo}
                      </div>
                    ) : null}
                    <p className="rv t-display mt-5 text-white lg:mt-7">
                      {slide.titleLines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                      {slide.highlight ? <span className="text-orange">{slide.highlight}</span> : null}
                    </p>
                    <p
                      className={`rv mt-4 max-w-[480px] t-lead text-on-dark-soft lg:mt-6 ${
                        slide.alignment === "right" ? "ml-auto" : ""
                      }`}
                    >
                      {slide.body}
                    </p>
                    <div className={`rv mt-7 flex flex-wrap gap-4 lg:mt-10 ${slide.alignment === "right" ? "justify-end" : "justify-start"}`}>
                      <a
                        href={slide.ctaHref}
                        className="btn btn-lg btn-primary-on-light"
                      >
                        {slide.ctaLabel}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="absolute inset-x-0 bottom-2 z-20 flex items-center justify-center">
              {heroSlides.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  aria-label={`Ver slide ${idx + 1}: ${slideName(heroSlides[idx])}`}
                  aria-current={heroIndex === idx}
                  onClick={() => {
                    goToSlide(idx);
                  }}
                  className="flex h-11 items-center px-2"
                >
                  <span
                    className={`block h-2 rounded-full transition-all duration-300 ${heroIndex === idx ? "w-8 bg-orange" : "w-3 bg-white/40"}`}
                  />
                </button>
              ))}
              <button
                type="button"
                onClick={() => setHeroPaused((paused) => !paused)}
                aria-label={heroPaused ? "Reanudar el carrusel" : "Pausar el carrusel"}
                className="ml-2 flex h-11 w-11 items-center justify-center rounded-full text-white/70 transition-colors hover:text-white"
              >
                {heroPaused ? (
                  <svg width="13" height="15" viewBox="0 0 13 15" aria-hidden="true">
                    <path d="M1 1.4v12.2a.6.6 0 0 0 .93.5l9.3-6.1a.6.6 0 0 0 0-1L1.93.9A.6.6 0 0 0 1 1.4Z" fill="currentColor" />
                  </svg>
                ) : (
                  <svg width="12" height="14" viewBox="0 0 12 14" aria-hidden="true">
                    <rect x="0.5" y="0.5" width="3.6" height="13" rx="1.2" fill="currentColor" />
                    <rect x="7.9" y="0.5" width="3.6" height="13" rx="1.2" fill="currentColor" />
                  </svg>
                )}
              </button>
            </div>
            <p className="sr-only" aria-live="polite">
              {`Slide ${heroIndex + 1} de ${heroSlides.length}: ${slideName(activeSlide)}`}
            </p>
          </div>
        </section>

        <section aria-labelledby="h-historia" id="historia" className="scroll-mt-[90px] bg-paper">
          <div className="mx-auto grid max-w-[1180px] gap-16 gutter py-[104px] lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rv relative">
              {/* The offset block is the photo frame shifted, not a shape of its
                  own: same 26px radius, so the pair reads as one gesture. */}
              <div
                aria-hidden="true"
                className="absolute -left-5 -top-5 h-[120px] w-[120px] rounded-[26px] bg-sky"
              />
              <div className="relative overflow-hidden rounded-[26px] bg-mist shadow-[0_40px_80px_-40px_rgba(2,48,71,0.5)] aspect-[3/4]">
                <Image
                  src="/brand/samuel-historia.jpg"
                  alt="Samuel García sonriendo, apoyado en una mesa de trabajo con su tableta y su teléfono"
                  fill
                  sizes="(max-width: 768px) 100vw, 540px"
                  className="object-cover object-top"
                />
              </div>
            </div>
            <div className="rv">
              <span className="eyebrow inline-flex items-center gap-2 bg-mist px-4 py-2 text-blue-ink">
                Mi historia
              </span>
              <h2 id="h-historia" className="mt-6 t-headline text-navy">
                Todo comenzó viendo<br className="hidden sm:inline" /> comerciales completos
              </h2>
              <p className="mt-6 measure t-body text-body-ink">
                Mientras otros esperaban que terminara la tanda, yo me quedaba a verla. Me fascinaba cómo
                <strong className="text-navy"> Grupo Pellas, Flor de Caña, La Perfecta, Parmalat, GluGlu y Casa Pellas</strong> lograban que una marca se sintiera parte de la vida de la gente.
              </p>
              <h3 className="mt-10 t-title-lg text-navy">De la curiosidad a la vocación</h3>
              <p className="mt-4 measure t-body text-body-ink">
                Con el tiempo entendí que muchos tratan el branding como <em>mercenarios</em>: entran, cobran y se van. Yo elegí lo contrario — quedarme, acompañar y construir marcas que sigan significando algo mucho después de la entrega.
              </p>
              <blockquote className="mt-10 border-l-[3px] border-orange pl-6 text-navy">
                <p className="t-quote">
                  &ldquo;Las marcas no deberían existir solamente para vender. Deberían existir para
                  generar confianza, conexión y significado.&rdquo;
                </p>
              </blockquote>
            </div>
          </div>
        </section>

        <section aria-labelledby="h-partida" className="relative overflow-hidden bg-navy text-white">
          <div className="absolute inset-0 bg-[url('/brand/isotipo-white.png')] bg-[length:420px] bg-right-top bg-no-repeat opacity-5" />
          <span className="marker animate-float-a pointer-events-none absolute top-[22%] left-[6%] block h-5 w-5 bg-orange opacity-50" />
          <span className="animate-float-c pointer-events-none absolute bottom-[18%] left-[44%] block h-3 w-3 rounded-full bg-sky opacity-55" />
          <div className="relative mx-auto grid max-w-[1180px] gap-16 gutter py-[104px] lg:grid-cols-[1fr_1fr]">
            <div className="rv">
              <span className="eyebrow inline-flex items-center gap-2 bg-navy-2/80 px-4 py-2 text-sky">
                El punto de partida
              </span>
              <h2 id="h-partida" className="mt-6 t-headline text-white">
                ¿Tu marca se ve más pequeña de lo que realmente es?
              </h2>
              <div className="mt-9 rounded-tr-[12px] rounded-br-[12px] border-l-4 border-orange bg-navy-2 p-7">
                <div className="t-label text-sky">El concepto</div>
                <div className="mt-3 t-title-lg text-orange">El Emprendedor Invisible</div>
                <p className="mt-3 t-body-sm text-body-on-navy">
                  Trabajas duro y tu producto es bueno — pero el mercado no lo percibe. El problema pocas veces es el precio: es la percepción.
                </p>
              </div>
            </div>
            <div className="rv flex flex-col">
              {[
                {
                  title: "No transmite el valor real",
                  body: "Lo que ofreces vale más de lo que tu marca comunica.",
                  color: "var(--color-orange)",
                },
                {
                  title: "La competencia se percibe mejor",
                  body: "Otros con menos producto capturan más atención.",
                  color: "var(--color-blue)",
                },
                {
                  title: "Dependes del precio",
                  body: "Sin diferenciación, la única palanca que queda es descontar.",
                  color: "var(--color-sky)",
                },
                {
                  title: "El marketing no conecta",
                  body: "Inviertes en publicidad, pero el mensaje no genera vínculo.",
                  color: "var(--color-yellow)",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-[18px] border-b border-white/[0.12] py-[22px] last:border-b-0">
                  <span
                    className="marker mt-1.5 block h-3.5 w-3.5 shrink-0"
                    style={{ backgroundColor: item.color }}
                  />
                  <div>
                    <div className="t-title-sm text-white">{item.title}</div>
                    <p className="mt-[5px] t-body-sm text-body-on-abyss">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="h-quienes" id="quienes" className="bg-mist bg-[url('/brand/mosaico.jpeg')] bg-center [background-size:560px]">
          <div className="mx-auto grid max-w-[1180px] items-center gap-0 gutter py-[104px] lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rv aspect-[16/11] overflow-hidden rounded-[26px_0_0_26px] bg-mist shadow-[0_40px_80px_-40px_rgba(2,48,71,0.5)]">
              <div className="relative h-full w-full">
                <Image
                  src="/brand/samuel-quienes.jpg"
                  alt="Samuel García"
                  fill
                  sizes="(max-width: 1024px) 100vw, 620px"
                  className="object-cover object-[center_30%]"
                />
              </div>
            </div>
            <div className="rv flex flex-col justify-center self-stretch rounded-[0_26px_26px_0] bg-navy px-7 py-10 text-white shadow-[0_40px_80px_-40px_rgba(2,48,71,0.6)] sm:px-12 sm:py-14">
              <span className="eyebrow inline-flex items-center gap-2 bg-navy-2/85 px-4 py-2 text-sky">
                Quiénes somos
              </span>
              <h2 id="h-quienes" className="mt-6 t-subhead">
                Brand Lab<br />by Samu
              </h2>
              <p className="mt-6 t-body text-body-on-navy">
                Una consultoría de estrategia de marca que piensa como laboratorio: precisión técnica y calidez humana. No vendemos logos — construimos marcas con significado.
              </p>
              <div className="mt-8 flex flex-col gap-5">
                <div className="border-l-[3px] border-blue pl-5">
                  <div className="t-label text-sky">Visión</div>
                  <p className="mt-3 t-body-sm text-on-dark-soft">
                    Ser una de las voces más influyentes de Centroamérica en branding estratégico y humano.
                  </p>
                </div>
                <div className="border-l-[3px] border-orange pl-5">
                  <div className="t-label text-sky">Propósito</div>
                  <p className="mt-3 t-body-sm text-on-dark-soft">
                    Dar significado a las marcas para que dejen de competir por precio y empiecen a conectar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="h-oferta" id="oferta" className="bg-paper">
          <div className="mx-auto max-w-[1180px] gutter py-[104px]">
            <div className="rv max-w-[680px]">
              <span className="eyebrow inline-flex rounded-full bg-mist px-4 py-2 text-orange-ink">
                Nuestra oferta
              </span>
              <h2 id="h-oferta" className="mt-6 t-headline text-navy">
                Cuatro formas de<br className="hidden sm:inline" /> construir significado
              </h2>
            </div>
            <div className="mt-11 divide-y divide-ink/10 border-t border-ink/10">
              {offerItems.map((offer) => (
                <a
                  key={offer.n}
                  href={offer.href}
                  className="rv group grid grid-cols-[64px_1fr_28px] items-start gap-4 py-8 text-navy transition-colors hover:bg-white sm:grid-cols-[150px_1fr_40px] sm:gap-7 sm:py-10"
                >
                  <div className="t-numeral text-quiet transition-colors duration-200 group-hover:text-orange">
                    {offer.n}
                  </div>
                  <div>
                    <h3 className="t-subhead">{offer.title}</h3>
                    <p className="mt-3 max-w-[640px] t-body-sm text-body-muted">{offer.desc}</p>
                  </div>
                  <span className="flex items-start justify-end text-quiet transition-transform duration-200 group-hover:translate-x-1 sm:items-center">
                    <Icon name="arrow-right" size={22} className="sm:h-[26px] sm:w-[26px]" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="h-linea-1" id="linea-1" className="scroll-mt-[90px] bg-paper">
          <div className="mx-auto max-w-[1180px] gutter py-[100px]">
            <div className="rv max-w-[720px]">
              <span className="eyebrow inline-flex rounded-full bg-mist px-4 py-2 text-blue-ink">
                Línea de servicio 01
              </span>
              <h2 id="h-linea-1" className="mt-6 t-subhead text-navy">
                Consultoría Estratégica de Marca
              </h2>
              <p className="mt-6 max-w-[640px] t-body text-body-ink">
                Un sistema de marca en cinco fases — del descubrimiento a la transferencia — para que tu marca signifique algo por dentro y por fuera.
              </p>
            </div>
            <div className="rv mt-14 grid gap-6 md:grid-cols-5">
              {phaseItems.map((phase) => (
                <div key={phase.n}>
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl t-title-sm font-extrabold"
                    style={{ backgroundColor: phase.bg, color: phase.fg }}
                  >
                    {phase.n}
                  </div>
                  <h3 className="mt-4 t-title-sm text-navy">{phase.title}</h3>
                  <p className="mt-2 t-meta text-body-ink">{phase.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="h-linea-2" id="linea-2" className="scroll-mt-[90px] bg-navy text-white">
          <div className="mx-auto grid max-w-[1180px] gap-16 gutter py-[100px] lg:grid-cols-[1fr_1fr]">
            <div className="rv">
              <span className="eyebrow text-orange">Línea de servicio 02</span>
              <h2 id="h-linea-2" className="mt-4 t-subhead text-white">
                Registro de Marca<br className="hidden sm:inline" /> Aliado Legal
              </h2>
              <p className="mt-[22px] max-w-[520px] t-body text-body-on-navy">
                Tu estrategia no sirve si alguien más puede usar tu nombre. Por eso trabajo junto a un <strong className="text-white">abogado especialista en propiedad intelectual</strong> para proteger lo que construimos.
              </p>
            </div>
            <div className="rv flex flex-col gap-[18px]">
              <div className="rounded-[0_12px_12px_0] border-l-[3px] border-blue bg-navy-2 px-7 py-[26px]">
                <h3 className="t-title text-white">Búsqueda de disponibilidad legal</h3>
                <p className="mt-[10px] t-body-sm text-body-on-navy">
                  Integrada dentro de la fase de <strong className="text-sky">Definición Estratégica</strong>, sin costo adicional. Validamos que tu nombre pueda ser tuyo antes de construir sobre él.
                </p>
              </div>
              <div className="rounded-[0_12px_12px_0] border-l-[3px] border-orange bg-navy-2 px-7 py-[26px]">
                <h3 className="t-title text-white">Trámite formal de inscripción</h3>
                <p className="mt-[10px] t-body-sm text-body-on-navy">
                  Se cotiza aparte, con total transparencia. Te acompañamos en el proceso legal de registro ante la autoridad correspondiente.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="h-linea-3" id="linea-3" className="scroll-mt-[90px] bg-paper">
          <div className="mx-auto max-w-[1180px] gutter py-[100px]">
            <div className="rv max-w-[720px]">
              <span className="eyebrow text-orange-ink">Línea de servicio 03</span>
              <h2 id="h-linea-3" className="mt-4 t-subhead text-navy">
                Talleres In-Company
              </h2>
              <p className="mt-5 max-w-[640px] t-body text-body-ink">
                Sesiones de <strong className="text-navy">4 horas</strong> para equipos completos. Formación práctica que convierte a las personas en embajadoras de la marca.
              </p>
            </div>
            <div className="mt-[52px] grid gap-6 lg:grid-cols-2">
              {workshopItems.map((workshop) => (
                <div key={workshop.label} className="rv rounded-[22px] border border-ink/10 bg-white px-8 py-9">
                  <div className="t-label text-orange-ink">{workshop.label}</div>
                  <h3 className="mt-3 t-title-lg text-navy">{workshop.title}</h3>
                  {workshop.tags ? (
                    <div className="mt-[22px] flex flex-wrap gap-[10px]">
                      {workshop.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-mist px-[15px] py-[9px] t-meta font-semibold text-navy"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="mt-[22px] t-body-sm text-body-ink">{workshop.body}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="h-talks" id="talks" className="scroll-mt-[90px] relative overflow-hidden bg-navy text-white">
          <div className="pointer-events-none absolute -bottom-[70px] -left-[70px] h-[380px] w-[380px] bg-[url('/brand/isotipo-white.png')] bg-contain bg-no-repeat opacity-5" />
          <div className="relative mx-auto max-w-[1180px] gutter py-[100px]">
            <div className="rv max-w-[720px]">
              <span className="eyebrow text-orange">Línea de servicio 04</span>
              <h2 id="h-talks" className="mt-4 t-subhead text-white">
                Brand Lab Talks
              </h2>
              <p className="mt-5 max-w-[640px] t-body text-body-on-navy">
                Charlas de <strong className="text-white">45–60 minutos</strong> para sacudir la forma en que tu organización entiende el branding.
              </p>
            </div>
            <div className="mt-[52px] grid gap-5 md:grid-cols-3">
              {talkItems.map((talk) => (
                <div key={talk.n} className="rv flex h-full flex-col gap-[14px] rounded-[20px] border border-white/[0.08] bg-navy-2 px-7 py-[30px]">
                  <span className="t-title-sm font-extrabold text-orange">{talk.n}</span>
                  <h3 className="t-title text-white">{talk.title}</h3>
                </div>
              ))}
            </div>
            <p className="mt-[26px] max-w-[640px] t-meta italic text-muted-dark">
              El contenido detallado de cada charla se comparte a solicitud.
            </p>
          </div>
        </section>

        <section aria-labelledby="h-clientes" className="bg-paper">
          <div className="mx-auto grid max-w-[1180px] gap-16 gutter py-[100px] lg:grid-cols-[1fr_1fr]">
            <div className="rv">
              <span className="eyebrow text-orange-ink">Para quién es esto</span>
              <h2 id="h-clientes" className="mt-[18px] t-headline text-navy">
                Si tu marca merece<br className="hidden sm:inline" /> ser vista en grande
              </h2>
              <div className="mt-[34px] flex flex-col">
                {audienceItems.map((item) => (
                  <div key={item.label} className="flex items-center gap-4 border-b border-ink/10 py-4 last:border-b-0">
                    <span
                      className="marker block h-3 w-3 shrink-0"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="t-title-sm font-semibold text-navy">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rv flex flex-col justify-center gap-[22px]">
              <p className="t-lead text-body-ink">
                Esto es para quienes entienden que la marca es una <strong className="text-navy">decisión de negocio</strong>, no un adorno. Para quienes están listos para invertir en percepción, no solo en publicidad.
              </p>
              <p className="t-lead text-body-ink">
                Si buscas el logo más barato, no somos para ti. Si buscas una marca que signifique algo y sostenga tu crecimiento — <strong className="text-orange">hablemos</strong>.
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="h-porque" id="porque" className="scroll-mt-[90px] relative overflow-hidden bg-navy text-white">
          <div className="pointer-events-none absolute -top-[70px] -right-[80px] h-[420px] w-[420px] bg-[url('/brand/isotipo-white.png')] bg-contain bg-no-repeat opacity-5" />
          <span className="marker animate-float-b pointer-events-none absolute top-[26%] left-[5%] block h-4 w-4 bg-orange opacity-50" />
          <span className="animate-float-c pointer-events-none absolute bottom-[22%] right-[8%] block h-3 w-3 rounded-full bg-blue opacity-50" />
          <div className="relative mx-auto max-w-[1180px] gutter py-[100px]">
            <div className="rv max-w-[680px]">
              <span className="eyebrow text-orange">Por qué Brand Lab</span>
              <h2 id="h-porque" className="mt-[18px] t-headline text-white">
                Estrategia con rigor,<br className="hidden sm:inline" /> marca con alma
              </h2>
            </div>
            <div className="mt-[52px] grid gap-px border border-white/10 bg-white/10 p-px md:grid-cols-[1fr_1fr_1fr]">
              {whyItems.map((item) => (
                <div key={item.n} className="rv bg-navy p-8">
                  <div className="t-title-sm font-extrabold text-sky">{item.n}</div>
                  <h3 className="mt-4 t-title text-white">{item.title}</h3>
                  <p className="mt-3 t-body-sm text-body-on-abyss">{item.body}</p>
                </div>
              ))}
              <div className="rv flex flex-col justify-center gap-5 bg-navy-2 p-8">
                <p className="t-body text-on-dark-soft">
                  Si algo de esto describe a tu marca, la conversación empieza aquí.
                </p>
                <a
                  href="#contacto"
                  className="inline-flex w-fit items-center gap-2 rounded-full border-[1.5px] border-white/30 bg-white/[0.08] px-6 py-3 t-body-sm font-semibold text-white transition-colors duration-200 hover:border-white/70 hover:bg-white/[0.16]"
                >
                  Hablemos <Icon name="arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="manifiesto"
          className="relative overflow-hidden bg-orange text-navy"
        >
          <div className="pointer-events-none absolute -right-[90px] -top-[80px] h-[460px] w-[460px] bg-[url('/brand/isotipo-navy.png')] bg-contain bg-no-repeat opacity-[0.07]" />
          <div className="relative mx-auto max-w-[1180px] gutter py-[128px] sm:py-[168px]">
            <div className="rv flex items-center gap-4">
              <span
                className="marker block h-[18px] w-[18px] shrink-0 bg-navy"
               
              />
              <span className="eyebrow text-on-orange">La tesis</span>
              <span className="h-px flex-1 bg-navy/25" />
            </div>
            <h2 id="manifiesto" className="rv t-manifesto mt-11 max-w-[13ch] italic">
              We don&apos;t sell,
              <br />
              we mean!
            </h2>
            <p className="rv mt-12 max-w-[680px] t-quote font-semibold text-on-orange">
              Una marca fuerte no grita. Tiene significado — y ese significado es lo que hace que
              deje de competir por precio.
            </p>
          </div>
        </section>

        <section aria-labelledby="h-testimonios" id="testimonios" className="bg-bone">
          <div className="mx-auto max-w-[1180px] gutter py-[96px]">
            <div className="rv max-w-[720px]">
              <span className="eyebrow text-orange-ink">Testimonios</span>
              <h2 id="h-testimonios" className="mt-[18px] t-subhead text-navy">
                Historias de marcas que decidieron significar
              </h2>
            </div>
            <div className="rv mt-12 flex flex-col gap-[18px] md:flex-row md:items-center">
              <button
                type="button"
                onClick={() => setTestimonialIndex((current) => (current - 1 + testimonialItems.length) % testimonialItems.length)}
                className="tarw hidden h-[46px] w-[46px] items-center justify-center rounded-full border border-navy/[0.18] bg-white text-navy transition hover:bg-navy hover:text-white md:flex"
                aria-label="Anterior testimonio"
              >
                <Icon name="arrow-left" size={18} />
              </button>
              <div className="tfade relative flex-1 overflow-hidden rounded-[22px] border border-navy/[0.08] bg-white p-10 shadow-[0_26px_60px_-44px_rgba(2,48,71,0.6)] md:flex md:gap-[30px]">
                <div className="relative h-[118px] w-[118px] shrink-0 overflow-hidden rounded-full bg-mist">
                  <Image
                    src={activeTestimonial.image}
                    alt={activeTestimonial.name}
                    fill
                    sizes="118px"
                    className="object-cover"
                  />
                </div>
                <div className="mt-8 min-w-0 md:mt-0">
                  <div aria-hidden="true" className="text-[3rem] leading-[0.9] text-orange">
                    &ldquo;
                  </div>
                  <p className="mt-[18px] measure t-body text-body-ink">{activeTestimonial.quote}</p>
                  <div className="mt-[18px] t-body-sm font-bold text-navy">{activeTestimonial.name}</div>
                  <div className="mt-[3px] t-meta text-body-muted">{activeTestimonial.role}</div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setTestimonialIndex((current) => (current + 1) % testimonialItems.length)}
                className="tarw hidden h-[46px] w-[46px] items-center justify-center rounded-full border border-navy/[0.18] bg-white text-navy transition hover:bg-navy hover:text-white md:flex"
                aria-label="Siguiente testimonio"
              >
                <Icon name="arrow-right" size={18} />
              </button>
            </div>
            <div className="mt-[24px] flex items-center justify-center gap-1">
              <button
                type="button"
                onClick={() => setTestimonialIndex((current) => (current - 1 + testimonialItems.length) % testimonialItems.length)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-navy/[0.18] bg-white text-navy md:hidden"
                aria-label="Anterior testimonio"
              >
                <Icon name="arrow-left" size={18} />
              </button>
              <div className="flex items-center px-1">
                {testimonialItems.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    aria-label={`Testimonio ${idx + 1}`}
                    aria-current={testimonialIndex === idx}
                    onClick={() => setTestimonialIndex(idx)}
                    className="flex h-11 items-center px-2"
                  >
                    <span
                      className={`block h-2 rounded-full transition-all duration-300 ${testimonialIndex === idx ? "w-[26px] bg-orange" : "w-2 bg-navy/20"}`}
                    />
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => setTestimonialIndex((current) => (current + 1) % testimonialItems.length)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-navy/[0.18] bg-white text-navy md:hidden"
                aria-label="Siguiente testimonio"
              >
                <Icon name="arrow-right" size={18} />
              </button>
            </div>
          </div>
        </section>

        <section aria-labelledby="h-formacion" className="bg-paper border-t border-ink/10">
          <div className="mx-auto max-w-[1180px] gutter py-[96px]">
            <div className="rv max-w-[720px]">
              <span className="eyebrow text-orange-ink">Trayectoria formativa</span>
              <h2 id="h-formacion" className="mt-[18px] t-subhead text-navy">
                Donde he compartido lo que sé
              </h2>
            </div>
            <div className="group rv relative mt-11 overflow-hidden" style={{ WebkitMaskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)", maskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)" }}>
              <div className="flex w-max animate-marq items-center gap-[70px] [animation-duration:32s] group-hover:[animation-play-state:paused]">
                {trainingLogos.concat(trainingLogos).map((logo, index) => (
                  <Image
                    key={`${logo.alt}-${index}`}
                    src={logo.src}
                    alt={logo.alt}
                    width={210}
                    height={64}
                    className="h-[64px] w-auto max-w-[210px] object-contain grayscale opacity-50 transition duration-300 hover:grayscale-0 hover:opacity-100"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="h-contacto" id="contacto" className="scroll-mt-[90px] relative overflow-hidden bg-navy text-white">
          <div className="pointer-events-none absolute -bottom-[90px] -left-[70px] h-[420px] w-[420px] bg-[url('/brand/isotipo-white.png')] bg-contain bg-no-repeat opacity-5" />
          <span className="marker animate-float-a pointer-events-none absolute top-[20%] right-[6%] block h-[18px] w-[18px] bg-orange opacity-45" />
          <div className="relative mx-auto grid max-w-[1180px] gap-[60px] gutter py-[104px] lg:grid-cols-[0.85fr_1.15fr]">
            <div className="rv relative overflow-hidden rounded-[26px] bg-navy-2 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.6)] aspect-[3/4]">
              <Image
                src="/brand/samuel-cafe.jpg"
                alt="Samuel García trabajando"
                fill
                sizes="(max-width: 1024px) 100vw, 540px"
                className="object-cover object-top"
              />
            </div>
            <div className="rv">
              <span className="eyebrow text-orange">Sobre Samuel</span>
              <h2 id="h-contacto" className="mt-[18px] t-headline text-white">
                Estratega de marca con<br className="hidden sm:inline" />+10 años de experiencia
              </h2>
              <p className="mt-[22px] max-w-[560px] t-body text-body-on-navy">
                He acompañado a marcas, equipos y líderes de toda Centroamérica a transformar la forma en que son percibidos. Mi trabajo conecta estrategia, negocio y humanidad — porque una marca con significado no se improvisa, se construye.
              </p>
              <blockquote className="mt-[30px] border-l-[3px] border-orange pl-6">
                <p className="t-quote text-white">
                  &ldquo;El branding no es lujo. Es dirección. Es identidad. Es claridad. Es
                  confianza.&rdquo;
                </p>
              </blockquote>
              <div className="mt-[34px]">
                <a
                  href="https://wa.me/50557400875?text=Hola%20Samuel,%20quiero%20una%20sesion%20para%20mi%20marca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-lg btn-primary-on-light"
                >
                  Agenda una sesión <Icon name="arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </section>


      </main>

      <SiteFooter
        id="footer"
        tone="ink"
        className="scroll-mt-[70px]"
        explore={[
          { label: "Historia", href: "#historia" },
          { label: "Quiénes somos", href: "#quienes" },
          { label: "Oferta", href: "#oferta" },
          { label: "Talks", href: "#talks" },
          { label: "Blog Brand", href: "/blog" },
          { label: "Eventos", href: "/eventos" },
          { label: "Patrocinio", href: "/patrocinio" },
        ]}
        trailing={<span>Centroamérica</span>}
      />
    </div>
  );
}
