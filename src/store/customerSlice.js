import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    addCustomers: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { addCustomers } = customerSlice.actions;

export default customerSlice.reducer;
