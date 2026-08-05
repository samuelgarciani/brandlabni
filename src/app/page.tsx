"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Wordmark } from "@/components/wordmark";

const heroSlides = [
  {
    eyebrow: "Brand Strategist · Fundador",
    titleLines: ["Una marca fuerte no grita."],
    highlight: "Tiene significado.",
    body:
      "Soy Samuel. Ayudo a empresas y emprendedores a construir marcas con significado, claridad y dirección estratégica — para dejar de competir por precio.",
    ctaLabel: "Agenda una sesión",
    ctaHref: "#contacto",
    image: "/brand/hero/hero-bg.png",
    imageAlt: "Samuel García, estratega de marca",
    imagePosition: "right top",
    alignment: "left",
    overlay: "linear-gradient(90deg, rgba(2, 58, 86, 0.94) 0%, rgba(2, 58, 86, 0.6) 42%, rgba(2, 58, 86, 0) 66%)",
  },
  {
    eyebrow: "Branding con propósito",
    titleLines: ["Construyamos una marca", "con propósito."],
    highlight: null,
    body:
      "Estrategia, percepción y humanidad conectadas en un solo sistema — para que tu marca signifique algo y deje de competir por precio.",
    ctaLabel: "Agenda una sesión",
    ctaHref: "#contacto",
    image: "/brand/hero/hero-2.png",
    imageAlt: "Samuel García en una sesión estratégica",
    imagePosition: "left center",
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
    image: "/brand/hero/hero-3.png",
    imageAlt: "Un momento de construcción de marca con Samuel García",
    imagePosition: "right center",
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
    image: "/brand/hero/hero-blog.png",
    imageAlt: "Samuel García leyendo",
    imagePosition: "right center",
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
    image: "/brand/hero/hero-evento.png",
    imageAlt: "Brand Lab Live — evento en vivo",
    imagePosition: "right center",
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
    bg: "#023047",
    fg: "#fff",
  },
  {
    n: "2",
    title: "Definición Estratégica",
    body: "Propósito, posicionamiento y territorio de marca.",
    bg: "#023047",
    fg: "#fff",
  },
  {
    n: "3",
    title: "Experiencia y Cultura",
    body: "La marca vivida por dentro: equipo, cultura y experiencia.",
    bg: "#023047",
    fg: "#fff",
  },
  {
    n: "4",
    title: "Activación de Marca",
    body: "Llevar la estrategia al mundo real, con coherencia.",
    bg: "#fb8500",
    fg: "#fff",
  },
  {
    n: "5",
    title: "Transferencia y Acompañamiento",
    body: "Dejar capacidad instalada y acompañar el crecimiento.",
    bg: "#fb8500",
    fg: "#fff",
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
  { label: "Marcas que quieren dejar de competir por precio", color: "#fb8500" },
  { label: "Empresas en crecimiento", color: "#219ebc" },
  { label: "Emprendedores con visión", color: "#8ecae6" },
  { label: "Equipos y líderes", color: "#ffb703" },
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

export default function Home() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [bannerOpen, setBannerOpen] = useState(true);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setHeroIndex((current) => (current + 1) % heroSlides.length);
    }, 6000);
    return () => window.clearInterval(interval);
  }, []);

  const activeSlide = heroSlides[heroIndex];
  const activeTestimonial = testimonialItems[testimonialIndex];

  return (
    <div className="overflow-x-hidden bg-[#fbfaf7] text-[#023047]">
      <ScrollReveal />

      <header className="sticky top-0 z-50 border-b border-[#02222f]/10 bg-[#fbfaf7]/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between px-[40px] py-4 sm:px-[22px]">
          <a href="#inicio" className="flex items-center gap-3">
            <Image src="/brand/isotipo-navy.png" alt="Isotipo Brand Lab" width={30} height={30} className="h-8 w-auto" />
            <Wordmark />
          </a>
          <div className="hidden md:flex items-center gap-8 text-[14.5px] font-medium text-[#3a4a54]">
            <a className="navlink" href="#historia">Historia</a>
            <a className="navlink" href="#quienes">Quiénes somos</a>
            <a className="navlink" href="#oferta">Oferta</a>
            <a className="navlink" href="#testimonios">Testimonios</a>
            <a className="navlink" href="/blog">Blog Brand</a>
            <a className="navlink" href="/eventos">Eventos</a>
            <a className="navlink" href="#contacto">Contáctanos</a>
          </div>
          <a
            href="#contacto"
            className="btnp rounded-full bg-[#023047] px-[22px] py-[11px] text-sm font-semibold text-white"
          >
            Agenda una sesión
          </a>
        </div>
      </header>

      {bannerOpen ? (
        <section className="relative overflow-hidden bg-[#023047] text-white">
          <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(135deg,transparent,transparent_22px,rgba(142,202,230,0.06)_22px,rgba(142,202,230,0.06)_23px)]" />
          <div className="relative mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-6 px-[40px] py-5 sm:px-[22px]">
            <div className="rv flex flex-1 flex-wrap items-center gap-[22px]">
              <div>
                <div className="mb-1.5 flex flex-wrap items-center gap-3">
                  <span className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-[#8ecae6]">
                    Próximo evento
                  </span>
                  <span className="rounded-full bg-[#ffb703] px-2.5 py-1 text-[11px] font-semibold text-[#023047]">
                    Cupos limitados
                  </span>
                </div>
                <p className="text-[19px] font-extrabold leading-[1.15] tracking-[-0.02em]">Brand Lab Live · Las marcas no venden, significan</p>
                <p className="mt-1 max-w-[640px] text-sm text-[#aebfc8]">19 de septiembre · DoubleTree by Hilton Managua · 9:00 a.m.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="/eventos"
                className="btnp rounded-full bg-[#fb8500] px-6 py-3 text-sm font-semibold text-white"
              >
                Ver el evento
              </a>
              <button
                type="button"
                onClick={() => setBannerOpen(false)}
                aria-label="Cerrar anuncio"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white"
              >
                ✕
              </button>
            </div>
          </div>
        </section>
      ) : null}

      <main className="overflow-hidden">
        <section id="inicio" className="relative scroll-mt-[90px]">
          <div className="relative min-h-[620px]">
            {heroSlides.map((slide, idx) => (
              <div
                key={slide.eyebrow + idx}
                className={`absolute inset-0 transition-opacity duration-[1000ms] ease-in-out ${heroIndex === idx ? "opacity-100 z-10" : "opacity-0 z-0"}`}
                aria-hidden={heroIndex !== idx}
              >
                <Image
                  src={slide.image}
                  alt={slide.imageAlt}
                  fill
                  priority={idx === 0}
                  sizes="100vw"
                  className="object-cover"
                  style={{ objectPosition: slide.imagePosition }}
                />
                <div className="absolute inset-0" style={{ background: slide.overlay }} />
                <div className="relative z-10 mx-auto flex max-w-[1180px] min-h-[620px] items-center px-[40px] sm:px-[22px]">
                  <div className={`max-w-[560px] ${slide.alignment === "right" ? "ml-auto text-right" : "text-left"}`}>
                    <div className="rv inline-flex items-center gap-3 rounded-full border border-[#8ecae6]/40 bg-[#eef4f6]/5 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#8ecae6]">
                      <span className="inline-flex h-2 w-2 rounded-full bg-[#fb8500]" />
                      {slide.eyebrow}
                    </div>
                    {slide.eyebrowPromo ? (
                      <div className="mt-4 inline-flex rounded-full border border-[#ffb703]/50 bg-[#0b3c53]/80 px-4 py-2 text-sm font-semibold text-[#e6edf0]">
                        {slide.eyebrowPromo}
                      </div>
                    ) : null}
                    <h1 className="rv mt-7 text-[66px] leading-[0.99] tracking-[-0.04em] font-extrabold text-white sm:text-[52px]">
                      {slide.titleLines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                      {slide.highlight ? <span className="text-[#fb8500]">{slide.highlight}</span> : null}
                    </h1>
                    <p className="rv mt-6 max-w-[480px] text-[17.5px] leading-[1.55] text-[#c6d3d9]">
                      {slide.body}
                    </p>
                    <div className={`rv mt-10 flex flex-wrap gap-4 ${slide.alignment === "right" ? "justify-end" : "justify-start"}`}>
                      <a
                        href={slide.ctaHref}
                        className="btnp rounded-full bg-[#fb8500] px-8 py-4 text-[15.5px] font-semibold text-white"
                      >
                        {slide.ctaLabel}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="absolute inset-x-0 bottom-6 z-20 flex justify-center gap-3">
              {heroSlides.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  aria-label={`Ver slide ${idx + 1}`}
                  onClick={() => setHeroIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${heroIndex === idx ? "w-8 bg-[#fb8500]" : "w-3 bg-white/40"}`}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-[#02222f]/10 bg-white">
          <div className="mx-auto grid max-w-[1180px] gap-10 px-[40px] py-[104px] sm:px-[22px] lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rv relative">
              <div className="absolute -left-5 -top-5 h-[120px] w-[120px] rounded-[24px] bg-[#8ecae6]" />
              <div className="relative overflow-hidden rounded-[26px] bg-[#dfe7ea] shadow-[0_40px_80px_-40px_rgba(2,48,71,0.35)] aspect-[3/4]">
                <Image
                  src="/brand/samuel-historia.jpg"
                  alt="Samuel García"
                  fill
                  sizes="(max-width: 768px) 100vw, 540px"
                  className="object-cover object-top"
                />
              </div>
            </div>
            <div className="rv">
              <span className="eyebrow inline-flex items-center gap-2 bg-[#eef4f6] px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#219ebc]">
                Mi historia
              </span>
              <h2 className="mt-6 text-[46px] font-extrabold leading-[1.05] tracking-[-0.03em] text-[#023047] sm:text-[38px]">
                Todo comenzó viendo<br /> comerciales completos
              </h2>
              <p className="mt-6 max-w-[680px] text-[17px] leading-[1.7] text-[#42525c]">
                Mientras otros esperaban que terminara la tanda, yo me quedaba a verla. Me fascinaba cómo
                <strong className="text-[#023047]"> Grupo Pellas, Flor de Caña, La Perfecta, Parmalat, GluGlu y Casa Pellas</strong> lograban que una marca se sintiera parte de la vida de la gente.
              </p>
              <h3 className="mt-10 text-[24px] font-extrabold tracking-[-0.02em] text-[#023047]">De la curiosidad a la vocación</h3>
              <p className="mt-4 max-w-[520px] text-[17px] leading-[1.7] text-[#42525c]">
                Con el tiempo entendí que muchos tratan el branding como <em>mercenarios</em>: entran, cobran y se van. Yo elegí lo contrario — quedarme, acompañar y construir marcas que sigan significando algo mucho después de la entrega.
              </p>
              <blockquote className="mt-10 border-l-4 border-[#fb8500] pl-6 text-[#023047]">
                <p className="text-[24px] font-bold leading-[1.3]">
                  "Las marcas no deberían existir solamente para vender. Deberían existir para generar confianza, conexión y significado."
                </p>
              </blockquote>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#023047] text-white">
          <div className="absolute inset-0 bg-[url('/brand/isotipo-white.png')] bg-[length:420px] bg-right-top bg-no-repeat opacity-5" />
          <span className="animate-float-a pointer-events-none absolute top-[22%] left-[6%] block h-5 w-5 bg-[#fb8500] opacity-50" style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }} />
          <span className="animate-float-c pointer-events-none absolute bottom-[18%] left-[44%] block h-3 w-3 rounded-full bg-[#8ecae6] opacity-55" />
          <div className="relative mx-auto grid max-w-[1180px] gap-16 px-[40px] py-[104px] sm:px-[22px] lg:grid-cols-[1fr_1fr]">
            <div className="rv">
              <span className="eyebrow inline-flex items-center gap-2 bg-[#0b3c53]/80 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#8ecae6]">
                El punto de partida
              </span>
              <h2 className="mt-6 text-[46px] font-extrabold leading-[1.05] tracking-[-0.03em] text-white sm:text-[38px]">
                ¿Tu marca se ve más pequeña de lo que realmente es?
              </h2>
              <div className="mt-9 rounded-tr-[12px] rounded-br-[12px] border-l-4 border-[#fb8500] bg-[#0b3c53] p-7">
                <div className="text-[12.5px] uppercase tracking-[0.14em] text-[#8ecae6]">El concepto</div>
                <div className="mt-3 text-[30px] font-extrabold text-[#fb8500]">El Emprendedor Invisible</div>
                <p className="mt-3 text-[15.5px] leading-[1.6] text-[#aebfc8]">
                  Trabajas duro y tu producto es bueno — pero el mercado no lo percibe. El problema pocas veces es el precio: es la percepción.
                </p>
              </div>
            </div>
            <div className="rv flex flex-col">
              {[
                {
                  title: "No transmite el valor real",
                  body: "Lo que ofreces vale más de lo que tu marca comunica.",
                  color: "#fb8500",
                },
                {
                  title: "La competencia se percibe mejor",
                  body: "Otros con menos producto capturan más atención.",
                  color: "#219ebc",
                },
                {
                  title: "Dependes del precio",
                  body: "Sin diferenciación, la única palanca que queda es descontar.",
                  color: "#8ecae6",
                },
                {
                  title: "El marketing no conecta",
                  body: "Inviertes en publicidad, pero el mensaje no genera vínculo.",
                  color: "#ffb703",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-[18px] border-b border-white/[0.12] py-[22px] last:border-b-0">
                  <span
                    className="mt-1.5 block h-3.5 w-3.5 shrink-0"
                    style={{ backgroundColor: item.color, clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}
                  />
                  <div>
                    <div className="text-[20px] font-bold tracking-[-0.01em] text-white">{item.title}</div>
                    <p className="mt-[5px] text-[15px] leading-[1.55] text-[#9db0ba]">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="quienes" className="bg-[#eef3f5] bg-[url('/brand/mosaico.jpeg')] bg-center [background-size:560px]">
          <div className="mx-auto grid max-w-[1180px] items-center gap-0 px-[40px] py-[104px] sm:px-[22px] lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rv aspect-[16/11] overflow-hidden rounded-[26px_0_0_26px] bg-[#dfe7ea] shadow-[0_40px_80px_-40px_rgba(2,48,71,0.5)]">
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
            <div className="rv flex flex-col justify-center self-stretch rounded-[0_26px_26px_0] bg-[#023047] px-12 py-14 text-white shadow-[0_40px_80px_-40px_rgba(2,48,71,0.6)] sm:px-7 sm:py-10">
              <span className="eyebrow inline-flex items-center gap-2 bg-[#0b3c53]/85 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#8ecae6]">
                Quiénes somos
              </span>
              <h2 className="mt-6 text-[42px] font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-[34px]">
                Brand Lab<br />by Samu
              </h2>
              <p className="mt-6 text-[16px] leading-[1.6] text-[#aebfc8]">
                Una consultoría de estrategia de marca que piensa como laboratorio: precisión técnica y calidez humana. No vendemos logos — construimos marcas con significado.
              </p>
              <div className="mt-8 flex flex-col gap-5">
                <div className="border-l-[3px] border-[#219ebc] pl-5">
                  <div className="text-[12px] uppercase tracking-[0.14em] text-[#8ecae6]">Visión</div>
                  <p className="mt-3 text-[14.5px] leading-[1.55] text-[#c9d6db]">
                    Ser una de las voces más influyentes de Centroamérica en branding estratégico y humano.
                  </p>
                </div>
                <div className="border-l-[3px] border-[#fb8500] pl-5">
                  <div className="text-[12px] uppercase tracking-[0.14em] text-[#8ecae6]">Propósito</div>
                  <p className="mt-3 text-[14.5px] leading-[1.55] text-[#c9d6db]">
                    Dar significado a las marcas para que dejen de competir por precio y empiecen a conectar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="oferta" className="border-t border-[#02222f]/10 bg-white">
          <div className="mx-auto max-w-[1180px] px-[40px] py-[104px] sm:px-[22px]">
            <div className="rv max-w-[680px]">
              <span className="eyebrow inline-flex rounded-full bg-[#eef4f6] px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#fb8500]">
                Nuestra oferta
              </span>
              <h2 className="mt-6 text-[46px] font-extrabold leading-[1.05] tracking-[-0.03em] text-[#023047] sm:text-[38px]">
                Cuatro formas de<br /> construir significado
              </h2>
            </div>
            <div className="mt-11 divide-y divide-[#02222f]/10 border-t border-[#02222f]/10">
              {offerItems.map((offer) => (
                <a
                  key={offer.n}
                  href={offer.href}
                  className="rv grid grid-cols-[120px_1fr_40px] gap-7 py-8 text-[#023047] transition hover:bg-[#f7f6f3]"
                >
                  <div className="text-[60px] font-extrabold leading-none text-[#cad7df]">{offer.n}</div>
                  <div>
                    <h3 className="text-[28px] font-extrabold tracking-[-0.02em]">{offer.title}</h3>
                    <p className="mt-3 max-w-[640px] text-[15.5px] leading-[1.7] text-[#6b7880]">{offer.desc}</p>
                  </div>
                  <span className="flex items-center justify-end text-[26px] text-[#9fb3bc]">→</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="linea-1" className="scroll-mt-[90px] bg-[#fbfaf7]">
          <div className="mx-auto max-w-[1180px] px-[40px] py-[100px] sm:px-[22px]">
            <div className="rv max-w-[720px]">
              <span className="eyebrow inline-flex rounded-full bg-[#eef4f6] px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#219ebc]">
                Línea de servicio 01
              </span>
              <h2 className="mt-6 text-[46px] font-extrabold leading-[1.05] tracking-[-0.03em] text-[#023047] sm:text-[38px]">
                Consultoría Estratégica de Marca
              </h2>
              <p className="mt-6 max-w-[640px] text-[17px] leading-[1.65] text-[#42525c]">
                Un sistema de marca en cinco fases — del descubrimiento a la transferencia — para que tu marca signifique algo por dentro y por fuera.
              </p>
            </div>
            <div className="rv mt-14 grid gap-6 md:grid-cols-5">
              {phaseItems.map((phase) => (
                <div key={phase.n}>
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl text-[19px] font-extrabold"
                    style={{ backgroundColor: phase.bg, color: phase.fg }}
                  >
                    {phase.n}
                  </div>
                  <h3 className="mt-4 text-[19px] font-bold leading-[1.15] tracking-[-0.01em] text-[#023047]">{phase.title}</h3>
                  <p className="mt-2 text-[14px] leading-[1.55] text-[#5a6a73]">{phase.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="linea-2" className="scroll-mt-[90px] bg-[#023047] text-white">
          <div className="mx-auto grid max-w-[1180px] gap-16 px-[40px] py-[100px] sm:px-[22px] lg:grid-cols-[1fr_1fr]">
            <div className="rv">
              <span className="eyebrow">Línea de servicio 02</span>
              <h2 className="mt-4 text-[46px] font-extrabold leading-[1.05] tracking-[-0.03em] text-white sm:text-[38px]">
                Registro de Marca<br /> Aliado Legal
              </h2>
              <p className="mt-[22px] max-w-[520px] text-[17px] leading-[1.65] text-[#aebfc8]">
                Tu estrategia no sirve si alguien más puede usar tu nombre. Por eso trabajo junto a un <strong className="text-white">abogado especialista en propiedad intelectual</strong> para proteger lo que construimos.
              </p>
            </div>
            <div className="rv flex flex-col gap-[18px]">
              <div className="rounded-[0_12px_12px_0] border-l-[3px] border-[#219ebc] bg-[#0b3c53] px-7 py-[26px]">
                <h3 className="text-[21px] font-bold tracking-[-0.01em] text-white">Búsqueda de disponibilidad legal</h3>
                <p className="mt-[10px] text-[15.5px] leading-[1.6] text-[#aebfc8]">
                  Integrada dentro de la fase de <strong className="text-[#8ecae6]">Definición Estratégica</strong>, sin costo adicional. Validamos que tu nombre pueda ser tuyo antes de construir sobre él.
                </p>
              </div>
              <div className="rounded-[0_12px_12px_0] border-l-[3px] border-[#fb8500] bg-[#0b3c53] px-7 py-[26px]">
                <h3 className="text-[21px] font-bold tracking-[-0.01em] text-white">Trámite formal de inscripción</h3>
                <p className="mt-[10px] text-[15.5px] leading-[1.6] text-[#aebfc8]">
                  Se cotiza aparte, con total transparencia. Te acompañamos en el proceso legal de registro ante la autoridad correspondiente.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="linea-3" className="scroll-mt-[90px] bg-white border-t border-[#02222f]/10">
          <div className="mx-auto max-w-[1180px] px-[40px] py-[100px] sm:px-[22px]">
            <div className="rv max-w-[720px]">
              <span className="eyebrow">Línea de servicio 03</span>
              <h2 className="mt-4 text-[46px] font-extrabold leading-[1.05] tracking-[-0.03em] text-[#023047] sm:text-[38px]">
                Talleres In-Company
              </h2>
              <p className="mt-5 max-w-[640px] text-[17px] leading-[1.65] text-[#42525c]">
                Sesiones de <strong className="text-[#023047]">4 horas</strong> para equipos completos. Formación práctica que convierte a las personas en embajadoras de la marca.
              </p>
            </div>
            <div className="mt-[52px] grid gap-6 lg:grid-cols-2">
              {workshopItems.map((workshop) => (
                <div key={workshop.label} className="rv rounded-[22px] border border-[#02222f]/10 bg-[#fbfaf7] px-8 py-9">
                  <div className="text-[12.5px] uppercase tracking-[0.14em] text-[#fb8500] font-bold">{workshop.label}</div>
                  <h3 className="mt-3 text-[27px] font-extrabold tracking-[-0.02em] text-[#023047]">{workshop.title}</h3>
                  {workshop.tags ? (
                    <div className="mt-[22px] flex flex-wrap gap-[10px]">
                      {workshop.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-[#eef4f6] px-[15px] py-[9px] text-[13.5px] font-semibold text-[#023047]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="mt-[22px] text-[15.5px] leading-[1.65] text-[#42525c]">{workshop.body}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="talks" className="scroll-mt-[90px] relative overflow-hidden bg-[#023047] text-white">
          <div className="pointer-events-none absolute -bottom-[70px] -left-[70px] h-[380px] w-[380px] bg-[url('/brand/isotipo-white.png')] bg-contain bg-no-repeat opacity-5" />
          <div className="relative mx-auto max-w-[1180px] px-[40px] py-[100px] sm:px-[22px]">
            <div className="rv max-w-[720px]">
              <span className="eyebrow">Línea de servicio 04</span>
              <h2 className="mt-4 text-[46px] font-extrabold leading-[1.05] tracking-[-0.03em] text-white sm:text-[38px]">
                Brand Lab Talks
              </h2>
              <p className="mt-5 max-w-[640px] text-[17px] leading-[1.65] text-[#aebfc8]">
                Charlas de <strong className="text-white">45–60 minutos</strong> para sacudir la forma en que tu organización entiende el branding.
              </p>
            </div>
            <div className="mt-[52px] grid gap-5 md:grid-cols-3">
              {talkItems.map((talk) => (
                <div key={talk.n} className="rv flex h-full flex-col gap-[14px] rounded-[20px] border border-white/[0.08] bg-[#0b3c53] px-7 py-[30px]">
                  <span className="text-[20px] font-extrabold text-[#fb8500]">{talk.n}</span>
                  <h3 className="text-[22px] font-bold leading-[1.1] tracking-[-0.01em] text-white">{talk.title}</h3>
                </div>
              ))}
            </div>
            <p className="mt-[26px] max-w-[640px] text-[14px] italic text-[#7f96a0]">
              El contenido detallado de cada charla se comparte a solicitud.
            </p>
          </div>
        </section>

        <section className="bg-white border-t border-[#02222f]/10">
          <div className="mx-auto grid max-w-[1180px] gap-16 px-[40px] py-[100px] sm:px-[22px] lg:grid-cols-[1fr_1fr]">
            <div className="rv">
              <span className="eyebrow">Para quién es esto</span>
              <h2 className="mt-[18px] text-[46px] font-extrabold leading-[1.05] tracking-[-0.03em] text-[#023047] sm:text-[38px]">
                Si tu marca merece<br /> ser vista en grande
              </h2>
              <div className="mt-[34px] flex flex-col">
                {audienceItems.map((item) => (
                  <div key={item.label} className="flex items-center gap-4 border-b border-[#02222f]/10 py-4 last:border-b-0">
                    <span
                      className="block h-3 w-3 shrink-0"
                      style={{ backgroundColor: item.color, clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}
                    />
                    <span className="text-[20px] font-semibold tracking-[-0.01em] text-[#023047]">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rv flex flex-col justify-center gap-[22px]">
              <p className="text-[18px] leading-[1.7] text-[#42525c]">
                Esto es para quienes entienden que la marca es una <strong className="text-[#023047]">decisión de negocio</strong>, no un adorno. Para quienes están listos para invertir en percepción, no solo en publicidad.
              </p>
              <p className="text-[18px] leading-[1.7] text-[#42525c]">
                Si buscas el logo más barato, no somos para ti. Si buscas una marca que signifique algo y sostenga tu crecimiento — <strong className="text-[#fb8500]">hablemos</strong>.
              </p>
            </div>
          </div>
        </section>

        <section id="porque" className="scroll-mt-[90px] relative overflow-hidden bg-[#023047] text-white">
          <div className="pointer-events-none absolute -top-[70px] -right-[80px] h-[420px] w-[420px] bg-[url('/brand/isotipo-white.png')] bg-contain bg-no-repeat opacity-5" />
          <span className="animate-float-b pointer-events-none absolute top-[26%] left-[5%] block h-4 w-4 bg-[#fb8500] opacity-50" style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }} />
          <span className="animate-float-c pointer-events-none absolute bottom-[22%] right-[8%] block h-3 w-3 rounded-full bg-[#219ebc] opacity-50" />
          <div className="relative mx-auto max-w-[1180px] px-[40px] py-[100px] sm:px-[22px]">
            <div className="rv max-w-[680px]">
              <span className="eyebrow">Por qué Brand Lab</span>
              <h2 className="mt-[18px] text-[46px] font-extrabold leading-[1.05] tracking-[-0.03em] text-white sm:text-[38px]">
                Estrategia con rigor,<br /> marca con alma
              </h2>
            </div>
            <div className="mt-[52px] grid gap-px border border-white/10 bg-white/10 p-px md:grid-cols-[1fr_1fr_1fr]">
              {whyItems.map((item) => (
                <div key={item.n} className="rv rounded-[0.75rem] bg-[#023047] p-8">
                  <div className="text-[18px] font-extrabold text-[#fb8500]">{item.n}</div>
                  <h3 className="mt-4 text-[22px] font-bold text-white">{item.title}</h3>
                  <p className="mt-3 text-[15px] leading-[1.6] text-[#9db0ba]">{item.body}</p>
                </div>
              ))}
              <div className="rv rounded-[0.75rem] bg-[#fb8500] p-8 flex items-center">
                <span className="text-[26px] font-extrabold italic text-[#023047]">We don't sell,<br /> we mean!</span>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonios" className="bg-[#f4f1ea] border-t border-[#02222f]/10">
          <div className="mx-auto max-w-[1180px] px-[40px] py-[96px] sm:px-[22px]">
            <div className="rv max-w-[720px]">
              <span className="eyebrow">Testimonios</span>
              <h2 className="mt-[18px] text-[46px] font-extrabold leading-[1.05] tracking-[-0.03em] text-[#023047] sm:text-[38px]">
                Historias de marcas que decidieron significar
              </h2>
            </div>
            <div className="rv mt-12 flex flex-col gap-[18px] md:flex-row md:items-center">
              <button
                type="button"
                onClick={() => setTestimonialIndex((current) => (current - 1 + testimonialItems.length) % testimonialItems.length)}
                className="tarw hidden h-[46px] w-[46px] items-center justify-center rounded-full border border-[#023047]/[0.18] bg-white text-[#023047] transition hover:bg-[#023047] hover:text-white md:flex"
                aria-label="Anterior testimonio"
              >
                ←
              </button>
              <div className="tfade relative flex-1 overflow-hidden rounded-[22px] border border-[#023047]/[0.08] bg-white p-10 shadow-[0_26px_60px_-44px_rgba(2,48,71,0.6)] md:flex md:gap-[30px]">
                <div className="relative h-[118px] w-[118px] shrink-0 overflow-hidden rounded-full bg-[#eef4f6]">
                  <Image
                    src={activeTestimonial.image}
                    alt={activeTestimonial.name}
                    fill
                    sizes="118px"
                    className="object-cover"
                  />
                </div>
                <div className="mt-8 md:mt-0">
                  <div className="text-[48px] leading-[0.9] text-[#fb8500]">“</div>
                  <p className="mt-[18px] text-[16px] leading-[1.66] text-[#33454f]">{activeTestimonial.quote}</p>
                  <div className="mt-[18px] text-[15.5px] font-bold text-[#023047]">{activeTestimonial.name}</div>
                  <div className="mt-[3px] text-[12.5px] text-[#6b7880]">{activeTestimonial.role}</div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setTestimonialIndex((current) => (current + 1) % testimonialItems.length)}
                className="tarw hidden h-[46px] w-[46px] items-center justify-center rounded-full border border-[#023047]/[0.18] bg-white text-[#023047] transition hover:bg-[#023047] hover:text-white md:flex"
                aria-label="Siguiente testimonio"
              >
                →
              </button>
            </div>
            <div className="mt-[24px] flex justify-center items-center gap-[9px]">
              {testimonialItems.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  aria-label={`Testimonio ${idx + 1}`}
                  onClick={() => setTestimonialIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${testimonialIndex === idx ? "w-[26px] bg-[#fb8500]" : "w-2 bg-[#023047]/20"}`}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white border-t border-[#02222f]/10">
          <div className="mx-auto max-w-[1180px] px-[40px] py-[96px] sm:px-[22px]">
            <div className="rv max-w-[720px]">
              <span className="eyebrow">Trayectoria formativa</span>
              <h2 className="mt-[18px] text-[46px] font-extrabold leading-[1.05] tracking-[-0.03em] text-[#023047] sm:text-[38px]">
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

        <section id="contacto" className="scroll-mt-[90px] relative overflow-hidden bg-[#023047] text-white">
          <div className="pointer-events-none absolute -bottom-[90px] -left-[70px] h-[420px] w-[420px] bg-[url('/brand/isotipo-white.png')] bg-contain bg-no-repeat opacity-5" />
          <span className="animate-float-a pointer-events-none absolute top-[20%] right-[6%] block h-[18px] w-[18px] bg-[#fb8500] opacity-45" style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }} />
          <div className="relative mx-auto grid max-w-[1180px] gap-[60px] px-[40px] py-[104px] sm:px-[22px] lg:grid-cols-[0.85fr_1.15fr]">
            <div className="rv relative overflow-hidden rounded-[26px] bg-[#0b3c53] shadow-[0_40px_80px_-40px_rgba(0,0,0,0.6)] aspect-[3/4]">
              <Image
                src="/brand/samuel-cafe.jpg"
                alt="Samuel García trabajando"
                fill
                sizes="(max-width: 1024px) 100vw, 540px"
                className="object-cover object-top"
              />
            </div>
            <div className="rv">
              <span className="eyebrow">Sobre Samuel</span>
              <h2 className="mt-[18px] text-[46px] font-extrabold leading-[1.05] tracking-[-0.03em] text-white sm:text-[38px]">
                Estratega de marca con<br />+10 años de experiencia
              </h2>
              <p className="mt-[22px] max-w-[560px] text-[17px] leading-[1.7] text-[#aebfc8]">
                He acompañado a marcas, equipos y líderes de toda Centroamérica a transformar la forma en que son percibidos. Mi trabajo conecta estrategia, negocio y humanidad — porque una marca con significado no se improvisa, se construye.
              </p>
              <blockquote className="mt-[30px] border-l-[3px] border-[#fb8500] pl-6">
                <p className="text-[23px] font-bold leading-[1.3] text-white">
                  "El branding no es lujo. Es dirección. Es identidad. Es claridad. Es confianza."
                </p>
              </blockquote>
              <div className="mt-[34px]">
                <a
                  href="https://wa.me/50557400875?text=Hola%20Samuel,%20quiero%20una%20sesion%20para%20mi%20marca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btnp inline-flex rounded-full bg-[#fb8500] px-8 py-4 text-[15.5px] font-semibold text-white"
                >
                  Agenda una sesión →
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer id="footer" className="scroll-mt-[70px] bg-[#02222f] text-[#eaf1f3]">
          <div className="mx-auto max-w-[1180px] px-[40px] pt-16 pb-9 sm:px-[22px]">
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
                  <a className="navlink" href="#historia">Historia</a>
                  <a className="navlink" href="#quienes">Quiénes somos</a>
                  <a className="navlink" href="#oferta">Oferta</a>
                  <a className="navlink" href="#talks">Talks</a>
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
              <span>Centroamérica</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
