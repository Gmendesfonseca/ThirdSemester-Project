import {
  Box,
  PaletteMode,
  Stack,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from '@mui/material';
import { useState } from 'react';
import { Navbar } from '../../components/HomeComponents/NavBar/Navbar';
import { SidebarRegister } from '../../components/Register/SidebarRegister';

export function RegisterMenu() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: light)');

  const [mode, setMode] = useState<PaletteMode>(
    prefersDarkMode ? 'dark' : 'light',
  );

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <SidebarRegister mode={mode} setMode={setMode} />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}
