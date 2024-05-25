import api from '../../api';
import { StudentType } from '../../login';
import { RegisterResponse, RegisterStudentParams } from '../../register';

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

export function getStudent(studentId: number): Promise<StudentType> {
  return api.get<StudentType>(`/students/${studentId}`).then((response) => {
    if (response.status !== 200) {
      throw new Error('Student not found');
    }
    return response.data;
  });
}

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

export function updateStudent(student: StudentType) {
  return api.put(`/students/${student.id}`, student);
}

export function deleteStudent(studentId: number) {
  return api.delete(`/students/${studentId}`);
}
