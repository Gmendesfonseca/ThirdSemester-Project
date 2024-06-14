import React, { FC, PropsWithChildren, useState } from 'react';
import {
  UserBranchType,
  UserHeadOfficeType,
  UserType,
} from '../services/user/types';

type SessionContextType = {
  accountType: string | null;
  setAccountType: React.Dispatch<React.SetStateAction<string | null>>;
  user: UserType | null;
  setUser: React.Dispatch<React.SetStateAction<UserType | null>>;
  userHeadOffice: UserHeadOfficeType | null;
  setUserHeadOffice: React.Dispatch<
    React.SetStateAction<UserHeadOfficeType | null>
  >;
  userBranch: UserBranchType | null;
  setUserBranch: React.Dispatch<React.SetStateAction<UserBranchType | null>>;
};

const SessionContext = React.createContext({} as SessionContextType);

const SessionProvider: FC<PropsWithChildren> = ({ children }) => {
  const [accountType, setAccountType] = useState<string | null>(null);
  // const [institution, setInstitution] = useState<number | null>(null);
  const [user, setUser] = useState<UserType | null>(null);
  const [userHeadOffice, setUserHeadOffice] =
    useState<UserHeadOfficeType | null>(null);
  const [userBranch, setUserBranch] = useState<UserBranchType | null>(null);

  return (
    <SessionContext.Provider
      value={{
        accountType,
        setAccountType,
        // institution,
        // setInstitution,
        user,
        setUser,
        userHeadOffice,
        setUserHeadOffice,
        userBranch,
        setUserBranch,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export function useSession() {
  return React.useContext(SessionContext);
}

export default SessionProvider;
