import { useEffect, useState } from 'react';
import { restaurant } from '../data/restaurantConfig';

/** CTA fixo e discreto no mobile: aparece após o hero. */
export function MobileBar() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisivel(window.scrollY > window.innerHeight * 0.85);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 px-4 pb-4 pt-2 transition-all duration-300 sm:hidden ${
        visivel ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
      aria-hidden={!visivel}
    >
      <a
        href={restaurant.reserva.url}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={visivel ? 0 : -1}
        className="block rounded-full bg-vino py-4 text-center text-sm font-bold uppercase tracking-[0.16em] text-paper shadow-xl shadow-vino-deep/40"
      >
        Reservar
      </a>
    </div>
  );
}
