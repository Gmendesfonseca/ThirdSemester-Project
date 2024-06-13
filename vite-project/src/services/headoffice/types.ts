export type HeadOfficeType = {
  id: number;
  name: string;
  email: string;
  password: string;
  domain: string;
  cnpj: string;
  localidadeInstituicao?: string;
  dataCriacao?: Date;
};

export type UpdateHeadOfficeParams = {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
};

export type RegisterHeadOfficeParams = {
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
};
