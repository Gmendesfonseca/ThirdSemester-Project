import { useEffect, useState } from 'react';
import { Post } from '../Post/Post';
import { PostType } from '../../../services/posts';
import faker from 'faker';
import camaleao from '../../../assets/image.png';
import { Stack } from '@mui/material';
import { CommentType } from '../../../services/comment/types';
// import { useSession } from '../../../context/SessionContext';
// import { getAllPosts } from '../../../services/posts';

export const Feed = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  // const { institution } = useSession();

  // useEffect(() => {
  //   if (!institution) return;
  //   getAllPosts(institution).then((response) => {
  //     setPosts(response);
  //   });
  // }, []);

  useEffect(() => {
    const fakePosts = Array.from({ length: 10 }).map(() => ({
      creatorId: faker.datatype.number(),
      id: faker.datatype.number(),
      title: faker.lorem.sentence(),
      subheader: faker.lorem.sentence(),
      liked: faker.datatype.boolean(),
      likes: faker.datatype.number(),
      comments: Array.from({ length: 5 }).map(() => ({
        id: faker.datatype.number(),
        author: faker.name.findName(),
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
        paddingRight: { xs: 0, lg: 10 },
      }}
      height="max-content"
    >
      {posts.map((post, index) => (
        <Post key={index} data={post} />
      ))}
    </Stack>
  );
};
