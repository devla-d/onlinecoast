const Footer2 = () => {
  return (
    <>
      <footer className="footer footer-main">
        <div className="marque-line-wrap footer-marque"></div>
        <div className="footer-content ">
          <div className="container ">
            <nav className="footer-menu ">
              <ul>
                <li className="active ">
                  <a href="/">
                    <i className="mm-icon mm1--icon "></i>Home
                  </a>
                </li>
                <li>
                  <a href="/about/">
                    <i className="mm-icon mm1--icon "></i>About us
                  </a>
                </li>
                <li>
                  <a href="/partners/ ">
                    <i className="mm-icon mm1--icon "></i>For partners
                  </a>
                </li>
                <li>
                  <a href="/faqs/ ">
                    <i className="mm-icon mm1--icon "></i>FAQ
                  </a>
                </li>
                <li>
                  <a href="/privacy/">
                    <i className="mm-icon mm1--icon "></i>Privacy
                  </a>
                </li>
                <li>
                  <a href="/support/ ">
                    <i className="mm-icon mm1--icon "></i>Support
                  </a>
                </li>
              </ul>
            </nav>
            <div className="footer-bottom ">
              <div className="row ">
                <div className="col-md-4 order-md-2 ">
                  <div className="logo-wrap ">
                    <div
                      className="  d-flex align-items-center justify-content-"
                      style={{
                        height: "40px",
                        textDecoration: "none",
                        fontSize: "1rem",
                        fontWeight: "800",
                        letterSpacing: ".05rem",
                        marginLeft: "-19px",
                      }}
                    >
                      <img
                        src="/home/logo.png"
                        style={{
                          border: "0px",
                          width: "245px",
                          height: "69px",
                        }}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-4 order-md-3 ">
                  <div className="social-button-wrap ">
                    <span className="social-button-title ">
                      We are in socials:
                    </span>
                    <div className="social-button footer--social ">
                      <ul>
                        <li>
                          <a href="https://twitter.com " target="_blank ">
                            <i className="fab fa-twitter "></i>
                          </a>
                        </li>
                        <li>
                          <a href="# " target="_blank ">
                            <i className="fab fa-skype "></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.facebook.com " target="_blank ">
                            <i className="fab fa-facebook-f "></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://t.me/ " target="_blank ">
                            <i className="fab fa-telegram-plane "></i>
                            <span>Chat</span>
                          </a>
                        </li>
                        <li>
                          <a href="https://t.me/ " target="_blank ">
                            <i className="fab fa-telegram-plane "></i>
                            <span>Group</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 order-md-1 ">
                  <div className="copyright ">
                    Copyright earntruemoney.net
                    <br />
                    All rights reserved © 2019
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer2;
