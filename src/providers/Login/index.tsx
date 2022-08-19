import { createContext, ReactNode, useContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

interface Props {
  children: ReactNode;
}

interface User {
  email: string;
  password: string;
}

interface LoginContextData {
  user: User;
  login: (data: User) => void;
}

const LoginContext = createContext<LoginContextData>({} as LoginContextData);

export const LoginProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User>({} as User);

  const navigate = useNavigate();

  const login = (data: User) => {
    setUser(data);
    toast.success("Login efetuado!");
    navigate("/dashboard");
  };

  return <LoginContext.Provider value={{login, user}}>{children}</LoginContext.Provider>;
};

export const useLogin = () => useContext(LoginContext);
