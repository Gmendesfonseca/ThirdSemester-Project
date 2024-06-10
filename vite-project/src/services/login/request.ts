import { api } from '../api';
import { LoginParams, LoginResponse } from './types';

export function loginHeadOffice(params: LoginParams): Promise<LoginResponse> {
  return api
    .post<LoginResponse>('/login/headoffice', params)
    .then((response) => {
      if (response.status !== 200) {
        throw new Error('Login failed');
      }
      return response.data;
    });
}
export function loginBranch(params: LoginParams): Promise<LoginResponse> {
  return api.post<LoginResponse>('/login/branch', params).then((response) => {
    if (response.status !== 200) {
      throw new Error('Login failed');
    }
    return response.data;
  });
}
export function loginProfessor(params: LoginParams): Promise<LoginResponse> {
  return api
    .post<LoginResponse>('/login/professor', params)
    .then((response) => {
      if (response.status !== 200) {
        throw new Error('Login failed');
      }
      return response.data;
    });
}
export function loginStudent(params: LoginParams): Promise<LoginResponse> {
  return api.post<LoginResponse>('/login/student', params).then((response) => {
    if (response.status !== 200) {
      throw new Error('Login failed');
    }
    return response.data;
  });
}
