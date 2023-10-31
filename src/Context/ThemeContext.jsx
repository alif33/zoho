import React, { createContext, useState } from 'react';
import { lightTheme, darkTheme } from '../Constents/color';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  };

  const theme = !isDarkMode ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}