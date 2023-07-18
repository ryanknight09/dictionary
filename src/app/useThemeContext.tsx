import { PaletteMode } from '@mui/material';
import { ReactNode, createContext, useContext, useState } from 'react';

export type FontOptions = 'Lora' | 'Inter' | 'Inconsolata';

type ThemeContext = {
  mode: PaletteMode;
  font: string;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  setFont: React.Dispatch<React.SetStateAction<FontOptions>>;
};

const ThemeContext = createContext<ThemeContext>({
  mode: 'light',
  font: 'Lora',
  setIsDarkMode: () => null,
  setFont: () => null,
});

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [font, setFont] = useState<FontOptions>('Lora');

  const mode = isDarkMode ? 'dark' : 'light';

  return (
    <ThemeContext.Provider value={{ mode, font, setIsDarkMode, setFont }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme can only be used in an ThemeContextProvider');
  }
  return context;
};
