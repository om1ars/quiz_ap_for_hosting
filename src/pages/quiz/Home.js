import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { AddNavbar } from "./AddNavbar";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #d6ac3c;
`;

const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    margin-left: 15px;
    color: white;
    font-weight: 700;
  margin-top: 25px;

    font-size: 25px;
  }
`;

const ImageSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: 285px;
    width: 285px;
    object-fit: contain;
  }
`;

const Context = styled.div`
  width: 600px;
  height: 200px;
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: center;
  margin-top: 50px;

  p {
    font-size: 22px;
    font-weight: 600;
    letter-spacing: 2px;
    /* line-height: ; */
    color: white;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;

  button {
  }
`;

export const Home = () => {
  const history = useHistory();

  const handleGetStarted = () => {
    history.push("/start");
  };

  return (
    <div>
      <AddNavbar />
      <Container>
        <Navigation>
          <p>Home</p>
          <p>How to play</p>
          <p>ScoreBoard</p>
        </Navigation>

        <Context>
          <p>
            Test your spelling, grammar, and typing skills as you complete an
            exciting three part trophy race. Compare scores with past players
            and challenge friends to the only race you can all compete in
            without breaking a sweat!
          </p>
          <ImageSection>
            <img src="	https://thankyouforcalling.com/static/img/svg/logo.svg" />
          </ImageSection>
        </Context>
        <ButtonContainer>
          <button className="button__for__blog">How to play</button>
          <button
            className="button__for__blog__secondary"
            onClick={handleGetStarted}
          >
            Get started
          </button>
        </ButtonContainer>
      </Container>
    </div>
  );
};
