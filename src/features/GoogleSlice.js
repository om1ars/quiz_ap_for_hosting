import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const GoogleSlice = createSlice({
  name: "googleUser",
  initialState,
  reducers: {
    setGoogleUser: (state, action) => {
      state.user = action.payload.user;
    },
  },
});

export const { setGoogleUser } = GoogleSlice.actions;
export default GoogleSlice.reducer;
