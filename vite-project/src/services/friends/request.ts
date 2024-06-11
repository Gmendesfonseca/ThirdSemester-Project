import api from '../api';
import { FriendsType } from './types';

export function getFriends(): Promise<FriendsType[]> {
  return api.get('/friends').then((response) => {
    return response.data;
  });
}
