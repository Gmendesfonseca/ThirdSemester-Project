import api from '../api';
import { RegisterResponse } from '../register';
import { CourseType, RegisterCourseParams, UpdateCourseParams } from './types';

export function getCourses(id: number): Promise<CourseType[]> {
  return api.get<CourseType[]>(`/branch/${id}/courses`).then((response) => {
    if (response.status !== 200) {
      throw new Error('Failed to get course list');
    }
    return response.data;
  });
}

export function getCourse(id: number): Promise<CourseType> {
  return api.get<CourseType>(`/course/${id}`).then((response) => {
    if (response.status !== 200) {
      throw new Error('Failed to get course');
    }
    return response.data;
  });
}

export function registerCourse(
  course: RegisterCourseParams,
): Promise<RegisterResponse> {
  return api
    .post<RegisterResponse>('/course/register', course)
    .then((response) => {
      if (response.status !== 200) {
        throw new Error('Failed to register course');
      }
      return response.data;
    });
}

export function updateCourse(params: UpdateCourseParams) {
  return api.put(`/course/${params.id}`, params).then((response) => {
    if (response.status !== 200) {
      throw new Error('Failed to update course');
    }
    return response.data;
  });
}

export function deleteCourse(id: number) {
  return api.delete(`/course/${id}`).then((response) => {
    if (response.status !== 200) {
      throw new Error('Failed to delete course');
    }
    return response.data;
  });
}
