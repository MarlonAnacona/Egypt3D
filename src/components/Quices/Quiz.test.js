import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Quiz } from './quiz';
import '@testing-library/jest-dom/extend-expect';

describe('Quiz Component', () => {
  test('increments the score and advance    s to the next question on correct answer', () => {
    const { getByText } = render(<Quiz />);

    // Initial score should be 0
    const scoreElement = getByText('Score: 0');
    expect(scoreElement).toBeInTheDocument();

    // Find the first question
    const questionElement = getByText('¿Cuál era el río principal que atravesaba el antiguo Egipto?');
    expect(questionElement).toBeInTheDocument();

    // Click on the correct answer
    const correctAnswer = getByText('Nilo');
    fireEvent.click(correctAnswer);

    // Score should be incremented to 1
    expect(scoreElement).toHaveTextContent('Score: 1');

    // Next question should be displayed
    const nextQuestion = getByText('¿Cuál fue la capital del Antiguo Egipto durante el Reino Nuevo?');
    expect(nextQuestion).toBeInTheDocument();
  });

  test('shows final results and restarts the game on completing all questions', () => {
    const { getByText } = render(<Quiz />);

    // Click on all correct answers
    const correctAnswers = ['Nilo', 'Tebas', 'Keops', 'Jeroglíficos', 'Anubis'];
    correctAnswers.forEach((answer) => {
      const answerElement = getByText(answer);
      fireEvent.click(answerElement);
    });

    // Final results should be displayed
    const finalResults = getByText('Final Results');
    expect(finalResults).toBeInTheDocument();

    // Score should be equal to the number of questions
    const scoreElement = getByText(/5 out of 5 correct/i);
    expect(scoreElement).toBeInTheDocument();

    // Restart the game
    const restartButton = getByText('Restart game');
    fireEvent.click(restartButton);

    // Score should be reset to 0
    expect(getByText('Score: 0')).toBeInTheDocument();
  });
});
