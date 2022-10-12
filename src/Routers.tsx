import { Routes, Route } from "react-router-dom";
import AdminLayout from "./apps/admin/AdminLayout";
import AdminRoutes from "./apps/admin/routes";
import AuthLayout from "./apps/auth/AuthLayout";
import AuthRoutes from "./apps/auth/routes";
import HomeLayout from "./apps/home/HomeLayout";
import HomeRoutes from "./apps/home/routes";
import Protected from "./apps/users/components/Protected";
import UserRoutes from "./apps/users/routes";
import UserLayout from "./apps/users/UserLayout";
import PageNotFound from "./components/PageNotFound";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route element={<HomeLayout />}>
          {HomeRoutes.map((elm) => (
            <Route element={elm.element} key={elm.id} path={elm.path} />
          ))}
        </Route>
        <Route element={<AuthLayout />}>
          {AuthRoutes.map((elm) => (
            <Route element={elm.element} path={elm.path} key={elm.id} />
          ))}
        </Route>
        <Route element={<Protected />}>
          <Route element={<UserLayout />}>
            {UserRoutes.map((com) => (
              <Route element={com.element} path={com.path} key={com.id} />
            ))}
          </Route>
        </Route>
        <Route element={<AdminLayout />}>
          {AdminRoutes.map((com) => (
            <Route
              element={com.element}
              path={`/admin${com.path}`}
              key={com.id}
            />
          ))}
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default Routers;
