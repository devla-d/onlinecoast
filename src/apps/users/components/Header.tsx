import { resetUser } from "@/apps/auth/slicer";
import { useAppDispatch, useAppSelector } from "@/hooks/useStore";
import { BASE_URL } from "@/utils";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { toggleSidebar } from "../utils";

const Header = () => {
  const user = useAppSelector((state) => state.user.user)!;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const logout = () => {
    dispatch(resetUser());
    toast.info("Logged out");
    navigate("/sign-in");
  };
  return (
    <>
      <header id="userHeader">
        <nav>
          <div className="logo" data-aos="fade-right">
            <img src="/home/logo.png" alt="logo" />
          </div>
          <div className="menu">
            <ul>
              <li data-aos="fade-left" data-aos-delay="100">
                <a href="mailto:support@onlineseacoastacct.net">
                  <i className="fa-solid fa-envelope" data-ballon></i>
                </a>
              </li>
              <li
                className="hiddenMobile"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <Link to="/change-password">
                  <i className="fa-solid fa-cog" data-ballon></i>
                </Link>
              </li>
              <li
                className="hiddenWide"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <a href="#" id="toogleSidebar" onClick={() => toggleSidebar()}>
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
                      src={`${BASE_URL}${user.profile_img}`}
                      alt="Avatar"
                      className="avatar-lg rounded-circle"
                    />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <div className="media">
                        <img
                          src={`${BASE_URL}${user.profile_img}`}
                          alt="Avatar"
                          className="avatar-lg rounded-circle mr-3"
                        />
                        <div className="media-body text-truncate">
                          <h4>
                            {user.first_name} {user.last_name}
                          </h4>
                          <p className="text-muted">{user.account_number}</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/account-details">
                        <i className="fa-solid fa-user"></i>
                        Profile
                      </Link>
                    </li>
                    <li>
                      <a
                        onClick={() => logout()}
                        className="dropdown-item"
                        href="#"
                      >
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
    </>
  );
};

export default Header;
