import { api } from '../api';
import { LoginParams, LoginResponse } from './types';

// POST /login/headoffice
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

// POST /login/branch
export function loginBranch(params: LoginParams): Promise<LoginResponse> {
  return api.post<LoginResponse>('/login/branch', params).then((response) => {
    if (response.status !== 200) {
      throw new Error('Login failed');
    }
    return response.data;
  });
}

// POST /login/professor
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

// POST /login/student
export function loginStudent(params: LoginParams): Promise<LoginResponse> {
  return api.post<LoginResponse>('/login/student', params).then((response) => {
    if (response.status !== 200) {
      throw new Error('Login failed');
    }
    return response.data;
  });
}
