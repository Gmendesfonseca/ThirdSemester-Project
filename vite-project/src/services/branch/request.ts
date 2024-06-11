import api from '../api';
import { RegisterResponse } from '../register';
import { BranchType, RegisterBranchParams, UpdateBranchParams } from './types';

//GET /headoffice/id/branches
export function getBranches(id: number): Promise<BranchType[]> {
  return api
    .get<BranchType[]>(`/headoffice/${id}/branches`)
    .then((response) => {
      if (response.status !== 200) {
        throw new Error('Branches not found');
      }
      return response.data;
    });
}

//GET /branch/id
export function getBranch(id: number): Promise<BranchType> {
  return api.get(`/branch/${id}`).then((response) => {
    if (response.status !== 200) {
      throw new Error('Branch not found');
    }
    return response.data;
  });
}

//POST /branch/register
export function registerBranch(
  branch: RegisterBranchParams,
): Promise<RegisterResponse> {
  return api.post('/branch/register', branch).then((response) => {
    if (response.status !== 200) {
      throw new Error('Failed to register branch');
    }
    return response.data;
  });
}

//PUT /branch/id
export function updateBranch(params: UpdateBranchParams) {
  return api.put(`/branch/${params.id}`, params).then((response) => {
    if (response.status !== 200) {
      throw new Error('Failed to update branch');
    }
    return response.data;
  });
}

//DELETE /branch/id
export function deleteBranch(id: number) {
  return api.delete(`/branch/${id}`).then((response) => {
    if (response.status !== 200) {
      throw new Error('Failed to delete branch');
    }
    return response.data;
  });
}
