import { Box, Stack, ThemeProvider } from "@mui/material";
import { Navbar } from "../../components/HomeComponents/NavBar/Navbar";
import { Chat2 } from "../../components/Chats/Chat2";
import ChatsSide from "../../components/ChatSide/ChatsSide";
import { darkTheme } from "../../Themes";
import "./Chat.css";

export function ChatView() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        className="ChatPage"
        bgcolor={"background.default"}
        color={"text.primary"}
      >
        <Navbar navAct="InnerLink" />
        <Stack
          spacing={0}
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          <ChatsSide />
          <Chat2
            data={{
              id: "",
              name: "",
              description: "",
              messages: [],
              image: "",
              updated_at: "",
            }}
          />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}
