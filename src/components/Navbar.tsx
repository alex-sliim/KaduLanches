import { useState } from "react";
import { BRAND, DEFAULT_MSG, waLink } from "@/data/site";
import { useScrolled } from "@/hooks/useMotion";
import { cn } from "@/utils/cn";
import { CloseIcon, MenuIcon, WhatsAppIcon } from "./Icons";

const LINKS = [
  { href: "#cardapio", label: "Cardápio" },
  { href: "#diferenciais", label: "Por que a gente" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#avaliacoes", label: "Avaliações" },
];

export default function Navbar() {
  const scrolled = useScrolled(30);
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled ? "py-2" : "py-4",
        )}
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <div
            className={cn(
              "flex items-center justify-between gap-3 rounded-2xl border px-3 py-2 transition-all duration-500 sm:px-4",
              scrolled
                ? "border-crust-900/10 bg-cream-50/90 shadow-[0_10px_40px_-12px_rgba(47,27,12,0.35)] backdrop-blur-xl"
                : "border-transparent bg-cream-50/70 backdrop-blur-md",
            )}
          >
            <a href="#top" className="group flex shrink-0 items-center gap-3">
              <span className="relative block transition-transform duration-500 group-hover:scale-105 group-hover:rotate-2">
                <img
                  src={BRAND.logoTrans}
                  alt="Logo Kadu Lanches"
                  width={56}
                  height={56}
                  className="h-12 w-12 object-contain sm:h-14 sm:w-14"
                  loading="eager"
                />
              </span>
              <span className="leading-none">
                <span className="block font-display text-lg font-extrabold tracking-tight text-crust-900 sm:text-xl">
                  Kadu Lanches
                </span>
                <span className="mt-0.5 block text-[10px] font-semibold uppercase tracking-[0.18em] text-crust-500 sm:text-[11px]">
                  Salgados artesanais
                </span>
              </span>
            </a>

            <nav className="hidden items-center gap-1 lg:flex">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="group relative rounded-full px-4 py-2 text-sm font-semibold text-crust-700 transition-colors hover:text-crust-950"
                >
                  <span className="relative z-10">{l.label}</span>
                  <span className="absolute inset-x-3 bottom-1 h-[2px] origin-left scale-x-0 rounded-full bg-cheddar-500 transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href={waLink(DEFAULT_MSG)}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-br from-wa-500 to-wa-600 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-wa-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-wa-600/40 sm:px-5"
              >
                <span className="absolute inset-0 -translate-x-full bg-white/25 transition-transform duration-700 group-hover:translate-x-full" />
                <WhatsAppIcon className="relative h-4 w-4" />
                <span className="relative hidden sm:inline">Pedir agora</span>
                <span className="relative sm:hidden">Pedir</span>
              </a>
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-label="Abrir menu"
                className="grid h-10 w-10 place-items-center rounded-xl border border-crust-900/10 bg-white/70 text-crust-800 transition-colors hover:bg-white lg:hidden"
              >
                {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
              </button>
            </div>
          </div>

          <div
            className={cn(
              "overflow-hidden transition-all duration-500 lg:hidden",
              open ? "mt-2 max-h-96 opacity-100" : "max-h-0 opacity-0",
            )}
          >
            <div className="rounded-2xl border border-crust-900/10 bg-cream-50/95 p-2 shadow-xl backdrop-blur-xl">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm font-semibold text-crust-800 transition-colors hover:bg-cream-200"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
