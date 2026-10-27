import { Terminal } from 'lucide-react';
import { NAV_LINKS } from '../data/content';
import { SITE_NAME, SITE_TAGLINE } from '../data/config';

export default function Footer() {
  return (
    <footer className="border-t border-emerald-500/15 bg-black/60 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 sm:flex-row sm:justify-between">
        <a href="#inicio" className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-emerald-500/40 bg-emerald-500/10 text-emerald-300">
            <Terminal size={18} strokeWidth={2.2} />
          </span>
          <span className="leading-none">
            <span className="font-display block text-sm font-bold tracking-[0.22em] text-emerald-300">
              {SITE_NAME}
            </span>
            <span className="block text-[10px] tracking-[0.32em] text-emerald-600">
              {SITE_TAGLINE}
            </span>
          </span>
        </a>

        <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[11px] tracking-[0.24em] text-emerald-200/50 uppercase transition hover:text-emerald-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="inline-flex items-center gap-2 text-[11px] tracking-[0.18em] text-emerald-200/40 uppercase">
          <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Status: online
        </p>
      </div>

      <p className="mt-10 text-center text-[11px] text-emerald-200/30">
        © {new Date().getFullYear()} {SITE_NAME} — Hosting orbital. Señal
        estable desde 2026.
      </p>
    </footer>
  );
}
