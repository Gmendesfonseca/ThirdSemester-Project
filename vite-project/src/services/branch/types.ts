import { CourseType } from '../courses';

export type BranchType = {
  id: number;
  name: string;
  email: string;
  password: string;
  domain: string;
  cnpj: string;
  localidadeInstituicao?: string;
  dataCriacao?: Date;
  courses?: CourseType[];
  students?: number[];
  professors?: number[];
};

export type RegisterBranchParams = {
  name: string;
  email: string;
  password: string;
  domain: string;
  cnpj: string;
  localidadeInstituicao?: string;
  dataCriacao?: Date;
};

export type UpdateBranchParams = {
  id: number;
  name: string;
  email: string;
  password: string;
  domain: string;
  cnpj: string;
  localidadeInstituicao?: string;
  dataCriacao?: Date;
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
