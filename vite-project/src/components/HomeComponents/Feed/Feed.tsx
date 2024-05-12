import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import { Post } from '../Post/Post';
import { PostType, getAllPosts } from '../../../services/posts';

export const Feed = () => {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    getAllPosts().then(setPosts);
  }, []);

  return (
    <Box flex={4}>
      {posts.map((post, index) => (
        <Post key={index} data={post} />
      ))}
    </Box>
  );
};
