import React, { FC, PropsWithChildren, useState } from 'react';
import { UserType } from '../services/user/types';

type SessionContextType = {
  accountType: string | null;
  setAccountType: React.Dispatch<React.SetStateAction<string | null>>;
  // institution: number | null;
  // setInstitution: React.Dispatch<React.SetStateAction<number | null>>;
  user: UserType | null;
  setUser: React.Dispatch<React.SetStateAction<UserType | null>>;
};

const SessionContext = React.createContext({} as SessionContextType);

const SessionProvider: FC<PropsWithChildren> = ({ children }) => {
  const [accountType, setAccountType] = useState<string | null>(null);
  // const [institution, setInstitution] = useState<number | null>(null);
  const [user, setUser] = useState<UserType | null>(null);

  return (
    <SessionContext.Provider
      value={{
        accountType,
        setAccountType,
        // institution,
        // setInstitution,
        user,
        setUser,
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
