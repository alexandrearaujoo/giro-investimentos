import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import { Input } from "../../components/Input";
import { useSelic } from "../../providers/Selic";
import { yupResolver } from "@hookform/resolvers/yup";
import { simulacaoSchema } from "../../schemas";
import { Form, H1, Label, Main, Section, SectionForm, Span } from "./styles";

interface SimulacaoProps {
  valor_investido: number;
  periodo: number;
}

const Dashboard = () => {
  document.title = "Dashboard";
  const { calcularEmprestimo, resultado } = useSelic();

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
    <Main>
      <SectionForm>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <H1>Simulação</H1>
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
        </Form>
      </SectionForm>

      {resultado.valor_final && (
        <Section>
          <div>
            <Label>
              Valor investido: <Span>R$ {resultado.valor_investido}</Span>
            </Label>
            <Label>
              Periodo de investimento: <Span>{resultado.periodo}</Span>
            </Label>
            <Label>
              Valor final: <Span>R$ {resultado.valor_final.toFixed(2)}</Span>
            </Label>
          </div>
        </Section>
      )}
    </Main>
  );
};

export default Dashboard;
