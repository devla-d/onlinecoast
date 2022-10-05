import { Outlet } from "react-router-dom";
import "./assets/user.scss";
import "./assets/user.responsive.scss";
import { useEffect } from "react";
import AOS from "aos";
const UserLayout = () => {
  useEffect(() => {
    AOS.init({
      offset: 0,
      duration: 1200,
      easing: "ease-in-out",
    });

    return () => {};
  }, []);
  return (
    <div className="user-wrapper">
      {/* top bar */}
      <header id="userHeader">
        <nav>
          <div className="logo" data-aos="fade-right">
            <img src="/home/logo.png" alt="logo" />
          </div>
          <div className="menu">
            <ul>
              <li data-aos="fade-left" data-aos-delay="100">
                <a href="#">
                  <i className="fa-solid fa-envelope" data-ballon></i>
                </a>
              </li>
              <li
                className="hiddenMobile"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <a href="#">
                  <i className="fa-solid fa-cog" data-ballon></i>
                </a>
              </li>
              <li
                className="hiddenWide"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <a href="#">
                  <i className="fa-solid fa-bars"></i>
                </a>
              </li>
              <li
                className="hiddenMobile"
                data-aos="fade-left"
                data-aos-delay="400"
              >
                <div className="dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src="/home/avatar.jpeg"
                      alt="Avatar"
                      className="avatar-lg rounded-circle"
                    />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <div className="media">
                        <img
                          src="/home/avatar.jpeg"
                          alt="Avatar"
                          className="avatar-lg rounded-circle mr-3"
                        />
                        <div className="media-body text-truncate">
                          <h4>Samuel Aniekan</h4>
                          <p className="text-muted">92829283038040</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="fa-solid fa-user"></i>
                        Profile
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="fas fa-sign-out-alt"></i>
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      {/* top bar ends */}
      <div className="wrapper-content">
        {/* side bar   */}
        <div id="sideBar">
          <ul>
            <li className="avatar">
              <div className="media">
                <img
                  src="/home/avatar.jpeg"
                  alt="Avatar"
                  className="avatar-lg rounded-circle mr-3"
                />
                <div className="media-body text-truncate">
                  <h4>Samuel Aniekan</h4>
                  <p className="text-muted">92829283038040</p>
                </div>
              </div>
            </li>
            <li className="sub-header" data-aos="fade-in">
              <span>My account</span>
            </li>
            <li>
              <a href="#">
                <i className="fa-solid fa-wallet"></i>
                <span>balance enquiry</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-solid fa-user"></i>
                <span>account details</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-solid fa-file"></i>
                <span>transaction details</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-solid fa-envelope"></i>
                <span>secure email</span>
              </a>
            </li>
            <li className="sub-header">
              <span>ACCOUNT TRANSFERS</span>
            </li>
            <li>
              <a href="#">
                <i className="fa-solid fa-credit-card"></i>
                <span>Transfer to card</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-solid fa-exchange"></i>
                <span>Transfer to same bank</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-solid fa-random"></i>
                <span>Transfer to other bank</span>
              </a>
            </li>{" "}
            <li>
              <a href="#">
                <i className="fa-solid fa-globe"></i>
                <span>international transfer</span>
              </a>
            </li>{" "}
            <li>
              <a href="#">
                <i className="fa-solid fa-book"></i>
                <span>standing order</span>
              </a>
            </li>{" "}
            <li className="sub-header">
              <span>SELF SERVICE</span>
            </li>
          </ul>
        </div>
        {/* side bar ends */}
        <Outlet />
      </div>
    </div>
  );
};

export default UserLayout;
