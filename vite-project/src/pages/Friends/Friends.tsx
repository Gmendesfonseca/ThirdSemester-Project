import { blue } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import {
  Box,
  createTheme,
  PaletteMode,
  Stack,
  Button,
  ThemeProvider,
  useMediaQuery,
} from '@mui/material';
import { SidebarMenu } from '../../components/HomeComponents/Sidebar/SidebarHome';
import { Navbar } from '../../components/HomeComponents/NavBar/Navbar';

export function Friends() {
  const navigate = useNavigate();
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
          <SidebarMenu mode={mode} setMode={setMode} />
          <Box flex={6}>
            <Button
              onClick={() => navigate('/home')}
              style={{ color: blue[500] }}
              onMouseOver={(event) => {
                event.currentTarget.style.color = blue[900];
                event.currentTarget.style.textDecoration = 'underline';
              }}
              onMouseOut={(event) => {
                event.currentTarget.style.color = blue[500];
                event.currentTarget.style.textDecoration = 'none';
              }}
            >
              Página Inicial
            </Button>
          </Box>
        </Stack>
      </Box>
    </ThemeProvider>
  );
}
