import React, {
  //useEffect,
  useState,
} from 'react';
import { Box } from '@mui/system';
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
} from '@mui/material';
import { OnlineAvatar } from '../Avatar/Avatar';
import { RecentChat } from '../RecentChat/RecentChat';
import {} from '../../../services/chats/request';
import {
  RecentChatType, //, getRecentChat
} from '../../../services/chats/index';
import {
  //getOnlineFriends,
  OnlineFriendsType,
} from '../../../services/friends/index';

export const Rightbar = () => {
  const [
    recentChats, //setRecentChat
  ] = useState<RecentChatType[]>([]);
  const [
    onlineFriends, //setOnlineFriends
  ] = useState<OnlineFriendsType[]>([]);

  // useEffect(() => {
  //   getRecentChat().then(setRecentChat);
  // }, []);

  // useEffect(() => {
  //   getOnlineFriends().then(setOnlineFriends);
  // }, []);

  return (
    <Box flex={2} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Box position="fixed">
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={8} sx={{ justifyContent: 'start' }}>
          {onlineFriends.map((onlineFriends) => (
            <OnlineAvatar data={onlineFriends} />
          ))}
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2}>
          Latest Conversations
        </Typography>
        <Divider />
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        >
          {recentChats.map((recentChat, index) => (
            <RecentChat id={index} data={recentChat} />
          ))}
        </List>
      </Box>
    </Box>
  );
};
