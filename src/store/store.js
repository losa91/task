import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import customerReducer from "./customerSlice";
import transactionReducer from "./transactionSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    customer: customerReducer,
    transaction: transactionReducer,
  },
});
