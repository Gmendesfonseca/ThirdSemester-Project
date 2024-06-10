export type PostType = {
  creatorId: number;
  id: number;
  title: string;
  subheader: string;
  likes: number;
  comments: CommentType[];
  description: string;
  image: string;
};

export type CommentType = {
  id: string;
  text: string;
  creatorId: number;
};
