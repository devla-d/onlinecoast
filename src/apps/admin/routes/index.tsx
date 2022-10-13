import LoadingPage from "@/components/LoadingPage";
import { RouteInterface } from "@/utils";
import { getRandomNumber } from "@/utils/helper";
import { lazy, Suspense } from "react";
import ChangePassword from "../pages/ChangePassword";

const IndexPage = lazy(() => import("../pages/IndexPage"));
const Profile = lazy(() => import("../pages/Profile"));
const Transactions = lazy(() => import("../pages/Transactions"));
const TrxDetails = lazy(() => import("../pages/TrxDetails"));
const UserDetail = lazy(() => import("../pages/UserDetail"));
const Users = lazy(() => import("../pages/Users"));

const AdminRoutes: RouteInterface[] = [
  {
    id: getRandomNumber(),
    element: (
      <Suspense fallback={<LoadingPage />}>
        <IndexPage />
      </Suspense>
    ),
    path: "/",
  },
  {
    id: getRandomNumber(),
    element: (
      <Suspense fallback={<LoadingPage />}>
        {" "}
        <Users />
      </Suspense>
    ),
    path: "/users",
  },
  {
    id: getRandomNumber(),
    element: (
      <Suspense fallback={<LoadingPage />}>
        <UserDetail />{" "}
      </Suspense>
    ),
    path: "/users/:id",
  },
  {
    id: getRandomNumber(),
    element: (
      <Suspense fallback={<LoadingPage />}>
        <Transactions />{" "}
      </Suspense>
    ),
    path: "/transactions",
  },
  {
    id: getRandomNumber(),
    element: (
      <Suspense fallback={<LoadingPage />}>
        <TrxDetails />{" "}
      </Suspense>
    ),
    path: "/transactions/:id",
  },
  {
    id: getRandomNumber(),
    element: (
      <Suspense fallback={<LoadingPage />}>
        <ChangePassword />{" "}
      </Suspense>
    ),
    path: "/change-password",
  },
  {
    id: getRandomNumber(),
    element: (
      <Suspense fallback={<LoadingPage />}>
        <Profile />{" "}
      </Suspense>
    ),
    path: "/profile",
  },
];

export default AdminRoutes;
