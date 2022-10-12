import { RouteInterface } from "@/utils";
import { getRandomNumber } from "@/utils/helper";
import ChangePassword from "../pages/ChangePassword";

import IndexPage from "../pages/IndexPage";
import Profile from "../pages/Profile";
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
  {
    id: getRandomNumber(),
    element: <ChangePassword />,
    path: "/change-password",
  },
  {
    id: getRandomNumber(),
    element: <Profile />,
    path: "/profile",
  },
];

export default AdminRoutes;
