export type LoginParams = {
  type: string;
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
  user: StudentType | ProfessorType | InstitutionType;
};

export type StudentType = {
  id: number;
  nome: string;
  email: string;
  password: string;
  cpf: string;
  curso: string;
  periodo: string;
  pontuacao: number;
  matricula: string;
  birthDate: Date;
  instituicao: string;
};

export type ProfessorType = {
  id: string;
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

export type CourseDto = {
  id: number;
  name: string;
  description: string;
  workload: number;
  period: number;
};

export type LoginResponse = LoginSuccess | LoginError;
