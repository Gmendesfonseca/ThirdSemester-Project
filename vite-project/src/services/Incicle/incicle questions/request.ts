import { api } from 'services/api';
import { Paginate } from 'interfaces/Paginate';
import { QuestionType, QuestionPayload, QuestionsParams } from './types';

export function getQuestions(params?: QuestionsParams) {
  return api.get<Paginate<QuestionType>>('/in-check/questions', {
    params,
  });
}

export function getQuestion(id: string) {
  return api.get<QuestionType>(`/in-check/questions/${id}`);
}

export function createQuestion(data: QuestionPayload) {
  return api.post<QuestionType>('/in-check/questions', data);
}

export function updateQuestion(id: string, data: QuestionPayload) {
  return api.put(`/in-check/questions/${id}`, data);
}

export function deleteQuestion(id: string) {
  return api.delete(`/in-check/questions/${id}`);
}
