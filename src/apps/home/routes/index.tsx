import { RouteInterface } from "../../../utils";
import { getRandomNumber } from "../../../utils/helper";
import About from "../pages/About";
import Home from "../pages/Home";

const HomeRoutes: RouteInterface[] = [
  {
    id: getRandomNumber(),
    element: <Home />,
    path: "/",
  },
  {
    id: getRandomNumber(),
    element: <About />,
    path: "/about",
  },
];
export default HomeRoutes;
