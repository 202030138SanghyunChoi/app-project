import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/features/counter/counterSlice.js";

export const store = configureStore({
  // Reducer 등록
  reducer: {
    counter: counterReducer,
  },
});
