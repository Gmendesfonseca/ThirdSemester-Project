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
import { InModalDelete } from '../../Modal/DeleteModal';
import InMenu from '../../Menu/Menu';
import { CommentType } from '../../../services/comment/types';

export const Comment = (comment: CommentType) => {
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
    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
      <Container sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar src={comment.authorImage} />
        <ListItemText
          sx={{ paddingX: '10px' }}
          primary={comment.authorName}
          secondary={
            <React.Fragment>
              <Typography component="p" variant="body2" color="text.primary">
                {comment.text}
              </Typography>
            </React.Fragment>
          }
        />
      </Container>
      <IconButton
        aria-label="like comment"
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
          id={comment.id}
          title="comentário"
          open={open}
          onOpen={handleDelete}
          onClose={handleCloseDelete}
        />
      </IconButton>
    </Box>
  );
};
