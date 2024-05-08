import api from '../../api';
import { ProfessorType } from '../../login';

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
