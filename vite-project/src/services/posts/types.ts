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

export type CommentType = {
  id: string;
  author: string;
  text: string;
  creatorId: number;
};
