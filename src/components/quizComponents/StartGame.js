import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";
import { startGame } from "../../features/gameState.slice";
import { auth } from "../../utils/firebase";
import drivingCar from "./drivingCar/drivingCar";
import { AddNavbar } from "../../pages/quiz/AddNavbar";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  input {
    margin-top: 3%;
  }

  button {
    margin-top: 12%;
  }
`;

function StartGame() {
  const [user] = useAuthState(auth);
  const dispatch = useDispatch();
  const [username, setUsername] = useState(user?.displayName);

  const startGameHandler = () => {
    dispatch(startGame({ username }));
  };
  return (
    <div>
      <Container>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Your Name..."
          className="inputFields  "
        />
        <button className='button__for__blog' onClick={startGameHandler}>Start Game</button>
      </Container>
    </div>
  );
}

export default StartGame;
