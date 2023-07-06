import "./Quiz.css";
import { useState, useEffect } from "react";
import {
  getQuizz,
  getQuestions,
  getAnswers,
  getCorrectAnswer,
} from "../../Services/users";
export function Quiz5() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState([]);
  const [score, setScore] = useState(0);
  const [subject, setSubject] = useState("");

  const loadQuestions = () => {
    getQuestions(5)
      .then((response) => {
        console.log(response);
        setCurrentQuestion(response);
        setCurrentQuestionIndex(0);

        // Reiniciar el índice de la pregunta
      })
      .catch((error) => {
        console.log("Error al obtener las preguntas del quiz:", error);
      });
  };
  const loadAnswers = () => {
    getAnswers(41)
      .then((response) => {
        console.log(response);
        setAnswers(response);
      })
      .catch((error) => {
        console.log("Error al obtener las respuestas del quiz:", error);
      });
  };

  useEffect(() => {
    getQuizz().then((response) => {
      const id = 5; // ID que deseas asignar
      const quiz = response.find((item) => item.id === id);
      console.log(response);
      if (quiz) {
        console.log(quiz.subject);
        setSubject(quiz.subject); // Acceso a la propiedad "subject" del objeto encontrado
      } else {
        console.log("No se encontró ningún objeto con el ID proporcionado.");
      }
    });
  }, []);

  useEffect(() => {
    loadQuestions();
  }, []);

  useEffect(() => {
    loadAnswers();
  }, []);

  useEffect(() => {
    getCorrectAnswer(11)
      .then((response) => {
        setCorrectAnswer(response);
        console.log(response);
      })
      .catch((error) => {
        console.log(
          "Error al obtener las respuestas correctas del quiz:",
          error
        );
      });
  }, []);
  useEffect(() => {
    console.log("Current question index:", currentQuestionIndex);
  }, [currentQuestionIndex]);

  /* A possible answer was clicked */
  const optionClicked = (selectedOption) => {
    const selectAnswer = correctAnswer.find(
      (answer) => answer.answer_id === selectedOption
    );
    // Increment the score
    if (selectAnswer) {
      setScore(score + 1);
      console.log("correcto");
    }
    if (currentQuestionIndex + 1 < currentQuestion.length) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setShowResults(true);
    }
    console.log("Option clicked:", selectedOption);
    console.log("Current question index:", currentQuestionIndex);
  };
  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setShowResults(false);
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
            {score} de {currentQuestion.length} correct - (
            {(score / currentQuestion.length) * 100}%)
          </h2>
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
