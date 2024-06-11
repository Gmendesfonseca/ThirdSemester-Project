import { useEffect, useState } from 'react';
import faker from 'faker';
import { CommentType } from '../../services/comment/types';
import { Message } from '../Message/Message';
import {
  Box,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
} from '@mui/material';
import { Send } from '@mui/icons-material';

export default function Chat() {
  const [messages, setMessages] = useState<CommentType[]>([]);
  const [message, setMessage] = useState('');

  const handleSend = () => {
    // onSend(message);
    setMessage('');
  };
  useEffect(() => {
    const fakeMessages = Array.from({ length: 8 }).map(() => ({
      id: faker.datatype.uuid(),
      author: Math.random() < 0.5 ? 'Me' : 'Friend',
      text: faker.lorem.sentence(),
      creatorId: faker.datatype.number(),
      created_at: faker.date.recent().toString(),
    }));
    setMessages(fakeMessages);
  }, []);

  return (
    <Stack
      p={2}
      sx={{
        flex: { sm: 4, lg: 5.5, xl: 3 },
        gap: 2,
      }}
      height="100%"
      width="100%"
    >
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1 },
        }}
        noValidate
        autoComplete="off"
        width={'100%'}
      >
        <TextField
          id="outlined-basic"
          label="Message"
          variant="outlined"
          value={message}
          sx={{ width: '100%' }}
          onChange={(e) => setMessage(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleSend}>
                  <Send />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Stack>
  );
}
