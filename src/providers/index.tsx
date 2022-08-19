import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AppProvider = ({ children }: Props) => {
  return <>{children}</>;
};

export default AppProvider;
