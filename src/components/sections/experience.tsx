import Image from "next/image";
import { EYEBROW, H2 } from "@/components/text-styles";
import { experience } from "@/content/site";

export function Experience() {
  return (
    <section id="experiencia" className="scroll-mt-[70px] bg-white border-t border-navy/10">
      <div className="max-w-container mx-auto px-10 py-[110px] grid md:grid-cols-[.8fr_1.2fr] gap-[70px]">
        <div className="rv">
          <div className={`${EYEBROW} mb-5`}>{experience.eyebrow}</div>
          <h2 className={`${H2} text-navy m-0`}>{experience.title}</h2>
          <p className="mt-6 text-[17px] leading-[1.65] text-[#42525c]">{experience.body}</p>
          <div className="mt-8 flex items-center gap-[14px]">
            <Image src={experience.seal.src} alt="" width={948} height={948} className="w-[58px] h-[58px]" />
            <span className="text-[15px] font-semibold text-navy leading-[1.4]">
              {experience.seal.label.map((line, i) => (
                <span key={line}>
                  {i > 0 && <br />}
                  {line}
                </span>
              ))}
            </span>
          </div>
        </div>
        <div className="rv border-l-2 border-[#e6e2d9] pl-[38px] flex flex-col gap-10">
          {experience.timeline.map((t) => (
            <div key={t.role} className="relative">
              <span
                className="absolute -left-[47px] top-[2px] w-4 h-4 rounded-full border-[3px] border-white"
                style={{ background: t.dot, boxShadow: `0 0 0 2px ${t.dot}` }}
              />
              <div
                className="text-[13px] font-bold tracking-[0.04em]"
                style={{ color: t.dot === "#c8d6dc" ? "#8a97a0" : t.dot }}
              >
                {t.when}
              </div>
              <h3 className="mt-[6px] mb-[6px] text-[22px] font-bold text-navy tracking-[-0.02em]">{t.role}</h3>
              <p className="m-0 text-[15.5px] leading-[1.6] text-[#6b7880]">{t.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
