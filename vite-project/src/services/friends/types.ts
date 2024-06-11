export type FriendsType = {
  name: string;
  src: string;
  online: boolean;
};

export type FriendsListType = {
  id: number;
  name: string;
  email: string;
  online: boolean;
  options: JSX.Element;
};
