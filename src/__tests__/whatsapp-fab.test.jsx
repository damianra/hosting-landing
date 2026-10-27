import { fireEvent, render, screen } from '@testing-library/react';
import WhatsAppFab from '../components/WhatsAppFab.jsx';
import { WHATSAPP_NUMBER } from '../data/config.js';

const openFab = () =>
  fireEvent.click(
    screen.getByRole('button', { name: /abrir chat de whatsapp/i }),
  );

describe('botón flotante de WhatsApp', () => {
  it('despliega el mini-formulario con el envío deshabilitado hasta tener mensaje', () => {
    render(<WhatsAppFab />);
    openFab();

    const submit = screen.getByRole('button', {
      name: /enviar por whatsapp/i,
    });
    expect(submit).toBeDisabled();

    fireEvent.change(screen.getByPlaceholderText(/quiero info/i), {
      target: { value: 'Hola' },
    });
    expect(submit).toBeEnabled();
  });

  it('al enviar abre un link wa.me con el número configurado', () => {
    const openMock = vi.fn();
    vi.stubGlobal('open', openMock);

    render(<WhatsAppFab />);
    openFab();
    fireEvent.change(screen.getByPlaceholderText(/tu nombre/i), {
      target: { value: 'Ripley' },
    });
    fireEvent.change(screen.getByPlaceholderText(/quiero info/i), {
      target: { value: 'Info de planes' },
    });
    fireEvent.click(
      screen.getByRole('button', { name: /enviar por whatsapp/i }),
    );

    expect(openMock).toHaveBeenCalledWith(
      expect.stringContaining(`https://wa.me/${WHATSAPP_NUMBER}?text=`),
      '_blank',
      'noopener,noreferrer',
    );
    vi.unstubAllGlobals();
  });
});
