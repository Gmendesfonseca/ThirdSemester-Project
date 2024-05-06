import api from 'services/api';
import { Paginate } from 'interfaces/Paginate';
import { Quiz, QuizParams, QuizPayload } from './types';

export function getQuizzes(params?: QuizParams) {
  return api.get<Paginate<Quiz>>('in-check/quizzes', { params });
}

export function getQuiz(id: string) {
  return api.get<Quiz>(`in-check/quizzes/${id}`);
}

export function createQuiz(data: QuizPayload) {
  return api.post('in-check/quizzes', data);
}

export function updateQuiz(id: string, data: QuizPayload) {
  return api.put(`in-check/quizzes/${id}`, data);
}

export function deleteQuiz(id: string) {
  return api.delete(`in-check/quizzes/${id}`);
}
