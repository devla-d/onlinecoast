import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import $ from "jquery";

const SideBar = () => {
  useEffect(() => {
    var links = document.querySelectorAll("#accordionSidebar li a");

    if (window.innerWidth < 767) {
      links.forEach((link) => {
        link.addEventListener("click", function (e) {
          $("body").toggleClass("sidebar-toggled");
          $(".sidebar").toggleClass("toggled");
          if ($(".sidebar").hasClass("toggled")) {
            $(".sidebar ").removeClass("toggled");
          }
        });
      });
    }

    return () => {
      links.forEach((e) => e.removeEventListener("click", function () {}));
    };
  }, []);

  return (
    <>
      <ul
        className="navbar-nav sidebar sidebar-light accordion"
        id="accordionSidebar"
      >
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="/"
        >
          <div className="sidebar-brand-icon">
            <img src="/superadmin/img/logo/logo2.png" />
          </div>
          <div className="sidebar-brand-text mx-3">RxzAdmin</div>
        </a>
        <hr className="sidebar-divider my-0" />
        <li className="nav-item active">
          <NavLink className="nav-link" to="/admin/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </NavLink>
        </li>
        <hr className="sidebar-divider" />

        <li className="nav-item">
          <NavLink className="nav-link" to="/admin/users/">
            <i className="fas fa-fw fa-users"></i>
            <span>Users</span>
          </NavLink>
        </li>

        <hr className="sidebar-divider" />
        <li className="nav-item">
          <a className="nav-link" href="/superadmin/deposits/">
            <i className="fas fa-fw fa-credit-card"></i>
            <span>Transactions</span>
          </a>
        </li>
        <hr className="sidebar-divider" />

        <div className="version" id="version-rxzadmin"></div>
      </ul>
    </>
  );
};

export default SideBar;
