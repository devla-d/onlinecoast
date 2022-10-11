import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import useUtils from "@/hooks/useUtils";
import moment from "moment";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Link, useParams } from "react-router-dom";
import { DesTransaction, STATUS } from "../utils";

const TransactionDetails = () => {
  useUtils("Transaction Details");
  const axiosPrivate = useAxiosPrivate();
  const [transaction, setTxt] = useState<DesTransaction>();
  const { id } = useParams();

  useEffect(() => {
    axiosPrivate
      .get(`/transaction/${id}`)
      .then(({ data }) => {
        setTxt(data.transaction);
      })
      .catch((e) => {
        console.log(e);
      });

    return () => {};
  }, [id]);

  const dialog = document.getElementById("dialog-wrapper") as HTMLElement;
  return ReactDOM.createPortal(
    <>
      <div className="txtDialog active">
        <Link to="/transactions-log" className="txtDialogclose">
          <i className="fa-solid fa-xmark"></i>
        </Link>
        <div className="txtDialogContent">
          {transaction ? (
            <>
              <h5 className="text-center">Transaction</h5>
              <div className="txtDialogHead">
                <div>
                  <div className="txtDHIcon">
                    <i className="fa-solid fa-upload text-danger"></i>
                  </div>
                  <div className="txtDHname text-truncate">
                    <h4 className="text-muted">
                      {transaction.benneficiary_name}
                    </h4>
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
                        <span id="with-user">{transaction.mode}</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Beneficiary</td>
                      <td className="text-center">
                        <span id="with-user">
                          {transaction.benneficiary_accnumber}
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td>Amount</td>
                      <td className="text-center text-danger">
                        $<span id="with-amount">{transaction.amount}</span>
                      </td>
                    </tr>

                    <tr>
                      <td>Date</td>
                      <td className="text-center">
                        <span id="with-date">
                          {`${moment(transaction.createdAt).format(
                            "MMM Do YY"
                          )}`}
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td>Description</td>
                      <td className="text-center text-truncate text-muted">
                        <span id="with-date">{transaction.purpose}</span>
                      </td>
                    </tr>

                    <tr>
                      <td>Status</td>
                      <td className="text-center ">
                        {transaction.status == STATUS.DECLINED ? (
                          <span className="text-danger" id="with-status">
                            {transaction.status}
                          </span>
                        ) : null}
                        {transaction.status == STATUS.PENDING ? (
                          <span className="text-warning" id="with-status">
                            {transaction.status}
                          </span>
                        ) : null}

                        {transaction.status == STATUS.SUCCESS ? (
                          <span className="text-success" id="with-status">
                            {transaction.status}
                          </span>
                        ) : null}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          ) : (
            <>
              <h3 className="text-center">Not Found</h3>
            </>
          )}
        </div>
      </div>
    </>,
    dialog
  );
};

export default TransactionDetails;
