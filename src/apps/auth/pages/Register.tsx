import CustomInput from "@/components/CustomInput";
import CustomSubmitBtn from "@/components/CustomSubmitBtn";

import { useFormik } from "formik";
import { Link } from "react-router-dom";
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

            <div className="smButton reg">
              <CustomSubmitBtn
                color="primary"
                text="Sign Up"
                loading={true}
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
