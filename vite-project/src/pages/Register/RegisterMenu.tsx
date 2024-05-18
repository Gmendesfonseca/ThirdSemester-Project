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
import { SidebarRegister } from '../../components/Register/AddMembers/SidebarRegister';
import { useLocation } from 'react-router-dom';
import ListBranch from '../../components/MembersList/ListBrach';
import ListProfessor from '../../components/MembersList/ListProfessor';
import ListStudent from '../../components/MembersList/ListStudent';

export function RegisterMenu() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: light)');
  const currentPath = useLocation().pathname;

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
          <Box flex={6}>
            {currentPath === '/branch/list' && <ListBranch />}
            {currentPath === '/professor/list' && <ListProfessor />}
            {currentPath === '/student/list' && <ListStudent />}
          </Box>
        </Stack>
      </Box>
    </ThemeProvider>
  );
}
