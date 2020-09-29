import React, {
  useState,
  useEffect,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";

import { AUTH_STORAGE_KEY } from "../../utils/constants";
import { storage } from "../../utils/storage";

interface authContext {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}

const createEmptyAuthContext = (): authContext => ({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

const AuthContext = React.createContext<authContext>(createEmptyAuthContext());

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(`Can't use "useAuth" without an AuthProvider!`);
  }
  return context;
}

function AuthProvider({ children }: any) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const lastAuthState = storage.get(AUTH_STORAGE_KEY);
    const isLoggedIn = Boolean(lastAuthState);

    setIsLoggedIn(isLoggedIn);
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}

export { useAuth };
export default AuthProvider;
