import React, { useState, useContext, useCallback } from 'react';
import { LightTheme, DarkTheme } from '../../utils/theme';

const ThemeContext = React.createContext(null);

function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(`Can't use "useTheme" without an ThemeProvider!`);
  }
  return context;
}

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(LightTheme);

  const switchTheme = useCallback(() => {
    setTheme(() => (theme === LightTheme ? DarkTheme : LightTheme));
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { useTheme };
export default ThemeProvider;
