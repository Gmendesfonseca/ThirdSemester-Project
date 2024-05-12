export type PostType = {
  creatorId: number;
  title: string;
  subheader: string;
  likes: number;
  comments: CommentType[];
  dataPostagem: string;
  description: string;
  image: string;
};

export type CommentType = {
  creatorId: number;
  text: string;
};
