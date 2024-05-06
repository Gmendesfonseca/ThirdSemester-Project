import { api } from 'services/api';
import { links } from 'safira-app/config/links';
import { PaginateV2 } from 'interfaces/Paginate';
import { Unit, UnitParams } from './types';

export function getUnits(params?: UnitParams) {
  return api.get<PaginateV2<Unit>>('/engineering/units', {
    baseURL: links.api.core,
    params,
  });
}
