export type RegisterInstitutionParams = {
  name: string;
  cnpj: string;
  domain: string;
  email: string;
  password: string;
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
