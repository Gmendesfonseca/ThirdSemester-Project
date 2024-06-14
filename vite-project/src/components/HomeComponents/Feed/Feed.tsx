import { useEffect, useState } from "react";
import { Post } from "../Post/Post";
import { PostType } from "../../../services/posts";
import faker from "faker";
import camaleao from "../../../assets/image.png";
import { Stack } from "@mui/material";
import { CommentType } from "../../../services/comment/types";
import { useSession } from "../../../context/SessionContext";
// import { useSession } from '../../../context/SessionContext';
// import { getAllPosts } from '../../../services/posts';

export const Feed = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const { user } = useSession();
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
      creatorName: faker.lorem.sentence(),
      id: faker.datatype.number(),
      title: faker.lorem.sentence(),
      liked: faker.datatype.boolean(),
      likes: faker.datatype.number(),
      comments: Array.from({ length: 5 }).map(() => ({
        id: faker.datatype.number(),
        authorName: faker.name.findName(),
        authorImage: faker.image.avatar(),
        text: faker.lorem.sentence(),
        created_at: faker.date.recent(),
      })) as CommentType[],
      description: faker.lorem.paragraph(),
      image: camaleao,
    }));

    setPosts(
      user
        ? user.posts
        : fakePosts.map((post) => ({ ...post, creatorImage: "" }))
    );
  }, [user]);

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
