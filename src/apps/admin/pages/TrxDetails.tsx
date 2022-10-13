import { DesTransaction, STATUS } from "@/apps/users/utils";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import moment from "moment";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import BreadCrum from "../components/BreadCrum";

interface DesTxtTResponse {
  transaction: DesTransaction;
}

interface DesHandleEdit {
  transaction: DesTransaction;
  msg: string;
}

const TrxDetails = () => {
  const axiosPrivate = useAxiosPrivate();
  const [trasaction, settrasaction] = useState<DesTransaction>();
  const [loading, setloading] = useState(false);
  const { id } = useParams();

  const handleEditTxt = (stat: string) => {
    setloading(true);
    axiosPrivate
      .post<DesHandleEdit>("/admin/edit-transactions/", { stat, id })
      .then(({ data }) => {
        toast.info(data.msg);
        settrasaction(data.transaction);
      })
      .catch(console.log);
    setloading(false);
  };

  useEffect(() => {
    axiosPrivate
      .get<DesTxtTResponse>(`/admin/all-transactions/${id}`)
      .then(({ data }) => {
        settrasaction(data.transaction);
      })
      .catch(console.log);
    return () => {};
  }, [id]);
  return (
    <>
      <BreadCrum name="Trx Details" />
      <div className="row justify-content-center">
        <div className="col-lg-12 mb-4">
          <div className="card userCard">
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-primary"> </h6>
            </div>
            {trasaction ? (
              <>
                <div className="card-body">
                  <div className="table-responsive table-upgrade">
                    <table className="table">
                      <thead></thead>
                      <tbody>
                        <tr>
                          <td>User</td>
                          <td className="text-center">
                            <span id="with-user">
                              {trasaction.user.first_name} {""}{" "}
                              {trasaction.user.last_name}
                            </span>
                          </td>
                        </tr>

                        <tr>
                          <td>Amount</td>
                          <td className="text-center text-danger">
                            $<span id="with-amount">{trasaction.amount}</span>
                          </td>
                        </tr>

                        <tr>
                          <td>Beneficiary name</td>
                          <td className="text-center text-warning">
                            <span>{trasaction.benneficiary_name}</span>
                          </td>
                        </tr>
                        <tr>
                          <td>Beneficiary Account Number</td>
                          <td className="text-center text-warning">
                            <span>{trasaction.benneficiary_accnumber}</span>
                          </td>
                        </tr>
                        <tr>
                          <td>Bank</td>
                          <td className="text-center text-warning">
                            <span>{trasaction.bank_name}</span>
                          </td>
                        </tr>
                        <tr>
                          <td>Date</td>
                          <td className="text-center">
                            <span id="with-date">{`${moment(
                              trasaction.createdAt
                            ).format("YYYY-MMM-ddd ,h:mm:ss a")}`}</span>
                          </td>
                        </tr>

                        <tr>
                          <td>Bic code</td>
                          <td className="text-center">
                            <span>{trasaction.bic_code}</span>
                          </td>
                        </tr>

                        <tr>
                          <td>First name</td>
                          <td className="text-center">
                            <span>{trasaction.firstname}</span>
                          </td>
                        </tr>

                        <tr>
                          <td>Last name</td>
                          <td className="text-center">
                            <span>{trasaction.lastname}</span>
                          </td>
                        </tr>

                        <tr>
                          <td>Phone</td>
                          <td className="text-center">
                            <span>{trasaction.phone}</span>
                          </td>
                        </tr>

                        <tr>
                          <td>Email</td>
                          <td className="text-center">
                            <span>{trasaction.email}</span>
                          </td>
                        </tr>

                        <tr>
                          <td>City</td>
                          <td className="text-center">
                            <span>{trasaction.city}</span>
                          </td>
                        </tr>

                        <tr>
                          <td>Country</td>
                          <td className="text-center">
                            <span>{trasaction.city}</span>
                          </td>
                        </tr>

                        <tr>
                          <td>Type</td>
                          <td className="text-center">
                            <span>{trasaction.mode.toUpperCase()}</span>
                          </td>
                        </tr>

                        <tr>
                          <td>Status</td>
                          {trasaction.status === STATUS.DECLINED ? (
                            <td className="text-center  text-danger ">
                              <span id="with-status">{trasaction.status}</span>
                            </td>
                          ) : null}
                          {trasaction.status === STATUS.PENDING ? (
                            <td className="text-center  text-warning ">
                              <span id="with-status">{trasaction.status}</span>
                            </td>
                          ) : null}
                          {trasaction.status === STATUS.SUCCESS ? (
                            <td className="text-center  text-success ">
                              <span id="with-status">{trasaction.status}</span>
                            </td>
                          ) : null}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="card-footer mb-">
                  <div className="d-flex space-bt">
                    {trasaction.status === STATUS.PENDING &&
                    trasaction.mode === "send" ? (
                      <>
                        <button
                          disabled={loading}
                          onClick={() => handleEditTxt("approved")}
                          className="btn btn-success"
                        >
                          <i className="fas fa-donate"></i> approve
                        </button>

                        <button
                          disabled={loading}
                          onClick={() => handleEditTxt("declined")}
                          className="btn btn-danger"
                        >
                          <i className="fas fa-ban"></i> Decline
                        </button>
                      </>
                    ) : (
                      <>
                        <button disabled={true} className="btn btn-success">
                          <i className="fas fa-donate"></i> approve
                        </button>

                        <button disabled={true} className="btn btn-danger">
                          <i className="fas fa-ban"></i> Decline
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </>
            ) : (
              <>
                <>
                  <div className="col-xl-4 col-md-6 mb-4">
                    <div className="card h-100">
                      <div className="card-body">
                        <h3>loading...</h3>
                      </div>
                    </div>
                  </div>
                </>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TrxDetails;
