import { Reveal, SectionHeading } from '../components/ui';

export function About() {
  return (
    <section id="o-vicino" aria-label="Sobre o Vicino" className="bg-paper">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:py-32">
        <div>
          <SectionHeading
            eyebrow="O Vicino"
            title="Uma experiência italiana em Guarulhos."
          />
          <Reveal delay={120}>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-grafite-mute sm:text-lg">
              <p>
                No Bosque Maia, o <strong className="font-semibold text-grafite">Vicino Cucina &amp; Vino</strong> recebe
                como se recebe em casa: reuniões de família, encontros entre amigos e
                mesas executivas dividem o mesmo salão em estilo rústico-chique, de
                mesas redondas e retangulares, clima acolhedor e iluminação quente.
              </p>
              <p>
                Da cozinha à vista saem os pratos do cardápio à la carte — do
                tradicional pólipo grelhado aos gnocchi de batata e ao trio de
                cannoli — feitos com ingredientes frescos e criteriosamente
                selecionados. Ao lado, a adega climatizada e o bar de drinks
                completam a noite.
              </p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-grafite/10 pt-8">
              {[
                { termo: 'Cozinha', valor: 'Italiana' },
                { termo: 'Casa', valor: 'Bosque Maia' },
                { termo: 'Mesa', valor: 'À la carte' },
              ].map((item) => (
                <div key={item.termo}>
                  <dt className="text-[11px] font-bold uppercase tracking-[0.22em] text-terracota">
                    {item.termo}
                  </dt>
                  <dd className="mt-1.5 font-display text-2xl text-grafite sm:text-[26px]">
                    {item.valor}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={150} className="relative">
          <figure className="photo-frame aspect-[4/5] rounded-2xl sm:aspect-[5/5]">
            <img
              src="/assets/vicino/vicino-galeria-ambiente-06.jpg"
              alt="Salão do Vicino Cucina e Vino em estilo rústico-chique"
              loading="lazy"
              decoding="async"
              className="rounded-2xl"
            />
          </figure>
          <figure className="photo-frame absolute -bottom-8 -left-4 hidden w-52 rotate-[-3deg] rounded-xl border-4 border-paper shadow-xl shadow-black/20 sm:block lg:-left-10 lg:w-64">
            <img
              src="/assets/vicino/vicino-prato-02.jpg"
              alt="Entrada com burrata servida no Vicino"
              loading="lazy"
              decoding="async"
              className="aspect-square rounded-lg"
            />
          </figure>
          <figcaption className="sr-only">
            Fotografias oficiais do salão e da cozinha do Vicino Cucina e Vino
          </figcaption>
        </Reveal>
      </div>
    </section>
  );
}
