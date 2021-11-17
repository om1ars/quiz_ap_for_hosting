import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const initialState = {
  questions: [],
  error: null,
  score: null,
  currentQuestionIndex: null,
  answers: [],
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    answerQuestion(state, action) {
      const currentQuestion = state.questions[state.currentQuestionIndex];
      state.score += action.payload === currentQuestion.correct_answer ? 1 : 0;
      state.answers.push({
        question: currentQuestion.question,
        answer: action.payload.answer,
        correctAnswer: currentQuestion.correct_answer,
        isCorrect: action.payload.answer === currentQuestion.correct_answer,
      });
    },

    fetchQuestionSuccess(state, action) {
      state.questions = action.payload;
      state.score = 0;
      state.currentQuestionIndex = 0;
      state.answers = [];
    },

    nextQuestion(state, action) {
      state.currentQuestionIndex += 1;
    },
    fetchQuestionsFail(state, action) {
      state.error = action.payload;
    },
  },
});

export const {
  answerQuestion,
  fetchQuestionsFail,
  nextQuestion,
  fetchQuestionSuccess,
} = quizSlice.actions;
export default quizSlice.reducer;
