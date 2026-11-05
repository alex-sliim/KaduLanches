import { BRAND, DEFAULT_MSG, waLink } from "@/data/site";
import { useCountUp } from "@/hooks/useMotion";
import { ArrowIcon, ClockIcon, StarIcon, WhatsAppIcon } from "./Icons";

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, value: n } = useCountUp(value);
  return (
    <div className="text-center sm:text-left">
      <p className="font-display text-2xl font-extrabold text-cheddar-300 sm:text-3xl">
        <span ref={ref}>{n}</span>
        {suffix}
      </p>
      <p className="mt-0.5 text-[11px] font-medium uppercase tracking-wider text-cream-200/70 sm:text-xs">
        {label}
      </p>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-crust-950 pt-28 sm:pt-32 lg:pt-36">
      {/* background layers */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_15%_0%,#5f3b1a_0%,#2f1b0c_45%,#1b0f06_100%)]" />
        <div className="absolute inset-0 grain opacity-40" />
      </div>
      <div className="pointer-events-none absolute -left-24 top-10 -z-10 h-80 w-80 rounded-full bg-cheddar-500/20 blur-[110px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 -z-10 h-96 w-96 rounded-full bg-tomato-500/20 blur-[130px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-cheddar-400/10 blur-[120px]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-28">
        {/* copy */}
        <div className="relative z-10 text-center lg:text-left">
          <div className="animate-rise mx-auto inline-flex items-center gap-2 rounded-full border border-cheddar-400/30 bg-cheddar-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-cheddar-300 lg:mx-0">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-wa-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-wa-500" />
            </span>
            Aberto para encomendas
          </div>

          <h1
            className="animate-rise mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-cream-50 sm:text-5xl lg:text-6xl xl:text-[4.25rem]"
            style={{ animationDelay: "80ms" }}
          >
            O salgado que
            <span className="relative mx-2 inline-block">
              <span className="relative z-10 bg-gradient-to-r from-cheddar-300 via-cheddar-400 to-tomato-500 bg-clip-text text-transparent">
                desaparece
              </span>
              <svg
                className="absolute -bottom-2 left-0 h-3 w-full text-cheddar-500/70"
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M2 8c40-6 90-8 196-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            da bandeja.
          </h1>

          <p
            className="animate-rise mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream-200/80 sm:text-lg lg:mx-0"
            style={{ animationDelay: "160ms" }}
          >
            Enroladinho de queijo, esfirra, kibe, coxinha, rosca ungara e muito mais — feitos
            artesanalmente, todos os dias, com aquele tempero de comida de casa. Pede pelo WhatsApp e
            receba quentinho. 🤎
          </p>

          <div
            className="animate-rise mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start"
            style={{ animationDelay: "240ms" }}
          >
            <a
              href={waLink(DEFAULT_MSG)}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-br from-wa-500 to-wa-600 px-7 py-4 font-display text-base font-extrabold text-white shadow-[0_18px_40px_-12px_rgba(18,140,126,0.7)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-12px_rgba(18,140,126,0.9)]"
            >
              <span className="absolute inset-0 -translate-x-full bg-white/25 transition-transform duration-700 group-hover:translate-x-full" />
              <WhatsAppIcon className="relative h-5 w-5" />
              <span className="relative">Pedir no WhatsApp</span>
              <ArrowIcon className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#cardapio"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream-200/25 bg-cream-50/5 px-7 py-4 font-display text-base font-bold text-cream-100 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cheddar-400/50 hover:bg-cream-50/10"
            >
              Ver o cardápio
            </a>
          </div>

          <div
            className="animate-rise mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-cream-200/70 lg:justify-start"
            style={{ animationDelay: "320ms" }}
          >
            <span className="inline-flex items-center gap-2">
              <ClockIcon className="h-4 w-4 text-cheddar-400" />
              Encomendas para festas e empresas
            </span>
            <span className="inline-flex items-center gap-2 font-semibold text-cheddar-300">
              <span className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4" />
                ))}
              </span>
              4.9 de 5
            </span>
          </div>
        </div>

        {/* visuals */}
        <div className="relative mt-4 lg:mt-0">
          <div className="relative mx-auto aspect-square w-full max-w-[30rem]">
            <div className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-cheddar-400/25" />
            <div className="absolute inset-6 rounded-full bg-gradient-to-br from-cheddar-400/25 to-tomato-500/20 blur-2xl" />

            <div className="animate-float-slow absolute inset-4 overflow-hidden rounded-full border-4 border-cream-100/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]">
              <img
                src={BRAND.hero}
                alt="Mix de salgados assados do Kadu Lanches"
                className="h-full w-full scale-105 object-cover"
                loading="eager"
              />
            </div>

            {/* floating logo */}
            <div className="animate-float-fast absolute -left-2 top-2 w-28 drop-shadow-2xl sm:w-40">
              <img src={BRAND.logo} alt="Logo Lanche do Kadu" className="w-full" />
            </div>

            {/* floating badge 1 */}
            <div
              className="animate-bob absolute -right-1 bottom-16 flex items-center gap-3 rounded-2xl border border-crust-900/10 bg-cream-50 px-4 py-3 shadow-2xl"
              style={{ animationDelay: "0.6s" }}
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-cheddar-400/20 text-xl">
                🧀
              </span>
              <span>
                <span className="block font-display text-sm font-extrabold text-crust-900">
                  Queijo puxando
                </span>
                <span className="block text-[11px] text-crust-500">assado na hora</span>
              </span>
            </div>

            {/* floating badge 2 */}
            <div
              className="animate-bob absolute -left-3 bottom-2 flex items-center gap-3 rounded-2xl border border-crust-900/10 bg-cream-50 px-4 py-3 shadow-2xl"
              style={{ animationDelay: "1.1s" }}
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-wa-500/15 text-xl">
                🛵
              </span>
              <span>
                <span className="block font-display text-sm font-extrabold text-crust-900">
                  Pedido rápido
                </span>
                <span className="block text-[11px] text-crust-500">só chamar no zap</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* stats strip */}
      <div className="relative border-y border-cream-100/10 bg-crust-900/60 backdrop-blur-sm">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-6 px-4 py-6 sm:grid-cols-4 sm:px-6">
          <Stat value={8} suffix="+" label="Sabores no cardápio" />
          <Stat value={2500} suffix="+" label="Salgados por mês" />
          <Stat value={300} suffix="+" label="Clientes fiéis" />
          <Stat value={4} suffix=".9★" label="Nota dos clientes" />
        </div>
      </div>
    </section>
  );
}
