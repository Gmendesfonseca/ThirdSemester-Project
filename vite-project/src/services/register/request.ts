import { api } from '../api';
import {
  RegisterInstitutionParams,
  RegisterResponse,
  RegisterStudentParams,
  RegisterProfessorParams,
} from './types';

export function registerStudent(
  params: RegisterStudentParams,
): Promise<RegisterResponse> {
  return api.post<RegisterResponse>('/student', params).then((response) => {
    if (response.status !== 200) {
      throw new Error('Login failed');
    }
    return response.data;
  });
}
export function registerProfessor(
  params: RegisterProfessorParams,
): Promise<RegisterResponse> {
  return api.post<RegisterResponse>('/professor', params).then((response) => {
    if (response.status !== 200) {
      throw new Error('Login failed');
    }
    return response.data;
  });
}
export function registerInstitution(
  params: RegisterInstitutionParams,
): Promise<RegisterResponse> {
  return api.post<RegisterResponse>('/institution', params).then((response) => {
    if (response.status !== 200) {
      throw new Error('Login failed');
    }
    return response.data;
  });
}
