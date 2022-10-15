import { DesUser } from "@/apps/auth/utils";
import CustomInput from "@/components/CustomInput";
import CustomSubmitBtn from "@/components/CustomSubmitBtn";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import { useFormik } from "formik";
import { useState } from "react";
import ReactDOM from "react-dom";
import { toast } from "react-toastify";

interface DecEditUser {
  user?: DesUser;
  setuser: React.Dispatch<React.SetStateAction<DesUser | undefined>>;
}

interface DesUserResponse {
  user: DesUser;
  msg: string;
}

const EditUser = ({ user, setuser }: DecEditUser) => {
  if (!user) return <h1>No User</h1>;
  var closeBtn = document.getElementById("closeBtn2") as HTMLButtonElement;
  const dialog = document.getElementById("dialog-wrapper") as HTMLDivElement;
  const axiosPrivate = useAxiosPrivate();
  const [loading, setloading] = useState(false);
  const submitData = (val: typeof values) => {
    setloading(true);
    axiosPrivate
      .post<DesUserResponse>("/admin/edit-user/", val)
      .then(({ data }) => {
        setuser(data.user);
        toast.info(data.msg);
        closeBtn.click();
      })
      .catch(console.log);
    setloading(false);
  };
  const { errors, handleBlur, handleChange, handleSubmit, values, touched } =
    useFormik({
      initialValues: {
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
        phone_number: user.phone_number,
        date_of_birth: user.date_of_birth,
        gender: user.gender,
        next_of_kin: user.next_of_kin,
        street_name: user.street_name,
        city: user.city,
        state: user.state,
        country: user.country,
        zipcode: user.zipcode,
        security_pin: user.security_pin,
        id: user.id,
      },
      onSubmit(values) {
        submitData(values);
      },
    });
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
            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <CustomInput
                      placeholder="first name"
                      name="first_name"
                      handleBlur={handleBlur}
                      handleChange={handleChange}
                      label="First Name"
                      error={errors.first_name}
                      touched={touched.first_name}
                      type={"text"}
                      value={values.first_name}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <CustomInput
                      placeholder="last name"
                      name="last_name"
                      handleBlur={handleBlur}
                      handleChange={handleChange}
                      label="Last Name"
                      error={errors.last_name}
                      touched={touched.last_name}
                      type={"text"}
                      value={values.last_name}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <CustomInput
                      placeholder="Date of birth (D/M/Y)"
                      name="date_of_birth"
                      handleBlur={handleBlur}
                      handleChange={handleChange}
                      label="Date of birth (D/M/Y)"
                      error={errors.date_of_birth}
                      touched={touched.date_of_birth}
                      type={"text"}
                      value={values.date_of_birth}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <CustomInput
                      placeholder="name@example.com"
                      name="email"
                      handleBlur={handleBlur}
                      handleChange={handleChange}
                      label="Email Address"
                      error={errors.email}
                      touched={touched.email}
                      type={"email"}
                      value={values.email}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <CustomInput
                      placeholder="phone number"
                      name="phone_number"
                      handleBlur={handleBlur}
                      handleChange={handleChange}
                      label="Phone number"
                      error={errors.phone_number}
                      touched={touched.phone_number}
                      type={"tel"}
                      value={values.phone_number}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <CustomInput
                      placeholder="Security Pin"
                      name="security_pin"
                      handleBlur={handleBlur}
                      handleChange={handleChange}
                      label="Security Pin"
                      error={errors.security_pin}
                      touched={touched.security_pin}
                      type={"number"}
                      value={values.security_pin}
                    />
                  </div>
                  <div className="col-md-12 mb-3">
                    <CustomInput
                      placeholder="Next of Kin"
                      name="next_of_kin"
                      handleBlur={handleBlur}
                      handleChange={handleChange}
                      label="Next of Kin"
                      error={errors.next_of_kin}
                      touched={touched.next_of_kin}
                      type={"text"}
                      value={values.next_of_kin}
                    />
                  </div>
                  <div className="col-md-12 mb-3">
                    <CustomInput
                      placeholder="Street name"
                      name="street_name"
                      handleBlur={handleBlur}
                      handleChange={handleChange}
                      label="Street Name"
                      error={errors.street_name}
                      touched={touched.street_name}
                      type={"text"}
                      value={values.street_name}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <CustomInput
                      placeholder="City"
                      name="city"
                      handleBlur={handleBlur}
                      handleChange={handleChange}
                      label="City"
                      error={errors.city}
                      touched={touched.city}
                      type={"text"}
                      value={values.city}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <CustomInput
                      placeholder="state"
                      name="state"
                      handleBlur={handleBlur}
                      handleChange={handleChange}
                      label="State"
                      error={errors.state}
                      touched={touched.state}
                      type={"text"}
                      value={values.state}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <CustomInput
                      placeholder="Zipcode"
                      name="zipcode"
                      handleBlur={handleBlur}
                      handleChange={handleChange}
                      label="Zipcode"
                      error={errors.zipcode}
                      touched={touched.zipcode}
                      type={"text"}
                      value={values.zipcode}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <CustomInput
                      placeholder="country"
                      name="country"
                      handleBlur={handleBlur}
                      handleChange={handleChange}
                      label="Country"
                      error={errors.country}
                      touched={touched.country}
                      type={"text"}
                      value={values.country}
                    />
                  </div>
                </div>
              </div>

              <div className="modal-footer justify-content-center">
                <button type="button" className="btn btn-outline-danger">
                  Delete user
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  data-dismiss="modal"
                  id="closeBtn2"
                >
                  Cancel
                </button>

                <CustomSubmitBtn
                  color="success"
                  text="Submit"
                  loading={loading}
                  type="submit"
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
