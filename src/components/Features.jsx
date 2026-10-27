import Icon from './Icon';
import { FEATURES } from '../data/content';

export default function Features() {
  return (
    <section id="servicios" className="bg-grid relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 text-[11px] tracking-[0.32em] text-emerald-500 uppercase">
          // Módulos del sistema
        </p>
        <h2 className="font-display mb-4 text-3xl font-bold tracking-tight text-emerald-50 sm:text-4xl">
          Servicios de clase <span className="text-emerald-400">orbital</span>
        </h2>
        <p className="mb-12 max-w-2xl text-sm leading-relaxed text-emerald-100/60">
          Cada plan incluye la misma base de infraestructura seria: hardware
          moderno, red redundante y un equipo que responde cuando importa.
        </p>

        {FEATURES.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-emerald-500/30 bg-black/40 px-6 py-10 text-center text-sm text-emerald-200/60">
            No hay servicios disponibles en este momento. Volvé a intentarlo más
            tarde.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <article
                key={f.title}
                className="group rounded-2xl bg-zinc-950/80 p-6 ring-1 ring-emerald-500/15 transition duration-300 hover:-translate-y-1 hover:bg-zinc-950 hover:shadow-[0_0_32px_rgba(0,255,136,0.12)] hover:ring-emerald-400/50"
              >
                <div className="mb-5 inline-grid h-11 w-11 place-items-center rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 transition group-hover:bg-emerald-500/20 group-hover:text-emerald-200">
                  <Icon name={f.icon} size={21} strokeWidth={1.9} />
                </div>
                <h3 className="font-display mb-2 text-sm font-bold tracking-wider text-emerald-100 uppercase">
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed text-emerald-100/55">
                  {f.text}
                </p>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
