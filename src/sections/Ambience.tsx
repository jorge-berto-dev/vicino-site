import { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Reveal, SectionHeading } from '../components/ui';
import { galeriaAmbiente } from '../data/content';

export function Ambience() {
  const [aberta, setAberta] = useState<number | null>(null);

  useEffect(() => {
    if (aberta === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setAberta(null);
      if (e.key === 'ArrowRight') navegar(1);
      if (e.key === 'ArrowLeft') navegar(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [aberta]);

  const navegar = (dir: 1 | -1) => {
    setAberta((atual) => {
      if (atual === null) return atual;
      const total = galeriaAmbiente.length;
      return (atual + dir + total) % total;
    });
  };

  return (
    <section id="galeria" aria-label="Ambiente e galeria" className="bg-grafite text-paper">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <SectionHeading
          eyebrow="O ambiente"
          title="O ambiente faz parte da experiência."
          lead="Salão em estilo rústico-chique, bar de madeira, adega climatizada e a fachada do Bosque Maia — fotografias oficiais da casa."
          dark
        />

        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {galeriaAmbiente.map((foto, i) => (
            <Reveal
              key={foto.src}
              delay={(i % 3) * 80}
              as="figure"
              className={i === 0 ? 'col-span-2 lg:col-span-1' : ''}
            >
              <button
                type="button"
                onClick={() => setAberta(i)}
                aria-label={`Ampliar foto: ${foto.legenda}`}
                className="photo-frame group relative block w-full rounded-xl"
              >
                <img
                  src={foto.src}
                  alt={foto.alt}
                  loading="lazy"
                  decoding="async"
                  className={`w-full rounded-xl object-cover ${
                    i === 0 ? 'aspect-[16/10]' : 'aspect-square'
                  }`}
                />
                <span
                  className="absolute inset-x-0 bottom-0 rounded-b-xl bg-[linear-gradient(to_top,rgba(0,0,0,0.7),transparent)] p-4 pt-10 text-left text-sm font-medium text-paper opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
                  aria-hidden="true"
                >
                  {foto.legenda}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox acessível */}
      {aberta !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Foto ampliada: ${galeriaAmbiente[aberta].legenda}`}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setAberta(null)}
        >
          <button
            type="button"
            onClick={() => setAberta(null)}
            aria-label="Fechar foto ampliada"
            className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-paper hover:bg-white/20"
          >
            <X size={20} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              navegar(-1);
            }}
            aria-label="Foto anterior"
            className="absolute left-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-paper hover:bg-white/20 sm:left-6"
          >
            <ChevronLeft size={20} aria-hidden="true" />
          </button>
          <figure className="max-h-[85vh] max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={galeriaAmbiente[aberta].src}
              alt={galeriaAmbiente[aberta].alt}
              className="max-h-[75vh] w-auto rounded-xl object-contain"
            />
            <figcaption className="mt-3 text-center text-sm text-paper/80">
              {galeriaAmbiente[aberta].legenda}
            </figcaption>
          </figure>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              navegar(1);
            }}
            aria-label="Próxima foto"
            className="absolute right-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-paper hover:bg-white/20 sm:right-6"
          >
            <ChevronRight size={20} aria-hidden="true" />
          </button>
        </div>
      )}
    </section>
  );
}
