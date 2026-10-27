import { Check, Satellite } from 'lucide-react';
import { PLANS } from '../data/content';

export default function Plans() {
  return (
    <section id="planes" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 text-center text-[11px] tracking-[0.32em] text-emerald-500 uppercase">
          // Promociones activas
        </p>
        <h2 className="font-display mb-4 text-center text-3xl font-bold tracking-tight text-emerald-50 sm:text-4xl">
          Elegí tu <span className="text-glow text-emerald-400">órbita</span>
        </h2>
        <p className="mx-auto mb-14 max-w-2xl text-center text-sm leading-relaxed text-emerald-100/60">
          Precios promocionales con 50% OFF el primer año. Sin permanencia,
          cancelás cuando quieras y la migración desde tu hosting actual corre
          por nuestra cuenta.
        </p>

        {PLANS.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-emerald-500/30 bg-black/40 px-6 py-10 text-center text-sm text-emerald-200/60">
            No hay planes disponibles en este momento. Consultanos por una
            propuesta a medida.
          </p>
        ) : (
          <div className="grid items-stretch gap-6 md:grid-cols-3">
            {PLANS.map((plan) => (
              <article
                key={plan.id}
                className={`relative flex flex-col rounded-2xl p-7 transition duration-300 ${
                  plan.featured
                    ? 'panel-glow bg-[#04140b] ring-2 ring-emerald-400/60 md:-translate-y-3 hover:shadow-[0_0_44px_rgba(0,255,136,0.2)]'
                    : 'bg-zinc-950/80 ring-1 ring-emerald-500/15 hover:-translate-y-1 hover:ring-emerald-400/40'
                }`}
              >
                {plan.featured && (
                  <span className="font-display absolute -top-3.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-emerald-400 px-4 py-1 text-[10px] font-black tracking-[0.2em] text-black uppercase">
                    <Satellite size={12} />
                    Más elegido
                  </span>
                )}

                <header className="mb-6">
                  <h3 className="font-display text-lg font-black tracking-[0.18em] text-emerald-100">
                    {plan.name}
                  </h3>
                  <p className="mt-1 text-xs text-emerald-200/50">
                    {plan.desc}
                  </p>
                </header>

                <p className="mb-6 flex items-baseline gap-1.5">
                  <span className="text-sm text-emerald-500">
                    {plan.currency}
                  </span>
                  <span className="font-display text-glow text-5xl font-black tracking-tight text-emerald-300">
                    ${plan.price}
                  </span>
                  <span className="text-sm text-emerald-200/50">
                    {plan.period}
                  </span>
                </p>

                <ul className="mb-8 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-sm text-emerald-100/70"
                    >
                      <Check
                        size={15}
                        className="mt-0.5 shrink-0 text-emerald-400"
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contacto"
                  className={`rounded-lg px-6 py-3 text-center text-xs font-bold tracking-[0.2em] uppercase transition ${
                    plan.featured
                      ? 'bg-emerald-400 text-black hover:bg-emerald-300 hover:shadow-[0_0_24px_rgba(0,255,136,0.45)]'
                      : 'border border-emerald-500/40 text-emerald-300 hover:border-emerald-300 hover:bg-emerald-500/10'
                  }`}
                >
                  {plan.cta}
                </a>
              </article>
            ))}
          </div>
        )}

        <p className="mt-10 text-center text-xs text-emerald-200/40">
          * Precios promocionales primer año. Renovación a precio regular. Todos
          los planes incluyen migración gratuita.
        </p>
      </div>
    </section>
  );
}
