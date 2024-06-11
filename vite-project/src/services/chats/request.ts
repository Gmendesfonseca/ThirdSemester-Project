import api from '../api';
import { ChatType, RegisterChatParams } from './types';

//GET /id/chats
export function getAllChats(user_id): Promise<ChatType[]> {
  return api.get(`/${user_id}/chats`).then((response) => {
    if (response.status !== 200) {
      throw new Error('Chats not found');
    }
    return response.data;
  });
}

//GET /chats/id
export function getChat(id: number): Promise<ChatType> {
  return api.get(`/chats/${id}`).then((response) => {
    if (response.status !== 200) {
      throw new Error('Chat not found');
    }
    return response.data;
  });
}

//POST /chats/register
export function createChat(chat: RegisterChatParams): Promise<ChatType[]> {
  return api.post(`/chat/register`, chat).then((response) => {
    if (response.status !== 200) {
      throw new Error('Failed to create chat');
    }
    return response.data;
  });
}

//PUT /chats/id
export function updateChat(params: ChatType): Promise<ChatType[]> {
  return api.put(`chat/${params.id}`, params).then((response) => {
    if (response.status !== 200) {
      throw new Error('Failed to create chat');
    }
    return response.data;
  });
}

//DELETE /chats/id
export function deleteChat(id: number): Promise<ChatType[]> {
  return api.delete(`/chats/${id}`).then((response) => {
    if (response.status !== 200) {
      throw new Error('Failed to create chat');
    }
    return response.data;
  });
}
