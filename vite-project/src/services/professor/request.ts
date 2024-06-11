import api from '../api';
import { RegisterResponse } from '../register';
import { ProfessorType, RegisterProfessorParams } from './types';

//GET /branch/id/professors
export function getProfessors(id: number): Promise<ProfessorType[]> {
  return api
    .get<ProfessorType[]>(`/branch/${id}/professors`)
    .then((response) => {
      if (response.status !== 200) {
        throw new Error('Professors not found');
      }
      return response.data;
    });
}

//GET /professor/id
export function getProfessor(id: number): Promise<ProfessorType> {
  return api.get<ProfessorType>(`/professor/${id}`).then((response) => {
    if (response.status !== 200) {
      throw new Error('Student not found');
    }
    return response.data;
  });
}

//POST /professor/register
export function registerProfessor(
  professor: RegisterProfessorParams,
): Promise<RegisterResponse> {
  return api
    .post<RegisterResponse>('/professor/register', professor)
    .then((response) => {
      if (response.status !== 200) {
        throw new Error('Login failed');
      }
      return response.data;
    });
}

//PUT /professor/id
export function updateProfessor(params: ProfessorType) {
  return api.put(`/professors/${params.id}`, params).then((response) => {
    if (response.status !== 200) {
      throw new Error('Failed to update professor');
    }
    return response.data;
  });
}

//DELETE /professor/id
export function deleteProfessor(id: number) {
  return api.delete(`/professors/${id}`).then((response) => {
    if (response.status !== 200) {
      throw new Error('Failed to delete professor');
    }
    return response.data;
  });
}
