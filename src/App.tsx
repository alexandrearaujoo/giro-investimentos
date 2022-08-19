import { Toaster } from "react-hot-toast";
import Router from "./routes";
import theme from "./styles/theme";

const App = () => {
  return (
    <>
      <Toaster
        toastOptions={{
          style: {
            fontFamily: theme.fonts.inter,
            fontWeight: theme.weigthts.fontWeight500,
          },
        }}
      />
      <Router />
    </>
  );
};

export default App;
