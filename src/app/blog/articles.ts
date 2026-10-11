export type Article = {
  slug: string;
  img: string;
  date: string;
  dateISO: string;
  readMinutes: number;
  cat: string;
  title: string;
  excerpt: string;
  body: string[];
};

/** Newest first — the feed and the "anterior/siguiente" article nav both rely on this order. */
export const articles: Article[] = [
  {
    slug: "el-banco-me-dijo-que-me-queria",
    img: "/brand/blog/cover-banco.jpg",
    date: "6 de octubre de 2026",
    dateISO: "2026-10-06",
    readMinutes: 3,
    cat: "Vivencias de marca",
    title: "El banco me dijo que me quería, y no me pudo ayudar cuando más lo necesité",
    excerpt: "Una marca fuerte no compite por precio, compite por significado.",
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
  {
    slug: "tres-marcas-cruzaron-el-billon-de-dolares",
    img: "/brand/blog/cover-kantar-brandz.jpg",
    date: "29 de septiembre de 2026",
    dateISO: "2026-09-29",
    readMinutes: 4,
    cat: "Valor de marca",
    title: "Tres marcas cruzaron el billón de dólares. Ninguna vendiendo más barato",
    excerpt:
      "El valor de marca no se factura, se acumula una decisión de confianza a la vez. No hay atajo para eso: solo tiempo y coherencia.",
    body: [
      "Esta semana Kantar publicó su reporte BrandZ 2026, y hay un dato que vale la pena mirar dos veces: el valor combinado de las 100 marcas más valiosas del mundo llegó a 13.1 billones de dólares, un 22% más que el año anterior. Es el salto más grande en los 21 años de historia del ranking.",
      "Pero el dato que de verdad me interesa como estratega no es el total. Es que, por primera vez, tres marcas cruzaron juntas la línea del billón de dólares en el mismo año: Google, Microsoft y Amazon se sumaron a Apple por encima de esa cifra. Cuatro marcas, un billón de dólares cada una, al mismo tiempo.",
      "Hay una idea incómoda en esto para quien todavía piensa en marca como logo, y es la que más defiendo: una marca es una promesa que vive en la mente de las personas, no un activo que se declara en un balance. El billón de dólares no lo puso un algoritmo de valuación. Lo pusieron millones de personas, decidiendo todos los días que esa promesa era lo suficientemente sólida como para confiarle su dinero, su atención, su rutina completa.",
      "El valor de marca no se factura. Se acumula, una decisión de confianza a la vez.",
      "Lo que estas cuatro marcas comparten no es sector, ni tamaño, ni estrategia de producto. Comparten algo más difícil de fabricar: llevan años siendo exactamente lo que dicen ser, sin que ese 'qué son' se les mueva cada trimestre. Esa coherencia, sostenida el tiempo suficiente, es lo que convierte la percepción en confianza, y la confianza en valor económico medible.",
      "Para una marca personal o una empresa que apenas construye su lugar, la lección no es 'hazte una big tech'. Es más simple: cada decisión de marca que tomas hoy —qué dices, qué callas, qué prometes y cumples— se acumula. No hay atajo para eso. Solo hay tiempo, coherencia, y la disciplina de no traicionar, por una campaña más vistosa, lo que ya decidiste que tu marca representa.",
      "El billón de dólares no fue el objetivo de ninguna de esas marcas. Fue la consecuencia de años haciendo bien una sola cosa: significar algo claro, y no dejar de significarlo.",
    ],
  },
  {
    slug: "los-cmos-europeos-ya-eligieron",
    img: "/brand/blog/cover-mckinsey.jpg",
    date: "22 de septiembre de 2026",
    dateISO: "2026-09-22",
    readMinutes: 4,
    cat: "Tendencias",
    title: "Los CMOs europeos ya eligieron: el branding le ganó a la IA",
    excerpt:
      "500 líderes de marketing pusieron la construcción de marca por encima de la inteligencia artificial. Cuando todo es incierto, la marca es donde la gente busca certeza.",
    body: [
      "McKinsey acaba de encuestar a 500 líderes de marketing en catorce industrias de Europa para su reporte State of Marketing Europe 2026. Les preguntó cuál era su prioridad número uno para este año. La respuesta no fue la inteligencia artificial generativa ni la agéntica —esa quedó en el puesto 17 de 20—. La respuesta fue el branding.",
      "Sorprende, y con razón. En un momento en que cada conversación de marketing parece obligada a mencionar la inteligencia artificial, que quinientos CMOs coloquen la construcción de marca por encima de la tecnología dice algo importante sobre hacia dónde está mirando de verdad la industria cuando nadie está actuando para la foto.",
      "Esto es algo que llevo años diciendo, y ver que quinientos CMOs lo confirman con datos se siente menos como sorpresa y más como alivio: una marca es una promesa que vive en la mente de las personas, no una campaña ni una herramienta. Cuando el terreno se vuelve incierto, las personas y las empresas gravitan hacia lo que ya reconocen y en lo que ya confían. La incertidumbre no debilita el valor del significado. Lo hace más necesario.",
      "Cuando todo se vuelve incierto, la marca deja de ser una línea de presupuesto y se convierte en el lugar donde la gente busca certeza.",
      "El reporte recupera la investigación de Binet y Field, ya clásica, que sitúa la proporción ideal entre construcción de marca de largo plazo y activación de ventas de corto plazo en 60:40. La mayoría de los equipos, dice McKinsey, opera muy por debajo de ese nivel — atrapados en el ciclo del resultado inmediato, aunque sepan que no es ahí donde se construye valor duradero.",
      "Esto tampoco es una historia contra la IA. El propio reporte lo aclara: la IA está acelerando la ejecución creativa, comprimiendo tiempos y costos. Pero acelerar la ejecución no es lo mismo que resolver la estrategia. La IA puede producir más contenido en menos tiempo. No puede decidir, por ti, qué es lo que tu marca debería significar.",
      "Que quinientos CMOs europeos hayan llegado a la misma conclusión no es casualidad. Es una corrección de rumbo. Y como toda corrección de rumbo bien hecha, no rechaza la herramienta nueva: simplemente recuerda cuál es la pregunta que la herramienta no puede responder por ti.",
    ],
  },
  {
    slug: "2800-millones-no-compraron-un-logo",
    img: "/brand/blog/cover-fifa-sponsorship.jpg",
    date: "15 de septiembre de 2026",
    dateISO: "2026-09-15",
    readMinutes: 4,
    cat: "Influencia",
    title: "$2,800 millones no compraron un logo. Compraron un lugar en la memoria",
    excerpt:
      "La relevancia vence a la visibilidad. El presupuesto compra el escenario; la estrategia decide qué recuerdo dejar en él.",
    body: [
      "Barron's proyectó los ingresos de patrocinio de la FIFA para el Mundial 2026 en 2,800 millones de dólares, casi mil millones más que en el torneo anterior. Es una cifra que invita a una pregunta simple: ¿qué compraron exactamente esas marcas con ese dinero? Forbes lo dice sin rodeos: no fue un logo.",
      "Lo que sí compraron fue acceso. Fan fests activos en trece ciudades sede que ya superan los dos millones de visitantes. adidas montando watch parties y torneos en cinco ciudades. Bank of America entregando bandas personalizadas. Home Depot construyendo zonas DIY que cambian según la cultura de cada ciudad. Ninguna activación se parece a la otra, y esa es exactamente la razón por la que funcionan.",
      "Hay una ley de marketing que explica esto mejor que cualquier cifra de patrocinio: la ley de Byron Sharp de que la relevancia vence a la visibilidad. Un logo en una valla es visible. Una banda personalizada que un aficionado se lleva a casa, se recuerda. La diferencia no es de presupuesto — es de decisión estratégica sobre qué tipo de recuerdo quiere dejar la marca.",
      "La relevancia vence a la visibilidad.",
      "Esto no es exclusivo de marcas con presupuestos de miles de millones. Es una lógica que se traduce a cualquier escala: patrocinar un evento local, activar un stand en una feria, aparecer en la conversación de un lanzamiento ajeno. La pregunta de fondo es la misma: ¿estamos comprando un espacio para que nos vean, o un momento que alguien va a recordar?",
      "Unilever activó ahí su patrocinio deportivo más grande en la historia de la marca — no como una campaña de un mes, sino como una apuesta construida sobre meses de anticipación pública. El patrocinio de un evento mundial no se gana el día del partido. Se construye en la espera, en cada activación que ocurre antes del primer silbatazo.",
      "Para cualquier marca, grande o pequeña, la lección es la misma: el presupuesto compra el escenario. La estrategia — saber qué recuerdo dejar en ese escenario — es lo que realmente compra un lugar en la memoria de alguien.",
    ],
  },
  {
    slug: "lo-que-gap-entendio-de-hailey-bieber",
    img: "/brand/blog/cover-gap-hailey.jpg",
    date: "8 de septiembre de 2026",
    dateISO: "2026-09-08",
    readMinutes: 3,
    cat: "Estrategia de marca",
    title: "Lo que Gap entendió de Hailey Bieber que casi ninguna marca entiende",
    excerpt:
      "Prestar un rostro es una decisión de medios; prestar criterio es una decisión estratégica — y solo una construye marca a largo plazo.",
    body: [
      "Gap lanzó el 16 de julio 'The Hailey Jean', una cápsula de dos siluetas de mezclilla junto a Hailey Bieber. En cuestión de horas se agotó en tienda y en línea, y los titulares hablaron de una histeria genuina alrededor de un jean de menos de 100 dólares. Lo fácil es leer esto como una historia de fama: una modelo con millones de seguidores presta su nombre, la marca vende. Pero esa lectura se queda corta, y es justo lo que me hizo detenerme en lo que Gap decidió meses antes de que la campaña saliera al aire.",
      "Bieber no solo posó para las fotos. Participó en el diseño de las siluetas, en el surtido de la colección y en el mensaje con el que se comunicó. Esa diferencia —entre prestar un rostro y prestar criterio— es la que, para mí, separa a una colaboración que se olvida en tres semanas de una que construye marca a largo plazo.",
      "Y aquí está lo que más me interesa como estratega: contratar a alguien famoso para que aparezca en una campaña es una decisión de medios. Invitar a esa persona a decidir contigo —qué se fabrica, cómo se vende, qué se dice— es una decisión estratégica. Solo una de las dos construye algo que sobrevive a la campaña.",
      "Una colaboración que solo presta una cara se olvida en semanas. Una que presta criterio, se vuelve parte de la historia de la marca.",
      "Hay otro detalle que casi nadie menciona: Bieber ya vestía así —denim relajado, siluetas noventeras— antes de que existiera un contrato. La colección no le queda bien porque la viste una celebridad. Le queda bien porque es, literalmente, su estilo real, traducido a producto. Y eso, para mí, es la prueba de que lo visual, lo verbal y lo que vive la gente tienen que decir la misma verdad, o la audiencia lo nota de inmediato.",
      "La lección para cualquier marca que esté pensando en su próxima cara visible no es 'consigue a alguien famoso'. Es más incómoda que eso: si vas a prestar la imagen de alguien, presta también un espacio real en la decisión. Lo demás es solo publicidad con un rostro conocido encima, y esa fórmula, tarde o temprano, deja de funcionar.",
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getAdjacentArticles(slug: string): { prev?: Article; next?: Article } {
  const index = articles.findIndex((article) => article.slug === slug);
  if (index === -1) return {};
  return {
    prev: articles[index + 1],
    next: index > 0 ? articles[index - 1] : undefined,
  };
}
