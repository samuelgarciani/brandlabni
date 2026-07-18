import Image from "next/image";
import { EYEBROW, H2 } from "@/components/text-styles";
import { services, brand } from "@/content/site";

export function Services() {
  return (
    <section id="servicios" className="scroll-mt-[70px] bg-navy relative overflow-hidden">
      <Image
        src={brand.logo.white}
        alt=""
        width={790}
        height={913}
        className="absolute -top-[60px] -right-20 w-[460px] h-auto opacity-[0.05]"
      />
      <div className="max-w-container mx-auto px-10 pt-[110px] pb-[116px] relative z-[2]">
        <div className="rv max-w-[640px]">
          <div className={`${EYEBROW} mb-5`}>{services.eyebrow}</div>
          <h2 className={`${H2} text-white m-0`}>
            {services.titleLines.map((line, i) => (
              <span key={line}>
                {i > 0 && <br />}
                {line}
              </span>
            ))}
          </h2>
          <p className="mt-[22px] text-[17px] leading-[1.6] text-[#aebfc8]">{services.body}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-[22px] mt-14">
          {services.items.map((s) => (
            <div key={s.n} className="svc rv bg-navy-2 border border-white/10 rounded-[22px] px-[26px] pt-[30px] pb-8">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center font-extrabold text-base"
                style={{ background: s.color, color: s.fg }}
              >
                {s.n}
              </div>
              <h3 className="mt-[22px] mb-[10px] text-[21px] font-bold text-white tracking-[-0.02em]">{s.title}</h3>
              <p className="m-0 text-[15px] leading-[1.6] text-[#9db0ba]">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
