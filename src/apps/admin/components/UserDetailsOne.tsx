import { DesUser } from "@/apps/auth/utils";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import { BASE_URL } from "@/utils";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EditUser from "./EditUser";
import TopupModal from "./TopupModal";

interface DesUserResponse {
  user: DesUser;
}

const UserDetailsOne = () => {
  const axiosPrivate = useAxiosPrivate();
  const [user, setuser] = useState<DesUser>();
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    axiosPrivate
      .get<DesUserResponse>(`/admin/all-users/${id}`)
      .then(({ data }) => {
        console.log(data);
        setuser(data.user);
      })
      .catch((e) => {
        let er = e as AxiosError;
        console.log(er);
        if (er.response?.status == 404) {
          navigate("/not-found");
        }
      });

    return () => {
      setuser(undefined);
    };
  }, [id]);

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-lg-12 mb-4">
          {user ? (
            <>
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
                          src={`${BASE_URL}${user.profile_img}`}
                          alt=""
                        />
                        <div className="media-body text-truncate">
                          <h4 className="mb-2" id="user_name">
                            {user.first_name + " " + user.last_name}
                          </h4>
                          <p className="mb-1">
                            {" "}
                            <span>
                              <i className="fa fa-phone mr-2 has-text-link"></i>
                            </span>{" "}
                            <span id="user_phone">{user.phone_number}</span>
                          </p>
                          <p className="mb-1">
                            <a href="#">
                              {" "}
                              <span>
                                <i className="fa fa-envelope mr-2 has-text-link"></i>
                              </span>
                              <span id="user_email">{user.email}</span>{" "}
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
                            $<span id="user_tot_bal">{user.balance}</span>
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

                    <a
                      type="button"
                      data-toggle="modal"
                      data-target="#editModal"
                      role={"button"}
                      href="#"
                      className="btn btn-primary"
                    >
                      <i className="fas fa-pen"></i> Edit
                    </a>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="col-xl-4 col-md-6 mb-4">
                <div className="card h-100">
                  <div className="card-body">
                    <h3>loading...</h3>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <TopupModal />
      <EditUser />
    </>
  );
};

export default UserDetailsOne;
