import CustomInput from "@/components/CustomInput";
import CustomSubmitBtn from "@/components/CustomSubmitBtn";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { Loginschema } from "../utils";

const Login = () => {
  const { values, errors, touched, handleBlur, handleChange } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Loginschema,
    onSubmit(values, formikHelpers) {},
  });
  return (
    <>
      <div className="auth-card">
        <div className="authCardHeader">
          <h2 className="font-weight-normal  ">
            Login into
            <br />
            your
            <span>account</span>
          </h2>
          <h4>
            Don`t have an account? <Link to="/sign-up">click here</Link>
          </h4>
        </div>
        <div className="authCardBody">
          <form>
            <div className="mb-3">
              <CustomInput
                placeholder="*****"
                name="username"
                handleBlur={handleBlur}
                handleChange={handleChange}
                label="Username"
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
    </>
  );
};

export default Login;
