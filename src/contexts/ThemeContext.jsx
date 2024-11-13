// createContext, useState 등을 사용하기 위해 use client 필요
"use client";
import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={({ theme }, { toggleTheme })}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
