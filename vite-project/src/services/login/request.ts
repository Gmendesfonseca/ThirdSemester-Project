import { api } from '../api';
import {
  InstitutionType,
  LoginParams,
  LoginResponse,
  ProfessorType,
  StudentType,
} from './types';

export function loginInstitution(params: LoginParams): Promise<LoginResponse> {
  return api
    .post<LoginResponse>('/login/institution', params)
    .then((response) => {
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

export function getInstitution(id: number): Promise<InstitutionType> {
  return api.get<InstitutionType>(`/institution/${id}`).then((response) => {
    if (response.status !== 200) {
      throw new Error('Institution not found');
    }
    return response.data;
  });
}

export function getProfessor(id: number): Promise<ProfessorType> {
  return api.get<ProfessorType>(`/professor/${id}`).then((response) => {
    if (response.status !== 200) {
      throw new Error('Professor not found');
    }
    return response.data;
  });
}

export function getStudent(id: number): Promise<StudentType> {
  return api.get<StudentType>(`/student/${id}`).then((response) => {
    if (response.status !== 200) {
      throw new Error('Student not found');
    }
    return response.data;
  });
}
