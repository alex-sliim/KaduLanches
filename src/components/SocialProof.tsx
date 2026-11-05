import { useEffect, useState } from "react";
import { PRODUCTS, REVIEWS, waLink } from "@/data/site";
import { CloseIcon } from "./Icons";

type Toast = {
  name: string;
  product: string;
  time: string;
  avatar: string;
};

const TIMES = ["agora mesmo", "há 2 minutos", "há 6 minutos", "há 11 minutos", "há 18 minutos"];

function buildToasts(): Toast[] {
  const list: Toast[] = [];
  for (let i = 0; i < 5; i++) {
    const person = REVIEWS[(i * 2) % REVIEWS.length];
    const product = PRODUCTS[(i * 3 + 1) % PRODUCTS.length];
    list.push({
      name: person.name.split(" ")[0],
      product: product.name,
      time: TIMES[i % TIMES.length],
      avatar: person.avatar,
    });
  }
  return list;
}

export default function SocialProof() {
  const toasts = buildToasts();
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    if (closed) return;
    let hideTimer: ReturnType<typeof setTimeout>;
    const show = () => {
      setVisible(true);
      hideTimer = setTimeout(() => {
        setVisible(false);
        setIndex((i) => (i + 1) % toasts.length);
      }, 5200);
    };
    const first = setTimeout(show, 4200);
    const loop = setInterval(show, 11000);
    return () => {
      clearTimeout(first);
      clearTimeout(hideTimer);
      clearInterval(loop);
    };
  }, [closed, toasts.length]);

  if (closed) return null;
  const t = toasts[index];

  return (
    <div
      className={`fixed bottom-5 left-4 z-50 hidden max-w-[19rem] transition-all duration-700 sm:bottom-7 sm:left-7 sm:block ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <div className="relative flex items-center gap-3 rounded-2xl border border-crust-900/10 bg-cream-50/95 p-3 pr-9 shadow-[0_20px_45px_-18px_rgba(47,27,12,0.5)] backdrop-blur-xl">
        <span className="absolute -top-1.5 -right-1.5 grid h-6 w-6 place-items-center rounded-full bg-cheddar-400 text-[10px] font-bold text-crust-900">
          novo
        </span>
        <img src={t.avatar} alt={t.name} className="h-11 w-11 rounded-full object-cover ring-2 ring-wa-500/60" />
        <div className="min-w-0">
          <p className="truncate text-sm font-bold text-crust-900">
            {t.name} pediu <span className="text-wa-600">{t.product}</span>
          </p>
          <p className="text-[11px] text-crust-500">Pedido {t.time} · via WhatsApp</p>
        </div>
        <button
          type="button"
          onClick={() => setClosed(true)}
          aria-label="Fechar aviso"
          className="absolute right-2 top-2 text-crust-400 transition-colors hover:text-crust-800"
        >
          <CloseIcon className="h-3.5 w-3.5" />
        </button>
      </div>
      <a
        href={waLink("Olá, Kadu! 👋 Também quero fazer um pedido.")}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 block text-center text-[11px] font-bold uppercase tracking-widest text-crust-500 underline decoration-dotted underline-offset-4 transition-colors hover:text-wa-600"
      >
        Quero pedir também
      </a>
    </div>
  );
}
