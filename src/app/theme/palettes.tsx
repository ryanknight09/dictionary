import type { PaletteOptions } from '@mui/material';

const lightPalette: PaletteOptions = {
  mode: 'light',
  primary: {
    main: '#A445ED',
  },
  background: {
    default: '#FFFFFF',
  },
  text: {
    primary: '#2D2D2D',
    secondary: '#757575',
  },
  secondary: {
    main: '#8F19E8',
  },
  error: {
    main: '#FF5252',
  },
};

const darkPalette: PaletteOptions = {
  mode: 'dark',
  primary: {
    main: '#A445ED',
  },
  background: {
    default: '#050505',
    paper: '#1F1F1F',
  },
  text: {
    primary: '#E9E9E9',
    secondary: '#757575',
  },
  secondary: {
    main: '#8F19E8',
  },
  error: {
    main: '#FF5252',
  },
};

export { darkPalette, lightPalette };
