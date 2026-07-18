# Brand Lab by Samu — Portafolio (Next.js + Tailwind)

Landing page de **Samuel García — Brand Strategist**, migrada a Next.js (App Router) + TypeScript + Tailwind CSS.

## Requisitos
- Node.js 18.17 o superior

## Instalación y desarrollo
```bash
cd nextjs
npm install
npm run dev
```
Abre http://localhost:3000

## Build de producción
```bash
npm run build
npm run start
```

## Estructura
```
app/
  layout.tsx     → <html>, metadata, fuente Onest (next/font)
  page.tsx       → toda la landing (client component con reveal + formulario)
  globals.css    → Tailwind + keyframes (marquee, floaty) + estilos de reveal/hover
public/brand/    → imágenes (isotipo, sello, fotos de Samuel)
tailwind.config.ts → paleta de marca (navy, orange, blue, sky, yellow…) y animaciones
```

## Notas de marca
- **Tipografía:** Onest (sustituto libre de *Creato Display*, que es de pago). Si adquieres Creato Display,
  colócalo en `app/fonts/`, cárgalo con `next/font/local` y ajusta la variable `--font-onest`.
- **Colores:** definidos en `tailwind.config.ts` — `navy #023047`, `orange #fb8500`, `blue #219ebc`,
  `sky #8ecae6`, `yellow #ffb703`, `red #e52e31`.
- **Imágenes de proyectos:** las tarjetas de la sección *Proyectos* usan placeholders. Sustitúyelos por
  fotos reales colocándolas en `public/brand/` y cambiando el bloque `.projimg` por un `<img>`.

## Secciones
Hero · Clientes · Sobre mí · Servicios · Proyectos · Experiencia · Testimonios · Contacto · Footer

## Formulario de contacto
El `onSubmit` actual solo muestra un mensaje de confirmación en el cliente. Para recibir mensajes reales,
conéctalo a un endpoint (`app/api/contact/route.ts`), a Formspree, Resend, o tu proveedor de correo.

> Los testimonios y logos de clientes son de ejemplo — reemplázalos por reales cuando los tengas.
