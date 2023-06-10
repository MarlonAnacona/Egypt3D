import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ModuloHistoria} from './ModuloHistoria';
import { useNavigate } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
  Link: ({ children, to }) => <a href={to}>{children}</a>,
}));

describe('ModuloHistoria component', () => {
  test('redirects to "/quices" when quiz button is clicked', () => {
    const navigateMock = jest.fn();
    useNavigate.mockReturnValue(navigateMock);

    const { getByText } = render(<ModuloHistoria/>);

    const quizButton = getByText('QUIZ');
    fireEvent.click(quizButton);

    expect(navigateMock).toHaveBeenCalledTimes(1);
    expect(navigateMock).toHaveBeenCalledWith('/quices');
  });
});
