import { render, screen } from '@testing-library/react';
import App from '../App.jsx';

describe('secciones principales', () => {
  it('renderiza navbar, hero, servicios, planes, contacto y footer', () => {
    const { container } = render(<App />);

    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(container.querySelector('section#inicio')).toBeInTheDocument();
    expect(container.querySelector('section#servicios')).toBeInTheDocument();
    expect(container.querySelector('section#planes')).toBeInTheDocument();
    expect(container.querySelector('section#contacto')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('muestra el slide del header con las transmisiones de servicio', () => {
    render(<App />);
    expect(
      screen.getByRole('region', { name: /transmisiones de servicio/i }),
    ).toBeInTheDocument();
  });

  it('muestra los 3 planes de pago', () => {
    render(<App />);
    for (const name of ['ÓRBITA', 'ESTACIÓN', 'NEXO']) {
      expect(
        screen.getByRole('heading', { name }),
      ).toBeInTheDocument();
    }
  });
});
