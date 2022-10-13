import { DesTransaction, STATUS } from "@/apps/users/utils";
import moment from "moment";
import { Link } from "react-router-dom";

interface DesTXCard {
  transaction: DesTransaction;
}

const TXCard = ({ transaction }: DesTXCard) => {
  let stat = "";
  let send = true;
  if (transaction.status === STATUS.SUCCESS) {
    stat = "text-success";
  } else if (transaction.status === STATUS.PENDING) {
    stat = "text-warning";
  } else if (transaction.status === STATUS.DECLINED) {
    stat = "text-danger";
  }
  if (transaction.mode === "recieve") {
    send = false;
  }
  return (
    <>
      <div className="col-lg-8 mb-2">
        <Link
          to={`/admin/transactions/${transaction.id}`}
          className="card h-100"
        >
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col mr-2">
                <div className="h5 mb-0 font-weight-bold text-capitalize text-gray-800 text-truncate">
                  {transaction.user.first_name}{" "}
                  {transaction.user.last_name.substring(0, 1)}
                </div>
                <div className="mt-2 mb-0 text-muted text-xs text-truncate">
                  <span className={`${stat}   mr-2`}>
                    <i className="fa"></i>${transaction.amount}
                  </span>
                  <span>
                    {`${moment(transaction.createdAt).format(
                      "YYYY-MMM-ddd ,h:mm:ss a"
                    )}`}{" "}
                  </span>
                </div>
              </div>
              <div className="col-auto">
                {send ? (
                  <>
                    <img
                      className="img-profile rounded-circle"
                      src="/superadmin/img/liq.png"
                      style={{ maxWidth: "42px", height: "42px" }}
                    />
                  </>
                ) : (
                  <>
                    <img
                      className="img-profile rounded-circle"
                      src="/superadmin/img/cyber.svg"
                      style={{ maxWidth: "42px", height: "42px" }}
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default TXCard;
