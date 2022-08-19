import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import { Input } from "../../components/Input";
import { useSelic } from "../../providers/Selic";
import { yupResolver } from "@hookform/resolvers/yup";
import { simulacaoSchema } from "../../schemas";

interface SimulacaoProps {
  valor_investido: number;
  periodo: number;
}

const Dashboard = () => {
  document.title = "Dashboard";
  const { calcularEmprestimo, valor } = useSelic();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SimulacaoProps>({
    resolver: yupResolver(simulacaoSchema),
  });

  const onSubmit = (data: SimulacaoProps) => {
    calcularEmprestimo(data);
    reset();
  };

  return (
    <main>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Simulação</h1>
        <Input
          label="Valor investido"
          type="number"
          placeholder="Digite a quantia desejada"
          step="0.10"
          {...register("valor_investido")}
          error={errors.valor_investido?.message}
        />
        <Input
          label="Periodo de investimento"
          type="number"
          placeholder="Digite o periodo em meses"
          {...register("periodo")}
          error={errors.periodo?.message}
        />
        <Button type="submit">Simular</Button>
      </form>
    </main>
  );
};

export default Dashboard;
