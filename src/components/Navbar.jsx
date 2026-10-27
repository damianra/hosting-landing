import { useEffect, useState } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { NAV_LINKS } from '../data/content';
import { SITE_NAME, SITE_TAGLINE } from '../data/config';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? 'border-emerald-500/20 bg-[#020503]/90 backdrop-blur-md'
          : 'border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#inicio" className="group flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-emerald-500/40 bg-emerald-500/10 text-emerald-300 transition group-hover:bg-emerald-500/20">
            <Terminal size={18} strokeWidth={2.2} />
          </span>
          <span className="leading-none">
            <span className="font-display glitch block text-sm font-bold tracking-[0.22em] text-emerald-300">
              {SITE_NAME}
            </span>
            <span className="block text-[10px] tracking-[0.32em] text-emerald-600">
              {SITE_TAGLINE}
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs tracking-[0.24em] text-emerald-200/70 uppercase transition hover:text-emerald-300 hover:text-glow"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#planes"
              className="rounded-lg border border-emerald-400/50 bg-emerald-400/10 px-4 py-2 text-xs font-bold tracking-[0.2em] text-emerald-300 uppercase transition hover:bg-emerald-400 hover:text-black"
            >
              Lanzar sitio
            </a>
          </li>
        </ul>

        <button
          type="button"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-emerald-500/30 text-emerald-300 md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <ul className="border-t border-emerald-500/20 bg-[#020503]/95 px-6 py-4 backdrop-blur-md md:hidden">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-sm tracking-[0.24em] text-emerald-200/80 uppercase hover:text-emerald-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
