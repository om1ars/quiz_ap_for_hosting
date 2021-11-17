import { createSlice } from "@reduxjs/toolkit";
import { END_GAME, FETCH_GAME, GAME, START_GAME } from "../utils/constants";
import { fetchQuestionsFail, fetchQuestionSuccess } from "./quiz.slice";

const initialState = {
  stage: START_GAME,
  username: "",
};

const gameState = createSlice({
  name: "gameState",
  initialState,
  reducers: {
    startGame(state, action) {
      state.username = action.payload;
      state.stage = FETCH_GAME;
    },
    cancelFetchQuestions(state, action) {
      state.stage = START_GAME;
    },
    finishGame(state, action) {
      state.stage = END_GAME;
    },
    restartGame(state, action) {
      state.stage = START_GAME;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestionSuccess, (state, action) => {
        state.stage = GAME;
      })
      .addCase(fetchQuestionsFail, (state, action) => {
        state.stage = START_GAME;
      });
  },
});

export const {  startGame,
    cancelFetchQuestions,
    finishGame,
    restartGame,} = gameState.actions;
export default gameState.reducer;
