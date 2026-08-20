"use client";

import Image from "next/image";
import { useState } from "react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Wordmark } from "@/components/wordmark";

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
];

const discoverItems = [
  "Branding como estrategia de negocio",
  "Diferenciación y posicionamiento",
  "Comportamiento del consumidor",
  "Experiencia de marca",
  "Reputación y confianza",
  "Marcas que permanecen en el tiempo",
];

const agendaItems = [
  { time: "9:00 a.m.", act: "Registro de asistentes" },
  { time: "9:30 a.m.", act: "Bienvenida" },
  { time: "9:40 a.m.", act: "Conferencia \"Las marcas no venden, significan\"" },
  { time: "10:40 a.m.", act: "Panel de discusión: Branding, Consumidor y Reputación" },
  { time: "11:20 a.m.", act: "Reflexión final y cierre" },
  { time: "11:30 a.m.", act: "Coffee Break & Networking" },
];

const takeaways = [
  "Comprender el branding desde una perspectiva estratégica",
  "Identificar oportunidades para diferenciar tu negocio",
  "Fortalecer tu propuesta de valor",
  "Entender cómo construir confianza y preferencia",
  "Tomar decisiones con una visión de largo plazo",
];

const panelCards = [
  { n: "01", title: "Branding y Estrategia" },
  { n: "02", title: "Comportamiento del Consumidor" },
  { n: "03", title: "Comunicación y Reputación" },
];

const audienceItems = [
  "Empresarios",
  "Emprendedores",
  "Gerentes y Directivos",
  "Marketing y Comunicación",
  "Consultores",
  "Estudiantes universitarios",
];

