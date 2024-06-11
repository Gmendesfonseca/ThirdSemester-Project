import { Box, createTheme, Stack, ThemeProvider } from '@mui/material';
import { Navbar } from '../../components/HomeComponents/NavBar/Navbar';
import ChatsSide from '../../components/Chats/ChatSide/ChatsSide';
import Chat from '../../components/Chats/Chat';

export function ChatView() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Navbar />
        <Stack direction="row" spacing={0} height="100%">
          <ChatsSide />
          <Chat />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}
