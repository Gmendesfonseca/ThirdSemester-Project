import { BranchType } from '../branch/types';
import { ChatType } from '../chats';
import { CourseType } from '../courses';
import { FriendsType } from '../friends';
import { PostType } from '../posts';
import { ProfessorType } from '../professor/types';
import { StudentType } from '../student/types';

export type UserType = {
  id: number;
  name: string;
  email: string;
  avatar: string;
  about: string;
  institution: string;
  institutionId: number;
  posts: PostType[];
  chats: ChatType[];
  friends: FriendsType[];
};

export type UserHeadOfficeType = {
  id: number;
  name: string;
  email: string;
  avatar: string;
  institution: string;
  about: string;
  branches: BranchType[];
};

export type UserBranchType = {
  id: number;
  name: string;
  email: string;
  avatar: string;
  about: string;
  professors: ProfessorType[];
  students: StudentType[];
  courses: CourseType[];
};
