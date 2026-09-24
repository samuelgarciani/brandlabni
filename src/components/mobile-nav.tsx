"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/icon";
import { Wordmark } from "@/components/wordmark";

export type MobileNavLink = { label: string; href: string; back?: boolean };

type MobileNavProps = {
  links: MobileNavLink[];
  /** Primary action, mirrored from the header CTA of the page. */
  cta?: { label: string; href?: string; onSelect?: () => void };
};

/**
 * Navigation for viewports below `md`, where the header link row is hidden.
 * Uses a native `<dialog>` so focus containment, Escape and background inertness
 * come from the platform instead of being re-implemented.
 */
export function MobileNav({ links, cta }: MobileNavProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  const close = () => {
    dialogRef.current?.close();
    setOpen(false);
  };

  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const previous = root.style.overflow;
    root.style.overflow = "hidden";
    return () => {
      root.style.overflow = previous;
    };
  }, [open]);

  const activate = () => {
    close();
    cta?.onSelect?.();
  };

  return (
    <>
      <button
        type="button"
        onClick={() => {
          dialogRef.current?.showModal();
          setOpen(true);
        }}
        aria-label="Abrir menú"
        aria-expanded={open}
        className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full text-current transition-colors md:hidden"
      >
        <Icon name="menu" size={22} />
      </button>

      <dialog
        ref={dialogRef}
        aria-label="Menú de navegación"
        onClose={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        className="drawer"
      >
        <div className="relative flex min-h-full flex-col bg-abyss text-white">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-10 h-[320px] w-[320px] bg-[url('/brand/isotipo-white.png')] bg-contain bg-no-repeat opacity-5"
          />

          <div className="relative flex items-center justify-between px-[22px] py-4">
            <span className="flex items-center gap-3">
              <Image src="/brand/isotipo-white.png" alt="" width={28} height={28} className="h-7 w-auto" />
              <Wordmark light />
            </span>
            <button
              type="button"
              onClick={close}
              aria-label="Cerrar menú"
              className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full text-white"
            >
              <Icon name="close" size={18} />
            </button>
          </div>

          <nav className="relative mt-4 flex-1 px-[22px]" aria-label="Principal">
            <ul className="border-t border-white/[0.1]">
              {links.map((link) => (
                <li key={link.href + link.label} className="border-b border-white/[0.1]">
                  <a
                    href={link.href}
                    onClick={close}
                    className="drawer-link flex items-center gap-4 py-[18px] t-subhead text-on-dark-strong"
                  >
                    {link.back ? (
                      <Icon name="arrow-left" size={16} className="drawer-mark text-orange" />
                    ) : (
                      <span
                        aria-hidden="true"
                        className="drawer-mark marker block h-3 w-3 shrink-0 bg-orange"
                      />
                    )}
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="relative mt-10 px-[22px] pb-[max(26px,env(safe-area-inset-bottom))]">
            {cta ? (
              cta.href ? (
                <a
                  href={cta.href}
                  onClick={activate}
                  className="flex w-full items-center justify-center rounded-full bg-orange px-8 py-4 t-body-sm font-bold text-abyss"
                >
                  {cta.label}
                </a>
              ) : (
                <button
                  type="button"
                  onClick={activate}
                  className="flex w-full items-center justify-center rounded-full bg-orange px-8 py-4 t-body-sm font-bold text-abyss"
                >
                  {cta.label}
                </button>
              )
            ) : null}
            <a
              href="https://wa.me/50557400875"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 py-2 t-body-sm font-semibold text-sky"
            >
              WhatsApp · +505 5740 0875
            </a>
          </div>
        </div>
      </dialog>
    </>
  );
}
