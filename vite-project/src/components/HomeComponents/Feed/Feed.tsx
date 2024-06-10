import { useEffect, useState } from 'react';
import { Post } from '../Post/Post';
import {
  CommentType,
  PostType,
  // getAllPosts
} from '../../../services/posts';
import faker from 'faker';
import camaleao from '../../../assets/image.png';
import { Stack } from '@mui/material';

export const Feed = () => {
  const [posts, setPosts] = useState<PostType[]>([]);

  // useEffect(() => {
  //   getAllPosts().then((response) => {
  //     setPosts(response);
  //   });
  // }, []);

  useEffect(() => {
    const fakePosts = Array.from({ length: 10 }).map(() => ({
      creatorId: faker.datatype.number(),
      title: faker.lorem.sentence(),
      subheader: faker.lorem.sentence(),
      likes: faker.datatype.number(),
      comments: Array.from({ length: 5 }).map(() => ({
        id: faker.datatype.uuid(),
        text: faker.lorem.sentence(),
      })) as CommentType[],
      description: faker.lorem.paragraph(),
      image: camaleao,
    }));

    setPosts(fakePosts);
  }, []);

  return (
    <Stack
      p={2}
      sx={{
        flex: { sm: 4, lg: 4, xl: 3 },
        gap: 2,
      }}
      height="max-content"
    >
      {posts.map((post, index) => (
        <Post key={index} data={post} />
      ))}
      {posts.map((post, index) => (
        <Post key={index} data={post} />
      ))}
    </Stack>
  );
};
