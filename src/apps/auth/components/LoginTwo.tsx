import CustomInput from "@/components/CustomInput";
import CustomSubmitBtn from "@/components/CustomSubmitBtn";
import { useAppDispatch } from "@/hooks/useStore";
import { useFormik } from "formik";
import { useContext } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { LoginContext } from "../pages/Login";
import { loginUser } from "../slicer";
import { SecuritySchema } from "../utils";

const LoginTwo = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  let [searchParams] = useSearchParams();
  const nexTpage = searchParams.get("next")
    ? `${searchParams.get("next")}`
    : null;

  const ridirectUrl = nexTpage || "/dashboard";

  const { setloading, loading, storeDate } = useContext(LoginContext)!;
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        security_code: "",
      },
      validationSchema: SecuritySchema,
      onSubmit(values) {
        subMitData(values);
      },
    });

  const subMitData = (val: typeof values) => {
    setloading(true);
    const user = storeDate!.user;
    if (val.security_code != user.security_pin) {
      toast.error("Security pin is invalid");
      setloading(false);
      return false;
    }
    const FORMdata = storeDate!;
    dispatch(loginUser(FORMdata));
    navigate(ridirectUrl, { replace: false });
  };

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
          <form className="loginFormOnne" onSubmit={handleSubmit}>
            <div className="mb-3">
              <CustomInput
                placeholder="****"
                name="security_code"
                handleBlur={handleBlur}
                handleChange={handleChange}
                label="Security code"
                error={errors.security_code}
                touched={touched.security_code}
                type={"text"}
                value={values.security_code}
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
                <a
                  href="#"
                  onClick={() => {
                    navigate("/sign-in/");
                  }}
                >
                  Reset
                </a>
              </h2>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginTwo;
