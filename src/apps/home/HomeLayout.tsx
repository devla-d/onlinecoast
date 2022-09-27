import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import AOS from "aos";
import "./assets/home.scss";
import "./assets/home.responsive.scss";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const HomeLayout = () => {
  useEffect(() => {
    AOS.init({
      offset: 0,
      duration: 1200,
      easing: "ease-in-out",
    });

    return () => {};
  }, []);

  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

export default HomeLayout;
