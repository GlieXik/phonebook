import { GlobalStyle } from "./utils/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./utils/theme.jsx";
import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { Layout } from "./Layout";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { refreshUser } from "./redux/auth/operations";
import { useAuth } from "./hooks/useAuth";
import { RestrictedRoute } from "./Components/RestrictedRoute";
import { PrivateRoute } from "./Components/PrivateRoute";

const RegisterPage = lazy(() => import("./pages/Register"));
const LoginPage = lazy(() => import("./pages/Login"));
const ContactsPage = lazy(() => import("./pages/Contacts"));
export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <b>refresh</b>
  ) : (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route element={<Layout></Layout>} path="/">
            <Route
              element={
                <RestrictedRoute
                  component={RegisterPage}
                  redirectTo="/tasks"
                ></RestrictedRoute>
              }
              index
            ></Route>
            <Route
              element={
                <RestrictedRoute
                  component={LoginPage}
                  redirectTo="/tasks"
                ></RestrictedRoute>
              }
              path="/login"
            ></Route>
            <Route
              element={
                <PrivateRoute
                  component={ContactsPage}
                  redirectTo="/login"
                ></PrivateRoute>
              }
              path="/tasks"
            />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
};
