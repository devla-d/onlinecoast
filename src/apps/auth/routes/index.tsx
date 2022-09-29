import { RouteInterface } from "../../../utils";
import { getRandomNumber } from "../../../utils/helper";
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
];

export default AuthRoutes;
