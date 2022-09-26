import { RouteInterface, getRandomNumber } from "../../../utils";
import Home from "../pages/Home";

const HomeRoutes: RouteInterface[] = [
  {
    id: getRandomNumber(),
    element: <Home />,
    path: "/",
  },
];
export default HomeRoutes;
