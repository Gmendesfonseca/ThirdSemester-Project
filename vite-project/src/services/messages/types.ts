import { AccountType } from '../login/enum';

export type MessageType = {
  id: string;
  text: string;
  creatorName: number;
  creatorImage: string;
  creatorAccountType: AccountType;
  created_at: string;
};
