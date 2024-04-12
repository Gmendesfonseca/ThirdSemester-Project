import { Sidebar } from './components/Sidebar/Sidebar'
import { Feed } from './components/Feed/Feed'
import { Rightbar } from './components/Rightbar/Rightbar'
import { Box, createTheme, PaletteMode, Stack, ThemeProvider, useMediaQuery } from '@mui/material'
import { Navbar } from './components/NavBar/Navbar'
import { Add } from './components/Add/Add'
import React, { useState } from 'react'

type View = 'login' | 'home' | 'profile' | 'register' | 'settings' | 'chat' | 'bookmarks';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: light)')
  const [mode, setMode] = useState<PaletteMode>(prefersDarkMode ? 'dark' : 'light')

  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar mode={mode} setMode={setMode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  )
}

export default App
