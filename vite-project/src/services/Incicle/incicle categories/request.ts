import { Paginate } from 'interfaces/Paginate';
import { api } from '../api';
import { CategoriesParams, CategoryType } from './types';

export function getCategories(params?: CategoriesParams) {
  return api.get<Paginate<CategoryType>>('/in-check/categories', {
    params,
  });
}

export function getCategory(id: string) {
  return api.get<CategoryType>(`/in-check/categories/${id}`);
}

export function createCategory(data: FormData) {
  return api.post<CategoryType>('/in-check/categories', data);
}

export function updateCategory(id: string, data: FormData) {
  return api.post(`/in-check/categories/${id}`, data);
}

export function deleteCategory(id: string) {
  return api.delete(`/in-check/categories/${id}`);
}
