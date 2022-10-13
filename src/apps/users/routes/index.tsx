import LoadingPage from "@/components/LoadingPage";
import { lazy, Suspense } from "react";
import { RouteInterface } from "../../../utils";
import { getRandomNumber } from "../../../utils/helper";
const AccountDetails = lazy(() => import("../pages/AccountDetails"));
const Cards = lazy(() => import("../pages/Cards"));
const ChangePassword = lazy(() => import("../pages/ChangePassword"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const InternationalTransfer = lazy(
  () => import("../pages/InternationalTransfer")
);
const ResetPin = lazy(() => import("../pages/ResetPin"));

const TransactionDetails = lazy(() => import("../pages/TransactionDetails"));
const Transactions = lazy(() => import("../pages/Transactions"));
const TransferToOther = lazy(() => import("../pages/TransferToOther"));
const TransferToSame = lazy(() => import("../pages/TransferToSame"));

const UserRoutes: RouteInterface[] = [
  {
    id: getRandomNumber(),
    element: (
      <Suspense fallback={<LoadingPage />}>
        <Dashboard />
      </Suspense>
    ),
    path: "/dashboard",
  },
  {
    id: getRandomNumber(),
    element: (
      <Suspense fallback={<LoadingPage />}>
        <AccountDetails />
      </Suspense>
    ),
    path: "/account-details",
  },
  {
    id: getRandomNumber(),
    element: (
      <Suspense fallback={<LoadingPage />}>
        <Transactions />
      </Suspense>
    ),
    path: "/transactions-log",
  },
  {
    id: getRandomNumber(),
    element: (
      <Suspense fallback={<LoadingPage />}>
        {" "}
        <TransactionDetails />
      </Suspense>
    ),
    path: "/transactions-log/:id",
  },
  {
    id: getRandomNumber(),
    element: (
      <Suspense fallback={<LoadingPage />}>
        {" "}
        <Cards />{" "}
      </Suspense>
    ),
    path: "/cards",
  },
  {
    id: getRandomNumber(),
    element: (
      <Suspense fallback={<LoadingPage />}>
        {" "}
        <TransferToSame />{" "}
      </Suspense>
    ),
    path: "/onlineseacoat-transfer",
  },
  {
    id: getRandomNumber(),
    element: (
      <Suspense fallback={<LoadingPage />}>
        {" "}
        <TransferToOther />{" "}
      </Suspense>
    ),
    path: "/other-transfer",
  },
  {
    id: getRandomNumber(),
    element: (
      <Suspense fallback={<LoadingPage />}>
        {" "}
        <InternationalTransfer />{" "}
      </Suspense>
    ),
    path: "/international-transfer",
  },
  {
    id: getRandomNumber(),
    element: (
      <Suspense fallback={<LoadingPage />}>
        {" "}
        <ResetPin />{" "}
      </Suspense>
    ),
    path: "/reset-pin",
  },
  {
    id: getRandomNumber(),
    element: (
      <Suspense fallback={<LoadingPage />}>
        {" "}
        <ChangePassword />{" "}
      </Suspense>
    ),
    path: "/change-password",
  },
];

export default UserRoutes;
