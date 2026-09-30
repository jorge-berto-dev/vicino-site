import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { Reveal, SectionHeading, Button } from '../components/ui';
import { cardapio } from '../data/content';
import { restaurant } from '../data/restaurantConfig';

export function MenuSection() {
  const [ativa, setAtiva] = useState(cardapio[1].id);
  const categoria = cardapio.find((c) => c.id === ativa) ?? cardapio[0];

  return (
    <section id="cardapio" aria-label="Cardápio completo" className="bg-vino-deep text-paper">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-32">
        <SectionHeading
          eyebrow="Cardápio"
          title="O cardápio, por capítulo."
          lead="Nomes e descrições conforme o cardápio oficial. Preços e itens do dia, direto no salão ou no cardápio digital."
          align="center"
          dark
        />

        {/* Tabs — scroll horizontal no mobile */}
        <Reveal delay={100}>
          <div
            role="tablist"
            aria-label="Categorias do cardápio"
            className="-mx-5 mt-12 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0"
          >
            {cardapio.map((c) => {
              const selecionada = c.id === ativa;
              return (
                <button
                  key={c.id}
                  role="tab"
                  aria-selected={selecionada}
                  aria-controls={`painel-${c.id}`}
                  id={`tab-${c.id}`}
                  onClick={() => setAtiva(c.id)}
                  className={`whitespace-nowrap rounded-full px-5 py-2.5 text-[13px] font-bold uppercase tracking-[0.12em] transition-all duration-250 ${
                    selecionada
                      ? 'bg-paper text-vino-deep'
                      : 'border border-paper/25 text-paper/75 hover:border-paper/60 hover:text-paper'
                  }`}
                >
                  {c.rotulo}
                </button>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={150} key={categoria.id}>
          <div
            role="tabpanel"
            id={`painel-${categoria.id}`}
            aria-labelledby={`tab-${categoria.id}`}
            className="mx-auto mt-10 max-w-3xl"
          >
            {categoria.nota && (
              <p className="text-center font-display text-xl italic text-creme/85">
                {categoria.nota}
              </p>
            )}
            <ul className="mt-8 divide-y divide-paper/12">
              {categoria.itens.map((item) => (
                <li key={item.nome} className="py-6">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3
                      className={`font-display text-2xl sm:text-[26px] ${
                        item.confirmado ? 'text-paper' : 'text-paper/50 italic'
                      }`}
                    >
                      {item.nome}
                    </h3>
                    {item.preco && (
                      <span className="shrink-0 font-display text-xl text-creme">
                        {item.preco}
                      </span>
                    )}
                  </div>
                  <p
                    className={`mt-1.5 text-[15px] leading-relaxed ${
                      item.confirmado ? 'text-paper/70' : 'text-paper/40 italic'
                    }`}
                  >
                    {item.descricao}
                  </p>
                  {!item.confirmado && (
                    <p className="mt-2 inline-block rounded-full border border-dashed border-paper/25 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-paper/45">
                      Espaço editável
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href={restaurant.cardapioCompleto.url} external variant="outline-light">
            Cardápio digital <ExternalLink size={15} aria-hidden="true" />
          </Button>
          <Button href={restaurant.reserva.url} external>
            Reservar mesa
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
