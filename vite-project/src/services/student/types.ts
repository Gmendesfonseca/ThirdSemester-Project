export type StudentType = {
  id: number;
  name: string;
  email: string;
  password: string;
  cpf: string;
  posts: number[];
  curso: string;
  periodo: string;
  pontuacao: number;
  matricula: string;
  birthDate: Date;
  institution: string;
};

export type RegisterStudentParams = {
  name: string;
  email: string;
  password: string;
  domain: string;
  cnpj: string;
  localidadeInstituicao?: string;
  dataCriacao?: Date;
};

export type UpdateStudentParams = {
  id: number;
  name: string;
  email: string;
  password: string;
  domain: string;
  cnpj: string;
  localidadeInstituicao?: string;
  dataCriacao?: Date;
};

export type StudentListType = {
  id: number;
  name: string;
  email: string;
  cpf: string;
  curso: string;
  matricula: string;
  options: JSX.Element;
};
