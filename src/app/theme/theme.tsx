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
import getTypography from './typography';

type ThemeProps = {
  font: string;
  mode: PaletteMode;
  children: ReactNode;
};

const createThemeMode = (mode: PaletteMode, font: string) =>
  createTheme({
    palette: mode === 'light' ? lightPalette : darkPalette,
    typography: getTypography(font),
  });

export const Theme = ({ font, mode, children }: ThemeProps) => (
  <ThemeProvider theme={createThemeMode(mode, font)}>
    <GlobalStyles styles={globalStyles} />
    <CssBaseline />
    {children}
  </ThemeProvider>
);

export default Theme;
