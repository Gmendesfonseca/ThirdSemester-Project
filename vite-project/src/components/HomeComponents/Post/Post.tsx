import React, { useState } from 'react';
import { Box } from '@mui/system';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { Favorite, FavoriteBorder, MoreVert } from '@mui/icons-material';
import { PostType, CommentType } from '../../../services/posts';
import { Button, Checkbox } from '@mui/material';

interface PostProps {
  data: PostType;
}

export const Post = ({ data }: PostProps) => {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState<CommentType[]>([]);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleComment = (comment) => {
    setComments([...comments, comment]);
  };

  return (
    <Box flex={4} p={2}>
      <Card sx={{ margin: 5 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {data.creatorId}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title={data.title}
          subheader={data.subheader}
        />
        <CardMedia
          component="img"
          height="20%"
          image={data.image} // Assuming your Pod stType has an 'image' property
          alt={data.title}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {data.description}
          </Typography>
        </CardContent>
        <CardContent>
          <IconButton aria-label="add to favorites" onClick={handleLike}>
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: 'red' }} />}
            />
          </IconButton>
          <Typography variant="body2" color="text.secondary">
            {likes} Likes
          </Typography>
          <Button onClick={() => handleComment('New comment')}>
            Add Comment
          </Button>
          {comments.map((comment) => (
            <Typography key={comment.id} variant="body2" color="text.secondary">
              {comment.text}
            </Typography>
          ))}
        </CardContent>
      </Card>
    </Box>
  );
};
