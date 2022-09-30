import { createContext, useEffect, useState } from "react";
import Steps from "../components/Steps";
import { CreateAccManager, formDataI } from "../utils";

export const CreateAccContext = createContext<CreateAccManager | undefined>(
  undefined
);

const CreateAccountDetails = () => {
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

  const handleNextStep = (newData: formDataI) => {
    setformData((prev) => ({ ...prev, ...newData }));

    console.log("handling next page");
    setActivesteps((prev) => prev + 1);
  };

  const handlePrevStep = (newData: formDataI) => {
    console.log("prev", activeSteps);
    if (activeSteps === 0) {
      console.log(activeSteps);
    } else {
      setformData((prev) => ({ ...prev, ...newData }));
      setActivesteps((prev) => prev - 1);
    }
  };

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
      }}
    >
      <Steps />
    </CreateAccContext.Provider>
  );
};

export default CreateAccountDetails;
