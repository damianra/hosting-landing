# hosting-landing

quiero una landing page en la que se muestren promociones de web hosting, esta debe de tener sus 3 planes de pago un formulario de contacto, quisiera que para su estilo visual se tome como referencia matrix y ciencia ficcion retro, tambien que haya efectos css js en algunos componentes, debe de tener un slide en el header comentando lo bueno de nuestros servicios (al menos 3 parrafos), la letra quisiera que no sea tan comun y que el proyecto no se vea como construido por un agente pero si que se vea bien profecional.

> App generada automáticamente por [MetaBuilder Orchestrator](https://github.com/damianra/metabuilder-orchestrator) usando Devin (via ACP).

## Stack

- React + Vite + Tailwind CSS (frontend)
- Vitest (tests) + Playwright + Chromium (E2E)

## Requisitos

- Node.js >= 20

## Levantar el proyecto

```bash
npm install
npm run dev        # frontend en http://localhost:5173
```

## Tests

```bash
npm test           # suite Vitest
npm run test:e2e   # E2E Playwright (Chromium)
```

## Deploy

Si el proyecto se generó con `--github`, el build de `dist/` queda publicado en GitHub Pages (`https://<usuario>.github.io/hosting-landing/`). Pages sirve solo el frontend; en apps fullstack el backend corre aparte (`npm run api`).
