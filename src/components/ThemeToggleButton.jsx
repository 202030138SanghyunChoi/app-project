"use client";

import { useContext } from "react";
import ThemeContext from "@/contexts/ThemeContext";

const ThemeToggleButton = () => {
  // 컨텍스트 전역 변수 사용
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? "다크 모드로 바꾸기" : "라이트 모드로 바꾸기"}
    </button>
  );
};

export default ThemeToggleButton;
