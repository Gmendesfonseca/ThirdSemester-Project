import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { ChatType } from "../../services/chats";
import { FriendsType } from "../../services/friends";
import { RecentChat } from "../HomeComponents/RecentChat/RecentChat";
import { useEffect, useState } from "react";
import faker from "faker";
import { ThemeProvider } from "@emotion/react";
import { blue } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import { Home } from "@mui/icons-material";
import { darkTheme } from "../../Theme";
import "../../pages/Chat/Chat.css";

export default function ChatsSide() {
  const [chats, setChat] = useState<ChatType[]>([]);
  const [friends, setFriends] = useState<FriendsType[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fakeChats = Array.from({ length: 20 }, () => ({
      id: faker.datatype.uuid(),
      name: faker.name.findName(),
      description: faker.lorem.sentence(),
      icon: faker.image.avatar(),
      messages: Array.from({ length: 1 }, () => ({
        id: faker.datatype.uuid(),
        text: faker.lorem.sentence(),
        creatorId: faker.datatype.number(),
        created_at: faker.date.recent().toString(),
      })),
      updated_at: faker.date.recent().toString(),
      created_at: faker.date.recent().toString(),
    }));
    setChat(fakeChats);
  }, []);

  useEffect(() => {
    const fakeOnlineFriends = Array.from({ length: 20 }, () => ({
      name: faker.name.findName(),
      src: faker.image.avatar(),
      online: faker.datatype.boolean(),
    }));
    setFriends(fakeOnlineFriends);
  }, []);
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Box className="chatsSide" bgcolor={"background.paper"}>
          <ListItem disablePadding={location.pathname.includes("home")}>
            <ListItemButton
              onClick={() => navigate(`/home`)}
              style={{
                backgroundColor: location.pathname.includes("home")
                  ? blue[50]
                  : "default",
              }}
            >
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <Box
            bgcolor={"background.paper"}
            sx={{
              display: { lg: "block" },
              overflowY: "auto",
              height: "97.5%",
              "&::-webkit-scrollbar": {
                height: "8px",
                width: "0px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "rgba(0,0,0,.1)",
              },
            }}
          >
            <List className="chatsList">
              {chats.map(
                (chat, index) =>
                  chat && (
                    <li key={index}>
                      <RecentChat
                        id={index}
                        avatar={friends[index]}
                        data={chat}
                      />
                    </li>
                  )
              )}
            </List>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
}
