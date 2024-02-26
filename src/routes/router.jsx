import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { RegisterPage } from "../pages/RegisterPage";
import { MainPage } from "../pages/MainPage";
import { PrivateRoute } from "./PrivateRoute";
import { LoginPage } from "../pages/LoginPage";

const role = JSON.parse(localStorage.getItem("auth")) || "";
// console.log(role);
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute
            Component={<MainPage />}
            fallBackPath="/login"
            isAllowed={!role}
          />
        ),
      },
    ],
  },
  {
    path: "login",
    element: (
      <PrivateRoute
        Component={<LoginPage />}
        fallBackPath="/"
        isAllowed={role}
      />
    ),
  },
  {
    path: "register",
    element: (
      <PrivateRoute
        Component={<RegisterPage />}
        fallBackPath="/"
        isAllowed={role}
      />
    ),
  },
  // {
  //   path: "/",
  //   element: <Layout />,
  //   children: [
  //     {
  //       path: "/register",
  //       element: <RegisterPage />,
  //     },
  //     {
  //       path: "/login",
  //       element: <LoginPage />,
  //     },
  //     {
  //       path: "/main",
  //       element: <MainPage />,
  //     },
  //   ],
  // },
]);
