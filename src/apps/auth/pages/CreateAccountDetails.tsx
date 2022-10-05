import useUtils from "@/hooks/useUtils";
import { axiosPublic } from "@/utils";
import axios, { AxiosError } from "axios";
import { createContext, useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import Steps from "../components/Steps";
import { CreateAccManager, formDataI, INSignUpVerify } from "../utils";

export const CreateAccContext = createContext<CreateAccManager | undefined>(
  undefined
);

const CreateAccountDetails = () => {
  useUtils("Complete account setup");
  const navigate = useNavigate();
  const [verifyData, setverifyData] = useState<INSignUpVerify>();
  const [formData, setformData] = useState<formDataI>({
    first_name: "",
    last_name: "",
    phone_number: "",
    date_of_birth: "",
    gender: "",
    next_of_kin: "",
    street_name: "",
    city: "",
    state: "",
    country: "",
    zipcode: "",

    security_pin: "",
    account_type: "",
    profile_img: undefined,
  });
  const [activeSteps, setActivesteps] = useState(0);
  const [loading, setloading] = useState(false);
  const [searchParams] = useSearchParams();

  const handleNextStep = (newData: formDataI) => {
    setformData((prev) => ({ ...prev, ...newData }));

    setActivesteps((prev) => prev + 1);
  };

  const handlePrevStep = (newData: formDataI) => {
    if (activeSteps === 0) {
      console.log(activeSteps);
    } else {
      setformData((prev) => ({ ...prev, ...newData }));
      setActivesteps((prev) => prev - 1);
    }
  };

  useEffect(() => {
    if (!searchParams.get("authToken")) {
      toast.error("The  link was invalid");
      navigate("/sign-up");
    }
    let source = axios.CancelToken.source();
    axiosPublic
      .post<INSignUpVerify>(
        "/sign-up-verify",
        { token: searchParams.get("authToken") },
        {
          cancelToken: source.token,
        }
      )
      .then(({ data }) => {
        if (data.error) {
          toast.error("The confirmation link was invalid");
          navigate("/sign-up");
        } else {
          setverifyData(data);
        }
      })
      .catch((e) => {
        console.log(e);
      });

    return () => {
      source.cancel("canceling request");
    };
  }, []);

  return (
    <CreateAccContext.Provider
      value={{
        formData,
        setformData,
        activeSteps,
        setActivesteps,
        loading,
        setloading,
        handleNextStep,
        handlePrevStep,
        verifyData,
      }}
    >
      <Steps />
    </CreateAccContext.Provider>
  );
};

export default CreateAccountDetails;
