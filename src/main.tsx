import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
import theme from "./styles/theme";
import GlobalStyled from "./styles/global";
import AppProvider from "./providers";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <AppProvider>
        <App />
      </AppProvider>
      <GlobalStyled />
    </ThemeProvider>
  </BrowserRouter>
);
