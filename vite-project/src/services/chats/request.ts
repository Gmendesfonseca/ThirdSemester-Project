import { Paginate } from 'interfaces/Paginate';
import { api } from '../api';
import { CategoriesParams, CategoryType } from './types';

export function getInChecks(params?: InChecksParams) {
  return api.get<Paginate<Chat>>('/in-check/evaluations', {
    params,
  });
}

export function getInCheck(id: string) {
  return api.get<InCheckEvaluation>(`/in-check/evaluations/${id}`);
}

export function createInCheck(data: InCheckEvaluationPayload) {
  return api.post('/in-check/evaluations', data);
}

export function updateInCheck(id: string, data: InCheckEvaluationPayload) {
  return api.put(`/in-check/evaluations/${id}`, data);
}

export function deleteInCheck(id: string) {
  return api.delete(`/in-check/evaluations/${id}`);
}
