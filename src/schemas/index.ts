import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Formato de email invalido")
    .required("Campo obrigatório"),
  password: yup.string().required("Campo obrigatório"),
});

export const simulacaoSchema = yup.object().shape({
  valor_investido: yup
    .number()
    .min(1, "Digite um valor acima de 0")
    .required("Campo obrigatório")
    .typeError("Deve ser um número"),
  periodo: yup
    .number()
    .min(1, "Digite um valor acima de 0")
    .required("Campo obrigatório")
    .typeError("Deve ser um número"),
});
