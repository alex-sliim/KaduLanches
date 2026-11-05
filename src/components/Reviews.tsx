import { REVIEWS } from "@/data/site";
import { useCountUp } from "@/hooks/useMotion";
import { StarIcon } from "./Icons";

function Stars({ n = 5 }: { n?: number }) {
  return (
    <span className="flex gap-0.5 text-cheddar-500">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} className={`h-4 w-4 ${i < n ? "" : "text-crust-400/30"}`} />
      ))}
    </span>
  );
}

function RatingCard() {
  const { ref, value } = useCountUp(498);
  return (
    <div className="reveal relative overflow-hidden rounded-3xl bg-crust-900 p-8 text-center shadow-[0_30px_70px_-30px_rgba(47,27,12,0.7)]">
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cheddar-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-12 -left-10 h-40 w-40 rounded-full bg-tomato-500/20 blur-3xl" />
      <p className="relative font-display text-6xl font-extrabold text-cream-50">
        <span ref={ref}>{(value / 100).toFixed(1)}</span>
      </p>
      <div className="relative mt-3 flex justify-center">
        <Stars />
      </div>
      <p className="relative mt-4 text-sm font-semibold text-cream-200/75">
        Nota média das avaliações
      </p>
      <div className="relative mt-6 grid grid-cols-3 gap-2 border-t border-cream-100/10 pt-6 text-cream-200/70">
        <div>
          <p className="font-display text-lg font-extrabold text-cheddar-300">98%</p>
          <p className="text-[11px] uppercase tracking-wider">Recomendam</p>
        </div>
        <div>
          <p className="font-display text-lg font-extrabold text-cheddar-300">300+</p>
          <p className="text-[11px] uppercase tracking-wider">Clientes</p>
        </div>
        <div>
          <p className="font-display text-lg font-extrabold text-cheddar-300">0</p>
          <p className="text-[11px] uppercase tracking-wider">Decepções</p>
        </div>
      </div>
    </div>
  );
}

export default function Reviews() {
  const row = [...REVIEWS, ...REVIEWS];

  return (
    <section id="avaliacoes" className="relative overflow-hidden bg-cream-50 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-cream-200 to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <div>
            <p className="reveal inline-flex items-center gap-2 rounded-full border border-crust-900/15 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-crust-700">
              Quem já provou
            </p>
            <h2 className="reveal mt-5 font-display text-3xl font-extrabold leading-tight text-crust-900 sm:text-4xl lg:text-5xl">
              A fila do WhatsApp já diz tudo
            </h2>
            <p className="reveal mt-4 text-base leading-relaxed text-crust-700/80 sm:text-lg">
              Mais de 300 clientes atendidos na região. Depoimentos reais de quem pediu, provou e
              voltou — e trouxe a família junto.
            </p>
          </div>
          <RatingCard />
        </div>
      </div>

      <div className="group/rev mt-14 flex overflow-hidden">
        <div className="animate-marquee flex min-w-max gap-5 pr-5 group-hover/rev:[animation-play-state:paused]">
          {row.map((r, i) => (
            <article
              key={`${r.name}-${i}`}
              className="relative flex w-[19rem] shrink-0 flex-col rounded-3xl border border-crust-900/10 bg-white p-6 shadow-[0_16px_40px_-24px_rgba(47,27,12,0.45)] transition-all duration-500 hover:-translate-y-2 hover:border-cheddar-500/40 hover:shadow-[0_26px_55px_-25px_rgba(47,27,12,0.5)] sm:w-[22rem]"
            >
              <span className="absolute right-5 top-3 font-display text-5xl leading-none text-cheddar-400/30">
                &rdquo;
              </span>
              <Stars n={r.rating} />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-crust-800">{r.text}</p>
              <div className="mt-5 flex items-center gap-3 border-t border-crust-900/10 pt-4">
                <img
                  src={r.avatar}
                  alt={r.name}
                  loading="lazy"
                  className="h-11 w-11 rounded-full object-cover ring-2 ring-cheddar-400/60"
                />
                <div>
                  <p className="font-display text-sm font-extrabold text-crust-900">{r.name}</p>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-crust-500">
                    {r.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
