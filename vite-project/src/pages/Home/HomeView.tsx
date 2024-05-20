import { SidebarMenu } from '../../components/HomeComponents/Sidebar/SidebarHome';
import { Feed } from '../../components/HomeComponents/Feed/Feed';
import { Rightbar } from '../../components/HomeComponents/Rightbar/Rightbar';
import { Navbar } from '../../components/HomeComponents/NavBar/Navbar';
import { useLocation } from 'react-router-dom';
import { Add } from '../../components/HomeComponents/Add/Add';
import {
  Box,
  createTheme,
  PaletteMode,
  Stack,
  ThemeProvider,
  useMediaQuery,
} from '@mui/material';
import React, { useState } from 'react';
import { Chat } from '../Chat/ChatView';
import ListStudent from '../../components/Register/Lists/ListStudent';
import ListProfessor from '../../components/Register/Lists/ListProfessor';
import ListBranch from '../../components/Register/Lists/ListBrach';
export function Home() {
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
          <SidebarMenu mode={mode} setMode={setMode} />
          <Box flex={4}>{currentPath === '/home' && <Feed />}</Box>
          <Box flex={2}>{currentPath === '/home' && <Rightbar />}</Box>
          <Box flex={6}>
            {currentPath === '/branch/list' && <ListBranch />}
            {currentPath === '/professor/list' && <ListProfessor />}
            {currentPath === '/student/list' && <ListStudent />}
            {currentPath === '/friends' && <Chat />}
            {currentPath === '/groups' && <Chat />}
            {currentPath === '/marketplace' && <Chat />}
          </Box>
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}
