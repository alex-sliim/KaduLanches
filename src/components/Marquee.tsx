const ITEMS = [
  "Enroladinho de Queijo",
  "Esfirra de Carne",
  "Kibe Frito",
  "Coxinha de Frango",
  "Rosca Ungara",
  "Mini Pizza",
  "Pastel Assado",
  "Pão de Calabresa",
  "Empadinha",
  "Rosca de Coco",
];

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="relative flex overflow-hidden border-y border-crust-900/10 bg-cheddar-400 py-3.5">
      <div className="animate-marquee flex min-w-max items-center gap-8 pr-8">
        {row.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-8">
            <span className="font-display text-lg font-extrabold uppercase tracking-wide text-crust-900 sm:text-xl">
              {item}
            </span>
            <span className="text-xl text-crust-700">✦</span>
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-cheddar-400 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-cheddar-400 to-transparent" />
    </div>
  );
}
