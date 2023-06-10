import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import { Modules } from './Modules';

// Mock de la función useNavigate
jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('Modules component', () => {
  beforeEach(() => {
    // Restablecer el estado de useNavigate antes de cada prueba
    useNavigate.mockReset();
  });

  test('navigates to the correct module on card click', () => {
    const mockNavigate = jest.fn();
    useNavigate.mockReturnValue(mockNavigate);

    const { getByText } = render(<Modules />);

    // Obtener el elemento de tarjeta por su texto
    const historiaCard = getByText('Historia');

    // Hacer clic en la tarjeta de Historia
    fireEvent.click(historiaCard);

    // Verificar que se haya llamado a useNavigate con el enlace correcto
    expect(mockNavigate).toHaveBeenCalledWith('/moduloHistoria');
  });
});
