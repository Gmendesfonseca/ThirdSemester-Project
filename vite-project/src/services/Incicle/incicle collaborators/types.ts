type Info = {
  id: string;
  name: string;
};

export type CollaboratorsParams = {
  page?: number;
  perPage?: number;
  search?: string;
};

export type Academic = {
  id: number;
  nivel: string;
  study_area_id: number;
  type_evaluation?: 'required' | 'differential';
};

export type Specialization = {
  id: number;
  name: string;
  type_evaluation?: 'required' | 'differential';
};

export type BehavioralProfile = {
  id: number;
  profile_disc: string;
  profile_skills: [
    {
      name: string;
      percentagem: number;
    },
  ];
};

export type Sector = {
  id: string;
  responsible_id: string;
  company_id: string;
  name: string;
  cost_center: number;
  description: string;
  created_at: string;
  updated_at: string;
  person: {
    avatar?: string;
    first_name: string;
    id: string;
    last_name: string;
    nickname: string;
  };
};

export type Level = {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
  bellow_level_id?: string;
  above_level_id?: string;
  pair_level_id?: string;
  company_id: string;
  above?: Info;
  bellow?: Info;
  pair?: Info;
};

export type Job = {
  id: string;
  name: string;
  short_description: string;
  detailed_escription: string;
  initial_salary: number;
  final_salary: number;
  initial_salary_br: string;
  final_salary_br: string;
  academic_formations: Academic[];
  specialization_courses: Specialization[];
  behavioral_profile: BehavioralProfile;
  company_id: string;
  level_id: string;
  sector_id: string;
  company: {
    id: string;
    name: string;
    avatar: string;
  };
  level: {
    id: string;
    name: string;
  };
  sector: {
    id: string;
    name: string;
  };
};

export type Person = {
  id: string;
  social_name: string;
  first_name: string;
  name: string;
  last_name: string;
  nickname: string;
  avatar: string;
};

export type AllocatedSector = {
  id: string;
  name: string;
  description: string;
};

export type Collaborator = {
  administration_date: string;
  allocated_sector: AllocatedSector;
  company_id: string;
  created_at: string;
  deleted_at: null;
  employment: string;
  id: string;
  job: Job | null;
  job_id: string | null;
  level: Level | null;
  level_id: string | null;
  unit_id: string | null;
  allocated_unit: null | {
    id: string;
    company_id: string;
    responsible_id: string;
    name: string;
    address: string;
    description: string;
  };
  person: Person;
  person_id: string;
  schedule_id: string;
  sector: Sector | null;
  sector_id: string | null;
  sectors_responsible: Sector[];
  status: string;
  updated_at: string;
};
