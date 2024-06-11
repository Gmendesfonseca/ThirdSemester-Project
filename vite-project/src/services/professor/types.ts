export type ProfessorType = {
  id: number;
  name: string;
  email: string;
  type: string;
  posts: number[];
  registration: string;
};

export type RegisterProfessorParams = {
  name: string;
  email: string;
  password: string;
  type: string;
  registration: string;
};

export type UpdateProfessorParams = {
  id: number;
  name: string;
  email: string;
  password: string;
  type: string;
  registration: string;
};

export type ProfessorListType = {
  id: number;
  name: string;
  email: string;
  type: string;
  registration: string;
  options: JSX.Element;
};
