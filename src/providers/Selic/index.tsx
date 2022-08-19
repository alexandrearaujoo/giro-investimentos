import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { brasilApi } from "../../services/api";

interface Props {
  children: ReactNode;
}

interface ValorSelic {
  name: string;
  valor: number;
}

interface EmprestimoProps {
  valor_investido: number;
  periodo: number;
}

interface SelicContextData {
  valorSelic: ValorSelic;
  valor: number;
  getValue: () => Promise<void>;
  calcularEmprestimo: (data: EmprestimoProps) => void;
}

const SelicContext = createContext<SelicContextData>({} as SelicContextData);

export const SelicProvider = ({ children }: Props) => {
  const [valorSelic, setValorSelic] = useState<ValorSelic>({} as ValorSelic);
  const [valor, setValor] = useState<number>(0);

  useEffect(() => {
    getValue();
  }, []);

  const getValue = async () => {
    const { data } = await brasilApi.get("/Selic");
    setValorSelic(data);
  };

  const calcularEmprestimo = (data: EmprestimoProps) => {
    const { valor } = valorSelic;
    const { periodo, valor_investido } = data;

    const resultado =
      valor_investido * ((valor / 12) * periodo) + valor_investido;

    setValor(resultado);
  };

  return (
    <SelicContext.Provider
      value={{ valorSelic, valor, getValue, calcularEmprestimo }}
    >
      {children}
    </SelicContext.Provider>
  );
};

export const useSelic = () => useContext(SelicContext);
