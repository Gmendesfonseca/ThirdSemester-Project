export type RegisterParams = {
  name: string;
  cnpj: string;
  domain: string;
  email: string;
  password: string;
};

export type RegisterResponse = {
  message: string;
  success: boolean;
};
