const UserDetailsOne = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-12 mb-4">
          <div className="card userCard">
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-primary"> </h6>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="media mb-5">
                    <img
                      className="mr-3 user__avatar mr-0 mr-sm-3 "
                      src="/home/avatar.jpeg"
                      alt=""
                    />
                    <div className="media-body text-truncate">
                      <h4 className="mb-2" id="user_name">
                        Sammy John
                      </h4>
                      <p className="mb-1">
                        {" "}
                        <span>
                          <i className="fa fa-phone mr-2 has-text-link"></i>
                        </span>{" "}
                        <span id="user_phone">+299303040588</span>
                      </p>
                      <p className="mb-1">
                        <a href="#">
                          {" "}
                          <span>
                            <i className="fa fa-envelope mr-2 has-text-link"></i>
                          </span>
                          <span id="user_email">support@earntrue.money</span>{" "}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <ul className="user_balance_details">
                    <li>
                      <p>Total Balance</p>
                      <p>
                        $<span id="user_tot_bal">0</span>
                      </p>
                    </li>
                    <li>
                      <p>Amount Sent</p>
                      <p>
                        $<span id="user_amount_invested"></span>
                      </p>
                    </li>
                    <li>
                      <p>Amount Received</p>
                      <p>
                        $<span id="user_depo_bal">0</span>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card-footer mb-4">
              <div className="d-flex space-bt">
                <button
                  type="button"
                  data-toggle="modal"
                  data-target="#topupModal"
                  className="btn btn-success"
                >
                  <i className="fas fa-donate"></i> Top Up
                </button>

                <a href="#" className="btn btn-primary">
                  <i className="fas fa-pen"></i> Edit
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetailsOne;
