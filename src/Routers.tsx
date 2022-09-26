import { Routes, Route } from "react-router-dom";
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
      </Routes>
    </>
  );
};

export default Routers;
