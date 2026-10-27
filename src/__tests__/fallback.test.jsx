import { render, screen } from '@testing-library/react';

vi.mock('../data/content', async (importOriginal) => {
  const actual = await importOriginal();
  return { ...actual, FEATURES: [], PLANS: [] };
});

import Features from '../components/Features.jsx';
import Plans from '../components/Plans.jsx';

describe('fallback cuando los datos están vacíos', () => {
  it('la lista de servicios muestra un estado informativo', () => {
    render(<Features />);
    expect(
      screen.getByText(/no hay servicios disponibles/i),
    ).toBeInTheDocument();
  });

  it('la lista de planes muestra un estado informativo', () => {
    render(<Plans />);
    expect(
      screen.getByText(/no hay planes disponibles/i),
    ).toBeInTheDocument();
  });
});
