import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { Login } from './Login';
import { loginUser } from '../../Services/users';
import { LoginContext } from '../context/LoginContext';
import { BrowserRouter as Router } from 'react-router-dom';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import { createBrowserHistory } from 'history';

jest.mock('../../Services/users', () => ({
  loginUser: jest.fn(),
}));

describe('Login Component', () => {
  it('displays error message on login failure', async () => {
    const setIsLogged = jest.fn();
    const { getByPlaceholderText, getByText, queryByText  } = render(
      <Router>
        <LoginContext.Provider value={{ setIsLogged }}>
          <Login />
        </LoginContext.Provider>
      </Router>
    );

    const emailInput = getByPlaceholderText('Correo electronico');
    const passwordInput = getByPlaceholderText('Contraseña');
    const submitButton = getByText('Ingresar');

    loginUser.mockRejectedValueOnce(new Error('Login error'));

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      const errorMessage = queryByText ('Ocurrió un error al ingresar, intenta de nuevo');
      expect(errorMessage).toBeInTheDocument();
    });
  });
  it('redirects to home page on successful login', async () => {
    const setIsLogged = jest.fn();
    const history = createBrowserHistory();
    const { getByPlaceholderText, getByText, queryByText } = render(
      <Router history={history}>
        <LoginContext.Provider value={{ setIsLogged }}>
          <Login />
        </LoginContext.Provider>
      </Router>
    );

    const emailInput = getByPlaceholderText('Correo electronico');
    const passwordInput = getByPlaceholderText('Contraseña');
    const submitButton = getByText('Ingresar');

    loginUser.mockResolvedValueOnce({ token: 'dummyToken' });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(history.location.pathname).toBe('/');
    });
  });
});
