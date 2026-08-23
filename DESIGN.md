---
name: Brand Lab by Samu
description: Branding con significado — navy de laboratorio, naranja como reactivo, tipografía que afirma.
colors:
  navy: "#023047"
  navy-2: "#0b3c53"
  ink: "#02222f"
  abyss: "#04141d"
  abyss-surface: "#0d2b3a"
  abyss-floor: "#020c12"
  orange: "#fb8500"
  orange-ink: "#9e5204"
  on-orange: "#572b02"
  yellow: "#ffb703"
  blue: "#219ebc"
  blue-ink: "#057087"
  sky: "#8ecae6"
  paper: "#fbfaf7"
  bone: "#f4f1ea"
  mist: "#eef4f6"
  body-ink: "#42525c"
  body-muted: "#6b7880"
  body-on-navy: "#aebfc8"
  body-on-abyss: "#9fb3bc"
  on-dark-strong: "#e6edf0"
  on-dark-soft: "#c9d6db"
  muted-dark: "#8a9ba6"
  quiet: "#7d919e"
  sand: "#e9e6df"
  red: "#e52e31"
typography:
  manifesto:
    fontFamily: "Onest, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 9.6vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.045em"
  display:
    fontFamily: "Onest, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 6.4vw, 4.75rem)"
    fontWeight: 800
    lineHeight: 0.94
    letterSpacing: "-0.042em"
  headline:
    fontFamily: "Onest, system-ui, sans-serif"
    fontSize: "clamp(1.9375rem, 4.9vw, 3.25rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  subhead:
    fontFamily: "Onest, system-ui, sans-serif"
    fontSize: "clamp(1.5625rem, 3.1vw, 2.125rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  title-lg:
    fontFamily: "Onest, system-ui, sans-serif"
    fontSize: "1.625rem"
    fontWeight: 800
    lineHeight: 1.12
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Onest, system-ui, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 700
    lineHeight: 1.18
    letterSpacing: "-0.02em"
  title-sm:
    fontFamily: "Onest, system-ui, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.015em"
  quote:
    fontFamily: "Onest, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.35
    letterSpacing: "-0.015em"
  lead:
    fontFamily: "Onest, system-ui, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Onest, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  body-sm:
    fontFamily: "Onest, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  meta:
    fontFamily: "Onest, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "Onest, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.14em"
  micro:
    fontFamily: "Onest, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.08em"
  numeral:
    fontFamily: "Onest, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 7vw, 5.375rem)"
    fontWeight: 800
    lineHeight: 0.8
    letterSpacing: "-0.04em"
rounded:
  field: "10px"
  md: "12px"
  lg: "14px"
  panel: "18px"
  card: "20px"
  card-lg: "22px"
  frame: "26px"
  pill: "9999px"
spacing:
  xs: "10px"
  sm: "14px"
  md: "22px"
  lg: "34px"
  xl: "52px"
  gutter: "40px"
  section: "104px"
components:
  button-primary:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.navy}"
    rounded: "{rounded.pill}"
    padding: "16px 32px"
    typography: "{typography.body-sm}"
  button-primary-on-dark:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.abyss}"
    rounded: "{rounded.pill}"
    padding: "16px 32px"
  button-navy:
    backgroundColor: "{colors.navy}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "11px 22px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.navy}"
    rounded: "{rounded.pill}"
    padding: "16px 30px"
  card-light:
    backgroundColor: "#ffffff"
    textColor: "{colors.navy}"
    rounded: "{rounded.card-lg}"
    padding: "36px 32px"
  card-dark:
    backgroundColor: "{colors.abyss-surface}"
    textColor: "#ffffff"
    rounded: "{rounded.card}"
    padding: "30px 28px"
  chip:
    backgroundColor: "{colors.mist}"
    textColor: "{colors.navy}"
    rounded: "{rounded.pill}"
    padding: "9px 15px"
  input-dark:
    backgroundColor: "{colors.abyss}"
    textColor: "#ffffff"
    rounded: "{rounded.field}"
    padding: "12px 14px"
  eyebrow:
    textColor: "{colors.orange-ink}"
    typography: "{typography.label}"
