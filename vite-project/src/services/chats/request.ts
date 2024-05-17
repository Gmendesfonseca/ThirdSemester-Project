import { RecentChatType } from "./types";

export function getRecentChat(): Promise<RecentChatType[]> {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => data);
}