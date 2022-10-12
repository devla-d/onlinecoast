import { RouteInterface } from "@/utils";
import { getRandomNumber } from "@/utils/helper";

import IndexPage from "../pages/IndexPage";
import Users from "../pages/Users";

const AdminRoutes: RouteInterface[] = [
  {
    id: getRandomNumber(),
    element: <IndexPage />,
    path: "/",
  },
  {
    id: getRandomNumber(),
    element: <Users />,
    path: "/users",
  },
];

export default AdminRoutes;
