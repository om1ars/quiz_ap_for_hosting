import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isFormOpen: false,
};

const opnSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setFormOpen: (state) => {
      state.isFormOpen = true;
    },
    setFormClose: (state) => {
      state.isFormOpen = false;
    },
  },
});

export const {} = opnSlice.actions;
export default opnSlice.reducer;
