import api from '../api';
import { RegisterResponse } from '../register';
import {
  HeadOfficeType,
  RegisterHeadOfficeParams,
  UpdateHeadOfficeParams,
} from './types';

//GET /headoffice/id
export function getHeadOffice(id: number): Promise<HeadOfficeType> {
  return api.get<HeadOfficeType>(`/headoffice/${id}`).then((response) => {
    if (response.status !== 200) {
      throw new Error('Failed to get headoffice');
    }
    return response.data;
  });
}

//POST /headoffice/register
export function registerHeadOffice(
  headOffice: RegisterHeadOfficeParams,
): Promise<RegisterResponse> {
  return api.post('/headoffice/register', headOffice).then((response) => {
    if (response.status !== 200) {
      throw new Error('Failed to register headoffice');
    }
    return response.data;
  });
}

//PUT /headoffice/id
export function updateHeadOffice(params: UpdateHeadOfficeParams) {
  return api.put(`/headoffice/${params.id}`, params).then((response) => {
    if (response.status !== 200) {
      throw new Error('Failed to update headoffice');
    }
    return response.data;
  });
}

//DELETE /headoffice/id
export function deleteHeadOffice(id: number) {
  return api.delete(`/headoffice/${id}`).then((response) => {
    if (response.status !== 200) {
      throw new Error('Failed to delete headoffice');
    }
    return response.data;
  });
}
