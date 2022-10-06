import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <>
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
            <NavLink to="/dashboard">
              <i className="fa-solid fa-wallet"></i>
              <span>balance enquiry</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/account-details">
              <i className="fa-solid fa-user"></i>
              <span>account details</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/transactions-log">
              <i className="fa-solid fa-file"></i>
              <span>transactions</span>
            </NavLink>
          </li>
          <li className="sub-header">
            <span>ACCOUNT TRANSFERS</span>
          </li>
          <li>
            <NavLink to="/cards">
              <i className="fa-solid fa-credit-card"></i>
              <span>cards</span>
            </NavLink>
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
          <li className="sub-header">
            <span>SELF SERVICE</span>
          </li>
          <li>
            <a href="#">
              <i className="fa-solid fa-credit-card"></i>
              <span>card application</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-solid fa-lock"></i>
              <span>change password</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-solid fa-key"></i>
              <span>Reset pin</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
