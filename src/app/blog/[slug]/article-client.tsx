"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { Comment } from "@/app/api/comments/[slug]/route";
import { articles, type Article } from "@/app/blog/articles";
import { Icon } from "@/components/icon";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ShareIcon } from "@/components/share-icon";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { contact, siteUrl } from "@/lib/site";

const navLinks = [
  { label: "Blog Brand", href: "/blog" },
  { label: "Galería de Eventos", href: "/eventos" },
  { label: "Volver al sitio", href: "/", back: true },
];

/** Splits a list item's short lead-in ("Label. " / "Label? ") from its body so the lead can render bold. */
function splitLeadIn(text: string): [string, string] {
  const match = text.match(/^(.{1,80}?[.?])\s([\s\S]*)$/);
  if (!match) return [text, ""];
  return [match[1], ` ${match[2]}`];
}

/** Renders `**term**` markup as bold — used to surface each post's SEO focus terms in the running text. */
function renderInline(text: string) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return parts.map((part, index) =>
    index % 2 === 1 ? <strong key={index} className="text-navy">{part}</strong> : part
  );
}

function relativeDate(ts: number) {
  const diffMs = Date.now() - ts;
  const minutes = Math.floor(diffMs / 60000);
  if (minutes < 1) return "justo ahora";
  if (minutes < 60) return `hace ${minutes} min`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `hace ${hours} h`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `hace ${days} d`;
  return new Date(ts).toLocaleDateString("es-NI", { day: "numeric", month: "short", year: "numeric" });
}

