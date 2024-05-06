export type CategoriesParams = {
  page?: number;
  perPage?: number;
  search?: string;
};

export type CategoryType = {
  name: string;
  description: string;
  company_id: string;
  id: string;
  icon: string;
  updated_at: string;
  created_at: string;
};
