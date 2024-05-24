import { RecentChatType } from './types';

//A fazer
export function getRecentChat(): Promise<RecentChatType[]> {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => data);
}
