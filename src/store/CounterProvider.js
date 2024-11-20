"use client";

import { Provider } from "react-redux";
import { store } from "./store";

// CounterProvider 를 통해 전역으로 변수 전송
// store 로 전송
export default function CounterProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
