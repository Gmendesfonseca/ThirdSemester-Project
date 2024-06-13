import { BranchType } from '../branch/types';
import { ChatType } from '../chats';
import { FriendsType } from '../friends';
import { PostType } from '../posts';
import { ProfessorType } from '../professor/types';
import { StudentType } from '../student/types';

export type UserType = {
  id: number;
  name: string;
  email: string;
  avatar: string;
  institution?: string;
  posts?: PostType[];
  chats?: ChatType[];
  branches?: BranchType[];
  student?: StudentType[];
  professor?: ProfessorType[];
  friends?: FriendsType[];
  about: string;
};
