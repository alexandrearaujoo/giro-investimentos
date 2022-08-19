import Investment from "../../assets/investment.png";
import { Input } from "../../components/Input";
import { Main, Form, H1, SectionForm, SectionImg } from "./styles";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import Button from "../../components/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../schemas";
import { useLogin } from "../../providers/Login";

interface LoginProps {
  email: string;
  password: string;
}

const Login = () => {
  document.title = "Login";
  const [showPassword, setShowPassord] = useState<boolean>(false);
  const { login } = useLogin();

  const changeType = () => setShowPassord(!showPassword);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data: LoginProps) => {
    login(data);
  };

  return (
    <Main>
      <SectionImg>
        <div>
          <img src={Investment} alt="Investment" />
        </div>
      </SectionImg>
      <SectionForm>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <H1>Login</H1>
          <Input
            label="Email"
            placeholder="Digite seu email"
            {...register("email")}
            error={errors.email?.message}
          />
          <Input
            label="Senha"
            type={showPassword ? "text" : "password"}
            placeholder="Digite sua senha"
            icon={showPassword ? FaEyeSlash : FaEye}
            changeType={changeType}
            {...register("password")}
            error={errors.password?.message}
          />
          <Button>Logar</Button>
        </Form>
      </SectionForm>
    </Main>
  );
};

export default Login;
