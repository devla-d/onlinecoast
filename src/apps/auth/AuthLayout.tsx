import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import "./assets/auth.scss";
import "./assets/auth.responsive.scss";
const AuthLayout = () => {
  const [dimensionheight, setDimensions] = useState(window.innerHeight);

  useEffect(() => {
    function handleResize() {
      setDimensions(window.innerHeight);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="auth-wrapper" style={{ minHeight: dimensionheight }}>
      <Outlet />
      <div className="imGBox">
        <img src="/home/logo.png" alt="Logo" />
      </div>
    </div>
  );
};

export default AuthLayout;
