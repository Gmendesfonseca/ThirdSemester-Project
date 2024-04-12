import { Sidebar } from './components/MainPage/Sidebar/Sidebar';
import { Feed } from './components/MainPage/Feed/Feed';
import { Rightbar } from './components/MainPage/Rightbar/Rightbar';
import { Navbar } from './components/MainPage/NavBar/Navbar';
import { Add } from './components/MainPage/Add/Add';
import {
  Box,
  createTheme,
  PaletteMode,
  Stack,
  ThemeProvider,
  useMediaQuery,
} from '@mui/material';
import React, { useState } from 'react';
import SignInSide from './components/loginPage/SignInSide';

type View = 'login' | 'home' | 'profile' | 'register' | 'settings' | 'chat';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: light)');
  const [mode, setMode] = useState<PaletteMode>(
    prefersDarkMode ? 'light' : 'dark',
  );

  const [view, setView] = useState<View>('login');

  const renderView = () => {
    switch (view) {
      case 'home':
        return <HomeComponent />;
      case 'profile':
        return <ProfileComponent />;
      case 'register':
        return <RegisterComponent />;
      case 'settings':
        return <SettingsComponent />;
      case 'chat':
        return <ChatComponent />;
      default:
        return <HomeComponent />;
    }
  };

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  function HomeComponent() {
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
    );
  }

  function ProfileComponent() {
    return <Box>About Page</Box>;
  }

  function RegisterComponent() {
    return <Box>Contact Page</Box>;
  }

  function SettingsComponent() {
    return <Box>About Page</Box>;
  }

  function ChatComponent() {
    return <Box>Contact Page</Box>;
  }

  return (
    <div>
      <SignInSide />
      <button onClick={() => setView('home')}>Home</button>
      <button onClick={() => setView('profile')}>Profile</button>
      <button>Register</button>
      <button onClick={() => setView('settings')}>Setings</button>
      <button onClick={() => setView('chat')}>Chat</button>
      {renderView()}
    </div>
  );
}
export default App;
