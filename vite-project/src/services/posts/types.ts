import { CommentType } from '../comment/types';

export type PostType = {
  id: number;
  creatorName: string;
  creatorImage: string;
  title: string;
  image: string;
  liked: boolean;
  likes: number;
  comments: CommentType[];
  description: string;
};

export type CreatePostType = {
  institutionId?: number;
  creatorId?: number;
  creatorName?: string;
  title: string;
  image: string | ArrayBuffer | null | undefined;
  description: string;
};
