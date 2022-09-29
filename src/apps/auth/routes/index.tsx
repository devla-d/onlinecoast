import { RouteInterface } from "../../../utils";
import { getRandomNumber } from "../../../utils/helper";
import Register from "../pages/Register";

const AuthRoutes: RouteInterface[] = [
  {
    id: getRandomNumber(),
    element: <Register />,
    path: "/sign-up",
  },
];

export default AuthRoutes;
