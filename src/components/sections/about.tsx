import Image from "next/image";
import { EYEBROW, H2 } from "@/components/text-styles";
import { about } from "@/content/site";

export function About() {
  return (
    <section id="sobre" className="scroll-mt-[70px] max-w-container mx-auto px-10 pt-[110px] pb-[100px]">
      <div className="grid md:grid-cols-[.85fr_1.15fr] gap-[70px] items-center">
        <div className="rv relative">
          <div className="absolute -top-[22px] -left-[22px] w-[120px] h-[120px] bg-sky rounded-3xl z-0" />
          <div
            className="relative z-[2] rounded-[26px] overflow-hidden aspect-[4/5] bg-[#dfe7ea]"
            style={{ boxShadow: "0 40px 80px -40px rgba(2,48,71,.5)" }}
          >
            <Image
              src={about.image.src}
              alt={about.image.alt}
              fill
              sizes="(min-width: 768px) 45vw, 90vw"
              className="object-cover"
              style={{ objectPosition: "center 15%" }}
            />
          </div>
          <div
            className="absolute z-[3] -bottom-5 -right-4 bg-navy text-white rounded-[18px] px-5 py-4"
            style={{ boxShadow: "0 20px 40px -20px rgba(2,48,71,.6)" }}
          >
            <div className="font-extrabold text-[15px]">{about.card.name}</div>
            <div className="text-[12.5px] text-sky font-medium">{about.card.role}</div>
          </div>
        </div>
        <div className="rv">
          <div className={`${EYEBROW} mb-5`}>{about.eyebrow}</div>
          <h2 className={`${H2} text-navy m-0`}>
            {about.titleLines.map((line, i) => (
              <span key={line}>
                {i > 0 && <br />}
                {line}
              </span>
            ))}
          </h2>
          {about.paragraphs.map((p, i) => (
            <p key={p} className={`${i === 0 ? "mt-6" : "mt-4"} text-[17px] leading-[1.65] text-[#42525c]`}>
              {p}
            </p>
          ))}
          <div className="flex flex-wrap gap-[10px] mt-7">
            {about.tags.map((t) => (
              <span key={t} className="bg-[#eef4f6] text-navy text-[13.5px] font-semibold px-4 py-[9px] rounded-full">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