export function ArticleClient({ article }: { article: Article }) {
  const moreArticles = articles.filter((item) => item.slug !== article.slug).slice(0, 3);
  const url = `${siteUrl}/blog/${article.slug}`;

  const [likeCount, setLikeCount] = useState<number | null>(null);
  const [liked, setLiked] = useState(false);
  const [likeBusy, setLikeBusy] = useState(false);

  const [comments, setComments] = useState<Comment[] | null>(null);
  const [commentName, setCommentName] = useState("");
  const [commentMessage, setCommentMessage] = useState("");
  const [submittingComment, setSubmittingComment] = useState(false);
  const [commentError, setCommentError] = useState("");

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setLiked(window.localStorage.getItem(`liked:${article.slug}`) === "1");

    fetch(`/api/likes/${article.slug}`)
      .then((res) => res.json())
      .then((data) => setLikeCount(data.count))
      .catch(() => setLikeCount(0));

    fetch(`/api/comments/${article.slug}`)
      .then((res) => res.json())
      .then((data) => setComments(data.comments))
      .catch(() => setComments([]));
  }, [article.slug]);

  const toggleLike = async () => {
    if (likeBusy) return;
    setLikeBusy(true);
    const nextLiked = !liked;
    setLiked(nextLiked);
    setLikeCount((count) => (count ?? 0) + (nextLiked ? 1 : -1));
    try {
      const res = await fetch(`/api/likes/${article.slug}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: nextLiked ? "like" : "unlike" }),
      });
      const data = await res.json();
      setLikeCount(data.count);
      window.localStorage.setItem(`liked:${article.slug}`, nextLiked ? "1" : "0");
    } catch {
      setLiked(!nextLiked);
      setLikeCount((count) => (count ?? 0) + (nextLiked ? -1 : 1));
    } finally {
      setLikeBusy(false);
    }
  };

  const submitComment = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submittingComment) return;
    setCommentError("");
    if (!commentName.trim() || !commentMessage.trim()) {
      setCommentError("Escribe tu nombre y tu comentario.");
      return;
    }
    setSubmittingComment(true);
    try {
      const res = await fetch(`/api/comments/${article.slug}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: commentName, message: commentMessage }),
      });
      if (!res.ok) throw new Error("failed");
      const data = await res.json();
      setComments(data.comments);
      setCommentMessage("");
    } catch {
      setCommentError("No pudimos publicar tu comentario. Intenta de nuevo.");
    } finally {
      setSubmittingComment(false);
    }
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const shareInstagram = async () => {
    const nav = navigator as Navigator & { share?: (data: ShareData) => Promise<void> };
    if (nav.share) {
      try {
        await nav.share({ title: article.title, url });
        return;
      } catch {
        // User cancelled or share failed — fall back to copy.
      }
    }
    await copyLink();
  };

  // On phones, navigator.share opens the OS share sheet so the link goes straight
  // into the Facebook/Messenger/Instagram app instead of the web sharer in a browser tab.
  // Desktop browsers rarely implement it, so the anchor's facebookHref fallback still fires.
  const shareFacebook = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const nav = navigator as Navigator & { share?: (data: ShareData) => Promise<void> };
    if (nav.share) {
      event.preventDefault();
      nav.share({ title: article.title, url }).catch(() => {});
    }
  };

  const facebookHref = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  const linkedinHref = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
  const whatsappHref = `https://wa.me/?text=${encodeURIComponent(`${article.title} ${url}`)}`;

  return (
    <div className="overflow-x-hidden bg-paper text-body-ink">
      <ScrollReveal />

      <a href="#contenido" className="skip-link">
        Saltar al contenido
      </a>
      <SiteHeader tone="paper" homeHref="/" links={navLinks} maxWidth={1100} />

      <main id="contenido">
        <article className="mx-auto max-w-[1100px] gutter py-[52px] sm:py-[72px]">
          <a href="/blog" className="navlink inline-flex items-center gap-2 t-meta font-semibold text-orange-ink">
            <Icon name="arrow-left" size={14} />
            Volver al blog
          </a>

          <h1 className="mt-6 t-display text-navy">{article.title}</h1>
          <div aria-hidden className="mt-4 h-[3px] w-12 rounded-full bg-orange" />

          <div className="mt-4 flex flex-wrap items-center gap-2 t-body-sm text-body-muted">
            <span className="font-semibold text-navy">Blog Brand</span>
            <span aria-hidden>-</span>
            <time className="tnum" dateTime={article.dateISO}>{article.date}</time>
            <span aria-hidden className="h-1 w-1 rounded-full bg-body-muted/50" />
            <span className="t-meta font-bold text-blue-ink">{article.cat.toUpperCase()}</span>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            {article.keywords.map((keyword) => (
              <span key={keyword} className="rounded-full border border-blue-ink/25 px-3 py-1 t-meta text-blue-ink">
                {keyword}
              </span>
            ))}
          </div>

          <div className="mt-5 border-t border-ink/10" />

          <div className="flex flex-wrap items-center justify-between gap-4 py-4">
            <time className="t-body-sm tnum text-body-muted" dateTime={article.dateISO}>{article.date}</time>
            <div className="flex flex-wrap items-center gap-3">
              <a href={facebookHref} target="_blank" rel="noopener noreferrer" aria-label="Compartir en Facebook" onClick={shareFacebook}>
                <ShareIcon platform="facebook" size={36} />
              </a>
              <a href={linkedinHref} target="_blank" rel="noopener noreferrer" aria-label="Compartir en LinkedIn">
                <ShareIcon platform="linkedin" size={36} />
              </a>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Compartir por WhatsApp">
                <ShareIcon platform="whatsapp" size={36} />
              </a>
              <button type="button" onClick={shareInstagram} aria-label="Compartir en Instagram">
                <ShareIcon platform="instagram" size={36} />
              </button>
              <button
                type="button"
                onClick={copyLink}
                aria-label="Copiar enlace"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 text-body-ink"
              >
                <Icon name="link" size={15} />
              </button>
              {copied ? <span className="t-meta text-orange-ink">¡Copiado!</span> : null}
            </div>
          </div>

          <div className="border-t border-ink/10" />

          <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_320px] lg:items-start">
            <div className="min-w-0">
              <div className="relative overflow-hidden rounded-[14px] bg-mist" style={{ aspectRatio: "16/9" }}>
                <Image
                  src={article.img}
                  alt={article.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 740px"
                  quality={92}
                  className="object-cover"
                  priority
                />
              </div>

              <p className="mt-7 t-lead text-navy">{renderInline(article.excerpt)}</p>

              <div className="mt-6 flex flex-col gap-5 t-body text-body-ink">
                {article.body.map((block, index) => {
                  const key = `${block.type}-${index}`;
                  if (block.type === "h2") {
                    return (
                      <h2 key={key} className="mt-4 t-title-sm text-navy">
                        {block.text}
                      </h2>
                    );
                  }
                  if (block.type === "quote") {
                    return (
                      <p key={key} className="border-l-[3px] border-orange py-1 pl-5 t-title-sm font-semibold italic text-navy">
                        {renderInline(block.text)}
                      </p>
                    );
                  }
                  if (block.type === "list") {
                    const ListTag = block.ordered ? "ol" : "ul";
                    return (
                      <ListTag key={key} className="flex flex-col gap-3 pl-1">
                        {block.items.map((item) => {
                          const [lead, rest] = splitLeadIn(item);
                          return (
                            <li key={item.slice(0, 40)} className="flex gap-3">
                              <span aria-hidden className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                              <span>
                                <strong className="text-navy">{lead}</strong>
                                {renderInline(rest)}
                              </span>
                            </li>
                          );
                        })}
                      </ListTag>
                    );
                  }
                  if (block.type === "table") {
                    return (
                      <div key={key} className="overflow-x-auto rounded-[12px] border border-ink/10">
                        <table className="w-full text-left t-body-sm tnum">
                          <thead>
                            <tr className="bg-bone">
                              {block.headers.map((header) => (
                                <th key={header} className="whitespace-nowrap px-4 py-3 font-bold text-navy">
                                  {header}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {block.rows.map((row) => (
                              <tr key={row[0]} className="border-t border-ink/10">
                                {row.map((cell, cellIndex) => (
                                  <td key={cellIndex} className="whitespace-nowrap px-4 py-3 text-body-ink">
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    );
                  }
                  return <p key={key}>{renderInline(block.text)}</p>;
                })}
              </div>

              <div className="mt-9 flex items-center gap-4">
                <button
                  type="button"
                  onClick={toggleLike}
                  className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-2.5 t-body-sm font-semibold text-body-ink transition-colors hover:border-orange/40"
                >
                  <Icon
                    name="heart"
                    size={18}
                    className={liked ? "text-orange [&>path]:fill-orange" : "text-body-muted"}
                  />
                  Me gusta
                  <span className="tnum text-body-muted">{likeCount ?? "···"}</span>
                </button>
                <span className="inline-flex items-center gap-2 t-body-sm text-body-muted">
                  <Icon name="comment" size={16} />
                  {comments ? comments.length : "···"} comentarios
                </span>
              </div>

              <div className="mt-12 rounded-[20px] border border-ink/10 bg-white p-7 sm:p-9">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                  <Image
                    src="/brand/panel/samuel.jpg"
                    alt="Samuel García"
                    width={76}
                    height={76}
                    className="h-[76px] w-[76px] shrink-0 rounded-full object-cover"
                  />
                  <div>
                    <div className="t-title-sm text-navy">Samuel García</div>
                    <p className="mt-1 t-body-sm text-body-muted">
                      Consultor en branding y estrategia de marca. Fundador de Brand Lab — ayudo a empresas y
                      emprendedores a construir marcas con propósito, diferenciación y significado.
                    </p>
                    <p className="mt-3 t-body-sm font-extrabold italic text-orange-ink">We don&apos;t sell, we mean! — Samu</p>
                    <div className="mt-4 flex flex-wrap items-center gap-4">
                      <a href={contact.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <ShareIcon platform="instagram" size={34} />
                      </a>
                      <a href={contact.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <ShareIcon platform="facebook" size={34} />
                      </a>
                      <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <ShareIcon platform="linkedin" size={34} />
                      </a>
                      <a
                        href={`mailto:${contact.email}`}
                        className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-4 py-2 t-meta font-semibold text-body-ink"
                      >
                        <Icon name="mail" size={14} />
                        Escríbeme
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-14">
                <h2 className="t-title-sm text-navy">
                  {comments ? comments.length : "···"} comentarios
                </h2>

                <form onSubmit={submitComment} className="mt-5 rounded-[16px] border border-ink/10 bg-white p-5">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <input
                      value={commentName}
                      onChange={(event) => setCommentName(event.target.value)}
                      placeholder="Tu nombre"
                      maxLength={60}
                      className="fld w-full"
                      aria-label="Tu nombre"
                    />
                  </div>
                  <textarea
                    value={commentMessage}
                    onChange={(event) => setCommentMessage(event.target.value)}
                    placeholder="Escribe tu comentario…"
                    maxLength={600}
                    rows={3}
                    className="fld mt-3 w-full resize-none"
                    aria-label="Tu comentario"
                  />
                  {commentError ? <p className="mt-2 t-meta text-orange-ink">{commentError}</p> : null}
                  <button
                    type="submit"
                    disabled={submittingComment}
                    className="btn btn-sm btn-navy mt-3"
                  >
                    {submittingComment ? "Publicando…" : "Comentar"}
                  </button>
                </form>

                <div className="mt-6 flex flex-col gap-5">
                  {comments === null ? (
                    <p className="t-body-sm text-body-muted">Cargando comentarios…</p>
                  ) : comments.length === 0 ? (
                    <p className="t-body-sm text-body-muted">Sé la primera persona en comentar.</p>
                  ) : (
                    comments.map((comment) => (
                      <div key={`${comment.ts}-${comment.name}`} className="border-t border-ink/10 pt-5 first:border-t-0 first:pt-0">
                        <div className="flex items-center gap-2">
                          <span className="t-body-sm font-bold text-navy">{comment.name}</span>
                          <span className="t-meta text-body-muted">{relativeDate(comment.ts)}</span>
                        </div>
                        <p className="mt-1 t-body-sm text-body-ink">{comment.message}</p>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            {moreArticles.length > 0 ? (
              <aside className="lg:sticky lg:top-24">
                <h2 className="t-title-sm text-navy">Últimas Noticias</h2>
                <div className="mt-5 flex flex-col gap-5">
                  {moreArticles.map((item) => (
                    <a key={item.slug} href={`/blog/${item.slug}`} className="group flex items-start gap-3">
                      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-[10px] bg-mist">
                        <Image src={item.img} alt={item.title} fill sizes="64px" className="object-cover" />
                      </div>
                      <div className="min-w-0">
                        <div className="t-body-sm font-bold text-navy transition-colors group-hover:text-orange-ink">
                          {item.title}
                        </div>
                        <p className="mt-1 t-meta text-body-muted">{renderInline(item.excerpt)}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </aside>
            ) : null}
          </div>
        </article>
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
