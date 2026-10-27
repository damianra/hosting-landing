import { useState } from 'react';
import {
  CircleCheck,
  Headphones,
  Mail,
  Send,
  Terminal,
} from 'lucide-react';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputCls =
  'w-full rounded-lg border border-emerald-500/25 bg-black/60 px-4 py-3 text-sm text-emerald-50 placeholder-emerald-800 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/30';

export default function Contact() {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });
  const [sent, setSent] = useState(false);

  const update = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const valid =
    form.nombre.trim().length >= 2 &&
    EMAIL_RE.test(form.email.trim()) &&
    form.mensaje.trim().length >= 10;

  const onSubmit = (e) => {
    e.preventDefault();
    if (!valid) return;
    setSent(true);
  };

  return (
    <section id="contacto" className="bg-grid relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-[11px] tracking-[0.32em] text-emerald-500 uppercase">
              // Canal abierto
            </p>
            <h2 className="font-display mb-4 text-3xl font-bold tracking-tight text-emerald-50 sm:text-4xl">
              Iniciar <span className="text-glow text-emerald-400">contacto</span>
            </h2>
            <p className="mb-10 max-w-md text-sm leading-relaxed text-emerald-100/60">
              Contanos qué querés lanzar y un ingeniero de la tripulación te
              responde en menos de 24 horas con una propuesta concreta.
            </p>

            <ul className="space-y-5">
              <li className="flex items-center gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-300">
                  <Mail size={19} />
                </span>
                <span>
                  <span className="block text-[10px] tracking-[0.28em] text-emerald-600 uppercase">
                    Frecuencia
                  </span>
                  <span className="text-sm text-emerald-100/80">
                    tripulacion@nexahost.dev
                  </span>
                </span>
              </li>
              <li className="flex items-center gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-300">
                  <Headphones size={19} />
                </span>
                <span>
                  <span className="block text-[10px] tracking-[0.28em] text-emerald-600 uppercase">
                    Soporte
                  </span>
                  <span className="text-sm text-emerald-100/80">
                    24/7 · respuesta media &lt; 15 min
                  </span>
                </span>
              </li>
              <li className="flex items-center gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-300">
                  <Terminal size={19} />
                </span>
                <span>
                  <span className="block text-[10px] tracking-[0.28em] text-emerald-600 uppercase">
                    Estado
                  </span>
                  <span className="inline-flex items-center gap-2 text-sm text-emerald-100/80">
                    <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Todos los sistemas operativos
                  </span>
                </span>
              </li>
            </ul>
          </div>

          <div className="panel-glow rounded-2xl bg-zinc-950/80 p-7 ring-1 ring-emerald-500/20 sm:p-9">
            {sent ? (
              <div className="slide-in flex h-full min-h-[20rem] flex-col items-center justify-center text-center">
                <CircleCheck
                  size={52}
                  strokeWidth={1.4}
                  className="mb-5 text-emerald-400"
                />
                <h3 className="font-display mb-2 text-lg font-bold tracking-wider text-emerald-100 uppercase">
                  Transmisión recibida
                </h3>
                <p className="mb-8 max-w-xs text-sm text-emerald-100/60">
                  Tu mensaje entró a la cola de prioridad. Un ingeniero te
                  responde dentro de las próximas 24 horas.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setForm({ nombre: '', email: '', mensaje: '' });
                    setSent(false);
                  }}
                  className="rounded-lg border border-emerald-400/40 px-6 py-2.5 text-xs font-bold tracking-[0.2em] text-emerald-300 uppercase transition hover:bg-emerald-500/10"
                >
                  Nueva transmisión
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate>
                <label className="mb-5 block">
                  <span className="mb-2 block text-[11px] tracking-[0.28em] text-emerald-400 uppercase">
                    &gt; Nombre_
                  </span>
                  <input
                    type="text"
                    name="nombre"
                    autoComplete="name"
                    placeholder="Ellen Ripley"
                    value={form.nombre}
                    onChange={update('nombre')}
                    className={inputCls}
                  />
                </label>
                <label className="mb-5 block">
                  <span className="mb-2 block text-[11px] tracking-[0.28em] text-emerald-400 uppercase">
                    &gt; Email_
                  </span>
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="ripley@nostromo.space"
                    value={form.email}
                    onChange={update('email')}
                    className={inputCls}
                  />
                </label>
                <label className="mb-6 block">
                  <span className="mb-2 block text-[11px] tracking-[0.28em] text-emerald-400 uppercase">
                    &gt; Mensaje_
                  </span>
                  <textarea
                    name="mensaje"
                    rows={5}
                    placeholder="Necesito hostear mi proyecto…"
                    value={form.mensaje}
                    onChange={update('mensaje')}
                    className={`${inputCls} resize-none`}
                  />
                </label>

                <button
                  type="submit"
                  disabled={!valid}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-400 px-6 py-3.5 text-sm font-bold tracking-[0.18em] text-black uppercase transition hover:bg-emerald-300 hover:shadow-[0_0_28px_rgba(0,255,136,0.4)] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-emerald-400 disabled:hover:shadow-none"
                >
                  <Send size={16} />
                  Transmitir mensaje
                </button>
                {!valid && (
                  <p className="mt-3 text-center text-[11px] text-emerald-200/40">
                    Completá nombre, email válido y mensaje (mín. 10 caracteres)
                    para habilitar la transmisión.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
