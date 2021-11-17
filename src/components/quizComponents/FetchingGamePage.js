import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { cancelFetchQuestions } from "../../features/gameState.slice";

const Container = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

function FetchingGamePage() {
  const dispatch = useDispatch();
  const cancelGameHandler = () => {
    dispatch(cancelFetchQuestions());
  };
  return (
    <Container className="cancel__center">
      <div className="">
        <div className="">
          <div className=""></div>
        </div>
        <button className="button__for__blog" onClick={cancelGameHandler}>
          Cancel
        </button>
      </div>
    </Container>
  );
}

export default FetchingGamePage;
