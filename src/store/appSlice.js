import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleIsLoading: (state,action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { toggleIsLoading } = appSlice.actions;

export default appSlice.reducer;
