import { useEffect, useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
  Minus,
  Square,
  X,
} from 'lucide-react';
import MatrixRain from './MatrixRain';
import { SLIDES } from '../data/content';

function useTypewriter(text, speed = 42, delay = 500) {
  const [out, setOut] = useState('');

  useEffect(() => {
    setOut('');
    let interval;
    let i = 0;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setOut(text.slice(0, i));
        if (i >= text.length) clearInterval(interval);
      }, speed);
    }, delay);
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, speed, delay]);

  return out;
}

function SlideDeck({ slides }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || slides.length <= 1) return undefined;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      7000,
    );
    return () => clearInterval(id);
  }, [paused, slides.length]);

  if (!slides.length) return null;

  const go = (dir) =>
    setIndex((i) => (i + dir + slides.length) % slides.length);
  const slide = slides[index];

  return (
    <div
      className="panel-glow scanlines relative w-full overflow-hidden rounded-2xl bg-black/60 ring-1 ring-emerald-500/25 backdrop-blur-sm"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      role="region"
      aria-label="Transmisiones de servicio"
    >
      <div className="relative z-10 flex items-center justify-between border-b border-emerald-500/20 px-4 py-2.5">
        <span className="flex items-center gap-2 text-emerald-500/70">
          <Minus size={13} />
          <Square size={11} />
          <X size={13} />
        </span>
        <span className="text-[10px] tracking-[0.3em] text-emerald-600 uppercase">
          ~/nexahost/transmisiones.log
        </span>
      </div>

      <div key={index} className="slide-in relative z-10 px-6 py-6 sm:px-8">
        <p className="mb-2 text-[11px] tracking-[0.3em] text-emerald-500">
          {slide.kicker}
        </p>
        <h3 className="font-display mb-3 text-lg font-bold tracking-wide text-emerald-100 sm:text-xl">
          {slide.title}
        </h3>
        <p className="min-h-[4.5rem] max-w-2xl text-sm leading-relaxed text-emerald-100/70">
          {slide.text}
          <span className="cursor-blink ml-1 text-emerald-400">▌</span>
        </p>
      </div>

      <div className="relative z-10 flex items-center justify-between border-t border-emerald-500/15 px-4 py-3">
        <div className="flex items-center gap-2">
          {slides.map((s, i) => (
            <button
              key={s.kicker}
              type="button"
              aria-label={`Ir a transmisión ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index
                  ? 'w-7 bg-emerald-400'
                  : 'w-3 bg-emerald-800 hover:bg-emerald-600'
              }`}
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Transmisión anterior"
            onClick={() => go(-1)}
            className="grid h-8 w-8 place-items-center rounded-lg border border-emerald-500/30 text-emerald-300 transition hover:bg-emerald-500/15"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            aria-label="Transmisión siguiente"
            onClick={() => go(1)}
            className="grid h-8 w-8 place-items-center rounded-lg border border-emerald-500/30 text-emerald-300 transition hover:bg-emerald-500/15"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const typed = useTypewriter(
    '> inicializando servidores… uptime 99.9% · latencia mínima · soporte humano 24/7',
  );

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      <MatrixRain className="absolute inset-0 h-full w-full opacity-45" />
      <div className="bg-grid absolute inset-0" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#020503]/80 via-[#020503]/40 to-[#020503]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,136,0.08),transparent_60%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-20">
        <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-[11px] tracking-[0.28em] text-emerald-300 uppercase">
          <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Sistemas en línea
        </div>

        <h1 className="font-display glitch max-w-4xl text-4xl leading-[1.08] font-black tracking-tight text-emerald-50 sm:text-6xl">
          TU SITIO,
          <br />
          <span className="text-glow text-emerald-400">
            ORBITANDO EL FUTURO
          </span>
        </h1>

        <p className="mt-5 min-h-[1.75rem] max-w-2xl text-sm text-emerald-200/80 sm:text-base">
          {typed}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#planes"
            className="group inline-flex items-center gap-2 rounded-lg bg-emerald-400 px-7 py-3.5 text-sm font-bold tracking-[0.15em] text-black uppercase transition hover:bg-emerald-300 hover:shadow-[0_0_28px_rgba(0,255,136,0.45)]"
          >
            Ver planes
            <ChevronsRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            href="#contacto"
            className="rounded-lg border border-emerald-400/40 px-7 py-3.5 text-sm font-bold tracking-[0.15em] text-emerald-300 uppercase transition hover:border-emerald-300 hover:bg-emerald-500/10"
          >
            Hablar con un humano
          </a>
        </div>

        <div className="mt-12">
          <SlideDeck slides={SLIDES} />
        </div>
      </div>
    </section>
  );
}
