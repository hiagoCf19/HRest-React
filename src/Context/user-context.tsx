import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

// Tipo para os dados do usuário
type UserData = {
  userName: string;
  userKey: string;
};

// Tipo para o valor do contexto
type UserContextType = {
  userData: UserData | undefined;
  setUserData: Dispatch<SetStateAction<UserData | undefined>>;
};

// Inicializando o contexto com um valor padrão adequado
const UserContext = createContext<UserContextType | undefined>(undefined);

type UserProviderProps = {
  children: ReactNode;
};

export function UserProvider({ children }: UserProviderProps) {
  const [userData, setUserData] = useState<UserData | undefined>();

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
