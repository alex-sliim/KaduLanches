import { BRAND, DEFAULT_MSG, PRODUCTS, waLink } from "@/data/site";
import { WhatsAppIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-crust-900 pt-16 pb-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cheddar-400/50 to-transparent" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="relative grid h-16 w-16 shrink-0 place-items-center">
                <span className="absolute inset-0 rounded-full bg-cream-100/20 blur-md" />
                <img
                  src={BRAND.logo}
                  alt="Logo Kadu Lanches"
                  width={64}
                  height={64}
                  className="relative h-16 w-16 object-contain"
                />
              </span>
              <div>
                <p className="font-display text-xl font-extrabold text-cream-50">Kadu Lanches</p>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cheddar-300">
                  Salgados artesanais
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream-200/60">
              Massa artesanal, recheio generoso e aquele gostinho de comida feita em casa. Encomendas
              para festas, empresas e para o seu café da tarde.
            </p>
            <a
              href={waLink(DEFAULT_MSG)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-wa-500 to-wa-600 px-5 py-3 font-display text-sm font-extrabold text-white transition-transform duration-300 hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="h-4 w-4" />
              {BRAND.whatsappDisplay}
            </a>
          </div>

          <div>
            <p className="font-display text-sm font-extrabold uppercase tracking-[0.16em] text-cream-50">
              Cardápio
            </p>
            <ul className="mt-5 space-y-2.5 text-sm text-cream-200/60">
              {PRODUCTS.map((p) => (
                <li key={p.name}>
                  <a href="#cardapio" className="transition-colors hover:text-cheddar-300">
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-sm font-extrabold uppercase tracking-[0.16em] text-cream-50">
              Navegue
            </p>
            <ul className="mt-5 space-y-2.5 text-sm text-cream-200/60">
              {[
                { href: "#diferenciais", label: "Por que a gente" },
                { href: "#como-funciona", label: "Como funciona" },
                { href: "#avaliacoes", label: "Avaliações" },
                { href: "#pedido", label: "Fazer pedido" },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition-colors hover:text-cheddar-300">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-7 font-display text-sm font-extrabold uppercase tracking-[0.16em] text-cream-50">
              Atendimento
            </p>
            <p className="mt-4 text-sm leading-relaxed text-cream-200/60">
              Segunda a Sábado
              <br />
              07h às 19h
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-cream-100/10 pt-6 text-center text-xs text-cream-200/40 sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} Kadu Lanches · Todos os direitos reservados.</p>
          <p>
            Feito com 💛 e muita massa de enroladinho ·{" "}
            <span className="text-cheddar-300/80">Agradecemos pela presença!</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
