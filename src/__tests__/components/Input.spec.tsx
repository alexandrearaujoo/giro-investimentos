import { render } from '../../utils/renderThemeTest'
import { Input } from "../../components/Input";
import { FaEye } from "react-icons/fa";

describe("<Input />", () => {
  test("É possivel renderizar um input", () => {
    const { getByPlaceholderText } = render(
      <Input label="Email" placeholder="Digite seu email" />
    );
    expect(getByPlaceholderText('Digite seu email')).toBeTruthy()
  });
});
