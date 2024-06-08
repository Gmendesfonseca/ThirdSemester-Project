export type SectorParams = {
  page?: number;
  perPage?: number;
  search?: string;
};

export type Sector = {
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
