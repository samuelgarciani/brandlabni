export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "table"; headers: string[]; rows: string[][]; primaryColumns?: number };

export type Article = {
  slug: string;
  img: string;
  date: string;
  dateISO: string;
  readMinutes: number;
  cat: string;
  /** SEO focus terms for this post — used in meta keywords, JSON-LD and the visible tag pills. */
  keywords: string[];
  title: string;
  excerpt: string;
  body: ContentBlock[];
};

/** Newest first — the feed relies on this order. */
export const articles: Article[] = [
  {
    slug: "rebranding-cuando-cambiar-y-cuando-no",
    img: "/brand/blog/cover-rebranding.jpg",
    date: "16 de octubre de 2026",
    dateISO: "2026-10-16",
    readMinutes: 9,
    cat: "Estrategia de marca",
    keywords: ["rebranding", "branding", "estrategia de marca", "identidad de marca", "refresh de marca"],
    title: "Rebranding: cuándo cambiar y cuándo no",
    excerpt:
      "Cambiar el logo puede renovar una marca o hacerle perder lo que la gente ya quería. Cinco casos reales — Avianca, Jaguar, GAP, Coca-Cola y Zepol — y las preguntas que vale la pena hacerse antes de cualquier **rebranding**.",
    body: [
      {
        type: "p",
        text: "Cambiar el logo es una de las decisiones que más emocionan a un dueño de negocio, y también una de las más riesgosas. Una nueva imagen puede darle aire fresco a una empresa, pero también puede hacer que sus clientes sientan que perdieron algo que querían.",
      },
      {
        type: "p",
        text: "En este artículo repaso cinco casos conocidos: Avianca, Jaguar, GAP, Coca-Cola y Zepol. Algunos salieron bien y otros tuvieron que dar marcha atrás. Todos ayudan a responder la pregunta que vale la pena hacerse antes de cualquier **rebranding**: ¿por qué quiero cambiar?",
      },
      { type: "h2", text: "Refresh o rebranding: qué es cada uno" },
      {
        type: "p",
        text: "Antes de entrar a los casos, conviene separar dos términos que muchas veces se usan como si fueran lo mismo. Un **refresh** actualiza la forma en que la marca se ve y se aplica, y conserva todo lo que la gente ya reconoce. Un **rebranding** cambia lo que la marca representa y cómo se presenta, y puede tocar el nombre, el logo, el mensaje y hasta el público al que se dirige.",
      },
      {
        type: "table",
        headers: ["", "Refresh", "Rebranding"],
        rows: [
          ["Qué cambia", "Tipografía, colores, empaques, fotografía, aplicaciones", "Significado, mensaje y, a menudo, nombre o logo"],
          ["Qué se conserva", "Los símbolos que la gente reconoce", "Lo que siga siendo valioso para el cliente"],
          ["Cuándo conviene", "La marca está bien posicionada pero se ve desactualizada o inconsistente", "Cambió el negocio: la oferta, el público o el mercado"],
          ["Riesgo", "Bajo, si se respetan los códigos de la marca", "Alto, porque se mueve la memoria de los clientes"],
          ["Casos en este artículo", "Coca-Cola", "Avianca, Jaguar, Zepol"],
        ],
      },
      {
        type: "p",
        text: "GAP queda en un punto intermedio: cambió el logo sin que hubiera cambiado el negocio, y por eso la gente no entendió el motivo. En mi experiencia, la mayoría de las pymes necesita un refresh mucho más seguido que un rebranding.",
      },
      { type: "h2", text: "Avianca: «el cielo es de todos»" },
      {
        type: "p",
        text: "El 18 de octubre de 2023, Avianca presentó su nueva marca con una frase que lo resume todo: «el cielo es de todos». Para que esa idea se viera, quitó la A mayúscula de su nombre y empezó a escribirlo en minúsculas. Según sus directivos, esa avianca en minúscula representa a una aerolínea que dejó de ser para pocos.",
      },
      {
        type: "p",
        text: "Detrás del lema había una historia dura. Su CEO, Adrian Neuhauser, contó que durante la pandemia los aviones pasaron más de 180 días en tierra y que la aerolínea estuvo en riesgo real de desaparecer. La transformación que vino después tomó cerca de dos años, y para el primer semestre de 2023 la empresa ya reportaba una ganancia neta de 10,88 millones de dólares, frente a una pérdida de 292,6 millones en el mismo periodo del año anterior (El País Colombia).",
      },
      {
        type: "p",
        text: "Lo que hace fuerte este caso es que la frase y la letra cuentan la misma idea. El lema dice que volar es para todos y la minúscula lo muestra sin necesidad de explicarlo. Además, el cambio llegó después de que el negocio se transformó, así que la nueva marca tenía algo real que la respaldaba.",
      },
      { type: "h2", text: "Jaguar: romper con todo, incluso con quienes te querían" },
      {
        type: "p",
        text: "El 19 de noviembre de 2024, Jaguar presentó una identidad completamente nueva bajo la idea \"copy nothing\". Cambió su logotipo por uno que mezcla mayúsculas y minúsculas (\"JaGUar\"), estrenó un monograma con la J y la r, borró el historial de sus redes sociales y lanzó un anuncio de 30 segundos con modelos y colores intensos en el que no aparecía ningún auto (Top Gear).",
      },
      {
        type: "p",
        text: "La razón de fondo era real: Jaguar quería convertirse en una marca de lujo 100 % eléctrica, con autos de alrededor de 100.000 libras, y había detenido la producción de nuevos modelos por primera vez desde 1948. Su director, Rawdon Glover, lo explicó así: si jugaban como todos los demás, iban a quedar ahogados en el ruido.",
      },
      {
        type: "p",
        text: "La reacción fue mayoritariamente negativa. Elon Musk preguntó en X si Jaguar todavía vendía autos, y el publicista Rory Sutherland advirtió que la marca no podía sobrevivir con fans que no compran sus carros. En mayo de 2025, Jaguar Land Rover inició una revisión de su agencia publicitaria, aunque aseguró que la decisión no tenía relación con las críticas (Business Now). A inicios de 2026 se confirmó que Gerry McGovern, director creativo detrás de la nueva dirección, dejaría la compañía antes del relanzamiento (AM Online).",
      },
      {
        type: "quote",
        text: "Jaguar comunicó una ruptura antes de tener el producto que la explicara, y dejó a sus clientes de siempre sin nada a qué aferrarse.",
      },
      { type: "h2", text: "GAP: el logo que duró seis días" },
      {
        type: "p",
        text: "El 6 de octubre de 2010, GAP reemplazó el recuadro azul que había usado durante unos 20 años por un logotipo nuevo, con letras negras y un pequeño cuadro azul en la esquina. La empresa lo describió como una expresión más contemporánea y moderna.",
      },
      {
        type: "p",
        text: "La respuesta fue inmediata. En las primeras 24 horas, un solo blog acumuló cerca de 2.000 comentarios negativos, una cuenta de protesta en Twitter llegó a 5.000 seguidores y un sitio para \"hacer tu propio logo de GAP\" recibió casi 14.000 parodias. La marca intentó presentar el cambio como una invitación a que la gente propusiera diseños, pero el 12 de octubre volvió al logo original. Marka Hansen, entonces presidenta de GAP en Norteamérica, reconoció que no lo habían hecho de la manera correcta (The Branding Journal).",
      },
      {
        type: "p",
        text: "GAP subestimó cuánto de su **identidad de marca** vivía en aquel recuadro azul. Para muchos clientes, ese símbolo era parte de su propia historia con la marca, y nadie les explicó por qué debía cambiar. Cuando la gente no entiende el motivo de un cambio, lo vive como una pérdida.",
      },
      { type: "h2", text: "Coca-Cola: renovarse para parecerse más a sí misma" },
      {
        type: "p",
        text: "En julio de 2026, Coca-Cola presentó una renovación de su identidad visual para más de 200 mercados, liderada por la agencia JKR. Lo más interesante es lo que no tocó: mantuvo el rojo y el blanco, su letra Spencerian, la cinta ondulada (Dynamic Ribbon) que usa desde 1969 y el sello cuadrado conocido como Arden Square (The Brand Hopper).",
      },
      {
        type: "p",
        text: "Lo que hizo fue darle más protagonismo a esos elementos y sumar uno nuevo: \"Better With\", una tipografía propia creada por Brody Associates. También rediseñó sus empaques, devolvió el nombre vertical a las latas y lanzó un Brand Center, una plataforma donde sus equipos y agencias encuentran los colores, tipografías y piezas aprobadas (Latinspots).",
      },
      {
        type: "p",
        text: "Arnab Roy, presidente de Coca-Cola Global Category, explicó que el objetivo era ser más claros y consistentes en cómo se presentan, en cualquier lugar donde la gente se encuentre con la marca. Para una pyme, este caso es oro: a veces la mejor renovación consiste en ordenar y potenciar lo que ya tienes, para que todo lo que publicas, empacas o entregas se vea como la misma marca.",
      },
      { type: "h2", text: "Zepol: renovarse sin soltar la confianza" },
      {
        type: "p",
        text: "El caso más cercano a nosotros está pasando ahora mismo. Laboratorios Zepol, la empresa costarricense con 76 años de historia que muchos en Nicaragua conocemos por su ungüento, ahora opera como ZepoLab. Su marca principal se escribe Zpol, aunque se sigue pronunciando \"Zepol\", y la compañía asegura que las fórmulas y sus estándares de calidad se mantienen sin cambios (Vida y Éxito).",
      },
      {
        type: "p",
        text: "Lo interesante es todo lo que hay detrás. Zepol competía sobre todo en la categoría de resfriados, con ungüentos e inhaladores, y sus ventas tenían altas y bajas. El cambio tomó varios años e incluyó aprobación de la junta directiva, revisión de la capacidad de producción y la creación del Zepol Innovation Lab, un equipo que prueba con consumidores aspectos como el aroma, el uso y el diseño gráfico. Ahora la empresa trabaja en más de 50 productos, entre ellos bebidas de hidratación, caramelos funcionales y productos para el bienestar muscular (El Financiero).",
      },
      {
        type: "quote",
        text: "La fortaleza de hoy no garantiza por sí sola la relevancia de mañana.",
      },
      {
        type: "p",
        text: "Además, el cambio se está haciendo de forma gradual, producto por producto, entre 2026 y 2027, para que la gente se acostumbre sin sentir que perdió algo. Zepol cambió la forma de escribir su nombre y conservó lo que lo hace confiable.",
      },
      { type: "h2", text: "Lo que estos cinco casos nos enseñan" },
      {
        type: "p",
        text: "Si los ponemos uno al lado del otro, aparece un patrón: los cambios que funcionaron tenían una razón clara y cuidaron lo que la gente ya quería, y los que fracasaron cambiaron algo valioso sin explicar por qué.",
      },
      {
        type: "table",
        headers: ["Marca", "Año", "Tipo de cambio", "Qué cambió", "Qué lo impulsó", "Cómo terminó"],
        rows: [
          ["Coca-Cola", "2026", "Refresh", "Más protagonismo a sus símbolos y nueva tipografía \"Better With\"", "Verse clara y consistente en más de 200 mercados", "En marcha"],
          ["Zepol", "2026", "Rebranding", "Nombre escrito como Zpol, empresa ZepoLab", "Nuevas categorías y expansión regional", "En marcha, de forma gradual"],
          ["Jaguar", "2024", "Rebranding", "Logo, monograma y comunicación completa", "Paso a lujo 100 % eléctrico", "Fuerte rechazo; resultado aún abierto"],
          ["Avianca", "2023", "Rebranding", "A minúscula y lema «el cielo es de todos»", "Transformación tras casi desaparecer", "Se mantiene"],
          ["GAP", "2010", "Cambio de logo", "Logo", "Buscar una imagen más moderna", "Revertido a los 6 días"],
        ],
      },
      {
        type: "p",
        text: "Antes de tocar tu logo, te recomiendo responder con honestidad estas preguntas:",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "¿Qué cambió en mi negocio que mi marca actual ya no logra contar?",
          "¿Qué parte de mi marca quieren y reconocen mis clientes, y cómo la voy a proteger?",
          "¿Puedo explicar el cambio en una frase que mis clientes entiendan y sientan suya?",
          "¿Tengo algo nuevo que mostrar (un producto, un servicio, una experiencia) que respalde la nueva imagen?",
          "¿Voy a hacer el cambio de golpe o de forma gradual, como Zepol?",
        ],
      },
      {
        type: "p",
        text: "Si la única respuesta a la primera pregunta es \"ya me aburrí del logo\", probablemente lo que necesitas es revisar tu estrategia antes que tu diseño.",
      },
      { type: "h2", text: "Qué hacer y qué no hacer si tienes una pyme" },
      { type: "p", text: "Lo que sí te recomiendo:" },
      {
        type: "list",
        items: [
          "Empieza por un diagnóstico: pregunta a tus clientes qué reconocen y valoran de tu marca antes de tocar cualquier cosa.",
          "Si tu negocio no ha cambiado, considera primero un refresh: ordena colores, tipografías y aplicaciones, como hizo Coca-Cola.",
          "Si tu negocio sí cambió (nuevos servicios, otro público, otro mercado), define primero qué quieres representar y después diseña.",
          "Resume el cambio en una frase que tus clientes entiendan, como hizo Avianca con «el cielo es de todos».",
          "Haz el cambio por etapas y cuéntale a tu gente lo que está pasando, como está haciendo Zepol.",
          "Crea una guía sencilla para que todos usen la marca de la misma forma, desde las redes hasta la factura.",
        ],
      },
      { type: "p", text: "Lo que te recomiendo evitar:" },
      {
        type: "list",
        items: [
          "Cambiar el logo solo porque te aburriste de verlo, como le pasó a GAP.",
          "Borrar de golpe los símbolos que tus clientes reconocen.",
          "Presentar una imagen nueva antes de tener el producto o la experiencia que la respalde, que fue el gran riesgo de Jaguar.",
          "Pensar que un logo nuevo va a resolver problemas de ventas, servicio o precio.",
          "Dejar que cada proveedor o colaborador aplique la marca \"a su manera\".",
        ],
      },
      { type: "h2", text: "Una marca cambia bien cuando la gente entiende por qué" },
      {
        type: "p",
        text: "Cambiar de imagen puede ser una de las mejores decisiones para tu empresa, siempre que llegue en el momento correcto y por las razones correctas. Las marcas que la gente quiere tienen algo de propiedad compartida, y cuando decides renovarlas también estás tocando la memoria y la confianza de tus clientes.",
      },
      {
        type: "p",
        text: "Si estás pensando en un rebranding y quieres saber si es el momento, escríbeme. En Brand Lab acompañamos a las empresas a descubrir qué representa realmente su marca antes de decidir qué cambiar. Y si este artículo te sirvió, sígueme en Instagram como @brandlab_bysamuel para seguir conversando de marcas con significado.",
      },
    ],
  },
  {
    slug: "tu-marca-necesita-cara-en-la-era-de-la-ia",
    img: "/brand/blog/cover-tu-marca-cara.jpg",
    date: "11 de octubre de 2026",
    dateISO: "2026-10-11",
    readMinutes: 7,
    cat: "Tendencias",
    keywords: ["branding", "marca personal", "inteligencia artificial", "autenticidad de marca", "identidad de marca", "marketing digital"],
    title: "Tu marca necesita cara: lo que Apple nos recordó en la era de la IA",
    excerpt:
      "Apple mostró sus manos esculpiendo stop-motion justo cuando todos asumían que era IA. Lo que los datos dicen sobre **autenticidad de marca**, **confianza** y por qué ponerle cara a tu marca importa más que nunca.",
    body: [
      { type: "h2", text: "Cuando todo empieza a verse igual" },
      {
        type: "p",
        text: "Haz una prueba sencilla esta noche. Abre Instagram, recorre los anuncios de tu ciudad y fíjate en cuántos comparten la misma luz brillante, las mismas personas perfectas y los mismos fondos que parecen sacados de un sueño genérico.",
      },
      {
        type: "p",
        text: "La inteligencia artificial nos dio una capacidad enorme para producir rápido y barato. Esa misma facilidad está haciendo que miles de marcas terminen pareciéndose entre sí, y cuando el cliente ya no distingue quién es quién, la decisión suele caer en el precio.",
      },
      {
        type: "p",
        text: "En Brand Lab creemos que una marca existe para provocar lo contrario: que alguien te reconozca, te recuerde y te elija por lo que significas. Por eso vale la pena hacernos una pregunta incómoda antes de generar la próxima imagen.",
      },
      {
        type: "quote",
        text: "¿La IA está ayudando a que tu marca se vea más tuya, o está ayudando a que se parezca a todas las demás?",
      },
      {
        type: "p",
        text: "Para responderla quiero contarte lo que acaba de hacer Apple, una de las marcas más valiosas del planeta, y lo que dicen los datos sobre cómo reaccionan las personas frente a la publicidad hecha con IA.",
      },
      { type: "h2", text: "El anuncio de Apple que parecía IA y fue hecho a mano" },
      {
        type: "p",
        text: "A finales de septiembre de 2026, Apple lanzó un anuncio para Apple Games lleno de personajes, escenarios y movimientos tan pulidos que muchas personas asumieron que había sido generado con inteligencia artificial. La respuesta de la marca fue mostrar el proceso completo.",
      },
      {
        type: "p",
        text: "Apple publicó un video detrás de cámaras titulado Apple Games: Behind the Scenes of Stop-Motion Animation. Según Creative Bloq, en él se ve a un equipo esculpiendo y pintando a mano los personajes, construyendo sets reales y moviéndolos cuadro por cuadro con la técnica de stop-motion, apoyados en software de animación sobre Mac.",
      },
      {
        type: "p",
        text: "Un mes antes, Apple ya había hecho lo mismo con la nueva Mac mini con chip M6. El anuncio, titulado The Mighty Mac Mini, muestra la computadora transformándose en un fisicoculturista, un auto de carreras y un cohete, todo en plastilina animada cuadro por cuadro. Cuando algunas personas se preguntaron si era IA, Apple respondió con un video detrás de cámaras donde se ve a los animadores esculpiendo y pintando la arcilla a mano, como reportó Creative Bloq.",
      },
      {
        type: "p",
        text: "Detrás de esa pieza trabajó un equipo completo de personas: la agencia TBWA\\Media Arts Lab, los estudios de animación Blinkink y Stoopid Buddy Stoodios y el director Nicos Livesey, según B&T. El animador Justin Dasch describió a la Mac mini como un personaje capaz de cualquier cosa, y esa idea resume bien la intención: darle alma a un producto a través del oficio humano.",
      },
      {
        type: "p",
        text: "Lo interesante es que Apple ya venía construyendo esta línea narrativa desde hace meses, y el patrón se repite con claridad:",
      },
      {
        type: "list",
        items: [
          "Apple TV (noviembre 2025): la nueva animación del logo se hizo con piezas de vidrio reales, luz y movimiento físico, captadas en cámara y sin IA, de acuerdo con Mezha, que cita a Apple y menciona un video del proceso publicado por Ad Age.",
          "“A Critter Carol” (diciembre 2025): el anuncio navideño usó títeres de animales hechos a mano, un bosque en miniatura y titiriteros trabajando bajo el set. Lo digital se limitó a borrar a los titiriteros y extender fondos, y Apple también mostró el detrás de cámaras, como documentó Fast Company.",
          "MacBook Neo (2026): Apple publicó un video corto que describió como un vistazo a su “magia hecha a mano”, con utilería física, fuegos artificiales en stop-motion y pequeños cañones de confeti, según PetaPixel.",
        ],
      },
      {
        type: "p",
        text: "Apple tiene acceso a la mejor tecnología del mundo y aun así decidió enseñar las manos, el tiempo y el oficio detrás de su publicidad. Esa decisión comunica algo poderoso: en un mercado saturado de contenido sintético, mostrar el proceso humano se convierte en una prueba de **autenticidad de marca** y en un argumento de marca por sí mismo.",
      },
      { type: "h2", text: "Lo que dicen los datos sobre confianza y autenticidad" },
      {
        type: "p",
        text: "La decisión de Apple tiene respaldo en la investigación de mercado, y vale la pena mirar tres estudios que cualquier dueño de negocio debería conocer.",
      },
      {
        type: "list",
        items: [
          "Las personas detectan la IA y la recuerdan menos. En diciembre de 2024, NielsenIQ analizó con neurociencia la reacción de los consumidores frente a anuncios generados con IA. Los participantes los percibieron como más molestos, aburridos y confusos, e incluso los que estaban bien hechos activaron menos la memoria que los anuncios tradicionales. Para una marca, ser olvidada es el costo más alto que existe.",
          "La autenticidad es la base de la confianza. El reporte Building Trust in the Age of AI de Getty Images, basado en más de 30,000 adultos en 25 países, encontró que el 98% considera que las imágenes y videos auténticos son fundamentales para confiar, y casi 9 de cada 10 quieren saber si una imagen fue creada con IA.",
          "Lo humano se está volviendo posicionamiento. Entre sus predicciones de marketing, Gartner anticipó que para 2027 el 20% de las marcas construirá su diferenciación precisamente en la ausencia de IA en sus productos y comunicación.",
        ],
      },
      {
        type: "p",
        text: "Cuando juntamos las tres piezas, el mensaje es claro: la tecnología acelera la producción, pero la **confianza de marca** se sigue construyendo con verdad, con rostros reales y con historias que solo tú puedes contar.",
      },
      { type: "h2", text: "Cuando las grandes marcas usan la IA sin filtro" },
      {
        type: "p",
        text: "Mientras Apple enseñaba sus títeres, otras marcas gigantes aprendían la lección por el camino difícil.",
      },
      {
        type: "p",
        text: "En diciembre de 2025, McDonald's Países Bajos retiró su anuncio navideño generado con IA después de una ola de críticas en redes. Las personas lo describieron como un contenido sin alma, con imágenes extrañas y una sensación de caos que poco tenía que ver con el espíritu de la temporada, según reportó TechRadar.",
      },
      {
        type: "p",
        text: "Coca-Cola, una de las marcas con más tradición navideña en la publicidad, también recibió críticas por sus anuncios festivos hechos con IA, un contraste que Fast Company destacó al analizar el anuncio artesanal de Apple.",
      },
      {
        type: "p",
        text: "Estas empresas tienen presupuestos millonarios, agencias de primer nivel y décadas de construcción de marca. Aun así, el público reaccionó con rapidez cuando sintió que la emoción había sido reemplazada por eficiencia. La lección para cualquier negocio es que la herramienta nunca sustituye el criterio, y que cada pieza que publicas suma o resta confianza a tu marca.",
      },
      { type: "h2", text: "Qué puede hacer una pyme a partir de mañana" },
      {
        type: "p",
        text: "No necesitas el presupuesto de Apple para aplicar su principio. Lo que necesitas es intención y algunas decisiones conscientes.",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Usa la IA para pensar y ordenar, y deja lo visible en manos humanas. Puede ayudarte a investigar, organizar ideas o redactar borradores. Las fotos de tu equipo, tu local y tus clientes reales construyen una confianza que ninguna imagen generada puede igualar.",
          "Muestra tu proceso. Así como Apple enseñó sus sets y títeres, tú puedes enseñar cómo preparas un pedido, cómo diseñas un servicio o quién está detrás de cada entrega. El detrás de cámaras humaniza y diferencia.",
          "Pon cara a tu marca. Las personas confían en personas. Que tu cliente sepa quién eres, cómo piensas y por qué haces lo que haces.",
          "Define un filtro antes de publicar. Pregúntate si esa pieza podría ser de cualquier otra marca. Si la respuesta es sí, todavía le falta tu identidad.",
          "Sé transparente. Si usaste IA en algo visible, dilo. La transparencia protege la reputación y responde a lo que los consumidores ya están pidiendo.",
        ],
      },
      {
        type: "p",
        text: "La autenticidad se construye con constancia, una publicación a la vez, y con el tiempo se convierte en algo que tu competencia no puede copiar.",
      },
      { type: "h2", text: "La tecnología suma cuando la marca sabe quién es" },
      {
        type: "p",
        text: "La inteligencia artificial llegó para quedarse, y bien usada puede liberar tiempo, ordenar ideas y abrir posibilidades creativas. El riesgo aparece cuando la usamos para llenar espacios sin preguntarnos qué queremos significar para las personas.",
      },
      {
        type: "p",
        text: "Apple lo entendió y decidió enseñar sus manos. McDonald's Países Bajos lo aprendió retirando un anuncio. Entre ambos extremos está la oportunidad para miles de pymes que pueden diferenciarse con algo que ninguna herramienta genera por sí sola: su historia, su gente y su forma de hacer las cosas.",
      },
      {
        type: "p",
        text: "En Brand Lab acompañamos a empresas y emprendedores a descubrir quiénes son, definir qué representan y construir marcas que las personas reconozcan y elijan. Si sientes que tu marca empieza a verse como todas las demás, conversemos. Escríbeme en Instagram a @brandlab_bysamuel.",
      },
      { type: "quote", text: "We don't sell, we mean!" },
    ],
  },
  {
    slug: "publicar-mas-no-te-hace-inolvidable",
    img: "/brand/blog/cover-publicar-mas.jpg",
    date: "1 de octubre de 2026",
    dateISO: "2026-10-01",
    readMinutes: 8,
    cat: "Estrategia de marca",
    keywords: ["estrategia de marca", "branding", "Kantar BrandZ", "marketing de contenidos", "identidad de marca", "posicionamiento de marca"],
    title: "Publicar más no te hace inolvidable",
    excerpt:
      "Publicar todos los días no es lo mismo que ser recordado. Lo que el ranking Kantar BrandZ 2026 enseña sobre **identidad de marca**, **significado de marca** y por qué la frecuencia sin claridad solo construye confusión.",
    body: [
      { type: "h2", text: "Publicas todos los días y nadie te recuerda" },
      {
        type: "p",
        text: "Conozco muy bien esa sensación. Una marca publica a diario, cuida el calendario, prueba formatos nuevos y sigue cada tendencia, pero al final del mes las ventas no se mueven y nadie menciona su nombre cuando alguien pide una recomendación.",
      },
      {
        type: "p",
        text: "Muchos dueños de negocio responden a esa frustración publicando todavía más. Suben la frecuencia, contratan otra herramienta o cambian de agencia, con la esperanza de que el volumen termine haciendo el trabajo que la estrategia nunca hizo.",
      },
      {
        type: "p",
        text: "La constancia es valiosa, y en Brand Lab la recomendamos siempre. El problema aparece cuando se publica con constancia algo que todavía no tiene una **identidad de marca** clara, porque entonces lo único que se repite es la confusión.",
      },
      {
        type: "p",
        text: "En este artículo quiero explicarte por qué ocurre esto, qué nos enseña el ranking Kantar BrandZ 2026 sobre las marcas más valiosas del mundo y qué puede hacer tu negocio para dejar de ser uno más en el feed.",
      },
      { type: "h2", text: "El marketing amplifica lo que tu marca ya es" },
      {
        type: "p",
        text: "Me gusta pensar en el marketing como un altavoz. Toma una voz y la hace llegar más lejos, a más personas y con más fuerza. Si esa voz tiene un mensaje claro, el altavoz multiplica su impacto. Si la voz titubea, cambia de tono cada semana o intenta decirlo todo a la vez, el altavoz también multiplica esa confusión.",
      },
      {
        type: "p",
        text: "Por eso el orden importa tanto. Antes de decidir cuánto publicar, una marca necesita responder con claridad tres preguntas que parecen simples y casi nadie se toma el tiempo de contestar:",
      },
      {
        type: "list",
        items: [
          "¿Quién soy? El propósito y los valores que guían cada decisión.",
          "¿Para quién existo? La persona concreta cuyo problema resuelvo mejor que nadie.",
          "¿Por qué deberían elegirme? La diferencia real que el cliente puede sentir y explicar con sus propias palabras.",
        ],
      },
      {
        type: "p",
        text: "Cuando esas respuestas existen, cada publicación suma a una misma idea y la memoria del cliente se va construyendo pieza por pieza. Cuando no existen, cada publicación cuenta una historia distinta y el cliente termina sin saber qué recordar.",
      },
      {
        type: "p",
        text: "Los datos de Kantar respaldan esta intuición con mucha claridad, como veremos a continuación.",
      },
      { type: "h2", text: "Kantar BrandZ 2026 explicado de forma sencilla" },
      {
        type: "p",
        text: "Kantar BrandZ es uno de los rankings de valor de marca más reconocidos del mundo, y en 2026 llegó a su edición número 21. Su particularidad es que combina el desempeño financiero de las empresas con lo que piensan y sienten millones de consumidores sobre cada marca. En otras palabras, mide cuánto vale una marca por el lugar que ocupa en la mente de las personas.",
      },
      {
        type: "p",
        text: "El resultado de este año es histórico. Las 100 marcas más valiosas suman 13.1 billones de dólares, un 22% más que el año anterior, según Kantar.",
      },
      {
        type: "table",
        primaryColumns: 2,
        headers: ["Puesto", "Marca", "Valor (millones de USD)", "Variación anual"],
        rows: [
          ["1", "Google", "1,484,895", "+57%"],
          ["2", "Apple", "1,380,294", "+6%"],
          ["3", "Microsoft", "1,111,788", "+26%"],
          ["4", "Amazon", "1,022,820", "+18%"],
          ["5", "NVIDIA", "814,906", "+60%"],
          ["6", "Facebook", "366,624", "+22%"],
          ["7", "Instagram", "286,158", "+25%"],
          ["8", "Tencent", "251,551", "+45%"],
          ["9", "Oracle", "235,838", "+10%"],
          ["10", "McDonald's", "235,095", "+6%"],
        ],
      },
      { type: "p", text: "Algunos datos que vale la pena destacar:" },
      {
        type: "list",
        items: [
          "Google recuperó el primer lugar por primera vez desde 2018 y terminó con cuatro años consecutivos de Apple en la cima.",
          "ChatGPT creció 285%, el mayor aumento del ranking, y Claude debutó en el puesto 27 con un valor de 96,600 millones de dólares.",
          "McDonald's es la única marca fuera de la tecnología en el top 10, como señaló Marketing Week.",
          "Zara superó a Nike como la marca de moda más valiosa, y Hermès superó a Louis Vuitton en lujo.",
        ],
      },
      {
        type: "p",
        text: "Pero el hallazgo más importante para cualquier negocio está detrás de los números. Kantar explica que las marcas fuertes comparten tres cualidades al mismo tiempo: son significativas, porque conectan emocionalmente y resuelven necesidades reales; son diferentes, porque ofrecen algo que la gente percibe como único; y son sobresalientes, porque vienen a la mente en el momento de decidir.",
      },
      { type: "h2", text: "Puntos de alerta que deja el ranking" },
      {
        type: "p",
        text: "Más allá de los nombres famosos, BrandZ 2026 enciende varias luces amarillas que aplican tanto a una multinacional como a una pyme en Managua.",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Perder significado cuesta crecimiento. Las marcas que fortalecieron su significado y relevancia para las personas aumentaron su valor en promedio 129% entre 2019 y 2026, mientras que las que lo perdieron crecieron 80% en el mismo periodo, según Marketing Week. La diferencia entre ambas cifras es el precio de no saber quién eres.",
          "La mayor parte de la mente es emocional. De acuerdo con el análisis de BrandZ 2026 publicado por Merca2.0, solo una tercera parte de las asociaciones que las personas tienen con una marca son funcionales. Las otras dos terceras partes tienen que ver con emociones, cultura y conexiones personales. Una marca que solo habla de precio y características compite por el espacio más pequeño.",
          "El significado sostiene el precio. En categorías como moda y cuidado personal, el significado explica el 46% del poder de fijación de precios de una marca, también según Marketing Week. Cuando el cliente no entiende qué te hace distinto, la única referencia que le queda es cuánto cuestas.",
          "La IA ya decide quién aparece. Kantar advierte que la IA genera más señales, decisiones más rápidas y menos claridad sobre lo que importa, y que ser significativo y diferente pesa más ahora que las máquinas eligen qué contenido mostrar. En el cuidado de la piel, por ejemplo, La Roche-Posay y CeraVe aparecieron cada una en cerca del 11% de las respuestas de los modelos de lenguaje. Si tu marca no tiene una identidad clara, a la IA también le costará recomendarte.",
          "Nadie tiene el trono asegurado. Apple creció solo 6% y perdió el primer lugar, mientras que Louis Vuitton y Chanel fueron las únicas marcas europeas del ranking que cayeron, en medio de condiciones de mercado complicadas, según Kantar. Una marca se construye todos los días, incluso cuando ya es líder.",
        ],
      },
      { type: "h2", text: "Puntos de mejora para tu marca" },
      {
        type: "p",
        text: "Kantar ha estudiado durante más de una década qué hace crecer a las marcas. En su Blueprint for Brand Growth, construido con más de 6,500 millones de datos de consumidores y compradores, encontró que las marcas percibidas como significativamente diferentes por más personas pueden alcanzar hasta 5 veces más penetración de mercado y cobrar hasta el doble del precio promedio de su categoría, según Kantar.",
      },
      {
        type: "p",
        text: "Esa es una buena noticia para una pyme, porque significado y diferencia no dependen del tamaño del presupuesto. Dependen de decisiones claras, y estas son las que yo recomendaría empezar a tomar hoy:",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Define tu idea central antes de tu calendario. Escribe en una sola frase qué quieres que la gente recuerde de tu marca. Cada publicación debería acercar al cliente a esa frase.",
          "Haz una auditoría de tus últimas 20 publicaciones. Tapa el logo y pregúntate si alguien podría reconocer que son tuyas. Si la respuesta es no, hay trabajo de identidad pendiente.",
          "Habla al corazón además de al bolsillo. Si dos terceras partes de lo que la gente asocia con una marca es emocional, tu contenido necesita historias, valores y personas, además de productos y promociones.",
          "Elige pocos mensajes y repítelos con creatividad. La memoria se construye con coherencia. Cambiar de tema cada semana se siente dinámico, pero obliga al cliente a empezar de cero cada vez.",
          "Prepárate para ser encontrado por la IA. Describe tu negocio con claridad y de forma consistente en tu web, tus redes y tus perfiles. Una marca coherente es más fácil de entender para las personas y para las máquinas que hoy las recomiendan.",
          "Mide recuerdo, además de alcance. Pregunta a tus clientes cómo te conocieron y qué palabra asocian con tu marca. Esa respuesta vale más que cualquier cifra de impresiones.",
        ],
      },
      { type: "h2", text: "Primero claridad, después volumen" },
      {
        type: "p",
        text: "Las marcas más valiosas del mundo invierten miles de millones en marketing, y aun así lo que Kantar mide al final es algo muy humano: si las personas sienten que esa marca significa algo para ellas, si la perciben distinta y si la recuerdan cuando llega el momento de elegir.",
      },
      {
        type: "p",
        text: "Tu negocio puede jugar ese mismo juego a su escala. Publicar con constancia sigue siendo importante, y rinde mucho más cuando cada publicación amplifica una identidad clara. Ahí es donde el marketing deja de ser ruido y se convierte en memoria.",
      },
      {
        type: "p",
        text: "En Brand Lab ayudamos a empresas y emprendedores a definir quiénes son, para quién existen y por qué deberían ser elegidos, antes de salir a hacer ruido. Si sientes que publicas mucho y te recuerdan poco, conversemos. Escríbeme en Instagram a @brandlab_bysamuel.",
      },
      { type: "quote", text: "We don't sell, we mean!" },
    ],
  },
  {
    slug: "tres-marcas-cruzaron-el-billon-de-dolares",
    img: "/brand/blog/cover-kantar-brandz.jpg",
    date: "29 de septiembre de 2026",
    dateISO: "2026-09-29",
    readMinutes: 4,
    cat: "Valor de marca",
    keywords: ["valor de marca", "branding", "Kantar BrandZ", "coherencia de marca", "marcas más valiosas del mundo"],
    title: "Tres marcas cruzaron el billón de dólares. Ninguna vendiendo más barato",
    excerpt:
      "El **valor de marca** no se factura, se acumula una decisión de confianza a la vez. No hay atajo para eso: solo tiempo y **coherencia de marca**.",
    body: [
      {
        type: "p",
        text: "Esta semana Kantar publicó su reporte BrandZ 2026, y hay un dato que vale la pena mirar dos veces: el valor combinado de las 100 marcas más valiosas del mundo llegó a 13.1 billones de dólares, un 22% más que el año anterior. Es el salto más grande en los 21 años de historia del ranking.",
      },
      {
        type: "p",
        text: "Pero el dato que de verdad me interesa como estratega no es el total. Es que, por primera vez, tres marcas cruzaron juntas la línea del billón de dólares en el mismo año: Google, Microsoft y Amazon se sumaron a Apple por encima de esa cifra. Cuatro marcas, un billón de dólares cada una, al mismo tiempo.",
      },
      {
        type: "p",
        text: "Hay una idea incómoda en esto para quien todavía piensa en marca como logo, y es la que más defiendo: una marca es una promesa que vive en la mente de las personas, no un activo que se declara en un balance. El billón de dólares no lo puso un algoritmo de valuación. Lo pusieron millones de personas, decidiendo todos los días que esa promesa era lo suficientemente sólida como para confiarle su dinero, su atención, su rutina completa.",
      },
      { type: "quote", text: "El valor de marca no se factura. Se acumula, una decisión de confianza a la vez." },
      {
        type: "p",
        text: "Lo que estas cuatro marcas comparten no es sector, ni tamaño, ni estrategia de producto. Comparten algo más difícil de fabricar: llevan años siendo exactamente lo que dicen ser, sin que ese 'qué son' se les mueva cada trimestre. Esa coherencia, sostenida el tiempo suficiente, es lo que convierte la percepción en confianza, y la confianza en valor económico medible.",
      },
      {
        type: "p",
        text: "Para una marca personal o una empresa que apenas construye su lugar, la lección no es 'hazte una big tech'. Es más simple: cada decisión de marca que tomas hoy —qué dices, qué callas, qué prometes y cumples— se acumula. No hay atajo para eso. Solo hay tiempo, coherencia, y la disciplina de no traicionar, por una campaña más vistosa, lo que ya decidiste que tu marca representa.",
      },
      {
        type: "p",
        text: "El billón de dólares no fue el objetivo de ninguna de esas marcas. Fue la consecuencia de años haciendo bien una sola cosa: significar algo claro, y no dejar de significarlo.",
      },
    ],
  },
  {
    slug: "el-banco-me-dijo-que-me-queria",
    img: "/brand/blog/cover-banco.jpg",
    date: "25 de septiembre de 2026",
    dateISO: "2026-09-25",
    readMinutes: 3,
    cat: "Vivencias de marca",
    keywords: ["branding", "experiencia de cliente", "confianza de marca", "marketing", "significado de marca"],
    title: "El banco me dijo que me quería, y no me pudo ayudar cuando más lo necesité",
    excerpt: "Una marca fuerte no compite por precio, compite por **significado de marca**.",
    body: [
      {
        type: "p",
        text: "Vos sabés cuando alguien te promete algo bonito y después la vida real te demuestra lo contrario, ¿verdad? Eso me pasó con mi banco.",
      },
      {
        type: "p",
        text: "En su publicidad se llenan la boca hablando de cercanía, de que están 'en pro de la gente'. Bonito discurso. Pero durante semanas alguien estuvo intentando entrar a mi cuenta una y otra vez, y cada intento fallido terminaba bloqueándome a mí: no podía hacer transacciones. Lo único que necesitaba era cambiar mi usuario para cortarle el acceso a quien fuera que estuviera insistiendo. Simple, ¿no? Pues no me pudieron ayudar. Bonita en la valla publicitaria, ausente justo cuando de verdad la necesitaba.",
      },
      {
        type: "p",
        text: "Esto no es un problema de mal servicio nada más. El **branding** no es un departamento, es el alma de la empresa completa. No es tarea exclusiva de marketing, es la forma en que una organización entera —desde quien contesta el teléfono hasta quien diseña los protocolos de seguridad— cumple, o traiciona, lo que promete ser. Cuando una marca dice una cosa y su gente vive otra, no hace falta que el cliente sea experto en branding para sentir la trampa. Lo siente en la piel.",
      },
      {
        type: "p",
        text: "Casi la misma semana viví lo opuesto. Dejé una barbería a la que fui fiel por años. No fue por el precio, fue porque perdí el valor: la plática se volvió mecánica, el detalle desapareció. Me cambié a otra, más cara, sí, pero ahí la propuesta superaba por mucho lo que cobraban. No lo dudé: pagué de más con gusto, porque sentí que valía más.",
      },
      {
        type: "p",
        text: "Ahí está la prueba más honesta de que una marca fuerte no compite por precio, compite por significado. Cuando tu esencia, tus valores y tu experiencia caminan juntos, el precio deja de ser el argumento. Se vuelve un detalle.",
      },
      {
        type: "p",
        text: "Si alguna vez sentiste que tu negocio compite solo bajando precios, o que tu propia marca promete una cosa y entrega otra, quiero que sepas algo: no estás solo, y esto no se arregla poniéndole un logo nuevo a la fachada. Se arregla construyendo desde adentro.",
      },
      {
        type: "p",
        text: "Contame: ¿te ha pasado algo parecido, con una marca a la que le creíste y te falló, o con una que te ganó por su forma de tratarte, aunque costara más? En serio quiero leer tu historia.",
      },
    ],
  },
  {
    slug: "los-cmos-europeos-ya-eligieron",
    img: "/brand/blog/cover-mckinsey.jpg",
    date: "22 de septiembre de 2026",
    dateISO: "2026-09-22",
    readMinutes: 4,
    cat: "Tendencias",
    keywords: ["branding", "marketing", "inteligencia artificial", "estrategia de marca", "CMO"],
    title: "Los CMOs europeos ya eligieron: el branding le ganó a la IA",
    excerpt:
      "500 líderes de marketing pusieron la **construcción de marca** por encima de la inteligencia artificial. Cuando todo es incierto, la marca es donde la gente busca certeza.",
    body: [
      {
        type: "p",
        text: "McKinsey acaba de encuestar a 500 líderes de marketing en catorce industrias de Europa para su reporte State of Marketing Europe 2026. Les preguntó cuál era su prioridad número uno para este año. La respuesta no fue la inteligencia artificial generativa ni la agéntica —esa quedó en el puesto 17 de 20—. La respuesta fue el **branding**.",
      },
      {
        type: "p",
        text: "Sorprende, y con razón. En un momento en que cada conversación de marketing parece obligada a mencionar la inteligencia artificial, que quinientos CMOs coloquen la construcción de marca por encima de la tecnología dice algo importante sobre hacia dónde está mirando de verdad la industria cuando nadie está actuando para la foto.",
      },
      {
        type: "p",
        text: "Esto es algo que llevo años diciendo, y ver que quinientos CMOs lo confirman con datos se siente menos como sorpresa y más como alivio: una marca es una promesa que vive en la mente de las personas, no una campaña ni una herramienta. Cuando el terreno se vuelve incierto, las personas y las empresas gravitan hacia lo que ya reconocen y en lo que ya confían. La incertidumbre no debilita el valor del significado. Lo hace más necesario.",
      },
      {
        type: "quote",
        text: "Cuando todo se vuelve incierto, la marca deja de ser una línea de presupuesto y se convierte en el lugar donde la gente busca certeza.",
      },
      {
        type: "p",
        text: "El reporte recupera la investigación de Binet y Field, ya clásica, que sitúa la proporción ideal entre construcción de marca de largo plazo y activación de ventas de corto plazo en 60:40. La mayoría de los equipos, dice McKinsey, opera muy por debajo de ese nivel — atrapados en el ciclo del resultado inmediato, aunque sepan que no es ahí donde se construye valor duradero.",
      },
      {
        type: "p",
        text: "Esto tampoco es una historia contra la IA. El propio reporte lo aclara: la IA está acelerando la ejecución creativa, comprimiendo tiempos y costos. Pero acelerar la ejecución no es lo mismo que resolver la estrategia. La IA puede producir más contenido en menos tiempo. No puede decidir, por ti, qué es lo que tu marca debería significar.",
      },
      {
        type: "p",
        text: "Que quinientos CMOs europeos hayan llegado a la misma conclusión no es casualidad. Es una corrección de rumbo. Y como toda corrección de rumbo bien hecha, no rechaza la herramienta nueva: simplemente recuerda cuál es la pregunta que la herramienta no puede responder por ti.",
      },
    ],
  },
  {
    slug: "2800-millones-no-compraron-un-logo",
    img: "/brand/blog/cover-fifa-sponsorship.jpg",
    date: "15 de septiembre de 2026",
    dateISO: "2026-09-15",
    readMinutes: 4,
    cat: "Influencia",
    keywords: ["patrocinio de marca", "branding", "marketing deportivo", "FIFA Mundial 2026", "influencia de marca"],
    title: "$2,800 millones no compraron un logo. Compraron un lugar en la memoria",
    excerpt:
      "La **relevancia de marca** vence a la visibilidad. El presupuesto compra el escenario; la estrategia decide qué recuerdo dejar en él.",
    body: [
      {
        type: "p",
        text: "Barron's proyectó los ingresos de patrocinio de la FIFA para el Mundial 2026 en 2,800 millones de dólares, casi mil millones más que en el torneo anterior. Es una cifra que invita a una pregunta simple: ¿qué compraron exactamente esas marcas con ese dinero? Forbes lo dice sin rodeos: no fue un logo.",
      },
      {
        type: "p",
        text: "Lo que sí compraron fue acceso. Fan fests activos en trece ciudades sede que ya superan los dos millones de visitantes. adidas montando watch parties y torneos en cinco ciudades. Bank of America entregando bandas personalizadas. Home Depot construyendo zonas DIY que cambian según la cultura de cada ciudad. Ninguna activación se parece a la otra, y esa es exactamente la razón por la que funcionan.",
      },
      {
        type: "p",
        text: "Hay una ley de marketing que explica esto mejor que cualquier cifra de patrocinio: la ley de Byron Sharp de que la relevancia vence a la visibilidad. Un logo en una valla es visible. Una banda personalizada que un aficionado se lleva a casa, se recuerda. La diferencia no es de presupuesto — es de decisión estratégica sobre qué tipo de recuerdo quiere dejar la marca.",
      },
      { type: "quote", text: "La relevancia vence a la visibilidad." },
      {
        type: "p",
        text: "Esto no es exclusivo de marcas con presupuestos de miles de millones. Es una lógica que se traduce a cualquier escala: patrocinar un evento local, activar un stand en una feria, aparecer en la conversación de un lanzamiento ajeno. La pregunta de fondo es la misma: ¿estamos comprando un espacio para que nos vean, o un momento que alguien va a recordar?",
      },
      {
        type: "p",
        text: "Unilever activó ahí su patrocinio deportivo más grande en la historia de la marca — no como una campaña de un mes, sino como una apuesta construida sobre meses de anticipación pública. El patrocinio de un evento mundial no se gana el día del partido. Se construye en la espera, en cada activación que ocurre antes del primer silbatazo.",
      },
      {
        type: "p",
        text: "Para cualquier marca, grande o pequeña, la lección es la misma: el presupuesto compra el escenario. La estrategia — saber qué recuerdo dejar en ese escenario — es lo que realmente compra un lugar en la memoria de alguien.",
      },
    ],
  },
  {
    slug: "lo-que-gap-entendio-de-hailey-bieber",
    img: "/brand/blog/cover-gap-hailey.jpg",
    date: "8 de septiembre de 2026",
    dateISO: "2026-09-08",
    readMinutes: 3,
    cat: "Estrategia de marca",
    keywords: ["branding", "colaboraciones de marca", "marketing de influencers", "estrategia de marca"],
    title: "Lo que Gap entendió de Hailey Bieber que casi ninguna marca entiende",
    excerpt:
      "Prestar un rostro es una decisión de medios; prestar criterio es una **decisión estratégica de marca** — y solo una construye marca a largo plazo.",
    body: [
      {
        type: "p",
        text: "Gap lanzó el 16 de julio 'The Hailey Jean', una cápsula de dos siluetas de mezclilla junto a Hailey Bieber. En cuestión de horas se agotó en tienda y en línea, y los titulares hablaron de una histeria genuina alrededor de un jean de menos de 100 dólares. Lo fácil es leer esto como una historia de fama: una modelo con millones de seguidores presta su nombre, la marca vende. Pero esa lectura se queda corta, y es justo lo que me hizo detenerme en lo que Gap decidió meses antes de que la campaña saliera al aire.",
      },
      {
        type: "p",
        text: "Bieber no solo posó para las fotos. Participó en el diseño de las siluetas, en el surtido de la colección y en el mensaje con el que se comunicó. Esa diferencia —entre prestar un rostro y prestar criterio— es la que, para mí, separa a una colaboración que se olvida en tres semanas de una que construye marca a largo plazo.",
      },
      {
        type: "p",
        text: "Y aquí está lo que más me interesa como estratega: contratar a alguien famoso para que aparezca en una campaña es una decisión de medios. Invitar a esa persona a decidir contigo —qué se fabrica, cómo se vende, qué se dice— es una decisión estratégica. Solo una de las dos construye algo que sobrevive a la campaña.",
      },
      {
        type: "quote",
        text: "Una colaboración que solo presta una cara se olvida en semanas. Una que presta criterio, se vuelve parte de la historia de la marca.",
      },
      {
        type: "p",
        text: "Hay otro detalle que casi nadie menciona: Bieber ya vestía así —denim relajado, siluetas noventeras— antes de que existiera un contrato. La colección no le queda bien porque la viste una celebridad. Le queda bien porque es, literalmente, su estilo real, traducido a producto. Y eso, para mí, es la prueba de que lo visual, lo verbal y lo que vive la gente tienen que decir la misma verdad, o la audiencia lo nota de inmediato.",
      },
      {
        type: "p",
        text: "La lección para cualquier marca que esté pensando en su próxima cara visible no es 'consigue a alguien famoso'. Es más incómoda que eso: si vas a prestar la imagen de alguien, presta también un espacio real en la decisión. Lo demás es solo publicidad con un rostro conocido encima, y esa fórmula, tarde o temprano, deja de funcionar.",
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

/** Strips the `**bold**` markup used in body/excerpt text, for contexts that render plain text only (meta descriptions, JSON-LD, OG tags). */
export function plainText(text: string): string {
  return text.replace(/\*\*(.+?)\*\*/g, "$1");
}
