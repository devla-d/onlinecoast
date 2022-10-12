import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import "./assets/bootstrap/bootstrap.min.css";
import "./assets/css/rxz-admin.scss";
import "./assets/css/responsive.scss";
import "./assets/css/utils.scss";
import "./assets/icons/line-awesome/css/line-awesome.min.css";
import "./assets/fontawesome/css/all.css";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import Topbar from "./components/Topbar";
import ToastDialog from "@/components/ToastDialog";

let coun_t = 0;
const AdminLayout = () => {
  useEffect(() => {
    const html = document.getElementsByTagName("html")[0];
    html.setAttribute("id", "adminDoc");
    const links = [
      "/superadmin/vendor/bootstrap/js/bootstrap.bundle.min.js",
      "/superadmin/vendor/jquery-easing/jquery.easing.min.js",
      "/superadmin/js/rxz-admin.js",
    ];

    if (coun_t > 0) {
      links.forEach((ln) => {
        const script = document.createElement("script");
        script.src = ln;
        script.async = true;
        script.setAttribute("data-mounted", "true");
        document.body.appendChild(script);
      });
    }
    coun_t++;
    var mountedScripts = document.querySelectorAll("[data-mounted='true']");

    return () => {
      html.removeAttribute("id");
      mountedScripts.forEach((scr) => {
        document.body.removeChild(scr);
      });
    };
  }, []);

  return (
    <>
      <div id="wrapper">
        {/* <!-- Sidebar --> */}
        <SideBar />
        {/* <!-- Sidebar --> */}

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            {/* <!-- TopBar --> */}
            <Topbar />
            {/* <!-- Topbar --> */}

            {/* <!--[container-fluid]--> */}
            <div className="container-fluid" id="container-wrapper">
              <Outlet />
            </div>

            <Footer />
          </div>
        </div>
      </div>
      <ToastDialog />
    </>
  );
};

export default AdminLayout;
