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

const createThemeMode = (mode: PaletteMode, font: string) =>
  createTheme({
    palette: mode === 'light' ? lightPalette : darkPalette,
    typography: getTypography(font),
    components: {
      MuiButton: {
        styleOverrides: {
          text: {
            color: 'black',
          },
        },
      },
    },
  });

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
