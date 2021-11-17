import createSagaMiddleware from "@redux-saga/core";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import GoogleSlice from "../features/GoogleSlice";
import rootReducer from "../features/reducers";
import  useReducer  from "../features/UserSlice";
import rootSaga from "../saga/saga";

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({thunk: false}).concat(sagaMiddleware)
});
sagaMiddleware.run(rootSaga)