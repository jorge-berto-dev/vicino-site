import { Quote, ArrowUpRight } from 'lucide-react';
import { Reveal, SectionHeading, InstagramIcon } from '../components/ui';
import { depoimentos } from '../data/content';
import { restaurant } from '../data/restaurantConfig';

const instagramTiles = [
  {
    src: '/assets/vicino/vicino-prato-07.jpg',
    alt: 'Pólipo grelhado — foto oficial @vicinocucina',
  },
  {
    src: '/assets/vicino/vicino-prato-03.jpg',
    alt: 'Gnocchi com camarão — foto oficial @vicinocucina',
  },
  {
    src: '/assets/vicino/vicino-sobremesa.jpg',
    alt: 'Trio de cannoli — foto oficial @vicinocucina',
  },
  {
    src: '/assets/vicino/vicino-drink-03.jpg',
    alt: 'Drink autoral do bar — foto oficial @vicinocucina',
  },
  {
    src: '/assets/vicino/vicino-galeria-ambiente-01.jpg',
    alt: 'Adega climatizada — foto oficial @vicinocucina',
  },
  {
    src: '/assets/vicino/vicino-prato-04.jpg',
    alt: 'Carbonara — foto oficial @vicinocucina',
  },
];

export function Social() {
  return (
    <>
      {/* Prova social — somente depoimento oficial */}
      <section aria-label="Experiências compartilhadas" className="bg-creme/60">
        <div className="mx-auto max-w-4xl px-5 py-24 text-center sm:px-8 lg:py-28">
          <SectionHeading
            eyebrow="Experiências compartilhadas"
            title="Quem senta à nossa mesa."
            align="center"
          />
          {depoimentos.map((d) => (
            <Reveal key={d.autor} delay={120}>
              <figure className="mx-auto mt-10 max-w-3xl rounded-3xl bg-paper p-8 shadow-lg shadow-vino/5 sm:p-12">
                <Quote size={30} aria-hidden="true" className="mx-auto text-vino/30" />
                <blockquote className="mt-5 font-display text-2xl italic leading-snug text-grafite sm:text-[27px]">
                  “{d.texto}”
                </blockquote>
                <figcaption className="mt-6">
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-vino">
                    {d.autor}
                  </p>
                  <p className="mt-1 text-sm text-grafite-mute">
                    {d.local} · {d.fonte}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
          <Reveal delay={180}>
            <p className="mt-8 text-sm text-grafite-mute">
              Veja mais avaliações no{' '}
              <a
                href={restaurant.mapa.directions}
                target="_blank"
                rel="noopener noreferrer"
                className="link-line font-semibold text-vino"
              >
                Google Maps
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* Instagram */}
      <section aria-label="Instagram do Vicino" className="bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Instagram"
              title="O Vicino no dia a dia."
              lead="Pratos, adega e salão — acompanhe a casa onde ela acontece."
            />
            <Reveal delay={120}>
              <a
                href={restaurant.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-vino px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] text-paper transition-colors duration-300 hover:bg-vino-deep"
              >
                <InstagramIcon size={16} />
                {restaurant.instagram.handle}
              </a>
            </Reveal>
          </div>

          <ul
            className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6"
            aria-label="Fotos oficiais do Instagram"
          >
            {instagramTiles.map((t, i) => (
              <Reveal key={t.src} delay={(i % 6) * 60} as="li">
                <a
                  href={restaurant.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ver no Instagram: ${t.alt}`}
                  className="photo-frame group relative block aspect-square rounded-xl"
                >
                  <img
                    src={t.src}
                    alt={t.alt}
                    loading="lazy"
                    decoding="async"
                    className="rounded-xl"
                  />
                  <span
                    className="absolute inset-0 flex items-center justify-center rounded-xl bg-vino-deep/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
                    aria-hidden="true"
                  >
                    <ArrowUpRight size={26} className="text-paper" />
                  </span>
                </a>
              </Reveal>
            ))}
          </ul>
          <p className="mt-6 text-center text-xs text-grafite-mute/70">
            Galeria com fotografias oficiais da casa — para conteúdo ao vivo, visite o perfil.
          </p>
        </div>
      </section>
    </>
  );
}
