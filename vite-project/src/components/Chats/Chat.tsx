import { useEffect, useState } from 'react';
import faker from 'faker';
import { CommentType } from '../../services/comment/types';
import { Message } from '../Message/Message';
import { Stack } from '@mui/material';

export default function Chat() {
  const [messages, setMessages] = useState<CommentType[]>([]);

  useEffect(() => {
    const fakeMessages = Array.from({ length: 5 }).map(() => ({
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
        flex: { sm: 4, lg: 4, xl: 3 },
        gap: 2,
      }}
      height="100%"
    >
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </Stack>
  );
}
