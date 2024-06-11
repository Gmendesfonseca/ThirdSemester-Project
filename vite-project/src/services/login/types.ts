import { HeadOfficeType } from '../headoffice/types';
import { BranchType } from '../branch/types';
import { ProfessorType } from '../professor/types';
import { StudentType } from '../student/types';

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

export type LoginResponse = LoginSuccess | LoginError;
