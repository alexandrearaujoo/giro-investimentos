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

interface Resultado {
  periodo: number;
  valor_investido: number;
  valor_final: number;
}

interface SelicContextData {
  valorSelic: ValorSelic;
  resultado: Resultado;
  getValue: () => Promise<void>;
  calcularEmprestimo: (data: EmprestimoProps) => void;
}

const SelicContext = createContext<SelicContextData>({} as SelicContextData);

export const SelicProvider = ({ children }: Props) => {
  const [valorSelic, setValorSelic] = useState<ValorSelic>({
    name: "SELIC",
    valor: 13.75,
  } as ValorSelic);
  const [resultado, setResultado] = useState<Resultado>({} as Resultado);

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

    setResultado({
      valor_final: +resultado.toFixed(2),
      periodo: periodo,
      valor_investido: valor_investido,
    });
  };

  return (
    <SelicContext.Provider
      value={{ valorSelic, resultado, getValue, calcularEmprestimo }}
    >
      {children}
    </SelicContext.Provider>
  );
};

export const useSelic = () => useContext(SelicContext);
