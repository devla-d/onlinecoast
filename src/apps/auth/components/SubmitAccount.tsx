import { axiosPublic } from "@/utils";
import axios, { AxiosError } from "axios";
import { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { CreateAccContext } from "../pages/CreateAccountDetails";

const SubmitAccount = () => {
  const { formData } = useContext(CreateAccContext)!;
  var tr = 1;

  useEffect(() => {
    console.log(tr++, "mounting");
    let source = axios.CancelToken.source();
    axiosPublic
      .post("/create-account", formData, {
        cancelToken: source.token,
      })
      .then(({ data }) => {
        console.log(data);
      })
      .catch((e) => {
        let err = e as AxiosError;
        toast.error(err.message);
        console.log(e);
      });

    return () => {
      source.cancel("canceling token");
    };
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
