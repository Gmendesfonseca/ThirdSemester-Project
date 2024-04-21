export type LoginParams = {
  email: string;
  password: string;
};

export type LoginType = {
  id: string;
  name: string;
  email: string;
};

export type LoginError = {
  message: string;
  success: boolean;
  user: null;
};

export type LoginSuccess = {
  message: string;
  success: boolean;
  user: LoginType;
};

export type LoginResponse = LoginSuccess | LoginError;
