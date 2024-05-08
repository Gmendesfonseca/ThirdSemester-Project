import api from '../../api';
import { StudentType } from '../../login';

export function getStudents(id: number): Promise<StudentType[]> {
  return api
    .get<StudentType[]>(`/institution/${id}/students`)
    .then((response) => {
      if (response.status !== 200) {
        throw new Error('Students not found');
      }
      return response.data;
    });
}
