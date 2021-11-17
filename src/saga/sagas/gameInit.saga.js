import { call, cancel, fork, put, take } from "@redux-saga/core/effects";
import { cancelFetchQuestions, startGame } from "../../features/gameState.slice";
import { fetchQuestionsFail, fetchQuestionSuccess } from "../../features/quiz.slice";
import { fetchQuiz } from "../../utils/api";

function* fetchQuestionSaga() {
    try {
      // yield delay(1000);
      const data = yield call(fetchQuiz);
      yield put(fetchQuestionSuccess(data));
    } catch (error) {
      yield put(
        fetchQuestionsFail(
          'There was an error trying to get the questions. Please refresh the page!'
        )
      );
    }
  }
  
  function* cancelFetchQuiz(fetchQuiz) {
    while (true) {
      yield take(cancelFetchQuestions.type);
      yield cancel(fetchQuiz);
    }
  }
  
  export default function* startGameSaga() {
    while (true) {
      yield take(startGame.type);
      const fetch = yield fork(fetchQuestionSaga);
      yield fork(cancelFetchQuiz, fetch);
    }
  }