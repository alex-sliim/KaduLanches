import { GALLERY } from "@/data/site";

export default function Gallery() {
  const rowA = [...GALLERY, ...GALLERY];
  const rowB = [...[...GALLERY].reverse(), ...[...GALLERY].reverse()];

  return (
    <section className="relative overflow-hidden bg-cream-200 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-crust-900 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-cheddar-300">
            Direto do forno
          </p>
          <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-crust-900 sm:text-4xl">
            Isso aqui sai da nossa cozinha <span className="text-tomato-600">todo dia</span>
          </h2>
        </div>
      </div>

      <div className="group/scroll mt-12 space-y-5">
        <div className="flex overflow-hidden">
          <div className="animate-marquee flex min-w-max gap-5 pr-5 group-hover/scroll:[animation-play-state:paused]">
            {rowA.map((src, i) => (
              <figure
                key={`a-${i}`}
                className="relative h-44 w-64 shrink-0 overflow-hidden rounded-2xl border-4 border-white shadow-[0_18px_40px_-18px_rgba(47,27,12,0.5)] transition-transform duration-500 hover:-translate-y-2 hover:rotate-1 sm:h-52 sm:w-80"
              >
                <img src={src} alt="Produto Kadu Lanches" loading="lazy" className="h-full w-full object-cover" />
                <span className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-crust-950/50 to-transparent" />
              </figure>
            ))}
          </div>
        </div>

        <div className="flex overflow-hidden">
          <div className="animate-marquee-rev flex min-w-max gap-5 pr-5 group-hover/scroll:[animation-play-state:paused]">
            {rowB.map((src, i) => (
              <figure
                key={`b-${i}`}
                className="relative h-44 w-64 shrink-0 overflow-hidden rounded-2xl border-4 border-white shadow-[0_18px_40px_-18px_rgba(47,27,12,0.5)] transition-transform duration-500 hover:-translate-y-2 hover:-rotate-1 sm:h-52 sm:w-80"
              >
                <img src={src} alt="Produto Kadu Lanches" loading="lazy" className="h-full w-full object-cover" />
                <span className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-crust-950/50 to-transparent" />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
