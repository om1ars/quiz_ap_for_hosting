import { combineReducers } from "redux";
import opnSlice from "./opnSlice";
import GoogleSlice from "./GoogleSlice";
import UserSlice from "./UserSlice";
import gameState from "./gameState.slice";
import quiz from "./quiz.slice";
import liked from "./likedSlice";
import disliked from "./dislikedSlice";

export default combineReducers({
  opnSlice,
  GoogleSlice,
  UserSlice,
  gameState,
  quiz,
  liked,
  disliked,
});
