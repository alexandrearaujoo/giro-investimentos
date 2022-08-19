import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from "react";
import { IconType } from "react-icons";
import { Container, InputContainer, Label } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: any;
  icon?: IconType;
  changeType?: () => void;
}

const InputDefault: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, error, icon: Icon, changeType, ...rest },
  ref
) => {
  return (
    <Container>
      <Label>
        {label} {!!error && <span> - {error}</span>}{" "}
      </Label>
      <InputContainer>
        <input {...rest} ref={ref} />
        {Icon && <Icon onClick={changeType} />}
      </InputContainer>
    </Container>
  );
};

export const Input = forwardRef(InputDefault);