---

# Design System: Brand Lab by Samu

## Overview

**Creative North Star: "El Laboratorio del Estratega"**

El sistema se comporta como un laboratorio: un ambiente controlado, profundo y silencioso —el navy `#023047` y su versión más honda `#04141d`— dentro del cual el naranja `#fb8500` funciona como reactivo. Nunca decora: aparece exactamente donde ocurre algo (la acción, la cifra, el concepto que carga el argumento). Esa economía es la que hace que el sitio se lea premium sin levantar la voz, y es la traducción visual literal de "We don't sell, we mean!".

La tipografía es el instrumento de autoridad. Onest en peso 800 con tracking negativo agresivo (`-0.03em` a `-0.04em`) y line-height por debajo de 1.05 produce titulares que se leen como afirmaciones, no como encabezados. Debajo, el cuerpo se relaja a 17px con `line-height: 1.7` y respiración generosa: la marca argumenta en párrafos largos, y el sistema está construido para que esos párrafos se lean completos. La densidad es baja y deliberada — 104px de aire vertical entre secciones, contenedor de 1180px, medidas de línea limitadas entre 480 y 720px.

La calidez viene de tres lugares y solo de tres: la fotografía real de Samuel en marcos de 26px con sombra larga, el papel cálido `#fbfaf7`/`#f4f1ea` que evita el blanco clínico, y el isotipo al 5% de opacidad flotando como marca de agua en las superficies oscuras. El resto es estructura: números de fase, marcadores triangulares, listas divididas por líneas de 1px. Precisión técnica con una mano humana encima.

**Key Characteristics:**
- Dos suelos exclusivos: papel cálido `#fbfaf7` para la casa, abismo `#04141d` para evento, blog y patrocinio.
- Titulares extrabold de 46–66px con tracking negativo; nunca tracking por defecto.
- El naranja como reactivo escaso, no como color de relleno.
- Sombras largas, bajas y con spread negativo — nunca un borde duro de elevación.
- Marcadores triangulares (`clip-path` de flecha) como único glifo decorativo del sistema.
- Revelado al scroll uniforme: 30px de subida, 0.8s, `cubic-bezier(0.2, 0.7, 0.2, 1)`.

## Colors

Paleta de laboratorio marino: una familia de azules que va del papel al abismo, y dos acentos cálidos que solo se encienden cuando hay algo que señalar.

### Primary
- **Naranja Reactivo** (`{colors.orange}`): el único color de acción del sistema, y es un color de **superficie**. Fondos de CTA, el bloque "We don't sell, we mean!", bordes izquierdos de cita, marcadores triangulares, el punto activo del carrusel. Lleva siempre texto oscuro encima — `{colors.navy}` sobre claro, `{colors.abyss}` sobre oscuro — nunca blanco: blanco sobre `{colors.orange}` da 2.48:1.
- **Naranja Tinta** (`{colors.orange-ink}`): el naranja en su rol de **texto sobre suelo claro**. Eyebrows, kickers, horas de agenda, cualquier tipografía pequeña naranja sobre papel, hueso, bruma o blanco. Sobre suelo oscuro no se usa: ahí `{colors.orange}` ya da 7.5:1 y es el que corresponde.
- **Tinta sobre Naranja** (`{colors.on-orange}`): el único color de texto pequeño permitido encima de una superficie `{colors.orange}`.
- **Amarillo Señal** (`{colors.yellow}`): reservado para urgencia comercial y solo ahí — el badge "Cupos limitados" del banner de evento. No es un segundo naranja.

### Secondary
- **Navy Laboratorio** (`{colors.navy}`): el color de la marca y el fondo de toda sección de argumento. También es el color del texto sobre papel.
- **Navy Profundo** (`{colors.navy-2}`): superficie elevada dentro del navy — tarjetas, bloques de concepto, paneles con borde izquierdo.
- **Abismo** (`{colors.abyss}`): el suelo de las superficies de evento, blog y patrocinio. Un navy casi negro que empuja la fotografía y el naranja al frente.
- **Abismo Superficie** (`{colors.abyss-surface}`): la tarjeta sobre abismo. Artículos, tiers, agenda, tarjetas de talk.
- **Abismo Suelo** (`{colors.abyss-floor}`): exclusivo del footer de las subpáginas — un escalón más abajo que el propio abismo.
- **Tinta** (`{colors.ink}`): footer de la home y color de los bordes hairline sobre claro (`{colors.ink}` al 10%).

