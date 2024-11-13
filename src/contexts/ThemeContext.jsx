// createContext, useState 등을 사용하기 위해 use client 필요
"use client";
import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // 테마 변수
  const [theme, setTheme] = useState("light");

  // 테마 변경 함수
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // 테마 변경 시 body class name 변경
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  // 컨텍스트의 Provider 에 theme 와 toggleTheme 전역으로 전송
  return (
    <ThemeContext.Provider value={ {theme, toggleTheme } }>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
