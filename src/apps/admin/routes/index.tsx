import { RouteInterface } from "@/utils";
import { getRandomNumber } from "@/utils/helper";

import IndexPage from "../pages/IndexPage";
import Transactions from "../pages/Transactions";
import TrxDetails from "../pages/TrxDetails";
import UserDetail from "../pages/UserDetail";
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
  {
    id: getRandomNumber(),
    element: <UserDetail />,
    path: "/users/:id",
  },
  {
    id: getRandomNumber(),
    element: <Transactions />,
    path: "/transactions",
  },
  {
    id: getRandomNumber(),
    element: <TrxDetails />,
    path: "/transactions/:id",
  },
];

export default AdminRoutes;
