import { GlobalStyle } from "./utils/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./utils/theme.jsx";
export const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{/* Components */}</ThemeProvider>
    </>
  );
};
