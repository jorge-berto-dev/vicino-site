import { MapPin, Phone, MessageCircle, CalendarCheck, Navigation } from 'lucide-react';
import { Reveal, SectionHeading, Button } from '../components/ui';
import { restaurant } from '../data/restaurantConfig';

export function Visit() {
  const enderecoCompleto = `${restaurant.endereco.rua}, ${restaurant.endereco.complemento} — ${restaurant.endereco.cidade}/${restaurant.endereco.uf}`;

  return (
    <>
      {/* Reserva / conversão */}
      <section id="reserva" aria-label="Reservas" className="relative overflow-hidden bg-vino-deep text-paper">
        <img
          src="/assets/vicino/vicino-prato-05.jpg"
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-vino-deep/70" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-5 py-24 text-center sm:px-8 lg:py-32">
          <Reveal>
            <p className="eyebrow !text-creme/80">Reservas</p>
            <h2 className="h-display mt-4 text-4xl text-paper sm:text-6xl">
              Reserve sua mesa.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-paper/80 sm:text-lg">
              Salão, adega e bar esperam por você no Bosque Maia. A reserva leva
              menos de um minuto — ou chame a casa direto no WhatsApp.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={restaurant.reserva.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-paper px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-vino-deep transition-all duration-300 hover:bg-creme sm:w-auto"
              >
                <CalendarCheck size={17} aria-hidden="true" />
                Reservar agora
              </a>
              <a
                href={restaurant.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-paper/60 px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-paper transition-all duration-300 hover:bg-paper hover:text-vino-deep sm:w-auto"
              >
                <MessageCircle size={17} aria-hidden="true" />
                Falar pelo WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Localização + horários */}
      <section id="contato" aria-label="Localização e contato" className="bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
          <SectionHeading
            eyebrow="Venha nos visitar"
            title="No coração do Bosque Maia."
          />

          <div className="mt-12 grid gap-10 lg:grid-cols-5 lg:gap-14">
            <Reveal className="lg:col-span-3">
              <div className="overflow-hidden rounded-2xl border border-grafite/10 shadow-lg shadow-vino/5">
                <iframe
                  title="Mapa: Vicino Cucina e Vino — Rua Caetano D'Andrea, 252, Guarulhos"
                  src={restaurant.mapa.embed}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  className="h-[340px] w-full border-0 sm:h-[420px]"
                />
              </div>
            </Reveal>

            <div className="lg:col-span-2">
              <Reveal delay={100}>
                <address className="not-italic">
                  <p className="flex items-start gap-3">
                    <MapPin size={20} aria-hidden="true" className="mt-0.5 shrink-0 text-vino" />
                    <span className="font-display text-2xl leading-snug text-grafite">
                      {enderecoCompleto}
                    </span>
                  </p>
                </address>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                  <Button href={restaurant.mapa.directions} external variant="outline-dark">
                    <Navigation size={15} aria-hidden="true" /> Como chegar
                  </Button>
                  <Button href={restaurant.telefone.href} variant="outline-dark">
                    <Phone size={15} aria-hidden="true" /> {restaurant.telefone.display}
                  </Button>
                </div>
              </Reveal>

              <Reveal delay={180}>
                <div className="mt-8 rounded-2xl bg-creme/70 p-6">
                  <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-terracota">
                    Horários
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {restaurant.horarios.grupos.map((g) => (
                      <li key={g.rotulo} className="flex items-baseline justify-between gap-4">
                        <span className="font-semibold text-grafite">{g.rotulo}</span>
                        <span className="text-right text-sm text-grafite-mute">
                          {g.linhas.join(' · ')}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 border-t border-grafite/10 pt-3 text-xs leading-relaxed text-grafite-mute/80">
                    Horários conforme a comunicação oficial da casa — confirme pelo
                    WhatsApp antes de visitar.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
