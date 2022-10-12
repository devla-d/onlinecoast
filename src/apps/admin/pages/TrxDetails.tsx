import BreadCrum from "../components/BreadCrum";

const TrxDetails = () => {
  return (
    <>
      <BreadCrum name="Trx Details" />
      <div className="row">
        <div className="col-lg-12 mb-4">
          <div className="card userCard">
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-primary"> </h6>
            </div>
            <div className="card-body">
              <div className="table-responsive table-upgrade">
                <table className="table">
                  <thead></thead>
                  <tbody>
                    <tr>
                      <td>User</td>
                      <td className="text-center">
                        <span id="with-user">Borinthofficial</span>
                      </td>
                    </tr>

                    <tr>
                      <td>Amount</td>
                      <td className="text-center text-danger">
                        $<span id="with-amount">6200</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Method</td>
                      <td className="text-center text-warning">
                        <span id="with-method">Bank Transfer</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Account number</td>
                      <td className="text-center text-warning">
                        <span id="with-method">222</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Account Name</td>
                      <td className="text-center text-warning">
                        <span id="with-method">Davir</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Bank</td>
                      <td className="text-center text-warning">
                        <span id="with-method">Vex</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Date</td>
                      <td className="text-center">
                        <span id="with-date">2022-Oct-Tue 2:35AM</span>
                      </td>
                    </tr>

                    <tr>
                      <td>Status</td>
                      <td className="text-center  text-success ">
                        <span id="with-status">approved</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="card-footer mb-">
              <div className="d-flex space-bt">
                <button className="btn btn-success">
                  <i className="fas fa-donate"></i> approve
                </button>

                <a href="#" className="btn btn-danger">
                  <i className="fas fa-ban"></i> Decline
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrxDetails;
