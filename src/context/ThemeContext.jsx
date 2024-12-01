import React, { createContext } from "react";
import useLocalStroage from "../utils/useLocalStorage";

export const ThemeContext = createContext(null);

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStroage("theme", null);
  const toggleTheme = () => {
    setTheme(theme === "dark" ? null : "dark");
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
