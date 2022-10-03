import { RouteInterface } from "../../../utils";
import { getRandomNumber } from "../../../utils/helper";
import Dashboard from "../pages/Dashboard";

const UserRoutes: RouteInterface[] = [
  {
    id: getRandomNumber(),
    element: <Dashboard />,
    path: "/dashboard",
  },
];

export default UserRoutes;
