import ReactDOM from "react-dom";

const TopupModal = () => {
  const dialog = document.getElementById("dialog-wrapper") as HTMLDivElement;
  return ReactDOM.createPortal(
    <>
      <div
        className="modal fade"
        id="topupModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="topupModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabelLogout">
                Top up user
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form method="post" action="">
              <div className="modal-body">
                <h4 className="text-dark">
                  User : <small>enadmin</small>
                </h4>
                <input type="hidden" name="account_id" />

                <div className="form-group">
                  <label htmlFor="amount">Amount</label>
                  <input
                    type="number"
                    name="amount"
                    className="form-control"
                    required={true}
                  />
                </div>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <input
                  className="btn btn-success"
                  type="submit"
                  name="submit"
                  value="Submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>,
    dialog
  );
};

export default TopupModal;
