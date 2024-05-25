import { useEffect, useState } from "react";
import { Box } from "@mui/system";
import {
  AvatarGroup,
  Divider,
  //ImageList,
  //ImageListItem,
  List,
  // ListItem,
  // ListItemAvatar,
  // ListItemText,
  Typography,
} from "@mui/material";
import { AvatarComponent } from "../Avatar/Avatar";
import { RecentChat } from "../RecentChat/RecentChat";
import {} from "../../../services/chats/request";
import {
  RecentChatType, //, getRecentChat
} from "../../../services/chats/index";
import {
  //getOnlineFriends,
  OnlineFriendsType,
} from "../../../services/friends/index";
import faker from "faker";

export const Rightbar = () => {
  const [recentChats, setRecentChat] = useState<RecentChatType[]>([]);
  const [onlineFriends, setOnlineFriends] = useState<OnlineFriendsType[]>([]);

  useEffect(() => {
    // Replace this with actual API call
    const fakeRecentChats = Array.from({ length: 20 }, () => ({
      id: faker.datatype.uuid(),
      name: faker.name.findName(),
      message: faker.lorem.sentence(),
    }));
    setRecentChat(fakeRecentChats);
  }, []);

  useEffect(() => {
    // Replace this with actual API call
    const fakeOnlineFriends = Array.from({ length: 20 }, () => ({
      name: faker.name.findName(),
      src: faker.image.avatar(),
      online: faker.datatype.boolean(),
    }));
    setOnlineFriends(fakeOnlineFriends);
  }, []);

  return (
    <Box flex={1} pt={10} pr={10} sx={{ display: { xs: "none", lg: "block" } }}>
      <Box position="fixed">
        <Typography variant="h6" fontWeight={100}>
          Conexões
        </Typography>
        <Box
          sx={{
            overflowY: "hidden",
            overflowX: "scroll",
            maxWidth: "400px",
            "&::-webkit-scrollbar": {
              height: "8px",
              width: "8px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "rgba(0,0,0,.1)",
            },
          }}
        >
          <AvatarGroup
            max={onlineFriends.length}
            sx={{
              justifyContent: "start",
              height: "100%",
              width: "100%",
              maxWidth: 360,
              bgcolor: "background.paper",
            }}
          >
            {onlineFriends.map(
              (onlineFriends, index) =>
                onlineFriends && (
                  <AvatarComponent key={index} data={onlineFriends} />
                )
            )}
          </AvatarGroup>
        </Box>
        <Typography variant="h6" fontWeight={100} mt={2}>
          Conversas
        </Typography>
        <Divider />
        <Box
          sx={{
            display: { lg: "block" },
            overflowY: "auto",
            maxHeight: { md: "65vh", xl: "75vh" },
          }}
        >
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            {recentChats.map(
              (recentChat, index) =>
                recentChat && (
                  <RecentChat
                    key={index}
                    id={index}
                    avatar={onlineFriends[index]}
                    data={recentChat}
                  />
                )
            )}
          </List>
        </Box>
      </Box>
    </Box>
  );
};
