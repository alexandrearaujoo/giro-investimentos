import Button from "../../components/Button";
import { render } from "../../utils/renderThemeTest";

describe("<Button />", () => {
  test("É possivel renderizar um button", () => {
    const { getByRole } = render(<Button>Simular</Button>);
    expect(getByRole("button", { name: /Simular/i })).toBeDefined();
  });
});
