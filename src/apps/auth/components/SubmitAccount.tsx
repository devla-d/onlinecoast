import { axiosPublic } from "@/utils";
import axios, { AxiosError } from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { CreateAccContext } from "../pages/CreateAccountDetails";

const SubmitAccount = () => {
  const navigate = useNavigate();
  const { formData, verifyData } = useContext(CreateAccContext)!;
  const _verifyData = verifyData!.user!;
  const finalData = { ...formData, ..._verifyData };

  console.log(finalData);
  var tr = 1;

  useEffect(() => {
    console.log(tr++, "mounting");
    let source = axios.CancelToken.source();
    axiosPublic
      .post("/create-new-account", finalData, {
        cancelToken: source.token,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(({ data }) => {
        if (data.msg) {
          toast.info("Account Created Please Loging");
          navigate("/sign-in");
        }
      })
      .catch((e) => {
        let err = e as AxiosError;
        if (err.response?.data) {
          let em = err.response.data as any;
          toast.error(em.error);
        }
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
