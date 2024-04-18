import { PaginateV2 } from 'interfaces/Paginate';
import { links } from 'safira-app/config/links';
import { api } from 'services/api';
import { Collaborator, CollaboratorsParams } from './types';

export function getCollaborators(params?: CollaboratorsParams) {
  return api.get<PaginateV2<Collaborator>>('/engineering/collaborators', {
    baseURL: links.api.core,
    params,
  });
}
