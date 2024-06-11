import { Box, List, createTheme } from '@mui/material';
import { ChatType } from '../../services/chats';
import { FriendsType } from '../../services/friends';
import { RecentChat } from '../HomeComponents/RecentChat/RecentChat';
import { useEffect, useState } from 'react';
import faker from 'faker';
import { ThemeProvider } from '@emotion/react';

export default function ChatsSide() {
  const [chats, setChat] = useState<ChatType[]>([]);
  const [friends, setFriends] = useState<FriendsType[]>([]);

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

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
    <ThemeProvider theme={darkTheme}>
      <Box
        sx={{ display: { xs: 'none', lg: 'block' }, flex: { lg: 2, xl: 2 } }}
        height="100%"
        width="100%"
      >
        <Box position="fixed" height="80%" width="22%">
          <Box
            sx={{
              display: { lg: 'block' },
              overflowY: 'auto',
              height: '97.5%',
              '&::-webkit-scrollbar': {
                height: '8px',
                width: '0px',
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: 'rgba(0,0,0,.1)',
              },
            }}
          >
            <List
              sx={{
                width: '100%',
                maxWidth: 360,
                maxHeight: '100%',
                bgcolor: 'background.paper',
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
                  ),
              )}
            </List>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
