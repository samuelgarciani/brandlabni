"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { articles } from "@/app/blog/articles";
import { Icon } from "@/components/icon";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const navLinks = [
  { label: "Blogspot", href: "#blogspot" },
  { label: "Galería de Eventos", href: "/eventos" },
  { label: "Volver al sitio", href: "/", back: true },
];

/** Renders `**term**` markup as bold — matches each post's SEO focus terms highlighted in its excerpt. */
function renderInline(text: string) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return parts.map((part, index) =>
    index % 2 === 1 ? <strong key={index} className="text-navy">{part}</strong> : part
  );
}

function PostStats({ slug }: { slug: string }) {
  const [stats, setStats] = useState<{ likes: number; comments: number } | null>(null);

  useEffect(() => {
    fetch(`/api/post-stats/${slug}`)
      .then((res) => res.json())
      .then((data) => setStats({ likes: data.likes, comments: data.comments }))
      .catch(() => setStats({ likes: 0, comments: 0 }));
  }, [slug]);

  return (
    <div className="mt-5 flex items-center justify-between border-t border-ink/10 pt-4">
      <span className="inline-flex items-center gap-2 t-meta text-body-muted">
        <Icon name="comment" size={15} />
        {stats ? stats.comments : "···"}
      </span>
      <span className="inline-flex items-center gap-2 t-meta text-body-muted">
        <Icon name="heart" size={15} />
        {stats ? stats.likes : "···"}
      </span>
    </div>
  );
}

export function BlogClient() {
  return (
    <div className="overflow-x-hidden bg-paper text-body-ink">
      <ScrollReveal />

      <a href="#contenido" className="skip-link">
        Saltar al contenido
      </a>
      <SiteHeader tone="paper" homeHref="/" links={navLinks} maxWidth={1100} />

      <main id="contenido">
        <section aria-labelledby="h-blog-hero" className="relative overflow-hidden bg-mist">
          <Image
            src="/brand/blog-hero.png"
            alt="Samuel García"
            fill
            sizes="100vw"
            quality={90}
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
                Mis notas, vivencias reales y reflexiones sobre branding — publicadas cada semana, desde mi propio punto de vista.
              </p>
              <div className="rv mt-[30px] flex flex-wrap gap-[14px]">
                <a
                  href="#blogspot"
                  className="btn btn-lg btn-primary-on-light"
                >
                  Leer el Blogspot
                </a>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="h-blogspot" id="blogspot" className="scroll-mt-[70px] bg-bone">
          <div className="mx-auto max-w-[1180px] gutter py-[92px]">
            <div className="rv max-w-[700px]">
              <div className="t-label text-orange-ink">
                Blogspot
              </div>
              <h2 id="h-blogspot" className="mt-4 t-headline text-navy">
                Historias de marca que vale la pena contar
              </h2>
              <p className="mt-4 measure t-body text-body-muted">
                Cada semana comparto una vivencia real — la mía, o la de una marca nacional o internacional — para entender, juntos, qué hace que una marca se gane un lugar en la vida de las personas. No es una clase. Es una invitación a leer, a reconocerte en la historia, y a mirar tu propia marca distinto.
              </p>
            </div>

            <div className="rv mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <a
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="group flex flex-col overflow-hidden rounded-[18px] border border-ink/10 bg-white shadow-[0_18px_40px_-30px_rgba(2,34,47,0.35)] transition-shadow hover:shadow-[0_24px_50px_-26px_rgba(2,34,47,0.45)]"
                >
                  <div className="relative overflow-hidden bg-mist" style={{ aspectRatio: "4/3" }}>
                    <Image
                      src={article.img}
                      alt={article.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                      quality={90}
                      className="object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col px-6 pt-6 pb-6">
                    <div className="flex items-center gap-2.5">
                      <Image
                        src="/brand/panel/samuel.jpg"
                        alt=""
                        width={30}
                        height={30}
                        className="h-[30px] w-[30px] rounded-full object-cover"
                      />
                      <div className="leading-tight">
                        <div className="t-meta font-bold text-navy">Samuel García</div>
                        <div className="t-meta tnum text-body-muted">
                          <time dateTime={article.dateISO}>{article.date}</time> · {article.readMinutes} min
                        </div>
                      </div>
                    </div>
                    <h3 className="mt-3 t-title-sm font-extrabold text-navy transition-colors group-hover:text-orange-ink">
                      {article.title}
                    </h3>
                    <p className="mt-2 flex-1 t-body-sm text-body-muted">{renderInline(article.excerpt)}</p>
                    <PostStats slug={article.slug} />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
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
