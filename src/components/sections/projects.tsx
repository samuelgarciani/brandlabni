import Image from "next/image";
import { EYEBROW, H2 } from "@/components/text-styles";
import { projects, brand } from "@/content/site";

export function Projects() {
  return (
    <section id="proyectos" className="scroll-mt-[70px] max-w-container mx-auto px-10 pt-[110px] pb-[100px]">
      <div className="rv flex justify-between items-end flex-wrap gap-5 mb-[52px]">
        <div className="max-w-[640px]">
          <div className={`${EYEBROW} mb-5`}>{projects.eyebrow}</div>
          <h2 className={`${H2} text-navy m-0`}>{projects.title}</h2>
        </div>
        <p className="m-0 max-w-[340px] text-base leading-[1.6] text-[#6b7880]">{projects.body}</p>
      </div>
      <div className="grid md:grid-cols-2 gap-[26px]">
        {projects.items.map((p) => (
          <a
            key={p.title}
            href="#contacto"
            className="proj rv block rounded-3xl overflow-hidden bg-white border border-navy/10"
            style={{ boxShadow: "0 20px 50px -35px rgba(2,48,71,.35)" }}
          >
            <div
              className="h-[280px] overflow-hidden relative"
              style={{
                background: p.dark
                  ? "repeating-linear-gradient(135deg,#fff2e2,#fff2e2 14px,#ffe9d0 14px,#ffe9d0 28px)"
                  : "repeating-linear-gradient(135deg,#eaf1f3,#eaf1f3 14px,#e2ebee 14px,#e2ebee 28px)",
              }}
            >
              <div
                className="projimg absolute inset-0 flex flex-col items-center justify-center gap-2"
                style={{ color: p.dark ? "#c98a44" : "#7f929c" }}
              >
                <Image
                  src={brand.logo.navy}
                  alt=""
                  width={790}
                  height={913}
                  className="w-14 h-auto"
                  style={{ opacity: p.dark ? 0.3 : 0.35 }}
                />
                <span className="font-mono font-semibold text-xs tracking-[0.06em]">imagen del proyecto</span>
              </div>
              <span
                className="absolute top-[18px] left-[18px] text-white text-xs font-semibold px-[13px] py-[6px] rounded-full"
                style={{ background: p.dark ? "#fb8500" : "#023047" }}
              >
                {p.cat}
              </span>
            </div>
            <div className="px-7 pt-[26px] pb-[30px]">
              <h3 className="m-0 text-[22px] font-bold tracking-[-0.02em] text-navy">{p.title}</h3>
              <p className="mt-[10px] text-[15px] leading-[1.6] text-[#6b7880]">{p.body}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
