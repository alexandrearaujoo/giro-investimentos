import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
import theme from "./styles/theme";
import GlobalStyled from "./styles/global";
import AppProvider from "./providers";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(
  <ThemeProvider theme={theme}>
    <AppProvider>
      <App />
    </AppProvider>
    <GlobalStyled />
  </ThemeProvider>
);
