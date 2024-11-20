"use client";

import { useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";

// 카운트 변경
export default function CounterButton() {
  // dispatch 를 통해 일정 부분만 업데이트
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>개수 증가</button>
      <button onClick={() => dispatch(decrement())}>개수 감소</button>
    </div>
  );
}
