import { fireEvent, render, screen } from '@testing-library/react';
import Contact from '../components/Contact.jsx';

const fill = (placeholder, value) =>
  fireEvent.change(screen.getByPlaceholderText(placeholder), {
    target: { value },
  });

const submitBtn = () =>
  screen.getByRole('button', { name: /transmitir mensaje/i });

describe('formulario de contacto', () => {
  it('el botón de enviar está deshabilitado por defecto', () => {
    render(<Contact />);
    expect(submitBtn()).toBeDisabled();
  });

  it('permanece deshabilitado con campos parciales o inválidos', () => {
    render(<Contact />);

    fill(/ellen ripley/i, 'Ripley');
    expect(submitBtn()).toBeDisabled();

    fill(/ripley@nostromo/i, 'no-es-un-email');
    fill(/necesito hostear/i, 'Necesito hostear mi proyecto.');
    expect(submitBtn()).toBeDisabled();

    fill(/ripley@nostromo/i, 'ripley@nostromo.space');
    fill(/necesito hostear/i, 'corto');
    expect(submitBtn()).toBeDisabled();
  });

  it('se habilita solo cuando todos los campos son válidos', () => {
    render(<Contact />);

    fill(/ellen ripley/i, 'Ellen Ripley');
    fill(/ripley@nostromo/i, 'ripley@nostromo.space');
    fill(/necesito hostear/i, 'Necesito hostear mi proyecto.');

    expect(submitBtn()).toBeEnabled();
  });

  it('al enviar con datos válidos muestra la confirmación', () => {
    render(<Contact />);

    fill(/ellen ripley/i, 'Ellen Ripley');
    fill(/ripley@nostromo/i, 'ripley@nostromo.space');
    fill(/necesito hostear/i, 'Necesito hostear mi proyecto.');
    fireEvent.click(submitBtn());

    expect(screen.getByText(/transmisión recibida/i)).toBeInTheDocument();
  });
});
