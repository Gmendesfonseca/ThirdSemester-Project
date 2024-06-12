import { useState } from 'react';
import { Box } from '@mui/system';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import {
  ChatBubble,
  ChatBubbleOutline,
  Favorite,
  FavoriteBorder,
  MoreVert,
  Send,
} from '@mui/icons-material';
import { PostType } from '../../../services/posts';
import { Checkbox, InputAdornment, MenuItem, TextField } from '@mui/material';
import InMenu from '../../Menu/Menu';
import { InModalDelete } from '../../Modal/DeleteModal';
import { Comment } from './Comment';
import { CommentType } from '../../../services/comment/types';
import { useSession } from '../../../context/SessionContext';

interface PostProps {
  data: PostType;
}

export const Post = ({ data }: PostProps) => {
  const [liked, setLiked] = useState(data.liked);
  const [likes, setLikes] = useState(data.likes);
  const [comments, setComments] = useState<CommentType[]>(data.comments);
  const [showComments, setShowComments] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const { user } = useSession();

  const handleLike = () => {
    setLiked(!liked);
    liked ? setLikes(likes - 1) : setLikes(likes + 1);
  };

  const handleSend = () => {
    handleComment({
      id: comments.length + 1,
      postId: data.id,
      author: user?.name,
      text: message,
      creatorId: comments.length + 1,
      created_at: new Date().toISOString(),
    } as CommentType);
    setMessage('');
  };

  const handleComment = (comment) => {
    setComments([...comments, comment]);
  };

  const handleDelete = () => {
    setOpen(true);
  };

  const handleCloseDelete = () => {
    setOpen(false);
  };

  const handleShowComments = () => {
    setShowComments(!showComments);
  };

  return (
    <Box flex={4}>
      <Card>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {/* {data.creatorId} */}
            </Avatar>
          }
          action={
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
                id={data.id}
                title="post"
                open={open}
                onOpen={handleDelete}
                onClose={handleCloseDelete}
              />
            </IconButton>
          }
          title={data.title}
          subheader={
            <Typography color="text.primary">{data.subheader}</Typography>
          }
        />
        <CardMedia
          component="img"
          height="480"
          width="640"
          image={data.image} // Assuming your Pod stType has an 'image' property
          alt={data.title}
        />
        <CardContent>
          <Typography variant="body2" color="text.primary">
            {data.description}
          </Typography>
          <Box display="flex" alignItems="start" justifyContent="start">
            <Box flexGrow={1}>
              <IconButton aria-label="add to favorites" onClick={handleLike}>
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite sx={{ color: 'red' }} />}
                  checked={liked}
                />
              </IconButton>
              <Typography variant="body2" color="text.primary">
                {likes} Likes
              </Typography>
            </Box>
            <IconButton aria-label="show comments" onClick={handleShowComments}>
              <Checkbox
                icon={<ChatBubbleOutline />}
                checkedIcon={<ChatBubble />}
                checked={showComments}
              />
            </IconButton>
          </Box>
        </CardContent>
        <CardContent>
          {showComments && (
            <>
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
              {Array.isArray(comments) &&
                comments.map((comment) => (
                  <Comment key={comment.id} comment={comment} />
                ))}
            </>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};
