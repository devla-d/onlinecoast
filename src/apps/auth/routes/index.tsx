import LoadingPage from "@/components/LoadingPage";
import { Suspense } from "react";
import { RouteInterface } from "../../../utils";
import { getRandomNumber } from "../../../utils/helper";
import ConfirmEmail from "../pages/ConfirmEmail";
import CreateAccountDetails from "../pages/CreateAccountDetails";
import ForgotPassword from "../pages/ForgotPassword";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ResetPassword from "../pages/ResetPassword";

const AuthRoutes: RouteInterface[] = [
  {
    id: getRandomNumber(),
    element: (
      <Suspense fallback={<LoadingPage />}>
        <Register />
      </Suspense>
    ),
    path: "/sign-up",
  },
  {
    id: getRandomNumber(),
    element: (
      <Suspense fallback={<LoadingPage />}>
        <Login />
      </Suspense>
    ),
    path: "/sign-in",
  },
  {
    id: getRandomNumber(),
    element: (
      <Suspense fallback={<LoadingPage />}>
        {" "}
        <ForgotPassword />
      </Suspense>
    ),
    path: "/forgot-password",
  },
  {
    id: getRandomNumber(),
    element: (
      <Suspense fallback={<LoadingPage />}>
        <CreateAccountDetails />
      </Suspense>
    ),
    path: "/setup-account",
  },
  {
    id: getRandomNumber(),
    element: (
      <Suspense fallback={<LoadingPage />}>
        <ConfirmEmail />
      </Suspense>
    ),
    path: "/confirm-mail",
  },
  {
    id: getRandomNumber(),
    element: (
      <Suspense fallback={<LoadingPage />}>
        {" "}
        <ResetPassword />
      </Suspense>
    ),
    path: "/reset-password",
  },
];

export default AuthRoutes;
