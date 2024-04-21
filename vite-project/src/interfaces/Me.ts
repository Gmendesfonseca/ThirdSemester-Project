import {
  ProjectViewType,
  RequestsSolicitation,
  ViewListFriends,
  ShowCalendar,
  ShowFriends,
  ShowLocation,
  ShowProjects,
} from '@/utils/enums/profileConfig';

export interface IMeCompany {
  id: string;
  name: string;
  avatar: string;
  user_id: string;
  company_user: {
    id: string;
    username: string;
  };
  my_collaborator_id: {
    id: string;
  };
}

export interface IProfileConfig {
  created_at: string;
  default_timezone: string;
  id: string;
  people_share_my_publications: boolean;
  person_id: string;
  project_view: ProjectViewType;
  requests_solicitation: RequestsSolicitation;
  seo: boolean;
  show_calendar: ShowCalendar;
  show_friends: ShowFriends;
  show_location: ShowLocation;
  show_projects: ShowProjects;
  updated_at: string;
  view_list_friends: ViewListFriends;
}

export interface IUserConfig {
  auth2f: boolean;
  default_interface: 'LIGHT' | 'DARK';
  default_language: string;
  id: string;
  user_id: string;
}

export type AccountType = 'COMPANY' | 'PERSON' | null | undefined;

export interface IMeProps {
  user_id: string;
  username: string;
  name: string;
  type: AccountType;
  profile_id: string;
  avatar: string;
  social_name: string;
  companies: IMeCompany[];
  profile_config: IProfileConfig;
  user_config: IUserConfig;
}

export interface ISendMeProps {
  social_name?: string;
  nationality?: string;
  marital_status_id?: number;
  phone?: string;
  born_date?: string;
  cpf?: string;
  rg?: string;
  timezone?: string;
  username?: string;
  email?: string;
}
