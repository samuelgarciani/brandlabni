---
target: src/app/page.tsx
total_score: 19
max_score: 40
na_heuristics: 
p0_count: 3
p1_count: 2
timestamp: 2026-08-23T01-07-26Z
slug: src-app-page-tsx
---
Method: dual-agent (A: aa4efe1a907d852f5 · B: a4ca85cbba7c5bc83)

# Critique — src/app/page.tsx (Home, Brand Lab by Samu)

## Design Health Score

| # | Heurística | Score | Problema clave |
|---|-----------|-------|----------------|
| 1 | Visibilidad del estado del sistema | 2 | `#historia` no tiene destino (page.tsx:241, :843): el click no hace nada. Sin estado activo en la nav. |
| 2 | Correspondencia con el mundo real | 3 | Español, marcas locales, testimonios con nombre. Lo debilita "Línea de servicio 01/02" y "+10 años" en :803 contra los 8 años de PRODUCT.md. |
| 3 | Control y libertad del usuario | 1 | Carrusel auto-avanza cada 6s sin pausa (:220-225); marquee pausa solo en `group-hover` (:771); nav oculta bajo 768px sin sustituto. |
| 4 | Consistencia y estándares | 2 | Naranja con texto blanco acá vs. texto oscuro en /eventos; nav "Contáctanos" aterriza en eyebrow "Sobre Samuel"; 8 escalones de cuerpo donde DESIGN.md define 2. |
| 5 | Prevención de errores | 2 | No hay formularios (acierto). Pero el ancla muerta es callejón sin salida y "se comparte a solicitud" (:644) no ofrece cómo solicitarlo. |
| 6 | Reconocer antes que recordar | 2 | Los ítems 01–04 saltan 200–400 líneas sin retorno ni sentido de ubicación. |
| 7 | Flexibilidad y eficiencia | 2 | WhatsApp prellenado (:815) es acelerador real. En contra: sin swipe, sin skip link, sin foco visible. |
| 8 | Estética y diseño minimalista | 2 | 15 secciones, doce h2 idénticos de 46px/800, cuatro señales naranjas en un solo bloque. |
| 9 | Recuperación de errores | 2 | Casi no hay superficie de error. El único fallo presente es silencioso. |
| 10 | Ayuda y documentación | 1 | Los dos modelos propios se nombran una vez y nunca se explican; SIGNIFICA no aparece. |
| **Total** | | **19/40** | **Poor — límite superior de la banda** |

Ninguna heurística marcada `n/a`. La 10 es especialmente aplicable: PRODUCT.md dice que el trabajo primario del sitio es autoridad.

## Design Specificity Verdict

**El texto está autorado. La composición está alquilada.**

**Evaluación LLM:** el contenido es inequívocamente de Samuel: la tanda nombrando Flor de Caña, La Perfecta, GluGlu, Casa Pellas (:386); "El Emprendedor Invisible" (:415); testimonios atados a organizaciones que también aparecen en el marquee. El arreglo, en cambio, es el one-pager de consultor canónico 2016–2022: carrusel autoplay con dots → foto-izquierda/texto-derecha → lista de problemas → tarjeta quiénes-somos → lista numerada con flechas → fila de cinco pasos → grid de 2 → grid de 3 → para-quién → grid de 6 → carrusel de testimonios → marquee grayscale → CTA final.

El detalle que condena: **Sistema SIGNIFICA aparece cero veces.** Las cinco fases de :108-144 presumiblemente son ese sistema, renderizadas como cinco cuadrados idénticos sin nombre bajo el título genérico de :539. El único activo que un competidor no puede copiar se envía como commodity.

**Escaneo determinista:** detect.mjs → exit 2, **53 hallazgos**, todos en page.tsx.
- `design-system-font-size` × 48 — rampa documentada 66/46/24/22/17/15/13px; la página usa 11–60px en ~21 escalones. Trece de estos (los `sm:` de 38/52px) son el mismo problema raíz que el P0 de breakpoints.
- `design-system-color` × 3 — :21, :35, :49 usan rgb(2,58,86)=#023a56, que no es el navy de marca #023047.
- `side-tab` × 2 — :413 es real (fondo + padding + esquinas del lado opuesto). :392 es FALSO POSITIVO: blockquote sin fondo ni caja; la misma construcción en :808 no se marcó, porque la regla matchea la clase literal `border-l-4`.

