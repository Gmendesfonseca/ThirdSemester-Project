import { MessageType } from '../messages';

export type ChatType = {
  id: string;
  name: string;
  description: string;
  messages: MessageType[];
  icon: string;
  updated_at: string;
  created_at: string;
};

export type RegisterChatParams = {
  name: string;
  description: string;
  icon: string;
};

export type UpdateChatParams = {
  id: string;
  name: string;
  description: string;
  icon: string;
};
