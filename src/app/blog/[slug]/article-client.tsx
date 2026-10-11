"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { Comment } from "@/app/api/comments/[slug]/route";
import { getAdjacentArticles, type Article } from "@/app/blog/articles";
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
  const { prev, next } = getAdjacentArticles(article.slug);
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

  const facebookHref = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  const linkedinHref = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
  const whatsappHref = `https://wa.me/?text=${encodeURIComponent(`${article.title} ${url}`)}`;

  return (
    <div className="overflow-x-hidden bg-paper text-body-ink">
      <ScrollReveal />

      <a href="#contenido" className="skip-link">
        Saltar al contenido
      </a>
      <SiteHeader tone="paper" homeHref="/" links={navLinks} maxWidth={780} />

      <main id="contenido">
        <article className="mx-auto max-w-[720px] gutter py-[52px] sm:py-[72px]">
          <a href="/blog" className="navlink inline-flex items-center gap-2 t-meta font-semibold text-orange-ink">
            <Icon name="arrow-left" size={14} />
            Volver al blog
          </a>

          <div className="mt-6 t-label text-orange-ink">{article.cat}</div>
          <h1 className="mt-3 t-display text-navy">{article.title}</h1>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Image
              src="/brand/panel/samuel.jpg"
              alt="Samuel García"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover"
            />
            <div className="t-body-sm text-body-muted">
              <span className="font-bold text-navy">Samuel García</span>
              <span className="mx-2">·</span>
              <span className="tnum">{article.date}</span>
              <span className="mx-2">·</span>
              <span>{article.readMinutes} min de lectura</span>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-4 border-y border-ink/10 py-4">
            <span className="t-meta font-semibold text-body-muted">Compártelo:</span>
            <a href={facebookHref} target="_blank" rel="noopener noreferrer" aria-label="Compartir en Facebook">
              <ShareIcon platform="facebook" />
            </a>
            <a href={linkedinHref} target="_blank" rel="noopener noreferrer" aria-label="Compartir en LinkedIn">
              <ShareIcon platform="linkedin" />
            </a>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Compartir por WhatsApp">
              <ShareIcon platform="whatsapp" />
            </a>
            <button type="button" onClick={shareInstagram} aria-label="Compartir en Instagram">
              <ShareIcon platform="instagram" />
            </button>
            <button
              type="button"
              onClick={copyLink}
              className="ml-auto inline-flex items-center gap-2 rounded-full border border-ink/15 px-4 py-2 t-meta font-semibold text-body-ink"
            >
              <Icon name="link" size={14} />
              {copied ? "¡Copiado!" : "Copiar enlace"}
            </button>
          </div>

          <div className="relative mt-8 overflow-hidden rounded-[18px] bg-mist" style={{ aspectRatio: "4/3" }}>
            <Image src={article.img} alt={article.title} fill sizes="720px" className="object-cover" priority />
          </div>

          <div className="mt-9 flex flex-col gap-5 t-body text-body-ink">
            {article.body.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
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

          {(prev || next) && (
            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {prev ? (
                <a
                  href={`/blog/${prev.slug}`}
                  className="rounded-[14px] border border-ink/10 bg-white p-5 transition-colors hover:border-orange/40"
                >
                  <div className="t-meta text-body-muted">← Más antiguo</div>
                  <div className="mt-1 t-body-sm font-bold text-navy">{prev.title}</div>
                </a>
              ) : (
                <span />
              )}
              {next ? (
                <a
                  href={`/blog/${next.slug}`}
                  className="rounded-[14px] border border-ink/10 bg-white p-5 text-right transition-colors hover:border-orange/40"
                >
                  <div className="t-meta text-body-muted">Más reciente →</div>
                  <div className="mt-1 t-body-sm font-bold text-navy">{next.title}</div>
                </a>
              ) : (
                <span />
              )}
            </div>
          )}

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
        </article>
      </main>

      <SiteFooter
        maxWidth={780}
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
