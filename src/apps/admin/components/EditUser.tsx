import ReactDOM from "react-dom";

const EditUser = () => {
  const dialog = document.getElementById("dialog-wrapper") as HTMLDivElement;
  return ReactDOM.createPortal(
    <>
      <div
        className="modal fade"
        id="editModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="editModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabelLogout">
                Edit user
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
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label htmlFor="amount">First name</label>
                      <input
                        type="number"
                        name="amount"
                        className="form-control"
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label htmlFor="amount">Last name</label>
                      <input
                        type="number"
                        name="amount"
                        className="form-control"
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label htmlFor="amount">First name</label>
                      <input
                        type="number"
                        name="amount"
                        className="form-control"
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label htmlFor="amount">Last name</label>
                      <input
                        type="number"
                        name="amount"
                        className="form-control"
                        required={true}
                      />
                    </div>
                  </div>
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

export default EditUser;
