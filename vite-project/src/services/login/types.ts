export type LoginParams = {
  email: string;
  password: string;
};

export type LoginError = {
  message: string;
  company_id: number;
  success: boolean;
  user: null;
};

export type LoginSuccess = {
  message: string;
  company_id: number;
  success: boolean;
  user: StudentType | ProfessorType | HeadOfficeType | BranchType;
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

export type HeadOfficeType = {
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

export type BranchType = {
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
  matricula: string;
  options: JSX.Element;
};

export type ProfessorListType = {
  id: number;
  name: string;
  email: string;
  type: string;
  registration: string;
  options: JSX.Element;
};

export type BranchListType = {
  id: number;
  name: string;
  email: string;
  domain: string;
  cnpj: string;
  localidadeInstituicao?: string;
  dataCriacao?: Date;
  options: JSX.Element;
};

export type CourseDto = {
  id: number;
  name: string;
  description: string;
  workload: number;
  period: number;
};

export type LoginResponse = LoginSuccess | LoginError;