### Tertiary
- **Azul Instrumento** (`{colors.blue}`): color de segunda categoría estructural, también de superficie. Bordes izquierdos de bloques informativos, marcadores de audiencia, el tier "Experiencia".
- **Azul Tinta** (`{colors.blue-ink}`): el azul como texto sobre suelo claro — eyebrows de secciones que no piden acción.
- **Cielo** (`{colors.sky}`): la voz del label sobre fondo oscuro. Todo eyebrow, toda etiqueta de campo y todo rol de persona sobre navy es `{colors.sky}`.

### Neutral
- **Papel** (`{colors.paper}`): el suelo de la home. Cálido, nunca `#ffffff`.
- **Hueso** (`{colors.bone}`): franja cálida de descanso — testimonios en la home, agenda en eventos. Marca un cambio de ritmo sin cambiar de mundo.
- **Bruma** (`{colors.mist}`): fondo de chips, eyebrows sobre claro y placeholders de imagen.
- **Tinta de Cuerpo** (`{colors.body-ink}`): párrafo sobre papel. Nunca navy puro para texto corrido largo.
- **Tinta Apagada** (`{colors.body-muted}`): texto secundario, descripciones de tarjeta, roles.
- **Cuerpo sobre Navy** (`{colors.body-on-navy}`) y **Cuerpo sobre Abismo** (`{colors.body-on-abyss}`): los dos únicos grises de párrafo permitidos sobre oscuro; se eligen por el fondo, no por gusto.
- **Fuerte / Suave sobre Oscuro** (`{colors.on-dark-strong}`, `{colors.on-dark-soft}`): listas de beneficio y cuerpo de artículo largo, un escalón más brillante que el párrafo normal.
- **Apagado sobre Oscuro** (`{colors.muted-dark}`): el único paso de texto secundario sobre cualquier suelo oscuro — encabezados de columna del footer, copyright, notas al pie, etiquetas de artículo. Reemplaza a cuatro grises ad-hoc que fallaban entre 3.4:1 y 4.5:1.
- **Silencio** (`{colors.quiet}`): numerales fantasma y glifos secundarios sobre suelo claro — los números 01–04 de la oferta y las flechas de fila. Es el paso más tenue que aún alcanza 3:1.

### Named Rules

**La Regla de los Dos Suelos.** Una superficie es de papel (`{colors.paper}`) o es de abismo (`{colors.abyss}`) — nunca las dos. La home vive en papel; evento, blog y patrocinio viven en abismo. Cambiar de suelo dentro de una misma página es cambiar de sitio.

**La Regla de Superficie y Tinta.** Cada acento tiene dos valores, no uno: el vivo (`{colors.orange}`, `{colors.blue}`) pinta superficies, y el profundo (`{colors.orange-ink}`, `{colors.blue-ink}`) escribe texto sobre suelo claro. Usar el vivo como texto pequeño sobre papel es el error que este sistema ya cometió: se lee como una aguada pálida y no alcanza 4.5:1. Sobre suelo oscuro la regla se invierte y el vivo es el correcto.

**La Regla de la Señal Única.** El naranja marca una sola cosa por bloque visual. Si en un mismo campo de visión hay dos elementos naranjas compitiendo, uno de los dos está mal: bájalo a `{colors.blue}` o a `{colors.sky}`.

**La Regla del Blanco Prohibido.** `#ffffff` es color de tarjeta y de texto, nunca color de fondo de página. El suelo claro siempre es cálido.

## Typography

**Display Font:** Onest (self-hosted via `next/font`, con `system-ui, sans-serif` de respaldo)
**Body Font:** Onest — el sistema es de una sola familia
**Label/Mono Font:** ninguna; la voz de label se consigue con caja alta y tracking, no con otra familia.

