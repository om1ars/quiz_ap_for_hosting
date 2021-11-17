import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  disliked: [],
};

const dislikedSlice = createSlice({
  name: "disliked",
  initialState,
  reducers: {
    setDisliked(state, action) {
      state.disliked.push(...action.payload);
    },
  },
});

export const {setDisliked} = dislikedSlice.actions;
export default dislikedSlice.reducer;
