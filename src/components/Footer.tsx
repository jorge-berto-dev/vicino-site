import { MapPin, Phone, Clock } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from './ui';
import { restaurant } from '../data/restaurantConfig';

const nav = [
  { href: '#inicio', rotulo: 'Início' },
  { href: '#o-vicino', rotulo: 'O Vicino' },
  { href: '#gastronomia', rotulo: 'Gastronomia' },
  { href: '#adega', rotulo: 'Adega' },
  { href: '#eventos', rotulo: 'Eventos' },
  { href: '#cardapio', rotulo: 'Cardápio' },
  { href: '#contato', rotulo: 'Contato' },
];

export function Footer() {
  return (
    <footer className="bg-vino-dark text-paper" aria-label="Rodapé">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-3xl font-semibold tracking-[0.16em]">VICINO</p>
          <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.3em] text-paper/70">
            Cucina &amp; Vino
          </p>
          <p className="mt-5 font-display text-lg italic text-creme/90">
            “{restaurant.slogan}”
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={restaurant.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram do Vicino Cucina e Vino"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-paper/25 transition-colors duration-250 hover:bg-paper hover:text-vino-deep"
            >
              <InstagramIcon size={17} />
            </a>
            <a
              href={restaurant.facebook.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook do Vicino Cucina e Vino"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-paper/25 transition-colors duration-250 hover:bg-paper hover:text-vino-deep"
            >
              <FacebookIcon size={17} />
            </a>
          </div>
        </div>

        <nav aria-label="Links do rodapé">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-paper/60">Navegar</p>
          <ul className="mt-5 space-y-2.5">
            {nav.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-[15px] text-paper/85 transition-colors hover:text-paper"
                >
                  {l.rotulo}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-paper/60">Visite-nos</p>
          <address className="mt-5 space-y-3 text-[15px] not-italic leading-relaxed text-paper/85">
            <p className="flex gap-2.5">
              <MapPin size={17} aria-hidden="true" className="mt-0.5 shrink-0 text-creme/70" />
              <span>
                {restaurant.endereco.rua}
                <br />
                {restaurant.endereco.complemento} — {restaurant.endereco.cidade}/{restaurant.endereco.uf}
              </span>
            </p>
            <p>
              <a
                href={restaurant.telefone.href}
                className="flex items-center gap-2.5 transition-colors hover:text-paper"
              >
                <Phone size={17} aria-hidden="true" className="shrink-0 text-creme/70" />
                {restaurant.telefone.display}
              </a>
            </p>
          </address>
          <a
            href={restaurant.mapa.directions}
            target="_blank"
            rel="noopener noreferrer"
            className="link-line mt-4 inline-block text-sm font-semibold uppercase tracking-[0.14em] text-creme"
          >
            Como chegar
          </a>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-paper/60">Horários</p>
          <ul className="mt-5 space-y-4 text-[15px] text-paper/85">
            {restaurant.horarios.grupos.map((g) => (
              <li key={g.rotulo} className="flex gap-2.5">
                <Clock size={17} aria-hidden="true" className="mt-0.5 shrink-0 text-creme/70" />
                <span>
                  <strong className="font-semibold text-paper">{g.rotulo}</strong>
                  <br />
                  {g.linhas.join(' · ')}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-paper/50">
            Horários conforme comunicação oficial — sujeitos a confirmação.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-paper/55 sm:flex-row sm:px-8">
          <p>© {new Date().getFullYear()} {restaurant.nome}. Todos os direitos reservados.</p>
          <p>Guarulhos · São Paulo</p>
        </div>
      </div>
    </footer>
  );
}
