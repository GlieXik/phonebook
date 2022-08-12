import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
export const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{/* Components */}</ThemeProvider>
    </>
  );
};
