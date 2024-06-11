import { CourseType } from '../courses';

export type HeadOfficeType = {
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

export type UpdateHeadOfficeParams = {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
};

export type RegisterHeadOfficeParams = {
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
};
