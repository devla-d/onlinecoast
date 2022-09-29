import { Routes, Route } from "react-router-dom";
import AuthLayout from "./apps/auth/AuthLayout";
import AuthRoutes from "./apps/auth/routes";
import HomeLayout from "./apps/home/HomeLayout";
import HomeRoutes from "./apps/home/routes";

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
      </Routes>
    </>
  );
};

export default Routers;
