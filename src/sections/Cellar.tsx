import { Wine, Thermometer, Handshake, Grape } from 'lucide-react';
import { Reveal, SectionHeading, Button } from '../components/ui';
import { restaurant } from '../data/restaurantConfig';

const pilares = [
  {
    icone: Thermometer,
    titulo: 'Adega climatizada',
    texto: 'Sala própria, pensada para guardar cada garrafa na condição ideal.',
  },
  {
    icone: Wine,
    titulo: 'Carta de vários países',
    texto: 'Rótulos de diferentes países para harmonizar com o menu da casa.',
  },
  {
    icone: Handshake,
    titulo: 'Harmonização no salão',
    texto: 'A equipe sugere o vinho certo para cada prato da sua mesa.',
  },
];

const taças = [
  { icone: Grape, rotulo: 'Tintos' },
  { icone: Grape, rotulo: 'Brancos' },
  { icone: Grape, rotulo: 'Rosés' },
  { icone: Grape, rotulo: 'Espumantes' },
];

export function Cellar() {
  return (
    <section id="adega" aria-label="Adega e vinhos" className="bg-paper">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative order-2 lg:order-1">
            <figure className="photo-frame aspect-[4/5] rounded-2xl sm:aspect-[1/1] lg:aspect-[4/5]">
              <img
                src="/assets/vicino/vicino-galeria-ambiente-01.jpg"
                alt="Adega climatizada do Vicino Cucina e Vino com centenas de garrafas"
                loading="lazy"
                decoding="async"
                className="rounded-2xl"
              />
            </figure>
            <blockquote className="absolute -bottom-6 left-5 right-5 rounded-2xl bg-vino-deep p-6 text-paper shadow-xl shadow-vino-deep/30 sm:left-8 sm:right-auto sm:max-w-sm">
              <p className="font-display text-xl italic leading-snug">
                “A experiência também está na taça.”
              </p>
            </blockquote>
          </Reveal>

          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Adega"
              title="A experiência também está na taça."
              lead="Para harmonizar com o menu, a casa mantém carta de vinhos de diferentes países — guardada na adega climatizada que é orgulho da Nostra Casa."
            />
            <ul className="mt-10 space-y-7">
              {pilares.map((p, i) => (
                <Reveal key={p.titulo} delay={i * 100} as="li">
                  <div className="flex gap-4">
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-vino-soft text-vino">
                      <p.icone size={20} aria-hidden="true" />
                    </span>
                    <span>
                      <h3 className="font-display text-2xl text-grafite">{p.titulo}</h3>
                      <p className="mt-1 leading-relaxed text-grafite-mute">{p.texto}</p>
                    </span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>

        {/* Vinhos: categorias sem inventar rótulos */}
        <div className="mt-24 rounded-3xl bg-creme/70 px-6 py-12 sm:px-12">
          <Reveal className="mx-auto max-w-xl text-center">
            <p className="eyebrow">Na carta</p>
            <h3 className="h-display mt-3 text-3xl sm:text-4xl">Quatro caminhos na taça</h3>
            <p className="mt-3 text-grafite-mute">
              Rótulos, safras e preços conforme a carta oficial do dia, no salão.
            </p>
          </Reveal>
          <ul className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-4 lg:grid-cols-4" aria-label="Categorias de vinho">
            {taças.map((t, i) => (
              <Reveal key={t.rotulo} delay={i * 80} as="li">
                <div className="flex flex-col items-center rounded-2xl border border-vino/15 bg-paper px-4 py-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-vino/10">
                  <t.icone size={26} aria-hidden="true" className="text-vino" />
                  <p className="mt-3 font-display text-2xl text-grafite">{t.rotulo}</p>
                </div>
              </Reveal>
            ))}
          </ul>
          <Reveal className="mt-10 text-center">
            <Button href={restaurant.whatsapp.url} external variant="outline-dark">
              Conheça nossa adega
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
