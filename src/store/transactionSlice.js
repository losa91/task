import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    addTransactions: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { addTransactions } = transactionSlice.actions;

export default transactionSlice.reducer;