**Character:** Onest es una grotesca geométrica de terminaciones limpias que en peso 800 se vuelve rotunda sin volverse dura. La tensión del sistema está entre ese titular apretado y compacto y un cuerpo abierto y respirado — el mismo contraste entre "estratégica" y "humana" que la marca declara. Se carga como **fuente variable**: un solo archivo cubre el eje `wght` completo, y `next/font` genera el fallback con métricas ajustadas para que el swap no mueva la página.

**Entrega:** `next/font/google` con `subsets: ["latin"]`, `display: "swap"` y la variable `--font-onest`. No hay `<link>` a Google ni preconnect: la fuente se sirve desde el mismo dominio, sin petición de terceros y sin reflow.

### The Role Scale

Quince roles, todos en `rem` para que el lector que sube el tamaño de fuente del navegador obtenga una página que crece con él. **Cada rol trae su propio tamaño, peso, interlínea y tracking**: se aplica con una clase y no se vuelve a ajustar en el sitio de uso.

- **Display** — `.t-manifesto`, `.t-display`, `.t-headline`, `.t-subhead`: fluidos por `clamp()`, peso 800, tracking de -0.045em a -0.025em. Uno de manifiesto y uno de display por página; headline para los latidos del argumento, subhead para el inventario.
- **Títulos** — `.t-title-lg` (1.625rem/800), `.t-title` (1.375rem/700), `.t-title-sm` (1.1875rem/700): fijos, porque un título de tarjeta que se redimensionara con el viewport rompería la alineación de la rejilla en la que vive.
- **Cuerpo** — `.t-lead` (1.1875rem) abre sección, `.t-body` (1.0625rem) carga el argumento, `.t-body-sm` (0.9375rem) vive dentro de tarjetas y listas. Tres pasos, ni uno más.
- **Soporte** — `.t-meta` (0.875rem/500) para pies, atribuciones y roles; `.eyebrow` / `.t-label` (0.8125rem/700, caja alta, 0.14em) para el eyebrow; `.t-micro` (0.75rem/600) para badges donde el contenedor es el énfasis.
- **Piezas** — `.t-quote` (1.5rem/700) y `.t-numeral` (clamp fluido, 0.8 de interlínea) para los numerales fantasma de la oferta.

### Named Rules

**La Regla del Rol Único.** El tamaño de un texto se declara con su clase de rol y con nada más. Un `text-[17px]` en el JSX no es una decisión tipográfica: es la ausencia de una. El sistema llegó a tener 29 tamaños, 17 interlíneas y 7 trackings sueltos — seis pasos dentro de 2.5px que ningún lector distingue — y esa dispersión es lo que hay que impedir que vuelva.

**La Regla del Peso Heredado.** El rol trae su peso. Escribir `font-bold` junto a `.t-title` es repetir lo que la clase ya dice; escribirlo junto a `.t-body` es una desviación deliberada y tiene que poder defenderse. Con 800 en todo, nada destaca.

**La Regla del Eyebrow.** Toda sección abre con un label en caja alta antes del titular. Un solo tamaño y un solo tracking para todo el sitio: la regla que abre cada sección no puede a su vez desviarse en cuatro tamaños.

**La Regla del Tracking Negativo.** Cualquier tipo por encima de 1.375rem lleva tracking negativo, y ya lo trae su rol. Un titular con tracking por defecto se lee flojo y rompe la voz del sistema al instante.

**La Regla del Quiebre a Mano.** Los titulares de dos líneas se quiebran con `<br />` en el punto que el argumento pide. Donde no hay quiebre manual, `text-wrap: balance` reparte las líneas; el navegador nunca decide solo por ancho de ventana.

**La Regla de los Dos Suelos, en tipografía.** El texto claro sobre abismo florece: las mismas métricas que sobre papel se leen compuestas, aquí se leen apretadas. `.floor-dark` en la raíz de la ruta sube la interlínea un paso y añade 0.006em de tracking a los roles de cuerpo; `.floor-light` devuelve una sección clara dentro de una ruta oscura —la agenda de hueso, la banda naranja— a las métricas de papel.

