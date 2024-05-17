import { ListItemText, Typography } from '@mui/material';
import React from 'react';
import { RecentChatType } from '../../../services/chats';

interface RecentChatProps {
  data: RecentChatType;
}

export function RecentChat(id, { data }: RecentChatProps) {
  return (
    <>
      <ListItemText
        id={'chat-' + id}
        primary={data.name}
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {data.to}
            </Typography>
            {data.message}
          </React.Fragment>
        }
      />
    </>
  );
}
