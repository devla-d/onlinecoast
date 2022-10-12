import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  useEffect(() => {
    var links = document.querySelectorAll("#accordionSidebar li a");

    if (window.innerWidth < 767) {
      links.forEach((link) => {
        link.addEventListener("click", function (e) {
          console.log(link);
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
          <a className="nav-link" href="/superadmin/withdrawals/">
            <i className="fas fa-fw fa-download"></i>
            <span> Withdraw</span>
          </a>
        </li>
        <hr className="sidebar-divider" />
        <li className="nav-item">
          <a className="nav-link" href="/superadmin/deposits/">
            <i className="fas fa-fw fa-credit-card"></i>
            <span>Deposit</span>
          </a>
        </li>
        <hr className="sidebar-divider" />

        <li className="nav-item">
          <a className="nav-link" href="/superadmin/investments/">
            <i className="fas fa-fw fa-signal"></i>
            <span>Invetments</span>
          </a>
        </li>
        <hr className="sidebar-divider" />

        <li className="nav-item">
          <a className="nav-link" href="/superadmin/packages/">
            <i className="fas fa-fw fa-gift"></i>
            <span>Packages</span>
          </a>
        </li>

        <hr className="sidebar-divider" />
        <div className="version" id="version-rxzadmin"></div>
      </ul>
    </>
  );
};

export default SideBar;
