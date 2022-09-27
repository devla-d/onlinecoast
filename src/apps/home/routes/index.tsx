import { RouteInterface } from "../../../utils";
import { getRandomNumber } from "../../../utils/helper";
import About from "../pages/About";
import Business from "../pages/Business";
import Home from "../pages/Home";
import Personal from "../pages/Personal";

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
  {
    id: getRandomNumber(),
    element: <Business />,
    path: "/business-banking",
  },

  {
    id: getRandomNumber(),
    element: <Personal />,
    path: "/personal-banking",
  },
];
export default HomeRoutes;
