"use client";

import { useEffect, useState } from "react";

/* -------------------------------------------------------------------------- */
/*  Data                                                                       */
/* -------------------------------------------------------------------------- */

const NAV = [
  { label: "Sobre mí", href: "#sobre" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Testimonios", href: "#testimonios" },
];

const CLIENTS = [
  "NORDA",
  "Cafeto & Co",
  "Lúmen",
  "Raíz",
  "Vértice",
  "Aurora",
  "Kanou",
  "Meridian",
];

const TAGS = [
  "Estratégica",
  "Humana",
  "Elegante",
  "Reflexiva",
  "Cercana",
  "Inteligente",
];

const SERVICES = [
  {
    n: "01",
    color: "#fb8500",
    fg: "#fff",
    title: "Estrategia de marca",
    body: "Definimos el rumbo: propósito, posicionamiento y significado que guían cada decisión.",
  },
  {
    n: "02",
    color: "#219ebc",
    fg: "#fff",
    title: "Branding & identidad visual",
    body: "Sistemas de marca coherentes que se ven, se sienten y se recuerdan.",
  },
  {
    n: "03",
    color: "#ffb703",
    fg: "#023047",
    title: "Naming & mensajes",
    body: "Nombres y mensajes que comunican valor y conectan de persona a persona.",
  },
  {
    n: "04",
    color: "#8ecae6",
    fg: "#023047",
    title: "Posicionamiento",
    body: "Un lugar claro en la mente de tu audiencia para dejar de competir por precio.",
  },
  {
    n: "05",
    color: "#fb8500",
    fg: "#fff",
    title: "Consultoría & mentoría",
    body: "Acompañamiento 1:1 para líderes que quieren construir marcas con dirección.",
  },
  {
    n: "06",
    color: "#219ebc",
    fg: "#fff",
    title: "Talleres & educación",
    body: "Formación práctica para equipos que quieren pensar el branding estratégicamente.",
  },
];

const PROJECTS = [
  {
    cat: "Branding",
    dark: false,
    title: "Sistema de marca — Empresa de servicios",
    body: "De invisible a memorable: identidad, mensajes y posicionamiento en un solo sistema coherente.",
  },
  {
    cat: "Branding",
    dark: false,
    title: "Marca personal — Consultor",
    body: "Construcción de autoridad y percepción premium para un profesional que buscaba diferenciarse.",
  },
  {
    cat: "Marketing",
    dark: true,
    title: "Campaña de lanzamiento",
    body: "Estrategia de contenido que conecta emoción y negocio para un lanzamiento con propósito.",
  },
  {
    cat: "Marketing",
    dark: true,
    title: "Posicionamiento digital",
    body: "Narrativa de marca aplicada a redes y conversión, con mensajes claros y humanos.",
  },
];

const TIMELINE = [
  {
    dot: "#fb8500",
    when: "2024 — HOY",
    role: "Fundador — Brand Lab by Samu",
    body: "Plataforma de pensamiento estratégico y branding humano. Educación, consultoría y desarrollo de marcas con significado.",
  },
  {
    dot: "#219ebc",
    when: "2021 — 2024",
    role: "Estratega de marca senior",
    body: "Dirección de estrategia y posicionamiento para PYMEs y marcas personales en crecimiento.",
  },
  {
    dot: "#8ecae6",
    when: "2019 — 2021",
    role: "Consultor de branding",
    body: "Acompañamiento a emprendedores para transformar percepción y diferenciación de sus negocios.",
  },
  {
    dot: "#c8d6dc",
    when: "2017 — 2019",
    role: "Comunicación & diseño de marca",
    body: "Primeros años construyendo identidades y aprendiendo el poder de la percepción.",
  },
];

const TESTIMONIALS = [
  {
    dark: false,
    avatarBg: "#023047",
    initials: "MF",
    quote:
      "Samuel nos ayudó a entender quiénes somos como marca. Dejamos de competir por precio y empezaron a elegirnos por lo que representamos.",
    name: "María Fernanda",
    role: "Fundadora · Cafeto & Co",
  },
  {
    dark: true,
    avatarBg: "#fb8500",
    initials: "CM",
    quote:
      "Claridad total. Su forma de pensar el branding cambió la dirección de nuestro negocio por completo.",
    name: "Carlos Mendoza",
    role: "CEO · Vértice",
  },
  {
    dark: false,
    avatarBg: "#219ebc",
    initials: "AR",
    quote:
      "Humano, estratégico y directo. El mejor proceso de marca que hemos vivido como equipo.",
    name: "Ana Robles",
    role: "Dir. de Marketing · Aurora",
  },
];

const CONTACTS = [
  { icon: "✉", label: "samuelgarcia@brandlabni.com", href: "mailto:samuelgarcia@brandlabni.com" },
  { icon: "✆", label: "+505 5740 0875", href: "tel:+50557400875" },
  { icon: "◎", label: "@holasoysamuel.brand", href: "https://instagram.com/holasoysamuel.brand" },
  { icon: "in", label: "Samuel García · LinkedIn", href: "https://www.linkedin.com/in/samuel-garc%C3%ADa-2020/" },
];

/* -------------------------------------------------------------------------- */
/*  Small helpers                                                              */
/* -------------------------------------------------------------------------- */

const EYEBROW = "text-[13px] font-bold tracking-[0.14em] uppercase text-orange";
const H2 = "text-[46px] leading-[1.05] tracking-[-0.03em] font-extrabold";
const Wordmark = ({ light = false }: { light?: boolean }) => (
  <span className={`font-extrabold text-lg tracking-[-0.02em] ${light ? "text-white" : "text-navy"}`}>
    BRAND<span className="text-orange">LAB</span>
    <span className={`text-[10px] align-super ${light ? "text-sky" : "text-[#8a97a0]"}`}>.</span>
  </span>
);

/* -------------------------------------------------------------------------- */
/*  Page                                                                       */
/* -------------------------------------------------------------------------- */

export default function Home() {
  const [sent, setSent] = useState(false);

  // scroll-reveal
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>(".rv");
    if (!("IntersectionObserver" in window)) {
      nodes.forEach((n) => n.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    nodes.forEach((n) => io.observe(n));
    const safety = setTimeout(() => nodes.forEach((n) => n.classList.add("in")), 1600);
    return () => {
      io.disconnect();
      clearTimeout(safety);
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* ============ NAV ============ */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-paper/80 border-b border-navy/10">
        <div className="max-w-container mx-auto flex items-center justify-between px-10 py-4">
          <a href="#inicio" className="flex items-center gap-3">
            <img src="/brand/isotipo-navy.png" alt="" className="w-8 h-auto" />
            <Wordmark />
          </a>
          <div className="hidden md:flex items-center gap-8 text-[14.5px] font-medium text-[#3a4a54]">
            {NAV.map((l) => (
              <a key={l.href} className="navlink" href={l.href}>
                {l.label}
              </a>
            ))}
          </div>
          <a href="#contacto" className="btnp bg-navy text-white font-semibold text-sm px-[22px] py-[11px] rounded-full">
            Hablemos
          </a>
        </div>
      </nav>

      {/* ============ HERO ============ */}
      <header id="inicio" className="relative overflow-hidden scroll-mt-[70px]">
        <div className="max-w-container mx-auto grid md:grid-cols-[1.05fr_.95fr] items-stretch min-h-[620px]">
          <div className="flex flex-col justify-center pt-[70px] pb-[78px] pl-10 pr-5">
            <div className="rv self-start inline-flex items-center gap-[9px] bg-[#eef4f6] text-navy text-[12.5px] font-semibold tracking-[0.04em] uppercase px-[15px] py-2 rounded-full mb-[26px]">
              <span className="w-[7px] h-[7px] rounded-full bg-orange" />
              Brand Strategist · Fundador
            </div>
            <h1 className="rv m-0 text-[76px] leading-[.98] tracking-[-0.035em] font-extrabold text-navy">
              Las marcas
              <br />
              no venden.
              <br />
              <span className="text-orange">Significan.</span>
            </h1>
            <p className="rv mt-7 text-lg leading-[1.55] text-[#42525c] max-w-[450px]">
              Soy Samuel. Ayudo a empresas y emprendedores a construir marcas con significado, claridad y
              dirección estratégica — para dejar de competir por precio.
            </p>
            <div className="rv flex gap-[14px] mt-9">
              <a href="#contacto" className="btnp bg-orange text-white font-semibold text-[15.5px] px-[30px] py-[15px] rounded-full">
                Agenda una sesión
              </a>
              <a href="#sobre" className="btno bg-transparent text-navy font-semibold text-[15.5px] px-7 py-[15px] rounded-full border-[1.5px] border-navy/20">
                Conoce mi enfoque
              </a>
            </div>
            <div className="rv flex gap-11 mt-[50px]">
              <div>
                <div className="text-[30px] font-extrabold text-navy tracking-[-0.02em]">8&nbsp;años</div>
                <div className="text-[13px] text-[#6b7880] font-medium">de experiencia</div>
              </div>
              <div>
                <div className="text-[30px] font-extrabold text-navy tracking-[-0.02em]">Centroamérica</div>
                <div className="text-[13px] text-[#6b7880] font-medium">alcance regional</div>
              </div>
            </div>
          </div>
          <div className="relative flex items-end justify-center pl-5 pr-10">
            <div className="absolute top-[60px] right-11 w-[150px] h-[150px] bg-orange rounded-full z-0 animate-floaty" />
            <div className="absolute bottom-20 left-[2px] w-[74px] h-[74px] border-2 border-blue rounded-full z-0" />
            <div
              className="rv relative z-[2] w-[400px] h-[540px] overflow-hidden bg-[#dfe7ea]"
              style={{ borderRadius: "200px 200px 22px 22px", boxShadow: "0 40px 80px -30px rgba(2,48,71,.5)" }}
            >
              <img src="/brand/samuel-3.jpg" alt="Samuel García" className="w-full h-full object-cover object-top" />
            </div>
          </div>
        </div>
      </header>

      {/* ============ CLIENTES ============ */}
      <section id="clientes" className="scroll-mt-[70px] border-y border-navy/10 bg-white py-[34px]">
        <p className="text-center m-0 mb-6 text-[12.5px] font-semibold tracking-[0.14em] uppercase text-[#8a97a0]">
          Marcas y equipos que han confiado en el proceso
        </p>
        <div
          className="relative overflow-hidden"
          style={{
            WebkitMaskImage: "linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)",
            maskImage: "linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)",
          }}
        >
          <div className="flex gap-16 w-max animate-marq items-center font-extrabold text-[26px] tracking-[-0.02em] text-navy-2 opacity-55">
            {[...CLIENTS, ...CLIENTS].map((c, i) => (
              <span key={i} className="whitespace-nowrap">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SOBRE MÍ ============ */}
      <section id="sobre" className="scroll-mt-[70px] max-w-container mx-auto px-10 pt-[110px] pb-[100px]">
        <div className="grid md:grid-cols-[.85fr_1.15fr] gap-[70px] items-center">
          <div className="rv relative">
            <div className="absolute -top-[22px] -left-[22px] w-[120px] h-[120px] bg-sky rounded-3xl z-0" />
            <div
              className="relative z-[2] rounded-[26px] overflow-hidden aspect-[4/5] bg-[#dfe7ea]"
              style={{ boxShadow: "0 40px 80px -40px rgba(2,48,71,.5)" }}
            >
              <img src="/brand/samuel-suit.jpg" alt="Samuel García" className="w-full h-full object-cover" style={{ objectPosition: "center 15%" }} />
            </div>
            <div
              className="absolute z-[3] -bottom-5 -right-4 bg-navy text-white rounded-[18px] px-5 py-4"
              style={{ boxShadow: "0 20px 40px -20px rgba(2,48,71,.6)" }}
            >
              <div className="font-extrabold text-[15px]">Samuel García</div>
              <div className="text-[12.5px] text-sky font-medium">Estratega de marca</div>
            </div>
          </div>
          <div className="rv">
            <div className={`${EYEBROW} mb-5`}>Sobre mí</div>
            <h2 className={`${H2} text-navy m-0`}>
              Le doy significado
              <br />a las marcas.
            </h2>
            <p className="mt-6 text-[17px] leading-[1.65] text-[#42525c]">
              Fundé <strong className="text-navy">Brand Lab</strong> para cambiar la forma en que Centroamérica
              entiende el branding. Creo que una marca no nace en un logo — nace en la percepción, las emociones y
              el significado que deja en las personas.
            </p>
            <p className="mt-4 text-[17px] leading-[1.65] text-[#42525c]">
              Mi trabajo conecta estrategia, branding, negocio y humanidad para construir marcas que generan
              confianza y diferenciación real. Premium sin arrogancia; estratégico y humano.
            </p>
            <div className="flex flex-wrap gap-[10px] mt-7">
              {TAGS.map((t) => (
                <span key={t} className="bg-[#eef4f6] text-navy text-[13.5px] font-semibold px-4 py-[9px] rounded-full">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ SERVICIOS ============ */}
      <section id="servicios" className="scroll-mt-[70px] bg-navy relative overflow-hidden">
        <img src="/brand/isotipo-white.png" alt="" className="absolute -top-[60px] -right-20 w-[460px] opacity-[0.05]" />
        <div className="max-w-container mx-auto px-10 pt-[110px] pb-[116px] relative z-[2]">
          <div className="rv max-w-[640px]">
            <div className={`${EYEBROW} mb-5`}>Servicios</div>
            <h2 className={`${H2} text-white m-0`}>
              Cómo construimos
              <br />
              marcas con significado
            </h2>
            <p className="mt-[22px] text-[17px] leading-[1.6] text-[#aebfc8]">
              Del pensamiento estratégico a la ejecución. Cada servicio conecta percepción, emoción y negocio.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-[22px] mt-14">
            {SERVICES.map((s) => (
              <div key={s.n} className="svc rv bg-navy-2 border border-white/10 rounded-[22px] px-[26px] pt-[30px] pb-8">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center font-extrabold text-base"
                  style={{ background: s.color, color: s.fg }}
                >
                  {s.n}
                </div>
                <h3 className="mt-[22px] mb-[10px] text-[21px] font-bold text-white tracking-[-0.02em]">{s.title}</h3>
                <p className="m-0 text-[15px] leading-[1.6] text-[#9db0ba]">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PROYECTOS ============ */}
      <section id="proyectos" className="scroll-mt-[70px] max-w-container mx-auto px-10 pt-[110px] pb-[100px]">
        <div className="rv flex justify-between items-end flex-wrap gap-5 mb-[52px]">
          <div className="max-w-[640px]">
            <div className={`${EYEBROW} mb-5`}>Proyectos</div>
            <h2 className={`${H2} text-navy m-0`}>Casos con significado</h2>
          </div>
          <p className="m-0 max-w-[340px] text-base leading-[1.6] text-[#6b7880]">
            Primero branding, después marketing. Cada proyecto empieza con estrategia y termina en resultados que se
            sienten.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-[26px]">
          {PROJECTS.map((p) => (
            <a
              key={p.title}
              href="#contacto"
              className="proj rv block rounded-3xl overflow-hidden bg-white border border-navy/10"
              style={{ boxShadow: "0 20px 50px -35px rgba(2,48,71,.35)" }}
            >
              <div
                className="h-[280px] overflow-hidden relative"
                style={{
                  background: p.dark
                    ? "repeating-linear-gradient(135deg,#fff2e2,#fff2e2 14px,#ffe9d0 14px,#ffe9d0 28px)"
                    : "repeating-linear-gradient(135deg,#eaf1f3,#eaf1f3 14px,#e2ebee 14px,#e2ebee 28px)",
                }}
              >
                <div
                  className="projimg absolute inset-0 flex flex-col items-center justify-center gap-2"
                  style={{ color: p.dark ? "#c98a44" : "#7f929c" }}
                >
                  <img src="/brand/isotipo-navy.png" alt="" className="w-14" style={{ opacity: p.dark ? 0.3 : 0.35 }} />
                  <span className="font-mono font-semibold text-xs tracking-[0.06em]">imagen del proyecto</span>
                </div>
                <span
                  className="absolute top-[18px] left-[18px] text-white text-xs font-semibold px-[13px] py-[6px] rounded-full"
                  style={{ background: p.dark ? "#fb8500" : "#023047" }}
                >
                  {p.cat}
                </span>
              </div>
              <div className="px-7 pt-[26px] pb-[30px]">
                <h3 className="m-0 text-[22px] font-bold tracking-[-0.02em] text-navy">{p.title}</h3>
                <p className="mt-[10px] text-[15px] leading-[1.6] text-[#6b7880]">{p.body}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ============ EXPERIENCIA ============ */}
      <section id="experiencia" className="scroll-mt-[70px] bg-white border-t border-navy/10">
        <div className="max-w-container mx-auto px-10 py-[110px] grid md:grid-cols-[.8fr_1.2fr] gap-[70px]">
          <div className="rv">
            <div className={`${EYEBROW} mb-5`}>Experiencia</div>
            <h2 className={`${H2} text-navy m-0`}>Un camino construido con propósito</h2>
            <p className="mt-6 text-[17px] leading-[1.65] text-[#42525c]">
              Años convirtiendo empresas invisibles en marcas relevantes, humanas y memorables en toda Centroamérica.
            </p>
            <div className="mt-8 flex items-center gap-[14px]">
              <img src="/brand/seal-orange.png" alt="" className="w-[58px] h-[58px]" />
              <span className="text-[15px] font-semibold text-navy leading-[1.4]">
                We don&apos;t sell,
                <br />
                we mean!
              </span>
            </div>
          </div>
          <div className="rv border-l-2 border-[#e6e2d9] pl-[38px] flex flex-col gap-10">
            {TIMELINE.map((t) => (
              <div key={t.role} className="relative">
                <span
                  className="absolute -left-[47px] top-[2px] w-4 h-4 rounded-full border-[3px] border-white"
                  style={{ background: t.dot, boxShadow: `0 0 0 2px ${t.dot}` }}
                />
                <div className="text-[13px] font-bold tracking-[0.04em]" style={{ color: t.dot === "#c8d6dc" ? "#8a97a0" : t.dot }}>
                  {t.when}
                </div>
                <h3 className="mt-[6px] mb-[6px] text-[22px] font-bold text-navy tracking-[-0.02em]">{t.role}</h3>
                <p className="m-0 text-[15.5px] leading-[1.6] text-[#6b7880]">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIOS ============ */}
      <section id="testimonios" className="scroll-mt-[70px] max-w-container mx-auto px-10 pt-[110px] pb-[100px]">
        <div className="rv text-center max-w-[620px] mx-auto mb-14">
          <div className={`${EYEBROW} mb-5`}>Testimonios</div>
          <h2 className={`${H2} text-navy m-0`}>Lo que dicen las marcas</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className={`rv rounded-[22px] p-[34px_30px] ${t.dark ? "bg-navy" : "bg-white border border-navy/10"}`}
              style={{ boxShadow: t.dark ? "0 30px 60px -35px rgba(2,48,71,.6)" : "0 20px 50px -40px rgba(2,48,71,.4)" }}
            >
              <div className="text-yellow text-[19px] tracking-[2px]">★★★★★</div>
              <p className={`mt-[18px] mb-[26px] text-[16.5px] leading-[1.6] font-medium ${t.dark ? "text-[#eaf1f3]" : "text-[#2f3f48]"}`}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-[13px]">
                <div
                  className="w-[46px] h-[46px] rounded-full text-white flex items-center justify-center font-bold text-base"
                  style={{ background: t.avatarBg }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className={`font-bold text-[15px] ${t.dark ? "text-white" : "text-navy"}`}>{t.name}</div>
                  <div className={`text-[13px] ${t.dark ? "text-sky" : "text-[#8a97a0]"}`}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ CONTACTO ============ */}
      <section id="contacto" className="scroll-mt-[70px] bg-navy relative overflow-hidden">
        <img src="/brand/isotipo-white.png" alt="" className="absolute -bottom-[90px] -left-[70px] w-[420px] opacity-[0.05]" />
        <div className="max-w-container mx-auto px-10 py-[110px] relative z-[2] grid md:grid-cols-2 gap-[70px] items-start">
          <div className="rv">
            <div className={`${EYEBROW} mb-5`}>Contáctenos</div>
            <h2 className="text-[48px] leading-[1.03] tracking-[-0.03em] font-extrabold text-white m-0">
              Construyamos una marca que signifique algo
            </h2>
            <p className="mt-6 mb-10 text-[17px] leading-[1.6] text-[#aebfc8] max-w-[440px]">
              Cuéntame sobre tu marca o tu idea. Respondo personalmente y agendamos una primera conversación sin costo.
            </p>
            <div className="flex flex-col gap-[18px]">
              {CONTACTS.map((c) => (
                <a key={c.href} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} className="flex items-center gap-[15px]">
                  <span className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-orange text-[17px] font-bold">
                    {c.icon}
                  </span>
                  <span className="text-[#eaf1f3] text-base font-medium">{c.label}</span>
                </a>
              ))}
            </div>
          </div>
          <form
            className="rv bg-navy-2 border border-white/10 rounded-3xl px-8 py-[34px]"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-[13px] font-semibold text-sky mb-2">Nombre</label>
                <input type="text" placeholder="Tu nombre" className="w-full bg-navy border-[1.5px] border-white/10 rounded-xl px-4 py-[14px] text-white text-[15px]" />
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-sky mb-2">Correo</label>
                <input type="email" placeholder="tucorreo@empresa.com" className="w-full bg-navy border-[1.5px] border-white/10 rounded-xl px-4 py-[14px] text-white text-[15px]" />
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-sky mb-2">¿En qué te ayudo?</label>
                <textarea rows={4} placeholder="Cuéntame sobre tu marca…" className="w-full bg-navy border-[1.5px] border-white/10 rounded-xl px-4 py-[14px] text-white text-[15px] resize-y" />
              </div>
              <button type="submit" className="btnp mt-1 bg-orange text-white font-bold text-base p-4 border-none rounded-xl cursor-pointer">
                {sent ? "Mensaje enviado ✓" : "Enviar mensaje"}
              </button>
              {sent && <p className="m-0 text-center text-sm text-sky font-medium">¡Gracias! Te responderé muy pronto.</p>}
            </div>
          </form>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="bg-ink text-[#eaf1f3]">
        <div className="max-w-container mx-auto px-10 pt-16 pb-10">
          <div className="grid md:grid-cols-[1.4fr_1fr_1fr] gap-10 pb-12 border-b border-white/10">
            <div>
              <div className="flex items-center gap-3 mb-[18px]">
                <img src="/brand/isotipo-white.png" alt="" className="w-[34px] h-auto" />
                <Wordmark light />
              </div>
              <p className="m-0 max-w-[340px] text-[15px] leading-[1.6] text-[#94a8b2]">
                Branding con significado. Transformamos marcas invisibles en marcas relevantes, humanas y memorables.
              </p>
              <p className="mt-[18px] text-[17px] font-bold text-orange italic">We don&apos;t sell, we mean!</p>
            </div>
            <div>
              <div className="text-[13px] font-bold tracking-[0.1em] uppercase text-[#5f7580] mb-4">Navegación</div>
              <div className="flex flex-col gap-[11px] text-[15px] text-[#b6c6ce]">
                {NAV.filter((n) => n.href !== "#testimonios").map((l) => (
                  <a key={l.href} className="navlink" href={l.href}>
                    {l.label}
                  </a>
                ))}
                <a className="navlink" href="#contacto">
                  Contacto
                </a>
              </div>
            </div>
            <div>
              <div className="text-[13px] font-bold tracking-[0.1em] uppercase text-[#5f7580] mb-4">Contacto</div>
              <div className="flex flex-col gap-[11px] text-[15px] text-[#b6c6ce]">
                {CONTACTS.map((c) => (
                  <a key={c.href} className="navlink" href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined}>
                    {c.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center flex-wrap gap-3 pt-[26px] text-[13.5px] text-[#6b8089]">
            <span>© 2026 Brand Lab by Samu. Todos los derechos reservados.</span>
            <span>Samuel García · Brand Strategist</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
