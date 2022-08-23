import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import { Input } from "../../components/Input";
import { useSelic } from "../../providers/Selic";
import { yupResolver } from "@hookform/resolvers/yup";
import { simulacaoSchema } from "../../schemas";
import {
  Form,
  H1,
  Label,
  Main,
  SectionForm,
  FirstBgColor,
  SecondBgColor,
} from "./styles";
import { TbChartInfographic } from "react-icons/tb";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import theme from "../../styles/theme";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "Resultado",
    },
  },
};

const labels = [
  "Valor investido",
  "Valor final",
  "Porcentagem",
  "Periodo em meses",
];

interface SimulacaoProps {
  valor_investido: number;
  periodo: number;
}

const Dashboard = () => {
  document.title = "Dashboard";
  const { calcularEmprestimo, resultado } = useSelic();

  const lucro = resultado.valor_final - resultado.valor_investido;

  const porcentagem = +Math.ceil((lucro / resultado.valor_investido) * 100);

  const data = {
    labels,
    datasets: [
      {
        labels: "TESTE",
        data: [
          resultado.valor_investido,
          resultado.valor_final,
          porcentagem,
          resultado.periodo,
        ],
        backgroundColor: [
          theme.colors.yellow,
          theme.colors.blue2,
          theme.colors.green,
          theme.colors.blue1,
        ],
      },
    ],
  };

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
    <>
      <FirstBgColor />
      <SecondBgColor />
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
        <div>
          {resultado.valor_final ? (
            <Bar
              options={options}
              data={data}
              height={400}
              style={{ maxWidth: "600" }}
            />
          ) : (
            <>
              <TbChartInfographic size={45} />

              <Label>Nenhum resultado</Label>
            </>
          )}
        </div>
      </Main>
    </>
  );
};

export default Dashboard;
