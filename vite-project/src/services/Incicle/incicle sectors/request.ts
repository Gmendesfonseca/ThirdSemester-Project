import { links } from 'safira-app/config/links';
import { api } from 'services/api';
import { PaginateV2 } from 'interfaces/Paginate';
import { Sector, SectorParams } from './types';

export function getSectors(params?: SectorParams) {
  return api.get<PaginateV2<Sector>>('/engineering/sectors', {
    baseURL: links.api.core,
    params,
  });
}