**La Regla de la Cifra Alineada.** Todo número que forme columna —horas de agenda, precios de patrocinio, fechas— lleva `.tnum`. Las cifras proporcionales de Onest desalinean la columna y delatan el sistema.

**La Regla de la Medida en `ch`.** La medida se expresa en `ch` (`.measure` 66ch, `.measure-sm` 52ch, `.measure-lg` 74ch), no en píxeles, para que el conteo de líneas se mantenga cuando el lector escala el tipo.

## Layout

Contenedor único de **1180px** en la home y **1100px** en las subpáginas (evento, blog, patrocinio), centrado, con gutter de **40px**. El ritmo vertical es de **104px** arriba y abajo en las secciones de la home y **92–96px** en las subpáginas — un pulso constante que el lector percibe como calma.

La rejilla es de dos columnas asimétricas y ese asimetrismo es el sistema: `0.9fr 1.1fr` (imagen / argumento), `1.1fr 0.9fr` (imagen / panel navy), `0.85fr 1.15fr` (retrato / texto). Nunca 50/50 — la columna que carga el argumento siempre pesa más. Las rejillas de ítems son de 3 columnas (talks, why, tarjetas de evento), de 5 (las fases de la consultoría) o de 2 (talleres, artículos).

Las listas largas no son tarjetas: son filas divididas por una línea hairline (`{colors.ink}` al 10% sobre claro, `#ffffff` al 8–12% sobre oscuro), con `last:border-b-0`. La oferta de la home y la agenda del evento usan rejillas de columna fija (`120px 1fr 40px` y `150px 1fr`) que alinean número, contenido y flecha en una vertical perfecta.

Breakpoints de Tailwind v4 por defecto: `sm` 640px, `md` 768px, `lg` 1024px. El colapso a una columna ocurre en `lg`; la navegación se oculta en `md`.

### Named Rules

**La Regla del Aire Constante.** 104px de respiración vertical entre secciones, sin excepción por densidad de contenido. Comprimir una sección porque "tiene poco" rompe el pulso de toda la página.

**La Regla de la Medida Corta.** Ningún párrafo pasa de 680px de ancho, y el cuerpo de hero no pasa de 480px. La autoridad se pierde cuando la línea obliga a buscar el renglón siguiente.

## Elevation & Depth

El sistema es **plano en reposo y elevado por interacción**. No existe una escala de elevación: existe una sola familia de sombras largas, muy difusas y con spread negativo, que se leen como luz de estudio cayendo desde arriba y no como un borde de contorno. Sobre oscuro, la profundidad no la da la sombra sino el escalonado tonal — `{colors.abyss}` → `{colors.abyss-surface}` → borde blanco al 8% — que es el mecanismo principal de capas en evento, blog y patrocinio.

### Shadow Vocabulary
- **Marco de fotografía** (`box-shadow: 0 40px 80px -40px rgba(2,48,71,0.5)`): retratos y bloques de imagen. Es la sombra firma del sistema.
- **Levante de tarjeta** (`box-shadow: 0 30px 60px -30px rgba(2,48,71,0.45)`): tarjetas de servicio en hover.
- **Levante de proyecto** (`box-shadow: 0 40px 70px -35px rgba(2,48,71,0.5)`): tarjetas grandes con imagen en hover.
- **Reposo de tarjeta** (`box-shadow: 0 26px 60px -44px rgba(2,48,71,0.6)`): tarjeta de testimonio; casi imperceptible, solo despega la pieza del fondo hueso.
- **Estante de logo** (`box-shadow: 0 20px 40px -30px rgba(2,34,47,0.4)`): fichas de patrocinador sobre blanco.
- **Resplandor de acción** (`box-shadow: 0 14px 30px -10px rgba(251,133,0,0.6)`): exclusivo del hover del botón primario — la única sombra de color del sistema.

### Named Rules

**La Regla del Spread Negativo.** Toda sombra lleva spread negativo y desplazamiento vertical de 14px o más. Una sombra corta y cerrada delata el sistema entero como plantilla.

