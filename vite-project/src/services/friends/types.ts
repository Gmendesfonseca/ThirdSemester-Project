export type FriendsType = {
  name: string;
  image: string;
  online: boolean;
};

export type FriendsListType = {
  id: number;
  name: string;
  email: string;
  online: boolean;
  options: JSX.Element;
};
