import Image from "next/image";
import { Wordmark } from "@/components/wordmark";
import { nav, brand } from "@/content/site";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-paper/80 border-b border-navy/10">
      <div className="max-w-container mx-auto flex items-center justify-between px-10 py-4">
        <a href="#inicio" className="flex items-center gap-3">
          <Image src={brand.logo.navy} alt="" width={790} height={913} className="w-8 h-auto" />
          <Wordmark />
        </a>
        <div className="hidden md:flex items-center gap-8 text-[14.5px] font-medium text-[#3a4a54]">
          {nav.map((l) => (
            <a key={l.href} className="navlink" href={l.href}>
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#contacto"
          className="btnp bg-navy text-white font-semibold text-sm px-[22px] py-[11px] rounded-full"
        >
          Hablemos
        </a>
      </div>
    </nav>
  );
}
