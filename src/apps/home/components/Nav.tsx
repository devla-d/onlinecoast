import { Link, NavLink } from "react-router-dom";
import { toggleMobileNav } from "../utils";
const Nav = () => {
  return (
    <>
      {/* Header */}
      <header id="homeHeader">
        <div id="topHeader">
          <ul className="supportSec unstyled">
            <li className="contactUs ">
              <a href="#">contact us</a>
            </li>
            <li className="faqs">
              <a href="#">faqs</a>
            </li>
          </ul>
          <ul className="navSec unstyled">
            <li data-aos="fade-left" data-aos-delay="100">
              <NavLink to="/about">about</NavLink>
            </li>
            <li data-aos="fade-left" data-aos-delay="200">
              <a href="#">business banking</a>
            </li>
            <li data-aos="fade-left" data-aos-delay="300">
              <a href="#">personal banking</a>
            </li>
            <li data-aos="fade-left" data-aos-delay="400">
              <a href="#">structured solution</a>
            </li>
            <li data-aos="fade-left" data-aos-delay="500">
              <a href="#">knowledge center</a>
            </li>
            <li data-aos="fade-left" data-aos-delay="600">
              <a href="#">specialist banking</a>
            </li>
          </ul>
        </div>
        <div id="topHeaderTwo">
          <ul className="unstyled">
            <li className="logo">
              <Link to="/">
                <img src="/home/logo.png" alt="Logo" />
              </Link>
            </li>
            <li className="mobNav">
              <button type="button" onClick={() => toggleMobileNav()}>
                <i className="fa-solid fa-bars" id="toggleIcon"></i>
              </button>
            </li>
            <li className="auth">
              <a href="" className="  ">
                <i className="fa-solid fa-user"></i> Sign in{" "}
              </a>
            </li>
          </ul>
        </div>
        <ul className="mobileNav unstyled" id="mobileNav">
          <li data-aos="fade-left" data-aos-delay="100">
            <NavLink to="/about">about</NavLink>
          </li>
          <li data-aos="fade-left" data-aos-delay="200">
            <a href="#">business banking</a>
          </li>
          <li data-aos="fade-left" data-aos-delay="300">
            <a href="#">personal banking</a>
          </li>
          <li data-aos="fade-left" data-aos-delay="400">
            <a href="#">structured solution</a>
          </li>
          <li data-aos="fade-left" data-aos-delay="500">
            <a href="#">knowledge center</a>
          </li>
          <li data-aos="fade-left" data-aos-delay="500">
            <a href="#">specialist banking</a>
          </li>
        </ul>
      </header>
      {/* Header ends */}
    </>
  );
};

export default Nav;
