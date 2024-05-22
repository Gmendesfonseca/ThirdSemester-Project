export type LoginParams = {
  email: string;
  password: string;
};

export type LoginError = {
  message: string;
  success: boolean;
  user: null;
};

export type LoginSuccess = {
  message: string;
  success: boolean;
  user: StudentType | ProfessorType | InstitutionType;
};

export type StudentType = {
  id: number;
  name: string;
  email: string;
  password: string;
  cpf: string;
  curso: string;
  periodo: string;
  pontuacao: number;
  matricula: string;
  birthDate: Date;
  institution: string;
};

export type ProfessorType = {
  id: number;
  name: string;
  email: string;
  type: string;
  registration: string;
};

export type InstitutionType = {
  id: number;
  name: string;
  email: string;
  password: string;
  domain: string;
  cnpj: string;
  localidadeInstituicao?: string;
  dataCriacao?: Date;
  courses?: CourseDto[];
  students?: StudentType[];
  professors?: ProfessorType[];
};

export type StudentListType = {
  id: number;
  name: string;
  email: string;
  cpf: string;
  curso: string;
  periodo: string;
  matricula: string;
  institution: string;
};

export type ProfessorListType = {
  id: number;
  name: string;
  email: string;
  type: string;
  registration: string;
};

export type InstitutionListType = {
  id: number;
  name: string;
  email: string;
  domain: string;
  cnpj: string;
  localidadeInstituicao?: string;
  dataCriacao?: Date;
};

export type CourseDto = {
  id: number;
  name: string;
  description: string;
  workload: number;
  period: number;
};

export type LoginResponse = LoginSuccess | LoginError;
