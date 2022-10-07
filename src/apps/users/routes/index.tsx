import { RouteInterface } from "../../../utils";
import { getRandomNumber } from "../../../utils/helper";
import { AccountDetails } from "../pages/AccountDetails";
import Cards from "../pages/Cards";
import Dashboard from "../pages/Dashboard";
import InternationalTransfer from "../pages/InternationalTransfer";
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
];

export default UserRoutes;
