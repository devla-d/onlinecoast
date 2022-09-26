import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { setBg, sizeFont } from "../../utils";
import AOS from "aos";
import "./assets/home.scss";
import "./assets/home.responsive.scss";

const HomeLayout = () => {
  useEffect(() => {
    sizeFont();
    setBg();
    AOS.init({
      offset: 0,
      duration: 1200,
      easing: "ease-in-out",
    });

    return () => {};
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
};

export default HomeLayout;
