import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  liked: [],
};



const likedSlice = createSlice({
  name: "liked",
  initialState,
  reducers: {
    setLiked(state, action) {
      state.liked.push(...action.payload);
    },
  },
});

export const { setLiked } = likedSlice.actions;
export default likedSlice.reducer;
