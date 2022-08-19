import { ReactNode } from "react";
import { LoginProvider } from "./Login";
import { SelicProvider } from "./Selic";

interface Props {
  children: ReactNode;
}

const AppProvider = ({ children }: Props) => {
  return (
    <LoginProvider>
      <SelicProvider>{children}</SelicProvider>
    </LoginProvider>
  );
};

export default AppProvider;
