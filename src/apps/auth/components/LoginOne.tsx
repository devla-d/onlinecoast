import CustomInput from "@/components/CustomInput";
import CustomSubmitBtn from "@/components/CustomSubmitBtn";
import { axiosPublic } from "@/utils";
import { AxiosError } from "axios";
import { FormikValues, useFormik } from "formik";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { LoginContext } from "../pages/Login";

import { DesLoginResponse, Loginschema } from "../utils";

const LoginOne = () => {
  const { setloading, loading, setstoreDate, setCurrentStep } =
    useContext(LoginContext)!;
  const sendUserlogin = async (val: FormikValues) => {
    setloading(true);
    axiosPublic
      .post<DesLoginResponse>("/sign-in/", val)
      .then(({ data }) => {
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
        setstoreDate(data);
        setCurrentStep((prev) => prev + 1);
      })
      .catch((e: AxiosError) => {
        console.log(e);
      });
    setloading(false);
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        username: "",
        password: "",
      },
      validationSchema: Loginschema,
      onSubmit(values, formikHelpers) {
        sendUserlogin(values);
      },
    });
  return (
    <>
      <div className="auth-card">
        <div className="authCardHeader">
          <h2 className="font-weight-normal  ">
            Login into
            <br />
            your
            <span> account</span>
          </h2>
          <h4>
            Don`t have an account? <Link to="/sign-up">click here</Link>
          </h4>
        </div>
        <div className="authCardBody">
          <form onSubmit={handleSubmit} className="loginFormOnne">
            <div className="mb-3">
              <CustomInput
                placeholder="Account number"
                name="username"
                handleBlur={handleBlur}
                handleChange={handleChange}
                label="Account Number"
                error={errors.username}
                touched={touched.username}
                type={"text"}
                value={values.username}
              />
            </div>
            <div className="mb-3">
              <CustomInput
                placeholder="*****"
                name="password"
                handleBlur={handleBlur}
                handleChange={handleChange}
                label="Password"
                error={errors.password}
                touched={touched.password}
                type={"password"}
                value={values.password}
              />
            </div>
            <div className="smButton">
              <CustomSubmitBtn
                color="primary"
                text="Login"
                loading={loading}
                type="submit"
              />
              <h2>
                <Link to="/forgot-password">Forgot password?</Link>
              </h2>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginOne;
