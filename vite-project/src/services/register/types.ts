export type RegisterInstitutionParams = {
  name: string;
  email: string;
  password: string;
  domain: string;
  cnpj: string;
};

export type RegisterProfessorParams = {
  name: string;
  email: string;
  password: string;
  matriculation: string;
  cpf: string;
  birthdate?: Date;
  institution: string;
  area: string;
  formation: string;
};

export type RegisterStudentParams = {
  name: string;
  email: string;
  password: string;
  cpf: string;
  curso: string;
  periodo: string;
  pontuacao: number;
  matricula: string;
  birthDate?: Date;
  instituicao: string;
};

export type RegisterResponse = {
  message: string;
  success: boolean;
};
