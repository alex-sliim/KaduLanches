import { BRAND, DIFFERENTIALS } from "@/data/site";

export default function Differentials() {
  return (
    <section id="diferenciais" className="relative overflow-hidden bg-cream-100 py-20 sm:py-28">
      <div className="pointer-events-none absolute -right-32 top-10 h-72 w-72 rounded-full bg-cheddar-400/20 blur-[100px]" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-tomato-500/10 blur-[110px]" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="reveal relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-cheddar-400/40 via-cream-200 to-tomato-500/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-crust-900/10 bg-gradient-to-b from-cream-50 to-cream-200/60 p-6 shadow-[0_30px_70px_-30px_rgba(47,27,12,0.5)]">
                <img src={BRAND.logo} alt="Lanche do Kadu" className="mx-auto w-full max-w-xs" />
                <div className="mt-4 rounded-2xl bg-crust-900 px-5 py-4 text-center">
                  <p className="font-display text-lg font-extrabold text-cream-50">
                    Agradecemos pela presença!
                  </p>
                  <p className="mt-1 text-sm font-semibold text-cheddar-300">
                    {BRAND.whatsappDisplay}
                  </p>
                </div>
              </div>
              <div className="animate-float absolute -bottom-6 -left-6 rounded-2xl border border-crust-900/10 bg-white px-4 py-3 shadow-xl">
                <p className="font-display text-xs font-bold uppercase tracking-wider text-crust-500">
                  Desde o começo
                </p>
                <p className="font-display text-lg font-extrabold text-crust-900">
                  Feito em casa 💛
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="reveal inline-flex items-center gap-2 rounded-full bg-crust-900 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-cheddar-300">
              Por que o Kadu?
            </p>
            <h2 className="reveal mt-5 font-display text-3xl font-extrabold leading-tight text-crust-900 sm:text-4xl lg:text-5xl">
              Salgado bom é aquele que você{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-tomato-600">pede de novo</span>
              </span>{" "}
              na semana seguinte.
            </h2>
            <p className="reveal mt-5 max-w-xl text-base leading-relaxed text-crust-700/80 sm:text-lg">
              O Kadu Lanches nasceu na cozinha de casa, com receita testada em festa de família. Hoje
              é a mesma massa, o mesmo capricho — só que com forno maior e fila no WhatsApp.
            </p>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {DIFFERENTIALS.map((d, i) => (
                <div
                  key={d.title}
                  className="reveal group relative overflow-hidden rounded-2xl border border-crust-900/10 bg-cream-50 p-5 transition-all duration-500 hover:-translate-y-1.5 hover:border-cheddar-500/40 hover:shadow-[0_20px_45px_-22px_rgba(47,27,12,0.55)]"
                  style={{ transitionDelay: `${i * 90}ms` }}
                >
                  <span className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-cheddar-400/15 transition-transform duration-500 group-hover:scale-150" />
                  <span className="relative inline-grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-cream-200 to-cream-300 text-2xl transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110">
                    {d.emoji}
                  </span>
                  <h3 className="relative mt-4 font-display text-lg font-extrabold text-crust-900">
                    {d.title}
                  </h3>
                  <p className="relative mt-1.5 text-sm leading-relaxed text-crust-700/80">
                    {d.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
