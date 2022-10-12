import { changePasswordSchema } from "@/apps/users/utils";
import CustomInput from "@/components/CustomInput";
import CustomSubmitBtn from "@/components/CustomSubmitBtn";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import useUtils from "@/hooks/useUtils";
import { AxiosError } from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { toast } from "react-toastify";
import BreadCrum from "../components/BreadCrum";

const ChangePassword = () => {
  useUtils("Change password");
  const [loading, setloading] = useState(false);
  const axiosPrivate = useAxiosPrivate();
  const { handleBlur, handleChange, handleSubmit, errors, touched, values } =
    useFormik({
      initialValues: {
        oldpassword: "",
        newpassword: "",
        confirmnewpassword: "",
      },
      validationSchema: changePasswordSchema,
      onSubmit(values, formikHelpers) {
        setloading(true);
        axiosPrivate
          .post("/change-password/", values)
          .then(({ data }) => {
            if (data.msg) {
              toast.info("Password change");
              formikHelpers.resetForm();
            } else if (data.errors) {
              let errs = data.errors as Array<string>;
              errs.forEach((e) => {
                toast.error(e);
              });
            }
          })
          .catch((e) => {
            let err = e as AxiosError;
            if (err.response?.status === 400) {
              toast.error("Old Password don't match");
            }
            console.log(e);
          });
        setloading(false);
      },
    });
  return (
    <>
      <BreadCrum name="Change Password" />
      <div className="row justify-content-center">
        <div className="col-lg-8 mb-4">
          <div className="card userCard">
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-primary"> </h6>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="card-body">
                <div className=" mb-3">
                  <CustomInput
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    label="Old password"
                    name="oldpassword"
                    type="password"
                    value={values.oldpassword}
                    touched={touched.oldpassword}
                    error={errors.oldpassword}
                  />
                </div>
                <div className=" mb-3">
                  <CustomInput
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    label="New password"
                    name="newpassword"
                    type="password"
                    value={values.newpassword}
                    touched={touched.newpassword}
                    error={errors.newpassword}
                  />
                </div>

                <div className=" mb-3">
                  <CustomInput
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    label="Confirm New password"
                    name="confirmnewpassword"
                    type="password"
                    value={values.confirmnewpassword}
                    touched={touched.confirmnewpassword}
                    error={errors.confirmnewpassword}
                  />
                </div>
              </div>
              <div className="card-footer mb-">
                <div className="d-grid gap-2">
                  <CustomSubmitBtn
                    color="primary"
                    text="Submit"
                    loading={loading}
                    type="submit"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
