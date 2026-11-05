import { PRODUCTS, waLink } from "@/data/site";
import { ArrowIcon, WhatsAppIcon } from "./Icons";

export default function Menu() {
  return (
    <section id="cardapio" className="relative overflow-hidden bg-crust-950 py-20 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(90%_60%_at_50%_0%,#452a12_0%,#1b0f06_70%)]" />
      <div className="pointer-events-none absolute inset-0 grain opacity-30" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-cheddar-500/10 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="reveal inline-flex items-center gap-2 rounded-full border border-cheddar-400/30 bg-cheddar-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-cheddar-300">
            Nosso cardápio
          </p>
          <h2 className="reveal mt-5 font-display text-3xl font-extrabold leading-tight text-cream-50 sm:text-4xl lg:text-5xl">
            Escolhe o seu favorito e{" "}
            <span className="bg-gradient-to-r from-cheddar-300 to-tomato-500 bg-clip-text text-transparent">
              chama no zap
            </span>
          </h2>
          <p className="reveal mt-4 text-base leading-relaxed text-cream-200/70 sm:text-lg">
            Tudo feito com massa artesanal e assado na hora. Toque no produto e o seu pedido já vai
            montadinho na conversa do WhatsApp.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p, i) => (
            <article
              key={p.name}
              className="reveal group relative flex flex-col overflow-hidden rounded-3xl border border-cream-100/10 bg-crust-900/60 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-cheddar-400/40 hover:shadow-[0_30px_60px_-25px_rgba(239,157,24,0.35)]"
              style={{ transitionDelay: `${(i % 3) * 110}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-crust-950 via-crust-950/10 to-transparent" />
                {p.tag && (
                  <span className="animate-wiggle absolute left-4 top-4 rounded-full bg-tomato-500 px-3 py-1 font-display text-[11px] font-extrabold uppercase tracking-wider text-cream-50 shadow-lg">
                    {p.tag}
                  </span>
                )}
                <span className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-xl bg-cream-50/90 text-2xl shadow-lg backdrop-blur transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                  {p.emoji}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-extrabold text-cream-50">{p.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-cream-200/70">{p.desc}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.ingredients.map((ing) => (
                    <span
                      key={ing}
                      className="rounded-full border border-cream-100/15 bg-cream-50/5 px-2.5 py-1 text-[11px] font-semibold text-cream-200/70"
                    >
                      {ing}
                    </span>
                  ))}
                </div>

                <a
                  href={waLink(
                    `Olá, Kadu! 👋 Quero pedir: *${p.name}*. Pode me passar os valores, por favor?`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-between gap-3 rounded-2xl bg-gradient-to-r from-wa-500 to-wa-600 px-5 py-3.5 font-display text-sm font-extrabold text-white shadow-lg shadow-wa-600/25 transition-all duration-300 hover:gap-4 hover:shadow-xl hover:shadow-wa-600/40"
                >
                  <span className="inline-flex items-center gap-2">
                    <WhatsAppIcon className="h-4 w-4" />
                    Pedir pelo WhatsApp
                  </span>
                  <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          ))}

          {/* CTA card */}
          <article
            className="reveal relative flex flex-col justify-center overflow-hidden rounded-3xl border border-cheddar-400/30 bg-gradient-to-br from-cheddar-500/20 via-crust-900 to-crust-950 p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-25px_rgba(239,157,24,0.45)]"
            style={{ transitionDelay: "220ms" }}
          >
            <div className="pointer-events-none absolute inset-0 shine animate-shimmer opacity-20" />
            <span className="animate-float-fast mx-auto text-5xl">🤔</span>
            <h3 className="mt-5 font-display text-2xl font-extrabold text-cream-50">
              Não achou o que queria?
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-cream-200/75">
              A gente faz encomenda personalizada: pão de mel, bolo de pote, salgados fritos, doces
              para festa e muito mais. Só falar com a gente!
            </p>
            <a
              href={waLink(
                "Olá, Kadu! 👋 Gostaria de fazer uma encomenda personalizada. Pode me ajudar?",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-full border-2 border-cheddar-400/60 px-6 py-3.5 font-display text-sm font-extrabold text-cheddar-300 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cheddar-400 hover:text-crust-950"
            >
              Falar com o Kadu
              <ArrowIcon className="h-4 w-4" />
            </a>
          </article>
        </div>

        <p className="reveal mt-12 text-center text-sm text-cream-200/50">
          * Valores e disponibilidade confirmados direto no WhatsApp {""}
          <span className="font-semibold text-cheddar-300">(62) 99988-2515</span>.
        </p>
      </div>
    </section>
  );
}
