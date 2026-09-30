import { Cake, Briefcase, Users, Heart } from 'lucide-react';
import { Reveal, SectionHeading, Button } from '../components/ui';
import { restaurant } from '../data/restaurantConfig';

const ocasioes = [
  {
    icone: Cake,
    titulo: 'Aniversários',
    texto: 'Mesas de família e grupos em salão acolhedor, com o cuidado de quem recebe em casa.',
  },
  {
    icone: Users,
    titulo: 'Confraternizações',
    texto: 'Do happy hour no bar ao jantar completo — combinações de entradas, pratos e drinks.',
  },
  {
    icone: Briefcase,
    titulo: 'Encontros corporativos',
    texto: 'Almoços executivos e jantares de negócios no bairro mais central de Guarulhos.',
  },
  {
    icone: Heart,
    titulo: 'Celebrações privadas',
    texto: 'Eventos de diferentes portes e formatos, com descrição e atendimento dedicado.',
  },
];

export function Events() {
  return (
    <section id="eventos" aria-label="Eventos" className="bg-paper">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Eventos"
              title="Momentos que merecem uma mesa especial."
              lead="Das pequenas comemorações às grandes conquistas: os ambientes da casa recebem eventos privados com combinações de entradas, principais, bebidas e drinks."
            />
            <Reveal delay={150} className="mt-8">
              <Button href={restaurant.whatsapp.url} external>
                Falar sobre um evento
              </Button>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-5 text-sm text-grafite-mute">
                Capacidade e formatos sob consulta — cada celebração é desenhada com a casa.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Reveal className="photo-frame aspect-[3/4] rounded-2xl sm:col-span-2 sm:aspect-[16/9]">
              <img
                src="/assets/vicino/vicino-galeria-ambiente-05.jpg"
                alt="Bar do Vicino pronto para receber celebrações e happy hours"
                loading="lazy"
                decoding="async"
                className="rounded-2xl"
              />
            </Reveal>
            {ocasioes.map((o, i) => (
              <Reveal key={o.titulo} delay={i * 80} as="article">
                <div className="h-full rounded-2xl border border-grafite/10 bg-creme/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-vino/10">
                  <o.icone size={22} aria-hidden="true" className="text-vino" />
                  <h3 className="mt-3 font-display text-2xl text-grafite">{o.titulo}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-grafite-mute">{o.texto}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
