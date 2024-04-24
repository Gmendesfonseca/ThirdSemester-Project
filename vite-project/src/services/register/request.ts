import { api } from '../api';
import {
  RegisterInstitutionParams,
  RegisterResponse,
  RegisterStudentParams,
} from './types';

export function register(
  params: RegisterInstitutionParams,
): Promise<RegisterResponse> {
  return api
    .post<RegisterResponse>('/register/institution', params)
    .then((response) => {
      if (response.status !== 200) {
        throw new Error('Login failed');
      }
      return response.data;
    });
}

export function registerStudent(
  params: RegisterStudentParams,
): Promise<RegisterResponse> {
  return api
    .post<RegisterResponse>('/register/student', params)
    .then((response) => {
      if (response.status !== 200) {
        throw new Error('Login failed');
      }
      return response.data;
    });
}
