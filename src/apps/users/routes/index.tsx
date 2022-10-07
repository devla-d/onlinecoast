import { RouteInterface } from "../../../utils";
import { getRandomNumber } from "../../../utils/helper";
import { AccountDetails } from "../pages/AccountDetails";
import Cards from "../pages/Cards";
import ChangePassword from "../pages/ChangePassword";
import Dashboard from "../pages/Dashboard";
import InternationalTransfer from "../pages/InternationalTransfer";
import ResetPin from "../pages/ResetPin";

import TransactionDetails from "../pages/TransactionDetails";
import Transactions from "../pages/Transactions";
import TransferToOther from "../pages/TransferToOther";
import TransferToSame from "../pages/TransferToSame";

const UserRoutes: RouteInterface[] = [
  {
    id: getRandomNumber(),
    element: <Dashboard />,
    path: "/dashboard",
  },
  {
    id: getRandomNumber(),
    element: <AccountDetails />,
    path: "/account-details",
  },
  {
    id: getRandomNumber(),
    element: <Transactions />,
    path: "/transactions-log",
  },
  {
    id: getRandomNumber(),
    element: <TransactionDetails />,
    path: "/transactions-log/:id",
  },
  {
    id: getRandomNumber(),
    element: <Cards />,
    path: "/cards",
  },
  {
    id: getRandomNumber(),
    element: <TransferToSame />,
    path: "/onlineseacoat-transfer",
  },
  {
    id: getRandomNumber(),
    element: <TransferToOther />,
    path: "/other-transfer",
  },
  {
    id: getRandomNumber(),
    element: <InternationalTransfer />,
    path: "/international-transfer",
  },
  {
    id: getRandomNumber(),
    element: <ResetPin />,
    path: "/reset-pin",
  },
  {
    id: getRandomNumber(),
    element: <ChangePassword />,
    path: "/change-password",
  },
];

export default UserRoutes;