**La Regla de la Capa Tonal.** Sobre fondo oscuro no se usan sombras para separar: se usa el siguiente tono del abismo más un borde blanco al 8–12%.

## Shapes

El lenguaje de forma es **cápsula para la acción, rectángulo suave para el contenido**. Todo elemento accionable —botón, chip, punto de carrusel, avatar, flecha de navegación— es una píldora o un círculo perfecto. Todo contenedor de contenido es un rectángulo de esquinas generosas: 20–22px para tarjetas, 26px para marcos de fotografía, 12–14px para paneles pequeños, 10px para campos de formulario.

El sistema tiene dos gestos de forma propios que lo separan de una plantilla:

**El marcador triangular.** Un `clip-path: polygon(0 0, 100% 50%, 0 100%)` de 12–20px que reemplaza a la viñeta en toda lista de argumento y flota como partícula decorativa sobre las secciones navy. Es el único glifo decorativo del sistema.

**El panel de borde izquierdo.** Bloques con `border-left` de 3–4px en `{colors.orange}` o `{colors.blue}` y esquinas derechas redondeadas (`border-radius: 0 12px 12px 0`), usados para citas, conceptos y beneficios. La barra izquierda dice "esto es una anotación al margen del argumento".

También aparecen dos formas de una sola vez, ligadas a su composición: el marco de hero con esquinas superiores de 200px (arco) y los pares imagen/panel que comparten un radio de 26px partido por la mitad (`26px 0 0 26px` + `0 26px 26px 0`) para leerse como una sola pieza.

### Named Rules

**La Regla de la Punta.** La viñeta del sistema es el triángulo con `clip-path`, no un disco ni un check. El check (`✓`) queda reservado a listas de beneficio transaccional — entradas, tiers de patrocinio.

**La Regla de la Cápsula.** Si se puede hacer clic y no es una tarjeta, es una píldora. Un botón con esquinas de 8px no pertenece a este sistema.

**La Regla del Marcador.** El triángulo se escribe con la clase `.marker`, nunca con un `clip-path` en línea. Es el único glifo decorativo del sistema y por eso tiene nombre.

## Components

### Buttons
La forma es una sola —la cápsula— y los tamaños son tres. Se compone `btn` con
exactamente un tamaño y un tono: `btn btn-lg btn-primary`. Nunca se vuelve a
escribir el padding a mano.

- **Shape:** cápsula completa (`border-radius: 9999px`), `min-height: 44px` en los tres tamaños. Ese piso es el objetivo táctil: ningún tamaño baja de ahí.
- **Sizes:** `.btn-sm` (`0 20px`, 13.5px, peso 600) para la acción compacta dentro de una tarjeta o del header; `.btn-md` (`13px 28px`, 15px, peso 700) para la acción dentro de una sección; `.btn-lg` (`16px 32px`, 16px, peso 700) para el compromiso a nivel de página.
- **Tones:** `.btn-primary` es naranja con texto `{colors.abyss}` —el botón sobre suelo oscuro—; `.btn-primary-on-light` es el mismo naranja con texto `{colors.navy}`, para papel, hueso y bruma. `.btn-navy` es el CTA persistente del header claro. `.btn-abyss` es el botón oscuro que se recorta contra la banda naranja. Nunca texto blanco sobre naranja: son 2.48:1.
- **Hover / Focus:** `.btn` comparte selector con `.btnp` — `transform: translateY(-2px)` y resplandor naranja `0 14px 30px -10px rgba(251,133,0,0.6)` en 0.2s, con press de `scale(0.985)` en táctil y sin desplazamiento bajo `prefers-reduced-motion`. `.btnp` sigue existiendo por separado para las tarjetas accionables.
- **Outline:** borde de 1.5px en `{colors.navy}` al 20–25%, texto `{colors.navy}`, fondo transparente. Clase `.btno` — en hover el borde y el texto se saturan a `{colors.navy}` sólido. Sobre oscuro, el mismo botón usa borde blanco al 28% y fondo blanco al 8%.
- **Ghost:** solo texto en `{colors.orange}` con flecha `→`, sin fondo ni borde. Usa `.navlink` para la transición de color. Para lecturas secundarias dentro de una tarjeta.

