"use client";

import Image from "next/image";
import { useState } from "react";
import { Icon } from "@/components/icon";
import { Modal } from "@/components/modal";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const articles = [
  {
    img: "/brand/blog-1.png",
    cat: "Estrategia de marca",
    title: "Lo que Gap entendió de Hailey Bieber que casi ninguna marca entiende",
    excerpt:
      "Prestar un rostro es una decisión de medios; prestar criterio es una decisión estratégica — y solo una construye marca a largo plazo.",
    tag: "Sistema SIGNIFICA · Gestión",
    body: [
      "Gap lanzó el 16 de julio 'The Hailey Jean', una cápsula de dos siluetas de mezclilla junto a Hailey Bieber. En cuestión de horas se agotó en tienda y en línea, y los titulares hablaron de una histeria genuina alrededor de un jean de menos de 100 dólares. Es tentador leer esto como una historia de fama: una modelo con millones de seguidores presta su nombre, la marca vende. Pero esa lectura se queda corta, y por eso vale la pena detenerse en lo que Gap decidió meses antes de que la campaña saliera al aire.",
      "Bieber no solo posó para las fotos. Participó en el diseño de las siluetas, en el surtido de la colección y en el mensaje con el que se comunicó. Esa diferencia —entre prestar un rostro y prestar criterio— es la que separa a una colaboración que se olvida en tres semanas de una que construye marca a largo plazo.",
      "Ahí es donde entra la letra G de nuestro Sistema SIGNIFICA: la Gestión Estratégica, esa decisión que hace única a una marca. Contratar a una persona famosa para que aparezca en una campaña es una decisión de medios. Invitar a esa persona a decidir contigo —qué se fabrica, cómo se vende, qué se dice— es una decisión estratégica, y solo una de las dos construye algo que sobrevive a la campaña.",
      "Una colaboración que solo presta una cara se olvida en semanas. Una que presta criterio, se vuelve parte de la historia de la marca.",
      "Hay otro detalle que casi nadie menciona: Bieber ya vestía así —denim relajado, siluetas noventeras— antes de que existiera un contrato. La colección no le queda bien porque la viste una celebridad. Le queda bien porque es, literalmente, su estilo real, traducido a producto. Eso es el filtro de Coherencia que tanto repetimos en Brand Lab: lo visual, lo verbal y lo experiencial tienen que decir la misma verdad, o la audiencia lo nota de inmediato.",
      "La lección para cualquier marca que esté pensando en su próxima cara visible no es 'consigue a alguien famoso'. Es más incómoda que eso: si vas a prestar la imagen de alguien, presta también un espacio real en la decisión. Lo demás es solo publicidad con un rostro conocido encima, y esa fórmula, tarde o temprano, deja de funcionar.",
    ],
  },
  {
    img: "/brand/blog-2.png",
    cat: "Tendencias",
    title: "Los CMOs europeos ya eligieron: el branding le ganó a la IA",
    excerpt:
      "500 líderes de marketing pusieron la construcción de marca por encima de la inteligencia artificial. Cuando todo es incierto, la marca es donde la gente busca certeza.",
    tag: "Sistema SIGNIFICA · Significado",
    body: [
      "McKinsey acaba de encuestar a 500 líderes de marketing en catorce industrias de Europa para su reporte State of Marketing Europe 2026. Les preguntó cuál era su prioridad número uno para este año. La respuesta no fue la inteligencia artificial generativa ni la agéntica —esa quedó en el puesto 17 de 20—. La respuesta fue el branding.",
      "Sorprende, y con razón. En un momento en que cada conversación de marketing parece obligada a mencionar la inteligencia artificial, que quinientos CMOs coloquen la construcción de marca por encima de la tecnología dice algo importante sobre hacia dónde está mirando de verdad la industria cuando nadie está actuando para la foto.",
      "Aquí es donde el primer paso de nuestro Sistema SIGNIFICA deja de ser una convicción propia y empieza a sonar como sentido común compartido: el Significado. Una marca es una promesa que vive en la mente de las personas, no una campaña ni una herramienta. Cuando el terreno se vuelve incierto, las personas y las empresas gravitan hacia lo que ya reconocen y en lo que ya confían. La incertidumbre no debilita el valor del significado. Lo hace más necesario.",
      "Cuando todo se vuelve incierto, la marca deja de ser una línea de presupuesto y se convierte en el lugar donde la gente busca certeza.",
      "El reporte recupera la investigación de Binet y Field, ya clásica, que sitúa la proporción ideal entre construcción de marca de largo plazo y activación de ventas de corto plazo en 60:40. La mayoría de los equipos, dice McKinsey, opera muy por debajo de ese nivel — atrapados en el ciclo del resultado inmediato, aunque sepan que no es ahí donde se construye valor duradero.",
      "Esto tampoco es una historia contra la IA. El propio reporte lo aclara: la IA está acelerando la ejecución creativa, comprimiendo tiempos y costos. Pero acelerar la ejecución no es lo mismo que resolver la estrategia. La IA puede producir más contenido en menos tiempo. No puede decidir, por ti, qué es lo que tu marca debería significar.",
      "Que quinientos CMOs europeos hayan llegado a la misma conclusión no es casualidad. Es una corrección de rumbo. Y como toda corrección de rumbo bien hecha, no rechaza la herramienta nueva: simplemente recuerda cuál es la pregunta que la herramienta no puede responder por ti.",
    ],
  },
  {
    img: "/brand/blog-3.png",
    cat: "Valor de marca",
    title: "Tres marcas cruzaron el billón de dólares. Ninguna vendiendo más barato",
    excerpt:
      "El valor de marca no se factura, se acumula una decisión de confianza a la vez. No hay atajo para el significado: solo tiempo y coherencia.",
    tag: "Sistema SIGNIFICA · Coherencia",
    body: [
      "Esta semana Kantar publicó su reporte BrandZ 2026, y hay un dato que vale la pena mirar dos veces: el valor combinado de las 100 marcas más valiosas del mundo llegó a 13.1 billones de dólares, un 22% más que el año anterior. Es el salto más grande en los 21 años de historia del ranking.",
      "Pero el dato que de verdad me interesa como estratega no es el total. Es que, por primera vez, tres marcas cruzaron juntas la línea del billón de dólares en el mismo año: Google, Microsoft y Amazon se sumaron a Apple por encima de esa cifra. Cuatro marcas, un billón de dólares cada una, al mismo tiempo.",
      "El pilar S-Significado parte de una idea incómoda para quien todavía piensa en marca como logo: una marca es una promesa que vive en la mente de las personas, no un activo que se declara en un balance. El billón de dólares no lo puso un algoritmo de valuación. Lo pusieron millones de personas, decidiendo todos los días que esa promesa era lo suficientemente sólida como para confiarle su dinero, su atención, su rutina completa.",
      "El valor de marca no se factura. Se acumula, una decisión de confianza a la vez.",
      "Lo que estas cuatro marcas comparten no es sector, ni tamaño, ni estrategia de producto. Comparten algo más difícil de fabricar: llevan años siendo exactamente lo que dicen ser, sin que ese 'qué son' se les mueva cada trimestre. Eso es coherencia —el pilar C de SIGNIFICA— sostenida el tiempo suficiente como para que la percepción se vuelva confianza, y la confianza se vuelva valor económico medible.",
      "Para una marca personal o una empresa que apenas construye su lugar, la lección no es 'hazte una big tech'. Es más simple: cada decisión de marca que tomas hoy —qué dices, qué callas, qué prometes y cumples— se acumula. No hay atajo para el significado. Solo hay tiempo, coherencia, y la disciplina de no traicionar, por una campaña más vistosa, lo que ya decidiste que tu marca representa.",
      "El billón de dólares no fue el objetivo de ninguna de esas marcas. Fue la consecuencia de años haciendo bien una sola cosa: significar algo claro, y no dejar de significarlo.",
    ],
  },
  {
    img: "/brand/blog-4.png",
    cat: "Influencia",
    title: "$2,800 millones no compraron un logo. Compraron un lugar en la memoria",
    excerpt:
      "La relevancia vence a la visibilidad. El presupuesto compra el escenario; la estrategia decide qué recuerdo dejar en él.",
    tag: "Sistema SIGNIFICA · Influencia",
    body: [
      "Barron's proyectó los ingresos de patrocinio de la FIFA para el Mundial 2026 en 2,800 millones de dólares, casi mil millones más que en el torneo anterior. Es una cifra que invita a una pregunta simple: ¿qué compraron exactamente esas marcas con ese dinero? Forbes lo dice sin rodeos: no fue un logo.",
      "Lo que sí compraron fue acceso. Fan fests activos en trece ciudades sede que ya superan los dos millones de visitantes. adidas montando watch parties y torneos en cinco ciudades. Bank of America entregando bandas personalizadas. Home Depot construyendo zonas DIY que cambian según la cultura de cada ciudad. Ninguna activación se parece a la otra, y esa es exactamente la razón por la que funcionan.",
      "El Sistema SIGNIFICA tiene una letra que explica esto: la I de Influencia, y dentro de ella la ley de Byron Sharp de que la relevancia vence a la visibilidad. Un logo en una valla es visible. Una banda personalizada que un aficionado se lleva a casa, se recuerda. La diferencia no es de presupuesto — es de decisión estratégica sobre qué tipo de recuerdo quiere dejar la marca.",
      "La relevancia vence a la visibilidad.",
      "Esto no es exclusivo de marcas con presupuestos de miles de millones. Es una lógica que se traduce a cualquier escala: patrocinar un evento local, activar un stand en una feria, aparecer en la conversación de un lanzamiento ajeno. La pregunta de fondo es la misma: ¿estamos comprando un espacio para que nos vean, o un momento que alguien va a recordar?",
      "Unilever activó ahí su patrocinio deportivo más grande en la historia de la marca — no como una campaña de un mes, sino como una apuesta construida sobre meses de anticipación pública. El patrocinio de un evento mundial no se gana el día del partido. Se construye en la espera, en cada activación que ocurre antes del primer silbatazo.",
      "Para cualquier marca, grande o pequeña, la lección es la misma: el presupuesto compra el escenario. La estrategia — saber qué recuerdo dejar en ese escenario — es lo que realmente compra un lugar en la memoria de alguien.",
    ],
  },
  {
    img: "/brand/blog-5.png",
    cat: "Vivencias de marca",
    title: "El banco me dijo que me quería, y no me pudo ayudar cuando más lo necesité",
    excerpt: "Una marca fuerte no compite por precio, compite por significado.",
    tag: "Artículos Brand Lab",
    body: [
      "Vos sabés cuando alguien te promete algo bonito y después la vida real te demuestra lo contrario, ¿verdad? Eso me pasó con mi banco.",
      "En su publicidad se llenan la boca hablando de cercanía, de que están 'en pro de la gente'. Bonito discurso. Pero durante semanas alguien estuvo intentando entrar a mi cuenta una y otra vez, y cada intento fallido terminaba bloqueándome a mí: no podía hacer transacciones. Lo único que necesitaba era cambiar mi usuario para cortarle el acceso a quien fuera que estuviera insistiendo. Simple, ¿no? Pues no me pudieron ayudar. Bonita en la valla publicitaria, ausente justo cuando de verdad la necesitaba.",
      "Esto no es un problema de mal servicio nada más. El branding no es un departamento, es el alma de la empresa completa. No es tarea exclusiva de marketing, es la forma en que una organización entera —desde quien contesta el teléfono hasta quien diseña los protocolos de seguridad— cumple, o traiciona, lo que promete ser. Cuando una marca dice una cosa y su gente vive otra, no hace falta que el cliente sea experto en branding para sentir la trampa. Lo siente en la piel.",
      "Casi la misma semana viví lo opuesto. Dejé una barbería a la que fui fiel por años. No fue por el precio, fue porque perdí el valor: la plática se volvió mecánica, el detalle desapareció. Me cambié a otra, más cara, sí, pero ahí la propuesta superaba por mucho lo que cobraban. No lo dudé: pagué de más con gusto, porque sentí que valía más.",
      "Ahí está la prueba más honesta de que una marca fuerte no compite por precio, compite por significado. Cuando tu esencia, tus valores y tu experiencia caminan juntos, el precio deja de ser el argumento. Se vuelve un detalle.",
      "Si alguna vez sentiste que tu negocio compite solo bajando precios, o que tu propia marca promete una cosa y entrega otra, quiero que sepas algo: no estás solo, y esto no se arregla poniéndole un logo nuevo a la fachada. Se arregla construyendo desde adentro.",
      "Contame: ¿te ha pasado algo parecido, con una marca a la que le creíste y te falló, o con una que te ganó por su forma de tratarte, aunque costara más? En serio quiero leer tu historia.",
    ],
  },
];

