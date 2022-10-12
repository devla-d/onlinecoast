import { useEffect } from "react";
import BreadCrum from "../components/BreadCrum";

const IndexPage = () => {
  useEffect(() => {
    setTimeout(function () {}, 1000);

    return () => {};
  }, []);

  return (
    <>
      <BreadCrum name="Dashboard" />

      <div className="row justify-content-center mb-3">
        {/* <!-- Earnings (Monthly) Card Example --> */}
        <div className="col-xl-4 col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-uppercase mb-1">
                    Balance()
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    $0
                  </div>
                  <div className="mt-2 mb-0 text-muted text-xs">
                    <span className="text-success mr-2">
                      <i className="fa fa-arrow-up"></i> 3.48%
                    </span>
                    <span>Since last month</span>
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-dollar fa-2x text-primary"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- New User Card Example --> */}
        <div className="col-xl-4 col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-uppercase mb-1">
                    {" "}
                    Users
                  </div>
                  <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                    21
                  </div>
                  <div className="mt-2 mb-0 text-muted text-xs">
                    <span className="text-success mr-2">
                      <i className="fas fa-arrow-up"></i> 20.4%
                    </span>
                    <span>Since last month</span>
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-users fa-2x text-info"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Earnings (Annual) Card Example --> */}
        <div className="col-xl-4 col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-uppercase mb-1">
                    Total Transactions
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    10
                  </div>
                  <div className="mt-2 mb-0 text-muted text-xs">
                    <span className="text-success mr-2">
                      <i className="fas fa-arrow-up"></i> 12%
                    </span>
                    <span>Since last years</span>
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-file fa-2x text-success"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Pending Requests Card Example --> */}
        <div className="col-xl-4 col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-uppercase mb-1">
                    Completed Transactions
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    40
                  </div>
                  <div className="mt-2 mb-0 text-muted text-xs">
                    <span className="text-danger mr-2">
                      <i className="fas fa-arrow-down"></i> 1.10%
                    </span>
                    <span>Since yesterday</span>
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-download fa-2x text-warning"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Earnings (Monthly) Card Example --> */}
        <div className="col-xl-4 col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-uppercase mb-1">
                    Pending Transactions
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    16
                  </div>
                  <div className="mt-2 mb-0 text-muted text-xs">
                    <span className="text-success mr-2">
                      <i className="fa fa-arrow-up"></i> 3.48%
                    </span>
                    <span>Since last month</span>
                  </div>
                </div>
                <div className="col-auto">
                  <i className="la la-hourglass-half la-2x fa-2x text-warning"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Earnings (Annual) Card Example --> */}
        <div className="col-xl-4 col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-uppercase mb-1">
                    Status
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    active
                  </div>
                  <div className="mt-2 mb-0 text-muted text-xs">
                    <span className="text-success mr-2">
                      <i className="fas fa-arrow-up"></i> 12%
                    </span>
                    <span>Since last years</span>
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-ban fa-2x text-success"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;