import { Link } from "react-router-dom";
import { TxtCardIn } from "../utils";

const TxtCard = ({ transaction }: TxtCardIn) => {
  let trxIcon: JSX.Element;
  let trxAmount: JSX.Element;
  if (transaction.mode == "debit") {
    trxIcon = <i className="fa-solid fa-upload text-danger"></i>;
    trxAmount = <h4 style={{ color: "orangered" }}>-${transaction.amount}</h4>;
  } else {
    trxIcon = <i className="fas fa-download text-warning"></i>;
    trxAmount = <h4 className="text-success">+${transaction.amount}</h4>;
  }
  return (
    <>
      <div className="in-trans-card">
        <div
          className="trans-icon"
          style={{ backgroundColor: "rgb(189, 182, 182)" }}
        >
          {trxIcon}
        </div>
        <div className="trans-name text-truncate">
          <h4>{transaction.mode}</h4>
          <p className="in-text-lead text-truncate">{transaction.date}</p>
        </div>
        <div className="trans-amount">{trxAmount}</div>
        <div className="trans-detail">
          <div>
            <Link to={`/transactions-log/${transaction.id}`} className="">
              <i className="fas fa-angle-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TxtCard;
