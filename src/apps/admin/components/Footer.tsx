const Footer = () => {
  return (
    <>
      <footer className="sticky-footer bg-white">
        <div className="container my-auto">
          <div className="copyright text-center my-auto">
            <span>
              copyright &copy; {new Date().getFullYear()}- developed by
              <b>
                <a href="#" target="_blank">
                  Sammy
                </a>
              </b>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
