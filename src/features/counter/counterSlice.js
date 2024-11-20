import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  // 식별자
  name: "counter",
  // 초기화
  initialState: {
    value: 0,
  },
  // reducers - action 정보 설정
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

// actions 로 명시
export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
