import { Reveal, Button } from '../components/ui';
import { restaurant } from '../data/restaurantConfig';

export function FinalCTA() {
  return (
    <section aria-label="Convite final" className="relative overflow-hidden">
      <img
        src="/assets/vicino/vicino-prato-03.jpg"
        alt="Gnocchi com camarão servido no Vicino Cucina e Vino"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/55" aria-hidden="true" />
      <div className="relative mx-auto max-w-4xl px-5 py-28 text-center sm:px-8 lg:py-40">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-creme/85">
            {restaurant.slogan}
          </p>
          <h2 className="mx-auto mt-5 max-w-2xl font-display text-4xl font-medium leading-tight text-paper sm:text-6xl">
            Uma mesa. Bons vinhos. Boa companhia.
          </h2>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={restaurant.reserva.url} external>
              Reservar mesa
            </Button>
            <Button href="#cardapio" variant="outline-light">
              Conhecer o cardápio
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
