import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { restaurant } from '../data/restaurantConfig';

const links = [
  { href: '#inicio', rotulo: 'Início' },
  { href: '#o-vicino', rotulo: 'O Vicino' },
  { href: '#gastronomia', rotulo: 'Gastronomia' },
  { href: '#adega', rotulo: 'Adega' },
  { href: '#eventos', rotulo: 'Eventos' },
  { href: '#cardapio', rotulo: 'Cardápio' },
  { href: '#galeria', rotulo: 'Galeria' },
  { href: '#contato', rotulo: 'Contato' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open ]);

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-paper focus:px-5 focus:py-2 focus:text-sm focus:font-semibold focus:text-vino"
      >
        Pular para o conteúdo
      </a>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-vino-deep/95 shadow-lg shadow-black/20 backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
          <a
            href="#inicio"
            aria-label="Vicino Cucina e Vino — voltar ao início"
            className="leading-none text-paper"
          >
            <span className="block font-display text-[26px] font-semibold tracking-[0.18em]">
              VICINO
            </span>
            <span className="mt-0.5 block text-[10px] font-medium uppercase tracking-[0.32em] text-paper/80">
              Cucina &amp; Vino
            </span>
          </a>

          <nav aria-label="Navegação principal" className="hidden items-center gap-7 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="link-line text-[13px] font-medium uppercase tracking-[0.12em] text-paper/85 transition-colors duration-250 hover:text-paper"
              >
                {l.rotulo}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={restaurant.telefone.href}
              aria-label={`Ligar para ${restaurant.telefone.display}`}
              className="hidden items-center gap-2 text-sm font-semibold text-paper/85 transition-colors hover:text-paper md:inline-flex"
            >
              <Phone size={15} aria-hidden="true" />
              {restaurant.telefone.display}
            </a>
            <a
              href={restaurant.reserva.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full bg-paper px-6 py-2.5 text-[13px] font-bold uppercase tracking-[0.12em] text-vino-deep transition-all duration-300 hover:bg-creme sm:inline-flex"
            >
              Reservar mesa
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-paper transition-colors hover:bg-white/10 lg:hidden"
            >
              {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      {/* Menu mobile */}
      <div
        className="mobile-menu fixed inset-0 z-40 bg-vino-deep lg:hidden"
        data-open={open}
        aria-hidden={!open}
      >
        <nav
          aria-label="Navegação móvel"
          className="flex h-full flex-col justify-center gap-1 overflow-y-auto px-8 pb-28 pt-24"
        >
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
              className="border-b border-white/10 py-3.5 font-display text-3xl text-paper transition-colors hover:text-creme"
              style={{ transitionDelay: `${i * 20}ms` }}
            >
              {l.rotulo}
            </a>
          ))}
          <div className="mt-8 flex flex-col gap-3">
            <a
              href={restaurant.reserva.url}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={open ? 0 : -1}
              className="inline-flex items-center justify-center rounded-full bg-paper px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-vino-deep"
            >
              Reservar mesa
            </a>
            <a
              href={restaurant.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={open ? 0 : -1}
              className="inline-flex items-center justify-center rounded-full border border-paper/50 px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-paper"
            >
              WhatsApp
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
