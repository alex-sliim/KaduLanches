import { BRAND, DEFAULT_MSG, waLink } from "@/data/site";
import { WhatsAppIcon } from "./Icons";

export default function FloatingWhatsApp() {
  return (
    <a
      href={waLink(DEFAULT_MSG)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Falar no WhatsApp ${BRAND.whatsappDisplay}`}
      className="group fixed bottom-5 right-4 z-50 flex items-center gap-3 sm:bottom-7 sm:right-7"
    >
      <span className="pointer-events-none hidden max-w-0 overflow-hidden whitespace-nowrap rounded-full bg-crust-900 py-2 pl-0 pr-0 text-sm font-bold text-cream-50 opacity-0 shadow-xl transition-all duration-500 group-hover:max-w-xs group-hover:pl-4 group-hover:pr-4 group-hover:opacity-100 sm:block">
        Quero pedir! {BRAND.whatsappDisplay}
      </span>
      <span className="relative grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-wa-500 to-wa-600 text-white shadow-[0_12px_30px_-6px_rgba(18,140,126,0.8)] transition-transform duration-300 group-hover:scale-110 sm:h-16 sm:w-16">
        <span className="animate-pulse-ring absolute inset-0 rounded-full bg-wa-500/60" />
        <span className="animate-pulse-ring absolute inset-0 rounded-full bg-wa-500/40 [animation-delay:1.2s]" />
        <WhatsAppIcon className="relative h-7 w-7 sm:h-8 sm:w-8" />
      </span>
    </a>
  );
}
