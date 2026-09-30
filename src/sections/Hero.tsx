import { ChevronDown } from 'lucide-react';
import { restaurant } from '../data/restaurantConfig';

export function Hero() {
  return (
    <section
      id="inicio"
      aria-label="Apresentação do Vicino Cucina e Vino"
      className="relative flex min-h-[100svh] items-end justify-center overflow-hidden bg-vino-dark"
    >
      {/* Fotografia oficial — Pólipo grelhado, prato-símbolo da casa */}
      <img
        src="/assets/vicino/vicino-prato-07.jpg"
        alt="Pólipo grelhado com molho de ervas e fettuccine — Vicino Cucina e Vino"
        fetchPriority="high"
        decoding="async"
        className="hero-img absolute inset-0 h-full w-full object-cover"
      />
      {/* Overlay sutil para preservar a fotografia */}
      <div className="absolute inset-0 bg-black/45" aria-hidden="true" />
      <div
        className="absolute inset-x-0 bottom-0 h-2/3 bg-[linear-gradient(to_top,rgba(20,8,10,0.85),transparent)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-5 pb-24 pt-40 text-center sm:px-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-creme/90 sm:text-xs">
          Guarulhos · Cucina italiana
        </p>
        <h1 className="mt-5 font-display font-semibold leading-[0.95] text-paper">
          <span className="block text-[19vw] tracking-[0.08em] sm:text-8xl md:text-9xl">
            VICINO
          </span>
          <span className="mt-3 block text-3xl font-medium italic tracking-wide text-creme sm:text-4xl md:text-5xl">
            Cucina &amp; Vino
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl font-display text-xl italic leading-relaxed text-paper/90 sm:text-2xl">
          “{restaurant.slogan}”
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={restaurant.reserva.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-full bg-paper px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-vino-deep transition-all duration-300 hover:bg-creme sm:w-auto"
          >
            Reservar mesa
          </a>
          <a
            href="#gastronomia"
            className="inline-flex w-full items-center justify-center rounded-full border border-paper/60 px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-paper transition-all duration-300 hover:bg-paper hover:text-vino-deep sm:w-auto"
          >
            Conheça nossa cozinha
          </a>
        </div>
      </div>

      <a
        href="#o-vicino"
        aria-label="Rolar para a próxima seção"
        className="scroll-hint absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-paper/80 transition-colors hover:text-paper"
      >
        <ChevronDown size={26} aria-hidden="true" />
      </a>
    </section>
  );
}
