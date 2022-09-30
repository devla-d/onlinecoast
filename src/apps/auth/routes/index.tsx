import { RouteInterface } from "../../../utils";
import { getRandomNumber } from "../../../utils/helper";
import CreateAccountDetails from "../pages/CreateAccountDetails";
import ForgotPassword from "../pages/ForgotPassword";
import Login from "../pages/Login";
import Register from "../pages/Register";

const AuthRoutes: RouteInterface[] = [
  {
    id: getRandomNumber(),
    element: <Register />,
    path: "/sign-up",
  },
  {
    id: getRandomNumber(),
    element: <Login />,
    path: "/sign-in",
  },
  {
    id: getRandomNumber(),
    element: <ForgotPassword />,
    path: "/forgot-password",
  },
  {
    id: getRandomNumber(),
    element: <CreateAccountDetails />,
    path: "/setup-account",
  },
];

export default AuthRoutes;
