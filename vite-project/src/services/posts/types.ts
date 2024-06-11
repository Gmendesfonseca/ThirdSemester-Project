import { CommentType } from '../comment/types';

export type PostType = {
  id: number;
  creatorId: number;
  title: string;
  subheader: string;
  image: string;
  liked: boolean;
  likes: number;
  comments: CommentType[];
  description: string;
};
