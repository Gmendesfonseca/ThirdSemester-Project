export type RegisterInstitutionParams = {
  name: string;
  email: string;
  password: string;
  domain: string;
  cnpj: string;
};
export type RegisterStudentParams = {
  name: string;
  cpf: string;
  email: string;
  password: string;
};

export type RegisterResponse = {
  message: string;
  success: boolean;
};
