import React, { useState } from "react";
import question from "./QuizData";
import "./QuizResult.css";
import { useSelector } from "react-redux";

const QuizResult = (props) => {
  const [showAnswers, setShowAnswers] = useState(false);

  const handleShowAnswers = () => {
    setShowAnswers(!showAnswers);
  };
  const name = useSelector((state) => {
    return state.information.namevalue;
  });
  const surname = useSelector((state) => {
    return state.information.surnamevalue;
  });
  const finalanswer = useSelector((state) => {
    console.log(state);
    return state.finalanswer.finalanswer;
  });
  console.log(finalanswer);
  // let youranswer = Object.values(finalanswer);

  return (
    <div className="score-section">
      <h2>
        𝐂𝐨𝐧𝐠𝐫𝐚𝐭𝐮𝐥𝐚𝐭𝐢𝐨𝐧 🥳 {name} {surname}
      </h2>
      <h3> 𝐘𝐨𝐮'𝐯𝐞 𝐂𝐨𝐦𝐩𝐥𝐞𝐭𝐞𝐝 𝐭𝐡𝐞 𝐐𝐮𝐢𝐳!</h3>
      <h1>𝐘𝐎𝐔𝐑 𝐑𝐄𝐒𝐔𝐋𝐓</h1>
      <h4>Total Score = {props.score} / 5</h4>
      <h4 className="result-score">
        Your Correct Question {props.CorrectAns} out of {question.length}
      </h4>
      <button onClick={props.handlePlayAgain}>𝐏𝐥𝐚𝐲 𝐀𝐠𝐚𝐢𝐧</button>
      <button onClick={handleShowAnswers}>𝐂𝐡𝐞𝐜𝐤𝐞𝐝 𝐘𝐨𝐮𝐫 𝐀𝐧𝐬𝐰𝐞𝐫</button>
      {showAnswers && (
        <div className="answer-section">
          {question.map((q, i) => {
            const answerClass = q.answerOption.find(
              (a) => a.answerText === q.selectedOption
            )
              ? "selected-answer"
              : "";
            return (
              <div key={i} className="answer-block">
                <div className="question-text">{q.questionText}</div>
                {q.answerOption.map((option, j) => (
                  <div
                    key={j}
                    className={`answer-text ${
                      option.isCorrect
                        ? "correct-answer"
                        : finalanswer[i + 1] === option.answerText
                        ? "wrong-answer"
                        : ""
                    } ${
                      q.selectedOption === option.answerText ? answerClass : ""
                    }`}
                  >
                    {option.answerText}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default QuizResult;
