import { configureStore } from "@reduxjs/toolkit";
import calculatorSlice from "./calculatorSlice";

const store = configureStore({
  reducer: {
    calculator: calculatorSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch 

export default store