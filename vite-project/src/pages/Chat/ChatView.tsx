import { Box, createTheme, Stack, ThemeProvider } from '@mui/material';
import { Navbar } from '../../components/HomeComponents/NavBar/Navbar';
import Chat from '../../components/Chats/Chat';
import ChatsSide from '../../components/ChatSide/ChatsSide';

export function ChatView() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Navbar navAct="InnerLink" />
        <Stack direction="row" spacing={0} height="100%">
          <ChatsSide />
          <Chat />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}
