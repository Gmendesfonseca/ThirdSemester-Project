import { MessageType } from '../messages';

export type ChatType = {
  id: string;
  name: string;
  description: string;
  messages: MessageType[];
  image: string;
  updated_at: string;
};

export type RegisterChatParams = {
  name: string;
  description: string;
  image: string;
};

export type UpdateChatParams = {
  id: string;
  name: string;
  description: string;
  icon: string;
};
