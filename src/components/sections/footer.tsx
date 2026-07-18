import Image from "next/image";
import { Wordmark } from "@/components/wordmark";
import { nav, contact, footer, brand } from "@/content/site";

export function Footer() {
  return (
    <footer className="bg-ink text-[#eaf1f3]">
      <div className="max-w-container mx-auto px-10 pt-16 pb-10">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr] gap-10 pb-12 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-[18px]">
              <Image src={brand.logo.white} alt="" width={790} height={913} className="w-[34px] h-auto" />
              <Wordmark light />
            </div>
            <p className="m-0 max-w-[340px] text-[15px] leading-[1.6] text-[#94a8b2]">{footer.body}</p>
            <p className="mt-[18px] text-[17px] font-bold text-orange italic">{footer.tagline}</p>
          </div>
          <div>
            <div className="text-[13px] font-bold tracking-[0.1em] uppercase text-[#5f7580] mb-4">Navegación</div>
            <div className="flex flex-col gap-[11px] text-[15px] text-[#b6c6ce]">
              {nav
                .filter((n) => n.href !== "#testimonios")
                .map((l) => (
                  <a key={l.href} className="navlink" href={l.href}>
                    {l.label}
                  </a>
                ))}
              <a className="navlink" href="#contacto">
                Contacto
              </a>
            </div>
          </div>
          <div>
            <div className="text-[13px] font-bold tracking-[0.1em] uppercase text-[#5f7580] mb-4">Contacto</div>
            <div className="flex flex-col gap-[11px] text-[15px] text-[#b6c6ce]">
              {contact.channels.map((c) => (
                <a
                  key={c.href}
                  className="navlink"
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {c.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center flex-wrap gap-3 pt-[26px] text-[13.5px] text-[#6b8089]">
          <span>{footer.copyright}</span>
          <span>{footer.signature}</span>
        </div>
      </div>
    </footer>
  );
}
