import api from '../../api';
import { BranchType } from '../../login';
import { RegisterBranchParams } from '../../register';

export function getBranches(id: number): Promise<BranchType[]> {
  return api.get(`/institution/${id}/branches`).then((response) => {
    if (response.status !== 200) {
      throw new Error('Branches not found');
    }
    return response.data;
  });
}

export function getBranch(branchId: number) {
  return api.get(`/branches/${branchId}`).then((response) => {
    if (response.status !== 200) {
      throw new Error('Branch not found');
    }
    return response.data;
  });
}

export function registerBranch(branch: RegisterBranchParams | undefined) {
  return api.post('/branches', branch);
}

export function updateBranch(branch: BranchType) {
  return api.put(`/branches/${branch.id}`, branch);
}

export function deleteBranch(branchId: number) {
  return api.delete(`/branch/${branchId}`);
}
