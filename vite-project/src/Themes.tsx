import { createTheme } from '@mui/material';
export const theme = createTheme({
  palette: {
    primary: {
      main: '#1760a5',
      light: 'skyblue',
    },
    secondary: {
      main: '#15c630',
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    text: {
      primary: '#fff',
      secondary: '#000',
    },
    background: {
      default: '#011824',
      paper: '#112733',
    },
  },
});
