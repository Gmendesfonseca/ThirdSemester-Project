import { SidebarMenu } from '../../components/HomeComponents/Sidebar/SidebarHome';
import { Feed } from '../../components/HomeComponents/Feed/Feed';
import { Rightbar } from '../../components/HomeComponents/Rightbar/Rightbar';
import { Navbar } from '../../components/HomeComponents/NavBar/Navbar';
// import { Add } from "../../components/HomeComponents/Add/Add";
import {
  Box,
  createTheme,
  PaletteMode,
  Stack,
  ThemeProvider,
  useMediaQuery,
} from '@mui/material';
import React, { useState } from 'react';
import { Add2 } from '../../components/HomeComponents/Add/Add2';
export function Home() {
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
      <Box
        bgcolor={'background.default'}
        color={'text.primary'}
        sx={{ padding: '0px', height: '100%' }}
      >
        <Navbar />
        <Stack direction="row" spacing={0} height="100%">
          <SidebarMenu mode={mode} setMode={setMode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add2 />
      </Box>
    </ThemeProvider>
  );
}