### Shell: header y footer
El header y el footer no se vuelven a escribir por ruta. Viven en
`src/components/site-header.tsx` y `src/components/site-footer.tsx`, y cada ruta
los invoca con su tono, su medida y su CTA.

- **`SiteHeader`** — prop `tone`: `paper` (el home) o `abyss` (todas las demás). El tono decide el isotipo, la variante del wordmark, el color de los enlaces y el tono del CTA; un header nunca mezcla los dos. `maxWidth` alinea el header con la medida de la ruta (1180 o 1100). Debajo de `md` la fila de enlaces colapsa en `MobileNav`, que refleja el mismo CTA.
- **`SiteFooter`** — prop `tone`: `ink` (el suelo de cierre del home) o `abyss-floor` (el tono más profundo del sistema, que cierra todas las demás rutas). Las columnas «Explora» y «Contáctanos» se alimentan de `exploreLinks` y `contactLinks` en `src/lib/site.ts`: los canales de contacto se escriben una sola vez en el proyecto. `trailing` es el único ítem que cambia en la línea de base —un enlace de vuelta, o un topónimo.

### Chips
- **Style:** fondo `{colors.mist}`, texto `{colors.navy}`, peso 600, 13.5px, `padding: 9px 15px`, cápsula. Sobre oscuro: sin fondo, borde de 1px en `{colors.sky}` al 30%, texto `{colors.on-dark-strong}`.
- **State:** los chips del sistema son estáticos (etiquetas de taller, temas de panel). El único chip con estado es el selector de tier de patrocinio: activo pasa a fondo `{colors.orange}` con texto `{colors.abyss}`; inactivo es transparente con texto `{colors.body-on-abyss}`.

### Cards / Containers
- **Corner Style:** 20–22px las tarjetas de contenido; 18px los paneles de datos; 26px los marcos de fotografía.
- **Background:** `#ffffff` sobre papel, `{colors.abyss-surface}` sobre abismo, `{colors.navy-2}` sobre navy.
- **Shadow Strategy:** planas en reposo. Las tarjetas clicables suben con `.svc` o `.proj` (`translateY(-6px)` + sombra larga, 0.25–0.3s); dentro de `.proj`, la imagen escala a 1.05 en 0.5s.
- **Border:** hairline obligatorio — `{colors.ink}` al 10% sobre claro, `#ffffff` al 8–12% sobre oscuro. La tarjeta nunca flota solo por color de fondo.
- **Internal Padding:** 28–34px; 40px en la tarjeta de testimonio y el cuerpo del modal.

### Inputs / Fields
- **Style:** clase `.fld` — fondo `{colors.abyss}`, borde de 1.5px en `#ffffff` al 14%, radio 10px, `padding: 12px 14px`, texto blanco de 14.5px, placeholder `#6f8892`. Los formularios de este sistema viven sobre fondo oscuro.
- **Label:** 12–13px, peso 600, en `{colors.sky}`, con 6px de separación del campo.
- **Focus:** el borde pasa a `{colors.orange}` y se elimina el outline nativo.
- **Error / Disabled:** no definidos en la implementación actual.

### Navigation
- **Style:** header pegajoso (`sticky top-0`) con `backdrop-filter: blur(12px)` y fondo del suelo de la página al 85–90% de opacidad, más un borde inferior hairline. Izquierda: isotipo de 28–32px + wordmark. Derecha: un único CTA en cápsula.
- **Typography:** 14–14.5px, peso 500, en `#3a4a54` sobre claro y `{colors.body-on-abyss}` sobre oscuro.
- **Hover:** clase `.navlink` — transición de color a `{colors.orange}` en 0.2s. Sin subrayado.
- **Mobile:** los enlaces se ocultan por completo bajo `md` (768px); solo sobreviven el logotipo y el CTA. No hay menú desplegable implementado.

### Wordmark
"BRAND" en `{colors.navy}` (o blanco en variante `light`) + "LAB" en `{colors.orange}`, peso 800, `letter-spacing: -0.02em`, seguido de un punto en superíndice de 10px. El corte de color dentro de la palabra es la firma: nunca se escribe el wordmark en un solo color.

