import { clients, clientsStripLabel } from "@/content/site";

export function ClientsMarquee() {
  return (
    <section id="clientes" className="scroll-mt-[70px] border-y border-navy/10 bg-white py-[34px]">
      <p className="text-center m-0 mb-6 text-[12.5px] font-semibold tracking-[0.14em] uppercase text-[#8a97a0]">
        {clientsStripLabel}
      </p>
      <div
        className="relative overflow-hidden"
        style={{
          WebkitMaskImage: "linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)",
          maskImage: "linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)",
        }}
      >
        <div className="flex gap-16 w-max animate-marq items-center font-extrabold text-[26px] tracking-[-0.02em] text-navy-2 opacity-55">
          {[...clients, ...clients].map((c, i) => (
            <span key={i} className="whitespace-nowrap">
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
