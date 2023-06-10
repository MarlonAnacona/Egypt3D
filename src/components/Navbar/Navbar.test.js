import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Navbar from './Navbar';
import { LoginContext } from '../context/LoginContext';
import { toBeInTheDocument } from '@testing-library/jest-dom';

describe('Navbar Component', () => {
  
  it('toggles the nav menu when the toggle button is clicked', () => {
    const setIsLogged = jest.fn();
    const { getByTestId } = render(
      <LoginContext.Provider value={{ isLogged: true, setIsLogged }}>
        <Navbar />
      </LoginContext.Provider>
    );

    const toggleButton = getByTestId('nav-toggle');

    expect(toggleButton).toBeInTheDocument();
    expect(toggleButton).not.toHaveClass('open');

    fireEvent.click(toggleButton);

    expect(toggleButton).toHaveClass('open');

    fireEvent.click(toggleButton);

    expect(toggleButton).not.toHaveClass('open');
  });
});
