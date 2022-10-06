import ReactDOM from "react-dom";

const TransactionDetails = () => {
  const dialog = document.getElementById("dialog-wrapper") as HTMLElement;
  return ReactDOM.createPortal(
    <>
      <div className="txtDialog">
        <div className="txtDialogContent">
          <h5 className="text-center">Transaction</h5>
          <div className="txtDialogHead">
            <div>
              <div className="txtDHIcon">
                <i className="fa-solid fa-upload text-danger"></i>
              </div>
              <div className="txtDHname text-truncate">
                <h4 className="text-muted">Sammy aniekan</h4>
              </div>
            </div>
          </div>
          <div className="txtDialogBody">
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td>Type</td>
                  <td className="text-center">
                    <span id="with-user">Sent</span>
                  </td>
                </tr>
                <tr>
                  <td>Beneficiary</td>
                  <td className="text-center">
                    <span id="with-user">{"xxxxxxxxxxxx"}</span>
                  </td>
                </tr>

                <tr>
                  <td>Amount</td>
                  <td className="text-center text-danger">
                    $<span id="with-amount">{50}</span>
                  </td>
                </tr>

                <tr>
                  <td>Date</td>
                  <td className="text-center">
                    <span id="with-date">{new Date().toString()}</span>
                  </td>
                </tr>

                <tr>
                  <td>Description</td>
                  <td className="text-center">
                    <span id="with-date">food</span>
                  </td>
                </tr>

                <tr>
                  <td>Status</td>
                  <td className="text-center text-success">
                    <span id="with-status">{"pending"}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>,
    dialog
  );
};

export default TransactionDetails;
