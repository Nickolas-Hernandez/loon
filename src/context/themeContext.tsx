import  React, { createContext, useState } from 'react';
import { Theme, ThemeContextType } from '@/interfaces/themeContext';

const ThemeContext = createContext<ThemeContextType>({ theme: 'light', toggleTheme: () => {} });

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [ theme, setTheme ] = useState<Theme>('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      { children }
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
