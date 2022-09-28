import { RouteInterface } from "../../../utils";
import { getRandomNumber } from "../../../utils/helper";
import About from "../pages/About";
import Business from "../pages/Business";
import Home from "../pages/Home";
import Personal from "../pages/Personal";
import Specialist from "../pages/Specialist";
import StructuredSolution from "../pages/StructuredSolution";

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
  {
    id: getRandomNumber(),
    element: <StructuredSolution />,
    path: "/structured-solution",
  },
  {
    id: getRandomNumber(),
    element: <Specialist />,
    path: "/specialist-banking",
  },
];
export default HomeRoutes;