const navLinks = [
  { label: "Blogspot", href: "#blogspot" },
  { label: "News Letter", href: "#newsletter" },
  { label: "Galería de Eventos", href: "/eventos" },
  { label: "Volver al sitio", href: "/", back: true },
];

export function BlogClient() {
  const [subStatus, setSubStatus] = useState<"idle" | "sent" | "blocked">("idle");
  const [submitting, setSubmitting] = useState(false);
  const [waLink, setWaLink] = useState("");
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const openArticle = (index: number) => setOpenIdx(index);
  const closeArticle = () => setOpenIdx(null);

  const onSubscribe = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    const form = new FormData(event.currentTarget);
    const nombre = form.get("nombre")?.toString() ?? "";
    const correo = form.get("correo")?.toString() ?? "";
    const msg = `Nueva suscripción al News Letter — Brand Lab\n\nNombre: ${nombre}\nCorreo: ${correo}`;
    const link = `https://wa.me/50557400875?text=${encodeURIComponent(msg)}`;
    setWaLink(link);
    // Passing "noopener" makes window.open return null by spec, which used to be
    // misread as a blocked popup. Open normally and drop the opener by hand.
    const opened = window.open(link, "_blank");
    if (opened) opened.opener = null;
    setSubStatus(opened ? "sent" : "blocked");
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
        cta={{ label: "Suscribirme", href: "#newsletter" }}
        maxWidth={1100}
      />

      <main id="contenido">
        <section aria-labelledby="h-blog-hero" className="relative overflow-hidden bg-mist">
          <Image
            src="/brand/blog-hero.png"
            alt="Samuel García"
            fill
            sizes="100vw"
            preload
            className="object-cover object-right-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(233,236,239,.98)_0%,rgba(233,236,239,.86)_40%,rgba(233,236,239,.2)_66%,rgba(233,236,239,0)_80%)]" />
          <div className="relative z-10 mx-auto flex min-h-[520px] max-w-[1100px] flex-col justify-center gutter py-[70px]">
            <div className="max-w-[600px]">
              <div className="rv t-label text-orange-ink">Blog Brand</div>
              <h1 id="h-blog-hero" className="rv mt-4 t-display text-navy">
                Ideas que enseñan a construir marca
              </h1>
              <p className="rv mt-[22px] max-w-[520px] t-lead text-body-ink">
                Artículos de marca, vivencias reales y educación para construir marcas con propósito y humanas. Análisis del mundo del branding y una carta semanal directa a tu correo.
              </p>
              <div className="rv mt-[30px] flex flex-wrap gap-[14px]">
                <a
                  href="#blogspot"
                  className="btn btn-lg btn-primary-on-light"
                >
                  Leer el Blogspot
                </a>
                <a
                  href="#newsletter"
                  className="btno inline-flex rounded-full border-[1.5px] border-navy/25 bg-transparent px-[30px] py-4 t-body font-semibold text-navy"
                >
                  Suscribirme al News Letter
                </a>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="h-blogspot" id="blogspot" className="scroll-mt-[70px] relative overflow-hidden bg-abyss">
          <div className="pointer-events-none absolute -top-[60px] -right-[80px] h-[400px] w-[400px] bg-[url('/brand/isotipo-white.png')] bg-contain bg-no-repeat opacity-5" />
          <div className="relative mx-auto max-w-[1100px] gutter py-[92px]">
            <div className="rv max-w-[700px]">
              <div className="t-label text-orange">
                Blogspot
              </div>
              <h2 id="h-blogspot" className="mt-4 t-headline text-white">
                Análisis de marca, en tiempo real
              </h2>
              <p className="mt-4 measure t-body text-body-on-abyss">
                Lecturas del mundo del branding a través del Sistema SIGNIFICA — lo que las marcas más grandes están haciendo y qué puedes aplicar a la tuya.
              </p>
            </div>
            <div className="rv mt-12 grid gap-[26px] md:grid-cols-2">
              {articles.slice(0, 4).map((article, index) => (
                <div key={article.title} className="art flex flex-col overflow-hidden rounded-[20px] border border-white/[0.08] bg-abyss-surface">
                  <div className="relative overflow-hidden bg-abyss" style={{ aspectRatio: "1920/711" }}>
                    <Image
                      src={article.img}
                      alt={article.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 520px"
                      className="artimg object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col px-7 pt-7 pb-[30px]">
                    <div className="t-label text-sky">
                      {article.cat}
                    </div>
                    <h3 className="mt-[10px] t-title font-extrabold text-white">
                      {article.title}
                    </h3>
                    <p className="mt-3 flex-1 t-body-sm text-body-on-abyss">{article.excerpt}</p>
                    <div className="mt-5 flex items-center justify-between gap-4 border-t border-white/[0.08] pt-[18px]">
                      <span className="t-meta italic text-muted-dark">{article.tag}</span>
                      <button
                        type="button"
                        onClick={() => openArticle(index)}
                        className="btn btn-sm btn-primary"
                      >
                        Leer completo <Icon name="arrow-right" size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="h-newsletter" id="newsletter" className="scroll-mt-[70px] bg-navy">
          <div className="mx-auto max-w-[1100px] gutter py-[92px] lg:grid lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:gap-14">
            <div className="rv">
              <div className="t-label text-orange">
                News Letter
              </div>
              <h2 id="h-newsletter" className="mt-4 t-headline text-white">
                Una carta de marca, cada semana en tu correo
              </h2>
              <p className="mt-[18px] max-w-[560px] t-body text-body-on-navy">
                Cada semana comparto una vivencia real, una lección de branding y una idea para construir tu marca con propósito. Sin relleno, sin spam — solo pensamiento estratégico y humano, directo a tu bandeja.
              </p>
              <div className="rv mt-[26px] rounded-2xl border border-white/[0.08] bg-abyss px-[26px] py-6">
                <div className="mb-2 t-label text-sky">Edición reciente</div>
                <h3 className="t-title font-extrabold text-white">El banco me dijo que me quería, y no me pudo ayudar cuando más lo necesité</h3>
                <p className="mt-[10px] t-body-sm text-body-on-abyss">
                  Una marca fuerte no compite por precio, compite por significado. El branding no es un departamento — es el alma de la empresa completa.
                </p>
                <button
                  type="button"
                  onClick={() => openArticle(4)}
                  className="navlink mt-2 inline-flex min-h-[44px] items-center t-meta font-bold text-orange"
                >
                  Leer completo <Icon name="arrow-right" size={14} />
                </button>
              </div>
            </div>
            <div className="rv mt-10 rounded-[22px] border border-white/10 bg-abyss-surface px-[34px] py-9 lg:mt-0">
              {subStatus === "blocked" ? (
                <div className="py-5 text-center">
                  <div className="mx-auto mb-4 flex h-[58px] w-[58px] items-center justify-center rounded-full border-2 border-yellow t-title-lg text-yellow">
                    !
                  </div>
                  <h3 className="t-title font-extrabold text-white">Tu navegador bloqueó WhatsApp</h3>
                  <p className="mt-[10px] t-body-sm text-body-on-navy">
                    Tus datos están listos, pero la ventana no se abrió. Toca el botón para enviarlos.
                  </p>
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-md btn-primary mt-6"
                  >
                    Abrir WhatsApp con mis datos
                  </a>
                </div>
              ) : subStatus === "sent" ? (
                <div className="text-center py-5">
                  <div className="mx-auto mb-4 flex h-[58px] w-[58px] items-center justify-center rounded-full bg-orange text-abyss">
                    <Icon name="check" size={25} />
                  </div>
                  <h3 className="t-title font-extrabold text-white">¡Casi listo!</h3>
                  <p className="mt-[10px] t-body-sm text-body-on-navy">
                    Abrimos WhatsApp con tus datos. Envía el mensaje y quedas suscrito a la próxima edición.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-1.5 t-label text-orange">
                    Suscríbete gratis
                  </div>
                  <h3 className="t-title-lg text-white">Recíbelo cada semana</h3>
                  <p className="mt-1 t-meta text-body-on-abyss">
                    Déjanos tu nombre y correo, y confirmamos tu suscripción por WhatsApp.
                  </p>
                  <form onSubmit={onSubscribe} className="mt-[22px] flex flex-col gap-[14px]">
                    <div>
                      <label className="lbl" htmlFor="news-nombre">
                        Nombre <span className="text-orange">*</span>
                      </label>
                      <input className="fld w-full" id="news-nombre" name="nombre" required autoComplete="name" maxLength={120} placeholder="Tu nombre" />
                    </div>
                    <div>
                      <label className="lbl" htmlFor="news-correo">
                        Correo electrónico <span className="text-orange">*</span>
                      </label>
                      <input className="fld w-full" id="news-correo" type="email" name="correo" required autoComplete="email" maxLength={160} placeholder="tucorreo@empresa.com" />
                    </div>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn btn-lg btn-primary w-full"
                    >
                      {submitting ? "Abriendo WhatsApp…" : "Suscribirme por WhatsApp"}
                    </button>
                    <p className="text-center t-meta text-muted-dark">
                      Sin spam. Puedes darte de baja cuando quieras.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </section>

        <Modal
          open={openIdx !== null}
          onClose={closeArticle}
          label={openIdx !== null ? articles[openIdx].title : "Artículo"}
          panelClassName="w-full max-w-[780px] overflow-hidden rounded-[22px] border border-white/10 bg-abyss-surface"
        >
          {openIdx !== null ? (
            <>
              <div className="relative overflow-hidden bg-abyss" style={{ aspectRatio: "1920/711" }}>
                <Image
                  src={articles[openIdx].img}
                  alt={articles[openIdx].title}
                  fill
                  sizes="(max-width: 780px) 100vw, 780px"
                  className="object-cover"
                />
              </div>
              <div className="px-11 pt-[38px] pb-10">
                <div className="t-label text-orange">{articles[openIdx].cat}</div>
                <h2 className="mt-3 t-title-lg text-white">{articles[openIdx].title}</h2>
                <div className="mt-[22px] flex flex-col gap-4 t-body text-on-dark-soft">
                  {articles[openIdx].body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <div className="mt-8 flex flex-col gap-4 border-t border-white/[0.12] pt-[26px] sm:flex-row sm:items-center sm:justify-between">
                  <span className="t-body font-extrabold italic text-orange">We don't sell, we mean! — Samu</span>
                  <a
                    href="https://wa.me/50557400875?text=Hola%20Samu,%20le%C3%AD%20tu%20art%C3%ADculo%20en%20Blog%20Brand%20y%20quiero%20conversar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-md btn-primary"
                  >
                    Conversemos
                  </a>
                </div>
              </div>
            </>
          ) : null}
        </Modal>


      </main>

      <SiteFooter
        maxWidth={1100}
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
