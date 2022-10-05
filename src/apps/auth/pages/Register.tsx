import CustomInput from "@/components/CustomInput";
import CustomSubmitBtn from "@/components/CustomSubmitBtn";
import useExdata from "@/hooks/useExdata";
import { useAppDispatch, useAppSelector } from "@/hooks/useStore";
import useUtils from "@/hooks/useUtils";
import { axiosPublic } from "@/utils";

import { useFormik } from "formik";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { INFormValues, INRegisterResponse, RegisterSchema } from "../utils";

const Register = () => {
  useUtils("Create a new account");
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  useExdata();
  const existingEmails = useAppSelector((state) => state.user.existingEmails);
  const regSchema = RegisterSchema(existingEmails);

  const sendUser = async (formData: INFormValues) => {
    setloading(true);
    axiosPublic
      .post<INRegisterResponse>("/sign-up/", {
        email: formData.email,
        password: formData.password,
      })
      .then(({ data }) => {
        if (data.errors) {
          if (Array.isArray(data.errors)) {
            data.errors.forEach((err) => {
              toast.error(err);
            });
          }
        } else if (data.error) {
          toast.error(data.error);
        } else {
          toast.info(data.msg);
          navigate("/confirm-mail");
        }
      })
      .catch((e) => {
        console.log(e);
      });
    setloading(false);
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
        confirm_password: "",
      },
      validationSchema: regSchema,
      onSubmit(values, formikHelpers) {
        sendUser(values);
      },
    });

  return (
    <>
      <div className="auth-card">
        <div className="authCardHeader">
          <h2 className="font-weight-normal  ">
            Create new
            <br />
            <span>account</span> with us
          </h2>
          <h4>
            Already have an account? <Link to="/sign-in">click here</Link>
          </h4>
        </div>
        <div className="authCardBody">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
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

            <div className="mb-3">
              <CustomInput
                placeholder="****"
                name="confirm_password"
                handleBlur={handleBlur}
                handleChange={handleChange}
                label="Confirm Password"
                error={errors.confirm_password}
                touched={touched.confirm_password}
                type={"password"}
                value={values.confirm_password}
              />
            </div>

            <div className="smButton reg">
              <CustomSubmitBtn
                color="primary"
                text="Sign Up"
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

export default Register;
