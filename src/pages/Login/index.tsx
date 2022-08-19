import Investment from "../../assets/investment.png";
import { Input } from "../../components/Input";
import { Main, Form, H1, SectionForm, SectionImg } from "./styles";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import Button from "../../components/Button";

const Login = () => {
  document.title = "Login";
  const [showPassword, setShowPassord] = useState<boolean>(false);

  const changeType = () => setShowPassord(!showPassword);

  return (
    <Main>
      <SectionImg>
        <div>
          <img src={Investment} alt="Investment" />
        </div>
      </SectionImg>
      <SectionForm>
        <Form>
          <H1>Login</H1>
          <Input label="Email" placeholder="Digite seu email" />
          <Input
            label="Senha"
            type={showPassword ? "text" : "password"}
            placeholder="Digite sua senha"
            icon={showPassword ? FaEyeSlash : FaEye}
            changeType={changeType}
          />
          <Button>Logar</Button>
        </Form>
      </SectionForm>
    </Main>
  );
};

export default Login;
