import type { ReactNode } from 'react';

import {
  CssBaseline,
  GlobalStyles,
  PaletteMode,
  ThemeProvider,
  createTheme,
} from '@mui/material';

import { useThemeContext } from '../useThemeContext';
import globalStyles from './globalStyles';
import { darkPalette, lightPalette } from './palettes';
import getTypography from './typography';

const createThemeMode = (mode: PaletteMode, font: string) => {
  const isDarkMode = mode === 'dark';

  return createTheme({
    palette: isDarkMode ? darkPalette : lightPalette,
    typography: getTypography(font),
    components: {
      MuiButton: {
        styleOverrides: {
          text: {
            color: isDarkMode ? 'white' : 'black',
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            backgroundColor: isDarkMode ? '#1F1F1F' : '#F4F4F4',
          },
        },
      },
      MuiMenu: {
        styleOverrides: {
          root: {
            '& .MuiPaper-root': {
              borderRadius: '1rem',
              backgroundColor: isDarkMode ? '#1F1F1F' : '#FFFFFF',
              minWidth: '10rem',
              boxShadow: `0px 5px 250px 0px ${
                isDarkMode ? '#A445ED' : 'unset'
              }`,
            },
          },
        },
      },
    },
  });
};

export const Theme = ({ children }: { children: ReactNode }) => {
  const { mode, font } = useThemeContext();

  return (
    <ThemeProvider theme={createThemeMode(mode, font)}>
      <GlobalStyles styles={globalStyles} />
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