Contexto: DESIGN.md está sin commitear y su rampa fue inferida de este mismo archivo. Las 48 marcas de font-size se miden contra una línea base derivada del archivo medido — no las invalida, pero baja su peso frente a contraste y breakpoints, verificables contra WCAG y contra el código de Tailwind.

**Overlays visuales:** ninguno. Ningún agente tenía automatización de browser expuesta (ToolSearch devolvió solo WebFetch, sin DOM ni mutación). No se levantó dev server, no se inyectó detect.js, no hay pestaña [Human]. Todo hallazgo de layout móvil es aritmética computada sobre el código, no pixel observado.

## Overall Impression

Hay un escritor de verdad acá, y un sistema visual de verdad. El problema no es gusto: la página está construida al revés para el dispositivo donde vive su audiencia, y el activo más valioso de la práctica no está. Un director de Managua que llega desde Instagram recibe un titular de 66px con márgenes de 40px sobre 390px, un CTA con contraste 2.48:1, y cero prueba social en las primeras dos pantallas. Los logos de Claro, Grupo Sur Química e Impact Hub y los tres testimonios con nombre real están a ~9.000px de scroll.

Oportunidad más grande: subir la prueba, nombrar el sistema, arreglar el móvil.

## What's Working

1. **"El Emprendedor Invisible" (:413-419).** Nombra el miedo privado del lector y reubica la causa desde el precio hacia la percepción — que es el producto. Único lugar donde la tipografía hace trabajo argumentativo.
2. **La cadena de evidencia es autoconsistente y no fabricada (:183-213).** trainingLogos y testimonialItems nombran las mismas organizaciones, con personas y cargos reales. Logo + humano nombrado + cargo verificable es la configuración de confianza más alta disponible. Solo está en el lugar equivocado.
3. **Descalificar como posicionamiento (:673).** "Si buscas el logo más barato, no somos para ti." Premium sin arrogancia sin un solo alarde.

## Priority Issues

### [P0] Todos los breakpoints `sm:` están invertidos — los teléfonos reciben los valores de escritorio
**Qué.** En Tailwind v4 `sm:` es min-width: 40rem (verificado en node_modules/tailwindcss/theme.css:327; globals.css no define override). 32 utilidades `sm:` escritas como si significaran "pantallas chicas". :315 `px-[40px] sm:px-[22px]` (17 contenedores así); :326 `text-[66px] sm:text-[52px]`; doce h2 `text-[46px] sm:text-[38px]`; :472 `px-12 py-14 sm:px-7 sm:py-10`. A 390px quedan 310px; "Construyamos" a 66px extrabold supera ese ancho en un token no quebrable, y el overflow-x-hidden de :231 / overflow-hidden de :296 lo RECORTA en vez de scrollear.
**Por qué importa.** Móvil es el dispositivo primario de esta audiencia. Cada decisión de DESIGN.md se aplica al dispositivo equivocado. `md:` y `lg:` sí están mobile-first: un error sistemático, no descuido general.
**Fix.** Invertir las 32. :315 → `px-[22px] sm:px-[40px]`. :326 → `text-[42px] sm:text-[52px] lg:text-[66px]`. Los doce h2 → `text-[32px] sm:text-[38px] lg:text-[46px]`.
**Comando sugerido:** /impeccable adapt

