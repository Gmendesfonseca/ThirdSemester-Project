export type UnitParams = {
  page?: number;
  perPage?: number;
  search?: string;
};

export type Unit = {
  id: string;
  name: string;
  responsible_id: string;
  responsible: null | {
    person: {
      avatar: string | null;
      id: string;
      name: string;
    };
  };
};
