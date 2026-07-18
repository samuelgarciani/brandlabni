import Image from "next/image";
import { hero } from "@/content/site";

export function Hero() {
  return (
    <header id="inicio" className="relative overflow-hidden scroll-mt-[70px]">
      <div className="max-w-container mx-auto grid md:grid-cols-[1.05fr_.95fr] items-stretch min-h-[620px]">
        <div className="flex flex-col justify-center pt-[70px] pb-[78px] pl-10 pr-5">
          <div className="rv self-start inline-flex items-center gap-[9px] bg-[#eef4f6] text-navy text-[12.5px] font-semibold tracking-[0.04em] uppercase px-[15px] py-2 rounded-full mb-[26px]">
            <span className="w-[7px] h-[7px] rounded-full bg-orange" />
            {hero.badge}
          </div>
          <h1 className="rv m-0 text-[76px] leading-[.98] tracking-[-0.035em] font-extrabold text-navy">
            {hero.titleLines.map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
            <span className="text-orange">{hero.titleHighlight}</span>
          </h1>
          <p className="rv mt-7 text-lg leading-[1.55] text-[#42525c] max-w-[450px]">{hero.body}</p>
          <div className="rv flex gap-[14px] mt-9">
            <a
              href={hero.primaryCta.href}
              className="btnp bg-orange text-white font-semibold text-[15.5px] px-[30px] py-[15px] rounded-full"
            >
              {hero.primaryCta.label}
            </a>
            <a
              href={hero.secondaryCta.href}
              className="btno bg-transparent text-navy font-semibold text-[15.5px] px-7 py-[15px] rounded-full border-[1.5px] border-navy/20"
            >
              {hero.secondaryCta.label}
            </a>
          </div>
          <div className="rv flex gap-11 mt-[50px]">
            {hero.stats.map((s) => (
              <div key={s.label}>
                <div className="text-[30px] font-extrabold text-navy tracking-[-0.02em]">{s.value}</div>
                <div className="text-[13px] text-[#6b7880] font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative flex items-end justify-center pl-5 pr-10">
          <div className="absolute top-[60px] right-11 w-[150px] h-[150px] bg-orange rounded-full z-0 animate-floaty" />
          <div className="absolute bottom-20 left-[2px] w-[74px] h-[74px] border-2 border-blue rounded-full z-0" />
          <div
            className="rv relative z-[2] w-[400px] h-[540px] overflow-hidden bg-[#dfe7ea]"
            style={{ borderRadius: "200px 200px 22px 22px", boxShadow: "0 40px 80px -30px rgba(2,48,71,.5)" }}
          >
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              fill
              priority
              sizes="400px"
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