### [P0] Todos los CTA primarios fallan contraste a 2.48:1
**Qué.** Blanco sobre #fb8500 = 2.48:1 contra 4.5:1 requerido para 15.5px semibold. :340 (hero, cinco slides), :818 (WhatsApp — la única conversión), :279 (banner). El par está codificado en DESIGN.md (components.button-primary), así que la falla vive en el sistema.
**Por qué importa.** El elemento más importante es el menos legible, bajo luz exterior, en un teléfono. La página ya sabe la respuesta: :699 usa text-[#023047] sobre naranja (5.56:1, pasa), y /eventos/page.tsx:128 usa #04141d.
**Fix.** text-white → text-[#023047] en :340, :818, :279, y corregir button-primary en DESIGN.md. Fallos del mismo color: :601 (2.48:1), :673 (2.38:1), :503 (2.24:1).
**Comando sugerido:** /impeccable audit

### [P0] La lista de oferta se destruye en móvil
**Qué.** :515 usa `grid-cols-[120px_1fr_40px] gap-7` sin variante responsive. A 390px: 310 − 120 − 40 − 56 = 94px para un h3 extrabold de 28px que dice "Consultoría Estratégica de Marca".
**Por qué importa.** Es la navegación principal hacia lo que Samuel vende. Rota en el dispositivo principal.
**Fix.** :515 → `grid-cols-[64px_1fr] gap-4 md:grid-cols-[120px_1fr_40px] md:gap-7`; :517 → `text-[34px] md:text-[60px]`; ocultar el → de :522 bajo md.
**Comando sugerido:** /impeccable adapt

### [P1] "Agenda una sesión" es un desvío de dos taps hacia una biografía, sin tranquilidad al final
**Qué.** CTA del header (:250), link "Contáctanos" (:247) y los cinco CTA del hero apuntan a #contacto = :787, sección cuyo eyebrow dice "Sobre Samuel" (:801), con retrato, párrafo y cita antes del WhatsApp real de :815.
**Por qué importa.** Cada click de conversión cuesta un segundo click. Y en el momento de mayor riesgo no hay tiempo de respuesta, ni "primera conversación sin costo", ni "sin compromiso", ni qué pasa después de enviar. Peak-end roto.
**Fix.** (a) Apuntar header y hero directo al wa.me de :815. (b) Línea de tranquilidad bajo el CTA en :822. (c) Renombrar el nav de :247 o separar la bio del bloque de contacto.
**Comando sugerido:** /impeccable clarify

### [P1] El Sistema SIGNIFICA no está; la metodología viaja sin marca
**Qué.** Cero ocurrencias. Las cinco fases de :108-144 van bajo título genérico (:539) como cinco cuadrados idénticos (:542-555), tres navy y dos naranjas sin razón declarada. "El Iceberg del Branding" y "El Sistema Invisible de Marca" reciben una línea de 15px en :177.
**Por qué importa.** Diferencia entre "un consultor con proceso" y "quien inventó lo que deberías usar". Toda la estrategia de autoridad de PRODUCT.md descansa ahí.
**Fix.** h2 de :535-539 pasa a "Sistema SIGNIFICA", cinco fases a bajada. Firma visual propia — el único bloque que rompe el ritmo uniforme de 46px. Explicitar la división naranja/navy con etiqueta o eliminarla.
**Comando sugerido:** /impeccable bolder

## Persona Red Flags

**Jordan (primera vez).** 40% de probabilidad de aterrizar en una slide que promociona el blog (:51-64) o el evento (:65-78) en vez de la práctica. Click en "Historia" (:241) → no pasa nada; no existe id="historia" (ids presentes: inicio, quienes, oferta, linea-1/2/3, talks, porque, testimonios, contacto, footer). Click en el ítem 01 → cae a mitad de página sin ruta de vuelta. Se va sin saber qué cuesta ni qué pasa en la primera reunión.

**Casey (móvil distraída).** Gutters de 40px y h1 de 66px en 390px. ~12.000px de scroll hasta el único enlace de conversión. Header sticky (:234) es acierto, pero sus links están hidden bajo 768px (:240) y su CTA necesita segundo tap. Hero cambia cada 6s sin swipe ni pausa. Flechas del carrusel `hidden md:flex` (:717, :742) → bajo 768px solo dots de 8×8px (:750-756, :351-357), sin área extendida, contra mínimo 44px. Cierre del banner 36×36px (:287). Marquee pausa con group-hover (:771), inexistente en touch.

**Riley (rompedor).** Cinco `<a>` focuseables dentro de contenedores aria-hidden="true" (:299-344): las slides inactivas usan opacity-0, no display:none ni inert. Violación ARIA directa. El hero se renderiza con .map → cinco `<h1>` en el DOM, no uno. Sin :focus-visible en ninguna parte: globals.css hace outline:none en L151 y L186 sin reemplazo, y page.tsx no tiene ni una utilidad focus:. Sin @media (prefers-reduced-motion) en todo el repo, con cinco keyframes infinitas, marquee de 32s, crossfade de 1s y scroll-behavior:smooth. Cerrar el banner no persiste (useState(true) en :217). activeSlide (:227) se asigna y nunca se usa. Sin JS, los 30 elementos .rv quedan invisibles. Contraste footer: #6b8089/#02222f a 13px = 3.96:1 (falla, :871); #5f7580 a 12.5px = 3.37:1 (falla, :841, :853).

**Persona del proyecto — director nicaragüense, Instagram, teléfono, escéptico, 20 segundos.** Recibe un banner de evento antes de saber quién es Samuel (:258-293), que envuelve en móvil y come ~25% del primer viewport. Después un titular de 66px recortado. Necesita tres respuestas: ¿es real?, ¿con quién trabajó?, ¿trabaja acá? Los logos y los tres testimonios locales responden las tres — y están en :705 y :762, ~9.000px abajo. Cero prueba social en las primeras dos pantallas. Ninguna señal de precio, así que "esto es para empresas grandes, no para mí" queda sin refutar. Y :803 dice "+10 años" cuando la cifra declarada es 8.

## Minor Observations

- [P1] Ancla muerta: agregar id="historia" scroll-mt-[90px] a la sección de :363. A la inversa, id="porque" (:679) e id="footer" (:827) nunca se enlazan.
- [P1] Regla de la Señal Única rota: el bloque :401-457 lleva cuatro naranjas (:403, :413, :415, :426).
- [P1] Reserva del amarillo rota: #ffb703 correcto en :268 y :322, decorativo en :172 y :441.
- [P1] Regla de los Dos Suelos rota: la home alterna papel/blanco/navy siete veces. A esa frecuencia es empapelado, no énfasis.
- [P1] Navy casi-correcto en overlays del hero: #023a56 en vez de #023047 (:21, :35, :49).
- [P2] Codificación de color sin significado en audienceItems (:168-173) y la lista de problemas (:423-442).
- [P2] Cuerpo en español alineado a la derecha en la slide 2 (:34, aplicado en :316) — costo de comprensión a 310px, inconsistente con las otras cuatro.
- [P2] Degradados del hero transparentes al 66% del ancho (:21, :35, :49, :63, :77): en 390px el texto abarca ~11%–89%, la cola de :334 queda sobre foto sin scrim.
- [P2] Comilla decorativa en :733 se anuncia como contenido; envolver en aria-hidden.
- [P2] Metadata incompleta: layout.tsx define title y description, sin openGraph, twitter, metadataBase ni icons. El tráfico llega desde Instagram/LinkedIn/Facebook.
- [P3] Deriva tipográfica: 17.5/17/16/15.5/15/14.5/14/13.5px de cuerpo, y 17 textos bajo 14px (dos a 11 y 11.5px).
- [P3] La slide 5 del hero (:65-78) duplica el banner descartable de arriba: el mismo evento se vende dos veces en el primer viewport.

## Questions to Consider

1. Si borraras el carrusel y enviaras una slide — el argumento del Emprendedor Invisible — ¿qué perderías realmente?
2. El Sistema SIGNIFICA es la columna vertebral del posicionamiento y aparece cero veces. ¿No está listo, o nadie notó que falta?
3. Doce secciones abren con un titular idéntico de 46px/800. ¿Cuál es la más importante?
4. Una página cuya tesis es que una marca fuerte no grita está construida sobre un carrusel autoplay, una píldora amarilla y trece inversiones de fondo. ¿La composición cree en su propio texto?
5. Los activos más creíbles están a 9.000px del tope en el dispositivo donde aterriza la mayoría del tráfico. ¿Cuál es el argumento?
