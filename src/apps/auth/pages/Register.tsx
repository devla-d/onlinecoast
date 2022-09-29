import CustomInput from "@/components/CustomInput";
import CustomSubmitBtn from "@/components/CustomSubmitBtn";

import { useFormik } from "formik";
import { RegisterSchema } from "../utils";

const Register = () => {
  const regSchema = RegisterSchema(["samm@mail.com", "admin@mail.com"]);

  const { values, errors, touched, handleBlur, handleChange } = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: regSchema,
    onSubmit(values, formikHelpers) {
      console.log(values);
    },
  });

  console.log(errors);

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
            Already have an account? <a href="#">click here</a>
          </h4>
        </div>
        <div className="authCardBody">
          <form>
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

            <div className="smButton">
              <CustomSubmitBtn
                color="primary"
                text="Sign Up"
                loading={true}
                type="submit"
              />
              <h2>
                <a href="#">Forgot password?</a>
              </h2>
            </div>
          </form>
        </div>
      </div>
      <div className="imGBox">
        <img src="/home/logo.png" alt="Logo" />
      </div>
    </>
  );
};

export default Register;
