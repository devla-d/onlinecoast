import { toggleMobileNav } from "../utils";

const Home = () => {
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
            <li>
              <a href="#">about</a>
            </li>
            <li>
              <a href="#">business banking</a>
            </li>
            <li>
              <a href="#">personal banking</a>
            </li>
            <li>
              <a href="#">structured solution</a>
            </li>
            <li>
              <a href="#">knowledge center</a>
            </li>
            <li>
              <a href="#">specialist banking</a>
            </li>
          </ul>
        </div>
        <div id="topHeaderTwo">
          <ul className="unstyled">
            <li className="logo">
              <a href="#">
                <img src="/home/logo.png" alt="Logo" />
              </a>
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
            <a href="#">about</a>
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

      {/* Banner */}
      <div
        id="bannerCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active item-1 bg-parallax ">
            <div className="carouselContent">
              <div>
                <h5 data-aos="fade-up" className="welcomeTxt-1 ">
                  Banking made easy, more secure &#38; more personal
                </h5>
                <div>
                  <a href="#" className="btn btn-primary">
                    learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item item-2 bg-parallax ">
            <div className="carouselContent">
              <div>
                <h5 data-aos="fade-down" className="welcomeTxt-2">
                  connecting to all your banking needs
                </h5>

                <div className="text-center">
                  <a href="#" className="btn btn-primary">
                    get started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#bannerCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#bannerCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* Banner ends */}

      {/* section 1 */}
      <section className="in-section">
        <div className="container">
          <div className="in-section-title">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <h2
                  data-aos="zoom-in-up"
                  className="setFont"
                  data-fontsize={21}
                >
                  Presenting <span>products</span> and <span>services</span>{" "}
                  that are right for you
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-10">
              <div className="featureBox" data-aos="flip-left">
                <div className="featureIcon one">
                  <i className="fa-solid fa-globe"></i>
                </div>
                <div className="featureTitle">
                  <h3>Online Business</h3>
                </div>
                <div className="featureText">
                  <p>
                    Explore the power of simpler and smarter banking. Bank
                    online with over 250 services
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-10">
              <div className="featureBox" data-aos="flip-up">
                <div className="featureIcon two">
                  <i className="fa-solid fa-mobile"></i>
                </div>
                <div className="featureTitle">
                  <h3>Mobile Bank</h3>
                </div>
                <div className="featureText">
                  <p>Fast, safe and easy way to send money in minutes.**</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-10">
              <div className="featureBox" data-aos="flip-right">
                <div className="featureIcon three">
                  <i className="fa-sharp fa-solid fa-file-shield"></i>
                </div>
                <div className="featureTitle">
                  <h3>Safe and Secure</h3>
                </div>
                <div className="featureText">
                  <p>
                    Explore the power of simpler and smarter banking. Bank
                    online with over 250 services
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section 1 ends */}

      {/* section 2 */}
      <section
        className="in-section sectionTwo setBg row justify-content-center alignCenter"
        data-bg="/home/sectwo.webp"
      >
        <div className="col-lg-6">
          <div className="sectoContent">
            <div className="sectwoImgBox" data-aos="zoom-in">
              <img src="/home/sail.png" alt="sail" />
            </div>
            <div className="sectwoTxtBox">
              <h2 className="text-center" data-aos="fade-up">
                {" "}
                When you bank with Seacoast,
                <br /> you have options.
              </h2>
              <p data-aos="fade-down">
                Life can get hectic, but that doesn't mean your banking has to.
                At Seacoast, we make banking easy and convenient by offering
                services that allow you to bank anywhere, anytime.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* section 2 */}
      {/* section 3 */}
      <section className="in-section">
        <div className="container">
          <div className="in-section-title">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <h2
                  data-aos="fade-in-up"
                  className="setFont"
                  data-fontsize={21}
                >
                  OUR <span>SERVICES</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-6">
              <div className="serviceBox" data-aos="fade-up">
                <div className="serviceIconBox">
                  <img src="/home/chart.png" alt="" />
                </div>
                <div className="serviceTxtbox">
                  <h2>Investments</h2>
                  <p>
                    Etam cursus lectus nec tortor sagittis, at ultrices diam
                    tempus. Nullam scelerisque lectus a viverra adipiscin.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="serviceBox" data-aos="fade-right">
                <div className="serviceIconBox">
                  <img src="/home/signpost.png" alt="" />
                </div>
                <div className="serviceTxtbox">
                  <h2>Superior Advice</h2>
                  <p>
                    Etam cursus lectus nec tortor sagittis, at ultrices diam
                    tempus. Nullam scelerisque lectus a viverra adipiscin.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="serviceBox" data-aos="fade-left">
                <div className="serviceIconBox">
                  <img src="/home/wallet.png" alt="" />
                </div>
                <div className="serviceTxtbox">
                  <h2>Household Savings</h2>
                  <p>
                    Etam cursus lectus nec tortor sagittis, at ultrices diam
                    tempus. Nullam scelerisque lectus a viverra adipiscin.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="serviceBox" data-aos="fade-up">
                <div className="serviceIconBox">
                  <img src="/home/briefcase.png" alt="" />
                </div>
                <div className="serviceTxtbox">
                  <h2>Private Banking</h2>
                  <p>
                    Etam cursus lectus nec tortor sagittis, at ultrices diam
                    tempus. Nullam scelerisque lectus a viverra adipiscin.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="serviceBox" data-aos="fade-left">
                <div className="serviceIconBox">
                  <img src="/home/shield.png" alt="" />
                </div>
                <div className="serviceTxtbox">
                  <h2>Insurance</h2>
                  <p>
                    Etam cursus lectus nec tortor sagittis, at ultrices diam
                    tempus. Nullam scelerisque lectus a viverra adipiscin.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="serviceBox" data-aos="fade-up-left">
                <div className="serviceIconBox">
                  <img src="/home/administration.png" alt="" />
                </div>
                <div className="serviceTxtbox">
                  <h2>Legal Advice</h2>
                  <p>
                    Etam cursus lectus nec tortor sagittis, at ultrices diam
                    tempus. Nullam scelerisque lectus a viverra adipiscin.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section 3 */}

      {/* section4 */}
      <section
        className="in-section sectionFour setBg row justify-content-center alignCenter"
        data-bg="/home/banner4.jpg"
      >
        <div className="col-lg-4">
          <div className="secivBox"></div>
        </div>
      </section>
      {/* section4 */}
      <section className="in-section"></section>
    </>
  );
};

export default Home;