### Marquee de logos
Cinta horizontal en `animate-marq` (32s lineal, infinita, `translateX(-50%)` sobre el contenido duplicado), con máscara de degradado en ambos extremos (`mask-image: linear-gradient(90deg, transparent, black 10%, black 90%, transparent)`). Los logos van en `grayscale` al 50% de opacidad y recuperan color y opacidad completa en hover; la cinta se pausa con `group-hover:[animation-play-state:paused]`.

### Carrusel de hero
Slides apiladas en `absolute inset-0` con crossfade de 1000ms `ease-in-out` y avance automático cada 6s. Cada slide define su propio overlay de degradado direccional sobre la fotografía (`rgba(2,58,86,0.94)` → transparente al 66%) y su propia alineación, izquierda o derecha. Indicadores en cápsula: 8px de alto, 12px de ancho inactivos en blanco al 40%, 32px de ancho activos en `{colors.orange}`, transición de 300ms.

### Revelado al scroll
Clase `.rv` con `IntersectionObserver` (umbral 0.12, `rootMargin: 0px 0px -8% 0px`): de `opacity: 0` y `translateY(30px)` a estado natural en 0.8s con `cubic-bezier(0.2, 0.7, 0.2, 1)`. Incluye un `setTimeout` de seguridad a 1600ms y un camino sin observer, de modo que el contenido nunca queda invisible.

## Do's and Don'ts

### Do:
- **Do** abrir cada sección con el eyebrow en caja alta (12–13px, peso 700, `letter-spacing: 0.14em`) antes del titular.
- **Do** usar el naranja `{colors.orange}` para una sola señal por bloque visual: la acción, el número o el concepto — nunca los tres a la vez.
- **Do** cambiar a `{colors.orange-ink}` / `{colors.blue-ink}` en cuanto el acento sea texto sobre papel, hueso, bruma o blanco.
- **Do** quebrar los titulares a mano con `<br />` en el punto que pide el argumento.
- **Do** poner tracking negativo (`-0.02em` a `-0.04em`) en todo tipo por encima de 22px.
- **Do** dar a cada tarjeta un borde hairline (`{colors.ink}` al 10% sobre claro, `#ffffff` al 8–12% sobre oscuro) además de su fondo.
- **Do** usar el marcador triangular (`clip-path: polygon(0 0, 100% 50%, 0 100%)`) como viñeta de las listas de argumento.
- **Do** mantener las sombras largas y con spread negativo: desplazamiento vertical de 20px o más, blur de 40px o más.
- **Do** marcar la clase `.rv` en todo bloque de contenido nuevo para que entre con el revelado del sistema.
- **Do** aplicar `grayscale` y opacidad reducida a los logos de terceros, devolviéndoles color solo en hover.

### Don't:
- **Don't** usar `#ffffff` como fondo de página. El suelo claro es `{colors.paper}`; el blanco es color de tarjeta.
- **Don't** mezclar el suelo de papel y el suelo de abismo dentro de una misma superficie.
- **Don't** dar esquinas cuadradas o de 8px a un elemento accionable: los botones de este sistema son cápsulas.
- **Don't** escribir párrafos largos en `{colors.navy}` puro sobre papel — el cuerpo es `{colors.body-ink}`.
- **Don't** introducir una segunda familia tipográfica. La jerarquía se resuelve con peso, tamaño y tracking dentro de Onest.
- **Don't** usar `{colors.yellow}` como acento general; está reservado a urgencia comercial.
- **Don't** poner texto blanco sobre `{colors.orange}`: son 2.48:1. El texto sobre naranja es oscuro, siempre.
- **Don't** inventar un gris nuevo para texto secundario sobre oscuro; existe `{colors.muted-dark}` y cubre los cinco suelos.
- **Don't** sustituir la sombra por un borde de contorno duro para elevar una tarjeta sobre fondo oscuro: se usa el siguiente tono del abismo.
- **Don't** dejar el isotipo de marca de agua por encima del 5% de opacidad ni permitir que capture eventos de puntero.
