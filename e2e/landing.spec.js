import { test, expect } from '@playwright/test';
import { WHATSAPP_NUMBER } from '../src/data/config';

test.describe('landing de hosting', () => {
  test('carga sin errores de consola ni de página', async ({ page }) => {
    const errors = [];
    page.on('pageerror', (e) => errors.push(e.message));
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(msg.text());
    });
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    expect(errors).toEqual([]);
  });

  test('navbar, hero, slide y secciones principales son visibles', async ({
    page,
  }) => {
    await page.goto('/');
    await expect(page.locator('header nav')).toBeVisible();
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await expect(
      page.getByRole('region', { name: 'Transmisiones de servicio' }),
    ).toBeVisible();
    await expect(page.locator('#servicios')).toBeVisible();
    await expect(page.locator('#planes')).toBeVisible();
    await expect(page.locator('#contacto')).toBeVisible();
  });

  test('muestra los 3 planes de pago', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('#planes article')).toHaveCount(3);
  });

  test('el botón de enviar está deshabilitado hasta que el formulario tiene datos válidos', async ({
    page,
  }) => {
    await page.goto('/');
    const submit = page.getByRole('button', { name: 'Transmitir mensaje' });
    await expect(submit).toBeDisabled();

    await page.locator('input[name="nombre"]').fill('Ellen Ripley');
    await expect(submit).toBeDisabled();

    await page.locator('input[name="email"]').fill('ripley@nostromo.space');
    await expect(submit).toBeDisabled();

    await page
      .locator('textarea[name="mensaje"]')
      .fill('Necesito hostear mi proyecto nuevo');
    await expect(submit).toBeEnabled();
  });

  test('el botón flotante de WhatsApp despliega el mini-formulario y genera el link wa.me', async ({
    page,
  }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.addInitScript(() => {
      window.__openedUrls = [];
      window.open = (url) => {
        window.__openedUrls.push(url);
        return null;
      };
    });
    await page.goto('/');

    const fab = page.getByRole('button', { name: 'Abrir chat de WhatsApp' });
    await expect(fab).toBeVisible();
    await fab.click();

    const form = page.locator(
      'form[aria-label="Formulario de contacto por WhatsApp"]',
    );
    await expect(form).toBeVisible();

    const send = form.getByRole('button', { name: 'Enviar por WhatsApp' });
    await expect(send).toBeDisabled();

    await form.locator('input').fill('Test User');
    await form.locator('textarea').fill('Quiero info sobre los planes');
    await expect(send).toBeEnabled();
    await send.click();

    const opened = await page.evaluate(() => window.__openedUrls);
    expect(opened).toHaveLength(1);
    expect(opened[0]).toContain(`https://wa.me/${WHATSAPP_NUMBER}?text=`);
    expect(decodeURIComponent(opened[0])).toContain(
      'Quiero info sobre los planes',
    );
  });

  test('no hay enlaces con href vacío ni íconos sin destino', async ({
    page,
  }) => {
    await page.goto('/');

    const emptyHrefs = await page.$$eval('a', (anchors) =>
      anchors
        .filter((a) => !a.getAttribute('href'))
        .map((a) => a.outerHTML.slice(0, 120)),
    );
    expect(emptyHrefs).toEqual([]);

    const deadAnchors = await page.$$eval('a[href^="#"]', (anchors) =>
      anchors
        .map((a) => a.getAttribute('href'))
        .filter((href) => href.length <= 1 || !document.querySelector(href)),
    );
    expect(deadAnchors).toEqual([]);

    const orphanIcons = await page.$$eval('a', (anchors) =>
      anchors.filter(
        (a) =>
          a.querySelector('svg') &&
          !a.textContent.trim() &&
          !a.getAttribute('aria-label'),
      ).length,
    );
    expect(orphanIcons).toBe(0);
  });
});
