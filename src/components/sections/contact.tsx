import Image from "next/image";
import { EYEBROW } from "@/components/text-styles";
import { contact, brand } from "@/content/site";
import { ContactForm } from "@/components/sections/contact-form";

export function Contact() {
  return (
    <section id="contacto" className="scroll-mt-[70px] bg-navy relative overflow-hidden">
      <Image
        src={brand.logo.white}
        alt=""
        width={790}
        height={913}
        className="absolute -bottom-[90px] -left-[70px] w-[420px] h-auto opacity-[0.05]"
      />
      <div className="max-w-container mx-auto px-10 py-[110px] relative z-[2] grid md:grid-cols-2 gap-[70px] items-start">
        <div className="rv">
          <div className={`${EYEBROW} mb-5`}>{contact.eyebrow}</div>
          <h2 className="text-[48px] leading-[1.03] tracking-[-0.03em] font-extrabold text-white m-0">
            {contact.title}
          </h2>
          <p className="mt-6 mb-10 text-[17px] leading-[1.6] text-[#aebfc8] max-w-[440px]">{contact.body}</p>
          <div className="flex flex-col gap-[18px]">
            {contact.channels.map((c) => (
              <a
                key={c.href}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-[15px]"
              >
                <span className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-orange text-[17px] font-bold">
                  {c.icon}
                </span>
                <span className="text-[#eaf1f3] text-base font-medium">{c.label}</span>
              </a>
            ))}
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
