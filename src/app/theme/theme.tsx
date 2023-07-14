import type { ReactNode } from 'react';

import {
  CssBaseline,
  GlobalStyles,
  PaletteMode,
  ThemeProvider,
  createTheme,
} from '@mui/material';

import globalStyles from './globalStyles';
import { darkPalette, lightPalette } from './palettes';
import typography from './typography';

type ThemeProps = {
  mode: PaletteMode;
  children: ReactNode;
};

const createThemeMode = (mode: PaletteMode) =>
  createTheme({
    palette: mode === 'light' ? lightPalette : darkPalette,
    typography: typography,
  });

export const Theme = ({ mode, children }: ThemeProps) => (
  <ThemeProvider theme={createThemeMode(mode)}>
    <GlobalStyles styles={globalStyles} />
    <CssBaseline />
    {children}
  </ThemeProvider>
);

export default Theme;
