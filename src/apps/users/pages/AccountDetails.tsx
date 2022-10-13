import { resetUser } from "@/apps/auth/slicer";
import { useAppDispatch, useAppSelector } from "@/hooks/useStore";
import useUtils from "@/hooks/useUtils";
import { BASE_URL } from "@/utils";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import BreadcrumNav from "../components/BreadcrumNav";

const AccountDetails = () => {
  useUtils("Account details");
  const user = useAppSelector((state) => state.user.user)!;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const logout = () => {
    dispatch(resetUser());
    toast.info("Logged out");
    navigate("/sign-in");
  };

  return (
    <>
      <div className="container">
        <div className="row">
          {/* breadcrum     background-color: #f2f4f8; */}
          <BreadcrumNav pagenavTitle="Account" currentPage="account details" />
          {/* breadcrum */}
          <div className="accountDetailBox">
            <div className="row">
              <div className="col-lg-5">
                <div className="user-profile">
                  <div className="userProfileHead">
                    <div>
                      <img src={`${BASE_URL}${user.profile_img}`} alt="" />
                    </div>
                  </div>
                  <div className="userProfileStat border-bottom ">
                    <div className="status">
                      <h5>
                        status :{" "}
                        <span className="badge text-bg-success">Success</span>
                      </h5>
                    </div>
                    <div className="log">
                      <a
                        onClick={() => logout()}
                        className="btn btn-primary btn-sm"
                        href="#"
                      >
                        <i className="fa-solid fa-sign-out-alt"></i>

                        <span>Log Off</span>
                      </a>
                    </div>
                  </div>
                  <div className="userProfileBody">
                    <div className="progresBox">
                      <div className="label">
                        <h5>
                          account status :{" "}
                          <span className="text-success">Active</span>
                        </h5>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-label="Example with label"
                          style={{ width: "25%" }}
                          aria-valuenow={25}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          25%
                        </div>
                      </div>
                    </div>
                    <div className="progresBox">
                      <div className="label">
                        <h5>profile completion </h5>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-label="Example with label"
                          style={{ width: "100%" }}
                          aria-valuenow={100}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          100%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="userForm">
                  <form action="#" method="get">
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor={`id_name`} className="form-label">
                          First name
                        </label>
                        <input
                          type="text"
                          name="{name}"
                          className={"form-control "}
                          id={`id_$`}
                          placeholder="first name"
                          defaultValue={user.first_name}
                          disabled={true}
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor={`id_name`} className="form-label">
                          Last name
                        </label>
                        <input
                          type="text"
                          name="{name}"
                          className={"form-control "}
                          id={`id_$`}
                          placeholder="last name"
                          defaultValue={user.last_name}
                          disabled={true}
                        />
                        <p className="invalid-feedback"> </p>
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor={`id_name`} className="form-label">
                          Date of birth
                        </label>
                        <input
                          type="text"
                          name="{name}"
                          className={"form-control "}
                          id={`id_$`}
                          placeholder="Date of birth"
                          defaultValue={user.date_of_birth}
                          disabled={true}
                        />
                        <p className="invalid-feedback"> </p>
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor={`id_name`} className="form-label">
                          Email
                        </label>
                        <input
                          type="text"
                          name="{name}"
                          className={"form-control "}
                          id={`id_$`}
                          placeholder="email"
                          defaultValue={user.email}
                          disabled={true}
                        />
                        <p className="invalid-feedback"> </p>
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor={`id_name`} className="form-label">
                          Phone number
                        </label>
                        <input
                          type="text"
                          name="{name}"
                          className={"form-control "}
                          id={`id_$`}
                          placeholder="phone number"
                          defaultValue={user.phone_number}
                          disabled={true}
                        />
                        <p className="invalid-feedback"> </p>
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor={`id_name`} className="form-label">
                          Security pin
                        </label>
                        <input
                          type="text"
                          name="{name}"
                          className={"form-control "}
                          id={`id_$`}
                          placeholder="security pin"
                          defaultValue={user.security_pin}
                          disabled={true}
                        />
                        <p className="invalid-feedback"> </p>
                      </div>
                      <div className="col-md-12 mb-3">
                        <label htmlFor={`id_name`} className="form-label">
                          Next of kin
                        </label>
                        <input
                          type="text"
                          name="{name}"
                          className={"form-control "}
                          id={`id_$`}
                          placeholder="next of kin"
                          defaultValue={user.next_of_kin}
                          disabled={true}
                        />
                        <p className="invalid-feedback"> </p>
                      </div>
                      <div className="col-md-12 mb-3">
                        <label htmlFor={`id_name`} className="form-label">
                          Street name
                        </label>
                        <input
                          type="text"
                          name="{name}"
                          className={"form-control "}
                          id={`id_$`}
                          placeholder="street name"
                          defaultValue={user.street_name}
                          disabled={true}
                        />
                        <p className="invalid-feedback"> </p>
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor={`id_name`} className="form-label">
                          City
                        </label>
                        <input
                          type="text"
                          name="{name}"
                          className={"form-control "}
                          id={`id_$`}
                          placeholder="city"
                          disabled={true}
                          defaultValue={user.city}
                        />
                        <p className="invalid-feedback"> </p>
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor={`id_name`} className="form-label">
                          State
                        </label>
                        <input
                          type="text"
                          name="{name}"
                          className={"form-control "}
                          id={`id_$`}
                          placeholder="state"
                          defaultValue={user.state}
                          disabled={true}
                        />
                        <p className="invalid-feedback"> </p>
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor={`id_name`} className="form-label">
                          Zipcode
                        </label>
                        <input
                          type="text"
                          name="{name}"
                          className={"form-control "}
                          id={`id_$`}
                          placeholder="zipcode"
                          defaultValue={user.zipcode}
                          disabled={true}
                        />
                        <p className="invalid-feedback"> </p>
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor={`id_name`} className="form-label">
                          Country
                        </label>
                        <input
                          type="text"
                          name="{name}"
                          className={"form-control "}
                          id={`id_$`}
                          placeholder="Country"
                          defaultValue={user.country}
                          disabled={true}
                        />
                        <p className="invalid-feedback"> </p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountDetails;
