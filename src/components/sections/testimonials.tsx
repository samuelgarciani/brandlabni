import { EYEBROW, H2 } from "@/components/text-styles";
import { testimonials } from "@/content/site";

export function Testimonials() {
  return (
    <section id="testimonios" className="scroll-mt-[70px] max-w-container mx-auto px-10 pt-[110px] pb-[100px]">
      <div className="rv text-center max-w-[620px] mx-auto mb-14">
        <div className={`${EYEBROW} mb-5`}>{testimonials.eyebrow}</div>
        <h2 className={`${H2} text-navy m-0`}>{testimonials.title}</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.items.map((t) => (
          <div
            key={t.name}
            className={`rv rounded-[22px] p-[34px_30px] ${t.dark ? "bg-navy" : "bg-white border border-navy/10"}`}
            style={{
              boxShadow: t.dark ? "0 30px 60px -35px rgba(2,48,71,.6)" : "0 20px 50px -40px rgba(2,48,71,.4)",
            }}
          >
            <div className="text-yellow text-[19px] tracking-[2px]">★★★★★</div>
            <p
              className={`mt-[18px] mb-[26px] text-[16.5px] leading-[1.6] font-medium ${
                t.dark ? "text-[#eaf1f3]" : "text-[#2f3f48]"
              }`}
            >
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="flex items-center gap-[13px]">
              <div
                className="w-[46px] h-[46px] rounded-full text-white flex items-center justify-center font-bold text-base"
                style={{ background: t.avatarBg }}
              >
                {t.initials}
              </div>
              <div>
                <div className={`font-bold text-[15px] ${t.dark ? "text-white" : "text-navy"}`}>{t.name}</div>
                <div className={`text-[13px] ${t.dark ? "text-sky" : "text-[#8a97a0]"}`}>{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
