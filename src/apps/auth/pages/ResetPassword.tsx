import CustomInput from "@/components/CustomInput";
import CustomSubmitBtn from "@/components/CustomSubmitBtn";
import useUtils from "@/hooks/useUtils";
import { axiosPublic } from "@/utils";
import axios, { AxiosError } from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import {
  INJWTPayload,
  INResetPasswordResponse,
  INResetVerifyResponse,
  ResetPasswordSchema,
} from "../utils";

const ResetPassword = () => {
  useUtils("Reset password");
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);
  const [user, setUser] = useState<INJWTPayload>();
  const [searchParams] = useSearchParams();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        newpassword: "",
        confirmnewpassword: "",
      },
      validationSchema: ResetPasswordSchema,
      onSubmit(values, formikHelpers) {
        resetPassword(values);
      },
    });

  const resetPassword = async (val: typeof values) => {
    setloading(true);
    try {
      const userValues = user!;
      const { data } = await axiosPublic.post<INResetPasswordResponse>(
        "/reset-password/",
        { ...val, ...userValues }
      );
      if (data.errors) {
        data.errors.forEach((err) => {
          toast.error(err);
        });
        setloading(false);
        return false;
      } else {
        toast.info("Password Reset You can now login");
        navigate("/sign-in");
      }
    } catch (error) {
      let err = error as AxiosError;
      console.log(err);
      toast.error(err.message);
    }
  };

  useEffect(() => {
    axiosPublic
      .post<INResetVerifyResponse>("/verify-reset-password/", {
        authToken: searchParams.get("authToken"),
      })
      .then(({ data }) => {
        if (data.errors) {
          toast.error("Link is Expired");
          navigate("/forgot-password");
        }

        setUser(data.user);
      })
      .catch((err) => {
        console.log(err);
        toast.error("UNKNOWN ERROR OCCURRED");
        navigate("/forgot-password");
      });

    return () => {};
  }, []);

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
                name="newpassword"
                handleBlur={handleBlur}
                handleChange={handleChange}
                label="New Password"
                error={errors.newpassword}
                touched={touched.newpassword}
                type={"password"}
                value={values.newpassword}
              />
            </div>

            <div className="mb-3">
              <CustomInput
                placeholder="*****"
                name="confirmnewpassword"
                handleBlur={handleBlur}
                handleChange={handleChange}
                label="Confirm New Password"
                error={errors.confirmnewpassword}
                touched={touched.confirmnewpassword}
                type={"password"}
                value={values.confirmnewpassword}
              />
            </div>

            <div className="smButton reg">
              <CustomSubmitBtn
                color="primary"
                text="Submit"
                loading={loading}
                type="submit"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
