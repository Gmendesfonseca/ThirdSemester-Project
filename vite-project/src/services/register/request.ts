import { api } from '../api';
import { RegisterParams, RegisterResponse } from './types';

export function register(params: RegisterParams): Promise<RegisterResponse> {
  return api.post<RegisterResponse>('/register', params).then((response) => {
    if (response.status !== 200) {
      throw new Error('Login failed');
    }
    return response.data;
  });
}
