import React from "react";
import { useSelector } from "react-redux";
import { END_GAME, FETCH_GAME, GAME, START_GAME } from "../../utils/constants";
import EndGame from "./EndGame";
import FetchingGamePage from "./FetchingGamePage";
import Game from "./Game";
import StartGame from "./StartGame";
import { useHistory } from "react-router-dom";

function MainPage() {
  
  const currentStage = useSelector((state) => state.gameState.stage);
  let displayedPage;
  switch (currentStage) {
    case START_GAME:
      displayedPage = <StartGame />;
      break;
    case FETCH_GAME:
      displayedPage = <FetchingGamePage />;
      break;
    case GAME:
      displayedPage = <Game />;
      break;
    case END_GAME:
      displayedPage = <EndGame />;
      break;
    default:
      break;
  }

  const history = useHistory();
  return (
    <div>
      {displayedPage}
    </div>
  );
}

export default MainPage;
