import { DEFAULT_MSG, STEPS, waLink } from "@/data/site";
import { WhatsAppIcon } from "./Icons";

export default function Steps() {
  return (
    <section id="como-funciona" className="relative overflow-hidden bg-cream-100 py-20 sm:py-28">
      <div className="pointer-events-none absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-cheddar-400/20 blur-[110px]" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="reveal inline-flex items-center gap-2 rounded-full border border-crust-900/15 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-crust-700">
            Simples assim
          </p>
          <h2 className="reveal mt-5 font-display text-3xl font-extrabold leading-tight text-crust-900 sm:text-4xl lg:text-5xl">
            Do WhatsApp pra sua mesa em 3 passos
          </h2>
        </div>

        <div className="relative mt-14 grid gap-6 md:grid-cols-3">
          <div className="pointer-events-none absolute left-0 right-0 top-16 hidden border-t-2 border-dashed border-crust-900/15 md:block" />

          {STEPS.map((s, i) => (
            <div
              key={s.n}
              className="reveal group relative rounded-3xl border border-crust-900/10 bg-white p-7 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_60px_-28px_rgba(47,27,12,0.5)]"
              style={{ transitionDelay: `${i * 140}ms` }}
            >
              <span className="relative mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-cheddar-400 to-cheddar-600 font-display text-xl font-extrabold text-crust-950 shadow-lg shadow-cheddar-600/30 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                {s.n}
              </span>
              <h3 className="mt-5 font-display text-xl font-extrabold text-crust-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-crust-700/80">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="reveal mt-12 flex justify-center">
          <a
            href={waLink(DEFAULT_MSG)}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-crust-900 px-8 py-4 font-display text-base font-extrabold text-cream-50 shadow-[0_20px_45px_-18px_rgba(47,27,12,0.8)] transition-all duration-300 hover:-translate-y-1 hover:bg-crust-950"
          >
            <WhatsAppIcon className="h-5 w-5 text-wa-400 transition-transform duration-300 group-hover:scale-125" />
            Começar meu pedido
          </a>
        </div>
      </div>
    </section>
  );
}