export default function EventosPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const openModal = (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    event.preventDefault();
    setModalOpen(true);
    setSent(false);
  };

  const closeModal = () => setModalOpen(false);

  const stop = (event: React.MouseEvent<HTMLDivElement>) => event.stopPropagation();

  const onRegister = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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

    window.open(`https://wa.me/50557400875?text=${encodeURIComponent(msg)}`, "_blank");
    setSent(true);
  };

  return (
    <div className="overflow-x-hidden bg-[#04141d] text-[#c9d6db]">
      <ScrollReveal />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#04141d]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between px-[40px] py-4 sm:px-[22px]">
          <a href="/" className="flex items-center gap-3">
            <Image src="/brand/isotipo-white.png" alt="Brand Lab" width={28} height={28} className="h-7 w-auto" />
            <Wordmark light />
          </a>
          <div className="hidden md:flex items-center gap-6 text-[14px] font-medium text-[#9fb3bc]">
            <a className="navlink" href="#evento">El evento</a>
            <a className="navlink" href="#agenda">Agenda</a>
            <a className="navlink" href="/blog">Blog Brand</a>
            <a className="navlink" href="/">← Volver al sitio</a>
          </div>
          <a
            href="#evento"
            onClick={openModal}
            className="btnp rounded-full bg-[#fb8500] px-5 py-3 text-[13.5px] font-semibold text-[#04141d]"
          >
            Comprar entrada
          </a>
        </div>
      </header>

      <main>
        <header className="relative bg-[#0d3a56]">
          <Image
            src="/brand/evento-banner-v3.png"
            alt="Conferencia — Las marcas no venden, significan"
            width={3840}
            height={1422}
            sizes="100vw"
            className="h-auto w-full"
            priority
          />
        </header>

        <section className="bg-white py-[48px]">
          <div className="mx-auto max-w-[1100px] px-[40px] sm:px-[22px]">
            <p className="text-center text-[12.5px] font-bold uppercase tracking-[0.16em] text-[#fb8500]">
              Patrocinan
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
              {mainSponsorLogos.map((logo) => (
                <div
                  key={logo.alt}
                  className="flex h-[150px] w-[190px] items-center justify-center overflow-hidden rounded-2xl border border-[#02222f]/10 bg-white p-6 shadow-[0_20px_40px_-30px_rgba(2,34,47,0.4)]"
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

            <div className="mt-10 flex items-center gap-6 border-t border-[#02222f]/10 pt-8">
              <span className="shrink-0 text-[12.5px] font-bold uppercase tracking-[0.16em] text-[#6b7880]">
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

        <section id="evento" className="scroll-mt-[70px] bg-[#023047] text-white">
          <div className="mx-auto max-w-[1100px] px-[40px] py-24 sm:px-[22px] sm:py-[60px]">
            <div className="rv max-w-[680px]">
              <div className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#fb8500]">
                El evento
              </div>
              <h2 className="mt-4 text-[44px] font-extrabold leading-[1.06] tracking-[-0.03em] text-white sm:text-[32px]">
                Una conferencia para ir más allá del marketing
              </h2>
              <p className="mt-[18px] text-[17px] leading-[1.7] text-[#aebfc8]">
                Mientras todos hablan de marketing, es momento de hablar de marcas. Descubre cómo el branding se convierte en la estrategia que impulsa la <strong className="text-white">diferenciación, la confianza y el crecimiento sostenible</strong> de los negocios.
              </p>
              <p className="mt-4 text-[17px] leading-[1.7] text-[#aebfc8]">
                Reserva tu lugar y sé parte de la conversación que está transformando la manera de construir marcas.
              </p>
            </div>
            <div className="rv mt-11 grid gap-[34px] lg:grid-cols-[1fr_.9fr] lg:items-start">
              <div className="grid grid-cols-2 gap-[14px]">
                <div className="rounded-[16px] border border-white/10 bg-[#0d2b3a] p-6">
                  <div className="text-[12px] uppercase tracking-[0.14em] text-[#8ecae6] font-semibold">Fecha</div>
                  <div className="mt-3 text-[16px] font-bold text-white">19 de septiembre de 2026</div>
                </div>
                <div className="rounded-[16px] border border-white/10 bg-[#0d2b3a] p-6">
                  <div className="text-[12px] uppercase tracking-[0.14em] text-[#8ecae6] font-semibold">Hora</div>
                  <div className="mt-3 text-[16px] font-bold text-white">9:00 a.m. – 11:30 a.m.</div>
                </div>
                <div className="rounded-[16px] border border-white/10 bg-[#0d2b3a] p-6">
                  <div className="text-[12px] uppercase tracking-[0.14em] text-[#8ecae6] font-semibold">Lugar</div>
                  <div className="mt-3 text-[16px] font-bold text-white">DoubleTree by Hilton Managua</div>
                </div>
                <div className="rounded-[16px] bg-[#fb8500] p-6">
                  <div className="text-[12px] uppercase tracking-[0.14em] text-[#7a3f00] font-semibold">Inversión</div>
                  <div className="mt-3 text-[24px] font-extrabold text-[#04141d]">USD 25</div>
                </div>
              </div>
              <div className="rounded-[18px] border border-white/10 bg-[#0d2b3a] p-8">
                <div className="text-[12.5px] uppercase tracking-[0.14em] text-[#fb8500] font-semibold">
                  Tu entrada incluye
                </div>
                <div className="mt-6 space-y-4 text-[15px] text-[#e6edf0]">
                  <p className="flex items-start gap-3"><span className="mt-1 text-[#fb8500] font-bold">✓</span>Conferencia y panel de discusión</p>
                  <p className="flex items-start gap-3"><span className="mt-1 text-[#fb8500] font-bold">✓</span>Coffee Break & Networking</p>
                  <p className="flex items-start gap-3"><span className="mt-1 text-[#fb8500] font-bold">✓</span>Certificado de participación</p>
                  <p className="flex items-start gap-3"><span className="mt-1 text-[#fb8500] font-bold">✓</span>Material digital del evento</p>
                </div>
                <div className="mt-6 border-t border-white/10 pt-4 text-[13px] text-[#9fb3bc]">
                  Formas de pago: <strong className="text-white">Transferencia bancaria</strong> o <strong className="text-white">Tarjeta de crédito Visa / Mastercard</strong>
                </div>
                <button
                  type="button"
                  onClick={openModal}
                  className="btnp mt-6 w-full rounded-full bg-[#fb8500] px-6 py-4 text-[15.5px] font-semibold text-[#04141d]"
                >
                  Comprar mi entrada
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#04141d]">
          <div className="pointer-events-none absolute -top-[60px] -right-[80px] h-[400px] w-[400px] bg-[url('/brand/isotipo-white.png')] bg-contain bg-no-repeat opacity-5" />
          <div className="relative mx-auto max-w-[1100px] px-[40px] py-24 sm:px-[22px]">
            <div className="grid gap-14 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
              <div>
                <div className="rv max-w-[640px]">
                  <div className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#fb8500]">
                    ¿Qué descubrirás?
                  </div>
                  <h2 className="mt-4 text-[44px] font-extrabold leading-[1.06] tracking-[-0.03em] text-white sm:text-[32px]">
                    Por qué las marcas más fuertes no solo venden — construyen significado
                  </h2>
                </div>
                <div className="rv mt-9 grid grid-cols-2 gap-4">
                  {discoverItems.map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-[#0d2b3a] px-5 py-[22px]">
                      <span className="block h-3 w-3 shrink-0" style={{ backgroundColor: "#fb8500", clipPath: "polygon(0 0, 100% 50%, 0 100%)" }} />
                      <span className="text-[15.5px] font-semibold leading-[1.3] text-white">{item}</span>
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

        <section id="agenda" className="scroll-mt-[70px] bg-[#f4f1ea] text-[#023047]">
          <div className="mx-auto max-w-[1100px] px-[40px] py-24 sm:px-[22px]">
            <div className="rv max-w-[680px]">
              <div className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#219ebc]">
                Agenda del evento
              </div>
              <h2 className="mt-4 text-[44px] font-extrabold leading-[1.06] tracking-[-0.03em] text-[#023047] sm:text-[32px]">
                Una mañana para transformar la forma en que entiendes las marcas
              </h2>
            </div>
            <div className="rv mt-11 divide-y divide-[#023047]/15 border-t border-[#023047]/15">
              {agendaItems.map((item) => (
                <div key={item.time} className="grid grid-cols-[150px_1fr] gap-6 items-center px-2 py-[22px]">
                  <span className="text-[19px] font-extrabold tracking-[-0.01em] text-[#fb8500]">{item.time}</span>
                  <span className="text-[18px] font-semibold text-[#023047]">{item.act}</span>
                </div>
              ))}
            </div>
            <div className="rv mt-[34px]">
              <button
                type="button"
                onClick={openModal}
                className="btnp rounded-full bg-[#fb8500] px-[30px] py-[15px] text-[15.5px] font-bold text-white"
              >
                Asegura tu lugar
              </button>
            </div>
          </div>
        </section>

        <section className="bg-[#023047] text-white">
          <div className="mx-auto max-w-[1100px] px-[40px] py-24 sm:px-[22px] lg:grid lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-14">
            <div className="rv">
              <div className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#fb8500]">
                ¿Qué te llevarás?
              </div>
              <h2 className="mt-4 text-[44px] font-extrabold leading-[1.06] tracking-[-0.03em] text-white sm:text-[32px]">
                Una experiencia que replantea cómo construyes tu marca
              </h2>
              <p className="mt-[18px] text-[16.5px] leading-[1.65] text-[#aebfc8]">
                Más que una conferencia. Al finalizar podrás tomar decisiones de marca con una visión estratégica y de largo plazo.
              </p>
            </div>
            <div className="rv mt-10 flex flex-col gap-[14px]">
              {takeaways.map((item) => (
                <div key={item} className="flex items-start gap-[14px] rounded-[14px] border border-white/[0.08] bg-[#04141d] px-[22px] py-[18px] text-[16px] font-medium text-[#e6edf0]">
                  <span className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full bg-[#fb8500] text-[14px] font-extrabold text-[#04141d]">✓</span>
                  <span className="leading-[1.5]">{item}</span>
                </div>
              ))}
              <button
                type="button"
                onClick={openModal}
                className="btnp mt-2 self-start rounded-full bg-[#fb8500] px-7 py-[14px] text-[15.5px] font-bold text-[#04141d]"
              >
                Comprar entrada
              </button>
            </div>
          </div>
        </section>

        <section className="bg-[#04141d] text-white">
          <div className="mx-auto max-w-[1100px] px-[40px] py-24 sm:px-[22px]">
            <div className="rv max-w-[680px]">
              <div className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#fb8500]">
                Panel de discusión
              </div>
              <h2 className="mt-4 text-[44px] font-extrabold leading-[1.06] tracking-[-0.03em] text-white sm:text-[32px]">
                Tres perspectivas. Una misma conversación.
              </h2>
              <p className="mt-[18px] max-w-[560px] text-[17px] leading-[1.65] text-[#aebfc8]">
                Como parte de la experiencia participarás en un panel con especialistas que conectan la estrategia con la realidad empresarial.
              </p>
            </div>
            <div className="rv mt-11 grid gap-[18px] md:grid-cols-3">
              {panelCards.map((card) => (
                <div key={card.title} className="rounded-[18px] border border-white/[0.08] bg-[#0d2b3a] px-7 py-8">
                  <span className="text-[20px] font-extrabold text-[#fb8500]">{card.n}</span>
                  <h3 className="mt-3 text-[22px] font-bold text-white">{card.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#023047] text-white">
          <div className="mx-auto max-w-[1100px] px-[40px] py-24 sm:px-[22px] lg:grid lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:gap-14">
            <div className="rv">
              <div className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#fb8500]">
                ¿Para quién es este evento?
              </div>
              <h2 className="mt-4 text-[44px] font-extrabold leading-[1.06] tracking-[-0.03em] text-white sm:text-[32px]">
                Para quienes quieren una marca más fuerte y un negocio más competitivo
              </h2>
              <p className="mt-[18px] text-[16.5px] leading-[1.65] text-[#aebfc8]">
                Si buscas construir una marca más fuerte y un negocio más competitivo, este evento es para vos.
              </p>
              <div className="mt-[26px] flex flex-wrap gap-3">
                {audienceItems.map((item) => (
                  <span key={item} className="rounded-full border border-[#8ecae6]/30 px-5 py-3 text-[15px] font-semibold text-[#e6edf0]">
                    {item}
                  </span>
                ))}
              </div>
              <button
                type="button"
                onClick={openModal}
                className="btnp mt-7 rounded-full bg-[#fb8500] px-7 py-[14px] text-[15.5px] font-bold text-[#04141d]"
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

        <section className="bg-[#04141d] text-white">
          <div className="mx-auto max-w-[1100px] px-[40px] py-24 sm:px-[22px] lg:grid lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:gap-14">
            <div className="rv">
              <div className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#fb8500]">
                Marcas aliadas
              </div>
              <h2 className="mt-4 text-[44px] font-extrabold leading-[1.06] tracking-[-0.03em] text-white sm:text-[32px]">
                Impulsando juntos una nueva conversación sobre branding
              </h2>
              <p className="mt-5 text-[17px] leading-[1.7] text-[#aebfc8]">
                Brand Lab Live reúne a empresarios, emprendedores y profesionales interesados en fortalecer la forma en que construyen sus negocios.
              </p>
              <p className="mt-4 text-[17px] leading-[1.7] text-[#aebfc8]">
                Al convertirse en marca aliada, tu organización se vincula con una iniciativa que promueve el <strong className="text-white">pensamiento estratégico, la innovación y el desarrollo empresarial</strong>.
              </p>
              <a
                href="/patrocinio"
                className="btnp mt-[26px] inline-flex rounded-full bg-[#fb8500] px-7 py-[14px] text-[15px] font-bold text-[#04141d]"
              >
                Conoce los niveles de patrocinio →
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

        <section className="bg-[#023047] text-white">
          <div className="mx-auto max-w-[1100px] px-[40px] py-24 sm:px-[22px] lg:grid lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:gap-14">
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
              <div className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#fb8500]">
                Sobre el conferencista
              </div>
              <h2 className="mt-4 text-[44px] font-extrabold leading-[1.06] tracking-[-0.03em] text-white sm:text-[32px]">
                Samuel García
              </h2>
              <p className="mt-[18px] max-w-[560px] text-[17.5px] leading-[1.7] text-[#aebfc8]">
                Consultor en Branding y Estrategia de Marca, fundador de <strong className="text-white">Brand Lab</strong>.
              </p>
              <p className="mt-[14px] max-w-[560px] text-[17px] leading-[1.7] text-[#aebfc8]">
                Con más de diez años de experiencia acompañando a empresas y emprendedores, promueve una visión del branding como un activo estratégico capaz de generar diferenciación, confianza y crecimiento sostenible.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#fb8500] text-[#04141d] text-center">
          <div className="mx-auto max-w-[1100px] px-[40px] py-24 sm:px-[22px]">
            <div className="rv">
              <div className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#7a3f00]">
                Brand Lab Live 2026
              </div>
              <h2 className="mt-4 text-[52px] font-extrabold leading-[1.02] tracking-[-0.035em] sm:text-[42px]">
                Las marcas no venden. Significan.
              </h2>
              <p className="mt-5 max-w-[620px] text-[18px] leading-[1.6] text-[#3a2200] mx-auto">
                Descubre la otra cara del marketing y comprende cómo una estrategia de marca puede transformar la forma en que tu negocio compite, conecta y crea valor. Los espacios son limitados.
              </p>
              <button
                type="button"
                onClick={openModal}
                className="btnp mt-[30px] rounded-full bg-[#04141d] px-[38px] py-[17px] text-[16.5px] font-bold text-white"
              >
                Comprar entrada ahora →
              </button>
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
              <a className="navlink" href="/">← Volver al sitio principal</a>
            </div>
          </div>
        </footer>
      </main>

      {modalOpen ? (
        <div className="ovl" onClick={closeModal}>
          <div className="relative w-full max-w-[540px] overflow-auto rounded-[20px] bg-[#0d2b3a] border border-white/10 p-9" onClick={stop}>
            <button
              type="button"
              onClick={closeModal}
              aria-label="Cerrar"
              className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white"
            >
              ✕
            </button>
            {sent ? (
              <div className="text-center text-[#e6edf0]">
                <div className="mx-auto mb-6 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#fb8500] text-[#04141d] text-[28px] font-extrabold">
                  ✓
                </div>
                <h3 className="text-[24px] font-extrabold text-white">¡Casi listo!</h3>
                <p className="mt-4 text-[15.5px] leading-[1.6] text-[#aebfc8]">
                  Abrimos WhatsApp con tus datos para confirmar tu entrada y coordinar el pago. Si no se abrió, escríbenos al <strong className="text-white">+505 5740 0875</strong>.
                </p>
                <button
                  type="button"
                  onClick={closeModal}
                  className="btnp mt-8 rounded-full bg-[#fb8500] px-7 py-3 text-[15px] font-semibold text-[#04141d]"
                >
                  Cerrar
                </button>
              </div>
            ) : (
              <div className="text-[#e6edf0]">
                <div className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#fb8500]">
                  Inscripción
                </div>
                <h3 className="mt-2 text-[26px] font-extrabold tracking-[-0.02em] text-white">Reserva tu entrada</h3>
                <p className="mt-3 text-[14px] text-[#9fb3bc]">Completa tus datos y confirmamos por WhatsApp.</p>
                <form onSubmit={onRegister} className="mt-8 space-y-4">
                  <div>
                    <label className="lbl">Nombre completo *</label>
                    <input className="fld w-full" name="nombre" required placeholder="Tu nombre y apellido" />
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="lbl">Correo electrónico *</label>
                      <input className="fld w-full" type="email" name="correo" required placeholder="tucorreo@empresa.com" />
                    </div>
                    <div>
                      <label className="lbl">Teléfono *</label>
                      <input className="fld w-full" type="tel" name="telefono" required placeholder="+505 0000 0000" />
                    </div>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="lbl">Empresa</label>
                      <input className="fld w-full" name="empresa" placeholder="Nombre de tu empresa" />
                    </div>
                    <div>
                      <label className="lbl">Cargo</label>
                      <input className="fld w-full" name="cargo" placeholder="Tu cargo" />
                    </div>
                  </div>
                  <div className="grid gap-4 md:grid-cols-[.7fr_1.3fr]">
                    <div>
                      <label className="lbl">Edad</label>
                      <input className="fld w-full" type="number" name="edad" min={14} max={99} placeholder="Edad" />
                    </div>
                    <div>
                      <label className="lbl">Departamento *</label>
                      <select className="fld w-full" name="departamento" required>
                        <option value="">Selecciona…</option>
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
                  <div>
                    <div className="lbl">Forma de pago *</div>
                    <div className="grid gap-3 md:grid-cols-2">
                      {[
                        "Transferencia bancaria",
                        "Tarjeta de crédito (Visa / Mastercard)",
                      ].map((option) => (
                        <label key={option} className="pay">
                          <input type="radio" name="pago" value={option} required style={{ accentColor: "#fb8500" }} />
                          {option}
                        </label>
                      ))}
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btnp w-full rounded-full bg-[#fb8500] px-6 py-4 text-[15.5px] font-semibold text-[#04141d]"
                  >
                    Enviar y confirmar por WhatsApp
                  </button>
                  <p className="mt-2 text-center text-[12.5px] text-[#6f8892]">
                    Tus datos se envían por WhatsApp y se registran para tu inscripción.
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}
