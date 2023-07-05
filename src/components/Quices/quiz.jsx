import "./Quiz.css";
import { useState, useEffect } from "react";
//import jwt_decode from "jwt-decode";
import { getQuizz } from "../../Services/users";
export function Quiz() {
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  //const [theme, setTheme] = useState("");
  //const data = jwt_decode(localStorage.getItem("token"));

  useEffect(() => {
    getQuizz().then((response)=>{
      console.log(response)
      console.log(response.subject)
    })
  }, []);
  const questions = [
    {
      text: "¿Cuál era el río principal que atravesaba el antiguo Egipto?",
      options: [
        { id: 0, text: "Nilo", isCorrect: true },
        { id: 1, text: "Tigris", isCorrect: false },
        { id: 2, text: "Éufrates", isCorrect: false },
        { id: 3, text: "Níger", isCorrect: false },
      ],
    },
    {
      text: "¿Cuál fue la capital del Antiguo Egipto durante el Reino Nuevo?",
      options: [
        { id: 0, text: "Luxor", isCorrect: false },
        { id: 1, text: "Giza", isCorrect: false },
        { id: 2, text: "Menfis", isCorrect: false },
        { id: 3, text: "Tebas", isCorrect: true },
      ],
    },
    {
      text: "¿Quién fue el faraón más conocido por construir las Grandes Pirámides de Giza?",
      options: [
        { id: 0, text: "Ramsés II", isCorrect: false },
        { id: 1, text: "Tutankamón", isCorrect: false },
        { id: 2, text: "Cleopatra", isCorrect: false },
        { id: 3, text: "Keops", isCorrect: true },
      ],
    },
    {
      text: "¿Cuál fue el sistema de escritura utilizado en el antiguo Egipto?",
      options: [
        { id: 0, text: "Jeroglíficos", isCorrect: true },
        { id: 1, text: "Cuneiforme", isCorrect: false },
        { id: 2, text: "Alfabeto latino", isCorrect: false },
        { id: 3, text: "Ideogramas chinos", isCorrect: false },
      ],
    },
    {
      text: "¿Qué dios egipcio era representado con cabeza de chacal?",
      options: [
        { id: 0, text: "Ra", isCorrect: false },
        { id: 1, text: "Anubis", isCorrect: true },
        { id: 2, text: "Osiris", isCorrect: false },
        { id: 3, text: "Horus", isCorrect: false },
      ],
    },
  ];

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="cont-grande">
      {/* 1. Header  */}
      <h1 className="text">Quiz de conocimientos</h1>

      {/* 2. Current Score  */}
      <h2 className="text">Score: {score}</h2>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1 className="text">Final Results</h1>
          <h2 className="text">
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button className="btn" onClick={() => restartGame()}>
            Restart game
          </button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2 className="text">
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul className="ul">
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  className="li"
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
