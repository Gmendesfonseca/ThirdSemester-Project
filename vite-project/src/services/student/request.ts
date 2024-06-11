import api from '../api';
import { RegisterResponse } from '../register';
import {
  RegisterStudentParams,
  StudentType,
  UpdateStudentParams,
} from './types';

//GET /branch/id/students
export function getStudents(id: number): Promise<StudentType[]> {
  return api.get<StudentType[]>(`/branch/${id}/students`).then((response) => {
    if (response.status !== 200) {
      throw new Error('Students not found');
    }
    return response.data;
  });
}

//GET /student/id
export function getStudent(id: number): Promise<StudentType> {
  return api.get<StudentType>(`/students/${id}`).then((response) => {
    if (response.status !== 200) {
      throw new Error('Student not found');
    }
    return response.data;
  });
}

//POST /student/register
export function registerStudent(
  student: RegisterStudentParams,
): Promise<RegisterResponse> {
  return api.post<RegisterResponse>('/student', student).then((response) => {
    if (response.status !== 200) {
      throw new Error('Login failed');
    }
    return response.data;
  });
}

//PUT /student/id
export function updateStudent(params: UpdateStudentParams) {
  return api.put(`/students/${params.id}`, params);
}

//DELETE /student/id
export function deleteStudent(id: number) {
  return api.delete(`/students/${id}`);
}
