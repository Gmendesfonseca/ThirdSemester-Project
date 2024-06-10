export type ChatType = {
  id: string;
  name: string;
  description: string;
  messages: MessageType[];
  icon: string;
  updated_at: string;
  created_at: string;
};

export type MessageType = {
  id: string;
  text: string;
  creatorId: number;
  created_at: string;
};
