import { useContext, useEffect } from "react";
import { CreateAccContext } from "../pages/CreateAccountDetails";

const SubmitAccount = () => {
  const { formData } = useContext(CreateAccContext)!;
  useEffect(() => {
    console.log(formData);
    return () => {};
  }, []);

  return (
    <>
      <>
        <div className="auth-card">
          <div className="authCardHeader">
            <h2 className="font-weight-normal  ">
              Form
              <span> Submit</span>
            </h2>
          </div>
          <div className="authCardBody">
            <form>
              <div className="text-center">
                <h3>
                  <i className="fa fa-spinner fa-spin fa-2x"></i>
                </h3>
                <h1>Please wait ..</h1>
              </div>
            </form>
          </div>
        </div>
      </>
    </>
  );
};

export default SubmitAccount;
