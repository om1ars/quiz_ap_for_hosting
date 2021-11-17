import { all, delay, put, race, take } from "@redux-saga/core/effects";
import { finishGame } from "../../features/gameState.slice";
import { answerQuestion, fetchQuestionSuccess, nextQuestion } from "../../features/quiz.slice";

function* answersSaga() {
    for (let i = 0; i < 10; i++) {
      yield take(answerQuestion.type);
      yield put(nextQuestion());
    }
  }
  
  export default function* gameSaga() {
    while (true) {
      yield take(fetchQuestionSuccess.type);
  
      yield race({
        delay: delay(60000),
        done: answersSaga(),
      });
  
      yield put(finishGame());
    }
  }
  