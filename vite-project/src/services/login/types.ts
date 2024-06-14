import { BranchType } from '../branch/types';
import { ProfessorType } from '../professor/types';
import { StudentType } from '../student/types';
import { PostType } from '../posts';
import { ChatType } from '../chats';
import { FriendsType } from '../friends';
import { CourseType } from '../courses';
import { UserBranchType, UserHeadOfficeType, UserType } from '../user/types';

export type LoginParams = {
  email: string;
  password: string;
};

export type LoginError = {
  message: string;
  success: boolean;
  user: {
    id: number;
    name: string;
    email: string;
    avatar: string;
    about: string;
    institution?: string;
    institutionId?: number;
    //HEADOFFICE
    branches?: BranchType[];
    //BRANCH
    students?: StudentType[];
    professors?: ProfessorType[];
    courses?: CourseType[];
    //STUDENT | PROFESSOR
    posts?: PostType[];
    chats?: ChatType[];
    friends?: FriendsType[];
  };
};

export type LoginSuccess = {
  message: string;
  company_id: number;
  success: boolean;
  user: UserHeadOfficeType | UserType | UserBranchType | null;
};

export type LoginResponse = LoginSuccess | LoginError;
