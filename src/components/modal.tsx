"use client";

import { useEffect, useRef } from "react";
import { Icon } from "@/components/icon";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  /** Accessible name for the dialog. */
  label: string;
  /** Classes for the panel itself — width, padding, surface. */
  panelClassName?: string;
  children: React.ReactNode;
};

/**
 * Overlay built on the native `<dialog>`, so focus containment, Escape and
 * background inertness come from the platform rather than being re-implemented.
 */
export function Modal({ open, onClose, label, panelClassName = "", children }: ModalProps) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (open && !el.open) el.showModal();
    if (!open && el.open) el.close();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const previous = root.style.overflow;
    root.style.overflow = "hidden";
    return () => {
      root.style.overflow = previous;
    };
  }, [open]);

  return (
    <dialog
      ref={ref}
      aria-label={label}
      className="modal"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClose={onClose}
      // A click landing on the dialog itself is a click on the padding around
      // the panel, which is the backdrop as far as the visitor is concerned.
      onClick={(event) => {
        if (event.target === ref.current) onClose();
      }}
    >
      <div className={`relative ${panelClassName}`}>
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-abyss/70 text-white"
        >
          <Icon name="close" size={18} />
        </button>
        {children}
      </div>
    </dialog>
  );
}
