// import { Button } from "@material-ui/core";
import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { finishGame } from "../../features/gameState.slice";
import { answerQuestion } from "../../features/quiz.slice";
import "./Game.css";
function Game() {
  const dispatch = useDispatch();
  const [timeLeft, setTimeLeft] = useState(60);
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex].question
  );
  const score = useSelector((state) => state.quiz.score);
  const currentIndex = useSelector((state) => state.quiz.currentQuestionIndex);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const answerHandler = (answer) => {
    dispatch(answerQuestion({ answer }));
  };

  const restartHandler = () => {
    dispatch(finishGame());
  };
  return (
    <div className="game__container">
      <div className="gmae__context">
        <h1 className="time">{timeLeft}</h1>
        {/* <p className="score">{score}</p> */}
        <p className="">{currentIndex}/10</p>
        <h1
          dangerouslySetInnerHTML={{ __html: question }}
          className="question"
        ></h1>
        <div className="">
          <Button
            style={{ color: "#ff0000", fontSize: "45px", marginLeft: "5rem" }}
            color="success"
            onClick={() => answerHandler("True")}
          >
            True
          </Button>
          <Button
            style={{ color: "#00ff00 ", fontSize: "45px", marginLeft: "5rem" }}
            onClick={() => answerHandler("False")}
          >
            False
          </Button>
        </div>
      </div>
      <div className="">
        <Button
          color="secondary"
          variant="contained"
          onClick={restartHandler}
          type="error"
        >
          Quit Game
        </Button>
      </div>
    </div>
  );
}

export default Game;
