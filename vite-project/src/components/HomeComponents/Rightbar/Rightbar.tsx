import { useEffect, useState } from "react";
import { Box } from "@mui/system";
import {
  AvatarGroup,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
} from "@mui/material";
import { AvatarComponent } from "../../Avatar/Avatar";
import { RecentChat } from "../RecentChat/RecentChat";
import {
  ChatType,
  // getChat
} from "../../../services/chats/index";
import faker from "faker";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { darkTheme } from "../../../Themes";
import { blue } from "@mui/material/colors";
import { Chat, Groups } from "@mui/icons-material";
import { useSession } from "../../../context/SessionContext";
import { MessageType } from "../../../services/messages";
import { FriendsType } from "../../../services/friends";

// interface ChatProps {
//   data: ChatType;
// }

export const Rightbar = () => {
  const { user } = useSession();
  const [chats, setChat] = useState<ChatType[]>(user?.chats || []);
  const [friends, setFriends] = useState<FriendsType[]>(user?.friends || []);
  const navigate = useNavigate();
  // const {id} = useSession();

  // useEffect(() => {
  //   getChat().then((response) => {
  //     setChat(response);
  //   });
  // }, []);

  // useEffect(() => {
  //   getFriends().then((response) => {
  //     setFriends(response);
  //   });
  // }, []);

  useEffect(() => {
    const fakeChats = Array.from({ length: 20 }, () => ({
      id: faker.datatype.uuid(),
      name: faker.name.findName(),
      description: faker.lorem.sentence(),
      messages: Array.from({ length: 1 }, () => ({
        id: faker.datatype.uuid(),
        text: faker.lorem.sentence(),
        creatorName: faker.name.findName(),
        creatorImage: faker.image.avatar(),
        created_at: faker.date.recent().toString(),
      })) as MessageType[],
      image: faker.image.avatar(),
      updated_at: faker.date.recent().toString(),
      // created_at: faker.date.recent().toString(),
    }));
    user? null : setChat(fakeChats);
  }, []);

  useEffect(() => {
    const fakeOnlineFriends = Array.from({ length: 20 }, () => ({
      name: faker.name.findName(),
      image: faker.image.avatar(),
      online: faker.datatype.boolean(),
    }));
    user? null : setFriends(fakeOnlineFriends);
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        pt={2}
        pl={2}
        sx={{ display: { xs: "none", lg: "block" }, flex: { lg: 2, xl: 1 } }}
        // height="100%"
        // width="100%"
      >
        <Box position="fixed" height="80%" width="22%">
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => navigate(`/friends`)}
              sx={{
                borderRadius: "10px",
                marginBottom: "10px",
                bgcolor: "background.paper",
                ":hover": { backgroundColor: "#304452" },
              }}
            >
              <ListItemIcon>
                <Groups />
              </ListItemIcon>
              <Typography variant="h6" fontWeight={100}>
                Conexões
              </Typography>
            </ListItemButton>
          </ListItem>
          <Box
            sx={{
              paddingLeft: "8px",
              overflowY: "hidden",
              overflowX: "scroll",
              maxWidth: "100%",
              "&::-webkit-scrollbar": {
                height: "0px",
                width: "8px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "rgba(0,0,0,.1)",
              },
            }}
          >
            <AvatarGroup
              max={friends.length}
              sx={{
                justifyContent: "start",
                height: "100%",
                width: "100%",
                bgcolor: "background.paper",
                borderRadius: "10px",
              }}
            >
              {friends.map(
                (friends, index) =>
                  friends && <AvatarComponent key={index} data={friends} />
              )}
            </AvatarGroup>
          </Box>
          <Typography variant="h6" fontWeight={100} my={2}>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  borderRadius: "10px",
                  bgcolor: "background.paper",
                  ":hover": { backgroundColor: "#304452" },
                }}
                onClick={() => navigate(`/chat`)}
                style={{
                  backgroundColor: location.pathname.includes("chat")
                    ? blue[50]
                    : "default",
                }}
              >
                <ListItemIcon>
                  <Chat />
                </ListItemIcon>
                <Typography variant="h6" fontWeight={100}>
                  Chat
                </Typography>
              </ListItemButton>
            </ListItem>
          </Typography>
          <Divider />
          <Box
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
            <List
              sx={{
                borderRadius: "10px",
                width: "100%",
                maxWidth: "auto",
                maxHeight: "auto",
                bgcolor: "background.paper",
              }}
            >
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
      </Box>
    </ThemeProvider>
  );
};
