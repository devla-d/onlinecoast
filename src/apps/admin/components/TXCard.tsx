import { Link } from "react-router-dom";

const TXCard = () => {
  return (
    <>
      <div className="col-lg-8 mb-2">
        <Link to="/admin/transactions/1" className="card h-100">
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col mr-2">
                <div className="h5 mb-0 font-weight-bold text-gray-800 text-truncate">
                  jimmy john
                </div>
                <div className="mt-2 mb-0 text-muted text-xs">
                  <span className="text-success mr-2">
                    <i className="fa"></i>$0
                  </span>
                  <span> 2022-Oct-Wed 12:40PM</span>
                </div>
              </div>
              <div className="col-auto">
                {/* <img
                  className="img-profile rounded-circle"
                  src="/superadmin/img/liq.png"
                  style={{ maxWidth: "42px", height: "42px" }}
                /> */}
                <img
                  className="img-profile rounded-circle"
                  src="/superadmin/img/cyber.svg"
                  style={{ maxWidth: "42px", height: "42px" }}
                />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default TXCard;
