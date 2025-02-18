import { createContext, useEffect, useState } from "react";
import ChildrenProps from "../interface/ChildrenProps";

interface UserInterface {
  email: string;
  password: string;
}
type AuthType = {
  user: UserInterface;
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
};

const initialUser: UserInterface = {
  email: "testas@testas.lt",
  password: "testas",
};

const AuthContext = createContext<AuthType>({
  user: initialUser,
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

const AuthProvider = ({ children }: ChildrenProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<UserInterface>(initialUser);

  useEffect(() => {
    console.log("Auth state", { user, isAuthenticated });
  }, [user, isAuthenticated]);

  const login = (email: string, password: string) => {
    console.log("Login funkcija");
    if (email === initialUser.email && password === initialUser.password) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
    // setUser({ email, password });
  };

  const logout = () => {
    setUser(initialUser);
    setIsAuthenticated(false);
  };
  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
