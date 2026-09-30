import { ArrowRight } from 'lucide-react';
import { Reveal, SectionHeading, Button } from '../components/ui';
import { pratosDestaque } from '../data/content';
import { restaurant } from '../data/restaurantConfig';

export function Dishes() {
  return (
    <section id="pratos" aria-label="Pratos em destaque" className="bg-paper">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Assinatura da casa"
            title="Pratos que voltam à mesa."
            lead="Os pedidos que definem o Vicino — nomes e descrições conforme o cardápio oficial da casa."
          />
          <Reveal delay={150}>
            <a
              href="#cardapio"
              className="link-line inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-vino"
            >
              Ver cardápio completo <ArrowRight size={16} aria-hidden="true" />
            </a>
          </Reveal>
        </div>

        <div className="mt-14 space-y-16 lg:space-y-24">
          {pratosDestaque.map((prato, i) => {
            const invertido = i % 2 === 1;
            return (
              <article
                key={prato.nome}
                className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12"
              >
                <Reveal
                  className={`lg:col-span-7 ${invertido ? 'lg:order-2' : ''}`}
                >
                  <figure
                    className={`photo-frame rounded-2xl ${
                      i === 0 ? 'aspect-[16/10]' : 'aspect-[16/11]'
                    } ${i === 1 ? 'lg:ml-10' : ''} ${i === 2 ? 'lg:mr-10' : ''}`}
                  >
                    {prato.imagem && (
                      <img
                        src={prato.imagem}
                        alt={prato.imagemAlt ?? prato.nome}
                        loading="lazy"
                        decoding="async"
                        className="rounded-2xl"
                      />
                    )}
                  </figure>
                </Reveal>
                <div className={`lg:col-span-5 ${invertido ? 'lg:order-1' : ''}`}>
                  <Reveal delay={120}>
                    <p className="font-display text-6xl text-vino/15 sm:text-7xl" aria-hidden="true">
                      {String(i + 1).padStart(2, '0')}
                    </p>
                    <p className="eyebrow mt-2">{prato.categoria}</p>
                    <h3 className="h-display mt-3 text-3xl sm:text-4xl">{prato.nome}</h3>
                    <p className="mt-4 leading-relaxed text-grafite-mute">{prato.descricao}</p>
                    {prato.preco ? (
                      <p className="mt-4 font-display text-2xl text-vino">{prato.preco}</p>
                    ) : (
                      <p className="mt-4 text-sm text-grafite-mute/80">
                        Preço conforme cardápio do dia no salão.
                      </p>
                    )}
                  </Reveal>
                </div>
              </article>
            );
          })}
        </div>

        <Reveal className="mt-16 flex flex-col items-center justify-center gap-3 text-center sm:flex-row">
          <Button href={restaurant.cardapioCompleto.url} external>
            Ver cardápio completo
          </Button>
          <Button href={restaurant.reserva.url} external variant="outline-dark">
            Reservar mesa
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
