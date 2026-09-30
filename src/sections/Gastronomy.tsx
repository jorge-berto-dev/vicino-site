import { Reveal, SectionHeading } from '../components/ui';
import { categoriasGastronomia } from '../data/content';

export function Gastronomy() {
  return (
    <section id="gastronomia" aria-label="Gastronomia" className="bg-creme/60">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <SectionHeading
          eyebrow="Gastronomia"
          title="Da cozinha para a mesa."
          lead="Entradas, massas frescas, gnocchi, carnes na grelha, peixes e sobremesas — um cardápio à la carte que sai da cozinha à vista do salão."
          align="center"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categoriasGastronomia.map((cat, i) => (
            <Reveal key={cat.titulo} delay={(i % 3) * 100} as="article">
              <a
                href="#cardapio"
                className="photo-frame group relative block aspect-[4/5] rounded-2xl sm:aspect-[3/3.4]"
                aria-label={`${cat.titulo} — ver no cardápio`}
              >
                <img
                  src={cat.imagem}
                  alt={cat.alt}
                  loading="lazy"
                  decoding="async"
                  className="rounded-2xl"
                />
                <div
                  className="absolute inset-0 rounded-2xl bg-[linear-gradient(to_top,rgba(26,10,12,0.88)_0%,rgba(26,10,12,0.25)_55%,transparent_100%)]"
                  aria-hidden="true"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 text-left">
                  <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-creme/80">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-1 font-display text-3xl text-paper">{cat.titulo}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-paper/80">{cat.texto}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
