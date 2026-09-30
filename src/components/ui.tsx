import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react';

/* ---------- Reveal on scroll (IntersectionObserver, sem dependências) ---------- */

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'figure' | 'li';
}

export function Reveal({ children, delay = 0, className = '', as = 'div' }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-visible');
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Tag = as as 'div';
  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}

/* ---------- Cabeçalho editorial de seção ---------- */

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  lead?: string;
  align?: 'left' | 'center';
  dark?: boolean;
}

export function SectionHeading({ eyebrow, title, lead, align = 'left', dark = false }: SectionHeadingProps) {
  return (
    <Reveal
      className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2
        className={`h-display mt-4 text-4xl sm:text-5xl ${dark ? 'text-paper' : ''}`}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            dark ? 'text-paper/75' : 'text-grafite-mute'
          }`}
        >
          {lead}
        </p>
      )}
    </Reveal>
  );
}

/* ---------- Ícones de marca (SVG próprio — Lucide não inclui brand icons) ---------- */

export function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

/* ---------- Botões ---------- */

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'outline-light' | 'outline-dark' | 'ghost';
  external?: boolean;
  ariaLabel?: string;
  className?: string;
}

export function Button({
  href,
  children,
  variant = 'primary',
  external = false,
  ariaLabel,
  className = '',
}: ButtonProps) {
  const styles = {
    primary:
      'bg-vino text-paper hover:bg-vino-deep focus-visible:outline-terracota',
    'outline-light':
      'border border-paper/60 text-paper hover:bg-paper hover:text-vino-deep',
    'outline-dark':
      'border border-grafite/30 text-grafite hover:border-vino hover:text-vino',
    ghost: 'text-paper underline-offset-4 hover:underline',
  }[variant];

  return (
    <a
      href={href}
      aria-label={ariaLabel}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] transition-all duration-300 ${styles} ${className}`}
    >
      {children}
    </a>
  );
}
