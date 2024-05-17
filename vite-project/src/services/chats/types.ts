export type CategoriesParams = {
  page?: number;
  perPage?: number;
  search?: string;
};

export type ChatType = {
  name: string;
  description: string;
  company_id: string;
  id: string;
  icon: string;
  updated_at: string;
  created_at: string;
};

export type RecentChatType = {
  id: string;
  name: string;
  to: string;
  message: string;
};
