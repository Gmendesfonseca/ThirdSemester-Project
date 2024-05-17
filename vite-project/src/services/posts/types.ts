export type PostType = {
  creatorId: number;
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


