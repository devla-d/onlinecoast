import CustomInput from "@/components/CustomInput";
import CustomSubmitBtn from "@/components/CustomSubmitBtn";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { ForgotPasswordSchema } from "../utils";

const ForgotPassword = () => {
  const { values, errors, touched, handleBlur, handleChange } = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: ForgotPasswordSchema,
    onSubmit(values, formikHelpers) {},
  });
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
          <form>
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
                loading={true}
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
