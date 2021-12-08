import {
  ContainerQuestions,
  ContainerQuestion,
  ContainerTitle,
  ButtonTrue,
  ButtonFalse,
  ContainerButton,
  ContainerScore,
  ContainerResult,
  ParrafoScore,
  ParrafoPositivo,
  ParrafoNegativo,
  DivUltimo,
} from "./style";
import { useContext, useState } from "react";
import { DataContext } from "../../context/dataContext";
import { Link } from "react-router-dom";

export const Questions = () => {
  const { data } = useContext(DataContext);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState([]);
  const currentResult = data.results;
  const handleClick = (value, correcto) => {
    if (value === correcto) {
      setScore(score + 1);
      setAnswer([
        ...answer,
        {
          text: currentResult[currentQuestion].question,
          type: true,
        },
      ]);
    } else {
      setAnswer([
        ...answer,
        {
          text: currentResult[currentQuestion].question,
          type: false,
        },
      ]);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < currentResult.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <ContainerQuestions>
      {!showScore ? (
        <>
          <ContainerQuestion className="background-blue">
            <ContainerTitle className="container">
              <h2>{currentResult[currentQuestion].category}</h2>
              <div>
                <p>{currentResult[currentQuestion].question}</p>
              </div>
            </ContainerTitle>
          </ContainerQuestion>

          <ContainerButton>
            <ButtonTrue
              value="True"
              type="button"
              onClick={(e) => {
                handleClick(
                  e.target.value,
                  currentResult[currentQuestion].correct_answer
                );
              }}
            >
              True
            </ButtonTrue>
            <ButtonFalse
              value="False"
              type="button"
              onClick={(e) => {
                handleClick(
                  e.target.value,
                  currentResult[currentQuestion].correct_answer
                );
              }}
            >
              False
            </ButtonFalse>
          </ContainerButton>
          <ContainerScore>
            <p>
              {currentQuestion + 1}/{currentResult.length}
            </p>
          </ContainerScore>
        </>
      ) : (
        <ContainerResult className="container">
          <ParrafoScore>
            You score {score} / {currentResult.length}{" "}
          </ParrafoScore>
          {answer.map((a) => {
            return (
              <DivUltimo>
                {a.type ? (
                  <ParrafoPositivo>
                    <span>+ </span>
                    {a.text}
                  </ParrafoPositivo>
                ) : (
                  <ParrafoNegativo>
                    <span>-</span>
                    {a.text}
                  </ParrafoNegativo>
                )}
              </DivUltimo>
            );
          })}
          <Link to={"/"}>PLAY AGAIN?</Link>
        </ContainerResult>
      )}
    </ContainerQuestions>
  );
};
