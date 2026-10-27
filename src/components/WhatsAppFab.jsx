import { useState } from 'react';
import { MessageCircle, Send, X } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/config';

export default function WhatsAppFab() {
  const [open, setOpen] = useState(false);
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');

  if (!WHATSAPP_NUMBER) return null;

  const valid = mensaje.trim().length > 0;

  const send = (e) => {
    e.preventDefault();
    if (!valid) return;
    const texto = `Hola, soy ${nombre.trim() || 'visitante'}. ${mensaje.trim()}`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`,
      '_blank',
      'noopener,noreferrer',
    );
  };

  return (
    <div className="fixed right-5 bottom-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <form
          onSubmit={send}
          className="slide-in panel-glow w-72 rounded-2xl bg-zinc-950 p-5 ring-1 ring-emerald-500/30 sm:w-80"
          aria-label="Formulario de contacto por WhatsApp"
        >
          <div className="mb-4 flex items-center justify-between">
            <p className="text-[11px] font-bold tracking-[0.28em] text-emerald-300 uppercase">
              // Canal directo
            </p>
            <button
              type="button"
              aria-label="Cerrar chat"
              onClick={() => setOpen(false)}
              className="text-emerald-500/70 transition hover:text-emerald-300"
            >
              <X size={16} />
            </button>
          </div>

          <label className="mb-3 block">
            <span className="mb-1.5 block text-[10px] tracking-[0.24em] text-emerald-500 uppercase">
              &gt; Nombre_
            </span>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Tu nombre"
              className="w-full rounded-lg border border-emerald-500/25 bg-black/60 px-3.5 py-2.5 text-sm text-emerald-50 placeholder-emerald-800 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/30"
            />
          </label>
          <label className="mb-4 block">
            <span className="mb-1.5 block text-[10px] tracking-[0.24em] text-emerald-500 uppercase">
              &gt; Mensaje_
            </span>
            <textarea
              rows={3}
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              placeholder="Hola, quiero info sobre los planes…"
              className="w-full resize-none rounded-lg border border-emerald-500/25 bg-black/60 px-3.5 py-2.5 text-sm text-emerald-50 placeholder-emerald-800 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/30"
            />
          </label>

          <button
            type="submit"
            disabled={!valid}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-400 px-4 py-2.5 text-xs font-bold tracking-[0.18em] text-black uppercase transition hover:bg-emerald-300 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Send size={14} />
            Enviar por WhatsApp
          </button>
        </form>
      )}

      <button
        type="button"
        aria-label={open ? 'Cerrar WhatsApp' : 'Abrir chat de WhatsApp'}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="float-slow grid h-14 w-14 place-items-center rounded-full bg-emerald-400 text-black shadow-[0_0_28px_rgba(0,255,136,0.45)] transition hover:bg-emerald-300"
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
}
