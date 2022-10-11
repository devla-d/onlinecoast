import CustomInput from "@/components/CustomInput";
import CustomSubmitBtn from "@/components/CustomSubmitBtn";
import useUtils from "@/hooks/useUtils";
import { axiosPublic } from "@/utils";
import { AxiosError } from "axios";
import { FormikValues, useFormik } from "formik";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ForgotPasswordSchema, DesForgotPasswordResponse } from "../utils";

const ForgotPassword = () => {
  useUtils("Forgot password");
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
      },
      validationSchema: ForgotPasswordSchema,
      onSubmit(values, formikHelpers) {
        sendEmail(values);
      },
    });

  const sendEmail = async (val: FormikValues) => {
    setloading(true);
    try {
      const { data } = await axiosPublic.post<DesForgotPasswordResponse>(
        "/forgot-password/",
        val
      );
      if (data.errors) {
        if (Array.isArray(data.errors)) {
          data.errors.forEach((err) => {
            toast.error(err);
          });
        } else {
          toast.error(data.errors);
        }
        setloading(false);
        return false;
      }
      navigate("/confirm-mail");
    } catch (error) {
      let err = error as AxiosError;

      toast.error(err.message);
      setloading(false);
    }
  };

  return (
    <>
      <div className="auth-card">
        <div className="authCardHeader">
          <h2 className="font-weight-normal  ">
            Reset
            <br />
            your
            <span> Password</span>
          </h2>
          <h4>
            Don`t have an account? <Link to="/sign-up">click here</Link>
          </h4>
        </div>
        <div className="authCardBody">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <CustomInput
                placeholder="*****"
                name="email"
                handleBlur={handleBlur}
                handleChange={handleChange}
                label="Email"
                error={errors.email}
                touched={touched.email}
                type={"email"}
                value={values.email}
              />
            </div>

            <div className="smButton">
              <CustomSubmitBtn
                color="primary"
                text="Submit"
                loading={loading}
                type="submit"
              />
              <h2>
                <Link to="/sign-in">Login?</Link>
              </h2>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
