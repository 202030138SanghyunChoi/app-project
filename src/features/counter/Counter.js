"use client";

import { useSelector } from "react-redux";

// 카운트 출력
export default function Counter() {
  const count = useSelector((state) => state.counter.value);

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}
