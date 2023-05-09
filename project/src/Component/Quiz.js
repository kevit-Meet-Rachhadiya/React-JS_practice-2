import React, { useState } from "react";
import "./Quiz.css";
import question from "./QuizData";
import QuizResult from "./QuizResult";
import { useDispatch, useSelector } from "react-redux";
import hindiquestion from "./hindidata";
import { finalanswershow } from "./FinalAnswerSlice";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [CorrectAns, setCorrectAns] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [choose, setChoose] = useState("");
  const languageselect = useSelector((state) => state.language.value);
  const language = languageselect ? question : hindiquestion;
  const dispatch = useDispatch();

  const handleAnswerOption = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
      setCorrectAns(CorrectAns + 1);
    }
    setClicked(true);
  };

  const handleNextOption = () => {
    setClicked(false);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < question.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
    dispatch(finalanswershow({ i: currentQuestion + 1, value: choose }));
  };

  const handlepreviousOption = () => {
    setClicked(false);
    const previousQuestion = currentQuestion - 1;
    if (previousQuestion > -1) {
      setCurrentQuestion(previousQuestion);
    }
  };

  const handlePlayAgain = () => {
    setCurrentQuestion(0);
    setScore(0);
    setCorrectAns(0);
    setShowResult(false);
  };

  const handleButtonClick = (number) => {
    setCurrentQuestion(number);
  };

  return (
    <>
      <div className="app">
        {showResult ? (
          <QuizResult
            score={score}
            CorrectAns={CorrectAns}
            handlePlayAgain={handlePlayAgain}
          />
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>
                  𝐐𝐮𝐞𝐬𝐭𝐢𝐨𝐧 : {currentQuestion + 1} / {question.length}
                </span>
              </div>
              <div className="question-text">
                {language[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {language[currentQuestion].answerOption.map((ans, i) => {
                return (
                  <button
                    className={choose === ans.answerText ? "checked" : null}
                    disabled={clicked}
                    key={i}
                    onClick={() => {
                      setChoose(ans.answerText);
                      handleAnswerOption(ans.isCorrect);
                    }}
                  >
                    {ans.answerText}
                  </button>
                );
              })}

              <div className="actions">
                <button onClick={handlepreviousOption}>𝐏𝐫𝐞𝐯𝐢𝐨𝐮𝐬</button>
                <button disabled={!clicked} onClick={handleNextOption}>
                  𝐍𝐞𝐱𝐭
                </button>
              </div>
            </div>
          </>
        )}
      </div>
      {!showResult && (
        <div>
          <button className="redirect-btn" onClick={() => handleButtonClick(0)}>
            1
          </button>
          <button className="redirect-btn" onClick={() => handleButtonClick(1)}>
            2
          </button>
          <button className="redirect-btn" onClick={() => handleButtonClick(2)}>
            3
          </button>
          <button className="redirect-btn" onClick={() => handleButtonClick(3)}>
            4
          </button>
          <button className="redirect-btn" onClick={() => handleButtonClick(4)}>
            5
          </button>
        </div>
      )}
    </>
  );
};

export default Quiz;
