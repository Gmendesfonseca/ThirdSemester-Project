import api from '../../api';
import { ProfessorType } from '../../login';
import { RegisterProfessorParams, RegisterResponse } from '../../register';

export function getProfessors(id: number): Promise<ProfessorType[]> {
  return api
    .get<ProfessorType[]>(`/institution/${id}/professors`)
    .then((response) => {
      if (response.status !== 200) {
        throw new Error('Students not found');
      }
      return response.data;
    });
}

export function getProfessor(professorId: number): Promise<ProfessorType> {
  return api
    .get<ProfessorType>(`/professors/${professorId}`)
    .then((response) => {
      if (response.status !== 200) {
        throw new Error('Student not found');
      }
      return response.data;
    });
}

export function registerProfessor(
  params: RegisterProfessorParams | undefined,
): Promise<RegisterResponse> {
  return api.post<RegisterResponse>('/professor', params).then((response) => {
    if (response.status !== 200) {
      throw new Error('Login failed');
    }
    return response.data;
  });
}

export function updateProfessor(professor: ProfessorType) {
  return api.put(`/professors/${professor.id}`, professor);
}

export function deleteProfessor(professorId: number) {
  return api.delete(`/professors/${professorId}`);
}
