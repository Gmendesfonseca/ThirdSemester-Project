import { Favorite, FavoriteBorder, MoreVert } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Checkbox,
  Container,
  IconButton,
  ListItemText,
  MenuItem,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import InMenu from '../../Menu/Menu';
import { InModalDelete } from '../../Modal/DeleteModal';

export const Message = ({ message }) => {
  const [liked, setLiked] = useState(false);
  const handleLike = () => setLiked(!liked);
  const [open, setOpen] = useState(false);

  const handleDelete = () => {
    setOpen(true);
  };

  const handleCloseDelete = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        height: '100%',
        marginBottom: 2,
      }}
    >
      <Container
        sx={{
          display: 'flex',
          alignContent: message.author === 'Me' ? 'flex-end' : 'flex-start',
        }}
      >
        <Avatar />
        <ListItemText
          sx={{ paddingX: '10px' }}
          primary={message.author + ':'}
          secondary={
            <React.Fragment>
              <Typography component="p" variant="body2" color="text.primary">
                {message.text}
              </Typography>
            </React.Fragment>
          }
        />
      </Container>
      <IconButton
        aria-label="like message"
        onClick={handleLike}
        sx={{ marginLeft: 'auto' }}
      >
        <Checkbox
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite sx={{ color: 'red' }} />}
          checked={liked}
        />
      </IconButton>
      <IconButton aria-label="settings">
        <InMenu
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          renderAnchor={({ openMenu }) => (
            <IconButton
              size="small"
              onClick={(ev) => {
                ev.stopPropagation();
                openMenu(ev);
              }}
            >
              <MoreVert />
            </IconButton>
          )}
        >
          <MenuItem id="delete" onClick={() => handleDelete()}>
            Deletar
          </MenuItem>
        </InMenu>
        <InModalDelete
          id={message.id}
          title="mensagem"
          open={open}
          onOpen={handleDelete}
          onClose={handleCloseDelete}
        />
      </IconButton>
    </Box>
  );
};
