'use client';

import { ReactNode, createContext, useContext } from 'react';
import { ThemeType, theme } from '../styles/theme';

const ThemeContext = createContext<ThemeType>(theme);

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
