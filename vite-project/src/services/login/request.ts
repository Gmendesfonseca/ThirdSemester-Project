import { api } from '../api';
import { LoginParams, LoginResponse } from './types';

export function login(params: LoginParams): Promise<LoginResponse> {
  return api.post<LoginResponse>('/login', params).then((response) => {
    if (response.status !== 200) {
      throw new Error('Login failed');
    }
    return response.data;
  });
}
