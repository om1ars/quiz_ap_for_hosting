import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user.push(action.payload)
    },
    removeUser(state, action) {
      state.user = null;
    },
  },
});

export const { setUser, removeUser } = UserSlice.actions;
export const selectUser = (state) => state.user;

export default UserSlice.reducer;
