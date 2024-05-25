import { api } from '../api';
import { RegisterInstitutionParams, RegisterResponse } from './types';

export function registerInstitution(
  params: RegisterInstitutionParams,
): Promise<RegisterResponse> {
  return api.post<RegisterResponse>('/institution', params).then((response) => {
    if (response.status !== 200) {
      throw new Error('Login failed');
    }
    return response.data;
  });
}
