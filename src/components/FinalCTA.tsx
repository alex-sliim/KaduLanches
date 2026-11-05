import { BRAND, DEFAULT_MSG, waLink } from "@/data/site";
import { ArrowIcon, ClockIcon, MapPinIcon, WhatsAppIcon } from "./Icons";

export default function FinalCTA() {
  return (
    <section id="pedido" className="relative overflow-hidden bg-crust-950 py-20 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(90%_70%_at_50%_100%,#7a4d22_0%,#2f1b0c_55%,#1b0f06_100%)]" />
      <div className="pointer-events-none absolute inset-0 grain opacity-30" />
      <div className="pointer-events-none absolute left-1/2 top-10 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-cheddar-500/15 blur-[130px]" />

      <div className="relative mx-auto w-full max-w-5xl px-4 text-center sm:px-6">
        <div className="reveal mx-auto w-32 animate-float sm:w-44">
          <img
            src={BRAND.logoTrans}
            alt="Logo Kadu Lanches"
            className="w-full drop-shadow-[0_18px_35px_rgba(0,0,0,0.55)]"
          />
        </div>

        <h2 className="reveal mt-9 font-display text-3xl font-extrabold leading-tight text-cream-50 sm:text-4xl lg:text-[3.4rem]">
          Bora deixar sua tarde <span className="text-cheddar-300">mais gostosa</span>?
        </h2>
        <p className="reveal mx-auto mt-5 max-w-2xl text-base leading-relaxed text-cream-200/75 sm:text-lg">
          Manda um "oi" agora e a gente já separa a bandeja. Sem cadastro, sem app, sem fila — só
          você e um salgado quentinho.
        </p>

        <div className="reveal mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={waLink(DEFAULT_MSG)}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-br from-wa-500 to-wa-600 px-8 py-5 font-display text-lg font-extrabold text-white shadow-[0_22px_50px_-14px_rgba(18,140,126,0.85)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-14px_rgba(18,140,126,1)]"
          >
            <span className="absolute inset-0 -translate-x-full bg-white/25 transition-transform duration-700 group-hover:translate-x-full" />
            <WhatsAppIcon className="relative h-6 w-6" />
            <span className="relative">Chamar no WhatsApp</span>
            <ArrowIcon className="relative h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
          </a>
          <a
            href={`tel:+${BRAND.whatsappRaw}`}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-cream-200/25 px-8 py-5 font-display text-lg font-bold text-cream-100 transition-all duration-300 hover:-translate-y-1.5 hover:border-cheddar-400/60 hover:text-cheddar-300"
          >
            {BRAND.whatsappDisplay}
          </a>
        </div>

        <div className="reveal mt-12 flex flex-wrap items-center justify-center gap-4 text-sm text-cream-200/70">
          <span className="inline-flex items-center gap-2 rounded-full border border-cream-100/10 bg-cream-50/5 px-4 py-2">
            <ClockIcon className="h-4 w-4 text-cheddar-400" />
            Seg a Sáb · 07h às 19h
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-cream-100/10 bg-cream-50/5 px-4 py-2">
            <MapPinIcon className="h-4 w-4 text-cheddar-400" />
            Encomendas para toda a região
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-cream-100/10 bg-cream-50/5 px-4 py-2">
            🎉 Festas, empresas e cafés da manhã
          </span>
        </div>
      </div>
    </section>
  );
}
