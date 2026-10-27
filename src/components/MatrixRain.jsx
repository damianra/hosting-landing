import { useEffect, useRef } from 'react';

const CHARS = 'アカサタナハマヤラワイキシチニヒミリウクスツヌフムユルエケセテネヘメレオコソトノホモヨロヲン01<>/#$%&';

export default function MatrixRain({ className = '' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || import.meta.env?.MODE === 'test') return undefined;
    const ctx = canvas.getContext('2d');
    if (!ctx) return undefined;
    const fontSize = 16;
    let drops = [];
    let raf;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      const cols = Math.max(1, Math.floor(canvas.width / fontSize));
      drops = Array.from({ length: cols }, () =>
        Math.floor(Math.random() * -60),
      );
    };
    resize();
    window.addEventListener('resize', resize);

    const paintFrame = () => {
      ctx.fillStyle = 'rgba(2, 5, 3, 0.14)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px 'Share Tech Mono', monospace`;
      for (let i = 0; i < drops.length; i += 1) {
        const ch = CHARS[Math.floor(Math.random() * CHARS.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        ctx.fillStyle =
          Math.random() > 0.975 ? '#d1fae5' : 'rgba(0, 255, 136, 0.72)';
        ctx.fillText(ch, x, y);
        if (y > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i] += 1;
      }
    };

    const reduced = window.matchMedia
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

    if (reduced) {
      ctx.fillStyle = '#020503';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      drops = drops.map(() => Math.floor(Math.random() * 40));
      paintFrame();
    } else {
      let last = 0;
      const loop = (t) => {
        raf = requestAnimationFrame(loop);
        if (t - last < 55) return;
        last = t;
        paintFrame();
      };
      raf = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
