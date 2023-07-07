import "./Quiz.css";
import { useState, useEffect } from "react";
import {
  getQuizz,
  getQuestions,
  getAnswers,
  getCorrectAnswer,
} from "../../Services/users";
export function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState([]);
  const [score, setScore] = useState(0);
  const [subject, setSubject] = useState("");

  const loadQuestions = async () => {
    try {
      const response = await getQuestions(1);
      setCurrentQuestion(response);
      await loadAnswer(response[0].id);
    } catch (error) {
      console.log("Error al obtener las preguntas del quiz:", error);
    }
  };

  const loadAnswer = async (questionId) => {
    try {
      const response = await getAnswers(questionId);
      setAnswers(response);
      await loadCorrectAnswer(response[0].question_id);
      console.log(response);
    } catch (error) {
      console.log("Error al obtener las respuestas del quiz:", error);
    }
  };

  const loadCorrectAnswer = async (answerId) => {
    try {
      const response = await getCorrectAnswer(answerId);
      setCorrectAnswer(response);
      console.log(response);
    } catch (error) {
      console.log("Error al obtener las respuestas del quiz:", error);
    }
  };

  useEffect(() => {
    getQuizz().then((response) => {
      const id = 1; // ID que deseas asignar
      const quiz = response.find((item) => item.id === id);
      if (quiz) {
        setSubject(quiz.subject); // Acceso a la propiedad "subject" del objeto encontrado
      } else {
        console.log("No se encontró ningún objeto con el ID proporcionado.");
      }
    });
  }, []);

  useEffect(() => {
    setCurrentQuestionIndex(0);
    loadQuestions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* A possible answer was clicked */
  const optionClicked = (selectedOption) => {
    const selectAnswer = correctAnswer.find(
      (answer) => answer.answer_id === selectedOption
    );
    // Increment the score
    if (selectAnswer) {
      setScore(score + 1);
    }
    //Change questions
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < currentQuestion.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
      loadAnswer(currentQuestion[nextQuestionIndex].id);
    } else {
      setShowResults(true);
    }
    console.log(selectAnswer);
    console.log(selectedOption);
  };
  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setShowResults(false);
    setCurrentQuestionIndex(0);
    loadQuestions();
  };

  return (
    <div className="cont-grande">
      {/* 1. Header  */}
      <h1 className="text">Quiz de conocimientos de {subject}</h1>
      {/* 2. Current Score  */}
      <h2 className="text">Puntaje: {score}</h2>
      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1 className="text">Final Results</h1>
          <h2 className="text">
            {score} de {currentQuestion.length} (
            {(score / currentQuestion.length) * 100}%){" "}
          </h2>
          <h2>{score > 6 ? "Pasaste!!" : "Repetir"}</h2>
          <button className="btn" onClick={() => restartGame()}>
            Volver a jugar
          </button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2 className="text">
            Pregunta: {currentQuestionIndex + 1} de {currentQuestion.length}
          </h2>
          {currentQuestion.length > 0 && (
            <h3 className="question-text">
              {currentQuestion[currentQuestionIndex].question_text}
            </h3>
          )}
          {/* List of possible answers  */}
          <ul className="ul">
            {answers.map((answer) => {
              return (
                <li
                  className="li"
                  key={answer.id}
                  onClick={() => optionClicked(answer.id)}
                >
                  {answer.answer_text}{" "}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
